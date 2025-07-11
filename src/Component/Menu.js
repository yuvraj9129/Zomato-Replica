import React from "react";

function Menu(prop) {
  const [review, setReview] = React.useState([]);
  const API_KEY = "bab7f707b72ea0b1154b7d786a9f05e4";

  const baseUrl = `https://developers.zomato.com/api/v2.1/dailymenu?res_id=${prop.id}`;

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
          // console.log(item);
          setReview(item);
        })
      )
    );
  }, [baseUrl]);

  return (
    <div class="row m12 ">
      <div class="col s12 m12">
        <h4>Daily Menu</h4>
        <div class="card-panel teal">
          <span class="white-text">{review.message}</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
