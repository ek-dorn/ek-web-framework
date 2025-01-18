import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-project-card',
    imports: [CommonModule],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
    @Input() image: string = '';
    @Input() title: string = '';
    @Input() labels: Array<string> = [];
}
