(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultation-consultation-module"],{

/***/ "djdX":
/*!**********************************************************************!*\
  !*** ./src/app/services/consultation/consultation-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConsultationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationPageRoutingModule", function() { return ConsultationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _consultation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultation.page */ "oB4N");




const routes = [
    {
        path: '',
        component: _consultation_page__WEBPACK_IMPORTED_MODULE_3__["ConsultationPage"]
    }
];
let ConsultationPageRoutingModule = class ConsultationPageRoutingModule {
};
ConsultationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultationPageRoutingModule);



/***/ }),

/***/ "frpX":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/consultation/consultation.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Consultation</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item style=\"height: 50%;\">\n      <ion-img [src]=\"call_img\"></ion-img>\n    </ion-item>\n\n    <h1 class=\"ion-padding\">Consultation</h1>\n    <h4 class=\"ion-padding\">\n      Book your call now\n      <br>Rs 99\n    </h4>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    <ion-item>\n\n      <div class=\"vertical50\">\n        <ion-img [src]=\"call_img\"></ion-img>\n      </div>\n\n      <div class=\"vertical50\">\n        <h1 class=\"ion-padding\">Consultation</h1>\n        <h4 class=\"ion-padding\">Book your call now</h4>\n        <h4 class=\"ion-padding\">Rs 99</h4>\n      </div>\n\n    </ion-item>\n\n  </ion-content>\n\n\n  <ion-footer class=\"ion-padding\" style=\"text-align: center;\">\n    <div class='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/4DC76879FFDD82A8E859AF197AC9E902'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div> \n  </ion-footer>\n\n</div>\n");

/***/ }),

/***/ "jFH+":
/*!**************************************************************!*\
  !*** ./src/app/services/consultation/consultation.module.ts ***!
  \**************************************************************/
/*! exports provided: ConsultationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationPageModule", function() { return ConsultationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _consultation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultation-routing.module */ "djdX");
/* harmony import */ var _consultation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultation.page */ "oB4N");







let ConsultationPageModule = class ConsultationPageModule {
};
ConsultationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consultation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultationPageRoutingModule"]
        ],
        declarations: [_consultation_page__WEBPACK_IMPORTED_MODULE_6__["ConsultationPage"]]
    })
], ConsultationPageModule);



/***/ }),

/***/ "oB4N":
/*!************************************************************!*\
  !*** ./src/app/services/consultation/consultation.page.ts ***!
  \************************************************************/
/*! exports provided: ConsultationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationPage", function() { return ConsultationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consultation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consultation.page.html */ "frpX");
/* harmony import */ var _consultation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultation.page.scss */ "xneo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let ConsultationPage = class ConsultationPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.call_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/services%2Fundraw_video_call_kxyp.png?alt=media&token=f22fbb34-2164-4f5d-8305-edd5c966d0e0";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online provides consulting for transforming career in data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Consultation | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
ConsultationPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
ConsultationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-consultation',
        template: _raw_loader_consultation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consultation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConsultationPage);



/***/ }),

/***/ "xneo":
/*!**************************************************************!*\
  !*** ./src/app/services/consultation/consultation.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YXRpb24ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=consultation-consultation-module.js.map