import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCollectionComponent } from './note-collection.component';

describe('NoteCollectionComponent', () => {
  let component: NoteCollectionComponent;
  let fixture: ComponentFixture<NoteCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
