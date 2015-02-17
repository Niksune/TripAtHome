//Game ( "Harem" or "TripAtHome" )
var game = "TripAtHome";

//Global Variables
var brokenDreams = 45;
var hopes = 0;
var incrementationBD = 1;
var incrementationHopes = 0;
var BDBoostPrice = 5;
var buyHopePrice = 10;
var buyRequestPrice = 15;

//Summon main features
//Print prices
function main () {

	$('#BDBoostPrice').html(BDBoostPrice);
	$('#buyHopePrice').html(buyHopePrice);
	$('#buyRequestPrice').html(buyRequestPrice);
	incrementBD();

}

//Autocall every second, update ressources and makes options appear
function incrementBD () {

	brokenDreams += incrementationBD;
	hopes += incrementationHopes;
	updateRessources();
	if(brokenDreams >= BDBoostPrice)
		$('#BDBoostSpan').show();
	if(brokenDreams >= buyHopePrice)
		$('#buyHopeSpan').show();
	if(brokenDreams >= buyRequestPrice)
	{
		$('#buyRequestSpan').show();
		$('#imageBoard').show();
	}
	setTimeout('incrementBD()',1000);

}

//Refresh the display of ressources
function updateRessources () {

	$('#nbBD').html(brokenDreams);
	$('#nbHopes').html(hopes);	
}

//In case user wants to buy for too expensive
function cantPay () {

	$('#Messages').html("You don't have the ressources !");

}

//Boosts BrokenDreams production
function BDBoost () {

	if(brokenDreams<BDBoostPrice)
		cantPay();
	else{
		brokenDreams -= 5;
		incrementationBD += 1;
		$('#Messages').html("Gather faster mankind's Broken Dreams !");
	}
	
	updateRessources();

}

//Buys an hope
function buyHope () {

	if(brokenDreams<buyHopePrice)
		cantPay();
	else{
		$('#Hopes').show();
		hopes += 1;
		$('#Messages').html("With enough Broken Dreams, you can find an Hope ! ");
	}
	
	updateRessources();

}


//Displays last e621's picture
function buyRequest () {

	if(brokenDreams<buyRequestPrice)
		cantPay();
	else{
		image = getData('',game+"/requeteur.php");
		chaine = 
		$('#imageBoard').html("<img src='"+image+"'/>");
		$('#Messages').html("Have fun, you well deserved it... ");
	}
	
	updateRessources();

}

//Gets requeteur's answer
function getData(param, page)
	{
		var XhrObj = new XMLHttpRequest(); //Mozilla
		XhrObj.open("POST", page, false);
		XhrObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		XhrObj.send(param);
		if (XhrObj.readyState == 4 && XhrObj.status == 200) return XhrObj.responseText;
		else alert("erreur ajax :"+XhrObj.readyState+","+XhrObj.status);
	}