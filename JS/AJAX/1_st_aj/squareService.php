<?php
    $rows = $_REQUEST['rows'];
    $cols = $_REQUEST['cols'];

    for($i = 0; $i < $cols; $i++){
        for($x = 0; $x < $rows; $x++) {
            print("*");
        }
        print("<br/>");
    }
?>
