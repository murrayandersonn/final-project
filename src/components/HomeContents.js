import React from "react";
import './HomeContents.css';

function HomeContents() {
    return (
        <div>
            <div className="card">
                <div className="card-header text-white" style={{backgroundColor: "#36454F"}}>
                    <h3>The Legendary Nürburgring Nordschleife</h3>
                </div>
                <div className="card-body" id="nring-body">
                    <div className="card home-text">
                        <p>
                            The Nürburgring and Laguna Seca are two of the most iconic racetracks in the world, each with a rich history and a reputation for challenging layouts that test the limits of both drivers and vehicles. The Nürburgring, often referred to as "The Green Hell," features a grueling 20.8 km (12.9 miles) circuit that winds through the Eifel mountains, showcasing a mix of high-speed straights and intricate corners. This track has been the stage for numerous legendary racing events, including the 24 Hours of Nürburgring, where endurance racing meets the thrill of speed.
                        </p>
                    </div>
                </div>
            </div> <br></br>
            <div className="card" >
                <div className="card-header text-white" style={{backgroundColor: "#36454F"}}>
                    <h3>WeatherTech Raceway Laguna Seca</h3>
                </div>
                <div className="card-body" id="ls-body">
                    <div className="card home-text">
                        <p>
                            Laguna Seca, located in California, is renowned for its unique elevation changes and the famous "Corkscrew" turn, which has become a defining feature of the track. With a length of 3.602 km (2.238 miles), it hosts a variety of racing events, including the American Le Mans Series and MotoGP races. The recent record lap set by the Porsche Taycan Turbo GT at Laguna Seca, clocking in at 1:27.87, highlights the ongoing evolution of automotive performance on this storied circuit. This track not only celebrates racing history but also continues to be pivotal in the development of high-performance vehicles, making Laguna Seca an essential destination for motorsport enthusiasts.
                        </p>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </div>
    );
}

export default HomeContents;