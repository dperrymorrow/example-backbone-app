/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.NoteRouter = Backbone.Router.extend({
    routes: {
      "note/new": "create",
      "notes/index": "index",
      "note/:id/edit": "edit"
    },

    initialize: function (options) {
      this.notes = options.notes;
    },

    create: function () {
      this.currentView = new APP.Views.NoteNewView({note: new APP.Models.NoteModel()});
      $('#primary-content').html(this.currentView.render().el);
    },

    index: function () {
      this.currentView = new APP.Views.NoteIndexView({notes: this.notes});
      $('#primary-content').html(this.currentView.render().el);
    }
  });
}());
