import React from "react";
import LapTimeTable from "./LapTimeTable.js";
import HomeContents from './HomeContents.js';

function Homepage() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-8">
                    <HomeContents />
                </div>
            
            
                <div className="col-lg-4">
                    <LapTimeTable />
                </div>
            </div>
        </div>
    );
}

export default Homepage;