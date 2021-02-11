(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribeemail-subscribeemail-module"],{

/***/ "5M7f":
/*!**************************************************************!*\
  !*** ./src/app/home/subscribeemail/subscribeemail.module.ts ***!
  \**************************************************************/
/*! exports provided: SubscribeemailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeemailPageModule", function() { return SubscribeemailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subscribeemail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribeemail-routing.module */ "zGc2");
/* harmony import */ var _subscribeemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribeemail.page */ "jskw");







let SubscribeemailPageModule = class SubscribeemailPageModule {
};
SubscribeemailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscribeemail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribeemailPageRoutingModule"]
        ],
        declarations: [_subscribeemail_page__WEBPACK_IMPORTED_MODULE_6__["SubscribeemailPage"]]
    })
], SubscribeemailPageModule);



/***/ }),

/***/ "B8RX":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/subscribeemail/subscribeemail.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Subscribe Email</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSehPSI9JdrhASTDjRgLc8V6XmvfI-17e9tr-2lRNQUDRB4ufQ/viewform?embedded=true\" width=\"100%\" height=\"100%\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>\n  </ion-content>\n\n</div>\n");

/***/ }),

/***/ "jskw":
/*!************************************************************!*\
  !*** ./src/app/home/subscribeemail/subscribeemail.page.ts ***!
  \************************************************************/
/*! exports provided: SubscribeemailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeemailPage", function() { return SubscribeemailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscribeemail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscribeemail.page.html */ "B8RX");
/* harmony import */ var _subscribeemail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeemail.page.scss */ "p2n3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let SubscribeemailPage = class SubscribeemailPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online provides newsletter. To get free information on data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Subscribe Email | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
SubscribeemailPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SubscribeemailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscribeemail',
        template: _raw_loader_subscribeemail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscribeemail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscribeemailPage);



/***/ }),

/***/ "p2n3":
/*!**************************************************************!*\
  !*** ./src/app/home/subscribeemail/subscribeemail.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpYmVlbWFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "zGc2":
/*!**********************************************************************!*\
  !*** ./src/app/home/subscribeemail/subscribeemail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SubscribeemailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeemailPageRoutingModule", function() { return SubscribeemailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscribeemail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeemail.page */ "jskw");




const routes = [
    {
        path: '',
        component: _subscribeemail_page__WEBPACK_IMPORTED_MODULE_3__["SubscribeemailPage"]
    }
];
let SubscribeemailPageRoutingModule = class SubscribeemailPageRoutingModule {
};
SubscribeemailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscribeemailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=subscribeemail-subscribeemail-module.js.map