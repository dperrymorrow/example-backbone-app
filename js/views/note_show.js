"use strict";

APP.NoteShowView = Backbone.View.extend({
  // the template
  template: _.template($('#showTemplate').html()),

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template(this.model.toJSON())
    );
    return this;
  }
});

