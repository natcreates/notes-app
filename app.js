const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// the help function allows users to run the program with the --help flag
// and see any info added via command
// command allows us to specify options surrounding commands and flags

const titleOptions = {
	describe: 'Title of note',
	// make required
	demand: true,
	// provide shortcut
	alias: 't'
}

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}

const argv = yargs
	.command('add', 'Adds a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'Lists all notes')
	.command('clear', 'Removes all notes')
	.command('read', 'Reads a note', {
		title: titleOptions
	})
	.command('remove', 'Removes a note', {
		title: titleOptions
	})
	.help()
	.argv;


var command = argv._[0];

if (command === "add") {
	var note = notes.addNote(yargs.argv.title, yargs.argv.body);

	if (note){
		console.log(`${note.title} created.`);
	} else {
		console.log("A note with the same title already exists. Note not created.")
	}
} else if (command === "list") {
	var allNotes = notes.getAll();
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === "clear") {
	notes.removeAll();
	console.log("All notes removed.")
} else if (command === "remove") {
	var removed = notes.removeNote(yargs.argv.title);
	var message = removed ? "Note removed" : "No note with that title found";
	console.log(message);

} else if (command === "read") {
	var note = notes.readNote(yargs.argv.title);
	if (note) {
		notes.logNote(note);
	} else {
		console.log("No note found");
	}
	

} else {
	console.log("command not recognised");
}