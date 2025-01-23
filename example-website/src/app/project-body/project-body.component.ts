import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectBodyHeaderComponent } from '../project-body-header/project-body-header.component';
import { ProjectBodyTextComponent } from "../project-body-text/project-body-text.component";
import { ProjectBodyFeatureComponent } from "../project-body-feature/project-body-feature.component";
import { ProjectBodyOverlayComponent } from "../project-body-overlay/project-body-overlay.component";
import { ProjectBodyFooterComponent } from "../project-body-footer/project-body-footer.component";
import { ProjectBodyPatternComponent } from "../project-body-pattern/project-body-pattern.component";

@Component({
    selector: 'app-project-body',
    imports: [ProjectBodyHeaderComponent, ProjectBodyTextComponent, ProjectBodyFeatureComponent, ProjectBodyOverlayComponent, ProjectBodyFooterComponent, ProjectBodyPatternComponent],
    templateUrl: './project-body.component.html',
    styleUrl: './project-body.component.scss',
    host: {'class': 'app-project-body'}
})
export class ProjectBodyComponent {
    project: string | null = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.project = params.get('project');
        });
    }
}
