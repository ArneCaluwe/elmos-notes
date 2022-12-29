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
  close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
