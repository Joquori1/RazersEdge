import { mymap, attribution, tileUrl, tiles, issIcon, marker, api_url, firstTime, getISS, setInterval } from './script-S.js';

let activeDIV = "";
// * * * add event listener for HOME page * * *
// document.getElementById("header").addEventListener("click", )

document.getElementById("track-iss").addEventListener("click", displayISS);


function displayISS() { 
       
    document.getElementById("canvas-iss-a").style.display="none";
    document.getElementById("canvas-iss-b").style.display="block";

    let activeDIV = document.getElementById("canvas-iss-b");

    getISS();

    setInterval(getISS, 1000);
    
}





