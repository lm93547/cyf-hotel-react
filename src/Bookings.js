import React, { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import SearchResults from "./components/Search/SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const searchCustomer = searchVal => {
    console.info("TO DO!", searchVal);
    return customerFound;
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={searchCustomer} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
