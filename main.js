(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/about/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] }];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/about/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]
            ],
            declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/about/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/about/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/about/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/about/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/about/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/about/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section container\">\r\n  <h1 class=\"main-title\">About me</h1>\r\n  <p>\r\n    Born and raised in Mumbai, India where I graduated in Computers from Mumbai University. After graduating in 2013 I joined\r\n    Reach1to1 Technologies Pvt. Ltd. - a service based company as trainee and I’ve arrived as an all around UI developer working in Accionlabs (former\r\n    Reach1to1), a Pittsburgh headquartered global technology services firm specializing in working with technology firms and IT organizations in the emerging technologies.\r\n  </p>\r\n  <p>\r\n    Everything started with passion to web technologies. In 2014, I started working as a junior front-end developer in team and\r\n    had already worked on several interesting project till now.\r\n  </p>\r\n  <p>\r\n    I am currently working as a Senior Web Developer and leading a team of 4 young and enthusiastic graduates where we are collaboratively\r\n    working on building large Single Page Application for an American client using latest front-end technologies.\r\n  </p>\r\n  <p>\r\n    Recently, I've moved to London and currently working remotely from here.\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.scss":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.scss */ "./src/app/aboutme/aboutme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n<app-header></app-header>\r\n<div id=\"content\">\r\n<router-outlet>\r\n</router-outlet>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  width: calc(100% - 250px);\n  padding: 40px;\n  min-height: 100vh;\n  transition: all 0.3s;\n  position: absolute;\n  top: 0;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngui/map */ "./node_modules/@ngui/map/esm5/ngui-map.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hello/hello.component */ "./src/app/hello/hello.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _hello_hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_14__["AboutmeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_4__["AboutModule"],
                _ngui_map__WEBPACK_IMPORTED_MODULE_5__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAoos-cq5m9Vgbfah7KoA4WHVDopmpXwBA' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], {
                    useHash: true
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello/hello.component */ "./src/app/hello/hello.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _hello_hello_component__WEBPACK_IMPORTED_MODULE_0__["HelloComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__["SkillsComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'aboutme', component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_4__["AboutmeComponent"] },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    { path: '**', component: _hello_hello_component__WEBPACK_IMPORTED_MODULE_0__["HelloComponent"] }
];


/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section container\">\r\n  <h1 class=\"main-title\">Contact me </h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ngui-map center=\"[51.58026239,-0.32064179]\" [fullscreenControl]=\"true\">\r\n        <marker position=\"[51.58026239,-0.32064179]\" [geoFallbackPosition]=\"[51.58026239,-0.32064179]\" draggable=\"true\" (click)=\"clicked($event)\"\r\n          (initialized$)=\"onMarkerInit($event)\"></marker>\r\n        <info-window id=\"iw\">\r\n          <div>\r\n            <h6>\r\n              <strong>Seema Hemani </strong>\r\n            </h6>\r\n              <span style=\"margin-right: 12px;\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n              </span>\r\n              <a href=\"mailto:simih61@gmail.com\">simih61@gmail.com</a>\r\n            \r\n            <p>\r\n              <span style=\"margin-right: 12px;\">\r\n                <i class=\"fa fa-linkedin\"></i>\r\n              </span>\r\n              <a target=\"_blank\" href=\"https://www.linkedin.com/in/seema-hemani-170b4958/\">Seema Hemani</a>\r\n            </p>\r\n          </div>\r\n        </info-window>\r\n      </ngui-map>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row\">\r\n      <div class=\"col-md-2\">Email:</div>\r\n      <div class=\"col-md-4\">\r\n        <a href=\"mailto:someone@example.com\">simih61@gmail.com</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">LinkedIn:</div>\r\n      <div class=\"col-md-4\">\r\n        <a href=\"https://www.linkedin.com/in/seema-hemani-170b4958/\">seemahemani</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">Github:</div>\r\n      <div class=\"col-md-4\">\r\n        <a href=\"https://github.com/seemahemani\">seemahemani</a>\r\n      </div>LinkedIn\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-contact ngui-map {\n  height: calc(78vh); }\n\napp-contact a {\n  color: #f92f38;\n  font-weight: bold; }\n\napp-contact a:hover {\n    color: #f92f38;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.clicked = function (_a) {
        var marker = _a.target;
        marker.nguiMapComponent.openInfoWindow('iw', marker);
    };
    ContactComponent.prototype.onMarkerInit = function (marker) {
        setTimeout(function () {
            marker.nguiMapComponent.openInfoWindow('iw', marker);
        }, 1000);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <span class=\"text-muted\">Place sticky footer content here.</span>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sticky footer styles\r\n-------------------------------------------------- */\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 60px;\n  /* Vertically center the text there */\n  background-color: #f5f5f5; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidebar\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n</button>\r\n<nav id=\"sidebar\" class=\"text-uppercase\">\r\n    <div class=\"sidebar-header\">\r\n        <div class=\"person-avatar col-md-12 text-center\">\r\n            <img src=\"/assets/images/avatar/1.JPG\" alt=\"avatar\" class=\"avatar\">\r\n            <div class=\"person-content\">\r\n                <h5>Seema Hemani</h5>\r\n                <span>Front-End Web Developer</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ul class=\"list-unstyled components\">\r\n        <li routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">HOME</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/skills\" routerLinkActive=\"active\">My Skills</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/portfolio\" routerLinkActive=\"active\">portfolio</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">contact</a>\r\n        </li>\r\n        <!-- <li routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/aboutme\" routerLinkActive=\"active\">About me</a>\r\n            </li> -->\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\na,\na:hover,\na:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.person-avatar .avatar {\n  height: 200px;\n  border-radius: 50%;\n  width: 200px;\n  -webkit-transform: rotate(275deg);\n          transform: rotate(275deg); }\n\n.person-avatar .person-content {\n  padding-top: 10px; }\n\n.person-avatar .person-content h5 {\n    font-size: 21px;\n    line-height: 30px;\n    color: #f9f9f9;\n    margin-bottom: 0;\n    letter-spacing: 3px; }\n\n.person-avatar .person-content span {\n    font-size: 12px; }\n\n.person-avatar h6 {\n  font-size: 10px;\n  font-style: italic;\n  opacity: 0.8; }\n\n#sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 999;\n  background: linear-gradient(to bottom, #fb8287 0, #f92f38 100%);\n  color: #fff;\n  transition: all 0.3s;\n  opacity: 0.9; }\n\n#sidebar.active {\n  margin-left: -250px; }\n\n#sidebar .sidebar-header {\n  padding: 30px 20px; }\n\n#sidebar ul.components {\n  padding: 5px 0; }\n\n#sidebar ul p {\n  color: #fff;\n  padding: 10px; }\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 14px;\n  display: block;\n  margin-left: 40px;\n  font-weight: 100; }\n\n#sidebar ul li a:hover {\n  color: #f92f38; }\n\n#sidebar ul li:hover {\n  background: #fff; }\n\n#sidebar ul li.active {\n  background: #f92f38; }\n\n#sidebar ul li.active:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 9px solid transparent;\n  border-bottom: 9px solid transparent;\n  border-right: 8px solid #fff;\n  left: auto;\n  right: 0;\n  margin-top: -30px; }\n\n#sidebar ul li.active > a,\na[aria-expanded=\"true\"] {\n  color: #fff;\n  font-weight: 600; }\n\na[data-toggle=\"collapse\"] {\n  position: relative; }\n\na[aria-expanded=\"false\"]::before,\na[aria-expanded=\"true\"]::before {\n  content: '\\e259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em; }\n\na[aria-expanded=\"true\"]::before {\n  content: '\\e260'; }\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #f92f38; }\n\nul.CTAs {\n  padding: 20px; }\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\n\na.download {\n  background: #fff;\n  color: #f92f38; }\n\na.article,\na.article:hover {\n  background: #f92f38 !important;\n  color: #fff !important; }\n\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\n\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -250px; }\n  #sidebar.active {\n    margin-left: 0; }\n  #sidebarCollapse span {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hello/hello.component.html":
/*!********************************************!*\
  !*** ./src/app/hello/hello.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-left\">\r\n    <h1>Hi, I'm Seema.</h1>\r\n    <p>A highly resourceful, innovative, and competent front end developer having 7+ years of relevant experience in Software Design, Development and Deployment with Proficiency in Angular, Javascript, typescript, SCSS, etc.\r\n        </p>\r\n        \r\n        <p>\r\n        \r\n        As a web developer focused on customer satisfaction, I manage all aspects of web development from concept to requirements definition, development, launch, maintenance and user support. Work closely with team members to produce high-quality deliverables.\r\n        </p>\r\n    <p>I am based out in London, UK.</p>\r\n    <div><a class=\"nav-link btnLook\" routerLink=\"/contact\" routerLinkActive=\"active\">CONTACT ME</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hello/hello.component.scss":
/*!********************************************!*\
  !*** ./src/app/hello/hello.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-hello .container {\n  width: 80%;\n  margin: 6%; }\n\napp-hello .btnLook {\n  color: #f92f38;\n  opacity: 0.8;\n  border: 1px solid #f92f38;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 12px;\n  font-weight: 500;\n  font-size: 17px;\n  margin-top: 55px; }\n"

/***/ }),

/***/ "./src/app/hello/hello.component.ts":
/*!******************************************!*\
  !*** ./src/app/hello/hello.component.ts ***!
  \******************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
    };
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello',
            template: __webpack_require__(/*! ./hello.component.html */ "./src/app/hello/hello.component.html"),
            styles: [__webpack_require__(/*! ./hello.component.scss */ "./src/app/hello/hello.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section portfolio-section container\">\r\n    <h1 class=\"main-title \">Portfolio</h1>\r\n\r\n    <p>See my works below. Below projects were done in project team where all their front-end parts were take care by me.</p>\r\n    <div class=\"timeline\">\r\n        <div class=\"entry\">\r\n            <div class=\"title\">\r\n                <h3>2018 - 2022</h3>\r\n                <p>Front-End Developer,</p>\r\n                <p>FisherITS</p>\r\n            </div>\r\n            <div class=\"body\">\r\n                <h5>OpenSAM</h5>\r\n                <label>\r\n                    Description:\r\n                  </label>\r\n                  <ul>\r\n                      <li>\r\n                        OpenSAM  is a Software asset management tool that helps optimize software and SaaS spend while supporting the automation of tasks required to maintain compliance with software license. It also helps large and fast-growing organisations around the world save money on their software investments and defend unfair licence audits.\r\n\r\n                      </li>\r\n                  </ul>\r\n                  <label>\r\n                    Technologies:\r\n                  </label>\r\n                  <ul>\r\n                      <li>\r\n                        Angular, SCSS, HTML, Javascript, Typescript, RXJS, Angular material\r\n                      </li>\r\n                  </ul>\r\n                  <label>\r\n                    Responsibilities:\r\n                  </label>\r\n                  <ul>\r\n                      <li>Designing UI Architecture from scratch to end product\r\n                    </li>\r\n                      <li>Gathering requirements from stakeholders and implementing the same\r\n                    </li>\r\n                      <li>Performance Optimization\r\n                    </li>\r\n                      <li>Troubleshoot, debug and upgrade existing functionalities\r\n                    </li>\r\n                  </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"entry\">\r\n            <div class=\"title\">\r\n                <h3>2015 - 2018</h3>\r\n                <p>UI Developer,</p>\r\n                <p>Accionlabs India Pvt Ltd</p>\r\n            </div>\r\n            <div class=\"body\">\r\n                <h5>Customer One View – American water (US)­­</h5>\r\n                <label>\r\n          Description:\r\n        </label>\r\n                <ul>\r\n                    <li>We have developed a portal called Customer One View (C1V) for a leading water utility company in United States that can provide contextualized information about their customers to all American Water employees, especially customer service\r\n                        representatives (CSR) and field service representatives (FSR).</li>\r\n                </ul>\r\n                <label>\r\n          Technologies:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        HTML, CSS via SASS, Bootstrap, Angular2/4, Angular Cli, AJAX, JSON, Jquery, GIT, Agile, Ionic 3 for mobile app.\r\n                    </li>\r\n                </ul>\r\n                <label>\r\n          Responsibilities:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        Interaction with client, Requirement gathering, Analyzing, Interaction with team.\r\n                    </li>\r\n                    <li>Developing application in web and mobile .</li>\r\n                    <li>Angular version updating by using the angular cli and the node js terminal.</li>\r\n                    <li>Fixing Bugs, testing and analyzing programming projects,Deployment of build.</li>\r\n                    <li>Extensively used version control tool GIT.\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"entry\">\r\n            <div class=\"title\">\r\n                <h3>2014 - 2015</h3>\r\n                <p>UI Developer,</p>\r\n                <p>Accionlabs India Pvt Ltd</p>\r\n            </div>\r\n            <div class=\"body\">\r\n                <h5>ClearTrack­­</h5>\r\n                <label>\r\n          Description:\r\n        </label>\r\n                <ul>\r\n                    <li>ClearTrack operates a large, specialized global cloud-based business network and execution platform for supply chain management. We developed a web application for ClearTrack for maintaining the inspection results for the good purchased\r\n                        by ClearTrack clients. This application allows user to capture detailed level result information for the inspection.</li>\r\n                </ul>\r\n                <label>\r\n          Technologies:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        HTML, Bootstrap, CSS, AngularJS, Gulp\r\n                    </li>\r\n                </ul>\r\n                <label>\r\n          Responsibilities:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        Interaction with client, Requirement gathering, Analyzing, Interaction with team.\r\n                    </li>\r\n                    <li>Extensively used version control tool GIT.\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"entry\">\r\n            <div class=\"title\">\r\n                <h3>2014</h3>\r\n                <p>Junior Front End Developer,</p>\r\n                <p>Accionlabs India Pvt Ltd</p>\r\n            </div>\r\n            <div class=\"body\">\r\n                <h5>Mission Control</h5>\r\n                <label>\r\n          Description:\r\n        </label>\r\n                <ul>\r\n                    <li>Provide web interface for creating and managing venue maps, creating point of interests , Experience Builder view with achievements, ranks and other similar products based on the Visual Designs and stored required info in local storage,\r\n                        integrated rest API to load data in UI , content resize with window resize to meet exact front end requirement using aspect ratio.</li>\r\n                </ul>\r\n                <label>\r\n          Technologies:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        HTML, CSS, JavaScript/ jQuery/ jQueryUI, Bootstrap, AJAX, REST, JSON\r\n                    </li>\r\n                </ul>\r\n                <label>\r\n          Responsibilities:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        Convert designs into working web page templates in HTML5, CSS, jQuery and JavaScript\r\n                    </li>\r\n                    <li>\r\n                        client communication in order to keep clients informed of your progress as well as handling client feedback.\r\n                    </li>\r\n                    <li>Extensively used version control tool GIT.\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"entry\">\r\n            <div class=\"title\">\r\n                <h3>2014</h3>\r\n                <p>Junior Front End Developer,</p>\r\n                <p>Accionlabs India Pvt Ltd</p>\r\n            </div>\r\n            <div class=\"body\">\r\n                <h5>The Experience Engine Website</h5>\r\n                <label>\r\n          Description:\r\n        </label>\r\n                <ul>\r\n                    <li>Designed and developed website for the Experience Engine, a market leading experience Management system, integrates physical and digital experiences across mobile, web and Wearable technology.</li>\r\n                </ul>\r\n                <label>\r\n          Technologies:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, REST, JSON, Angularjs.\r\n                    </li>\r\n                </ul>\r\n                <label>\r\n          Responsibilities:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        Convert designs into working web page templates and develop website for cross browser.\r\n                    </li>\r\n                    <li>Extensively used version control tool GIT.\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"entry\">\r\n            <div class=\"title\">\r\n                <h3>2013</h3>\r\n                <p>Junior Front End Developer,</p>\r\n                <p>Accionlabs India Pvt Ltd</p>\r\n            </div>\r\n            <div class=\"body\">\r\n                <h5>KalaKona</h5>\r\n                <label>\r\n          Description:\r\n        </label>\r\n                <ul>\r\n                    <li>A customer reward application where a customer signs up with kala program and earns point by purchasing products from the partners associated with kala. The customer gets reward on redeeming the points he has earned.</li>\r\n                </ul>\r\n                <label>\r\n          Technologies:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        HTML, CSS, JavaScript, JQuery, Bootstrap, AJAX, REST, JSON.\r\n                    </li>\r\n                </ul>\r\n                <label>\r\n          Responsibilities:\r\n        </label>\r\n                <ul>\r\n                    <li>\r\n                        Working in team, taking ownership of UI development.\r\n                    </li>\r\n                    <li>Build mobile first, responsive UI's for web based application with HTML, CSS, Javascript</li>\r\n                    <li>Extensively used version control tool GIT.\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.portfolio-section body {\n  background: linear-gradient(55deg, #4E75B9 30%, #5CBF98 90%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 12vh 100px;\n  font-family: 'Source Sans Pro', arial, sans-serif;\n  font-weight: 300;\n  color: #333;\n  box-sizing: border-box; }\n.portfolio-section body * {\n    box-sizing: border-box; }\n.portfolio-section .timeline {\n  width: 100%;\n  background: #fff;\n  padding: 50px;\n  position: relative; }\n.portfolio-section .timeline:before {\n    content: '';\n    position: absolute;\n    top: 57px;\n    left: calc(33% + 20px);\n    bottom: 50px;\n    width: 1px;\n    background: #ddd; }\n.portfolio-section .timeline:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.portfolio-section .entry {\n  clear: both;\n  text-align: left;\n  position: relative; }\n.portfolio-section .entry .title {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative; }\n.portfolio-section .entry .title:before {\n      content: '';\n      position: absolute;\n      border: 3px solid salmon;\n      background-color: #fff;\n      border-radius: 100%;\n      top: 15%;\n      right: -6px;\n      z-index: 99; }\n.portfolio-section .entry .title h3 {\n      margin: 0;\n      font-size: 120%; }\n.portfolio-section .entry .title p {\n      margin: 0;\n      font-size: 100%; }\n.portfolio-section .entry .body {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px; }\n.portfolio-section .entry .body p {\n      line-height: 1.4em; }\n.portfolio-section .entry .body p:first-child {\n        margin-top: 0;\n        font-weight: 400; }\n.portfolio-section .entry .body ul {\n      color: #808080;\n      padding-left: 0;\n      list-style-type: none; }\n.portfolio-section .entry .body ul li:before {\n        content: \"–\";\n        margin-right: .5em; }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-section\">\r\n  <h1 class=\"main-title\">Skills & Experience</h1>\r\n  <p>I am a\r\n    <strong>Front-End web developer</strong> with above\r\n    <strong>7+ years of experience</strong>.\r\n  </p>\r\n  <p>Main area of my expertise is front end development and everything related with this side of web.\r\n    <span class=\"highlight\">HTML,CSS, Bootstrap, Javascript, JQuery, JQuery UI, Angular, TypeScript, Git </span>and all the other various frameworks,\r\n    libraries and technologies related to them.\r\n  </p>\r\n  <p>\r\n    As a web developer focused on customer satisfaction, I manage all aspects of web development from concept to requirements\r\n    definition, development, launch, maintenance and user support. working closely with team members to produce high-quality\r\n    deliverables.\r\n  </p>\r\n  <p>\r\n    I have worked on\r\n    <a routerLink=\"/portfolio\" routerLinkActive=\"active\">\r\n      <span class=\"highlight\">multiple projects</span>\r\n    </a> from scratch, carrying the development of its' front-end codebases in an agile development environment.\r\n  </p>\r\n  <p>\r\n    My current experience and skills in front-end include:\r\n  </p>\r\n  <ul>\r\n    <li>\r\n      lead TypeScript/JavaScript development: bootstraping or refactoring an existing app architecture, by improving its' extensibility\r\n      and reliability.\r\n    </li>\r\n    <li>\r\n      Translation of wireframes and rapid prototyping tools to accurate, working code\r\n    </li>\r\n    <li>\r\n      knowledge in many JS ecosystem, by using many libraries like Angular, jQuery, Lodash/Underscore and whatever\r\n      else was needed.\r\n    </li>\r\n    <!-- <li>\r\n      <strong>Mobile app development</strong> with the use of\r\n      <a href=\"http://ionicframework.com/\" rel=\"nofollow\">Ionic Framework</a>.\r\n      <br> With these, I can build a fully working native application for iOS and Android (both at once!) in Javascript .\r\n    </li> -->\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ThinkPad\Documents\GitHub\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map