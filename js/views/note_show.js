
"use strict";
APP.NoteShowView = Backbone.View.extend({
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

