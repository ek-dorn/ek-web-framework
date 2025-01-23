import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


type Alignment = "left" | "center" | "right";


@Component({
    selector: 'app-project-body-text',
    imports: [NgStyle],
    templateUrl: './project-body-text.component.html',
    styleUrl: './project-body-text.component.scss',
    host: {'class': 'app-project-body-text'}
})
export class ProjectBodyTextComponent {
    @Input() image: string = '';
    @Input() alignment: Alignment = 'center';
}
