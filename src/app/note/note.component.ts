import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../models/note.model';
import { DirectivesModule } from '../directives/directives.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, DirectivesModule, FormsModule],
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
