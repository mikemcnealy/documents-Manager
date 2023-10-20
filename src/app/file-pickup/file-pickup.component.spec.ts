import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePickupComponent } from './file-pickup.component';

describe('FilePickupComponent', () => {
  let component: FilePickupComponent;
  let fixture: ComponentFixture<FilePickupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilePickupComponent]
    });
    fixture = TestBed.createComponent(FilePickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
