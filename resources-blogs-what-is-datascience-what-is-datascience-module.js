(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-blogs-what-is-datascience-what-is-datascience-module"],{

/***/ "9U4B":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources/blogs/what-is-datascience/what-is-datascience.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>What is data science?</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding\">\n\n      <div class=\"blogtext\">\n        \n      <h1>What is Data Science?</h1>\n\n      <ion-img [src]=\"datascience_img\"></ion-img>\n\n        You are on the article probably because want to know more about what data science is. It's one of the buzzword since last 5 years. And trending one in the year 2020. In simple words it can termed as a field which uses scientific methods and algorithms to extract insights from the data. It is related to data mining, machine learning, artificial intelligence, big data etc. all these buzz words. We will be discussing them also in the coming blogs.\n        <br> \n        <br>\n        <br>\n        Data science works on the data sets which are typically large and cannot be analyzed by humans. This consists of many steps. First of all the data is collected from various desired sources. Then the data is analysed using the techniques from statistics and data analysis methods. This data is then cleaned to extract desired data. This data is understood and analyzed. Various hypothesis, insights and conclusions are derived from it.\n        <br>\n        <br>\n        <br>\n        These findings are generally presented to the upper management which helps them in better decision making. This is also termed as data driven decisions.\n        <br>\n        <br>\n        <br>\n        The techniques used in this field are from various fields such as mathematics, computer science, statistics, information technology, science, and also domain knowledge from the which the data belongs to.\n        <br>\n        <br>\n        <br>\n        Along with analytical skills, presentation skills is also highly appreciated in this field as it helps the upper management people to understand the decision and conclusion process and take a fair decision.\n        <br>\n        <br>\n        <br>\n        There is a lot of new keywords and technologies ahead. Keep your journal or notes with you to keep grasping what you need and feels important to you.\n\n      </div>\n\n  </ion-content>\n\n</div>\n");

/***/ }),

/***/ "9hWW":
/*!*********************************************************************************!*\
  !*** ./src/app/resources/blogs/what-is-datascience/what-is-datascience.page.ts ***!
  \*********************************************************************************/
/*! exports provided: WhatIsDatasciencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatIsDatasciencePage", function() { return WhatIsDatasciencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_what_is_datascience_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./what-is-datascience.page.html */ "9U4B");
/* harmony import */ var _what_is_datascience_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./what-is-datascience.page.scss */ "iXf7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let WhatIsDatasciencePage = class WhatIsDatasciencePage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.datascience_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/blogs%2Fundraw_Data_re_80ws.png?alt=media&token=00a5446d-d529-418d-be54-a7343034f668";
        this.meta.updateTag({ name: 'description', content: "You are on the article probably because want to know more about what data science is. It's one of the buzzword since last 5 years. And trending one in the year 2020. In simple words it can termed as a field which uses scientific methods and algorithms to extract insights from the data. It is related to data mining, machine learning, artificial intelligence, big data etc. all these buzz words. We will be discussing them also in the coming blogs." });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("What is Data Science? | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
WhatIsDatasciencePage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
WhatIsDatasciencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-what-is-datascience',
        template: _raw_loader_what_is_datascience_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_what_is_datascience_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WhatIsDatasciencePage);



/***/ }),

/***/ "OmNw":
/*!***********************************************************************************!*\
  !*** ./src/app/resources/blogs/what-is-datascience/what-is-datascience.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WhatIsDatasciencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatIsDatasciencePageModule", function() { return WhatIsDatasciencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _what_is_datascience_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./what-is-datascience-routing.module */ "XZe8");
/* harmony import */ var _what_is_datascience_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./what-is-datascience.page */ "9hWW");







let WhatIsDatasciencePageModule = class WhatIsDatasciencePageModule {
};
WhatIsDatasciencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _what_is_datascience_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhatIsDatasciencePageRoutingModule"]
        ],
        declarations: [_what_is_datascience_page__WEBPACK_IMPORTED_MODULE_6__["WhatIsDatasciencePage"]]
    })
], WhatIsDatasciencePageModule);



/***/ }),

/***/ "XZe8":
/*!*******************************************************************************************!*\
  !*** ./src/app/resources/blogs/what-is-datascience/what-is-datascience-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: WhatIsDatasciencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatIsDatasciencePageRoutingModule", function() { return WhatIsDatasciencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _what_is_datascience_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./what-is-datascience.page */ "9hWW");




const routes = [
    {
        path: '',
        component: _what_is_datascience_page__WEBPACK_IMPORTED_MODULE_3__["WhatIsDatasciencePage"]
    }
];
let WhatIsDatasciencePageRoutingModule = class WhatIsDatasciencePageRoutingModule {
};
WhatIsDatasciencePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhatIsDatasciencePageRoutingModule);



/***/ }),

/***/ "iXf7":
/*!***********************************************************************************!*\
  !*** ./src/app/resources/blogs/what-is-datascience/what-is-datascience.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGF0LWlzLWRhdGFzY2llbmNlLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=resources-blogs-what-is-datascience-what-is-datascience-module.js.map