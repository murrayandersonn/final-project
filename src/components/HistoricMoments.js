import React from "react";
import '../components/Nring.css';

function HistoricMoments() {
    return (
        <div className="card green-hell" style={{ backgroundColor: "#36454F" }}>
            <div className='card-header text-white'>
                <h3>Historic Moments At Green Hell</h3>
            </div>
            <br></br>
            <div className="card-body">
                <div className="card">
                    <div className="card-header">
                        <h4>Stefon Bellof's 34 Year Lap Record</h4>
                    </div>
                    <div className="card-body">
                        <p>On May 28, 1983, during qualifying for the 1000 km Nürburgring race, Bellof set an astonishing lap time of 6 minutes and 11.13 seconds. This lap was completed at an average speed of 202.073 km/h (125.562 mph)</p>
                        <a href="https://www.stefan-bellof.de/en-gb/karriere/rekordrunde/">Learn more!</a>
                    </div>
                </div>
                <br></br>
                <div className="card">
                    <div className="card-header">
                        <h4>Niki Lauda's Near-Fatal Crash</h4>
                    </div>
                    <div className="card-body">
                        <p>During the 1976 German Grand Prix, Niki Lauda suffered a horrific crash that left him with severe burns. This incident led to significant safety improvements in Formula 1 and is often cited as a turning point in the sport's history</p>
                    </div>
                </div>
                <br></br>
                <div className="card">
                    <div className="card-header">
                        <h4>Timo Bernhard's Outright Lap Record: In 2018</h4>
                    </div>
                    <div className="card-body">
                        <p>Timo Bernhard broke the overall lap record at the Nordschleife, completing a lap in 5:19.55 with a Porsche 919 Hybrid Evo. This astonishing time showcased the ultimate potential of modern racing technology on this challenging circuit</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 export default HistoricMoments;