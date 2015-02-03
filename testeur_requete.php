<?php

	//Preparer la requete (forme : https://e621.net/post/index.xml?tags=sonic_the_hedgehog+gay+rating:safe)
	$criterias = ["sonic_the_hedgehog", "rating:s", "gay"];
	
	$request = 'https://e621.net/post/index.xml?tags='.$criterias[0];
	
	foreach ($criterias as $value) {
	
		if($value == $criterias[0])
			continue;
			
		$request = $request.'+'.$value;
	}
	
	echo $request;
	
	
	
?>