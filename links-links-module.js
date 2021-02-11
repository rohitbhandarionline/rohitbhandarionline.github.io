(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["links-links-module"],{

/***/ "CWqp":
/*!********************************************!*\
  !*** ./src/app/home/links/links.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "HPLa":
/*!******************************************!*\
  !*** ./src/app/home/links/links.page.ts ***!
  \******************************************/
/*! exports provided: LinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPage", function() { return LinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_links_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./links.page.html */ "nuak");
/* harmony import */ var _links_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links.page.scss */ "CWqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LinksPage = class LinksPage {
    constructor() { }
    ngOnInit() {
    }
};
LinksPage.ctorParameters = () => [];
LinksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-links',
        template: _raw_loader_links_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_links_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LinksPage);



/***/ }),

/***/ "I4Au":
/*!********************************************!*\
  !*** ./src/app/home/links/links.module.ts ***!
  \********************************************/
/*! exports provided: LinksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPageModule", function() { return LinksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _links_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./links-routing.module */ "eobc");
/* harmony import */ var _links_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./links.page */ "HPLa");







let LinksPageModule = class LinksPageModule {
};
LinksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _links_routing_module__WEBPACK_IMPORTED_MODULE_5__["LinksPageRoutingModule"]
        ],
        declarations: [_links_page__WEBPACK_IMPORTED_MODULE_6__["LinksPage"]]
    })
], LinksPageModule);



/***/ }),

/***/ "eobc":
/*!****************************************************!*\
  !*** ./src/app/home/links/links-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LinksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPageRoutingModule", function() { return LinksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _links_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links.page */ "HPLa");




const routes = [
    {
        path: '',
        component: _links_page__WEBPACK_IMPORTED_MODULE_3__["LinksPage"]
    }
];
let LinksPageRoutingModule = class LinksPageRoutingModule {
};
LinksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LinksPageRoutingModule);



/***/ }),

/***/ "nuak":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/links/links.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Rohit Bhandari Online</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding\">\n      <h1 class=\"ion-padding\">Ready to start your Journey as Data Scientist?</h1>\n      \n      <ion-button class=\"ion-margin\" expand=\"block\" fill=\"outline\" ion-button href=\"/roadmap\" color=\"primary\">Roadmap</ion-button>\n      \n      <ion-button class=\"ion-margin\" expand=\"block\" fill=\"outline\" ion-button href=\"/subscribeemail\" color=\"primary\">Subscribe Newsletter</ion-button>\n      \n      <ion-button class=\"ion-margin\" expand=\"block\" fill=\"outline\" ion-button href=\"/services\" color=\"primary\">Consultation Call</ion-button>\n    \n      <ion-button class=\"ion-margin\" expand=\"block\" fill=\"outline\" ion-button href=\"/\" color=\"primary\">Home</ion-button>\n    \n      <!-- <ion-button style=\"margin: 10%;\" expand=\"block\" fill=\"outline\" ion-button href=\"/blogs\" color=\"primary\">Free Blogs</ion-button>\n      <ion-button style=\"margin: 10%;\" expand=\"block\" fill=\"outline\" ion-button href=\"/app\" color=\"primary\">App</ion-button>\n     -->\n    \n  </ion-content>\n\n  <ion-footer class=\"ion-padding\">\n      <ion-button expand=\"block\" ion-button href=\"/nintyninedatascience\" color=\"primary\">Get E-book</ion-button>\n  </ion-footer>\n\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=links-links-module.js.map