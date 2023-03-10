import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import WeatherMap from "./WeatherMap";
import "./Home.css";
import Input from "./Input";
import "./Input.css";
import MyCard from "./MyCard";
import MyCarousel from "./MyCarousel";
import MyTable from "./MyTable";
import { PuffLoader } from "react-spinners";
import MyStars from "./MyStars";

function Home() {
  const apiKey = "42a77eb18d462ab5e0d7e807ee2f659f";
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [foundLocation, setFoundLocation] = useState(true);

  const getWeather = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (event.key === "Enter") {
          setWeather(data);
          setCity("");
        }
      });
    console.log("weather is" + weather);
    console.log(weather.cod);
    //check if dat is valid
    if (
      weather.cod === "404" ||
      weather.cod === "400" ||
      weather.cod == "undefined"
    ) {
      setFoundLocation(false);
    } else {
      setFoundLocation(true);
    }
  };
  function updateCity(lat, lon) {
    console.log("Latitude:", lat, "Longitude:", lon);
    fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCity(data[0].name);
        //call get weather function
      });
  }
  return (
    <>
      <MyStars />
      {typeof weather.main === "undefined" ? (
        <div className="container">
          <input
            className="input"
            placeholder="Enter a city..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
          ></input>
          <PuffLoader color="white" />
          {weather.cod === "404" || weather.cod === "400" ? (
            <p
              style={{
                color: "#bbc4df",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              ...Location was not found...
            </p>
          ) : null}
        </div>
      ) : (
        <div>
          <div className="container">
            <input
              className="input"
              placeholder="Enter Location..."
              onChange={(e) => setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
            ></input>
          </div>
          <div className="main-container" style={{ marginBottom: "60px" }}>
            <div
              className="left-container"
              style={{
                width: "57.6%",
                height: "80%",
                marginTop: "60px",
                marginLeft: "60px",
                borderRadius: "5px",
              }}
            >
              <div
                className="map-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {typeof weather.main === "undefined" ? (
                  <div>Welcome! Enter a location</div>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          backgroundColor: "white",
                          border: "1px none white",
                          borderTopLeftRadius: "7px",
                          borderTopRightRadius: "7px",
                        }}
                      >
                        <div className="weather-widget">
                          <div className="loc-container">
                            <p className="loc">
                              {weather.name}, {weather.sys.country}
                            </p>
                            <img
                              className="icon"
                              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                              alt="weather icon"
                            />
                          </div>
                          <p
                            className="temp"
                            style={{ fontWeight: "bold", color: "#000000" }}
                          >
                            <span
                              style={{ fontWeight: "normal", font: "40px" }}
                            >
                              {Math.round(weather.main.temp - 273.15)}??C
                            </span>
                          </p>
                          <p
                            className="humidity"
                            style={{ fontWeight: "bold", color: "#000000" }}
                          >
                            Humidity:{" "}
                            <span style={{ fontWeight: "normal" }}>
                              {weather.main.humidity}%
                            </span>
                          </p>

                          <p
                            className="windSpeed"
                            style={{ fontWeight: "bold" }}
                          >
                            Wind Speed:{" "}
                            <span style={{ fontWeight: "normal" }}>
                              {weather.wind.speed}km/h
                            </span>
                          </p>

                          <p className="desc">
                            {weather.weather[0].description}
                          </p>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <WeatherMap
                          lon={weather.coord.lon}
                          lat={weather.coord.lat}
                          updateCity={updateCity}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="Right-container">
                {console.log(city)}
                <MyCarousel
                  city={weather.name}
                  country={weather.sys.country}
                  desc={weather.weather[0].description}
                />
                <div
                  className="table-container"
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    border: "1px none white",
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                    marginLeft: "5px",
                    marginTop: "5px",
                  }}
                >
                  <MyTable lon={weather.coord.lon} lat={weather.coord.lat} />
                </div>
              </div>
            </div>
            <MyCard lon={weather.coord.lon} lat={weather.coord.lat} />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
