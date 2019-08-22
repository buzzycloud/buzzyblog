<?php
/**
 * Plugin Name: Buzzy Blog WP Customization
 * Description: A simplest plugin to customize some WP settings
 * Version: 1.0.0
 * Author: Yumin Gui <erichui329@gmail.com>, a founding member of the Buzzy Cloud team
 * Author URI: https://buzzycloud.com
 * License: GPLv2 or later
 */

 /**Allow Comments via REST API */
add_filter( 'rest_allow_anonymous_comments', '__return_true' );
/** allow access via rest api while maintaing force-login  */
add_filter( 'rest_authentication_errors', '__return_true' );