import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistantPage } from './assistant.page';

describe('AssistantPage', () => {
  let component: AssistantPage;
  let fixture: ComponentFixture<AssistantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
