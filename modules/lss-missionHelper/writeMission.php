<?php
try {
    $missions = json_decode(file_get_contents("./missions." . $_POST["lang"] . ".json"), true);

    $missions[$_POST["id"]] = $_POST["mission"];

    ksort($missions);

    json_decode(json_encode($missions, JSON_FORCE_OBJECT), true);

    $json_error = json_last_error();

    if ($json_error === JSON_ERROR_NONE) {
        $Handle = fopen("./missions." . $_POST["lang"] . ".json", 'w');

        fwrite($Handle, preg_replace('/"(\d*?)"([^:])/', '$1$2', str_replace('"true"', "true", json_encode($missions, JSON_PRETTY_PRINT | JSON_FORCE_OBJECT))));

        fclose($Handle);

        echo "<br>Dieser Einsatz wurde eben live eingetragen! Hier erstmal die Rohdaten:<pre>" . preg_replace('/"(\d*?)"/', '$1', str_replace('"true"', "true", json_encode($_POST["mission"], JSON_PRETTY_PRINT))) . "</pre>";
    } else {
        throw new JsonException($json_error);
    }
} catch (Exception $e) {
    echo "Error: ".$e->getMessage();
}
