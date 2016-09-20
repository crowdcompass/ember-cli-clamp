import Ember from 'ember';
import layout from '../templates/components/clamp-js';
import $clamp from 'npm:clamp-js';

/**
 * Clamp.js Component
 * Ember component for http://joe.sh/clamp-js
 *
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

  clampDelay: 100,

  // Events

  /**
   * Stores the initial, unclamped value before render
   *
   * @function
   * @returns {undefined}
   */
  willInsertElement: function() {
    this.set('originalContent', this.get('element').innerHTML);
  },

  /**
   * Initializes clamping on the nested content.
   *
   * @function
   * @returns {undefined}
   */
  didInsertElement: function() {
    this.setWidth();

    this.clamp();
    this.bindResizeListener();
  },

  /**
   * CCD-42564
   * Unbinds the resize event when the component is de-rendered
   *
   * @function
   * @returns {undefined}
   */
  willDestroyElement: function() {
    Ember.$(window).off(`resize.${this.elementId}`);
  },

  // Methods

  /**
   * Stores most recent clamped width, for comparison
   *
   * @function
   * @returns {undefined}
   */

  setWidth: function() {
    this.set('lastWidth', this.$().width());
  },

  /**
   * Binds debounced window resize event
   *
   * @function
   * @returns {undefined}
   */
  bindResizeListener: function() {
    Ember.$(window).on(`resize.${this.elementId}`, () => {
      Ember.run.debounce(this, this.performResize, this.clampDelay);
  });
  },

  /**
   * Reclamps the content if the component width has changed
   *
   * @function
   * @returns {undefined}
   */
  performResize: function() {
    if (this.$().width() !== this.get('lastWidth')) {
      this.setWidth();
      this.recalcClamp();
    }
  },

  /**
   * Reimplements original content and reclamps for new size
   *
   * @function
   * @returns {undefined}
   */
  recalcClamp: function() {
    this.get('element').innerHTML = this.get('originalContent');
    this.clamp();
  },

  /**
   * calls Clamp.js on container
   *
   * @function
   * @returns {undefined}
   */
  clamp: function() {
    $clamp(this.get('element'), {clamp: this.get('lines'), useNativeClamp: false});
  }
});
