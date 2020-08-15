import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h1{
  //     color: red;
  //   }
  // `]
})
export class AppComponent {
  // String interpolation part start
  name:string = 'Shubham Suryawanshi'; // We have dfined here that name is string, its optional
  years:number = 24; // also we have mentioned that years is number, again its optional, it will work if we don't define it

  // we can also call function which will return name
  getName(){
    return this.name;
  }
  // String interpolation part end

  // Property binding part starts
  allowButton = false;

  constructor(){
    setTimeout(() => {
      this.allowButton = true;
    }, 3000);
  }
  // Property binding part end

  // event binding starts here
  showServerStatus = "No server created!";
  serverName = "test server";

  serverCreated(){
    this.showServerStatus = "Created server name is:- " + this.serverName + "!";
  }

  updatedServerName(event: Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  // event binding ends here

  // Assignment question
  // 1. add a input field which updates the porperty "username" via Two-Way binding
  // 2. Output the username property via String interpolation (in a paragraph below input)
  // 3. Add a button which may only be clicked if the username is NOT an empty string
  // 4. Upon clicking the button, the username should be reset to in EMPTY string
  userName = "Shubham Suryawanshi";
  clearUsername(){
    this.userName = '';
  }
  
}
