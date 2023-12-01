import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashboredComponent } from './post-dashbored.component';

describe('PostDashboredComponent', () => {
  let component: PostDashboredComponent;
  let fixture: ComponentFixture<PostDashboredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDashboredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashboredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
