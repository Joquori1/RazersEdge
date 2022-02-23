const buttonPop = document.getElementById("button-pop");

buttonPop.addEventListener("click", showGraph);

function showGraph() {
    console.log("Hello");
    // document.getElementById("canvas-pop").style.display="none";
	document.getElementById("image-pop").style.display="none";
	document.getElementById("chartDiv").style.display="block";
    console.log(showGraph);
}

// * * * start POPULATION state management * * *
document.getElementById("home-button-p1").addEventListener("click", manageStateP);
document.getElementById("home-button-p2").addEventListener("click", manageStateP);
document.getElementById("project-button-p1").addEventListener("click", manageStateP);
document.getElementById("team-button-p1").addEventListener("click", manageStateP);

function manageStateP() {     
    document.getElementById("chartDiv").style.display="none";
	document.getElementById("canvas-pop").style.display="block";
    document.getElementById("image-pop").style.display="block";
}

