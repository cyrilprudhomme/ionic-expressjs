import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectdetailPage } from './projectdetail.page';

describe('ProjectdetailPage', () => {
  let component: ProjectdetailPage;
  let fixture: ComponentFixture<ProjectdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProjectdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
