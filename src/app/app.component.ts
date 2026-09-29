import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IconComponent } from './shared';
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterLinkActive,RouterOutlet,IconComponent],templateUrl:'./app.component.html'})
export class AppComponent { menuOpen=signal(false); year=new Date().getFullYear(); close(){this.menuOpen.set(false);} }
