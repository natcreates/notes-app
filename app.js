const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === "add") {
	var note = notes.addNote(yargs.argv.title, yargs.argv.body);

	if (note){
		console.log(`Note with title ${note.title} created.`);
	} else {
		console.log("A note with the same title already exists. Note not created.")
	}
} else if (command === "list") {
	notes.getAll();
} else if (command === "clear") {
	notes.removeAll();
} else if (command === "remove") {
	var removed = notes.removeNote(yargs.argv.title);
	var message = removed ? "Note removed" : "No note with that title found";
	console.log(message);

} else if (command === "read") {
	var note = notes.readNote(yargs.argv.title);
	if (note) {
		console.log(note.title);
		console.log(note.body);
	} else {
		console.log("No note found");
	}
	

} else {
	console.log("command not recognised");
}