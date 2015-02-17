<?php

	//Cr�ateur de requ�tes
	//En entr�e un tableau contenant les mots clefs
	//En sortie un array contenant la requ�te (forme : https://e621.net/post/index.xml?tags=sonic_the_hedgehog+solo+rating:safe)
	function requestCreator(array $criterias) {

		$request = 'https://e621.net/post/index.xml?tags='.$criterias[0];
		
		foreach ($criterias as $value) {
		
			if($value == $criterias[0])
				continue;
				
			$request = $request.'+'.$value;
		}
		
		return $request;
	}

	//A partir d'une requ�te retourne l'image du premier post
	//En entr�e un string contenant la requ�te
	//En sortie l'URL de l'image
	function getImageURL($request) {
	
		$xml = simplexml_load_file($request);
		return($xml->post["file_url"][0]);
	
	}
	
	//Renvoie le nombre de r�ponses correspondant � la recherche
	//Entr�e : string requ�te
	//Sortie : nombre
	function howMany($request){
	
		$xml = simplexml_load_file($request);
		return($xml["count"]);
	}
	
	//Genere l'url permettant de tester la requete
	//Entr�e : array de mots clefs
	//SOrtie : un string avec l'url
	function makeURL(array $criterias) {
	
		$url = "https://e621.net/post?tags=";
		
		$url = $url.$criterias[0];
	
		foreach ($criterias as $value)
		{
			if($value == $criterias[0])
				continue;
			$url= $url.'+'.$value;
		}
		
		return $url;
	
	}
?>