var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var comments = [];

var CommentStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  getAll: function() {
    return comments;
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case "CREAT_COMMENT":
      comments.push(action.comment);
      CommentStore.emitChange();
      break;
    default:
  }
});

module.exports = CommentStore;