import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-project-body-feature',
    imports: [],
    templateUrl: './project-body-feature.component.html',
    styleUrl: './project-body-feature.component.scss',
    host: {'class': 'app-project-body-feature'}
})
export class ProjectBodyFeatureComponent {
    @Input() image: string = '';
}
