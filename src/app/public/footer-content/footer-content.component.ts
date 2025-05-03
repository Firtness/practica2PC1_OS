import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-footer-content',
  imports: [
    TranslatePipe,
    LanguageSwitcherComponent
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {

}
