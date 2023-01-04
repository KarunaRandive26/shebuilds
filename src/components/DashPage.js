import React from "react";
import Userinfo from "./Userinfo";

const DashPage = () => {
    return (
      <>
        <div className="profile-template">
          <div className="pro-line">Profile</div>
          <div className="page-1">
          <div className="user-profile">
            <div className="profile-photo me-auto">
              <div className="prof profile-pic"></div>
              <div className="prof profile-info">
                <div className="Pro-name">Jenny Anderson</div>
                <div className="Pro-mail">jenny@gmail.com</div>
              </div>
            </div>
          </div>
          <Userinfo/>
        </div>
        </div>
      </>
    
    );
  };

  export default DashPage;