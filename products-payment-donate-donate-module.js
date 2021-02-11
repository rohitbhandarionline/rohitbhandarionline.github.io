(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-payment-donate-donate-module"],{

/***/ "DUIo":
/*!********************************************************!*\
  !*** ./src/app/products/payment/donate/donate.page.ts ***!
  \********************************************************/
/*! exports provided: DonatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePage", function() { return DonatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donate.page.html */ "Vi7x");
/* harmony import */ var _donate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate.page.scss */ "tHz3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DonatePage = class DonatePage {
    constructor() {
        this.donate = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/payment%2Fundraw_deliveries_131a.png?alt=media&token=1b19fb26-f7e7-4b0a-b334-2086f4429917";
    }
    ngOnInit() {
    }
};
DonatePage.ctorParameters = () => [];
DonatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate',
        template: _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonatePage);



/***/ }),

/***/ "Vi7x":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/payment/donate/donate.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Donate to Support</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item style=\"height: 50%;\">\n      <ion-img [src]=\"donate\"></ion-img>\n    </ion-item>\n\n    <h1 class=\"ion-padding\">Donate</h1>\n    <h4 class=\"ion-padding\">\n      Help us get more value to you\n    </h4>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n\n      <div class=\"vertical50\">\n        <ion-img [src]=\"donate\"></ion-img>\n      </div>\n\n      <div class=\"vertical50\">\n        <h1 class=\"ion-padding\">Donate</h1>\n        <h4 class=\"ion-padding\">\n          Help us get more value to you\n        </h4>\n      </div>\n\n    </ion-item>\n\n  </ion-content>\n\n<ion-footer style=\"text-align: center;\" class=\"ion-padding\">\n    <div  class='pm-button'><a  href='https://www.payumoney.com/paybypayumoney/#/8557711F10FFBB295E29CAACF9983E3B'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/23.png' /></a></div> \n</ion-footer>\n</div>");

/***/ }),

/***/ "rJkV":
/*!******************************************************************!*\
  !*** ./src/app/products/payment/donate/donate-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DonatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageRoutingModule", function() { return DonatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donate.page */ "DUIo");




const routes = [
    {
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_3__["DonatePage"]
    }
];
let DonatePageRoutingModule = class DonatePageRoutingModule {
};
DonatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonatePageRoutingModule);



/***/ }),

/***/ "tHz3":
/*!**********************************************************!*\
  !*** ./src/app/products/payment/donate/donate.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25hdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "woDj":
/*!**********************************************************!*\
  !*** ./src/app/products/payment/donate/donate.module.ts ***!
  \**********************************************************/
/*! exports provided: DonatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageModule", function() { return DonatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _donate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donate-routing.module */ "rJkV");
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate.page */ "DUIo");







let DonatePageModule = class DonatePageModule {
};
DonatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _donate_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonatePageRoutingModule"]
        ],
        declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_6__["DonatePage"]]
    })
], DonatePageModule);



/***/ })

}]);
//# sourceMappingURL=products-payment-donate-donate-module.js.map