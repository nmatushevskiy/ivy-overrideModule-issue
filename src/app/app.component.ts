import {Component, ViewChild} from '@angular/core';
import {TestComponent} from "./test-component/test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('testCmpCtrl', {static: true}) testCmpCtrl: TestComponent;
}
