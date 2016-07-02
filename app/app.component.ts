import {Component} from '@angular/core';

export class Demon {
    id: number;
    name : string;
}


@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html'
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



