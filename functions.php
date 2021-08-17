<?php
/**
 * some child theme functions
 *
 * @package some child theme
 */

/**
 * Loads styles & scripts from accordion folder
 */

function themeslug_enqueue_style() {
    wp_enqueue_style( 'my-theme', get_template_directory_uri() . '/accordion/css/ywcca_style.css', false );
}
 
function themeslug_enqueue_script() {
    wp_enqueue_script( 'my-js', get_template_directory_uri() . '/accordion/js/ywcca_accordion.js', false );
}
 
add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_script' );
