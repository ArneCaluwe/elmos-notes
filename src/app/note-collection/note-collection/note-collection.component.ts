import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-collection',
  templateUrl: './note-collection.component.html',
  styleUrls: ['./note-collection.component.scss'],
})
export class NoteCollectionComponent {
  note1: Note = {
    noteTitle: 'presents to buy',
    noteTasks: [
      {
        taskContent: 'wall-decoration',
        taskReference: '001',
        completed: false,
      },
      { taskContent: 'a bird cage', taskReference: '002', completed: false },
      { taskContent: 'warm socks', taskReference: '003', completed: true },
    ],
    isClosed: false,
  };
  note2: Note = {
    noteTitle: 'my wishlist',
    noteContent: 'running shoes',
    noteTasks: [],
    isClosed: false,
  };
  note3: Note = {
    noteTitle: 'people to ignore',
    noteContent: 'John legend',
    noteTasks: [],
    isClosed: false,
  };
}
