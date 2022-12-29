import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoteComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
