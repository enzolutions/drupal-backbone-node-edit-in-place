Drupal Node Edit In Place with Backbone.js
============================

[![edit list](https://raw.github.com/enzolutions/drupal-backbone-node-edit-in-place/master/img/drupal_backbone_node_edit_in_place.png)](#features)

This project is a module for Drupal 7 to load a module and Edit In Place using Backbone.js

##Module Requirements
- jQuery Update (<a href="http://drupal.org/project/jquery_update">http://drupal.org/project/jquery_update</a>)
- Services (<a href="http://drupal.org/project/services">http://drupal.org/project/services</a>)
- Backbonejs (<a href="http://drupal.org/project/backbone">http://drupal.org/project/backbone</a>)

##Instalation

- Download Backbonejs from <a href="http://backbonejs.org">backbonejs.org</a> into libraries folders i.e sites/all/libraries/backbone/backbones.js (Tested version 1.0).
- Download Underscorejs from <a href="http://underscorejs.org">underscorejs.org</a> into libraries folders i.e sites/all/libraries/underscore/underscorejs.js (Tested version 1.5.2).
- Download Drupal Backbone EditInPlace from <a href="https://github.com/enzolutions/drupal-backbone-editinplace"> Drupal Backbone EditInPlace</a> into libraries folders i.e sites/all/libraries/drupal-backbone-editinplace/drupal-backbone.editinplace.js.
- Enable modules backbone_services, services and backbone.
- Use jQuery Update to set jQuery version to 1.7

##Usage

- Access page <example.com>/backbone-node-edit-in-place.
- Provide a NID to load the node.
- DoubleClick in title or body to enable Inline Edition
