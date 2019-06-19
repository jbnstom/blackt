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

module.exports = "<br>\n<br>\n\n<!--  new content -->\n\n<div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n        <div class=\"card\" id=\"bigc\">\n            <div class=\"card-body\" style=\"padding: 0px; width: 100%;\" (mouseover)=\"changeImage=true\" (mouseout)=\"changeImage=false\" ng-init=\"changeImage=false\">\n                <img *ngIf=\"!changeImage\" src=\"../../../assets/images/dsets.png\">\n                <img *ngIf=\"changeImage\" src=\"../../../assets/images/datasetshov.png\">\n            </div>\n        </div> \n      </div>\n      \n      <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n         \n          <h4><strong>Popular</strong></h4>\n         \n\n          <div class=\"row\">\n              <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n             <div class=\"Indicators\" style=\"float: right;\">\n                <!-- Indicators -->\n              <ul class=\"carousel-indicators\" >\n                  <li data-target=\"#demo\" data-slide-to=\"0\" class=\"firstactive\"></li>\n                  <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n                  <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n                </ul>\n             </div>                 \n        <div class=\"carousel-inner no-padding\">\n          <div class=\"carousel-item active\">\n            <div class=\"row\">\n            <div class=\"card rounded-0 col-lg-4 col-md-5  col-sm-5\" style=\"margin: 5px;background-color: #ffffff;border-left-color: #016272; border-left-style: solid;border-left-width:9px\" id=\"smallc\">\n                <div class=\"card-header\">\n                  <div  style=\"float:right;\">\n                      <img src=\"../../../assets/images/view.png\"> 132 &nbsp;\n                    <img src=\"../../../assets/images/like.png\">&nbsp;\n                    \n                  </div>\n                  \n                  <br>\n                  <img src=\"../../../assets/images/file.png\">\n                </div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\"><strong>Some quick example text to build on the card title </strong></p>\n                </div>\n\n            </div> \n            <div class=\"card rounded-0 col-lg-4 col-md-5  col-sm-5\" style=\"border-left-color: #02a9e0; border-left-style: solid; border-left-width:9px; margin: 5px;background-color: #ffffff;\" id=\"smallc\">\n                <div class=\"card-header\">\n                    <div  style=\"float:right;\">\n                        <img src=\"../../../assets/images/view.png\"> 132  &nbsp;\n                      <img src=\"../../../assets/images/dislike.png\">&nbsp;\n                      \n                    </div>\n                    <br>\n                    <img src=\"../../../assets/images/video.png\">\n                    <br>\n                  </div>\n              <div class=\"card-body\">\n                  <p class=\"card-text\"><strong> and make up the bulk of the card's content.</strong></p>\n                </div>\n            </div> \n            <div class=\"card rounded-0 col-lg-3 col-md-5 col-sm-5\" style=\"margin: 5px; border-left-color: #e5bc49; border-left-style: solid;border-left-width:9px; background-color: #ffffff;\" id=\"smallc\">\n                <div class=\"card-header\">\n                    <div  style=\"float:right;\">\n                        <img src=\"../../../assets/images/view.png\"> 132 &nbsp;\n                      <img src=\"../../../assets/images/like.png\">&nbsp;\n                      \n                    </div>\n                    <br>\n                    <img src=\"../../../assets/images/brain.png\">\n                  </div>  \n              <div class=\"card-body\">\n                  <p class=\"card-text\"><strong>Some quick example text to build on the card title</strong></p>\n                </div>\n            </div> \n         </div>   \n          </div>\n         <div class=\"carousel-item\">\n           <div class=\"row\">\n            <div class=\"card rounded-0 col-lg-4 col-md-5  col-sm-5\" style=\"border-left-color: #02a9e0; border-left-style: solid; border-left-width:9px; margin: 5px;background-color: #ffffff;\" id=\"smallc\">\n                <div class=\"card-header\">\n                    <div  style=\"float:right;\">\n                        <img src=\"../../../assets/images/view.png\"> 132  &nbsp;\n                      <img src=\"../../../assets/images/dislike.png\">&nbsp;\n                      \n                    </div>\n                    <br>\n                    <img src=\"../../../assets/images/video.png\">\n                    <br>\n                  </div>\n              <div class=\"card-body\">\n                  <p class=\"card-text\"><strong> and make up the bulk of the card's content.</strong></p>\n                </div>\n            </div> \n            <div class=\"card rounded-0 col-lg-4 col-md-5  col-sm-5\" style=\"margin: 5px;background-color: #ffffff;border-left-color: #016272; border-left-style: solid;border-left-width:9px\" id=\"smallc\">\n                <div class=\"card-header\">\n                  <div  style=\"float:right;\">\n                      <img src=\"../../../assets/images/view.png\"> 132 &nbsp;\n                    <img src=\"../../../assets/images/like.png\">&nbsp;\n                    \n                  </div>\n                  \n                  <br>\n                  <img src=\"../../../assets/images/file.png\">\n                </div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\"><strong>Some quick example text to build on the card title </strong></p>\n                </div>\n\n            </div> \n            <div class=\"card rounded-0 col-lg-3 col-md-5 col-sm-5\" style=\"margin: 5px; border-left-color: #e5bc49; border-left-style: solid;border-left-width:9px; background-color: #ffffff;\" id=\"smallc\">\n                <div class=\"card-header\">\n                    <div  style=\"float:right;\">\n                        <img src=\"../../../assets/images/view.png\"> 132 &nbsp;\n                      <img src=\"../../../assets/images/like.png\">&nbsp;\n                      \n                    </div>\n                    <br>\n                    <img src=\"../../../assets/images/brain.png\">\n                  </div>  \n              <div class=\"card-body\">\n                  <p class=\"card-text\"><strong>Some quick example text to build on the card title</strong></p>\n                </div>\n            </div> \n         </div>   \n         </div>\n        </div>\n      </div>\n<a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <!-- <span class=\"carousel-control-prev-icon\"></span> -->\n    <img src=\"../../../assets/images/lefticon.png\">\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <!-- <span class=\"carousel-control-next-icon\"></span> -->\n    <img src=\"../../../assets/images/righticon.png\">\n  </a>\n</div>\n          </div>       \n        </div>\n      \n    </div>\n\n\n<!-- second row -->\n<!-- <br> -->\n<div> </div>\n\n    <div class=\"container-fluid\">\n        <div class=\"row content\">\n          <div class=\"col-sm-3 sidenav\">\n            <div class=\"card\" id=\"bigc\">\n                <div class=\"card-body\" style=\"padding: 0px;\">\n                  <img  class=\"card-img-top\" src=\"../../../assets/images/al.png\">\n                  \n                </div>\n            </div> \n          </div>\n          \n          <div class=\" col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n              <h4><strong>Favourites</strong></h4>\n              <div class=\"row\">\n                <div class=\"card rounded-0 col-lg-4\" style=\"margin: 10px; border-left-color: #09a58e; border-left-style: solid;border-left-width:9px; background-color: #ffffff;\">\n                    <div class=\"card-header\">\n                        <div  style=\"float:right;\">\n                          <img src=\"../../../assets/images/view.png\">132 &nbsp; \n                          <img src=\"../../../assets/images/like.png\">&nbsp;\n                          <img src=\"../../../assets/images/star.png\">&nbsp;\n                        </div>\n                        <br>\n                        <img src=\"../../../assets/images/sound.png\">\n                      </div>    \n                  <div class=\"card-body\">\n                      <p class=\"card-text\"><strong>First, Some quick example text to build on</strong> </p>\n                    </div>\n                </div> \n                <div class=\"card rounded-0 col-lg-4\" style=\"margin: 10px; border-left-color: #016272; border-left-style: solid;border-left-width:9px; background-color: #ffffff;\">\n                    <div class=\"card-header\">\n                        <div  style=\"float:right;\">\n                          <img src=\"../../../assets/images/view.png\">132  &nbsp;\n                          <img src=\"../../../assets/images/like.png\">  &nbsp; &nbsp;\n                          <img src=\"../../../assets/images/star.png\"> \n                        </div>\n                        <br>\n                        <img src=\"../../../assets/images/file.png\">\n                      </div>  \n                      <div class=\"card-body\">\n                      <p class=\"card-text\"><strong> make up the bulk of the card's content.</strong></p>\n                    </div>\n                </div> \n                \n              </div>       \n            </div>\n          </div>\n        </div>\n\n<br>\n\n<!-- third row -->\n\n<div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n        <div class=\"card\" id=\"bigc\">\n            <div class=\"card-body\" style=\"padding: 0px;\">\n              <img  class=\"card-img-top\" src=\"../../../assets/images/dsnote.png\">\n            </div>\n        </div> \n      </div>\n      \n      <div class=\"col-sm-9\">\n          <h4><strong>Saved Dashboards</strong></h4>\n          <div class=\"row\">\n            <div class=\"card rounded-0 col-lg-4 col-md-5\" style=\"margin: 20px; border-width:3px;\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\"><img src=\"./../../../assets/images/dsgraph.png\"> Some quick example text</p>\n                </div>\n            </div> \n            <div class=\"card rounded-0 col-lg-4 col-md-5\" style=\"margin: 20px; border-width:3px;\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\"><img  class='arrow' src=\"./../../../assets/images/dsgraph.png\"> Some quick example text</p>\n                </div>\n            </div> \n            \n          </div>      \n        </div>\n    </div>\n </div>\n\n <br>\n <!-- forth row -->\n \n\n <div class=\"container-fluid\">\n  <div class=\"row content\">\n    <div class=\"col-sm-3 sidenav\">\n      <div class=\"card\" id=\"bigc\">\n          <div class=\"card-body\" style=\"padding: 0px;\">\n            <img  class=\"card-img-top\" src=\"../../../assets/images/mlpipe.png\">\n          </div>\n      </div> \n    </div>\n\n   \n\n    <div class=\"col-sm-9\">\n        <h4><strong>Notebook Activity</strong></h4>\n        <div class=\"row\">\n          <div class=\"card rounded-0 col-lg-5\" style=\"border-color: transparent;\">\n              <div class=\"card-body\">\n                <p class=\"card-text\"><img src=\"./../../../assets/images/naarrow.png\"> Some quick example text</p>\n              </div>\n          </div> \n          <div class=\"card rounded-0 col-lg-5\" style=\"border-color: transparent;\">\n              <div class=\"card-body\">\n                <p class=\"card-text\"><img src=\"./../../../assets/images/naarrow.png\"> Some quick example text</p>\n              </div>\n          </div> \n          \n        </div>      \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/datasets/datasets/datasets.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/datasets/datasets/datasets.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  /* or inline-flex */ }\n\n#bigc {\n  margin-bottom: 20px;\n  margin-right: 20px;\n  margin-left: 20px;\n  border-color: azure;\n  max-height: 308px;\n  max-height: 229px;\n  border-width: 3px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0);\n  border-bottom: 0px solid; }\n\n.carousel-indicators li {\n  background-color: #016272; }\n\n.carousel-indicators {\n  top: -20px;\n  left: 60%; }\n\n.carousel-control-next, .carousel-control-prev {\n  top: 41px;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5%;\n  height: 68%;\n  background-color: gray;\n  text-align: center;\n  opacity: .5;\n  transition: opacity .15s ease; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIyL2JsYWNrdC9zcmMvYXBwL2RhdGFzZXRzL2RhdGFzZXRzL2RhdGFzZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUFFLG1CQUFBLEVBQW9COztBQUV2QztFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUFBOztBQUtwQjtFQUNJLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0NBQStCO0VBQy9CLHdCQUF3QixFQUFBOztBQUs1QjtFQUNJLHlCQUF3QixFQUFBOztBQUk1QjtFQUNJLFVBQVU7RUFFVixTQUFTLEVBQUE7O0FBU2I7RUFFSSxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGF0YXNldHMvZGF0YXNldHMvZGF0YXNldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xufVxuI2JpZ2N7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBhenVyZTtcbiAgICBtYXgtaGVpZ2h0OiAzMDhweDtcbiAgICBtYXgtaGVpZ2h0OjIyOXB4O1xuICAgIGJvcmRlci13aWR0aDozcHg7XG59XG5cblxuXG4uY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQ7XG59XG5cblxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMTYyNzI7XG5cbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnN7XG4gICAgdG9wOiAtMjBweDtcbiAgICBcbiAgICBsZWZ0OiA2MCU7XG4gICAgXG59XG5cbi8vIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiwgICBcbi8vIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbntcbiAgICBcbi8vIH1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG5cbiAgICB0b3A6IDQxcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1JTtcbiAgICBoZWlnaHQ6NjglO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlO1xufVxuICBcbiJdfQ== */"

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
        this.changeImage = false;
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