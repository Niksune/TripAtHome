<?php

	//Créateur de requètes
	//En entrée un tableau contenant les mots clefs
	//En sortie un array contenant la requètes (forme : https://e621.net/post/index.xml?tags=sonic_the_hedgehog+solo+rating:safe)
	function requestCreator(array $criterias) {

		$request = 'https://e621.net/post/index.xml?tags='.$criterias[0];
		
		foreach ($criterias as $value) {
		
			if($value == $criterias[0])
				continue;
				
			$request = $request.'+'.$value;
		}

		return $request;
	}

?>