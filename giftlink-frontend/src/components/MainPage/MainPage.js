import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlConfig } from "../../config";

function MainPage() {
  const [gifts, setGifts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        let url = `${urlConfig.backendUrl}/api/gifts`;
        const response = await fetch(url);
        console.log("Fetch response:", response);
        console.log("Fetch response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setGifts(data);
      } catch (error) {
        console.error("Error fetching gifts:", error);
      }
    };

    fetchGifts();
  }, []);

  // Task 2: Navigate to details page
  const goToDetailsPage = (productId) => {
    // Write your code below this line
    navigate(`/app/product/${productId}`);
  };

  // Task 3: Format timestamp
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getConditionClass = (condition) => {
    return condition === "New"
      ? "list-group-item-success"
      : "list-group-item-warning";
  };

  return (
    <div className="container mt-5">
      <div className="row w-100">
        {gifts.map((gift) => (
          <div key={gift.id || gift._id} className="col-lg-4 col-md-6 mb-8">
            <div className="card product-card">
              <div className="image-placeholder">
                {gift.image ? (
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="card-img-top"
                  />
                ) : (
                  <div className="no-image-available">No Image Available</div>
                )}
              </div>

              <div className="card-body">
                <h5 className="card-title">{gift.name}</h5>

                <p className={`card-text ${getConditionClass(gift.condition)}`}>
                  {gift.condition}
                </p>

                <p className="card-text">{formatDate(gift.date_added)}</p>

                <button
                  onClick={() => goToDetailsPage(gift.id)}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
