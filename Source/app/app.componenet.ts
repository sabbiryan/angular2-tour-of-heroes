
import {Component} from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HeroesComponent} from './heroes.component';

import { HeroService } from './hero.service';

import Router1 = require("../node_modules/@angular/router-deprecated/router");
import RouterProviders = require("../node_modules/@angular/router-deprecated/src/router_providers");
import RouteConfigDecorator = require("../node_modules/@angular/router-deprecated/src/route_config/route_config_decorator");


@Component({
    selector: "my-app",
    template: `
  <h1>{{title}}</h1>
  <a [routerLink]="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
`,

    directives: [Router1.ROUTER_DIRECTIVES],
    providers: [
        RouterProviders.ROUTER_PROVIDERS,
        HeroService
    ]

})

@RouteConfigDecorator.RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])


export class AppComponent {
    title: "Tour of Herous";
}