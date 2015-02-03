<?php

	include('fonctions.php');

	
	/* A DEFINIR A LA MAIN */
	$character = "Sonic_The_Hedgehog";
	$arrayOfCriterias = [
						[$character, "rating:s", "solo"],
						[$character, "rating:s", "clothing", "solo"],
						[$character, "rating:s", "nude", "solo"],
						[$character, "rating:e", "nude", "-sex", "solo"]
						];
	
	$file = fopen('Personnages\\'.$character.'.txt', 'w+'); 
	
	//$criterias contient un array avec une serie de criteres
	foreach ($arrayOfCriterias as $criterias)
	{
		fputs($file, $criterias[0]);
		foreach ($criterias as $value)
		{
			if($value == $criterias[0])
				continue;
			fputs($file, ' + '.$value);
		}
		$request = requestCreator($criterias);
		$retourChariot = '
';
		fputs($file,' : '.howMany($request).''.$retourChariot);
	}
	echo "fini";
	/*//Preparer la requete 
	$criterias = ["sonic_the_hedgehog", "rating:s", "solo"];
	
	$request = requestCreator($criterias);
	
	echo $request;
	
	echo howMany($request);
	
	echo "fini";*/
	
?>