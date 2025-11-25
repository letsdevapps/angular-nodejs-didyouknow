import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAwards } from './component-awards';

describe('ComponentAwards', () => {
  let component: ComponentAwards;
  let fixture: ComponentFixture<ComponentAwards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAwards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAwards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
