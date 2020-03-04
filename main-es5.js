(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularDatepicker2SrcLibCalendarAngularDatepicker2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"calendarWrap\">\n\n    <div class=\"headerCalendar\">\n        <div *ngIf=\"suggest&&suggest.length>0\" style=\"    padding:8px 8px 0 8px;\n        display: block;\n        float: left;\n        width: 100%;\n        box-sizing: border-box;\n        \">\n\n\n            <div *ngFor=\"let item of suggest ; let i = index\" class=\"suggest\" (click)=\"clickSuggest(item)\">\n                {{item.title}}</div>\n\n        </div>\n\n    </div>\n\n    <div class=\"dateSelector\">\n        <div (click)=\"goPrev()\" class=\"nextPrevBtn\" style=\"left:0;\">{{'<'}}</div>\n        <div class=\"wrapMonths\" [ngStyle]=\"{width: width+'px'}\">\n            <div class=\"months\" *ngIf=\"getViewSelectorMode()==='days'\">\n                <app-month-view *ngFor=\"let date of  getCalendar()\" #column [date]=\"date\" [vertical]=\"vertical\">\n                </app-month-view>\n            </div>\n\n            <div class=\"\" *ngIf=\"getViewSelectorMode()==='months'\" style=\"width: 100%; display:flex; flex:1;\">\n                <app-month-select *ngFor=\"let date of  getCalendar()\" #column [date]=\"date\">\n                </app-month-select>\n            </div>\n        </div>\n        <div (click)=\"goNext()\" class=\"nextPrevBtn\" style=\"right:0;\">{{\">\"}}</div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/day-view/day-view.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/day-view/day-view.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularDatepicker2SrcLibDayViewDayViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dayWrap\">\n    <span *ngIf=\"thisMonth&&!day.template\" (click)=\"onClick()\" class=\"day\" [ngClass]=\"{\n        isDisabled : day.isDisabled,\n        isSelected: day.isSelected,\n        isWeekEnd: day.isWeekEnd,\n        isInPeriod: day.isInPeriod\n    }\">\n        {{day.date | date: \"d\"}}\n    </span>\n    <ng-template #tpl></ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/month-select/month-select.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/month-select/month-select.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularDatepicker2SrcLibMonthSelectMonthSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #wrap style=\"display: flex;flex-direction:column; flex:1; width: 100%;\"\n    class=\"monthWrap monthOne {{animationStep}}\">\n    <div class=\"monthHeader\">\n        {{date | date: \"yyyy\"}}\n    </div>\n    <div style=\" display: flex;flex-direction:row; flex:1; flex-wrap: wrap;\">\n\n        <ng-container *ngFor=\"let month of months; let i = index\">\n            <div class=\"monthItem\" (click)=\"setMonth(month)\">\n                {{ month | date:'LLL' }}</div>\n            <div *ngIf=\" (i+1)%3===0&&i!=0&&i!=11\" style=\"width:100%; height:1px; \"></div>\n        </ng-container>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/month-view/month-view.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/month-view/month-view.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularDatepicker2SrcLibMonthViewMonthViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #wrap class=\"monthWrap monthOne {{animationStep}}\" style=\"display:block; float:left; width: 100%; \">\n    <div class=\"monthHeader\" (click)=\"showYears()\">\n        {{date | date: \"LLLL yyyy\"}}\n    </div>\n    <div class=\"weekWrap\" [ngStyle]=\"{flexDirection: (vertical)?'row':'column'}\">\n\n        <div [ngStyle]=\"{flexDirection: ((vertical)?'column':'row')}\" style=\"display: flex;\">\n            <div *ngFor=\"let d of weekDays\" class=\"dayWeekTitle\">{{ d | date: 'EEEEEE' }}</div>\n        </div>\n\n        <app-week-view *ngFor=\"let weekStartDate of weeks\" [date]=\"weekStartDate\" [firstMonthDate]=\"date\"\n            [ngStyle]=\"{flexDirection: (vertical)?'column':'row'}\">\n        </app-week-view>\n    </div>\n    <!-- <div *ngFor=\"let date of weeks\" >\n        \n    </div> -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/week-view/week-view.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/week-view/week-view.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularDatepicker2SrcLibWeekViewWeekViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let day of days\" style=\"display: flex;\nflex: 1;\">\n    <app-day-view [date]=\"day\" [thisMonth]=\"day.getMonth()===firstMonthDate.getMonth()\"></app-day-view>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/year-select/year-select.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/year-select/year-select.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularDatepicker2SrcLibYearSelectYearSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>year-select works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width:100%; display:block; float:left;\">\n\n    <div style=\"width: 100%;\n    float: left;\n    background: #c3c3c3;\n    padding: 32px;\n    box-sizing: border-box;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\">\n        <div style=\" display:block; float:left;\">\n            <angular-datepicker2 [shownDate]=\"_shownDateVal\" [days]=\"days\" [(selectedDates)]=\"selectedDates\"\n                [selectMode]=\"selectMode\" [weekends]=\"[0,1]\" [suggest]=\"suggest\" [weekStart]=\"1\" [viewMode]=\"viewMode\"\n                [vertical]=\"vertical\" (onDayClick)=\"onDayClick($event)\">\n            </angular-datepicker2>\n        </div>\n\n\n    </div>\n\n    <div style=\" width:50%; display: block; float: left; padding: 16px; box-sizing: border-box\">\n        <h3>Props</h3>\n        <table border=1 style=\"width:100%; background: #fff; border-collapse: collapse;\">\n            <tr>\n                <td>viewMode</td>\n                <td>ViewMode | int</td>\n                <td>Template for render months. If quater start month woul be January, April or August. If 3 - end by\n                    shownDate else last date in selectedDates</td>\n                <td>\n                    <select (change)=\"_viewMode($event)\" value=\"quarter\">\n                        <option *ngFor=\"let i of _viewModeVal\" [value]=\"i\">\n                            {{i}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n\n            <tr>\n                <td>vertical</td>\n                <td>boolean</td>\n                <td>Alignment of days in a week. Default horizontal.</td>\n                <td>\n                    <select (change)=\"_vertical($event)\" value=\"quarter\">\n                        <option *ngFor=\"let i of _verticalVal\" [value]=\"i\">\n                            {{i}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n\n            <tr>\n                <td>shownDate</td>\n                <td>Date</td>\n                <td>Date whould be render for default calendar. Calendar ends by month of this date</td>\n                <td>\n                    <angular-datepicker2 [shownDate]=\"_shownDateVal\" selectMode=\"single\" [weekends]=\"[0,1]\"\n                        [(selectedDates)]=\"_shownDateVal\" [weekStart]=\"1\" [viewMode]=\"1\" [vertical]=\"vertical\">\n                    </angular-datepicker2>\n                </td>\n            </tr>\n\n            <tr>\n                <td>selectMode</td>\n                <td>SelectMode</td>\n                <td>Single, multiple or period</td>\n                <td>\n                    <select (change)=\"_selectMode($event)\" value=\"period\">\n                        <option *ngFor=\"let i of _selectModeVal\" [value]=\"i\">\n                            {{i}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n\n            <tr>\n                <td>selectedDates</td>\n                <td>[Date]</td>\n                <td>Array of selected date. Support [(selectedDates)]</td>\n                <td>\n                    <p *ngFor=\"let date of selectedDates\">{{date | date:'yyyy.MM.dd'}}</p>\n                </td>\n            </tr>\n\n\n\n\n        </table>\n\n\n\n\n    </div>\n\n\n    <div style=\" width:50%; display: block; float: left; padding: 16px;  box-sizing: border-box\">\n        <h3>Events</h3>\n        <table border=1 style=\"width:100%; background: #fff; border-collapse: collapse;\">\n\n            <tr>\n                <td>onDayClick</td>\n                <td>Event</td>\n                <td>Callback event when click on day. Its returns a Day object before change self state by click</td>\n                <td>\n                    <div *ngFor=\"let item of _stackOnDayClick\">\n                        <pre>{{item | json}}</pre>\n                    </div>\n                </td>\n            </tr>\n\n\n\n        </table>\n\n\n\n\n    </div>\n\n\n</div>\n\n\n<!-- \n<datepicker2 [shownDate]=\"date\" [selectedDates]=\"selectedDates\" [selectMode]=\"'multiple'\" [vertical]=\"false\"\n    [viewMode]=\"3\"></datepicker2>\n<datepicker2 [shownDate]=\"date\" [selectedDates]=\"selectedDates\" [selectMode]=\"'single'\">\n</datepicker2>\n<datepicker2 [viewMode]=\"1\" [selectedDates]=\"selectedDates\" [vertical]=\"false\" [shownDate]=\"date\"></datepicker2>\n<datepicker2 [viewMode]=\"1\" [selectedDates]=\"selectedDates\" [vertical]=\"true\" [shownDate]=\"date\"></datepicker2>\n<datepicker2 [viewMode]=\"4\" [selectedDates]=\"selectedDates\" [vertical]=\"true\" [shownDate]=\"date\"></datepicker2> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test-day/test-day.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-day/test-day.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestDayTestDayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (click)=\"click($event)\" title=\"Custom day\" class=\"day\" style=\"font-size: 13px;\npadding: 6px;\nposition: relative;\nbackground: linear-gradient(45deg, #000000, #130644bd);\nbox-shadow: 1px 1px 4px -2px #000;\nz-index: 100000;\nborder-radius: 2px;\ncolor: #fff;\">{{title}}\n\n    <div style=\" position: absolute;\n    bottom: 0;\n    left: 0; width:100%;\">\n        <div style=\"width: 25%;\n        height: 3px;\n        background: #c1c1c1;\n        display: block;\n        float: left;\n        \n       \"></div>\n        <div style=\"width: 25%;\n        height: 3px;\n        background: #949494;\n        display: block;\n        float: left;\n      \"></div>\n\n        <div style=\"width: 25%;\nheight: 3px;\nbackground: #636363;\ndisplay: block;\nfloat: left;\n\"></div>\n        <div style=\"width: 25%;\nheight: 3px;\nbackground: #333;\ndisplay: block;\nfloat: left;\n\"></div>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts":
  /*!***************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/_service/calendar.service.ts ***!
    \***************************************************************************/

  /*! exports provided: CalendarService */

  /***/
  function projectsAngularDatepicker2SrcLib_serviceCalendarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarService", function () {
      return CalendarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../interfaces */
    "./projects/angular-datepicker2/src/lib/interfaces.ts");

    Date.prototype.adjustDate = function (num = 0) {
      let date = new Date(this);
      date.setDate(date.getDate() + num);
      return date;
    };
    /** Adjust & setDate = 1 */


    Date.prototype.adjustMonth = function (num = 0) {
      this.setDate(1);
      this.setMonth(this.getMonth() + num);
      return this;
    };
    /** Adjust & setDate = 1 */


    Date.prototype.adjustYear = function (num = 0) {
      this.setDate(1);
      this.setMonth(0);
      this.setYear(this.getFullYear() + num);
      return this;
    };

    Date.prototype.getDayWithStart = function (start) {
      const date = new Date(this.getTime());
      let day = date.getDay();
      day = day - start;

      if (day < 0) {
        day = 7 + day;
      }

      return day;
    };

    Date.prototype.getFirstDateDay = function (start) {
      const date = new Date(this.getTime());
      date.setDate(1);
      return date.getDayWithStart(start);
    };

    Date.prototype.getYmd = function () {
      return this.getFullYear().toString() + this.getMonth().toString() + this.getDate().toString();
    };

    let CalendarService = class CalendarService {
      constructor() {
        this.selectedDates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.days = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.animationStep = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("stop");
        this.recountWidth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        /** Needs for onClickDay detect change */

        this.clickDayKey = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.updateDate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date());
      }

      setSelectedDates(selectedDates) {
        this.selectedDates.next(selectedDates);
      }

      setDays(days) {
        this.days.next(days);
      }

      setShownDate(date) {
        this.shownDate = date;
      }

      addSelected(date) {
        let selectedDates = this.selectedDates.value;
        selectedDates.push(date);
        this.selectedDates.next(selectedDates);
      }

      getCountMonths() {
        let viewMode = this.viewMode;

        if (typeof viewMode === "number") {
          return viewMode;
        } else {
          if (viewMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Quarter) {
            return 3;
          } else if (viewMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Semester) {
            return 6;
          }
        }

        return 1;
      }

      getLastDate(date) {
        //console.log(date, 'date getlasr')
        let viewMode = this.viewMode;
        let lastDate = this.shownDate ? new Date(this.shownDate) : this.selectedDates.value ? new Date(this.selectedDates[this.selectedDates.value.length - 1]) : new Date();
        lastDate = date ? new Date(date) : lastDate; //if (typeof viewMode === "ViewMode") {

        if (viewMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Quarter) {
          if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 2) {
            lastDate.setMonth(2);
          } else if (lastDate.getMonth() >= 3 && lastDate.getMonth() <= 5) {
            lastDate.setMonth(5);
          } else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 8) {
            lastDate.setMonth(8);
          } else if (lastDate.getMonth() >= 9 && lastDate.getMonth() <= 11) {
            lastDate.setMonth(11);
          }
        } else if (viewMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Semester) {
          if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 5) {
            lastDate.setMonth(5);
          } else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 11) {
            lastDate.setMonth(11);
          }
        } //}


        return lastDate;
      }

      getShownYears(lastDateShown) {
        let countMonths = 0;
        const months = [];
        countMonths = this.getCountMonths();
        this.countMonths = countMonths;

        for (let i = countMonths - 1; i >= 0; i--) {
          months.push(new Date(lastDateShown).adjustYear(-i));
        }

        this.calendar = months;
        this.viewSelectorMode = "months";
      }

      getShownMonths(date) {
        let countMonths = 0;
        const months = [];
        let lastDate;
        lastDate = this.getLastDate(date);
        countMonths = this.getCountMonths();
        this.countMonths = countMonths;

        for (let i = countMonths - 1; i >= 0; i--) {
          months.push(new Date(lastDate).adjustMonth(-i));
        }

        this.calendar = months;
        this.viewSelectorMode = "days";
      }

      goPrev(firstDate) {
        let prevDate = new Date(firstDate);

        if (this.viewSelectorMode === "days") {
          prevDate.adjustMonth(-1);
        } else if (this.viewSelectorMode === "months") {
          prevDate.adjustYear(-1);
        }

        let dates = [...this.calendar];
        dates.unshift(prevDate);
        this.calendar = dates;
        this.animationStep.next("left");
        setTimeout(() => {
          dates = [...this.calendar];
          dates.splice(dates.length - 1, 1);
          this.calendar = dates;
          this.animationStep.next("stop");
        }, 205);
      }

      goNext(lastDate) {
        let nextDate = new Date(lastDate);

        if (this.viewSelectorMode === "days") {
          nextDate.adjustMonth(1);
        } else if (this.viewSelectorMode === "months") {
          nextDate.adjustYear(1);
        }

        let dates = [...this.calendar]; //dates.splice(0, 1);

        dates.push(nextDate);
        this.calendar = dates;
        this.animationStep.next("right");
        setTimeout(() => {
          dates = [...this.calendar];
          dates.splice(0, 1);
          this.calendar = dates;
          this.animationStep.next("stop"); //this.recountWidth.next(this.recountWidth.value + 1);
        }, 205);
      }

    };
    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CalendarService);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/_service/day.service.ts":
  /*!**********************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/_service/day.service.ts ***!
    \**********************************************************************/

  /*! exports provided: DayService */

  /***/
  function projectsAngularDatepicker2SrcLib_serviceDayServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayService", function () {
      return DayService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar.service */
    "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts");

    let DayService = class DayService {
      constructor(calendarService) {
        this.calendarService = calendarService;
      }

      createDay(date) {
        this.day = {
          isDisabled: false,
          isWeekEnd: this.calendarService.weekends.includes(date.getDay()),
          isSelected: false,
          isHovered: false,
          isInPeriod: this.getIsInPeriod(date),
          date: date
        };
        return this.day;
      }

      getIsInPeriod(date) {
        if (this.calendarService.selectMode === 'period' && this.calendarService.selectedDates.value.length == 2 && date.getTime() >= this.calendarService.selectedDates.value[0].getTime() && date.getTime() <= this.calendarService.selectedDates.value[1].getTime()) {
          return true;
        }

        return false;
      }

      getDay() {
        return this.day;
      }

      sortByDate(a, b) {
        if (a.getTime() > b.getTime()) return 1;
        if (a.getTime() == b.getTime()) return 0;
        if (a.getTime() < b.getTime()) return -1;
      }

      toggleDate() {
        this.calendarService.clickDayKey.next({
          key: new Date().getYmd() + '' + Math.random(),
          day: this.day
        });

        if (this.calendarService.selectMode === 'single') {
          if (this.calendarService.selectedDates.value.length > 0) {
            this.calendarService.selectedDates.next([this.day.date]);
          }
        } else if (this.calendarService.selectMode === 'multiple') {
          if (this.day.isSelected) {
            let selectedDates = this.calendarService.selectedDates.value.filter(elem => elem.getYmd() !== this.day.date.getYmd());
            selectedDates.sort(this.sortByDate);
            this.calendarService.selectedDates.next(selectedDates);
          } else {
            let selectedDates = this.calendarService.selectedDates.value;
            selectedDates.push(this.day.date);
            this.calendarService.selectedDates.next(selectedDates);
          }
        } else if (this.calendarService.selectMode === 'period') {
          if (this.day.isSelected) {
            let selectedDates = this.calendarService.selectedDates.value.filter(elem => elem.getYmd() !== this.day.date.getYmd());
            this.calendarService.selectedDates.next(selectedDates);
          } else {
            if (this.calendarService.selectedDates.value.length == 2) {
              this.calendarService.selectedDates.next([this.day.date]);
            } else if (this.calendarService.selectedDates.value.length < 2) {
              let selectedDates = this.calendarService.selectedDates.value;
              selectedDates.push(this.day.date);
              selectedDates.sort(this.sortByDate); //console.log(selectedDates)

              this.calendarService.selectedDates.next(selectedDates);
            }
          }
        }
      }

    };

    DayService.ctorParameters = () => [{
      type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
    }];

    DayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DayService);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/_service/month.service.ts":
  /*!************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/_service/month.service.ts ***!
    \************************************************************************/

  /*! exports provided: MonthService */

  /***/
  function projectsAngularDatepicker2SrcLib_serviceMonthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthService", function () {
      return MonthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar.service */
    "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts");

    let MonthService = class MonthService {
      constructor(calendarService) {
        this.calendarService = calendarService;
      }

      getMonth(date) {
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        let weekStart = this.calendarService.weekStart;
        const countWeek = Math.ceil((daysInMonth + date.getFirstDateDay(weekStart)) / 7);
        const weeks = [];

        for (let i = 0; i < countWeek; i++) {
          const startWeekDate = new Date(date);
          startWeekDate.setDate(date.getDate() + i * 7 - date.getDayWithStart(weekStart));
          weeks.push(startWeekDate);
        }

        return weeks;
      }

    };

    MonthService.ctorParameters = () => [{
      type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
    }];

    MonthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MonthService);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/_service/week.service.ts":
  /*!***********************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/_service/week.service.ts ***!
    \***********************************************************************/

  /*! exports provided: WeekService */

  /***/
  function projectsAngularDatepicker2SrcLib_serviceWeekServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekService", function () {
      return WeekService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let WeekService = class WeekService {
      constructor() {}

      getWeek(date) {
        const dayInWeek = 7;
        const days = [];

        for (let i = 0; i < dayInWeek; i++) {
          const curDate = new Date(date);
          curDate.setDate(curDate.getDate() + i);
          days.push(curDate);
        }

        return days;
      }

    };
    WeekService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], WeekService);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/angular-datepicker2.module.ts":
  /*!****************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/angular-datepicker2.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AngularDatepicker2Module */

  /***/
  function projectsAngularDatepicker2SrcLibAngularDatepicker2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularDatepicker2Module", function () {
      return AngularDatepicker2Module;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _calendar_angular_datepicker2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar/angular-datepicker2.component */
    "./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./month-view/month-view.component */
    "./projects/angular-datepicker2/src/lib/month-view/month-view.component.ts");
    /* harmony import */


    var _day_view_day_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./day-view/day-view.component */
    "./projects/angular-datepicker2/src/lib/day-view/day-view.component.ts");
    /* harmony import */


    var _month_select_month_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./month-select/month-select.component */
    "./projects/angular-datepicker2/src/lib/month-select/month-select.component.ts");
    /* harmony import */


    var _year_select_year_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./year-select/year-select.component */
    "./projects/angular-datepicker2/src/lib/year-select/year-select.component.ts");
    /* harmony import */


    var _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./week-view/week-view.component */
    "./projects/angular-datepicker2/src/lib/week-view/week-view.component.ts");

    let AngularDatepicker2Module = class AngularDatepicker2Module {};
    AngularDatepicker2Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_calendar_angular_datepicker2_component__WEBPACK_IMPORTED_MODULE_2__["AngularDatepicker2"], _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_5__["MonthViewComponent"], _day_view_day_view_component__WEBPACK_IMPORTED_MODULE_6__["DayViewComponent"], _month_select_month_select_component__WEBPACK_IMPORTED_MODULE_7__["MonthSelectComponent"], _year_select_year_select_component__WEBPACK_IMPORTED_MODULE_8__["YearSelectComponent"], _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_9__["WeekViewComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      exports: [_calendar_angular_datepicker2_component__WEBPACK_IMPORTED_MODULE_2__["AngularDatepicker2"]]
    })], AngularDatepicker2Module);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.scss":
  /*!******************************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularDatepicker2SrcLibCalendarAngularDatepicker2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".suggest {\n  background: #e0f5f5;\n  width: auto;\n  display: block;\n  float: left;\n  color: #26b1b1;\n  border-radius: 2px;\n  padding: 4px 8px;\n  margin-right: 2px;\n  margin-bottom: 2px;\n  font-size: 13px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.suggest:hover {\n  background: #82dcdc;\n  color: #148a8a;\n}\n\napp-calendar {\n  display: block;\n  float: left;\n  width: 100%;\n}\n\n.nextPrevBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  cursor: pointer;\n  padding: 8px 16px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  font-size: 0.9em;\n  color: #26b1b1;\n  z-index: 1;\n  background: #fff;\n}\n\n.nextPrevBtn:hover {\n  background: #eee;\n}\n\napp-week-view {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.dayWeekTitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: #a9a9a9;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  display: flex;\n  font-size: 0.8em;\n  padding: 4px;\n}\n\n.day.isWeekEnd {\n  color: #c53c3c;\n}\n\n.weekWrap {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\napp-month-select {\n  display: -webkit-box;\n  display: flex;\n  float: left;\n  min-width: 200px;\n  -webkit-animation: appear 0.2s ease-in-out;\n          animation: appear 0.2s ease-in-out;\n}\n\n.monthItem {\n  width: 33%;\n  font-size: 0.8em;\n  text-align: center;\n  padding: 9px 0;\n  box-shadow: 0 0 0 1px #f4f3f3;\n  color: #313131;\n}\n\n.monthItem:hover {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  background: #eee;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\napp-month-view {\n  display: -webkit-box;\n  display: flex;\n  float: left;\n  min-width: 200px;\n  -webkit-animation: appear 0.2s ease-in-out;\n          animation: appear 0.2s ease-in-out;\n  height: 100%;\n}\n\n@-webkit-keyframes appear {\n  from {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0.6;\n  }\n  50% {\n    -webkit-transform: opacity(0);\n            transform: opacity(0);\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes appear {\n  from {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0.6;\n  }\n  50% {\n    -webkit-transform: opacity(0);\n            transform: opacity(0);\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n.months {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n\n.wrapMonths {\n  display: block;\n  float: left;\n  overflow: hidden;\n  width: 477px;\n}\n\n.monthOne {\n  position: relative;\n  border-left: 1px solid #eee;\n}\n\n.monthOne.right {\n  -webkit-animation: right 0.2s ease-in-out;\n          animation: right 0.2s ease-in-out;\n}\n\n.monthOne.left {\n  -webkit-animation: left 0.2s ease-in-out;\n          animation: left 0.2s ease-in-out;\n}\n\n@-webkit-keyframes left {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@keyframes left {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes right {\n  from {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n\n@keyframes right {\n  from {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n\n.monthSelectBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 4px 8px;\n}\n\napp-day-view {\n  display: block;\n  float: left;\n  width: 100%;\n}\n\n.day.isDisabled {\n  color: #a7a7a7;\n}\n\n.day.isInPeriod {\n  background: #26b1b12b !important;\n}\n\n.day.isSelected {\n  background: #26b1b1 !important;\n  color: #fff !important;\n  -webkit-animation: appear 0.2s ease-in-out;\n          animation: appear 0.2s ease-in-out;\n}\n\n.day {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 0.8em;\n  padding: 6px;\n  color: #313131;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.day:hover {\n  background: #eee;\n  cursor: pointer;\n  color: #313131;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.dayWrap {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.calendarWrap {\n  float: left;\n  display: -webkit-box;\n  display: flex;\n  background: #fff;\n  margin: 10px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border-radius: 4px;\n  box-shadow: 1px 1px 3px -3px #000;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.dateSelector {\n  float: left;\n  width: auto;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  padding: 8px 0;\n}\n\n.monthWrap {\n  padding: 0 8px;\n}\n\n.monthHeader {\n  text-align: center;\n  text-align: center;\n  padding: 8px 16px;\n  font-size: 15px;\n  color: #2b2b2b;\n}\n\n.monthHeader::first-letter {\n  text-transform: uppercase;\n}\n\n.monthHeader:hover {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3Byb2plY3RzL2FuZ3VsYXItZGF0ZXBpY2tlcjIvc3JjL2xpYi9jYWxlbmRhci9hbmd1bGFyLWRhdGVwaWNrZXIyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvYW5ndWxhci1kYXRlcGlja2VyMi9zcmMvbGliL2NhbGVuZGFyL2FuZ3VsYXItZGF0ZXBpY2tlcjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFFRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFdBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNSSjs7QURVRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBM0NHO0VBNENILFVBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVFO0VBQ0UsZ0JBQUE7QUNQSjs7QURVRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNQSjs7QURVRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNQSjs7QURVRTtFQUNFLGNBQUE7QUNQSjs7QURVRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ1BKOztBRFVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ1BKOztBRFVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUU7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQW5HUTtFQW1HUixnQkFuR1E7QUM0Rlo7O0FEVUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFVFO0VBQ0U7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsWUFBQTtFQ1BKO0VEVUU7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsNkJBQUE7WUFBQSxxQkFBQTtFQ1JKO0VEV0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7WUFBQSxtQkFBQTtFQ1RKO0FBQ0Y7O0FETEU7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxZQUFBO0VDUEo7RURVRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0VDUko7RURXRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtZQUFBLG1CQUFBO0VDVEo7QUFDRjs7QURZRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVko7O0FEYUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1ZKOztBRGFFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQ1ZKOztBRGFFO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtBQ1ZKOztBRFlFO0VBQ0Usd0NBQUE7VUFBQSxnQ0FBQTtBQ1RKOztBRFdFO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDUko7RURVRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNSSjtBQUNGOztBREVFO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDUko7RURVRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNSSjtBQUNGOztBRFdFO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDVEo7RURXRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNUSjtBQUNGOztBREdFO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDVEo7RURXRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNUSjtBQUNGOztBRFlFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKOztBRGFFO0VBQ0UsY0FBQTtBQ1ZKOztBRGFFO0VBQ0UsZ0NBQUE7QUNWSjs7QURhRTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDVko7O0FEYUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDVko7O0FEYUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNWSjs7QURhRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1ZKOztBRGFFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDVko7O0FEYUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLGNBQUE7QUNWSjs7QURhRTtFQUNFLGNBQUE7QUNWSjs7QURhRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVko7O0FEYUU7RUFDRSx5QkFBQTtBQ1ZKOztBRGFFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWSiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWRhdGVwaWNrZXIyL3NyYy9saWIvY2FsZW5kYXIvYW5ndWxhci1kYXRlcGlja2VyMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGFuaW1TcGVlZDogMC4ycztcbiRjeWFuOiAjMjZiMWIxO1xuXG5cblxuLnN1Z2dlc3R7XG5cbiAgYmFja2dyb3VuZDogI2UwZjVmNTtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzI2YjFiMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuXG4uc3VnZ2VzdDpob3ZlcntcbiAgYmFja2dyb3VuZDogIzgyZGNkYztcbiAgY29sb3I6ICMxNDhhOGE7XG59XG5cbmFwcC1jYWxlbmRhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5leHRQcmV2QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgY29sb3I6ICRjeWFuO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICBcbiAgLm5leHRQcmV2QnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG4gIFxuICBhcHAtd2Vlay12aWV3IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgXG4gIC5kYXlXZWVrVGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBjb2xvcjogI2E5YTlhOTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG4gIC5kYXkuaXNXZWVrRW5kIHtcbiAgICBjb2xvcjogI2M1M2MzYztcbiAgfVxuICBcbiAgLndlZWtXcmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIGFwcC1tb250aC1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBhbmltYXRpb246IGFwcGVhciAkYW5pbVNwZWVkIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAubW9udGhJdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDlweCAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZjRmM2YzO1xuICAgIGNvbG9yOiAjMzEzMTMxO1xuICB9XG4gIFxuICAubW9udGhJdGVtOmhvdmVyIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB0cmFuc2l0aW9uOiAkYW5pbVNwZWVkO1xuICB9XG4gIFxuICBhcHAtbW9udGgtdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGFuaW1hdGlvbjogYXBwZWFyICRhbmltU3BlZWQgZWFzZS1pbi1vdXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGFwcGVhciB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBvcGFjaXR5KDApO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICAubW9udGhzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAud3JhcE1vbnRocyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNDc3cHg7XG4gIH1cbiAgXG4gIC5tb250aE9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbiAgfVxuICBcbiAgLm1vbnRoT25lLnJpZ2h0IHtcbiAgICBhbmltYXRpb246IHJpZ2h0ICRhbmltU3BlZWQgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLm1vbnRoT25lLmxlZnQge1xuICAgIGFuaW1hdGlvbjogbGVmdCAkYW5pbVNwZWVkIGVhc2UtaW4tb3V0O1xuICB9XG4gIEBrZXlmcmFtZXMgbGVmdCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyByaWdodCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLm1vbnRoU2VsZWN0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICB9XG4gIFxuICBhcHAtZGF5LXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZGF5LmlzRGlzYWJsZWQge1xuICAgIGNvbG9yOiAjYTdhN2E3O1xuICB9XG4gIFxuICAuZGF5LmlzSW5QZXJpb2R7XG4gICAgYmFja2dyb3VuZDogIzI2YjFiMTJiICFpbXBvcnRhbnQgIDtcbiAgfVxuICBcbiAgLmRheS5pc1NlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkY3lhbiAhaW1wb3J0YW50ICA7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudCA7XG4gICAgYW5pbWF0aW9uOiBhcHBlYXIgJGFuaW1TcGVlZCBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmRheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBjb2xvcjogIzMxMzEzMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgLmRheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMzMTMxMzE7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5kYXlXcmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIC5jYWxlbmRhcldyYXAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAtM3B4ICMwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICB9XG4gIFxuICAuZGF0ZVNlbGVjdG9yIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG4gIFxuICAubW9udGhXcmFwIHtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgfVxuICBcbiAgLm1vbnRoSGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbiAgfVxuICBcbiAgLm1vbnRoSGVhZGVyOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5tb250aEhlYWRlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbiAgIiwiLnN1Z2dlc3Qge1xuICBiYWNrZ3JvdW5kOiAjZTBmNWY1O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzI2YjFiMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzgyZGNkYztcbiAgY29sb3I6ICMxNDhhOGE7XG59XG5cbmFwcC1jYWxlbmRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXh0UHJldkJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICMyNmIxYjE7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5uZXh0UHJldkJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbmFwcC13ZWVrLXZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmRheVdlZWtUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjYTlhOWE5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uZGF5LmlzV2Vla0VuZCB7XG4gIGNvbG9yOiAjYzUzYzNjO1xufVxuXG4ud2Vla1dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5hcHAtbW9udGgtc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogYXBwZWFyIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb250aEl0ZW0ge1xuICB3aWR0aDogMzMlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDlweCAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2Y0ZjNmMztcbiAgY29sb3I6ICMzMTMxMzE7XG59XG5cbi5tb250aEl0ZW06aG92ZXIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG5hcHAtbW9udGgtdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBhbmltYXRpb246IGFwcGVhciAwLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgYXBwZWFyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogb3BhY2l0eSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLm1vbnRocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud3JhcE1vbnRocyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQ3N3B4O1xufVxuXG4ubW9udGhPbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbn1cblxuLm1vbnRoT25lLnJpZ2h0IHtcbiAgYW5pbWF0aW9uOiByaWdodCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9udGhPbmUubGVmdCB7XG4gIGFuaW1hdGlvbjogbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuLm1vbnRoU2VsZWN0QnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleDogMTtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuYXBwLWRheS12aWV3IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRheS5pc0Rpc2FibGVkIHtcbiAgY29sb3I6ICNhN2E3YTc7XG59XG5cbi5kYXkuaXNJblBlcmlvZCB7XG4gIGJhY2tncm91bmQ6ICMyNmIxYjEyYiAhaW1wb3J0YW50O1xufVxuXG4uZGF5LmlzU2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMjZiMWIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogYXBwZWFyIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNnB4O1xuICBjb2xvcjogIzMxMzEzMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMzEzMTMxO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRheVdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuXG4uY2FsZW5kYXJXcmFwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IC0zcHggIzAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmRhdGVTZWxlY3RvciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5tb250aFdyYXAge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLm1vbnRoSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMmIyYjJiO1xufVxuXG4ubW9udGhIZWFkZXI6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb250aEhlYWRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59Il19 */";
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.ts":
  /*!****************************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AngularDatepicker2 */

  /***/
  function projectsAngularDatepicker2SrcLibCalendarAngularDatepicker2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularDatepicker2", function () {
      return AngularDatepicker2;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_service/calendar.service */
    "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts");

    let AngularDatepicker2 = class AngularDatepicker2 {
      // disabled?: {
      //   enabled: true;
      //   mode: "after"; // 'after'|'before'
      // };
      //suggestions: [];
      //showMonthQty: number;
      constructor(calendarService, cdr) {
        this.calendarService = calendarService;
        this.cdr = cdr;
        /**
         * @description
         *  Array of selected dates.
         * */

        this.selectedDates = [];
        this.selectedDatesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description
         *  Callback event when click on day
        */

        this.onDayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description
         * Start week day, default 0
         */

        this.weekStart = 0;
        /**
         * @description
         * Weekends, default [0,6], set Day.isWeekend true
         */

        this.weekends = [0, 6]; //setTimeout(() => this.changeViewSelectorMode(), 1000);
      }

      clickSuggest(suggest) {
        this.calendarService.selectMode = this.selectMode = suggest.selectMode;
        this.calendarService.selectedDates.next(suggest.selectedDates);
      }

      recountWidth() {
        let width = 0;
        this.columns ? this.columns.toArray().map(item => width += item.elementView.nativeElement.clientWidth) : null;
        this.calendarService.animationStep.value === "stop" && this.calendarService.viewSelectorMode === "days" ? this.width = width : null;
        this.cdr.detectChanges();
      }

      ngAfterViewChecked() {
        this.recountWidth();
      }

      ngOnInit() {
        this.calendarService.animationStep.subscribe(data => {
          if (data === "stop") {
            setTimeout(() => this.recountWidth(), 10);
          }
        });
        this.calendarService.selectedDates.subscribe(data => {
          this.selectedDatesChange.emit(data);
        });
        this.calendarService.clickDayKey.subscribe(data => {
          data ? this.onDayClick.emit(data.day) : null;
        });
        this.calendarService.days.next(this.days);
        this.calendarService.weekStart = this.weekStart;
        this.calendarService.weekends = this.weekends;
        this.calendarService.viewMode = this.viewMode;
        this.calendarService.viewSelectorMode = 'days';
        this.calendarService.selectMode = this.selectMode;
        this.calendarService.shownDate = this.shownDate;
        this.calendarService.setSelectedDates(this.selectedDates);
        this.calendarService.setDays(this.days);
        this.calendarService.getShownMonths(this.shownDate);
      }

      getCalendar() {
        return this.calendarService.calendar;
      }

      getViewSelectorMode() {
        return this.calendarService.viewSelectorMode;
      }

      calculate() {
        let date = this.shownDate;
        let countMonths = 0;
        const months = [];
        let lastDate;
        lastDate = date ? date : this.calendarService.getLastDate();
        countMonths = this.calendarService.getCountMonths(); //this.countMonths = countMonths;

        for (let i = countMonths - 1; i >= 0; i--) {
          months.push(new Date(lastDate).adjustMonth(-i));
        }

        return months;
      }

      isEqual(array, array1) {
        console.log(array, array1);
        let a = array.filter(item => array1.includes(item));
        return a.length === 0 && array.length === array1.length;
      }

      _viewMode(simpleChange) {
        if (simpleChange.viewMode.currentValue !== simpleChange.viewMode.previousValue) {
          this.calendarService.viewMode = simpleChange.viewMode.currentValue;
          this.calendarService.getShownMonths(this.shownDate);
          setTimeout(() => this.recountWidth(), 10);
        }
      }

      _selectMode(simpleChange) {
        if (simpleChange.selectMode.currentValue !== simpleChange.selectMode.previousValue) {
          this.calendarService.selectMode = simpleChange.selectMode.currentValue;
          this.calendarService.getShownMonths(this.shownDate);
          setTimeout(() => this.recountWidth(), 10);
        }
      }

      _shownDate(simpleChange) {
        if (simpleChange.shownDate.currentValue !== simpleChange.shownDate.previousValue) {
          this.calendarService.shownDate = simpleChange.shownDate.currentValue;
          this.calendarService.getShownMonths(this.shownDate);
          setTimeout(() => this.recountWidth(), 10);
        }
      }
      /* private _vertical(simpleChange) {
         this.calendarService.ve vertical = simpleChange.vertical.currentValue;
       } */


      ngOnChanges(simpleChange) {
        //console.log(simpleChange);
        simpleChange.viewMode && this._viewMode(simpleChange);
        simpleChange.selectMode && this._selectMode(simpleChange);
        simpleChange.shownDate && this._shownDate(simpleChange);
      }
      /** Set custom Day[] */


      setDays(days) {}

      goNext() {
        let lastDate = this.calendarService.calendar[this.calendarService.calendar.length - 1];
        this.calendarService.goNext(lastDate);
      }

      goPrev() {
        let firstDate = this.calendarService.calendar[0];
        this.calendarService.goPrev(firstDate);
      }

    };

    AngularDatepicker2.ctorParameters = () => [{
      type: _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "selectedDates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AngularDatepicker2.prototype, "selectedDatesChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AngularDatepicker2.prototype, "onDayClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "suggest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "days", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "shownDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "vertical", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "viewMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "weekStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "weekends", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "selectMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AngularDatepicker2.prototype, "nowDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("column")], AngularDatepicker2.prototype, "columns", void 0);
    AngularDatepicker2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "angular-datepicker2",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./angular-datepicker2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.html")).default,
      providers: [_service_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./angular-datepicker2.component.scss */
      "./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.scss")).default]
    })], AngularDatepicker2);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/day-view/day-view.component.scss":
  /*!*******************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/day-view/day-view.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularDatepicker2SrcLibDayViewDayViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWRhdGVwaWNrZXIyL3NyYy9saWIvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/day-view/day-view.component.ts":
  /*!*****************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/day-view/day-view.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DayViewComponent */

  /***/
  function projectsAngularDatepicker2SrcLibDayViewDayViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayViewComponent", function () {
      return DayViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_service/calendar.service */
    "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts");
    /* harmony import */


    var _service_day_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_service/day.service */
    "./projects/angular-datepicker2/src/lib/_service/day.service.ts");

    let DayViewComponent = class DayViewComponent {
      constructor(componentFactoryResolver, dayService, calendarService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dayService = dayService;
        this.calendarService = calendarService;
      }

      createChildComponent(component) {
        const props = component.props;
        let factory = this.componentFactoryResolver.resolveComponentFactory(component.componentClass);
        let viewContainerRef = this.template;
        viewContainerRef.clear();
        let childComponentRef = viewContainerRef.createComponent(factory);

        for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
          let k = _Object$keys[_i];
          let prop = props[k];

          if (prop.type === 'output') {
            childComponentRef.instance[prop.propName].subscribe(data => {
              prop.value(data);
            });
          } else if (prop.type === 'input') {
            childComponentRef.instance[prop.propName] = prop.value;
          }
        }
      }

      ngAfterViewInit() {
        if (this.day.template && this.day.template.component) {
          this.createChildComponent(this.day.template.component);
        }
      } // bad idea, too mach subscribes for every day


      ngOnInit() {
        this.day = this.dayService.createDay(this.date);
        this.sub = this.calendarService.selectedDates.subscribe(data => {
          const days = data.map(item => item.getYmd());
          this.day.isSelected = days.includes(this.day.date.getYmd());
          this.day.isInPeriod = this.dayService.getIsInPeriod(this.day.date);
        });
        this.sub1 = this.calendarService.days.subscribe(data => {
          //console.log(data);
          if (data && data.length > 0) {
            let day = data.find(item => item.date.getYmd() == this.date.getYmd());
            day ? this.day = day : null;
          }
        });
      }

      detectChanges() {}

      ngOnChanges() {//console.log("Day changed");
      }

      onClick() {
        !this.day.isDisabled ? this.dayService.toggleDate() : null;
      }

      ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
      }

    };

    DayViewComponent.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
    }, {
      type: _service_day_service__WEBPACK_IMPORTED_MODULE_3__["DayService"]
    }, {
      type: _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayViewComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayViewComponent.prototype, "thisMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tpl", {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
    })], DayViewComponent.prototype, "template", void 0);
    DayViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-day-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/day-view/day-view.component.html")).default,
      providers: [_service_day_service__WEBPACK_IMPORTED_MODULE_3__["DayService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day-view.component.scss */
      "./projects/angular-datepicker2/src/lib/day-view/day-view.component.scss")).default]
    })], DayViewComponent);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/interfaces.ts":
  /*!************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/interfaces.ts ***!
    \************************************************************/

  /*! exports provided: SelectMode, ViewMode */

  /***/
  function projectsAngularDatepicker2SrcLibInterfacesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMode", function () {
      return SelectMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewMode", function () {
      return ViewMode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * @publicApi
    */


    var SelectMode;

    (function (SelectMode) {
      SelectMode["Single"] = "single";
      SelectMode["Multiple"] = "multiple";
      SelectMode["Period"] = "period";
    })(SelectMode || (SelectMode = {}));

    var ViewMode;

    (function (ViewMode) {
      ViewMode["Year"] = "year";
      ViewMode["Quarter"] = "quarter";
      ViewMode["Semester"] = "semester";
    })(ViewMode || (ViewMode = {}));
    /***/

  },

  /***/
  "./projects/angular-datepicker2/src/lib/month-select/month-select.component.scss":
  /*!***************************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/month-select/month-select.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularDatepicker2SrcLibMonthSelectMonthSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWRhdGVwaWNrZXIyL3NyYy9saWIvbW9udGgtc2VsZWN0L21vbnRoLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/month-select/month-select.component.ts":
  /*!*************************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/month-select/month-select.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: MonthSelectComponent */

  /***/
  function projectsAngularDatepicker2SrcLibMonthSelectMonthSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthSelectComponent", function () {
      return MonthSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_service/calendar.service */
    "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts");

    let MonthSelectComponent = class MonthSelectComponent {
      constructor(calendarService) {
        this.calendarService = calendarService;
        this.months = [];
      }

      ngOnInit() {
        for (let i = 0; i < 12; i++) {
          let date = new Date(this.date);
          date.setMonth(0);
          date.adjustMonth(i);
          this.months.push(date);
        }

        this.calendarService.animationStep.subscribe(data => {
          this.animationStep = data;
        });
      }

      setMonth(month) {
        this.calendarService.getShownMonths(month);
      }

    };

    MonthSelectComponent.ctorParameters = () => [{
      type: _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthSelectComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wrap", {
      static: true
    })], MonthSelectComponent.prototype, "elementView", void 0);
    MonthSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-month-select",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./month-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/month-select/month-select.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./month-select.component.scss */
      "./projects/angular-datepicker2/src/lib/month-select/month-select.component.scss")).default]
    })], MonthSelectComponent);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/month-view/month-view.component.scss":
  /*!***********************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/month-view/month-view.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularDatepicker2SrcLibMonthViewMonthViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWRhdGVwaWNrZXIyL3NyYy9saWIvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/month-view/month-view.component.ts":
  /*!*********************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/month-view/month-view.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MonthViewComponent */

  /***/
  function projectsAngularDatepicker2SrcLibMonthViewMonthViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function () {
      return MonthViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_service/calendar.service */
    "./projects/angular-datepicker2/src/lib/_service/calendar.service.ts");
    /* harmony import */


    var _service_month_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_service/month.service */
    "./projects/angular-datepicker2/src/lib/_service/month.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let MonthViewComponent = class MonthViewComponent {
      constructor(monthService, calendarService) {
        this.monthService = monthService;
        this.calendarService = calendarService;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      showYears() {
        this.calendarService.getShownYears(this.date);
      }

      ngOnInit() {
        this.sub.add(this.calendarService.animationStep.subscribe(data => {
          this.animationStep = data;
        }));
        this.weeks = this.monthService.getMonth(this.date);
        let weekDays = [];

        for (let i = 0; i < 7; i++) {
          weekDays.push(this.weeks[0].adjustDate(i));
        }

        this.weekDays = weekDays;
      }

      ngOnDestroy() {
        this.sub.unsubscribe();
      }

    };

    MonthViewComponent.ctorParameters = () => [{
      type: _service_month_service__WEBPACK_IMPORTED_MODULE_3__["MonthService"]
    }, {
      type: _service_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthViewComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthViewComponent.prototype, "updateDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthViewComponent.prototype, "vertical", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style")], MonthViewComponent.prototype, "elWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wrap", {
      static: true
    })], MonthViewComponent.prototype, "elementView", void 0);
    MonthViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-month-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./month-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/month-view/month-view.component.html")).default,
      providers: [_service_month_service__WEBPACK_IMPORTED_MODULE_3__["MonthService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./month-view.component.scss */
      "./projects/angular-datepicker2/src/lib/month-view/month-view.component.scss")).default]
    })], MonthViewComponent);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/week-view/week-view.component.scss":
  /*!*********************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/week-view/week-view.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularDatepicker2SrcLibWeekViewWeekViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWRhdGVwaWNrZXIyL3NyYy9saWIvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/week-view/week-view.component.ts":
  /*!*******************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/week-view/week-view.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: WeekViewComponent */

  /***/
  function projectsAngularDatepicker2SrcLibWeekViewWeekViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function () {
      return WeekViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_week_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_service/week.service */
    "./projects/angular-datepicker2/src/lib/_service/week.service.ts");

    let WeekViewComponent = class WeekViewComponent {
      constructor(weekService) {
        this.weekService = weekService;
      }

      ngOnInit() {
        this.days = this.weekService.getWeek(this.date);
      }

    };

    WeekViewComponent.ctorParameters = () => [{
      type: _service_week_service__WEBPACK_IMPORTED_MODULE_2__["WeekService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WeekViewComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WeekViewComponent.prototype, "firstMonthDate", void 0);
    WeekViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-week-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./week-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/week-view/week-view.component.html")).default,
      providers: [_service_week_service__WEBPACK_IMPORTED_MODULE_2__["WeekService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./week-view.component.scss */
      "./projects/angular-datepicker2/src/lib/week-view/week-view.component.scss")).default]
    })], WeekViewComponent);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/year-select/year-select.component.scss":
  /*!*************************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/year-select/year-select.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularDatepicker2SrcLibYearSelectYearSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWRhdGVwaWNrZXIyL3NyYy9saWIveWVhci1zZWxlY3QveWVhci1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/lib/year-select/year-select.component.ts":
  /*!***********************************************************************************!*\
    !*** ./projects/angular-datepicker2/src/lib/year-select/year-select.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: YearSelectComponent */

  /***/
  function projectsAngularDatepicker2SrcLibYearSelectYearSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YearSelectComponent", function () {
      return YearSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let YearSelectComponent = class YearSelectComponent {
      constructor() {}

      ngOnInit() {}

    };
    YearSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-year-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./year-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-datepicker2/src/lib/year-select/year-select.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./year-select.component.scss */
      "./projects/angular-datepicker2/src/lib/year-select/year-select.component.scss")).default]
    })], YearSelectComponent);
    /***/
  },

  /***/
  "./projects/angular-datepicker2/src/public-api.ts":
  /*!********************************************************!*\
    !*** ./projects/angular-datepicker2/src/public-api.ts ***!
    \********************************************************/

  /*! exports provided: AngularDatepicker2, AngularDatepicker2Module, SelectMode, ViewMode */

  /***/
  function projectsAngularDatepicker2SrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_calendar_angular_datepicker2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/calendar/angular-datepicker2.component */
    "./projects/angular-datepicker2/src/lib/calendar/angular-datepicker2.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularDatepicker2", function () {
      return _lib_calendar_angular_datepicker2_component__WEBPACK_IMPORTED_MODULE_1__["AngularDatepicker2"];
    });
    /* harmony import */


    var _lib_angular_datepicker2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/angular-datepicker2.module */
    "./projects/angular-datepicker2/src/lib/angular-datepicker2.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularDatepicker2Module", function () {
      return _lib_angular_datepicker2_module__WEBPACK_IMPORTED_MODULE_2__["AngularDatepicker2Module"];
    });
    /* harmony import */


    var _lib_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/interfaces */
    "./projects/angular-datepicker2/src/lib/interfaces.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectMode", function () {
      return _lib_interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectMode"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewMode", function () {
      return _lib_interfaces__WEBPACK_IMPORTED_MODULE_3__["ViewMode"];
    });
    /*
     * Public API Surface of angular-datepicker2
     */

    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html, body {\n  padding: 0;\n  display: block;\n  float: left;\n  width: 100%;\n  margin: 0;\n  height: 100%;\n}\n\ntable {\n  border: 1px solid #c3c3c3;\n}\n\ntable td {\n  padding: 10px;\n  font-size: 14px;\n  vertical-align: top;\n}\n\n.customDay {\n  width: 100%;\n  height: 100%;\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgIFxufVxuXG50YWJsZXtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjM2MzYzNcbn1cblxudGFibGUgdGR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wXG59XG5cblxuXG4uY3VzdG9tRGF5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG59IiwiaHRtbCwgYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY3VzdG9tRGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _test_day_test_day_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./test-day/test-day.component */
    "./src/app/test-day/test-day.component.ts");
    /* harmony import */


    var projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! projects/angular-datepicker2/src/public-api */
    "./projects/angular-datepicker2/src/public-api.ts"); //import {  } from 'projects/angular-datepicker2/src/lib/interfaces';


    let AppComponent = class AppComponent {
      //import {  } from 'projects/angular-datepicker2/src/lib/interfaces';
      constructor() {
        this.title = "angular-datepicker";
        this.vertical = false;
        this.selectMode = projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Period;
        this.viewMode = projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Quarter;
        this.suggest = [{
          title: 'Last two weeks',
          selectMode: projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Period,
          selectedDates: [new Date(2020, 3, 1), new Date(2020, 3, 12)]
        }, {
          title: 'Last month',
          selectMode: projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Period,
          selectedDates: [new Date(2020, 3, 1), new Date(2020, 3, 30)]
        }, {
          title: '1, 4 and 30',
          selectMode: projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Multiple,
          selectedDates: [new Date(2020, 3, 1), new Date(2020, 3, 4), new Date(2020, 3, 30)]
        }];
        this._stackOnDayClick = [];
        this._viewModeVal = [projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Quarter, 1, 3, 4, projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ViewMode"].Semester, 6];
        this._selectModeVal = [projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Period, projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Multiple, projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_3__["SelectMode"].Single];
        this._verticalVal = [false, true];
        this._shownDateVal = [new Date(2020, 3, 1)];
      }

      _selectMode(e) {
        let val = e.target.value;
        this.selectMode = val;
      }

      _viewMode(e) {
        let val = e.target.value;

        if (typeof val === 'string' && val.length <= 2) {
          val = parseInt(val);
        }

        this.viewMode = val;
      }

      _vertical(e) {
        let val = e.target.value;
        this.vertical = val === 'true' ? true : false;
      }

      onDayClick(day) {
        this._stackOnDayClick.push(Object.assign({}, day));
      }

      ngOnInit() {
        this.selectedDates = [new Date(2020, 3, 7), new Date(2020, 3, 9)];
        this.date = new Date(2020, 3, 7);
        /* setTimeout(() => {
           this.vertical = true;
         }, 2000)
         setTimeout(() => {
           this.viewMode = ViewMode.Quarter;
         }, 4000)
               setTimeout(() => {
           this.selectMode = SelectMode.Multiple;
         }, 6000)*/

        this.days = [{
          isDisabled: true,
          isHovered: false,
          isSelected: false,
          isWeekEnd: true,
          date: new Date(2020, 3, 23)
        }, {
          isDisabled: false,
          isHovered: false,
          isSelected: false,
          isWeekEnd: true,
          date: new Date(2020, 3, 21)
        }, {
          isDisabled: true,
          isHovered: false,
          isSelected: false,
          isWeekEnd: true,
          date: new Date(2020, 3, 26),
          template: {
            component: {
              componentClass: _test_day_test_day_component__WEBPACK_IMPORTED_MODULE_2__["TestDayComponent"],
              props: [{
                propName: 'title',
                type: 'input',
                value: new Date(2020, 3, 26).getDate()
              }, {
                propName: 'callback2',
                type: 'output',
                value: data => {
                  alert('click custom day. See Day interface');
                }
              }]
            }
          }
        }];
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/locales/ru */
    "./node_modules/@angular/common/locales/ru.js");
    /* harmony import */


    var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _test_day_test_day_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-day/test-day.component */
    "./src/app/test-day/test-day.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! projects/angular-datepicker2/src/public-api */
    "./projects/angular-datepicker2/src/public-api.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default.a, "ru");
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _test_day_test_day_component__WEBPACK_IMPORTED_MODULE_6__["TestDayComponent"]],
      entryComponents: [_test_day_test_day_component__WEBPACK_IMPORTED_MODULE_6__["TestDayComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], projects_angular_datepicker2_src_public_api__WEBPACK_IMPORTED_MODULE_8__["AngularDatepicker2Module"]],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
        useValue: "ru"
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/test-day/test-day.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/test-day/test-day.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestDayTestDayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZGF5L3Rlc3QtZGF5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/test-day/test-day.component.ts":
  /*!************************************************!*\
    !*** ./src/app/test-day/test-day.component.ts ***!
    \************************************************/

  /*! exports provided: TestDayComponent */

  /***/
  function srcAppTestDayTestDayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestDayComponent", function () {
      return TestDayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TestDayComponent = class TestDayComponent {
      constructor() {
        this.callback2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      click(event) {
        this.callback2.emit('TestDayComponent' + this.title);
      }

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TestDayComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TestDayComponent.prototype, "callback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TestDayComponent.prototype, "callback2", void 0);
    TestDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-test-day",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-day.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test-day/test-day.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-day.component.scss */
      "./src/app/test-day/test-day.component.scss")).default]
    })], TestDayComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /github/workspace/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map