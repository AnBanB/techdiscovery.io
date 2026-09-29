import { Component, signal } from '@angular/core';
import { IconComponent } from './shared';

@Component({
  standalone: true,
  imports: [IconComponent],
  templateUrl: './entity-resolution.html',
  styleUrl: './entity-resolution.css'
})
export class EntityResolutionPage {
  resolved = signal(false);
}
