import { React } from "react";
import HomePage from "./HomePage";

export default function HomePageMotions(props) {
  console.log(props);

  return (
    <div className="home-page-motions">
      {props.motions.map((i, t) => {
        return (
          <div
            className={
              i.status
                ? "home-motion-tile closed-motion-tile"
                : "home-motion-tile "
            }
            key={t}
            onClick={() => props.handleClick(i.id)}
          >
            <div className="motion-tile-text">
              <h3>{i.title}</h3>
              <div className="invited-by">
                <span style={{ color: "rgb(0, 0, 0, 0.5)" }}>
                  <em>Invited by</em>
                </span>{" "}
                {i.owner_id.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
