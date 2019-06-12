<?php
$missions = json_decode(file_get_contents("./missions.".$_POST["lang"].".json"), true);

$missions[$_POST["id"]] = $_POST["mission"];

ksort($missions);

$Handle = fopen("./missions.".$_POST["lang"].".json", 'w');

fwrite($Handle, preg_replace('/"(\d*?)"([^:])/', '$1$2', str_replace('"true"', "true", json_encode($missions, JSON_PRETTY_PRINT))));

fclose($Handle);

echo "<br>Dieser Einsatz wurde eben live eingetragen! Hier erstmal die Rohdaten:<pre>".preg_replace('/"(\d*?)"/', '$1', str_replace('"true"', "true", json_encode($_POST["mission"], JSON_PRETTY_PRINT)))."</pre>";
