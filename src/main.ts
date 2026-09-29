import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { EntityResolutionPage } from './app/entity-resolution';
import { AppComponent } from './app/app.component';
import { HomePage, CapabilitiesPage, SolutionsPage, AboutPage } from './app/pages';
bootstrapApplication(AppComponent,{providers:[provideRouter([
 {path:'',component:HomePage,title:'Discovery Technologies | Smarter systems. Better decisions.'},
 {path:'capabilities',component:CapabilitiesPage,title:'Capabilities | Discovery Technologies'},
 {path:'solutions',component:SolutionsPage,title:'Solutions | Discovery Technologies'},
 {path:'entity-resolution',component:EntityResolutionPage,title:'U1 Entity Resolution | Discovery Technologies'},
 {path:'about',component:AboutPage,title:'About | Discovery Technologies'},
 {path:'**',redirectTo:''}
],withInMemoryScrolling({scrollPositionRestoration:'enabled',anchorScrolling:'enabled'}))]}).catch(console.error);
