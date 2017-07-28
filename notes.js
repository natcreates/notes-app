const fs = require('fs');

var fetchNotes = () => {
	// create empty array to store all note objs in
	var notes = [];
	try {
		notes = JSON.parse(fs.readFileSync('notes-data.json'));
	} catch (e) {
		return [];
	}
	return notes;
}

var saveNotes = (notes) => {
	var notesString = JSON.stringify(notes);
	fs.writeFileSync('notes-data.json', notesString);
}

var addNote = (title, body) => {
	var newNote = {
		title,
		body
	}
	var notes = fetchNotes();
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(newNote);
		saveNotes(notes);
	}
}

var removeNote = (title) => {
	var notes = fetchNotes();
	//if (notes.indexOf(notes.))
	var removedNote = notes.filter((note) => note.title === title);

}	

var readNote = (title) => {
	var notes = fetchNotes();
	var chosenNote = notes.filter((note) => note.title === title);
	console.log(JSON.stringify(chosenNote[0]));
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
