"use strict";
window.APP = window.APP || {};
APP.NoteRouter = Backbone.Router.extend({
  routes: {
    "note/new": "create",
    "notes/index": "index",
    "note/:id/edit": "edit",
    "note/:id/view": "show"
  },

  $container: null,

  initialize: function (options) {
    this.notes = options.notes;
    this.$container = $('#primary-content');
    // this is debug only to demonstrate how the backbone collection / models work
    this.notes.bind('reset', this.updateDebug, this);
    this.notes.bind('add', this.updateDebug, this);
    this.notes.bind('remove', this.updateDebug, this);
    this.index();
  },

  updateDebug: function () {
    $('#output').text(JSON.stringify(this.notes.toJSON(), null, 4));
  },

  create: function () {
    var view = new APP.NoteNewView({
      notes: this.notes, 
      note: new APP.NoteModel()
    });
    this.$container.html(view.render().el);
  },

  edit: function (id) {
    var view = new APP.NoteEditView({note: this.notes.get(id)});
    this.$container.html(view.render().el);
  },

  show: function (id) {
    var view = new APP.NoteShowView({note: this.notes.get(id)});
    this.$container.html(view.render().el);
  },

  index: function () {
    var view = new APP.NoteIndexView({notes: this.notes});
    this.$container.html(view.render().el);
    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  }
});
