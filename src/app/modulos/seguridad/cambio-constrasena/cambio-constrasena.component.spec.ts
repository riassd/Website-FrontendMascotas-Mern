import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioConstrasenaComponent } from './cambio-constrasena.component';

describe('CambioConstrasenaComponent', () => {
  let component: CambioConstrasenaComponent;
  let fixture: ComponentFixture<CambioConstrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioConstrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioConstrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
