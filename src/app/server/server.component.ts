import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    serverId:number = 10;
    serverStatus:string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }

    // Assignment task given below
    // 1. Add A button which says 'Display Details'
    // 2. Add a paragraph with any content of your choice (e.g. 'Secret password = tuna')
    // 3. Toggle the displaying of that paragraph with the button created in the first step
    // 4. Log all button clicks in an array and output that array below the secret paragraph (may be log a timestamp or increment no)
    // 5. Starting at the 5th log item, give all future log itemsa blue background (via ngStyle) and white color  (via ngClass)

    isShowParagraph = false;
    buttonClickArray = []
    showParagraph(){
        this.buttonClickArray.push(new Date());
        this.isShowParagraph = !this.isShowParagraph;
    }


}