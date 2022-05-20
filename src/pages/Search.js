import { useEffect, useState } from "react";
import { CustomerList } from "../components/CustomerList";
import { SearchBar } from "../components/SearchBar";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [customers, setCustomers] = useState([]);

  const handleSearchTermChange = (newSearchTerm) => {
    navigate(`/search?city=${newSearchTerm}`);
  };

  const cityName = searchParams.get("city");
  console.log("city: ", cityName);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/customers");
        setCustomers(response.data);
      } catch (err) {
        // console.log(err);
        alert(err);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <SearchBar onSearchTermChange={handleSearchTermChange} />
      <CustomerList
        customers={
          cityName === "" || cityName === null || cityName === undefined
            ? customers
            : customers.filter((customer) => {
                if (customer.address.city === cityName) {
                  return true;
                } else {
                  return false;
                }
              })
        }
      />
    </>
  );
}

export default Search;
