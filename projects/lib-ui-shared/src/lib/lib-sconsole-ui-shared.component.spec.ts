import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSconsoleUiSharedComponent } from './lib-sconsole-ui-shared.component';

describe('LibSconsoleUiSharedComponent', () => {
  let component: LibSconsoleUiSharedComponent;
  let fixture: ComponentFixture<LibSconsoleUiSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSconsoleUiSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibSconsoleUiSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
