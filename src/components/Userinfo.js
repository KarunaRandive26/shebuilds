import React from "react";
const Userinfo = () => {
    return (
        <>
            <div class="row profilecard">
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Username</div>
                        <div className="data">Jenny Anderson</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Email</div>
                        <div className="data">jenny@gmail.com</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Phone</div>
                        <div className="data">1245781245</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Gender</div>
                        <div className="data">Female</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Nationality</div>
                        <div className="data">India</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Languauge</div>
                        <div className="data">English</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">City</div>
                        <div className="data">Khed</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">State</div>
                        <div className="data">Maharastra</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Password</div>
                        <div className="data">jenny@1234</div>
                    </div>
                </div>
            </div>
            <div className="me-auto"><div className="edit btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputLanguage" class="form-label">Languauge</label>
                                        <select id="inputLanguage" class="form-select">
                                            <option selected>English</option>
                                            <option>Marathi</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputPhone" class="form-label">Phone</label>
                                        <input type="number" maxlength="10" class="form-control" id="inputPhone" placeholder="Phone" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputGender" class="form-label">Gender</label>
                                        <select id="inputGender" class="form-select">
                                            <option selected>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputNation" class="form-label">Nationality</label>
                                        <select id="inputNation" class="form-select">
                                            <option selected>India</option>
                                            <option>Germany</option>
                                            <option>Russia</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCity" class="form-label">City</label>
                                        <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" class="form-label">State</label>
                                        <select id="inputState" class="form-select">
                                            <option selected>Maharastra</option>
                                            <option>Madhyapradesh</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="inputZip" />
                                    </div>


                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Userinfo;