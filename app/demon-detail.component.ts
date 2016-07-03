import {Component, Input} from '@angular/core'

import {Demon} from './demon';

@Component( {
    selector: 'my-hero-detail',
    templateUrl: 'app/demon-detail.component.html'
})

export class DemonDetailComponent  {
    @Input() //What does this do?
    demon: Demon;
}