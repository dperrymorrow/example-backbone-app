
"use strict";
APP.NoteShowView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    this.note = options.note;
    this.template = _.template($('#showTemplate').html());
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template(this.note.toJSON())
    );
    return this;
  }
});

