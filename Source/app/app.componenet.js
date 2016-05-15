"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var heroes_component_1 = require('./heroes.component');
var hero_service_1 = require('./hero.service');
var Router1 = require("../node_modules/@angular/router-deprecated/router");
var RouterProviders = require("../node_modules/@angular/router-deprecated/src/router_providers");
var RouteConfigDecorator = require("../node_modules/@angular/router-deprecated/src/route_config/route_config_decorator");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <h1>{{title}}</h1>\n  <a [routerLink]=\"['Heroes']\">Heroes</a>\n  <router-outlet></router-outlet>\n",
            directives: [Router1.ROUTER_DIRECTIVES],
            providers: [
                RouterProviders.ROUTER_PROVIDERS,
                hero_service_1.HeroService
            ]
        }),
        RouteConfigDecorator.RouteConfig([
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.componenet.js.map