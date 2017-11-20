<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wp_user');

/** MySQL database password */
define('DB_PASSWORD', 'wp_user-2017');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bbrHqquU3&S5k+H.c|G/J+j#k@Oi Dk=>o>gj+BN;i11/R`|qpzKRKUGz?|P0l6|');
define('SECURE_AUTH_KEY',  ')@h&;hAdhmy+n6.m.ghYaqBvi_QVEK&uOK6Md7<Ad|;I@4y!=!BvF>4dcj?WiF&u');
define('LOGGED_IN_KEY',    '}<c}#EOW9ZE|3d</+YI.ho?E i9#&Oh_P&LMt[=cC]3CMLfd 2A>B WojsKZ?~ (');
define('NONCE_KEY',        'q1NM?p[G~cT8B*Q~7l<-E=Hb}%XX^o >?+NPS}]-: M7t+G;]^Grx[Rh+wxo1iP.');
define('AUTH_SALT',        'Wdkq^](C8W~mNx^<gZhF|,qC5[>-_(W`#v+!FnM>TlIABELUu!&G@9~,)zFE)/,0');
define('SECURE_AUTH_SALT', 'd#f@N/T+s0)# cmyPEQ|uv.>B@($Se1n.{ PN.v+f%ge$gL8N(qG9]54JAmz5Ml*');
define('LOGGED_IN_SALT',   'c/n~,^Y#,CW`_OC@{@=ye?&E8?Rfw^SXj|UJ+>v%!nAS:ndzZd:rpc(?nwZglK7q');
define('NONCE_SALT',       '.._]y5c4OKCJ0h/:J8${r|3gl+.f.^dp|(32mc.C>_%[oA~k(tRtc%`=y1.6z~&(');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'tbl_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
