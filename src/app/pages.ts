import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent, ClientsComponent, CtaComponent, BenefitsComponent, capabilities, process, benefits } from './shared';

@Component({standalone:true,imports:[RouterLink,IconComponent,ClientsComponent,CtaComponent],templateUrl:'./home.html'})
export class HomePage { capabilities=capabilities; }
@Component({standalone:true,imports:[RouterLink,IconComponent,CtaComponent,BenefitsComponent],templateUrl:'./capabilities.html'})
export class CapabilitiesPage { capabilities=capabilities; process=process; }
@Component({standalone:true,imports:[RouterLink,IconComponent,ClientsComponent,CtaComponent,BenefitsComponent],templateUrl:'./solutions.html'})
export class SolutionsPage {
 solutions=[
 {title:'Customer & Entity Resolution',icon:'customer-entity-target',description:'Identify and unify customer records across multiple systems and data sources.',points:['Eliminate duplicates and reduce data errors','Create a single, trusted customer view','Improve reporting, compliance and decision making'],detail:'Bring fragmented customer and entity records together. We help define matching rules, resolve duplicates and establish identities that your teams can trust.'},
 {title:'Data Integration',icon:'data-integration-linked-database',description:'Bring data together from across your systems and keep it accurate and consistent.',points:['Integrate structured and unstructured data','Link customer, transactional and reference data','Enable real-time access and sharing'],detail:'Connect the systems your organisation relies on through APIs, data pipelines and integration workflows, with validation and monitoring suited to your operations.'},
 {title:'Enterprise Applications',icon:'operational-efficiency',description:'Custom applications that automate processes and improve the way you work.',points:['Automate workflows and reduce manual work','Deliver customer-centric digital experiences','Integrate with existing systems securely'],detail:'Turn your operational needs into secure, usable software. We design, build and integrate applications around your teams, data and existing systems.'},
 {title:'Address & Location Intelligence',icon:'address-location-intelligence',description:'Cleanse, validate and enrich address data with location intelligence.',points:['Standardise and verify address data','Improve accuracy for delivery and services','Enable mapping, analytics and planning'],detail:'Improve the usefulness of your location data through address standardisation, validation and spatial analysis that supports planning and service delivery.'}
 ];
 steps=[{title:'Understand',icon:'discover-hexagon',text:'We learn your business, systems and data challenges.'},{title:'Assess',icon:'assess-systems-hierarchy',text:'We assess data quality, sources and integration needs.'},{title:'Design',icon:'design-circle',text:'We design the right solution architecture for your needs.'},{title:'Build',icon:'deliver-hexagon',text:'We build, integrate and test for security and performance.'},{title:'Deliver & Improve',icon:'drive-value-hexagon',text:'We deliver measurable results and continuously optimise.'}];
}
@Component({standalone:true,imports:[IconComponent,CtaComponent,BenefitsComponent],templateUrl:'./about.html'})
export class AboutPage {
 approach=[{title:'Understand the real problem',icon:'customer-entity-target',text:'We start by understanding your business, data and systems to uncover the root of the challenge.'},{title:'Design the right solution',icon:'design-interlocking-puzzles',text:'We design the data, processes and technology architecture that fits your needs.'},{title:'Build and integrate',icon:'deliver-circle',text:'We build, integrate and test solutions that work securely with your existing systems.'},{title:'Deliver measurable results',icon:'drive-value-circle',text:'We stay focused on outcomes that create value and improve performance over time.'}];
 values=[{title:'Integrity',icon:'trusted-decisions',text:'We do the right thing. Always.'},{title:'Client Success',icon:'customer-experiences',text:'Your outcomes are our priority.'},{title:'Expertise',icon:'expertise-lightbulb',text:'We bring deep knowledge and practical experience.'},{title:'Security & Trust',icon:'reduced-risk',text:'We build solutions that protect what matters.'},{title:'Continuous Improvement',icon:'continuous-improvement',text:'We learn, adapt and keep getting better.'}];
 industries=[{title:'Financial Services',icon:'financial-services'},{title:'Government',icon:'government'},{title:'Transport & Logistics',icon:'transport-logistics-airplane'},{title:'Healthcare',icon:'healthcare'}];
}
