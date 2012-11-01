/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.NoteIndexView = Backbone.View.extend({
    // the wrapper
    tagName: "div",
    // the constructor
    initialize: function (options) {
      // model is passed through
      this.notes = options.notes;
      this.notes.bind('reset', this.addAll, this);
    },

    // populate the html to the dom
    render: function () {
      // (this.collection.toJSON())
      $(this.el).html($('#indexTemplate').html());
      return this;
    },

    addAll: function () {
      // clear out the container each time you render index
      this.$('tbody').children().remove();
      var that = this;
      _.each(this.notes.models, function (note) {
        that.addOne(note);
      });
    },

    addOne: function (note) {
      var view = new APP.Views.NoteRowView({note: note});
      this.$("tbody").append(view.render().el);
    }
  });
}());
