(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "+wPt":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "kL6T");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "+wPt");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "kL6T");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "kL6T":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.page.html */ "mhsJ");
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.page.scss */ "vbXv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let AboutPage = class AboutPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.profileweb = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2FRohit%20Bhandari%20Online%20Homepage%20Web%20(3).png?alt=media&token=58641212-a40c-4fd1-b10b-7830a23b02f6";
        this.profilemob = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2FWebp.net-compress-image.jpg?alt=media&token=499f3559-ea05-492f-9a09-5316e1be94f3";
        this.professionalimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_certificate_343v.png?alt=media&token=1fb93e5a-31cf-4f3f-8339-953f7eaf92f2";
        this.youtubeimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_youtube_tutorial_2gn3.svg?alt=media&token=28abdce3-7f4f-4737-9838-a8dbbf519a55";
        this.workimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_Work_time_re_hdyv.svg?alt=media&token=62ecc1bd-2494-43b3-9ecf-c6a3ff616521";
        this.gameimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_video_game_night_8h8m.png?alt=media&token=69fa216c-8048-4bb8-9cf3-c962df508670";
        this.bookimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_reading_list_4boi.svg?alt=media&token=0226806a-0657-41d9-9b99-80e735dfe888";
        this.tvimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_video_streaming_yyld.svg?alt=media&token=4fd338e8-29da-42d2-88b3-764538f7cf41";
        this.movieimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_movie_night_fldd.svg?alt=media&token=900c1560-bdd2-430c-8a7c-2eb96273c4f1";
        this.musicimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_compose_music_ovo2.png?alt=media&token=cce3e0cb-daef-4ea7-845d-9ece24dc635e";
        this.aboutimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_about_me_wa29.svg?alt=media&token=b0b6cd33-60c0-40c8-8a10-af53cf7a11a6";
        this.singleimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_night_calls_5jh7.svg?alt=media&token=5dbb0943-a3bd-4285-bf49-be9d06fb60b3";
        this.contactimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_contact_us_15o2.svg?alt=media&token=152cb8fd-b755-4e3a-ba37-3eb527e01998";
        this.placeimg = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/images%2Fundraw_best_place_r685.svg?alt=media&token=80b3d876-da9a-4aab-9165-2b29055cb884";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online | I am professionally a Data Scientist | love Calisthenic | read Non Fiction Books | aprreciable Voice on Guitar | play Fast Paced Games" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("About | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutPage);



/***/ }),

/***/ "mhsJ":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>About</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content [fullscreen]=\"true\">\n  \n      <!-- <ion-item>\n        <ion-img class=\"vertical50\" [src]=\"professionalimg\"></ion-img>\n        <div class=\"home-buttons\">\n  \n          <ion-button fill=\"outline\" size=\"block\" href='https://rohitonweb.tech' target=\"_blank\">Rohit On Web</ion-button>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div class=\"home-buttons\">\n  \n  \n          <ion-button fill=\"outline\" size=\"block\"\n            href='https://www.youtube.com/channel/UCJoZTPDHDNcyqq3zVYUnz3Q?sub_confirmation=1' target=\"_blank\">Rohit On\n            Youtube\n          </ion-button>\n        </div>\n        <ion-img class=\"vertical50\" [src]=\"youtubeimg\"></ion-img>\n      </ion-item> -->\n      \n      <ion-item class=\"ion-padding\" >\n        <ion-img class=\"vertical50\" [src]=\"workimg\"></ion-img>\n        <div class=\"vertical50\">\n          <ion-item><b>Work and Education</b></ion-item>\n          <ion-item>\n            Works at Analytics Domain\n          </ion-item>\n          <ion-item>\n            Graduated High School from Delhi Public School, Vijaipur\n          </ion-item>\n          <ion-item>\n            Graduated in Computer Science Engineering from SGSITS, Indore\n          </ion-item>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <div class=\"vertical50\">\n          <ion-item><b>Places Lived</b></ion-item>\n          <ion-item>\n            Lives in Pune, Maharashtra\n          </ion-item>\n          <ion-item>\n            Hometown in NFL Township, Guna, MP\n          </ion-item>\n        </div>\n        <ion-img class=\"vertical50\" [src]=\"placeimg\"></ion-img>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <ion-img class=\"vertical50\" [src]=\"contactimg\"></ion-img>\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Contact</b></ion-item>\n          <ion-item>\n            Mobile - 8989059838\n          </ion-item>\n          <ion-item>\n            Email - rohitrbzn@gmail.com\n          </ion-item>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Relationship Status</b></ion-item>\n          <ion-item>\n            Single - Will be same for some years\n          </ion-item>\n        </div>\n        <ion-img class=\"vertical50\" [src]=\"singleimg\"></ion-img>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <ion-img class=\"vertical50\" [src]=\"aboutimg\"></ion-img>\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Details About me</b></ion-item>\n          <ion-item>\n            I am professionally a Data Scientist 🥽 who loves Calesthenics 🤸. I spend my most of the time reading Non\n            Fiction Books 📖. I have a aprreciable Voice on Guitar 🎸. I like playing Fast Paced Games 🎮.\n          </ion-item>\n          <ion-item>\n            Birthday - 19 May 1996\n          </ion-item>\n          <ion-item>\n            Favourite Quote - Fool me once, shame on you. Fool me twice, shame on me.\n          </ion-item>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Music</b></ion-item>\n          <ion-item>\n            One Direction\n          </ion-item>\n          <ion-item>\n            Cold Play\n          </ion-item>\n          <ion-item>\n            Selena Gomez\n          </ion-item>\n        </div>\n        <ion-img class=\"vertical50\" [src]=\"musicimg\"></ion-img>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <ion-img class=\"vertical50\" [src]=\"movieimg\"></ion-img>\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Movies</b></ion-item>\n          <ion-item>\n            Fast and Furious\n          </ion-item>\n          <ion-item>\n            The amazing spider man 2\n          </ion-item>\n          <ion-item>\n            Son of Satyamurthy\n          </ion-item>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <div class=\"vertical50\">\n          <ion-item><b>\n              TV Programmes\n            </b>\n          </ion-item>\n          <ion-item>\n            The Flash\n          </ion-item>\n          <ion-item>\n            Arrow\n          </ion-item>\n          <ion-item>\n            Legends of Tomorrow\n          </ion-item>\n          <ion-item>\n            Star Girl\n          </ion-item>\n          <ion-item>\n            Batwoman\n          </ion-item>\n        </div>\n        <ion-img class=\"vertical50\" [src]=\"tvimg\"></ion-img>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <ion-img class=\"vertical50\" [src]=\"bookimg\"></ion-img>\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Books\n            </b>\n          </ion-item>\n          <ion-item>\n            Ikigai\n          </ion-item>\n          <ion-item>\n            4 hour workweek\n          </ion-item>\n          <ion-item>\n            Subtle art of not giving a *\n          </ion-item>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"ion-padding\" >\n        <div class=\"vertical50\">\n          <ion-item><b>\n              Games\n            </b>\n          </ion-item>\n          <ion-item>\n            Robocraft\n          </ion-item>\n          <ion-item>\n            Xonotic\n          </ion-item>\n        </div>\n        <ion-img class=\"vertical50\" [src]=\"gameimg\"></ion-img>\n      </ion-item>\n  \n      <ion-card>\n        <ion-item style=\"text-align: center;\">\n          <ion-card-header style=\"width: 50%;\">\n            <a href=\"/privacypolicy\"  class=\"link-underline\">\n              Privacy Policy\n            </a>\n          </ion-card-header>\n          <ion-card-header style=\"width: 50%;\">\n            <a href=\"/termsandconditions\"  class=\"link-underline\">\n              Terms and Conditions\n            </a>\n          </ion-card-header>\n        </ion-item>\n      </ion-card>\n  \n    </ion-content>\n  \n  </div>\n");

/***/ }),

/***/ "vbXv":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map