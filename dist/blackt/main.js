(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n\n<router-outlet></router-outlet>\n\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blackt';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");




// import { AppRoutingModule } from './app-routing.module';


// import {HeaderComponent} from './layout/header/header.component';
// import {FooterComponent} from './layout/footer/footer.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                // HeaderComponent,
                // FooterComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // AppRoutingModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([]),
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/contents/contents.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/contents/contents.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n    <router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/contents/contents.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/contents/contents.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb250ZW50cy9jb250ZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/contents/contents.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/contents/contents.component.ts ***!
  \*******************************************************/
/*! exports provided: ContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsComponent", function() { return ContentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentsComponent = /** @class */ (function () {
    function ContentsComponent() {
    }
    ContentsComponent.prototype.ngOnInit = function () {
    };
    ContentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contents',
            template: __webpack_require__(/*! ./contents.component.html */ "./src/app/layout/contents/contents.component.html"),
            styles: [__webpack_require__(/*! ./contents.component.scss */ "./src/app/layout/contents/contents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentsComponent);
    return ContentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div id=\"footerdiv\">\n      <div class=\"container-fluid\">\n        <div class=\"row\" >\n          <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12\" style=\"display:flex;padding-top: 16px;\">\n            <div id=\"left\" class=\"col-md-4\">\n                <p>©2019 BlackThorn Therapeutics. All Rights Reserved.</p>\n            </div>\n            <div id=\"ct\" class=\"col-md-4\">\n                <p style=\"float:right;\">Last Login Date: Mar-13-2019 02:30PM UTC</p>\n            </div>\n            <div id=\"ri\" class=\"col-md-4\">\n                <p style=\"float:right;\"><strong>Privacy Policy | Terms Of Use</strong></p>\n            </div>\n            </div>\n            </div>\n      </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footerdiv {\n  height: auto;\n  background-color: #f5f5f5; }\n\n.p {\n  color: #202d31;\n  font-family: \"Open Sans\"; }\n\n#left {\n  float: left; }\n\n#ri {\n  float: right; }\n\n#ct {\n  float: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIyL2JsYWNrdC9zcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGNBQWM7RUFDZCx3QkFBd0IsRUFBQTs7QUFJNUI7RUFDSSxXQUFVLEVBQUE7O0FBR2Q7RUFDSSxZQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXJkaXZ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4ucHtcbiAgICBjb2xvcjogIzIwMmQzMTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBcbn1cblxuI2xlZnR7XG4gICAgZmxvYXQ6bGVmdDtcbn1cblxuI3Jpe1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuXG4jY3R7XG4gICAgZmxvYXQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n \n  <img src=\"../../../assets/images/logo.png\">\n \n  <div class=\"propic\" style=\"margin-left: 60px;\"><img src=\"../../../assets/images/pf.png\"></div>\n    <div class=\"textwel\"> Hello, <strong>Username </strong> </div>\n      <div class=\"navbar-collapse nav-item dropdown\" >\n        <a href=\"#\" class=\"nav-link dropdown\" data-toggle=\"dropdown\"> <img class=\"arrow\" src=\"../../../assets/images/arrow.png\"></a>\n        <div class=\"dropdown-menu\" >\n            <a href=\"#\" class=\"dropdown-item\" style=\"padding:10px 0px 0px 15px;\"> <img src=\"../../../assets/images/editpf.png\">  EDIT PROFILE</a>\n            <a href=\"#\" class=\"dropdown-item\" style=\"padding:15px 0px 0px 15px;\"> <img src=\"../../../assets/images/logout.png\">  LOGOUT</a>\n        </div>\n      </div>\n\n\n\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarCollapse\"  style=\"display:inline\">\n          \n        <ul class=\"nav justify-content-end\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"><img src=\"../../../assets/images/datasets.png\">&nbsp;DATASETS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><img src=\"../../../assets/images/analytics.png\">&nbsp;ANALYTICS PORTAL</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><img src=\"../../../assets/images/ds.png\">&nbsp;DATASCIENCE NOTEBOOK</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"../../../assets/images/ml.png\">&nbsp;ML PIPELINE  <img src=\"../../../assets/images/arrow.png\"></a>\n              <div class=\"dropdown-menu\">\n                 <a class=\"dropdown-item\" href=\"#\">Action</a>\n                 <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                 <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              </div>\n          </li>\n            \n        </ul>\n       \n      </div>\n  \n</nav>"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".li {\n  display: inline; }\n\n#id {\n  width: 121px;\n  height: 17px;\n  color: #ffffff;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 12px;\n  /* Text style for \"Hello,\" */\n  font-family: \"Open Sans\";\n  font-weight: 400; }\n\n.nav-link {\n  display: inline; }\n\n.nav-item {\n  color: #ffffff;\n  font-family: \"Open Sans\";\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 12px;\n  text-transform: uppercase; }\n\n.navbar {\n  height: 80px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);\n  background-color: #016272; }\n\na {\n  color: #ffffff; }\n\n.div {\n  display: flex; }\n\n.img {\n  height: auto;\n  width: auto; }\n\n.dropdown-menu {\n  background-color: #f5f5f5;\n  left: auto; }\n\n.dropdown-item {\n  font-family: \"Open Sans\";\n  color: #202d31;\n  padding: 10px 0px 0px 15px; }\n\n.textwel {\n  color: #f5f5f5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIyL2JsYWNrdC9zcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBRUksY0FBYztFQUNkLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTs7QUFJN0I7RUFDSSxZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLHlCQUF5QixFQUFBOztBQUc3QjtFQUFJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxhQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUFFLFdBQVcsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUI7RUFDekIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksd0JBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jaWR7XG4gICAgd2lkdGg6IDEyMXB4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAvKiBUZXh0IHN0eWxlIGZvciBcIkhlbGxvLFwiICovXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5uYXYtbGlua3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubmF2LWl0ZW17XG4gICAgXG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBcbn1cblxuLm5hdmJhcntcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTYyNzI7XG59XG5cbmEgeyBjb2xvcjogI2ZmZmZmZjsgfVxuXG4uZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbi5pbWd7XG4gICAgaGVpZ2h0OiBhdXRvOyB3aWR0aDogYXV0bztcbn1cblxuLmRyb3Bkb3duLW1lbnV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBsZWZ0OiBhdXRvO1xufVxuXG4uZHJvcGRvd24taXRlbXtcbiAgICBmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiO1xuICAgIGNvbG9yOiAjMjAyZDMxO1xuICAgIHBhZGRpbmc6MTBweCAwcHggMHB4IDE1cHg7XG59XG5cbi50ZXh0d2Vse1xuICAgIGNvbG9yOiAjZjVmNWY1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contents_contents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents/contents.component */ "./src/app/layout/contents/contents.component.ts");




// import {HeaderComponent} from './header/header.component';
// import {FooterComponent} from './footer/footer.component';
var routes = [
    {
        path: '',
        component: _contents_contents_component__WEBPACK_IMPORTED_MODULE_3__["ContentsComponent"],
        children: [
            { path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../datasets/datasets.module */ "./src/app/datasets/datasets.module.ts")).then(function (mod) { return mod.DatasetsModule; }); }
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _contents_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents/contents.component */ "./src/app/layout/contents/contents.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _contents_contents_component__WEBPACK_IMPORTED_MODULE_5__["ContentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user2/blackt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map