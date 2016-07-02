import {Component} from '@angular/core';

export class Demon {
    id: number;
    name : string;
}


@Component({
    selector: 'my-app',
    template: `
    <h1> {{title}} {{demon.id}} {{demon.name}} </h1>
    <h2>My Demons</h2>
        <ul class = "demons">
        <li *ngFor = 'let d of Demons'>
            <span class = "badge">{{d.id}} {{d.name}}</span>
        </li>
        </ul>
    `
})

export class AppComponent {
    title = 'Bestest Smartest App';
    demon: Demon = {
        id: 1,
        name : "Baal"
    };
    public Demons = DEMONS;
}

const DEMONS: Demon[] = [
    {id: 12, name: 'Diablo'},
    {id: 2, name:'Maphisto'},
    {id: 3, name: 'Duriel'},
    {id: 4, name: 'Butcher'}
];



