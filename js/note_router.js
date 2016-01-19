"use strict";
window.APP = window.APP || {};
APP.NoteRouter = Backbone.Router.extend({
  routes: {
    "note/new": "create",
    "notes/index": "index",
    "note/:id/edit": "edit",
    "note/:id/delete": "delete"
  },

  $container: $('#primary-content'),

  initialize: function (options) {
    this.collection = options.collection;
    this.index();
    APP.helpers.debug(this.collection);
    // start backbone watching url changes
    Backbone.history.start();
  },

  create: function () {
    var view = new APP.NoteNewView({
      collection: this.collection, 
      model: new APP.NoteModel()
    });
    this.$container.html(view.render().el);
  },

  delete: function (id) {
    var note = this.collection.get(id);
    this.collection.remove(note);
    Backbone.history.navigate("notes/index", {trigger: true});
  },

  edit: function (id) {
    var view = new APP.NoteEditView({model: this.collection.get(id)});
    this.$container.html(view.render().el);
  },

  index: function () {
    var view = new APP.NoteIndexView({collection: this.collection});
    this.$container.html(view.render().el);
    // we would call to the index with
    // this.collection.fetch()
    // to pull down the index json response to populate our collection initially
  }
});
