"use strict";

APP.NoteNewView = Backbone.View.extend({
  // functions to fire on events
  // here we are blocking the submission of the form, and handling it ourself
  events: {
    "click button.save": "save",
    "keyup input": "validate",
    "keyup textarea": "validate"
  },
  
  template: _.template($('#formTemplate').html()),

  initialize: function (options) {
    this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
  },

  save: function (event) {
    event.stopPropagation();
    event.preventDefault();

    // update our model with values from the form
    this.model.set({
      title: this.$el.find('input[name=title]').val(),
      author: this.$el.find('input[name=author]').val(),
      description: this.$el.find('textarea[name=description]').val(),
      // just setting random number for id would set as primary key from server
      id: _.random(0, 100)
    });
    
    if (this.model.isValid()){
      // add it to the collection
      this.collection.add(this.model);
      // this.note.save();
      // redirect back to the index
      Backbone.history.navigate("notes/index", {trigger: true});
    }
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template(this.model.toJSON())
    );
    return this;
  }
});
