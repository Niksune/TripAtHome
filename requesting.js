var requestTypeGlobal = 0;
var choice = "";
var option1 = "";
var actualLevel = 0;

//Main Function
function request(requestType) {

	$("#buyLittleRequestBut").prop('disabled', true);
	$("#buyMediumRequestBut").prop('disabled', true);
	$("#buyBigRequestBut").prop('disabled', true);
	
	requestTypeGlobal = requestType;
	
	$("#requestBoard").load(game+"/form.html");

	//endRequesting();
	
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
	
	var options1 = document.forms[1];
    for (i = 0; i < options1.length; i++) {
        if (options1[i].checked) {
            option1 = options1[i].value;
        }
    }
	
	$("#requestBoard").html('<div id="requestButtons"><button onclick="nextPicture(0)">Gimme the same</button> <button onclick="nextPicture(1)">Go to the next level !</button> <button onclick="endRequesting()">Stop for now</button> </div><div id="imageBoard"></div>');
	
	getPicture(0);

}

//Ending function
function endRequesting() {

	$("#buyLittleRequestBut").prop('disabled', false);
	$("#buyMediumRequestBut").prop('disabled', false);
	$("#buyBigRequestBut").prop('disabled', false);

}

//Next picture function
function nextPicture(nextPic) {

	if(nextPic)
	{
		actualLevel++;
	}
	
	getPicture(actualLevel);

}


function getPicture(codeTags) {

	url = game+"/requeteur.php?codeTags="+codeTags+"&choice="+choice+"&option1="+option1;
	$('#Messages').html(url);
	image = getData('',url);
	$('#imageBoard').html("<img src='"+image+"'/>");
	//$('#Messages').html("Have fun, you well deserved it... ");
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
