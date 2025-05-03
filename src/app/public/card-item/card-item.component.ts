import {Component, Input} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {University} from '../../universities/model/university.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';


@Component({
  selector: 'app-card-item',
  imports: [MatCardModule, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() university!: University;
}
