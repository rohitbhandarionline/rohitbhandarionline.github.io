(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponsor-sponsor-module"],{

/***/ "1HD9":
/*!************************************************************!*\
  !*** ./src/app/services/sponsor/sponsor-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SponsorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorPageRoutingModule", function() { return SponsorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sponsor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsor.page */ "s8aS");




const routes = [
    {
        path: '',
        component: _sponsor_page__WEBPACK_IMPORTED_MODULE_3__["SponsorPage"]
    }
];
let SponsorPageRoutingModule = class SponsorPageRoutingModule {
};
SponsorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SponsorPageRoutingModule);



/***/ }),

/***/ "Buia":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/sponsor/sponsor.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Sponsor Post</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item style=\"height: 50%;\">\n      <ion-img [src]=\"sponsor_img\"></ion-img>\n    </ion-item>\n\n    <h1 class=\"ion-padding\">Sponsor post</h1>\n    <h4 class=\"ion-padding\">\n      Get views from Data Science Community\n    </h4>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n\n      <div class=\"vertical50\">\n        <ion-img [src]=\"sponsor_img\"></ion-img>\n      </div>\n\n      <div class=\"vertical50\">\n        <h1 class=\"ion-padding\">Sponsor post</h1>\n        <h4 class=\"ion-padding\">\n          Get views from Data Science Community\n        </h4>\n      </div>\n\n    </ion-item>\n\n  </ion-content>\n\n\n  <ion-footer class=\"ion-padding\" style=\"text-align: center;\">\n    <div class='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/C47F4ECB85612E11DC0A7170E499A4CB'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/23.png' /></a></div> \n  </ion-footer>\n\n</div>\n");

/***/ }),

/***/ "mWvf":
/*!****************************************************!*\
  !*** ./src/app/services/sponsor/sponsor.module.ts ***!
  \****************************************************/
/*! exports provided: SponsorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorPageModule", function() { return SponsorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sponsor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sponsor-routing.module */ "1HD9");
/* harmony import */ var _sponsor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsor.page */ "s8aS");







let SponsorPageModule = class SponsorPageModule {
};
SponsorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sponsor_routing_module__WEBPACK_IMPORTED_MODULE_5__["SponsorPageRoutingModule"]
        ],
        declarations: [_sponsor_page__WEBPACK_IMPORTED_MODULE_6__["SponsorPage"]]
    })
], SponsorPageModule);



/***/ }),

/***/ "s8aS":
/*!**************************************************!*\
  !*** ./src/app/services/sponsor/sponsor.page.ts ***!
  \**************************************************/
/*! exports provided: SponsorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorPage", function() { return SponsorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sponsor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sponsor.page.html */ "Buia");
/* harmony import */ var _sponsor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsor.page.scss */ "uyx2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let SponsorPage = class SponsorPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.sponsor_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/services%2Fundraw_pay_online_b1hk.png?alt=media&token=b98700f4-eca3-4be4-a06c-023cfe3ca9f5";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online allows sponsors post on instagram page for data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Sponsor | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
SponsorPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SponsorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sponsor',
        template: _raw_loader_sponsor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sponsor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SponsorPage);



/***/ }),

/***/ "uyx2":
/*!****************************************************!*\
  !*** ./src/app/services/sponsor/sponsor.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9uc29yLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=sponsor-sponsor-module.js.map