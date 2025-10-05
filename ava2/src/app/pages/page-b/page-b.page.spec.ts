import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageBPage } from './page-b.page';

describe('PageBPage', () => {
  let component: PageBPage;
  let fixture: ComponentFixture<PageBPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
