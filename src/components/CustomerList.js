import { useNavigate } from "react-router-dom";


export const CustomerList = ({ customers }) => {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th>Kundennr.</th>
          <th>Firma</th>
          <th>Adresse</th>
        </tr>
      </thead>
      <tbody>
        {customers.length > 0 ? (
          customers.map((customer, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  navigate(`/customers/${customer.id}`);
                }}
              >
                <td>{customer.id}</td>

                <td>{customer.companyName}</td>
                <td>
                  {customer.address.street}, {customer.address.city}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>Keine Kunden gefunden.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
