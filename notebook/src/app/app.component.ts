import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Note = {
  id: number;
  title: string;
  content: string;
  active: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Домашна работа № 2';

  noteId: number = 0;
  noteTitle: string = '';
  noteContent: string = '';

  editableNote?: Note = undefined;

  notes: Note[] = [];

  saveNote() {
    this.notes.push({
      id: this.noteId,
      title: this.noteTitle,
      content: this.noteContent,
      active: false,
    });
    this.noteId++;
    this.noteTitle = '';
    this.noteContent = '';
  }

  selectNote(id: number) {
    this.notes = this.notes.map((note) => {
      if (note.id === id) note.active = !note.active;
      else note.active = false;
      return note;
    });
  }

  deleteNote(id: number) {
    this.notes.forEach((note, index) => {
      if (note.id === id) {
        this.notes.splice(index, 1);
      }
    });
  }

  maeEditableNote(note: Note) {
    this.editableNote = note;
  }

  editNote() {
    this.editableNote = undefined;
  }
}
