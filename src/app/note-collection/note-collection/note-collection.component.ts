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
    noteContent: 'wall-decoration',
  };
  note2: Note = {
    noteTitle: 'my wishlist',
    noteContent: 'running shoes',
  };
  note3: Note = {
    noteTitle: 'people to ignore',
    noteContent: 'John legend',
  };
}
