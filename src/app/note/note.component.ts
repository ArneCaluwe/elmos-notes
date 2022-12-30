import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input()
  note?: Note;
  @Output()
  noteChange = new EventEmitter<Note>();

  onClose() {
    this.note!.isClosed = true;
    this.noteChange.emit(this.note);
  }
}
