<?php
# Database Configuration
define( 'DB_NAME', 'wp_kapost' );
define( 'DB_USER', 'kapost' );
define( 'DB_PASSWORD', 'La4YJ5dOstglhJ4l' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_HOST_SLAVE', '127.0.0.1' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';
# Security Salts, Keys, Etc
define('AUTH_KEY',         'x3M7:t0tjq P1W,?!%u!l3,m2|V]s@|(^`%;Z)96tDF~^<wmgh4dO|$O}+Y;`b n');
define('SECURE_AUTH_KEY',  '*kH-ih-geN}87ZBv>-3YB5&O&ZFzMD{|]XS6~{2~8pQl5Dg f7hL=yUK<o[OPIad');
define('LOGGED_IN_KEY',    ':D{V;G]kmvA0J~wr.#3ixF|zj{oTO;~MgQ(hjHgH1g^^QfK1Y-`_uS9F$nhg[K:o');
define('NONCE_KEY',        '/&mYX1#]q-k&@DyOQE SF9HN|+4jTk=+r?q?c<9dZ_c87W7hbQR.c{K_)E&~qq3R');
define('AUTH_SALT',        'f7:++^&>@l:W54=5m5%i,3],K-@{hfbn`zqSo/}a|z[=c_V0^g*V0RmLD@tA]J^H');
define('SECURE_AUTH_SALT', 'V4w4%%knyNbw#p~7!}%0do2q|UYDc:8?kG^_a[rd4 +o_^,*bWP_djPay,y8.dQX');
define('LOGGED_IN_SALT',   '5PY$[.n^j|R9GS7DE+WY; +DbA?`+#Xt<CIo.,#|GG1T/%_ui%.<%@Y9RR{5N,~-');
define('NONCE_SALT',       ',%97/3>3dW.|N2U[*Ed1/@rEkL;vdRyjR|!vL-_}T,~?P1vOl)a^-5[~nR0-ca)P');
# Localized Language Stuff
define( 'WP_CACHE', TRUE );
define( 'WP_AUTO_UPDATE_CORE', false );
define( 'PWP_NAME', 'kapost' );
define( 'FS_METHOD', 'direct' );
define( 'FS_CHMOD_DIR', 0775 );
define( 'FS_CHMOD_FILE', 0664 );
define( 'PWP_ROOT_DIR', '/nas/wp' );
define( 'WPE_APIKEY', '23c5cab71b3976b31d788744cd9dc079e3d2642a' );
define( 'WPE_FOOTER_HTML', "" );
define( 'WPE_CLUSTER_ID', '100610' );
define( 'WPE_CLUSTER_TYPE', 'pod' );
define( 'WPE_ISP', true );
define( 'WPE_BPOD', false );
define( 'WPE_RO_FILESYSTEM', false );
define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );
define( 'WPE_SFTP_PORT', 2222 );
define( 'WPE_LBMASTER_IP', '' );
define( 'WPE_CDN_DISABLE_ALLOWED', false );
define( 'DISALLOW_FILE_MODS', FALSE );
define( 'DISALLOW_FILE_EDIT', FALSE );
define( 'DISABLE_WP_CRON', false );
define( 'WPE_FORCE_SSL_LOGIN', true );
define( 'FORCE_SSL_LOGIN', true );
/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/
define( 'WPE_EXTERNAL_URL', false );
define( 'WP_POST_REVISIONS', FALSE );
define( 'WPE_WHITELABEL', 'wpengine' );
define( 'WP_TURN_OFF_ADMIN_BAR', false );
define( 'WPE_BETA_TESTER', false );
umask(0002);
$wpe_cdn_uris=array ( );
$wpe_no_cdn_uris=array ( );
$wpe_content_regexs=array ( );
$wpe_all_domains=array ( 0 => 'kapost.com', 1 => 'kapost.wpengine.com', 2 => 'www.kapost.com', );
$wpe_varnish_servers=array ( 0 => 'pod-100610', );
$wpe_special_ips=array ( 0 => '104.196.36.229', );
$wpe_ec_servers=array ( );
$wpe_largefs=array ( );
$wpe_netdna_domains=array ( );
$wpe_netdna_domains_secure=array ( );
$wpe_netdna_push_domains=array ( );
$wpe_domain_mappings=array ( );
$memcached_servers=array ( 'default' =>  array ( 0 => 'unix:///tmp/memcached.sock', ), );
define( 'WP_SITEURL', 'http://kapost.com' );
define( 'WP_HOME', 'http://kapost.com' );
define('WPLANG','');
# WP Engine ID
# WP Engine Settings
# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');
$_wpe_preamble_path = null; if(false){}
