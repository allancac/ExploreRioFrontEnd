import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-trail-card',
  imports: [MatList, MatListItem, MatIcon, MatCardModule,
    MatButtonModule, MatChipsModule],
  templateUrl: './trail-card.html',
  styleUrl: './trail-card.css'
})
export class TrailCard {
  @Input() trail: any
}
