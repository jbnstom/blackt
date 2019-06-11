(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/datasets/datasets-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/datasets/datasets-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DatasetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetsRoutingModule", function() { return DatasetsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasets/datasets.component */ "./src/app/datasets/datasets/datasets.component.ts");




var routes = [
    { path: '', component: _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_3__["DatasetsComponent"] },
];
var DatasetsRoutingModule = /** @class */ (function () {
    function DatasetsRoutingModule() {
    }
    DatasetsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DatasetsRoutingModule);
    return DatasetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/datasets/datasets.module.ts":
/*!*********************************************!*\
  !*** ./src/app/datasets/datasets.module.ts ***!
  \*********************************************/
/*! exports provided: DatasetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetsModule", function() { return DatasetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datasets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasets-routing.module */ "./src/app/datasets/datasets-routing.module.ts");
/* harmony import */ var _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datasets/datasets.component */ "./src/app/datasets/datasets/datasets.component.ts");





var DatasetsModule = /** @class */ (function () {
    function DatasetsModule() {
    }
    DatasetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_datasets_datasets_component__WEBPACK_IMPORTED_MODULE_4__["DatasetsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _datasets_routing_module__WEBPACK_IMPORTED_MODULE_3__["DatasetsRoutingModule"]
            ]
        })
    ], DatasetsModule);
    return DatasetsModule;
}());



/***/ }),

/***/ "./src/app/datasets/datasets/datasets.component.html":
/*!***********************************************************!*\
  !*** ./src/app/datasets/datasets/datasets.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<!--  new content -->\n\n<div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n        <div class=\"card\" style=\"width: 308px;height: 229px;background-color: #f5f5f5;\"  id=\"bigc\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n        </div> \n      </div>\n      \n      <div class=\"col-sm-9\">\n          <h4><strong>Popular</strong></h4>\n          <div class=\"row\">\n            <div class=\"card rounded-0\" style=\"margin: 10px; width: 300px;height: 160px;border: 2px solid #d8d8d8;background-color: #ffffff;\">\n                <div class=\"card-body\" style=\"border-left-color: #016272; border-left-style: solid;border-left-width:9px\">\n                  <p class=\"card-text\">First, Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div> \n            <div class=\"card rounded-0\" style=\"margin: 10px; width: 300px;height: 160px;border: 2px solid #d8d8d8;background-color: #ffffff;\">\n                <div class=\"card-body\" style=\"border-left-color: #02a9e0; border-left-style: solid;border-left-width:9px\">\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div> \n            <div class=\"card rounded-0\" style=\"margin: 10px; width: 300px;height: 160px;border: 2px solid #d8d8d8;background-color: #ffffff;\">\n                <div class=\"card-body\" style=\"border-left-color: #e5bc49; border-left-style: solid;border-left-width:9px\">\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div> \n          </div>       \n        </div>\n      </div>\n    </div>\n\n<!-- <br> -->\n\n\n    <div class=\"container-fluid\">\n        <div class=\"row content\">\n          <div class=\"col-sm-3 sidenav\">\n            <div class=\"card\" style=\"width: 308px;height: 229px;background-color: #f5f5f5;\" id=\"bigc\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div> \n          </div>\n          \n          <div class=\"col-lg-9\">\n              <h4><strong>Favourites</strong></h4>\n              <div class=\"row\">\n                <div class=\"card rounded-0\" style=\"margin: 10px; width: 300px;height: 160px;border: 2px solid #d8d8d8; background-color: #ffffff;\">\n                    <div class=\"card-body\" style=\"border-left-color: #09a58e; border-left-style: solid;border-left-width:9px\">\n                      <p class=\"card-text\">First, Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    </div>\n                </div> \n                <div class=\"card rounded-0\" style=\"margin: 10px; width: 300px;height: 160px;border: 2px solid #d8d8d8; background-color: #ffffff;\">\n                    <div class=\"card-body\" style=\"border-left-color: #016272; border-left-style: solid;border-left-width:9px\">\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    </div>\n                </div> \n                \n              </div>       \n            </div>\n          </div>\n        </div>\n\n<!-- <br> -->\n\n<!-- third row -->\n\n<div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n        <div class=\"card\" style=\"width: 308px;height: 229px;background-color: #f5f5f5;\" id=\"bigc\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n        </div> \n      </div>\n      \n      <div class=\"col-sm-9\">\n          <h4><strong>Saved Dashboards</strong></h4>\n          <div class=\"row\">\n            <div class=\"card rounded-0\" style=\"margin: 20px; width: 351px;height: 64px;\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\"><img src=\"./../../../assets/images/dsgraph.png\"> Some quick example text</p>\n                </div>\n            </div> \n            <div class=\"card rounded-0\" style=\"margin: 20px; width: 351px;height: 64px;\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\"><img  class='arrow' src=\"./../../../assets/images/dsgraph.png\"> Some quick example text</p>\n                </div>\n            </div> \n            \n          </div>      \n        </div>\n    </div>\n </div>\n\n <!-- forth row -->\n\n <div class=\"container-fluid\">\n  <div class=\"row content\">\n    <div class=\"col-sm-3 sidenav\">\n      <div class=\"card\" style=\"width: 308px;height: 229px;background-color: #f5f5f5;\" id=\"bigc\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n      </div> \n    </div>\n    \n    <div class=\"col-sm-9\">\n        <h4><strong>Notebook Activity</strong></h4>\n        <div class=\"row\">\n          <div class=\"card rounded-0\" style=\"width: 351px;height: 64px; border-color: transparent;\">\n              <div class=\"card-body\">\n                <p class=\"card-text\"><img src=\"./../../../assets/images/naarrow.png\"> Some quick example text</p>\n              </div>\n          </div> \n          <div class=\"card rounded-0\" style=\"margin-left: 20px; width: 400px;height: 64px; border-color: transparent;\">\n              <div class=\"card-body\">\n                <p class=\"card-text\"><img src=\"./../../../assets/images/naarrow.png\"> Some quick example text</p>\n              </div>\n          </div> \n          \n        </div>      \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/datasets/datasets/datasets.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/datasets/datasets/datasets.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  /* or inline-flex */ }\n\n#bigc {\n  margin-bottom: 20px;\n  margin-right: 20px;\n  margin-left: 20px; }\n\nimg.arrow {\n  height: 15px;\n  width: 15px;\n  margin-right: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIyL3Byb2plY3RzL2JsYWNrdC9zcmMvYXBwL2RhdGFzZXRzL2RhdGFzZXRzL2RhdGFzZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUFFLG1CQUFBLEVBQW9COztBQUV2QztFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RhdGFzZXRzL2RhdGFzZXRzL2RhdGFzZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbn1cbiNiaWdje1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuaW1nLmFycm93IHsgXG4gICAgaGVpZ2h0OiAxNXB4OyBcbiAgICB3aWR0aDogMTVweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/datasets/datasets/datasets.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/datasets/datasets/datasets.component.ts ***!
  \*********************************************************/
/*! exports provided: DatasetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetsComponent", function() { return DatasetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatasetsComponent = /** @class */ (function () {
    function DatasetsComponent() {
    }
    DatasetsComponent.prototype.ngOnInit = function () {
    };
    DatasetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datasets',
            template: __webpack_require__(/*! ./datasets.component.html */ "./src/app/datasets/datasets/datasets.component.html"),
            styles: [__webpack_require__(/*! ./datasets.component.scss */ "./src/app/datasets/datasets/datasets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatasetsComponent);
    return DatasetsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=0.js.map