import React from "react";
import NewSetup from "./NewSetup";
import SetBuis from "./SetBuis";
const BuisSetup = () => {
    return (
      <>
        <div className="profile-template">
          <div className="pro-line">My Buisness</div>
          <div className="buis-board">
            <div className="col board-page">
                <a className="buis-card" href="/"><SetBuis/></a>
                <a className="buis-card" href="/setbuisness"><NewSetup/></a>
            </div>
          </div>
        </div>
      </>
    
    );
  };

  export default BuisSetup;