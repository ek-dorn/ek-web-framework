import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project-body-header',
  imports: [],
  templateUrl: './project-body-header.component.html',
  styleUrl: './project-body-header.component.scss',
  host: {'class': 'app-project-body-header'}
})
export class ProjectBodyHeaderComponent {
    @Input() title: string = '';
    @Input() image: string = '';
    @Input() subtitle: string = '';
    @Input() background: string = '';
}
