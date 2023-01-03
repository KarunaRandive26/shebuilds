import React from "react";


const Dashboard = () => {
    return (
        <>
            <div className="personal-info">
                <div className="user user-profile ">
                    <img className="profile-pic" src="../images/profile.jpeg" />
                </div>
                <div className="user user-info">
                    <table class="table">

                        <tbody>
                            <tr>
                                <td className="field">Username:</td>
                                <td>Jenny</td>
                            </tr>
                            <tr>
                                <td className="field">Email:</td>
                                <td>jenny@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="field">Phone:</td>
                                <td>9111111540</td>
                            </tr>
                            <tr>
                                <td className="field">Occupation:</td>
                                <td>Fashion Designer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;