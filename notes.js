const fs = require('fs');

var addNote = (title, body) => {
	// create empty array to store all note objs in
	var notes = [];
	var newNote = {
		title,
		body
	}
	notes = JSON.parse(fs.readFileSync('notes-data.json'));
	notes.push(newNote);
	fs.writeFileSync('notes-data.json', JSON.stringify(newNote));
}

var removeNote = (title) => {
	
}	

var readNote = (title) => {
	var openNote = fs.readFileSync('notes.json');
}	openNote = JSON.parse(openNote);

var getAll = () => {
	var noteList = fs.readFileSync('notes.json');
	console.log(JSON.stringify(noteList));
}


module.export = {
	addNote,
	removeNote,
	getAll,
	readNote
}
