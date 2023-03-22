export default class NotesAPI {
  static getAllNotes() {
    // localStorage.clear()
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    const existing = notes.find((note) => note.id == noteToSave.id);

    if (existing) {
      existing.title = noteToSave.title;
      existing.body = noteToSave.body;
      existing.updated = new Date().toISOString();
    } else {
      noteToSave.id = Math.floor(Math.random() * 1000000);
      noteToSave.update = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }

  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();

    const newNotes = notes.filter((note) => note.is != id);

    localStorage.setItem("noteapp-notes", JSON.stringify(newNotes))
  }
}
