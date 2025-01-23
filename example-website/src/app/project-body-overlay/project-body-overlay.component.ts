import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-body-overlay',
    imports: [],
    templateUrl: './project-body-overlay.component.html',
    styleUrl: './project-body-overlay.component.scss',
    host: {'class': 'app-project-body-overlay'}
})
export class ProjectBodyOverlayComponent {
    @Input() image: string = '';
}
