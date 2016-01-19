"use strict";

APP.NoteNewView = Backbone.View.extend({
  // functions to fire on events
  // here we are blocking the submission of the form, and handling it ourself
  events: {
    "click button.save": "save"
  },
  
  template: _.template($('#formTemplate').html()),

  // the constructor
  initialize: function (options) {
    this.model.bind('invalid', this.showErrors, this);
  },

  showErrors: function (note, errors) {
    this.$el.find('.error').removeClass('error');
    this.$el.find('.alert').html(_.values(errors).join('<br>')).show();
    // highlight the fields with errors
    _.each(_.keys(errors), _.bind(function (key) {
      this.$el.find('*[name=' + key + ']').parent().addClass('error');
    }, this));
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
      id: Math.floor(Math.random() * 100) + 1
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
