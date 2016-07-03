import {Component} from '@angular/core';

import {Demon} from './demon';
import {DemonDetailComponent} from './demon-detail.component';
import {SideBarComponent} from './sidebar.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DemonDetailComponent, SideBarComponent]
})


export class AppComponent {
    title = 'Bestest Smartest App';
    selectedDemon: Demon;
    public Demons = DEMONS;

    onSelect(demon: Demon) { this.selectedDemon = demon; }

}

const DEMONS: Demon[] = [
    { id: 12, name: 'Diablo' },
    { id: 2, name: 'Maphisto' },
    { id: 3, name: 'Duriel' },
    { id: 4, name: 'Butcher' }
];



