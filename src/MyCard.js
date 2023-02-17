import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./MyCard.css";

function MyCard(props) {
  const apiKey = "42a77eb18d462ab5e0d7e807ee2f659f";
  const [CardData, setCardData] = useState([]);

  const getData = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCardData(data.list.slice(0, 6)); //only contains list[0:5]
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(CardData);
  return (
    <>
      <div className="cards-container">
        {CardData &&
          CardData.map((item, index) => {
            //calculate the current day + index
            const currentDay = new Date(
              Date.now() + index * 24 * 60 * 60 * 1000
            ).toLocaleDateString("default", { weekday: "long" });
            return (
              <Card
                className="simple-card"
                border="light"
                style={{ width: "14rem" }}
                key={index}
              >
                <Card.Header
                  className="simple-card-header"
                  style={{ backgroundColor: "#E1EFFA" }}
                >
                  <div
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {currentDay}
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ fontSize: "17px" }}>
                    <img
                      className="card-icon"
                      src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                      alt=""
                    />
                    {console.log(item.weather[0].icon)}
                    {item.weather[0].description.charAt(0).toUpperCase() +
                      item.weather[0].description.slice(1)}
                  </Card.Title>
                  <Card.Text>
                    Min: {Math.round(item.main.temp_min - 273.15)}°C &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max:{" "}
                    {Math.round(item.main.temp_max - 273.15)}°C
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default MyCard;
