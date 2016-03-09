
"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    title: "",
    description: "",
    author: "",
    // just setting random number for id would set as primary key from server
    id: _.random(0, 10000)
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.title) errors.title = "Hey! Give this thing a title.";
    if (!attrs.description) errors.description = "You gotta write a description, duh!";
    if (!attrs.author) errors.author = "Put your name in dumb dumb...";
    if (!_.isEmpty(errors)) return errors;
  }
});

APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  localStorage: new Backbone.LocalStorage("NoteCollection"),
  model: APP.NoteModel,
});
