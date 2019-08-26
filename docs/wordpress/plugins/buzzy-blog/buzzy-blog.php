<?php
/**
 * @package BuzzyBlog
 */
/**
 * Plugin Name: Buzzy Blog
 * Plugin URI: https://buzzycloud.com
 * Description: A simplest plugin to customize some settings
 * Version: 1.0.0
 * Author: Yumin Gui <erichui329@gmail.com>
 * Author URI: https://guiyumin.com
 * License: GPLv2 or later
 */
defined( 'ABSPATH' ) or die( 'ERROR!' );
/** allow access via rest api while maintaing force-login  */
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

 /**Allow Comments via REST API */
add_filter( 'rest_allow_anonymous_comments', '__return_true' );

// check for plugin using plugin name
if ( is_plugin_active( 'wp-force-login/wp-force-login.php' ) ) {
  //plugin is activated
  add_filter( 'rest_authentication_errors', '__return_true' );
} 