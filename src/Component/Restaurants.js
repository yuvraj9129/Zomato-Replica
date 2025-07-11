import React from "react";
import Cards from "./Cards";

function Restaurants(prop) {
  console.log(prop.query);
  const API_KEY = "bab7f707b72ea0b1154b7d786a9f05e4";
  const baseUrl = `https://developers.zomato.com/api/v2.1/search?entity_type=metro&lat=12.9716&lon=77.5946&count=8&category=${prop.query}&order=asc`;
  let data = [];
  let [datar, setData] = React.useState([]);

  if (prop.checked === "cuisine") {
  } else if (prop.checked === "restaurant") {
  }
  React.useEffect(() => {
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user-key": API_KEY
      }
    }).then((data) =>
      console.log(
        data.json().then((item) => {
          //console.log(item.restaurants);
          const trueData = item.restaurants.map((restaurant) => {
            return {
              id: restaurant.restaurant.id,
              name: restaurant.restaurant.name,
              thumb: restaurant.restaurant.thumb,
              cuisines: restaurant.restaurant.cuisines,
              address: restaurant.restaurant.location.address,
              featuredImg: restaurant.restaurant.featured_image,
              locality: restaurant.restaurant.location.locality_verbose,
              position: {
                lat: parseFloat(restaurant.restaurant.location.latitude),
                lng: parseFloat(restaurant.restaurant.location.longitude)
              }
            };
          });
          setData(trueData);
        })
      )
    );
  }, [baseUrl]);

  console.log(datar.length);

  return (
    <div className="container">
      {datar.length >= 1 ? (
        <div class="row">
          {datar.map((user) => {
            //console.log(user);

            return (
              <div class="col s4">
                <Cards data={user}></Cards>;
              </div>
            );
          })}
        </div>
      ) : (
        <h5>Loding🍞🧀🍗</h5>
      )}
    </div>
  );
}

export default Restaurants;
