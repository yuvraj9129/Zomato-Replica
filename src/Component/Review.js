import React from "react";

function Review(prop) {
  const [review, setReview] = React.useState([]);
  const API_KEY = "bab7f707b72ea0b1154b7d786a9f05e4";

  const baseUrl = `https://developers.zomato.com/api/v2.1/reviews?res_id=${prop.id}`;

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
          setReview(item.user_reviews);
        })
      )
    );
  }, [baseUrl]);

  return (
    <div class="row">
      <div class="col s12 m12">
        <h3>Reviews by Customers</h3>

        {review.map((data) => {
          // console.log(data.review)
          return (
            <div className="z-depth-2">
              <br></br>
              <h5>Name :{data.review.user.name}</h5>
              <p>{data.review.review_text}</p>
              <p>Rating :{data.review.rating}⭐</p>
              <p>Review Text:{data.review.rating_text}</p>
              <p>Like :{data.review.likes}👍</p>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
