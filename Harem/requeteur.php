<?php

	//FIchier appelé par la fonction JS faisant les requètes.
	//Se doit de retourner l'url d'une image

	include('fonctions_requeteur.php');

	//Preparer la requete 
	$criterias = ["sonic_the_hedgehog", "rating:s", "solo"];
	
	$request = requestCreator($criterias);
	
	echo(getImageURL($request));

?>