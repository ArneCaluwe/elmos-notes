import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteCollectionModule } from './note-collection/note-collection.module';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoteComponent, NoteCollectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
