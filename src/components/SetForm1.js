import React from "react";
const SetForm = () => {
    return (
        <>
            <div class="box mx-auto">
            <div className="box-b">
                <h3 class="text">Tell us about your business</h3>
                <form class="container-a">
                    <label for="Sell" class="form-label">Are you selling yet?</label><br />
                    <select name="sell" id="sell" class="box-a">
                        <option value="Select">--Select--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />

                    <label for="CAR" class="form-label">Current Annual Revenue</label><br />
                    <select name="CAR" id="CAR" class="box-a">
                        <option value="Select">--Select--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />

                    <label for="Total_count" class="form-label">Total count of products you sell</label><br/>
                        <select name="Total_count" id="Total_count" class="box-a">
                            <option value="Select">--Select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br />
                        <br />

                        <label for="Product" class="form-label">What are you planning to sell on the website?</label><br />
                        <select name="Product" id="Product" class="box-a">
                            <option value="Select">--Select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br />
                        <br />
                        <button type="submit" class="frm-btn skip">Skip</button>
                        <button type="submit" class="frm-btn sbmt">Submit</button>
                </form>
            </div>
            </div>
        </>

    );
};

export default SetForm;