var items = [];
function searchForItem(itemStr)
{
	for(i = 0; i < items.length; i++)
	{
		if(items[i] === itemStr)
		{
			return true;
		}
	}
}

/*
if(bet was clicked)
{
	
}
*/
var bet;
var wrongChoice;

//if(
//export {wrong};

function betAccepted()
{
	bet = true;
}

console.log("Inventory: " + items);
console.log("Wrong choice: " + wrongChoice);
console.log("Bet: " + bet);
//CURRENT OBJECTIVE...
// - change name of this file to main 
// -create script for each webpage that needs one
// -move all script tags to bottom of body tag
// - add an event listener in the local js file to set the global variables to true when a link is clicked(watch out for scope)
// - make the bet work by connecting this main js file with local files
// 	
//insert this logic into a local JS file 
