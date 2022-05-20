import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.scss";
import { FaPen } from "react-icons/fa";
function Customer() {
  const [details, setDetails] = useState({});
  const [editable, setEditable] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const saveDetails = async () => {
    try {
      const request = await axios.patch(
        `http://localhost:3000/customers/${details.id}`,
        details
      );
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCustomer = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/customers/${details.id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:3000/customers/" + params.id
          `http://localhost:3000/customers/${params.id}`
        );
        setDetails(response.data);
      } catch (err) {
        alert(err);
      }
    };
    loadData();
  }, [params.id]);

  return (
    <>
      <div className="customerGrid">
        <FaPen className="icon" onClick={() => setEditable(!editable)} />
        {Object.keys(details).length > 0 ? (
          <>
            <h2 style={{ gridArea: "header" }}>
              <span className="text-highlight">
                {details.companyName} (Id: {params.id})
              </span>
            </h2>
            <div style={{ gridArea: "label1", fontWeight: "bold" }}>
              Contact
            </div>
            <div style={{ gridArea: "userinfo1" }}>
              {editable ? (
                <input
                  type="text"
                  defaultValue={details.contactName}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(details);
                    setDetails({
                      ...details,
                      contactName: e.target.value
                    });
                  }}
                />
              ) : (
                <span>{details.contactName}</span>
              )}
              <br />
              {editable ? (
                <input
                  type="text"
                  defaultValue={details.contactTitle}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(details);
                    setDetails({
                      ...details,
                      contactTitle: e.target.value
                    });
                  }}
                />
              ) : (
                <span>{details.contactTitle}</span>
              )}
            </div>
            <div style={{ gridArea: "label2", fontWeight: "bold" }}>
              Location
            </div>
            <div style={{ gridArea: "userinfo2" }}>
              {editable ? (
                <input
                  type="text"
                  defaultValue={details.address?.street}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(details);
                    setDetails({
                      ...details,
                      address: {
                        street: e.target.value,
                        postalCode: details.address?.postalCode,
                        city: details.address?.city,
                        country: details.address?.country,
                        phone: details.address?.phone
                      }
                    });
                  }}
                />
              ) : (
                <span>{details.address?.street}</span>
              )}

              {editable ? (
                <input
                  type="text"
                  defaultValue={details.address?.postalCode}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(details);
                    setDetails({
                      ...details,
                      address: {
                        street: details.address?.street,
                        postalCode: e.target.value,
                        city: details.address?.city,
                        country: details.address?.country,
                        phone: details.address?.phone
                      }
                    });
                  }}
                />
              ) : (
                <span>{details.address?.postalCode}</span>
              )}
              {editable ? (
                <input
                  type="text"
                  defaultValue={details.address?.city}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(details);
                    setDetails({
                      ...details,
                      address: {
                        street: details.address?.street,
                        postalCode: details.address?.postalCode,
                        city: e.target.value,
                        country: details.address?.country,
                        phone: details.address?.phone
                      }
                    });
                  }}
                />
              ) : (
                <span>{details.address?.city}</span>
              )}

              <p>
                {editable ? (
                  <input
                    type="text"
                    defaultValue={details.address?.country}
                    onChange={(e) => {
                      console.log(e.target.value);
                      console.log(details);
                      setDetails({
                        ...details,
                        address: {
                          street: details.address?.street,
                          postalCode: details.address?.postalCode,
                          city: details.address?.city,
                          country: e.target.value,
                          phone: details.address?.phone
                        }
                      });
                    }}
                  />
                ) : (
                  <span>{details.address?.country}</span>
                )}
              </p>
            </div>
            <div style={{ gridArea: "label3", fontWeight: "bold" }}>Phone</div>
            <div style={{ gridArea: "userinfo3" }}>
              {editable ? (
                <input
                  type="text"
                  defaultValue={details.address?.phone}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(details);
                    setDetails({
                      ...details,
                      address: {
                        street: details.address?.street,
                        postalCode: details.address?.postalCode,
                        city: details.address?.city,
                        country: details.address?.country,
                        phone: e.target.value
                      }
                    });
                  }}
                />
              ) : (
                <span>{details.address?.phone}</span>
              )}
              <br />
              <button
                onClick={() => saveDetails()}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: 4,
                  borderStyle: "none",
                  padding: 6,
                  marginTop: 4
                }}
              >
                Speichern
              </button>

              <button
                onClick={() => setConfirmDelete(true)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: 4,
                  borderStyle: "none",
                  padding: 6,
                  marginLeft: 10
                }}
              >
                Löschen
              </button>
            </div>
          </>
        ) : (
          <div>Keine Kundendaten vorhanden!</div>
        )}
      </div>
      {confirmDelete ? (
        <dialog open>
          <p style={{ textAlign: "center" }}>Wirklich löschen, echt jetzt?</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "stretch",
              justifyContent: "center"
            }}
          >
            <button
              onClick={() => {
                deleteCustomer();
                setConfirmDelete(false);
                navigate("/");
              }}
              style={{ flexGrow: 1, margin: 5 }}
            >
              Ja
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              style={{ flexGrow: 1, margin: 5 }}
            >
              Nein
            </button>
          </div>
        </dialog>
      ) : undefined}
    </>
  );
}

export default Customer;
