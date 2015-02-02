<?php

$xml = simplexml_load_file('https://e621.net/post/index.xml?limit=1');
echo($xml->post["file_url"][0]);

?>