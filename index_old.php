<?php
    if(!ob_start("ob_gzhandler")){
        ob_start();
        echo '<script>console.log("gZip calling")</script>';
    }

    include_once("index.html");
?>

