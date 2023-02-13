<?php
/*
Plugin Name: Elfsight Team Showcase CC
Description: Show your team to the best advantage through a customizable gallery.
Plugin URI: https://elfsight.com/team-showcase-widget/codecanyon/?utm_source=markets&utm_medium=codecanyon&utm_campaign=team-showcase&utm_content=plugin-site
Version: 1.3.1
Author: Elfsight
Author URI: https://elfsight.com/?utm_source=markets&utm_medium=codecanyon&utm_campaign=team-showcase&utm_content=plugins-list
*/

if (!defined('ABSPATH')) exit;


require_once('core/elfsight-plugin.php');

$elfsight_team_showcase_config_path = plugin_dir_path(__FILE__) . 'config.json';
$elfsight_team_showcase_config = json_decode(file_get_contents($elfsight_team_showcase_config_path), true);

new ElfsightTeamShowcasePlugin(
    array(
        'name' => esc_html__('Team Showcase'),
        'description' => esc_html__('Show your team to the best advantage through a customizable gallery.'),
        'slug' => 'elfsight-team-showcase',
        'version' => '1.3.1',
        'text_domain' => 'elfsight-team-showcase',
        'editor_settings' => $elfsight_team_showcase_config['settings'],
        'editor_preferences' => $elfsight_team_showcase_config['preferences'],

        'plugin_name' => esc_html__('Elfsight Team Showcase'),
        'plugin_file' => __FILE__,
        'plugin_slug' => plugin_basename(__FILE__),

        'vc_icon' => plugins_url('assets/img/vc-icon.png', __FILE__),
        'menu_icon' => plugins_url('assets/img/menu-icon.svg', __FILE__),

        'update_url' => esc_url('https://a.elfsight.com/updates/v1/'),
        'product_url' => esc_url('https://codecanyon.net/item/team-showcase-wordpress-team-showcase-plugin/23998631?ref=Elfsight'),
        'helpscout_plugin_id' => 110723
    )
);

?>
