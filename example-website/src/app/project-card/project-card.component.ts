import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
    selector: 'app-project-card',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
    @Input() project: string = '';
    @Input() image: string = '';
    @Input() title: string = '';
    @Input() labels: Array<string> = [];
}
