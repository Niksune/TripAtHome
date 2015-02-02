//Global Variables
var brokenDreams = 0;
var hopes = 0;
var incrementationBD = 1;
var incrementationHopes = 0;
var BDBoostPrice = 5;
var buyHopePrice = 10;

//Summon main features
//Print prices
function main () {

	$('#BDBoostPrice').html(BDBoostPrice);
	$('#buyHopePrice').html(buyHopePrice);
	incrementBD();

}

//Autocall every second, update ressources and makes options appear
function incrementBD () {

	brokenDreams += incrementationBD;
	hopes += incrementationHopes;
	updateRessources();
	if(brokenDreams >= 5)
		$('#BDBoostSpan').show();
	if(brokenDreams >= 10)
		$('#buyHopeSpan').show();
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

	if(brokenDreams<5)
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

	if(brokenDreams<10)
		cantPay();
	else{
		$('#Hopes').show();
		hopes += 1;
		$('#Messages').html("With enough Broken Dreams, you can find an Hope ! ");
	}
	
	updateRessources();

}