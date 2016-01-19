
"use strict";
APP.NoteIndexView = Backbone.View.extend({

	template: _.template($('#indexTemplate').html()),

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template({notes: this.collection.toJSON()})
    );
    return this;
  }
});

