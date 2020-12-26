import React, { useState } from "react";
import "./MotionCreationPage.css";
import MultiSelector from "./../../components/MultiSelector/MultiSelector";
import SelectedItems from "../../components/MultiSelector/SelectedItems/SelectedItems";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function MotionCreationPage() {
  const [selectedRestaurants, setSelectedRestaurants] = useState([1, 3]);
  const [action, setAction] = useState(1);
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
            <div id="vertically-aligned-items">
              <SelectedItems selectedRestaurants={selectedRestaurants} />
              <button
                className={
                  selectedRestaurants.length === 4
                    ? "move-on-button move-on"
                    : "move-on-button"
                }
                // disabled={selectedRestaurants.length !== 4}
                onClick={() => setAction(action + 1)}
              >
                <IconContext.Provider value={{ size: "30px" }}>
                  <FaLongArrowAltRight />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="motion-creation-page-2">
          <h1>Choose {4 - selectedRestaurants.length} Restaurants!</h1>
        </div>
      );

    case 3:
      return <div>3</div>;
  }
}
