(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-routing.module */ "fD4K");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "O7F2");







let ServicesPageModule = class ServicesPageModule {
};
ServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicesPageRoutingModule"]
        ],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })
], ServicesPageModule);



/***/ }),

/***/ "EV+0":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Services</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\">\n    \n    <ion-item class=\"ion-padding\">\n      <a href=\"/consultation\" class=\"link-underline center\">\n        <ion-img [src]=\"call_img\"></ion-img>\n        <h1 >Consultation</h1>\n      </a>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\">\n      <a href=\"/roadmap\" class=\"link-underline center\">\n        <ion-img [src]=\"roadmap_img\"></ion-img>\n        <h1 >Roadmap</h1>\n      </a>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\">\n      <a href=\"/sponsor\" class=\"link-underline center\">\n        <ion-img [src]=\"sponsor_img\"></ion-img>\n        <h1 >Sponsor</h1>\n      </a>\n    </ion-item>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n    \n    \n    <a href=\"/consultation\" class=\"link-underline\">\n      <ion-item>\n          <div class=\"vertical50\">\n            <ion-img [src]=\"call_img\"></ion-img>\n          </div>\n\n          <div class=\"vertical50 center\">\n            <h1 class=\"ion-padding\">Consultation</h1>\n          </div>\n      </ion-item>\n    </a>\n\n    <a href=\"/roadmap\" class=\"link-underline\">\n      <ion-item>\n        <div class=\"vertical50 center\">\n          <h1 class=\"ion-padding\">Roadmap</h1>\n        </div>\n\n        <div class=\"vertical50\">\n          <ion-img [src]=\"roadmap_img\"></ion-img>\n        </div>\n      </ion-item>\n    </a>\n\n    <a href=\"/sponsor\" class=\"link-underline\">\n      <ion-item>\n        <div class=\"vertical50\">\n          <ion-img [src]=\"sponsor_img\"></ion-img>\n        </div>\n\n        <div class=\"vertical50 center\">\n          <h1 class=\"ion-padding\">Sponsor</h1>\n        </div>\n      </ion-item>\n    </a>\n\n  </ion-content>\n\n</div>\n");

/***/ }),

/***/ "O7F2":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services.page.html */ "EV+0");
/* harmony import */ var _services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.page.scss */ "odIF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let ServicesPage = class ServicesPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.call_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/services%2Fundraw_video_call_kxyp.png?alt=media&token=f22fbb34-2164-4f5d-8305-edd5c966d0e0";
        this.roadmap_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/services%2Fundraw_navigator_a479.png?alt=media&token=ef244510-ebc1-4173-9704-a1fca4bc7710";
        this.sponsor_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/services%2Fundraw_pay_online_b1hk.png?alt=media&token=b98700f4-eca3-4be4-a06c-023cfe3ca9f5";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online provides services such as consultation calls, roadmap and sponsors for data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Services | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
ServicesPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
ServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicesPage);



/***/ }),

/***/ "fD4K":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageRoutingModule", function() { return ServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services.page */ "O7F2");




const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    },
    {
        path: 'roadmap',
        loadChildren: () => __webpack_require__.e(/*! import() | roadmap-roadmap-module */ "roadmap-roadmap-module").then(__webpack_require__.bind(null, /*! ./roadmap/roadmap.module */ "aWs2")).then(m => m.RoadmapPageModule)
    },
    {
        path: 'consultation',
        loadChildren: () => __webpack_require__.e(/*! import() | consultation-consultation-module */ "consultation-consultation-module").then(__webpack_require__.bind(null, /*! ./consultation/consultation.module */ "jFH+")).then(m => m.ConsultationPageModule)
    },
    {
        path: 'sponsor',
        loadChildren: () => __webpack_require__.e(/*! import() | sponsor-sponsor-module */ "sponsor-sponsor-module").then(__webpack_require__.bind(null, /*! ./sponsor/sponsor.module */ "mWvf")).then(m => m.SponsorPageModule)
    }
];
let ServicesPageRoutingModule = class ServicesPageRoutingModule {
};
ServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicesPageRoutingModule);



/***/ }),

/***/ "odIF":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map