(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'links',
        loadChildren: () => __webpack_require__.e(/*! import() | links-links-module */ "links-links-module").then(__webpack_require__.bind(null, /*! ./links/links.module */ "I4Au")).then(m => m.LinksPageModule)
    },
    {
        path: 'subscribeemail',
        loadChildren: () => __webpack_require__.e(/*! import() | subscribeemail-subscribeemail-module */ "subscribeemail-subscribeemail-module").then(__webpack_require__.bind(null, /*! ./subscribeemail/subscribeemail.module */ "5M7f")).then(m => m.SubscribeemailPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"mobile ion-padding\" >\n\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" >\n      <ion-fab-button >\n        <ion-icon name=\"layers-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-fab-button href=\"/feedback\"><ion-icon name=\"megaphone-outline\"></ion-icon></ion-fab-button>\n        <ion-fab-button href=\"/donate\"><ion-icon name=\"wallet-outline\" ></ion-icon></ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n\n    <ion-card>\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n          <ion-img [src]=\"mobile_cover_img_1\"></ion-img> \n        </ion-slide>\n        <ion-slide>\n          <ion-img [src]=\"mobile_cover_img_2\"></ion-img> \n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n    <ion-item-divider></ion-item-divider>\n\n    <div class=\"ion-padding\">\n        <h1 style=\"text-align: center;\">\n          Blogs\n        </h1>\n      \n      <ion-card-content style=\"text-align: center;\">\n\n        <a href=\"what-is-datascience\" class=\"mobile link-underline\">\n          <ion-card >\n              <ion-card-header>\n                <ion-img [src]=\"datascience_img\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  What is Datascience?\n                </ion-card-title>\n                <ion-card-subtitle>\n                  27 Dec 2020\n                </ion-card-subtitle>\n              </ion-card-content>\n          </ion-card>\n        </a>\n\n        <br>\n\n        <ion-button size=\"small\" fill=\"outline\" ion-button href=\"/blogs\" color=\"primary\">See More</ion-button>\n\n      </ion-card-content>\n\n    </div>\n    \n    <ion-item-divider></ion-item-divider>\n\n    <div class=\"ion-padding\">\n\n        <h1 style=\"text-align: center;\">\n          Products\n        </h1>\n      \n      <ion-card-content style=\"text-align: center;\">\n\n        <a href=\"nintyninedatascience\" class=\"link-underline\">\n          <ion-card >\n              <ion-card-header>\n                <ion-img [src]=\"ebookimg\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  Data Science in 99 Pages\n                </ion-card-title>\n                <ion-card-subtitle>\n                </ion-card-subtitle>\n              </ion-card-content>\n          </ion-card>\n        </a>\n\n        <br>\n\n        <ion-button size=\"small\" fill=\"outline\" ion-button href=\"/shop\" color=\"primary\">See More</ion-button>\n\n      </ion-card-content>\n\n    </div>\n\n    <ion-item-divider></ion-item-divider>\n\n    <div class=\"ion-padding\">\n\n        <h1 style=\"text-align: center;\">\n          Roadmap for Data Scientist\n        </h1>\n      \n      <ion-card-content style=\"text-align: center;\">\n\n        <a href=\"roadmap\" class=\"link-underline\">\n          <ion-card >\n              <ion-card-header>\n                <ion-img [src]=\"scientist\"></ion-img>\n              </ion-card-header>\n          </ion-card>\n        </a>\n\n      </ion-card-content>\n\n    </div>\n\n  </ion-content>\n  \n  <ion-content class=\"desktop ion-padding\">\n\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" >\n      <ion-fab-button >\n        <ion-icon name=\"layers-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-fab-button href=\"/feedback\"><ion-icon name=\"megaphone-outline\"></ion-icon></ion-fab-button>\n        <ion-fab-button href=\"/donate\"><ion-icon name=\"wallet-outline\" ></ion-icon></ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n\n    <ion-card>\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n          <ion-img [src]=\"cover_img_1\"></ion-img> \n        </ion-slide>\n        <ion-slide>\n          <ion-img [src]=\"cover_img_2\"></ion-img> \n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n    <ion-item-divider></ion-item-divider>\n\n    <div class=\"ion-padding\">\n\n      <div style=\"text-align: center;\">\n        <h1 style=\"text-align: center;\">\n            Blogs\n        </h1>\n        \n        <ion-card-content style=\"width:30%; text-align: center;\">\n\n          <a href=\"what-is-datascience\" class=\"link-underline\">\n            <ion-card >\n                <ion-card-header>\n                  <ion-img [src]=\"datascience_img\"></ion-img>\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-card-title>\n                    What is Datascience?\n                  </ion-card-title>\n                  <ion-card-subtitle>\n                    27 Dec 2020\n                  </ion-card-subtitle>\n                </ion-card-content>\n            </ion-card>\n          </a>\n          \n        </ion-card-content>\n\n        <div>\n          <ion-button size=\"small\" fill=\"outline\" ion-button href=\"/blogs\" color=\"primary\">See More</ion-button>\n        </div>\n\n      </div>\n\n    </div>\n    \n    <ion-item-divider></ion-item-divider>\n\n    <div class=\"ion-padding\">\n\n      <div style=\"text-align: center;\">\n        \n        <h1 style=\"text-align: center;\">\n            Products\n        </h1>\n        \n        <ion-card-content style=\"width:30%; text-align: center;\">\n\n          <a href=\"nintyninedatascience\" class=\"link-underline\">\n            <ion-card >\n                <ion-card-header>\n                  <ion-img [src]=\"ebookimg\"></ion-img>\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-card-title>\n                    Data Science in 99 Pages\n                  </ion-card-title>\n                  <ion-card-subtitle>\n                  </ion-card-subtitle>\n                </ion-card-content>\n            </ion-card>\n          </a>\n\n        </ion-card-content>\n\n        <ion-button size=\"small\" fill=\"outline\" ion-button href=\"/shop\" color=\"primary\">See More</ion-button>\n\n      </div>\n\n    </div>\n\n    <ion-item-divider></ion-item-divider>\n\n    <div class=\"ion-padding\" style=\"text-align: center;\">\n\n      <h1 style=\"text-align: center;\">\n          Roadmap for Data Scientist\n      </h1>\n      \n      <ion-card-content style=\"text-align: center;\">\n\n        <a href=\"roadmap\" class=\"link-underline\">\n          <ion-card >\n              <ion-card-header>\n                <ion-img [src]=\"scientist\"></ion-img>\n              </ion-card-header>\n          </ion-card>\n        </a>\n\n      </ion-card-content>\n\n    </div>\n\n  </ion-content>\n\n  <ion-footer class=\"ion-padding\" >\n      <ion-button expand=\"block\" ion-button href=\"/subscribeemail\" color=\"primary\">Subscribe Newsletter</ion-button>\n  </ion-footer>\n\n</div>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let HomePage = class HomePage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
        };
        this.mobile_cover_img_1 = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/cover%20images%2F1.png?alt=media&token=630737f0-757f-4001-9a91-35f9b59e1fa9";
        this.mobile_cover_img_2 = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/cover%20images%2F2.png?alt=media&token=40db659e-418d-4c74-a54b-d3e093027fd8";
        this.cover_img_1 = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/cover%20images%2F1(1).png?alt=media&token=2f5521f5-f352-41c0-96e9-c0fa7e3babaf";
        this.cover_img_2 = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/cover%20images%2F2(1).png?alt=media&token=29ea00e0-c636-4f30-a90a-eb35cb1d0625";
        this.profileweb = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2FRohit%20Bhandari%20Online%20Homepage%20Web%20(3).png?alt=media&token=58641212-a40c-4fd1-b10b-7830a23b02f6";
        this.profilemob = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2FWebp.net-compress-image.jpg?alt=media&token=499f3559-ea05-492f-9a09-5316e1be94f3";
        this.titanic_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/Project%20Images%2FWebsite%20Thumbnail.png?alt=media&token=0e5c7029-c342-4711-8bf5-bd449829f748";
        this.houseprice_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/Project%20Images%2FWebsite%20Thumbnail%20(1).png?alt=media&token=d7b65a46-79d6-442b-8903-6c20de8cfe55";
        this.mzquote = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fmzquote.jpg?alt=media&token=98a4d0bb-b147-4e76-bcff-70d2ef2a60a0";
        this.run_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/blogs%2Fundraw_fitness_stats_sht6.png?alt=media&token=9b243d17-48c1-4646-969e-8b7b475cbb08";
        this.datascience_img = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/blogs%2Fundraw_Data_re_80ws.png?alt=media&token=00a5446d-d529-418d-be54-a7343034f668";
        this.ebookimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/ebooks%2FEbook.png?alt=media&token=0d473e7f-303d-460b-a4a7-98f120966890";
        this.scientist = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_cohort_analysis_stny.png?alt=media&token=ecdb2bfd-9db1-4fa2-b700-b93761861b76";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online will transform your career. Rohit Bhandari Online provides resources for data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Home | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map