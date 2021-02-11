(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-payment-failure-failure-module"],{

/***/ "+bzK":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/payment/failure/failure.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Payment Failed</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item style=\"height: 50%;\">\n      <ion-img [src]=\"failure\"></ion-img>\n    </ion-item>\n\n    <h1 class=\"ion-padding\">Payment Failed</h1>\n    <h4 class=\"ion-padding\">\n      Your payment was failed\n      <br>You can try again\n    </h4>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n\n      <div class=\"vertical50\">\n        <ion-img [src]=\"failure\"></ion-img>\n      </div>\n\n      <div class=\"vertical50\">\n        <h1 class=\"ion-padding\">Payment Failed</h1>\n        <h4 class=\"ion-padding\">\n          Your payment was failed\n          <br>You can try again\n        </h4>\n      </div>\n\n    </ion-item>\n\n  </ion-content>\n\n\n  <ion-footer class=\"ion-padding\">\n    <ion-button expand=\"block\" fill=\"outline\" href='/home' target=\"_blank\">Home</ion-button>\n  </ion-footer>\n\n</div>\n");

/***/ }),

/***/ "MuD4":
/*!************************************************************!*\
  !*** ./src/app/products/payment/failure/failure.module.ts ***!
  \************************************************************/
/*! exports provided: FailurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePageModule", function() { return FailurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _failure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./failure-routing.module */ "jQnG");
/* harmony import */ var _failure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./failure.page */ "wi5c");







let FailurePageModule = class FailurePageModule {
};
FailurePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _failure_routing_module__WEBPACK_IMPORTED_MODULE_5__["FailurePageRoutingModule"]
        ],
        declarations: [_failure_page__WEBPACK_IMPORTED_MODULE_6__["FailurePage"]]
    })
], FailurePageModule);



/***/ }),

/***/ "jQnG":
/*!********************************************************************!*\
  !*** ./src/app/products/payment/failure/failure-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: FailurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePageRoutingModule", function() { return FailurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _failure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./failure.page */ "wi5c");




const routes = [
    {
        path: '',
        component: _failure_page__WEBPACK_IMPORTED_MODULE_3__["FailurePage"]
    }
];
let FailurePageRoutingModule = class FailurePageRoutingModule {
};
FailurePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FailurePageRoutingModule);



/***/ }),

/***/ "wi5c":
/*!**********************************************************!*\
  !*** ./src/app/products/payment/failure/failure.page.ts ***!
  \**********************************************************/
/*! exports provided: FailurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePage", function() { return FailurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_failure_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./failure.page.html */ "+bzK");
/* harmony import */ var _failure_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./failure.page.scss */ "xTJb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FailurePage = class FailurePage {
    constructor() {
        this.failure = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/payment%2Fundraw_server_down_s4lk.png?alt=media&token=57905dde-a5e0-4a1c-bc45-028f5557d12c";
    }
    ngOnInit() {
    }
};
FailurePage.ctorParameters = () => [];
FailurePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-failure',
        template: _raw_loader_failure_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_failure_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FailurePage);



/***/ }),

/***/ "xTJb":
/*!************************************************************!*\
  !*** ./src/app/products/payment/failure/failure.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWlsdXJlLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=products-payment-failure-failure-module.js.map