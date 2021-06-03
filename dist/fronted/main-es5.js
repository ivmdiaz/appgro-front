(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DQw":
    /*!******************************************************!*\
      !*** ./src/app/commons/helpers/error.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function DQw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/authentication.service */
      "E16q");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(router, authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();

                _this.router.navigate(['']);
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "+Qia":
    /*!*******************************************************************************!*\
      !*** ./src/app/commons/components/confirm-dialog/confirm-dialog.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function Qia(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(dialogo, mensaje) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.dialogo = dialogo;
          this.mensaje = mensaje;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "cerrarDialogo",
          value: function cerrarDialogo() {
            this.dialogo.close(false);
          }
        }, {
          key: "confirmado",
          value: function confirmado() {
            this.dialogo.close(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 10,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirmaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
              return ctx.cerrarDialogo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
              return ctx.confirmado();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "S\xED");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.mensaje);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
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
      /*! /home/idiaz@cx.local/IDIAZ/Personal/github/appgro-front/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5QtY":
    /*!****************************************************!*\
      !*** ./src/app/commons/helpers/constantes-util.ts ***!
      \****************************************************/

    /*! exports provided: ConstantesUtil */

    /***/
    function QtY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstantesUtil", function () {
        return ConstantesUtil;
      });

      var ConstantesUtil = function ConstantesUtil() {
        _classCallCheck(this, ConstantesUtil);
      };

      ConstantesUtil.GUARDADO_EXITOSO = "Guardad@ exitosamente";
      ConstantesUtil.ELIMINADO_CORRECTAMENTE = "Eliminad@ correctamente";
      ConstantesUtil.PERFIL_PROVEEDOR = "3";
      ConstantesUtil.PERFIL_ADMINISTRADOR = "1";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiPublicUrl: 'http://localhost:8080/api/public',
        apiProveedorUrl: 'http://localhost:8080/api/proveedor',
        apiAdministradorUrl: 'http://localhost:8080/api/administrador',
        apiUsuarioUrl: 'http://localhost:8080/api/usuario',
        apiTiendaUrl: 'http://localhost:8080/api/tienda',
        apiProductoUrl: 'http://localhost:8080/api/producto',
        apiParametrizacionUrl: 'http://localhost:8080/api/parametrizacion',
        apiEtiquetaUrl: 'http://localhost:8080/api/etiqueta',
        apiCategoriaUrl: 'http://localhost:8080/api/categoria',
        apiReportesUrl: 'http://localhost:8080/api/reportes',
        apiAgmkey: 'AIzaSyChxa5pkUYzkRJcFrI3ZWJPFR_z1DHNSvI'
        /*
        apiPublicUrl: 'https://appgro-back.herokuapp.com/api/public',
        apiProveedorUrl: 'https://appgro-back.herokuapp.com/api/proveedor',
        apiAdministradorUrl: 'https://appgro-back.herokuapp.com/api/administrador',
        apiUsuarioUrl: 'https://appgro-back.herokuapp.com/api/usuario',
        apiTiendaUrl: 'https://appgro-back.herokuapp.com/api/tienda',
        apiProductoUrl: 'https://appgro-back.herokuapp.com/api/producto',
        apiParametrizacionUrl: 'https://appgro-back.herokuapp.com/api/parametrizacion',
        apiEtiquetaUrl: 'https://appgro-back.herokuapp.com/api/etiqueta',
        apiCategoriaUrl: 'https://appgro-back.herokuapp.com/api/categoria'
        */

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
    "E16q":
    /*!************************************************************!*\
      !*** ./src/app/commons/services/authentication.service.ts ***!
      \************************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function E16q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "actualizarCurrentUser",
          value: function actualizarCurrentUser(usuario) {
            var tempUser = Object.assign({}, this.currentUserValue);
            tempUser.entidad.usuario = usuario;
            localStorage.setItem('currentUser', JSON.stringify(tempUser));
            this.currentUserSubject.next(tempUser);
          }
        }, {
          key: "login",
          value: function login(peticion) {
            var _this2 = this;

            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiPublicUrl, "/login");
            return this.http.post(url, peticion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              //Si el token no existe arrojamos mensaje de error
              if (!user.entidad) {
                throw new Error(user.estado.mensaje);
              } // almacenar los detalles del usuario y el token jwt en el almacenamiento local para mantener
              // al usuario conectado entre las actualizaciones de la página


              localStorage.setItem('currentUser', JSON.stringify(user));

              _this2.currentUserSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // eliminar al usuario del almacenamiento local para cerrar la sesión del usuario
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }, {
          key: "perfiles",
          get: function get() {
            return this.getPerfiles();
          }
        }, {
          key: "getPerfiles",
          value: function getPerfiles() {
            var jwt = this.currentUserValue.entidad.jwt.replace('Bearer ', ''); //const jwt = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJBcHBncm8iLCJzdWIiOiJmc2Fib2dhbHBAY29ycmVvLnVkaXN0cml0YWwuZWR1LmNvIiwiYXV0aG9yaXRpZXMiOlsiMSJdLCJpYXQiOjE2MTgwODc4MTUsImV4cCI6MTYxODEyMzgxNn0.RU3zD1nv3gB5J8U-xhLXRKCRK7flSZ8gZP82AnxF4tUQfjBz9LtITHYMc4XYEV_Jaiqy0IRykBL0KIvvHOiJ-g';

            var jwtData = jwt.split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            return decodedJwtData.authorities;
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "LkjY":
    /*!*******************************************!*\
      !*** ./src/app/commons/commons.module.ts ***!
      \*******************************************/

    /*! exports provided: CommonsModule */

    /***/
    function LkjY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonsModule", function () {
        return CommonsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _components_header_principal_header_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/header-principal/header-principal.component */
      "t9R9");
      /* harmony import */


      var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/confirm-dialog/confirm-dialog.component */
      "+Qia");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CommonsModule = function CommonsModule() {
        _classCallCheck(this, CommonsModule);
      };

      CommonsModule.ɵfac = function CommonsModule_Factory(t) {
        return new (t || CommonsModule)();
      };

      CommonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: CommonsModule
      });
      CommonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CommonsModule, {
          declarations: [_components_header_principal_header_principal_component__WEBPACK_IMPORTED_MODULE_2__["HeaderPrincipalComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]],
          exports: [_components_header_principal_header_principal_component__WEBPACK_IMPORTED_MODULE_2__["HeaderPrincipalComponent"]]
        });
      })();
      /***/

    },

    /***/
    "S6+9":
    /*!****************************************************!*\
      !*** ./src/app/commons/helpers/jwt.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function S69(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "E16q");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService, spinnerService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
          this.spinnerService = spinnerService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            //Mostramos Spinner
            this.spinnerService.show(); //Obtenemos usuario de storage

            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser && currentUser.entidad && currentUser.entidad.jwt) {
              request = request.clone({
                setHeaders: {
                  Authorization: "".concat(currentUser.entidad.jwt)
                }
              });
            } //Cuando finalice quitamos spinner.


            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
              return _this3.finalizarProcesando();
            }));
          }
        }, {
          key: "finalizarProcesando",
          value: function finalizarProcesando() {
            //Quitamos Spinner
            this.spinnerService.hide();
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Appgro Web';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-pulse-sync"], [2, "font-size", "20px", "color", "white"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  background-color: #FAFAFA;\n}\n\n.container-main[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4uY29udGFpbmVyLW1haW4ge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "UxOX":
    /*!**************************************************************!*\
      !*** ./src/app/commons/helpers/custom-mat-paginator-intl.ts ***!
      \**************************************************************/

    /*! exports provided: CustomMatPaginatorIntl */

    /***/
    function UxOX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomMatPaginatorIntl", function () {
        return CustomMatPaginatorIntl;
      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomMatPaginatorIntl = /*#__PURE__*/function (_angular_material_pag) {
        _inherits(CustomMatPaginatorIntl, _angular_material_pag);

        var _super = _createSuper(CustomMatPaginatorIntl);

        function CustomMatPaginatorIntl() {
          var _this4;

          _classCallCheck(this, CustomMatPaginatorIntl);

          _this4 = _super.call(this);

          _this4.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
              return "0 / ".concat(length);
            }

            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
          };

          _this4.getAndInitTranslations();

          return _this4;
        }

        _createClass(CustomMatPaginatorIntl, [{
          key: "getAndInitTranslations",
          value: function getAndInitTranslations() {
            this.itemsPerPageLabel = "Elementos por página:";
            this.nextPageLabel = "Siguiente";
            this.previousPageLabel = "Anterior";
            this.changes.next();
          }
        }]);

        return CustomMatPaginatorIntl;
      }(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]);

      CustomMatPaginatorIntl.ɵfac = function CustomMatPaginatorIntl_Factory(t) {
        return new (t || CustomMatPaginatorIntl)();
      };

      CustomMatPaginatorIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CustomMatPaginatorIntl,
        factory: CustomMatPaginatorIntl.ɵfac
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _commons_commons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./commons/commons.module */
      "LkjY");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _commons_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./commons/helpers/jwt.interceptor */
      "S6+9");
      /* harmony import */


      var _commons_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./commons/helpers/error.interceptor */
      "+DQw");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _commons_helpers_custom_mat_paginator_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./commons/helpers/custom-mat-paginator-intl */
      "UxOX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _commons_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _commons_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorIntl"],
          useClass: _commons_helpers_custom_mat_paginator_intl__WEBPACK_IMPORTED_MODULE_12__["CustomMatPaginatorIntl"]
        }, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        imports: [[_commons_commons_module__WEBPACK_IMPORTED_MODULE_2__["CommonsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
          timeOut: 2500,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_commons_commons_module__WEBPACK_IMPORTED_MODULE_2__["CommonsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"]]
        });
      })();
      /***/

    },

    /***/
    "hctd":
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function hctd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MAT_DATE_LOCALE"],
          useValue: 'en-GB'
        }],
        imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]],
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
        });
      })();
      /***/

    },

    /***/
    "t9R9":
    /*!***********************************************************************************!*\
      !*** ./src/app/commons/components/header-principal/header-principal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: HeaderPrincipalComponent */

    /***/
    function t9R9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderPrincipalComponent", function () {
        return HeaderPrincipalComponent;
      });
      /* harmony import */


      var _helpers_constantes_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../helpers/constantes-util */
      "5QtY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/authentication.service */
      "E16q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      function HeaderPrincipalComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.goToTiendas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "store");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tiendas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "auto_graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Informes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        }
      }

      function HeaderPrincipalComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.goToReporteVentasTodas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Todas las ventas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.goToReporteVentasTiendas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ventas por tienda");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.goToReporteVentasProductos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ventas por producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.goToReporteAdmTiendas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Administraci\xF3n de ventas por tiendas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.goToTarifas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "attach_money");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tarifas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.goToEtiquetas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Etiquetas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderPrincipalComponent_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.goToCategorias();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Categorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var HeaderPrincipalComponent = /*#__PURE__*/function () {
        function HeaderPrincipalComponent(authenticationService, router) {
          _classCallCheck(this, HeaderPrincipalComponent);

          this.authenticationService = authenticationService;
          this.router = router;
        }

        _createClass(HeaderPrincipalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isPerfilVendedor",
          value: function isPerfilVendedor() {
            return this.authenticationService.perfiles.indexOf(_helpers_constantes_util__WEBPACK_IMPORTED_MODULE_0__["ConstantesUtil"].PERFIL_PROVEEDOR) !== -1;
          }
        }, {
          key: "isPerfilAdministrador",
          value: function isPerfilAdministrador() {
            return this.authenticationService.perfiles.indexOf(_helpers_constantes_util__WEBPACK_IMPORTED_MODULE_0__["ConstantesUtil"].PERFIL_ADMINISTRADOR) !== -1;
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            var url = '';
            this.authenticationService.logout();
            this.router.navigateByUrl('/').then(function () {
              return _this5.router.navigate([url]);
            });
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            var _this6 = this;

            var url = 'home';

            if (this.isPerfilVendedor()) {
              url = 'home/proveedor';
            } else if (this.isPerfilAdministrador()) {
              url = 'home/administrador';
            }

            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this6.router.navigate([url]);
            });
          }
        }, {
          key: "goToAjustes",
          value: function goToAjustes() {
            var _this7 = this;

            var url = 'ajustes';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this7.router.navigate([url]);
            });
          }
        }, {
          key: "goToTiendas",
          value: function goToTiendas() {
            var _this8 = this;

            var url = 'tiendas';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this8.router.navigate([url]);
            });
          }
        }, {
          key: "goToEtiquetas",
          value: function goToEtiquetas() {
            var _this9 = this;

            var url = 'configuracion/etiquetas';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this9.router.navigate([url]);
            });
          }
        }, {
          key: "goToCategorias",
          value: function goToCategorias() {
            var _this10 = this;

            var url = 'configuracion/categorias';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this10.router.navigate([url]);
            });
          }
        }, {
          key: "goToTarifas",
          value: function goToTarifas() {
            var _this11 = this;

            var url = 'configuracion/tarifas';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this11.router.navigate([url]);
            });
          }
        }, {
          key: "goToReporteVentasTodas",
          value: function goToReporteVentasTodas() {
            var _this12 = this;

            var url = 'reportes/ventas';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this12.router.navigate([url]);
            });
          }
        }, {
          key: "goToReporteVentasTiendas",
          value: function goToReporteVentasTiendas() {
            var _this13 = this;

            var url = 'reportes/tiendas';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this13.router.navigate([url]);
            });
          }
        }, {
          key: "goToReporteVentasProductos",
          value: function goToReporteVentasProductos() {
            var _this14 = this;

            var url = 'reportes/productos';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this14.router.navigate([url]);
            });
          }
        }, {
          key: "goToReporteAdmTiendas",
          value: function goToReporteAdmTiendas() {
            var _this15 = this;

            var url = 'reportes/administrador/tiendas';
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this15.router.navigate([url]);
            });
          }
        }]);

        return HeaderPrincipalComponent;
      }();

      HeaderPrincipalComponent.ɵfac = function HeaderPrincipalComponent_Factory(t) {
        return new (t || HeaderPrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HeaderPrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderPrincipalComponent,
        selectors: [["app-header-principal"]],
        decls: 40,
        vars: 11,
        consts: [["color", "primary"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu_informes", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "example-spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu_configuracion", "matMenu"], ["menu_ajustes", "matMenu"], ["mat-menu-item", "", 3, "click"]],
        template: function HeaderPrincipalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_Template_button_click_1_listener() {
              return ctx.goToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inicio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderPrincipalComponent_button_6_Template, 5, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderPrincipalComponent_button_7_Template, 5, 1, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderPrincipalComponent_button_10_Template, 3, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderPrincipalComponent_button_11_Template, 3, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderPrincipalComponent_button_12_Template, 3, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderPrincipalComponent_button_13_Template, 3, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-menu", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HeaderPrincipalComponent_button_21_Template, 5, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HeaderPrincipalComponent_button_22_Template, 5, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HeaderPrincipalComponent_button_23_Template, 5, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_Template_button_click_30_listener() {
              return ctx.goToAjustes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Perfil");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderPrincipalComponent_Template_button_click_35_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Salir");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilVendedor());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilVendedor() || ctx.isPerfilAdministrador());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilVendedor());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilVendedor());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilVendedor());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilAdministrador());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilVendedor());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPerfilAdministrador());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r11);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIn0= */", "[_nghost-%COMP%] {\n  background-color: #FAFAFA;\n}\n\n.container-main[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4uY29udGFpbmVyLW1haW4ge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | public-public-module */
          [__webpack_require__.e("common"), __webpack_require__.e("public-public-module")]).then(__webpack_require__.bind(null,
          /*! ./public/public.module */
          "UFnY")).then(function (m) {
            return m.PublicModule;
          });
        }
      }, {
        path: "home",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: "ajustes",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ajustes-ajustes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("ajustes-ajustes-module")]).then(__webpack_require__.bind(null,
          /*! ./ajustes/ajustes.module */
          "cBzK")).then(function (m) {
            return m.AjustesModule;
          });
        }
      }, {
        path: "tiendas",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tiendas-tiendas-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tiendas-tiendas-module")]).then(__webpack_require__.bind(null,
          /*! ./tiendas/tiendas.module */
          "6Q0E")).then(function (m) {
            return m.TiendasModule;
          });
        }
      }, {
        path: "configuracion",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | configuracion-configuracion-module */
          [__webpack_require__.e("common"), __webpack_require__.e("configuracion-configuracion-module")]).then(__webpack_require__.bind(null,
          /*! ./configuracion/configuracion.module */
          "eMkW")).then(function (m) {
            return m.ConfiguracionModule;
          });
        }
      }, {
        path: "reportes",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | reportes-reportes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("reportes-reportes-module")]).then(__webpack_require__.bind(null,
          /*! ./reportes/reportes.module */
          "+yQv")).then(function (m) {
            return m.ReportesModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map