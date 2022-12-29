import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';
import { NoteCollectionComponent } from './note-collection/note-collection.component';

@NgModule({
  declarations: [NoteCollectionComponent],
  imports: [CommonModule, NoteComponent],
  exports: [NoteCollectionComponent],
})
export class NoteCollectionModule {}
