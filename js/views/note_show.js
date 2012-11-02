/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.NoteShowView = Backbone.View.extend({
    // the constructor
    initialize: function (options) {
      this.note = options.note;
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#showTemplate').html(), this.note.toJSON()));
      return this;
    }
  });
}());
