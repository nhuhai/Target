import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import CombinedShape from "../CombinedShape/CombinedShape.jsx";
import infoIcon from "./InfoIcon.svg";
import watchIcon from "./WatchIcon.svg";
import "./TeamCard.css";

export default function TeamCard() {
  return (
    <CombinedShape
      className="team-card-panel Combined-Shape"
      ariaLabel="Oakland team"
    >
      <GroupsIcon className="team-card-panel__team-icon" aria-hidden="true" />
      <div className="team-card-panel__copy">
        <div className="team-card-panel__title">
          OAKLAND TEAM
          <img
            className="ic_info_outline-copy-2"
            src={infoIcon}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div>Coach Name</div>
        <div>4 Targets</div>
      </div>
      <div className="team-card-panel__watch-count">4</div>
      <img className="ic_clear" src={watchIcon} alt="" aria-hidden="true" />
    </CombinedShape>
  );
}
