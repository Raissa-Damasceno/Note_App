import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

console.log(NotesAPI.getAllNotes());

// NotesAPI.saveNote({
//   title: "Hello",
//   body: "Test",
// });

const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("Let's add a note");
  },
  onNoteEdit(newTitle) {
    console.log(newTitle);
  },
  onNoteSelect(id) {
    console.log("Note Selected:" + id);
  },
  onNoteDelete(id) {
    console.log("Note Deleted:" + id);
  },
});

view.updateNoteList(NotesAPI.getAllNotes());
