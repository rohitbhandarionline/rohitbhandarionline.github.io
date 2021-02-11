(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-payment-success-success-module"],{

/***/ "FzAN":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/payment/success/success.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Payment Successful</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item style=\"height: 50%;\">\n      <ion-img [src]=\"success\"></ion-img>\n    </ion-item>\n\n    <h1 class=\"ion-padding\">Payment Successfull</h1>\n    <h4 class=\"ion-padding\">\n      Your payment is successful\n      <br>We will be reaching you through email soon\n    </h4>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n\n      <div class=\"vertical50\">\n        <ion-img [src]=\"success\"></ion-img>\n      </div>\n\n      <div class=\"vertical50\">\n        <h1 class=\"ion-padding\">Payment Successfull</h1>\n        <h4 class=\"ion-padding\">\n          Your payment is successful\n          <br>We will be reaching you through email soon\n        </h4>\n      </div>\n\n    </ion-item>\n\n  </ion-content>\n\n\n  <ion-footer class=\"ion-padding\">\n    <ion-button expand=\"block\" fill=\"outline\" href='/home' target=\"_blank\">Home</ion-button>\n  </ion-footer>\n\n</div>\n");

/***/ }),

/***/ "KelS":
/*!**********************************************************!*\
  !*** ./src/app/products/payment/success/success.page.ts ***!
  \**********************************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success.page.html */ "FzAN");
/* harmony import */ var _success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success.page.scss */ "lrWo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SuccessPage = class SuccessPage {
    constructor() {
        this.success = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/payment%2Fundraw_order_confirmed_aaw7.png?alt=media&token=af4e3c6e-f771-4b28-87c8-7394dbeccc2a";
    }
    ngOnInit() {
    }
};
SuccessPage.ctorParameters = () => [];
SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success',
        template: _raw_loader_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessPage);



/***/ }),

/***/ "lrWo":
/*!************************************************************!*\
  !*** ./src/app/products/payment/success/success.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "pjXZ":
/*!************************************************************!*\
  !*** ./src/app/products/payment/success/success.module.ts ***!
  \************************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-routing.module */ "sHFZ");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "KelS");







let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
    })
], SuccessPageModule);



/***/ }),

/***/ "sHFZ":
/*!********************************************************************!*\
  !*** ./src/app/products/payment/success/success-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function() { return SuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success.page */ "KelS");




const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuccessPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=products-payment-success-success-module.js.map