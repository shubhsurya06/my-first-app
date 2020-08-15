import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <h3>warning-alert works!</h3>
    <br />
    <div app-success-alert></div>
  `,
  // styleUrls: ['./warning-alert.component.css']
  styles: [`
    h3{
      padding: 30px;
      background-color: mistyrose;
      border: 1px solid red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
