var brokenDreams = 0;
var incrementationBD = 1;

function main () {

	incrementBD();

}

function incrementBD () {

	brokenDreams += incrementationBD;
	$('#nbBD').html(brokenDreams);
	setTimeout('incrementBD()',1000);

}