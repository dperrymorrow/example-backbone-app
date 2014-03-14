
"use strict";
APP.NoteIndexView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    // model is passed through
    this.notes = options.notes;
    this.notes.bind('reset', this.addAll, this);
  },

  // populate the html to the dom
  render: function () {
    this.$el.html($('#indexTemplate').html());
    this.addAll();
    return this;
  },

  addAll: function () {
    // clear out the container each time you render index
    this.$el.find('tbody').children().remove();
    _.each(this.notes.models, $.proxy(this, 'addOne'));
  },

  addOne: function (note) {
    var view = new APP.NoteRowView({
      notes: this.notes, 
      note: note
    });
    this.$el.find("tbody").append(view.render().el);
  }
});

