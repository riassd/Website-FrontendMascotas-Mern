import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarConstrasenaComponent } from './recuperar-constrasena.component';

describe('RecuperarConstrasenaComponent', () => {
  let component: RecuperarConstrasenaComponent;
  let fixture: ComponentFixture<RecuperarConstrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarConstrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarConstrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
