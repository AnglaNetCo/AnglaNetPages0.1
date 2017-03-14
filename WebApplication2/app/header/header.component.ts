import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: './app/header/header.component.html',
    styleUrls: ['./app/header/header.component.css']
})
export class HeaderComponent {
    name: string;
    selected: number;

    constructor() {
        //this.titles = ["Tasks", "Repetitor"];
        this.name = "Ilya";
        console.log("Hello");
    }

    select(n: number) {
        this.name = "CLICK!";
        this.selected = n;
    }
}