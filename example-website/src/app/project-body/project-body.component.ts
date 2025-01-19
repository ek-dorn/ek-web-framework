import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-body',
  imports: [],
  templateUrl: './project-body.component.html',
  styleUrl: './project-body.component.scss'
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
