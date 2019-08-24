<?php
/**
 * @package BuzzyBlogPlugin
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

 /**Allow Comments via REST API */
add_filter( 'rest_allow_anonymous_comments', '__return_true' );
/** allow access via rest api while maintaing force-login  */
add_filter( 'rest_authentication_errors', '__return_true' );

