<?php
$missions = json_decode(file_get_contents("/var/www/vhosts/ledbrain.de/lssm.ledbrain.de/lss-manager-v3/dev/modules/lss-missionHelper/missions.".$_POST["lang"].".json"), true);

$missions[$_POST["id"]] = $_POST["mission"];

ksort($missions);

$Handle = fopen("/var/www/vhosts/ledbrain.de/lssm.ledbrain.de/lss-manager-v3/dev/modules/lss-missionHelper/missions.".$_POST["lang"].".json", 'w');

fwrite($Handle, preg_replace('/"(\d*?)"([^:])/', '$1$2', str_replace('"true"', "true", json_encode($missions, JSON_PRETTY_PRINT))));

fclose($Handle);

echo "<br>Dieser Einsatz wurde eben live eingetragen! Hier erstmal die Rohdaten:<pre>".preg_replace('/"(\d*?)"/', '$1', str_replace('"true"', "true", json_encode($_POST["mission"], JSON_PRETTY_PRINT)))."</pre>";
