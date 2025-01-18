import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";


@Component({
  selector: 'app-page',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ProjectCardComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
