import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const NewCustomer = () => {
  const [customerNew, setCustomerNew] = useState({});
  const [validateData, setValidationData] = useState();
  const[submitDisabled,setSubmitDisabled]=useState(true);
  const [validation, setValidation] = useState({
    id: false,
    contactName: false,
    contactTitle: false,
    companyName: false,
    street: false,
    city: false,
    country: false,
    postalCode: false,
    phone: false,

  });
  const createCustomer = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/customers/`,
        customerNew
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log(validation);
    let checked = false;
    const keys = Object.keys(validation);
    for (let i = 0; i < keys.length; i++) {
      console.log(`feld${keys[i]}gültig?${validation[keys[i]]}`);
      if (validation[keys[i]] === false) {
        checked = true;
        break;
      }
    }
    setSubmitDisabled(checked);
  }, [validation])

  return (
    <div>
      <form>
        <div>
          <label>Id: </label>
          <input
            type="text"
            // minLength={5}
            // maxLength={5}
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({ ...customerNew, id: e.target.value });
            }}
            onBlur={(e) => validateData("id", e.target.value)}
          />
        </div>
        <div>
          <label>Contact Name: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({ ...customerNew, contactName: e.target.value });
            }}
            onBlur={(e) => validateData("contactName", e.target.value)}
          />
        </div>
        <div>
          <label>Contact Title: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({
                ...customerNew,
                contactTitle: e.target.value
              });
              console.log(customerNew);
            }}
            onBlur={(e) => validateData("contactTitle", e.target.value)}

          />
        </div>
        <div>
          <label>Company Name: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({ ...customerNew, companyName: e.target.value });
            }}
            onBlur={(e) => validateData("companyName", e.target.value)}
          />
        </div>
        <div>
          <label>Company City: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({
                ...customerNew,
                address: { ...customerNew.address, city: e.target.value }
              });
            }}
            onBlur={(e) => validateData("city", e.target.value)}
          />
        </div>
        <div>
          <label>Company Street: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({
                ...customerNew,
                address: { ...customerNew.address, street: e.target.value }
              });
            }}
            onBlur={(e) => validateData("street", e.target.value)}

          />
        </div>
        <div>
          <label>Country: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({
                ...customerNew,
                address: { ...customerNew.address, country: e.target.value }
              });
            }}
            onBlur={(e) => validateData("country", e.target.value)}

          />
        </div>
        <div>
          <label>ZIP: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({
                ...customerNew,
                address: {
                  ...customerNew.address,
                  postalCode: e.target.value
                }
              });
            }}
            onBlur={(e) => validateData("ZIP", e.target.value)}

          />
        </div>
        <div>
          <label>Tel: </label>
          <input
            type="text"
            required
            defaultValue=""
            onChange={(e) => {
              setCustomerNew({
                ...customerNew,
                address: { ...customerNew.address, phone: e.target.value }
              });
            }}
            onBlur={(e) => validateData("tel", e.target.value)}
          />
        </div>

        <button disabled={submitDisabled} onClick={() => createCustomer()}>Create</button>
      </form>
    </div>
  );
};

export default NewCustomer;
