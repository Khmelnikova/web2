(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Person = require('./person.js');
var Student = require('./student.js');

},{"./person.js":2,"./student.js":3}],2:[function(require,module,exports){
"use strict"
module.exports = class Person {
    constructor(name, id) {
    this.name = name;
    this.id=id;
  }
    get name() {
        return this;
    }
    set name(name) {
        this.name = name;
    }
  }

},{}],3:[function(require,module,exports){
"use strict"
var Person = require('./person.js');

class Studend extends Person 
{
    	constructor(name, id, faculty, group) {
		super(name, id);
		this.faculty = faculty;
        this.group = group;
	}
	get prop(){
		return this;
	}
	
}
},{"./person.js":2}]},{},[1]);
