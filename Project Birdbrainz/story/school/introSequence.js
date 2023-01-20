var handIsRaised = true;

const raiseResult = document.getElementById("raisedHand");
const raiseYoHand = document.getElementById("raiseHandOption");
const stareOutWindow = document.getElementById("staringOutWindow");

raiseYoHand.addEventListener("click", raisingOfHand);
function raisingOfHand()
{
	/*if(handIsRaised === true)
	{
		console.log("the value of handIsRaised within the function is true, the same as its declaration at the top of the program, which is not the default value");
	}*/
	//console.log("ya boy is running");
	raiseResult.innerHTML = "As Mr. Poplar turns around, you go to raise your hand like the motivated student you are, but suddenly you hear a strange nasally grunt right next to you - ";
	//raiseYoHand.innerHTML = "";
	//raiseYoHand.href = "";
	//stareOutWindow.href = "";
	//document.getElementsByClassName("continue").href = "nasally_grunt.html";
	//raiseYoHand.removeEventListener("click", raisingOfHand);
}

//console.log(handIsRaised);
