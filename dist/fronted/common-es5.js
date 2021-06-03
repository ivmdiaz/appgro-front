(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "9BZc":
    /*!***********************************************************!*\
      !*** ./src/app/commons/models/registro-peticion.model.ts ***!
      \***********************************************************/

    /*! exports provided: RegistroPeticion */

    /***/
    function BZc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPeticion", function () {
        return RegistroPeticion;
      });

      var RegistroPeticion = function RegistroPeticion(init) {
        _classCallCheck(this, RegistroPeticion);

        Object.assign(this, init);
      };
      /***/

    },

    /***/
    "BwLU":
    /*!*************************************************************!*\
      !*** ./src/app/commons/services/parametrizacion.service.ts ***!
      \*************************************************************/

    /*! exports provided: ParametrizacionService */

    /***/
    function BwLU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParametrizacionService", function () {
        return ParametrizacionService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ParametrizacionService = /*#__PURE__*/function () {
        function ParametrizacionService(http) {
          _classCallCheck(this, ParametrizacionService);

          this.http = http;
        }

        _createClass(ParametrizacionService, [{
          key: "obtenerDepartamentos",
          value: function obtenerDepartamentos(idPais) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiParametrizacionUrl, "/obtenerDepartamentosPorPais/").concat(idPais);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (entidad) {
              //Si arrojo un estado fallido retornamos error
              if (!entidad || !entidad.estado || entidad.estado.exitoso !== true) {
                throw new Error(entidad.estado.mensaje);
              }

              return entidad.entidad;
            }));
          }
        }, {
          key: "obtenerCiudades",
          value: function obtenerCiudades(idDepartamento) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiParametrizacionUrl, "/obtenerCiudadesPorDepartamento/").concat(idDepartamento);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (entidad) {
              //Si arrojo un estado fallido retornamos error
              if (!entidad || !entidad.estado || entidad.estado.exitoso !== true) {
                throw new Error(entidad.estado.mensaje);
              }

              return entidad.entidad;
            }));
          }
        }, {
          key: "obtenerCategorias",
          value: function obtenerCategorias() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiCategoriaUrl, "/obtenerCategorias");
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || !data.estado || data.estado.exitoso !== true) {
                throw new Error(data.estado.mensaje);
              }

              return data.entidad;
            }));
          }
        }, {
          key: "obtenerEtiquetas",
          value: function obtenerEtiquetas() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEtiquetaUrl, "/obtenerEtiquetas");
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || !data.estado || data.estado.exitoso !== true) {
                throw new Error(data.estado.mensaje);
              }

              return data.entidad;
            }));
          }
        }, {
          key: "obtenerTarifas",
          value: function obtenerTarifas() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiProveedorUrl, "/obtenerTarifas");
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || !data.estado || data.estado.exitoso !== true) {
                throw new Error(data.estado.mensaje);
              }

              return data.entidad;
            }));
          }
        }, {
          key: "guardarEtiqueta",
          value: function guardarEtiqueta(etiqueta, id) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEtiquetaUrl, "/guardar");
            return this.http.put(url, {
              id: id,
              nombre: etiqueta
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || data.exitoso !== true) {
                throw new Error(data.mensaje);
              }

              return data;
            }));
          }
        }, {
          key: "guardarCategoria",
          value: function guardarCategoria(categoria) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiCategoriaUrl, "/guardar");
            return this.http.put(url, categoria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || data.exitoso !== true) {
                throw new Error(data.mensaje);
              }

              return data;
            }));
          }
        }, {
          key: "guardarTarifas",
          value: function guardarTarifas(peticion) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiProveedorUrl, "/guardarTarifas");
            return this.http.post(url, {
              tarifas: peticion
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || data.exitoso !== true) {
                throw new Error(data.mensaje);
              }

              return data;
            }));
          }
        }, {
          key: "eliminarEtiqueta",
          value: function eliminarEtiqueta(idEtiqueta) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEtiquetaUrl, "/eliminar/").concat(idEtiqueta);
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || data.exitoso !== true) {
                throw new Error(data.mensaje);
              }

              return data;
            }));
          }
        }, {
          key: "eliminarCategoria",
          value: function eliminarCategoria(idCategoria) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiCategoriaUrl, "/eliminar/").concat(idCategoria);
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              //Si arrojo un estado fallido retornamos error
              if (!data || data.exitoso !== true) {
                throw new Error(data.mensaje);
              }

              return data;
            }));
          }
        }]);

        return ParametrizacionService;
      }();

      ParametrizacionService.ɵfac = function ParametrizacionService_Factory(t) {
        return new (t || ParametrizacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ParametrizacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ParametrizacionService,
        factory: ParametrizacionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "G0R+":
    /*!****************************************************************!*\
      !*** ./src/app/commons/validators/required-match.validator.ts ***!
      \****************************************************************/

    /*! exports provided: RequiredMatch */

    /***/
    function G0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequiredMatch", function () {
        return RequiredMatch;
      });

      function RequiredMatch(control) {
        var selection = control.value;

        if (typeof selection === 'string') {
          return {
            incorrect: true
          };
        }

        return null;
      }
      /***/

    },

    /***/
    "JizY":
    /*!************************************************************!*\
      !*** ./src/app/commons/validators/must-match.validator.ts ***!
      \************************************************************/

    /*! exports provided: MustMatch */

    /***/
    function JizY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      }); // custom validator to check that two fields match


      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "cIYP":
    /*!***********************************************!*\
      !*** ./src/app/commons/helpers/auth.guard.ts ***!
      \***********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function cIYP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "E16q");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/home'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ixKJ":
    /*!***************************************************!*\
      !*** ./src/app/commons/helpers/auth.guard-prv.ts ***!
      \***************************************************/

    /*! exports provided: AuthGuardPrv */

    /***/
    function ixKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardPrv", function () {
        return AuthGuardPrv;
      });
      /* harmony import */


      var _constantes_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constantes-util */
      "5QtY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authentication.service */
      "E16q");

      var AuthGuardPrv = /*#__PURE__*/function () {
        function AuthGuardPrv(router, authenticationService) {
          _classCallCheck(this, AuthGuardPrv);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuardPrv, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;
            var perfiles = this.authenticationService.perfiles;

            if (currentUser && perfiles && perfiles.indexOf(_constantes_util__WEBPACK_IMPORTED_MODULE_0__["ConstantesUtil"].PERFIL_PROVEEDOR) !== -1) {
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/home'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuardPrv;
      }();

      AuthGuardPrv.ɵfac = function AuthGuardPrv_Factory(t) {
        return new (t || AuthGuardPrv)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      AuthGuardPrv.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuardPrv,
        factory: AuthGuardPrv.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pk//":
    /*!***************************************************!*\
      !*** ./src/app/commons/helpers/auth.guard-adm.ts ***!
      \***************************************************/

    /*! exports provided: AuthGuardAdm */

    /***/
    function pk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardAdm", function () {
        return AuthGuardAdm;
      });
      /* harmony import */


      var _constantes_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constantes-util */
      "5QtY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authentication.service */
      "E16q");

      var AuthGuardAdm = /*#__PURE__*/function () {
        function AuthGuardAdm(router, authenticationService) {
          _classCallCheck(this, AuthGuardAdm);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuardAdm, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;
            var perfiles = this.authenticationService.perfiles;

            if (currentUser && perfiles && perfiles.indexOf(_constantes_util__WEBPACK_IMPORTED_MODULE_0__["ConstantesUtil"].PERFIL_ADMINISTRADOR) !== -1) {
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/home'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuardAdm;
      }();

      AuthGuardAdm.ɵfac = function AuthGuardAdm_Factory(t) {
        return new (t || AuthGuardAdm)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      AuthGuardAdm.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuardAdm,
        factory: AuthGuardAdm.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map