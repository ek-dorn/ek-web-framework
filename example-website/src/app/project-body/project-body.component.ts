import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-body',
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
