import React, { useState } from "react";
import "./MotionCreationPage.css";
import MultiSelector from "./../../components/MultiSelector/MultiSelector";

export default function MotionCreationPage() {
  const [selectedRestaurants, setSelectedRestaurants] = useState([1, 3]);

  const action = 1;
  switch (action) {
    case 1:
      return (
        <div className="motion-creation-page-1">
          <h1>Choose {4 - selectedRestaurants.length} Restaurants!</h1>
          <div className="creation-view">
            <MultiSelector
              itemType="Restaurants"
              data={[
                { dat: 1 },
                { dat: 2 },
                { dat: 3 },
                { dat: 4 },
                { dat: 1 },
                { dat: 2 },
                { dat: 3 },
                { dat: 4 },
                { dat: 1 },
                { dat: 2 },
                { dat: 3 },
                { dat: 4 },
              ]}
              selectedRestaurants={selectedRestaurants}
              setSelectedRestaurants={(newSelected) =>
                setSelectedRestaurants(newSelected)
              }
            />
            <div>SELECTED ITEMS</div>
          </div>
        </div>
      );
    case 2:
      return <div>2</div>;

    case 3:
      return <div>3</div>;
  }
}
