import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-project-body-pattern',
    imports: [NgFor, NgStyle],
    templateUrl: './project-body-pattern.component.html',
    styleUrl: './project-body-pattern.component.scss',
    host: {'class': 'app-project-body-pattern'}
})
export class ProjectBodyPatternComponent {
    @Input() image: string = '';
    @Input() rows: number = 1;

    imageStyle(): string {
        return `url("${this.image}")`;
    }
}
