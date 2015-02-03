<?php

	include('fonctions.php');

	/* A DEFINIR A LA MAIN */
	//Elements de requete
	$character = "knuckles_the_echidna";
	$quality = "score:%3E20"; //%3E20 = >20. Le deux points est necessaire à la compréhension de la requète
	$arrayOfCriterias = [
						[$character, "rating:s", "solo", $quality],
						[$character, "rating:s", "clothing", "solo", $quality],
						[$character, "-rating:s", "nude", "-sex", "solo", $quality],
						[$character, "-rating:s", "sex", "duo", "fellatio", $quality],
						[$character, "-rating:s", "sex", "duo", "oral", $quality]
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
		$url = makeURL($criterias);

		fputs($file,' : '.howMany($request).'    '.$url.$retourChariot);
	}
	echo "Fini !";
	
?>