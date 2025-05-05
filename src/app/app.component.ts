import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolBarComponent} from './public/tool-bar/tool-bar.component';
import {FooterContentComponent} from './public/footer-content/footer-content.component';
import {UniversityListComponent} from './public/card-list/card-list.component';

@Component({
  selector: 'app-root',
  imports: [ToolBarComponent, FooterContentComponent, UniversityListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica2PC1';
}
