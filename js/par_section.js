/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  //////////////// Section - Put gutter classes to row
  Drupal.behaviors.Section = {
    attach: function (context, settings) {
      $('section').each(function(index, element) {
        var thisSection = $(this),
            gutterClass = thisSection.attr('data-gutter-class') || '',
            contentAlignClass = thisSection.attr('data-content-align') || '',
            marginClass = thisSection.attr('data-margin') || '';
        thisSection.find('div[class*="container"] > .row').addClass([gutterClass, contentAlignClass, marginClass]);
      });
      $('div.paragraph--type--paragraph-layout').each(function(index, element) {
        var thisParagraph = $(this),
            gutterClass = thisParagraph.attr('data-gutter-class') || '',
            contentAlignClass = thisParagraph.attr('data-content-align') || '';
        thisParagraph.find('.row').addClass([gutterClass, contentAlignClass]);
      });
    }
  };



})(jQuery, Drupal);
