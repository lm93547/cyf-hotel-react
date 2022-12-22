import React from "react";
import Moment from "react-moment";

function SearchResults({ results }) {
  const tableHeaders = [
    "Number",
    "Title",
    "First Name",
    "Surname",
    "E-mail",
    "Room-ID",
    "Check in date",
    "Check out date",
    "Number of days"
  ];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {tableHeaders.map(header => {
            return <th scope="col">{header}</th>;
          })}
        </tr>
      </thead>
      {results.map((item, i) => {
        return (
          <tbody key={i}>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>
                <Moment format="DD-MM-YYYY">{item.checkInDate}</Moment>
              </td>
              <td>
                <Moment format="DD-MM-YYYY">{item.checkOutDate}</Moment>
              </td>
              <td>
                <Moment diff={item.checkInDate} unit="days">
                  {item.checkOutDate}
                </Moment>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default SearchResults;
