import { React } from "react";
import HomePage from "./HomePage";

export default function HomePageMotions(props) {
  console.log(props);

  return (
    <div className="home-page-motions">
      {props.motions.map((i, t) => {
        return (
          <div
            className="home-motion-tile"
            key={t}
            onClick={() => props.handleClick(i.id)}
          >
            Motion-title: {i.title} <br></br>Motion-owner: {i.owner_id.name}{" "}
          </div>
        );
      })}
    </div>
  );
}
