import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-project-body-footer',
    imports: [],
    templateUrl: './project-body-footer.component.html',
    styleUrl: './project-body-footer.component.scss',
    host: {'class': 'app-project-body-footer'}
})
export class ProjectBodyFooterComponent {
    @Input() image: string = '';
}
