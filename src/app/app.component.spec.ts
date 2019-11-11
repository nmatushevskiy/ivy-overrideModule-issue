import { TestBed, async } from '@angular/core/testing';
import { Component} from '@angular/core';
import { AppComponent } from './app.component';
import {TestModule} from "./test-component/test.module";
import {TestComponent} from "./test-component/test.component";
import {AppModule} from "./app.module";

@Component({
  selector: 'test-cmp',
  template: ``
})
class MockedTestComponent {
  testField = 'overwritten';
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).overrideModule(TestModule, {
      remove: { declarations: [TestComponent], exports: [TestComponent] },
      add: { declarations: [MockedTestComponent], exports: [MockedTestComponent] }
    });
  });

  it('issue example', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.testCmpCtrl.testField).toBe('overwritten');
  });
});
