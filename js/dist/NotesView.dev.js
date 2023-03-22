"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotesView = function NotesView(root) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      onNoteSelect = _ref.onNoteSelect,
      onNoteAdd = _ref.onNoteAdd,
      onNoteEdit = _ref.onNoteEdit,
      onNoteDelete = _ref.onNoteDelete;

  _classCallCheck(this, NotesView);

  this.root = root;
  this.onNoteSelect = onNoteSelect;
  this.onNoteAdd = onNoteAdd;
  this.onNoteEdit = onNoteEdit;
  this.onNoteDelete = onNoteDelete;
  this.root.innerHTML = "<div class=\"notes__sidebar\">\n    <button class=\"notes__add\"></button>\n    <div class=\"notes__list notes__list-item--selected\">\n        <div class=\"notes__small-title\">Lecture Notes</div>\n        <div class=\"notes__small-body\">I learned nothing Today</div>\n        <div class=\"notes__small-updated\">Thursday 3:30pm</div>\n    </div>\n</div>\n<div class=\"notes__preview\">\n    <input class=\"notes__title\" type=\"text\" placeholder=\"Enter a title...\">\n    <textarea class=\"notes__body\">I am the notes body...</textarea>\n</div>";
};

exports["default"] = NotesView;