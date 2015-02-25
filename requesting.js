//Main Function
function request(requestType) {

	$("#buyLittleRequestBut").prop('disabled', true);
	$("#buyMediumRequestBut").prop('disabled', true);
	$("#buyBigRequestBut").prop('disabled', true);

	endRequesting();
	
}

//Ending function
function endRequesting() {

	$("#buyLittleRequestBut").prop('disabled', false);
	$("#buyMediumRequestBut").prop('disabled', false);
	$("#buyBigRequestBut").prop('disabled', false);

}