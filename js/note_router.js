(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.NoteRouter = Backbone.Router.extend({
    routes: {
      "note/new": "create",
      "notes/index": "index",
      "note/:id/edit": "edit",
      "note/:id/view": "show"
    },

    initialize: function (options) {
      this.notes = options.notes;
      // this is debug only to demonstrate how the backbone collection / models work
      this.notes.bind('reset', this.updateDebug, this);
      this.notes.bind('add', this.updateDebug, this);
      this.notes.bind('remove', this.updateDebug, this);
      this.index();
    },

    updateDebug: function () {
      $('#output').text(JSON.stringify(this.notes.toJSON(), null, 4));
      // .animate({scrollTop: $('#offset').scrollHeight}, 1000);
    },

    create: function () {
      this.currentView = new APP.Views.NoteNewView({notes: this.notes, note: new APP.Models.NoteModel()});
      $('#primary-content').html(this.currentView.render().el);
    },

    edit: function (id) {
      var note = this.notes.get(id);
      this.currentView = new APP.Views.NoteEditView({note: note});
      $('#primary-content').html(this.currentView.render().el);
    },

    show: function (id) {
      var note = this.notes.get(id);
      this.currentView = new APP.Views.NoteShowView({note: note});
      $('#primary-content').html(this.currentView.render().el);
    },

    index: function () {
      this.currentView = new APP.Views.NoteIndexView({notes: this.notes});
      $('#primary-content').html(this.currentView.render().el);
      // we would call to the index with
      // this.notes.fetch()
      // to pull down the index json response to populate our collection initially
    }
  });
}());
