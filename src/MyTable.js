import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function MyTable(props) {
  const apiKey = "42a77eb18d462ab5e0d7e807ee2f659f";
  const [CardData2, setCardData2] = useState([]);
  const getData = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCardData2(data.list.slice(0, 2)); //only contains list[0:5]
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{ height: "100%" }}>
        {CardData2.length !== 0 && (
          <Table responsive="sm" style={{ height: "100%" }}>
            <thead>
              <tr>
                <th></th>
                <th>Feels Like</th>
                <th>Wind Speed</th>
                <th>Rain Strength</th>
                <th>Sea Level</th>
                <th>Humidity level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>{CardData2[0].main.feels_like}</td>
                <td>{CardData2[0].wind["speed"]}</td>
                <td>N/A</td>
                <td>{CardData2[0].main["sea_level"]}</td>
                <td>{CardData2[0].main["humidity"]}</td>
              </tr>

              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}

export default MyTable;
