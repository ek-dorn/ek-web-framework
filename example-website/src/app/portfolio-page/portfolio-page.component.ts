import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProjectCardComponent } from '../project-card/project-card.component';


@Component({
    selector: 'app-page',
    imports: [CommonModule, RouterOutlet, ProjectCardComponent],
    templateUrl: './portfolio-page.component.html',
    styleUrl: './portfolio-page.component.scss'
})
export class PageComponent {

}
