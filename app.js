const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === "add") {
	notes.addNote(yargs.argv.title, yargs.argv.body);
} else if (command === "remove") {
	notes.getAll();
} else if (command === "clear") {
	notes.removeAll();
} else if (command === "list") {
	notes.removeNote(yargs.argv.title);
} else if (command === "read") {
	notes.readNote(yargs.argv.title);
} else {
	console.log("command not recognised");
}