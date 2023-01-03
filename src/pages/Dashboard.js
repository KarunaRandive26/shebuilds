import React from "react";
const Dashboard = () => {
    return (
        <>
            <div className="personal-info">
                <div className="user user-profile">
                    <img className="profile-pic" src="../images/profile.jpeg"/>
                </div>
                <div className="user user-info">
                    <div>Field:</div>
                    <div>Data</div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;