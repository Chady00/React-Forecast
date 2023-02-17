# React-Forecast
Technologies Used : 
* Tailwind
* React-LeafLet
* OpenWeatherApi
* Unsplash Api
* React-Bootstrap
* React-spinners

A react website that displays weather information for a given location.
The components use the OpenWeatherMap API to fetch weather data based on the location entered by the user. The home page contains a form input where the user can enter the location, and when the user presses the enter key, the weather data is fetched and displayed on the screen. The Home-Component uses the useState and useEffect hooks to manage the state of the application, and the data is displayed using several components, including MyCard, MyCarousel, and MyTable.

![image](https://user-images.githubusercontent.com/84717550/219749710-4ee10aa3-63c6-4e75-a0ac-caf8cb9c89e8.png)

The component also uses the react-leaflet library to display a map of the location.
It uses the OpenWeatherMap API to retrieve data based on the provided latitude and longitude values. The component state is managed using the useState hook, and the useEffect hook is used to fetch the data when the component is mounted. The getData function makes the API call and sets the response data to the component state.

![image](https://user-images.githubusercontent.com/84717550/219749898-e2a14723-d82b-4f29-bb8e-32bf411de887.png)


The components return a div container that hold multiple cards, each displaying the weather forecast for a different day. The card header shows the day of the week, and the body displays the weather description, weather icon, and the minimum and maximum temperature.

Please note that the API key used in this project is not protected because there is no backend involved. The key is public and can be accessed by anyone who has access to the source code. It is recommended to protect your API keys when working with backends to avoid unauthorized access to your services.
