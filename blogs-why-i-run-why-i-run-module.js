(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blogs-why-i-run-why-i-run-module"],{

/***/ "7Q2p":
/*!***********************************************************************!*\
  !*** ./src/app/resources/blogs/why-i-run/why-i-run-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: WhyIRunPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyIRunPageRoutingModule", function() { return WhyIRunPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _why_i_run_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./why-i-run.page */ "eLZa");




const routes = [
    {
        path: '',
        component: _why_i_run_page__WEBPACK_IMPORTED_MODULE_3__["WhyIRunPage"]
    }
];
let WhyIRunPageRoutingModule = class WhyIRunPageRoutingModule {
};
WhyIRunPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhyIRunPageRoutingModule);



/***/ }),

/***/ "I2NO":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources/blogs/why-i-run/why-i-run.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Why I run?</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding\">\n\n\n      <div class=\"blogtext\">\n        \n      <h1>Why I run?</h1>\n\n      <ion-img [src]=\"run_img\"></ion-img>\n\n      It's said that running is a great hobby. It's my hobby since I was in 9th standard, and still I run for about 30 mins townside. There are many benefits of running. Here are some of my personal benefits.\n    <br>\n    <br>\n    <br>\n      First benefit is about my feelings. \n      I feel happy after the run. \n      It's like all of the activities in brain are flushed out and it's only about your heavy breath, the heat generated, and the adrenaline rush all over the body.\n      It's a bit addicting.\n      Later I researched about it and found out that while running we secrete a happiness chemical.\n      This chemical is known as SEROTONIN.\n      It's major role is to stablize our mood.\n    <br>\n    <br>\n    <br>\n      Second benefit is about my routine.\n      Adding running in my routine hacks my body to feel me energized in evening.\n      Burning so much calories, makes me dizzy by 10 p.m.\n      This helps me sleep early.\n      And hence I get lots of time to schedule and start my day.\n      Benjamin Franklin is quoted to have said: \"Early to bed and early to rise, makes a man healthy, wealthy, and wise\".\n    <br>\n    <br>\n    <br>\n      I have met many friends and people who want to make a habit of early sleeping and rising. I can't recommend enough for running daily, as little as 5 mins is enough. \n\n    </div>\n\n  </ion-content>\n\n</div>\n");

/***/ }),

/***/ "JVEQ":
/*!***************************************************************!*\
  !*** ./src/app/resources/blogs/why-i-run/why-i-run.module.ts ***!
  \***************************************************************/
/*! exports provided: WhyIRunPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyIRunPageModule", function() { return WhyIRunPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _why_i_run_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why-i-run-routing.module */ "7Q2p");
/* harmony import */ var _why_i_run_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./why-i-run.page */ "eLZa");







let WhyIRunPageModule = class WhyIRunPageModule {
};
WhyIRunPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _why_i_run_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhyIRunPageRoutingModule"]
        ],
        declarations: [_why_i_run_page__WEBPACK_IMPORTED_MODULE_6__["WhyIRunPage"]]
    })
], WhyIRunPageModule);



/***/ }),

/***/ "eLZa":
/*!*************************************************************!*\
  !*** ./src/app/resources/blogs/why-i-run/why-i-run.page.ts ***!
  \*************************************************************/
/*! exports provided: WhyIRunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyIRunPage", function() { return WhyIRunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_why_i_run_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./why-i-run.page.html */ "I2NO");
/* harmony import */ var _why_i_run_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./why-i-run.page.scss */ "gExc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WhyIRunPage = class WhyIRunPage {
    constructor() {
        this.run_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/blogs%2Fundraw_fitness_stats_sht6.png?alt=media&token=9b243d17-48c1-4646-969e-8b7b475cbb08";
    }
    ngOnInit() {
    }
};
WhyIRunPage.ctorParameters = () => [];
WhyIRunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-why-i-run',
        template: _raw_loader_why_i_run_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_why_i_run_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WhyIRunPage);



/***/ }),

/***/ "gExc":
/*!***************************************************************!*\
  !*** ./src/app/resources/blogs/why-i-run/why-i-run.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aHktaS1ydW4ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=blogs-why-i-run-why-i-run-module.js.map