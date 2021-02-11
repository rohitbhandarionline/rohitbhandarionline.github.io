(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "WWVa":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kURh":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Blogs</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\">\n\n    <a href=\"what-is-datascience\" class=\"mobile link-underline\">\n      <ion-card >\n          <ion-card-header>\n            <ion-img [src]=\"datascience_img\"></ion-img>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card-title>\n              What is Datascience?\n            </ion-card-title>\n            <ion-card-subtitle>\n              27 Dec 2020\n            </ion-card-subtitle>\n          </ion-card-content>\n      </ion-card>\n    </a>\n\n    <a href=\"why-i-run\" class=\"mobile link-underline\">\n      <ion-card >\n        <ion-card-header>\n          <ion-img [src]=\"run_img\"></ion-img>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-card-title>\n            Why I run\n          </ion-card-title>\n          <ion-card-subtitle>\n            19 Oct 2020\n          </ion-card-subtitle>\n        </ion-card-content>\n      </ion-card>\n    </a>\n        \n  </ion-content>\n\n  <ion-content class=\"desktop ion-padding\">\n\n    <ion-item>\n      <div style=\"width: 30%;\">\n        <a href=\"what-is-datascience\" class=\"link-underline\">\n          <ion-card >\n              <ion-card-header>\n                <ion-img [src]=\"datascience_img\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  What is Datascience?\n                </ion-card-title>\n                <ion-card-subtitle>\n                  27 Dec 2020\n                </ion-card-subtitle>\n              </ion-card-content>\n          </ion-card>\n        </a>\n      </div>\n      <div style=\"width: 30%;\">\n        <a href=\"why-i-run\" class=\"link-underline\">\n          <ion-card >\n            <ion-card-header>\n              <ion-img [src]=\"run_img\"></ion-img>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-card-title>\n                Why I run\n              </ion-card-title>\n              <ion-card-subtitle>\n                19 Oct 2020\n              </ion-card-subtitle>\n            </ion-card-content>\n          </ion-card>\n        </a>\n      </div>\n    </ion-item>\n\n  </ion-content>\n  \n</div>\n");

/***/ }),

/***/ "pZyM":
/*!*******************************************************!*\
  !*** ./src/app/resources/resources-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ResourcesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageRoutingModule", function() { return ResourcesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources.page */ "wuqY");




const routes = [
    {
        path: '',
        component: _resources_page__WEBPACK_IMPORTED_MODULE_3__["ResourcesPage"]
    },
    {
        path: 'why-i-run',
        loadChildren: () => __webpack_require__.e(/*! import() | blogs-why-i-run-why-i-run-module */ "blogs-why-i-run-why-i-run-module").then(__webpack_require__.bind(null, /*! ./blogs/why-i-run/why-i-run.module */ "JVEQ")).then(m => m.WhyIRunPageModule)
    }
];
let ResourcesPageRoutingModule = class ResourcesPageRoutingModule {
};
ResourcesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResourcesPageRoutingModule);



/***/ }),

/***/ "qebg":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.module.ts ***!
  \***********************************************/
/*! exports provided: ResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function() { return ResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-routing.module */ "pZyM");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources.page */ "wuqY");







let ResourcesPageModule = class ResourcesPageModule {
};
ResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourcesPageRoutingModule"]
        ],
        declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]]
    })
], ResourcesPageModule);



/***/ }),

/***/ "wuqY":
/*!*********************************************!*\
  !*** ./src/app/resources/resources.page.ts ***!
  \*********************************************/
/*! exports provided: ResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPage", function() { return ResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resources_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resources.page.html */ "kURh");
/* harmony import */ var _resources_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.page.scss */ "WWVa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let ResourcesPage = class ResourcesPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.run_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/blogs%2Fundraw_fitness_stats_sht6.png?alt=media&token=9b243d17-48c1-4646-969e-8b7b475cbb08";
        this.datascience_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/blogs%2Fundraw_Data_re_80ws.png?alt=media&token=00a5446d-d529-418d-be54-a7343034f668";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online is providing resources for transforming your career in data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Resources | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
ResourcesPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
ResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resources',
        template: _raw_loader_resources_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResourcesPage);



/***/ })

}]);
//# sourceMappingURL=resources-resources-module.js.map