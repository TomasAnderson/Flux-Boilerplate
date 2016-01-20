var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _list = {};


//private methods
function create (text) {
	
}

function update (id, updates) {
	_list[id] = assign({}, _list[id], updates);
}

function updateAll (updates) {
	for (var id in _list) {
		update(i, updates);
	}
}

function delete (id) {
	delete _list[id];
}

var Store = assign({}, EventEmitter.prototype, {
	init: function () {
		//initialize store
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);	
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeChangeListener(CHANGE_EVENT, callback);
	},

	get: function (id) {
		return _list[id];
	},

	getAll: function () {
		return _list;
	}
});

AppDispatcher.register(function (action) {
	switch(action.actionType) {

		// case Constants.{action}
		//     do something
		//	   break;

		default:
			//no op

	}
});