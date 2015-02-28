var requestTypeGlobal = 0;
var choice = "";
var option1 = "";
var actualLevel = 0;
var rerolled = 0;
var dimentions = new Array();

//Main Function
//RequestType is 1, 2 or 3
function request(requestType) {

	console.log("Request started, requestType ="+requestType);

//reset some variables
	actualLevel = 0;
	rerolled = 0;

	$("#buyLittleRequestBut").prop('disabled', true);
	$("#buyMediumRequestBut").prop('disabled', true);
	$("#buyBigRequestBut").prop('disabled', true);
	
	requestTypeGlobal = requestType;
	
	$("#requestBoard").load(game+"/form.html");
	$("#requestBoard").show();
	
}

//Function called by the form
function startRequest() {

    var i;
	
	var choices = document.forms[0];
    for (i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
	
	if(game != "TripAtHome")
	{
		var options1 = document.forms[1];
		for (i = 0; i < options1.length; i++) {
			if (options1[i].checked) {
				option1 = options1[i].value;
			}
		}
	}
	else
		option1 = 2;
		
	$("#requestBoard").html('<div id="requestButtons"><button onclick="nextPicture(0)" id="sameBut">Gimme the same kind !</button> <button onclick="nextPicture(1)" id="nextBut">'+updateNextBut()+'</button> <button onclick="endRequesting()">Stop for now</button> </div><div id="imageBoard"></div>');
	
	displayPicture(0);

}

//Ending function
function endRequesting() {

	var buttons = 'After all that work, you may want a little treat ?<br />';
	buttons += '<div id="requestButtons">';
	buttons += '<span id="buyLittleRequestSpan" style="display:none;" ><button id="buyLittleRequestBut" onclick="buyRequest(1)">Buy a Little Request</button> (cost : <span id="littleRequestPrice">'+littleRequestPrice+'</span> Vegetables)</span><br/>';
	buttons += '<span id="buyMediumRequestSpan" style="display:none;" ><button id="buyMediumRequestBut" onclick="buyRequest(2)">Buy a Medium Request</button> (cost : <span id="mediumRequestPrice">'+mediumRequestPrice+'</span> Gold Coins)</span><br/>';
	buttons += '<span id="buyBigRequestSpan" style="display:none;" ><button id="buyBigRequestBut" onclick="buyRequest(3)">Buy a Big Request</button> (cost : <span id="bigRequestPrice">'+bigRequestPrice+'</span> Opals)</span><br/>';
	buttons += '</div>';

	$("#requestBoard").html(buttons);

	$("#buyLittleRequestBut").prop('disabled', false);
	$("#buyMediumRequestBut").prop('disabled', false);
	$("#buyBigRequestBut").prop('disabled', false);

}

//Next picture function. Takes as argument 0 if it's the same level, and 1 if it goes to the next level
function nextPicture(nextPic) {

	var messageNext = "";

	if(nextPic){
	
		actualLevel++;
		rerolled = 0;
		$("#sameBut").prop('disabled', false);
		updateNextBut();
		
	} else {
	
		rerolled++;
		if(rerolled == 2)
		$("#sameBut").prop('disabled', true);
	
	}
	
	var nextText = "";
	
	displayPicture(actualLevel);

}

//Updates next button text
function updateNextBut() {

	var messageNext = "";

	//Updates the next button
	if(game=="TripAtHome"){
		switch(actualLevel){
			case 1:messageNext = "Maybe some faith building ?";break;
			case 2:messageNext = "Gimme a few statues or monuments";break;
			case 3:messageNext = "I want some street art";break;
			case 4:messageNext = "And to finish : a festival";break;
		}
	}
	else{
		switch(actualLevel){
			case 1:messageNext = "Please yourself";break;
			case 2:messageNext = "Bring a friend";break;
			case 3:messageNext = "Go deeper";break;
			case 4:messageNext = "Call some more";break;
		}
	}
	
	$("#nextBut").html(messageNext);
	
	if(actualLevel==0 && game=="TripAtHome")
		return "Show me buildings";
	else if (actualLevel==0 && game!="TripAtHome")
		return "Show me more private";
		
	console.log("requestTypeGlobal :"+requestTypeGlobal+" actualLevel : "+actualLevel);
		
	if((requestTypeGlobal==1 && actualLevel==1)||(requestTypeGlobal==2 && actualLevel==3)) {
		$("#nextBut").prop("disabled",true);
		$("#nextBut").html("To have more, take a biger request <3");
	} else if (requestTypeGlobal==3 && actualLevel==5) {
		$("#nextBut").prop("disabled",true);
		$("#nextBut").html("You've had the whole service ! Come again !");	
	}
		
}

//Displays the picture, takes as argument the actual level of request
function displayPicture(codeTags) {

	url = game+"/requeteur.php?codeTags="+codeTags+"&choice="+choice+"&option1="+option1;
	console.log(url);
	image = getData('',url);
	$('#imageBoard').show();
	$('#imageBoard').css('height','auto');
	$('#imageBoard').css('width','auto');
	
	$('#imageBoard').html("<img id='imageBalise' src='"+image+"' onload='imageFunction()'/>");

	$('#Messages').html("Have fun, you well deserved it !");
}

//Calls the PHP's requestor
function getData(param, page) {
		var XhrObj = new XMLHttpRequest(); //Mozilla
		XhrObj.open("GET", page, false);
		XhrObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		XhrObj.send(param);
		if (XhrObj.readyState == 4 && XhrObj.status == 200) return XhrObj.responseText;
		else alert("erreur ajax :"+XhrObj.readyState+","+XhrObj.status);
}

//Find the right proportion for the picture
function scaleSize(maxW, maxH, currW, currH){

	var ratio = currH / currW;

	if(currW >= maxW && ratio <= 1){
		currW = maxW;
		currH = currW * ratio;
	} else if(currH >= maxH){
		currH = maxH;
		currW = currH / ratio;
	}

	return [currW,currH];
}

function imageFunction(){
	dimentions[0]=$('#imageBoard').width();
	dimentions[1]=$('#imageBoard').height();
	dimentions = scaleSize(750,750,dimentions[0],dimentions[1]);
	$('#imageBoard').html("<img  id='imageBalise' src='"+image+"' style='width:"+dimentions[0]+"px; height:"+dimentions[1]+"'/>");
	$('#imageBoard').show();
}