<?php

	include('fonctions.php');

	//Preparer la requete 
	$criterias = ["sonic_the_hedgehog", "rating:s", "solo"];
	
	$request = requestCreator($criterias);
	
	echo $request;
	
	echo howMany($request);
	
	echo "fini";
	
?>