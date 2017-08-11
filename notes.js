const fs = require('fs');

var fetchNotes = () => {
	// create empty array to store all note objs in
	var notes = [];
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
	return notes;
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
	var note = {
		title,
		body
	}
	var notes = fetchNotes();
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		// returns the new note to app.js
		return note;
	}
}

var removeNote = (title) => {
	var notes = fetchNotes();
	// keep all notes that don't have this title
	filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	// return true if a note is removed
	return filteredNotes.length	!== notes.length;
}	

var readNote = (title) => {
	var notes = fetchNotes();
	var chosenNote = notes.filter((note) => note.title === title);
	return JSON.stringify(chosenNote[0]);
}

var getAll = () => {
	var notes = fetchNotes();
	for (var i = 0; i < notes.length; i++) {
		console.log(notes[i]);
	}
}

var removeAll = () => {
	var notes = [];
	saveNotes(notes);
}


module.exports = {
	addNote,
	removeNote,
	getAll,
	readNote,
	removeAll
}
