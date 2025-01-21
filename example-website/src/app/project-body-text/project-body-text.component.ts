import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-project-body-text',
    imports: [],
    templateUrl: './project-body-text.component.html',
    styleUrl: './project-body-text.component.scss',
    host: {'class': 'app-project-body-text'}
})
export class ProjectBodyTextComponent {
    @Input() image: string = '';
}
