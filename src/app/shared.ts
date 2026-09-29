import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-icon',standalone:true,template:`<img [src]="'assets/icons/' + name + '.svg'" [alt]="alt" [style.width.px]="size" [style.height.px]="size" loading="lazy">`})
export class IconComponent { @Input({required:true}) name=''; @Input() alt=''; @Input() size=72; }
@Component({selector:'app-clients',standalone:true,template:`<div class="clients" aria-label="Organisations we have worked with"><span class="sagicor">Sagicor<small>GROUP</small></span><span class="nmia">NMIA<small>AIRPORTS LIMITED</small></span><span class="explore">EXPLORE<small>YOUR WORLD</small></span><span class="radwest">RADWEST<small>RADIOLOGY</small></span></div>`})
export class ClientsComponent {}
@Component({selector:'app-cta',standalone:true,imports:[IconComponent],template:`<section class="cta"><div class="container cta-inner"><app-icon name="discovery-emblem" [size]="106"/><div><h2>{{title}}</h2><p>{{description}}</p></div><a class="button" href="mailto:support@techdiscovery.io">Talk to Discovery <span aria-hidden="true">→</span></a></div></section>`})
export class CtaComponent { @Input() title='Let’s solve your data and identity challenges.'; @Input() description='Tell us what you’re trying to achieve and we’ll show you how our capabilities can help.'; }
export const capabilities=[
 {title:'Identify',subtitle:'Entity Resolution',icon:'identify-fingerprint',intro:'We resolve fragmented records and establish unique customer and entity identities.',points:['Match duplicates across systems and data sources','Create a single, trusted view of each customer','Improve data quality and reduce risk','Strengthen compliance and reporting']},
 {title:'Connect',subtitle:'Data Integration',icon:'connect-network',intro:'We bring together information from multiple systems and data sources.',points:['Integrate structured and unstructured data','Link customer, transactional and reference data','Ensure accuracy, consistency and lineage','Enable real-time access and sharing']},
 {title:'Build',subtitle:'Enterprise Software',icon:'build-monitor',intro:'We develop enterprise applications that turn trusted data into operational solutions.',points:['Automate processes and workflows','Deliver customer-centric digital experiences','Integrate with your existing systems','Scale securely and cost-effectively']}
];
export const process=[
 {title:'Discover',icon:'discover-circle',text:'We understand your data, systems and business challenges.'},
 {title:'Design',icon:'design-circle',text:'We design the right data and solution architecture for your needs.'},
 {title:'Deliver',icon:'deliver-circle',text:'We build, integrate and validate the solution with measurable results.'},
 {title:'Drive value',icon:'drive-value-circle',text:'We help you adopt, optimise and scale for long-term impact.'}
];
export const benefits=[
 {title:'Trusted Decisions',icon:'trusted-decisions',text:'Make decisions with confidence using accurate, complete data.'},
 {title:'Better Customer Experiences',icon:'customer-experiences',text:'Understand and serve your customers with relevant, connected information.'},
 {title:'Operational Efficiency',icon:'operational-efficiency',text:'Reduce manual work, eliminate duplicates and streamline processes.'},
 {title:'Business Growth',icon:'business-growth',text:'Unlock insights, improve performance and drive new opportunities.'},
 {title:'Reduced Risk',icon:'reduced-risk',text:'Strengthen compliance, security and governance across your data.'}
];
@Component({selector:'app-benefits',standalone:true,imports:[IconComponent],template:`<div class="benefits">@for (item of items; track item.title) {<article><app-icon [name]="item.icon" [size]="64"/><h3>{{item.title}}</h3><p>{{item.text}}</p></article>}</div>`})
export class BenefitsComponent { @Input() items=benefits; }
