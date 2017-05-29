<?php
    header("Content-Type: text/xml; charset=utf-8");
    $output = "<?xml version='1.0' encoding='ISO-8859-1'?>";
    $output.= "<favorites>";
    $output.= "<bands>";
    $output.= "<band>Journey</band>";
    $output.= "<song>Faithfully</song>";
    $output.= "</bands>";
    $output.= "<bands>";
    $output.= "<band>REO Speedwagon</band>";
    $output.= "<song>Keep on Loving You</song>";
    $output.= "</bands>";
    $output.= "<bands>";
    $output.= "<band>Heart</band>";
    $output.= "<song>Alone</song>";
    $output.= "</bands>";
    $output.= "<bands>";
    $output.= "<band>Styx</band>";
    $output.= "<song>Lady</song>";
    $output.= "</bands>";
    $output.= "</favorites>";
    echo($output);
?>
