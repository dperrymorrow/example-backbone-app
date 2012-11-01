/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.NoteRowView = Backbone.View.extend({
    // the wrapper
    tagName: "tr",
    // functions to fire on events
    events: {
      "click a.delete": "destroy"
    },

    // the constructor
    initialize: function (options) {
      // model is passed through
      this.note = options.note;
    },

    // populate the html to the dom
    render: function () {
      $(this.el).html(_.template($('#rowTemplate').html(), this.note.toJSON()));
      return this;
    },

    // delete the model
    destroy: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.model.destroy();
      this.remove();
    }
  });
}());
