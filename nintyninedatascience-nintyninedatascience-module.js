(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nintyninedatascience-nintyninedatascience-module"],{

/***/ "2aVy":
/*!**************************************************************************************!*\
  !*** ./src/app/products/nintyninedatascience/nintyninedatascience-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NintyninedatasciencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NintyninedatasciencePageRoutingModule", function() { return NintyninedatasciencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nintyninedatascience_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nintyninedatascience.page */ "fCbe");




const routes = [
    {
        path: '',
        component: _nintyninedatascience_page__WEBPACK_IMPORTED_MODULE_3__["NintyninedatasciencePage"]
    }
];
let NintyninedatasciencePageRoutingModule = class NintyninedatasciencePageRoutingModule {
};
NintyninedatasciencePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NintyninedatasciencePageRoutingModule);



/***/ }),

/***/ "68A/":
/*!******************************************************************************!*\
  !*** ./src/app/products/nintyninedatascience/nintyninedatascience.module.ts ***!
  \******************************************************************************/
/*! exports provided: NintyninedatasciencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NintyninedatasciencePageModule", function() { return NintyninedatasciencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nintyninedatascience_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nintyninedatascience-routing.module */ "2aVy");
/* harmony import */ var _nintyninedatascience_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nintyninedatascience.page */ "fCbe");







let NintyninedatasciencePageModule = class NintyninedatasciencePageModule {
};
NintyninedatasciencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nintyninedatascience_routing_module__WEBPACK_IMPORTED_MODULE_5__["NintyninedatasciencePageRoutingModule"]
        ],
        declarations: [_nintyninedatascience_page__WEBPACK_IMPORTED_MODULE_6__["NintyninedatasciencePage"]]
    })
], NintyninedatasciencePageModule);



/***/ }),

/***/ "JwLe":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/nintyninedatascience/nintyninedatascience.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Data Science in 99 Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n  \n      <div style=\"width: 50%;\">\n  \n        <h1 class=\"ion-padding\">\n          Data Science in 99 Pages\n          <h4 class=\"positive\">Rs 499</h4>\n        </h1>\n        \n          <div class=\"ion-padding\" style=\"text-align: start;\">\n  \n          <h5>Details</h5>\n          \n          99 terminologies important to starting career in the Data Science\n          <br>\n          Get to know about different technologies, softwares, day-to-day words, algorithms that Data Scientists use eveyday\n          <br><br>\n          10 of the Terminologies are:\n          <div class=\"ion-padding\">\n            <li>Data Frame</li>\n            <li>Database</li>\n            <li>Deep Learning</li>\n            <li>Artificial Intelligence</li>\n            <li>Neural Network</li>\n            <li>EDA</li>\n            <li>Big Data</li>\n            <li>Data Visualization</li>\n            <li>Business Analytics</li>\n            <li>Hadoop</li>\n            <li>Sklearn</li>\n          </div>\n  \n          </div>\n        \n      </div>\n  \n      <div style=\"width: 30%;\">\n  \n        <ion-img class=\"ion-padding\" [src]=\"ebookimg\"></ion-img>\n        \n      </div>\n  \n    </ion-item>\n  \n  </ion-content>\n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <h1 class=\"ion-padding\">Data Science in 99 Pages</h1>\n  \n    <ion-img class=\"ion-padding\" [src]=\"ebookimg\"></ion-img>\n   \n    <h4 class=\"ion-padding positive\">Rs 499</h4>\n  \n    <div class=\"ion-padding\" style=\"text-align: start;\">\n      \n      <h3>Details</h3>\n      \n      99 terminologies important to starting career in the Data Science\n      <br>\n      Get to know about different technologies, softwares, day-to-day words, algorithms that Data Scientists use eveyday\n      <br><br>\n      10 of the Terminologies are:\n      <div class=\"ion-padding\">\n        <li>Data Frame</li>\n        <li>Database</li>\n        <li>Deep Learning</li>\n        <li>Artificial Intelligence</li>\n        <li>Neural Network</li>\n        <li>EDA</li>\n        <li>Big Data</li>\n        <li>Data Visualization</li>\n        <li>Business Analytics</li>\n        <li>Hadoop</li>\n        <li>Sklearn</li>\n      </div>\n  \n    </div>\n\n    <!-- <ion-item>\n      <div class=\"ion-padding\">\n        Prerequisite :\n        <br>\n        <ion-img class=\"ion-padding\" [src]=\"ebookimg\"></ion-img>\n      </div>\n      <div class=\"ion-padding\">\n        Next :\n        <br>\n        <ion-img class=\"ion-padding\" [src]=\"ebookimg\"></ion-img>\n      </div>\n    </ion-item> -->\n  \n  </ion-content>\n  \n  <ion-footer class=\"ion-padding\" style=\"text-align: center;\">\n    <div class='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/35E0C07E2095CD3E4D4A2404BFB519AA'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/23.png' /></a></div> \n  </ion-footer>\n  \n</div>\n");

/***/ }),

/***/ "Np7t":
/*!******************************************************************************!*\
  !*** ./src/app/products/nintyninedatascience/nintyninedatascience.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuaW50eW5pbmVkYXRhc2NpZW5jZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fCbe":
/*!****************************************************************************!*\
  !*** ./src/app/products/nintyninedatascience/nintyninedatascience.page.ts ***!
  \****************************************************************************/
/*! exports provided: NintyninedatasciencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NintyninedatasciencePage", function() { return NintyninedatasciencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nintyninedatascience_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nintyninedatascience.page.html */ "JwLe");
/* harmony import */ var _nintyninedatascience_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nintyninedatascience.page.scss */ "Np7t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let NintyninedatasciencePage = class NintyninedatasciencePage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.ebookimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/ebooks%2FEbook.png?alt=media&token=0d473e7f-303d-460b-a4a7-98f120966890";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online is providing Data Science in 99 Pages for data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Data Science in 99 Pages | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
NintyninedatasciencePage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
NintyninedatasciencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nintyninedatascience',
        template: _raw_loader_nintyninedatascience_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nintyninedatascience_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NintyninedatasciencePage);



/***/ })

}]);
//# sourceMappingURL=nintyninedatascience-nintyninedatascience-module.js.map