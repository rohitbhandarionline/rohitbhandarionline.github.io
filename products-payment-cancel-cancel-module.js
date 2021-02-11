(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-payment-cancel-cancel-module"],{

/***/ "CDzq":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/payment/cancel/cancel.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Payment Cancelled</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item style=\"height: 50%;\">\n      <ion-img [src]=\"cancel\"></ion-img>\n    </ion-item>\n\n    <h1 class=\"ion-padding\">Payment Cancelled</h1>\n    <h4 class=\"ion-padding\">\n      You have cancelled payment<br>\n      You can try again\n    </h4>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n\n      <div class=\"vertical50\">\n        <ion-img [src]=\"cancel\"></ion-img>\n      </div>\n\n      <div class=\"vertical50\">\n        <h1 class=\"ion-padding\">Payment Cancelled</h1>\n        <h4 class=\"ion-padding\">\n          You have cancelled payment<br>\n          You can try again\n        </h4>\n      </div>\n\n    </ion-item>\n\n  </ion-content>\n\n\n  <ion-footer class=\"ion-padding\">\n    <ion-button expand=\"block\" fill=\"outline\" href='/home' target=\"_blank\">Home</ion-button>\n  </ion-footer>\n\n</div>\n");

/***/ }),

/***/ "SSLA":
/*!**********************************************************!*\
  !*** ./src/app/products/payment/cancel/cancel.module.ts ***!
  \**********************************************************/
/*! exports provided: CancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageModule", function() { return CancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel-routing.module */ "Xu2Z");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel.page */ "x++o");







let CancelPageModule = class CancelPageModule {
};
CancelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelPageRoutingModule"]
        ],
        declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]]
    })
], CancelPageModule);



/***/ }),

/***/ "Xu2Z":
/*!******************************************************************!*\
  !*** ./src/app/products/payment/cancel/cancel-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CancelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageRoutingModule", function() { return CancelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel.page */ "x++o");




const routes = [
    {
        path: '',
        component: _cancel_page__WEBPACK_IMPORTED_MODULE_3__["CancelPage"]
    }
];
let CancelPageRoutingModule = class CancelPageRoutingModule {
};
CancelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CancelPageRoutingModule);



/***/ }),

/***/ "b9nQ":
/*!**********************************************************!*\
  !*** ./src/app/products/payment/cancel/cancel.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "x++o":
/*!********************************************************!*\
  !*** ./src/app/products/payment/cancel/cancel.page.ts ***!
  \********************************************************/
/*! exports provided: CancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPage", function() { return CancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cancel_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cancel.page.html */ "CDzq");
/* harmony import */ var _cancel_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel.page.scss */ "b9nQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CancelPage = class CancelPage {
    constructor() {
        this.cancel = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/payment%2Fundraw_cancel_u1it.png?alt=media&token=d66a8a76-9a39-408d-862a-2eacbe1f7e8e";
    }
    ngOnInit() {
    }
};
CancelPage.ctorParameters = () => [];
CancelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cancel',
        template: _raw_loader_cancel_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cancel_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CancelPage);



/***/ })

}]);
//# sourceMappingURL=products-payment-cancel-cancel-module.js.map