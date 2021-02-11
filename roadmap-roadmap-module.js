(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roadmap-roadmap-module"],{

/***/ "0VX5":
/*!**************************************************!*\
  !*** ./src/app/services/roadmap/roadmap.page.ts ***!
  \**************************************************/
/*! exports provided: RoadmapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapPage", function() { return RoadmapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roadmap_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roadmap.page.html */ "9KI0");
/* harmony import */ var _roadmap_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadmap.page.scss */ "3XDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let RoadmapPage = class RoadmapPage {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
        this.mathematics = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_mathematics_4otb.png?alt=media&token=542df78e-b348-4e06-8cfa-622beca2e43b";
        this.programming = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_programming_2svr.png?alt=media&token=0d693f13-55d1-473d-9ebb-66fb66fc6f66";
        this.statistics = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_Statistics_re_kox4.png?alt=media&token=a98bb6bf-e2b1-449b-8cda-6de7d6fe06c3";
        this.datawrangling = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_data_processing_yrrv.png?alt=media&token=6125495c-9d1c-4522-9570-5ae16e058734";
        this.datavisualization = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_data_trends_b0wg.png?alt=media&token=f7c64ac5-a6a3-4095-ab5e-7c11c7bd3bbe";
        this.machinelearning = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_robotics_kep0.png?alt=media&token=8cafd4b6-14bd-4e81-8dc4-48b9e2310582";
        this.deeplearning = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_developer_activity_bv83.png?alt=media&token=65cd1a5d-a6cc-4e08-9eee-243f6b2f0720";
        this.naturallanguage = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_Work_chat_re_qes4.png?alt=media&token=87545bb8-d00c-43c3-99db-1bb19aea8e9d";
        this.bigdata = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_Surveillance_re_8tkl.png?alt=media&token=91bb4929-4dc9-4d51-9cf8-d91e48eec984";
        this.project = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_maker_launch_crhe.png?alt=media&token=cdeb40cc-42be-47a3-a8f6-8eb196a9ecc3";
        this.versioncontrol = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_version_control_9bpv.png?alt=media&token=5ad85f02-9a23-4918-b856-ce2e8aac00d3";
        this.deployment = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_update_uxn2.png?alt=media&token=2e125324-da81-4ed4-98f2-ac334d42da82";
        this.security = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_secure_server_s9u8.png?alt=media&token=991cc769-1e2f-4f55-8316-5048cfcf4b1f";
        this.competition = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_drone_race_0sim.png?alt=media&token=e67b802c-d687-4bf7-9c84-243021fc1d70";
        this.collaboration = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_real_time_collaboration_c62i.png?alt=media&token=c8da7bbb-70b1-49c6-b8f9-2982e6f25a81";
        this.interview = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_interview_rmcf.png?alt=media&token=9f35e0a6-4c02-44bc-b71e-787378ec4fc0";
        this.career = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_career_progress_ivdb.png?alt=media&token=75febc3b-6081-4171-a67f-e7a5b7490057";
        this.community = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_community_8nwl.png?alt=media&token=a3c7fc80-96b3-48a1-b6b3-495ce9dc3ea9";
        this.scientist = "https://firebasestorage.googleapis.com/v0/b/rohitbhandarionline.appspot.com/o/roadmap%2Fundraw_cohort_analysis_stny.png?alt=media&token=ecdb2bfd-9db1-4fa2-b700-b93761861b76";
        this.meta.updateTag({ name: 'description', content: "Rohit Bhandari Online provide roadmap for starting your career in data science, machine learning & artificial intelligence" });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.title.setTitle("Roadmap | Rohit Bhandari Online");
    }
    ngOnInit() {
    }
};
RoadmapPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
RoadmapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roadmap',
        template: _raw_loader_roadmap_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roadmap_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoadmapPage);



/***/ }),

/***/ "3XDT":
/*!****************************************************!*\
  !*** ./src/app/services/roadmap/roadmap.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2FkbWFwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "9KI0":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/roadmap/roadmap.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Roadmap</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"mathematics\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Mathematics</b></ion-item>\n        <ion-item>\n          Algebra\n        </ion-item>\n        <ion-item>\n          Calculus\n        </ion-item>\n        <ion-item>\n          Optimisation\n        </ion-item>\n        <ion-item>\n          Functions\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Programming</b></ion-item>\n        <ion-item>\n          Syntax\n        </ion-item>\n        <ion-item>\n          Data Structures\n        </ion-item>\n        <ion-item>\n          Control Structures\n        </ion-item>\n        <ion-item>\n          OOPS\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"programming\"></ion-img>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"statistics\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Statistics</b></ion-item>\n        <ion-item>\n          Description\n        </ion-item>\n        <ion-item>\n          Inferential\n        </ion-item>\n        <ion-item>\n          Differential\n        </ion-item>\n        <ion-item>\n          Associative\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Data Wrangling</b></ion-item>\n        <ion-item>\n          Data Collection\n        </ion-item>\n        <ion-item>\n          Cleaning\n        </ion-item>\n        <ion-item>\n          Exploration\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"datawrangling\"></ion-img>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"datavisualization\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Data Visualization</b></ion-item>\n        <ion-item>\n          Visualization Techniques\n        </ion-item>\n        <ion-item>\n          Tableau\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Machine Learning</b></ion-item>\n        <ion-item>\n          Supervised Learning\n        </ion-item>\n        <ion-item>\n          Unsupervised Learning\n        </ion-item>\n        <ion-item>\n          Machine Learning Algorithms\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"machinelearning\"></ion-img>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"deeplearning\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Deep Learning\n          </b>\n        </ion-item>\n        <ion-item>\n          Neural Networks\n        </ion-item>\n        <ion-item>\n          CNN\n        </ion-item>\n        <ion-item>\n          RNN\n        </ion-item>\n      </div>\n    </ion-item>\n    \n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Natural Language Processing\n          </b>\n        </ion-item>\n        <ion-item>\n          Text Classification\n        </ion-item>\n        <ion-item>\n          Word Vectors\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"naturallanguage\"></ion-img>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"bigdata\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Big Data\n          </b>\n        </ion-item>\n        <ion-item>\n          Hadoop Ecosystem\n        </ion-item>\n        <ion-item>\n          Apache Spark\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>Projects</b></ion-item>\n        <ion-item>\n          Data Cleaning Projects\n        </ion-item>\n        <ion-item>\n          Finance Projects\n        </ion-item>\n        <ion-item>\n          NLP Projects\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"project\"></ion-img>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"versioncontrol\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Version Control\n          </b>\n        </ion-item>\n        <ion-item>\n          Git\n        </ion-item>\n        <ion-item>\n          Github\n        </ion-item>\n        <ion-item>\n          Bitbucket\n        </ion-item>\n      </div>\n    </ion-item>\n    \n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Deployment\n          </b>\n        </ion-item>\n        <ion-item>\n          Flask\n        </ion-item>\n        <ion-item>\n          Django\n        </ion-item>\n        <ion-item>\n          GCP\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"deployment\"></ion-img>\n    </ion-item>\n    \n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"security\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Security\n          </b>\n        </ion-item>\n        <ion-item>\n          Obfuscation\n        </ion-item>\n        <ion-item>\n          Authentications\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            DS Competition\n          </b>\n        </ion-item>\n        <ion-item>\n          Hackerrank\n        </ion-item>\n        <ion-item>\n          Kaggle\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"competition\"></ion-img>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"collaboration\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Meetups and collaborations\n          </b>\n        </ion-item>\n        <ion-item>\n          Meet Fellow Data Scientists\n        </ion-item>\n        <ion-item>\n          Have a pet project\n        </ion-item>\n        <ion-item>\n          Develop your intuitions\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Interview Preparation\n          </b>\n        </ion-item>\n        <ion-item>\n          Resume creation\n        </ion-item>\n        <ion-item>\n          Question Preparation\n        </ion-item>\n        <ion-item>\n          LinkedIn Profile Setup\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"interview\"></ion-img>\n    </ion-item>\n    \n    <ion-item class=\"ion-padding\" >\n      <ion-img class=\"vertical50\" [src]=\"career\"></ion-img>\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Start Career\n          </b>\n        </ion-item>\n        <ion-item>\n          Internship\n        </ion-item>\n        <ion-item>\n          Bootcamp\n        </ion-item>\n        <ion-item>\n          Job\n        </ion-item>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text vertical50\">\n        <ion-item><b>\n            Community Work\n          </b>\n        </ion-item>\n        <ion-item>\n          Create a community\n        </ion-item>\n        <ion-item>\n          Help enthusiasts to onboard\n        </ion-item>\n        <ion-item>\n          Contribute to the forums\n        </ion-item>\n      </div>\n      <ion-img class=\"vertical50\" [src]=\"community\"></ion-img>\n    </ion-item>\n    \n    <ion-item class=\"ion-padding\" >\n      <div class=\"home-text\" >\n        <ion-item ><b>\n            Congratulations you are a Data Scientist\n          </b>\n        </ion-item>\n        <ion-item>\n          <ion-img [src]=\"scientist\"></ion-img>\n        </ion-item>\n      </div>\n    </ion-item>\n    \n    <div class=\"ion-padding center\" >\n      Start your first step\n      <ion-button expand=\"block\" ion-button href=\"/nintyninedatascience\" color=\"primary\">Get E-book</ion-button>\n    </div>\n  </ion-content>\n  \n</div>\n\n");

/***/ }),

/***/ "J3mA":
/*!************************************************************!*\
  !*** ./src/app/services/roadmap/roadmap-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RoadmapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapPageRoutingModule", function() { return RoadmapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _roadmap_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roadmap.page */ "0VX5");




const routes = [
    {
        path: '',
        component: _roadmap_page__WEBPACK_IMPORTED_MODULE_3__["RoadmapPage"]
    }
];
let RoadmapPageRoutingModule = class RoadmapPageRoutingModule {
};
RoadmapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoadmapPageRoutingModule);



/***/ }),

/***/ "aWs2":
/*!****************************************************!*\
  !*** ./src/app/services/roadmap/roadmap.module.ts ***!
  \****************************************************/
/*! exports provided: RoadmapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapPageModule", function() { return RoadmapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _roadmap_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roadmap-routing.module */ "J3mA");
/* harmony import */ var _roadmap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roadmap.page */ "0VX5");







let RoadmapPageModule = class RoadmapPageModule {
};
RoadmapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _roadmap_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoadmapPageRoutingModule"]
        ],
        declarations: [_roadmap_page__WEBPACK_IMPORTED_MODULE_6__["RoadmapPage"]]
    })
], RoadmapPageModule);



/***/ })

}]);
//# sourceMappingURL=roadmap-roadmap-module.js.map