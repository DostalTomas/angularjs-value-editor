(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@kpsys/angularjs-register"), require("angular"), require("luxon"), require("@kpsys/angular-ui-bootstrap"), require("angular-sanitize"), require("ui-select"), require("@kpsys/angularjs-date-parser"), require("@kpsys/angularjs-bootstrap-datetimepicker"), require("angular-ui-ace"), require("@kpsys/angularjs-histogram-slider"));
	else if(typeof define === 'function' && define.amd)
		define(["@kpsys/angularjs-register", "angular", "luxon", "@kpsys/angular-ui-bootstrap", "angular-sanitize", "ui-select", "@kpsys/angularjs-date-parser", "@kpsys/angularjs-bootstrap-datetimepicker", "angular-ui-ace", "@kpsys/angularjs-histogram-slider"], factory);
	else if(typeof exports === 'object')
		exports["angularjs-value-editor"] = factory(require("@kpsys/angularjs-register"), require("angular"), require("luxon"), require("@kpsys/angular-ui-bootstrap"), require("angular-sanitize"), require("ui-select"), require("@kpsys/angularjs-date-parser"), require("@kpsys/angularjs-bootstrap-datetimepicker"), require("angular-ui-ace"), require("@kpsys/angularjs-histogram-slider"));
	else
		root["angularjs-value-editor"] = factory(root["@kpsys/angularjs-register"], root["angular"], root["luxon"], root["@kpsys/angular-ui-bootstrap"], root["angular-sanitize"], root["ui-select"], root["@kpsys/angularjs-date-parser"], root["@kpsys/angularjs-bootstrap-datetimepicker"], root["angular-ui-ace"], root["@kpsys/angularjs-histogram-slider"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__37__, __WEBPACK_EXTERNAL_MODULE__55__, __WEBPACK_EXTERNAL_MODULE__127__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var angular = __webpack_require__(5);

var ng_model_connector_1 = __webpack_require__(10);

var uuid_generator_1 = __webpack_require__(8);

var equals_1 = __webpack_require__(11);

var ValueEditorComponentController = /*#__PURE__*/function (_ng_model_connector_) {
  ValueEditorComponentController.$inject = ["aliasesService"];

  _inherits(ValueEditorComponentController, _ng_model_connector_);

  var _super = _createSuper(ValueEditorComponentController);

  /*@ngInject*/
  function ValueEditorComponentController(aliasesService) {
    var _this;

    _classCallCheck(this, ValueEditorComponentController);

    _this = _super.call(this);
    _this.aliasesService = aliasesService;
    _this.visible = true;
    return _this;
  }

  _createClass(ValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(ValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.previousOptions = angular.copy(this.options);

      if (!this.name) {
        this.name = this.generateEditorName();
      }
    }
    /**
     * Manually check options update. $onChanges is not applicable, because we need deep equals, which $onChanges does not perform.
     */

  }, {
    key: "$doCheck",
    value: function $doCheck() {
      if (!equals_1.default(this.options, this.previousOptions)) {
        this.valueEditorInstance.changeOptions(this.options, this.previousOptions);
        this.previousOptions = angular.copy(this.options);
      }
    }
  }, {
    key: "registerValueEditor",
    value: function registerValueEditor(editorController) {
      this.valueEditorInstance = editorController;
    }
  }, {
    key: "resolveAlias",
    value: function resolveAlias() {
      return this.aliasesService.isAlias(this.type) ? this.aliasesService.getAlias(this.type) : this.type;
    }
  }, {
    key: "generateEditorName",
    value: function generateEditorName() {
      return this.editorId || "".concat(this.type, "_").concat(uuid_generator_1.generateUuid());
    }
  }]);

  return ValueEditorComponentController;
}(ng_model_connector_1.default);

exports.ValueEditorComponentController = ValueEditorComponentController;
/**
 * @ngdoc component
 * @name kpValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 *
 * @param {string} editorId Input id.
 * @param {string} name Input name.
 * @param {string} placeholder Placeholder.
 * @param {string} type ValueEditor type. <.
 * @param {boolean} disabled If input is disabled. <.
 * @param {boolean} visible If input is visible. <.
 * @param {ValueEditorValidations} validations ValueEditor validations. <.
 * @param {ValueEditorOptions} options ValueEditor options. Type depends on ValueEditor type.
 *
 * @description
 * Generic value editor depends on type:
 *
 * - `text`, `textarea`, `rich-textarea`: {@link component:textValueEditor}
 * - `number`: {@link component:numberValueEditor}
 */

var ValueEditorComponent = function ValueEditorComponent() {
  _classCallCheck(this, ValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    formController: '?^^form'
  };
  this.bindings = {
    editorId: '@?',
    name: '@?',
    placeholder: '@?',
    type: '<',
    disabled: '<?',
    visible: '<?',
    validations: '<?',
    options: '<?'
  };
  this.controller = ValueEditorComponentController;
  this.templateUrl = __webpack_require__(26);
};

exports.default = ValueEditorComponent;
ValueEditorComponent.componentName = 'kpValueEditor';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var aliases_service_1 = __webpack_require__(7);
/**
 * @ngdoc provider
 * @name AbstractValueEditorConfigurationProvider
 * @module angularjs-value-editor
 *
 * @template CONFIGURATION
 *
 * @description
 * Abstract provider for configuring editors options.
 *
 * Generic parameter `CONFIGURATION` is current value editor options type.
 */


var AbstractValueEditorConfigurationProvider = /*#__PURE__*/function () {
  function AbstractValueEditorConfigurationProvider(aliasesServiceProvider, defaultConfiguration) {
    _classCallCheck(this, AbstractValueEditorConfigurationProvider);

    this.aliasesServiceProvider = aliasesServiceProvider;
    this.defaultConfiguration = defaultConfiguration;
    this.currentConfiguration = new Map();
    this.currentConfiguration.set(aliases_service_1.DEFAULT_ALIAS, defaultConfiguration);
  }
  /**
   * @ngdoc method
   * @name AbstractValueEditorConfigurationProvider#forAlias
   * @module angularjs-value-editor
   *
   * @param {CustomValueEditorType} alias Alias
   *
   * @returns {ConfigurationBuilder<CONFIGURATION>} Builder
   *
   * @description
   * This method is used for aliasing configuration.
   */


  _createClass(AbstractValueEditorConfigurationProvider, [{
    key: "forAlias",
    value: function forAlias(alias) {
      var fallbackedAlias = alias;

      if (!this.aliasesServiceProvider.isAlias(alias)) {
        fallbackedAlias = aliases_service_1.DEFAULT_ALIAS;
      }

      return {
        setConfiguration: this.setAliasedConfiguration.bind(this, alias),
        getConfiguration: this.getAliasedConfiguration.bind(this, fallbackedAlias)
      };
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorConfigurationProvider#getDefaults
     * @module angularjs-value-editor
     *
     * @returns {DefaultOptions<CONFIGURATION>} Default value editor options.
     *
     * @description
     * Returns default value editor options.
     *
     */

  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return Object.assign({}, this.defaultConfiguration);
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorConfigurationProvider#getConfiguration
     * @module angularjs-value-editor
     *
     * @returns {DefaultOptions<CONFIGURATION>} Current value editor options.
     *
     * @description
     * Returns current value editor options.
     */

  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      return this.getAliasedConfiguration(aliases_service_1.DEFAULT_ALIAS);
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorConfigurationProvider#setConfiguration
     * @module angularjs-value-editor
     *
     * @param {Partial<CONFIGURATION>} configuration New value editor configuration.
     *
     * @returns {DefaultOptions<CONFIGURATION>} Complete new value editor configuration.
     *
     * @description
     * Sets new value editor configuration.
     */

  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      return this.setAliasedConfiguration(aliases_service_1.DEFAULT_ALIAS, configuration);
    }
  }, {
    key: "$get",
    value: function $get() {
      return this;
    }
  }, {
    key: "setAliasedConfiguration",
    value: function setAliasedConfiguration(alias, configuration) {
      this.currentConfiguration.set(alias, Object.assign({}, this.currentConfiguration.get(alias), configuration));
      return this.currentConfiguration.get(alias);
    }
  }, {
    key: "getAliasedConfiguration",
    value: function getAliasedConfiguration(alias) {
      return Object.assign({}, this.currentConfiguration.get(alias));
    }
  }]);

  return AbstractValueEditorConfigurationProvider;
}();

exports.default = AbstractValueEditorConfigurationProvider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ng_model_connector_1 = __webpack_require__(10);

var angular = __webpack_require__(5);

var equals_1 = __webpack_require__(11);

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var aliases_service_1 = __webpack_require__(7);
/**
 * Abstract base class for general value-editor features.
 *
 * @template OPTIONS
 */


var AbstractValueEditor = /*#__PURE__*/function (_ng_model_connector_) {
  _inherits(AbstractValueEditor, _ng_model_connector_);

  var _super = _createSuper(AbstractValueEditor);

  function AbstractValueEditor(configurationService, localizationService) {
    var _this;

    _classCallCheck(this, AbstractValueEditor);

    _this = _super.call(this);
    _this.configurationService = configurationService;
    _this.localizationService = localizationService;
    _this.options = angular.merge({}, _this.configurationService.forAlias(aliases_service_1.DEFAULT_ALIAS).getConfiguration());
    return _this;
  }

  _createClass(AbstractValueEditor, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AbstractValueEditor.prototype), "$onInit", this).call(this);

      this.valueEditorController.registerValueEditor(this);
      this.options = angular.merge({}, this.configurationService.forAlias(this.valueEditorController.type).getConfiguration(), this.valueEditorController.options);
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      // If initial options are not defaults, trigger options change.
      if (!equals_1.default(this.options, this.configurationService.forAlias(this.valueEditorController.type).getConfiguration())) {
        this.onOptionsChange(this.options, undefined, this.whichPropertiesIsNotEqual(this.options, this.configurationService.forAlias(this.valueEditorController.type).getConfiguration()));
      }
    }
    /**
     * This method changes options.
     * @param {OPTIONS} newOptions
     * @param {OPTIONS} oldOptions
     */

  }, {
    key: "changeOptions",
    value: function changeOptions(newOptions, oldOptions) {
      this.options = newOptions;
      this.onOptionsChange(newOptions, oldOptions, this.whichPropertiesIsNotEqual(newOptions, oldOptions));
    }
    /**
     * Simplifies localization. No need to call localization service.
     * @param {string} code Message code.
     * @returns {string} Localized message.
     */

  }, {
    key: "localize",
    value: function localize(code) {
      if (this.localizationService) {
        return this.localizationService.getLocalization(code);
      } else {
        /* istanbul ignore else */
        throw new Error('localizationService is not set');
      }
    }
  }, {
    key: "whichPropertiesIsNotEqual",
    value: function whichPropertiesIsNotEqual(options1, options2) {
      var changeObject = {};
      var keys = new Set(); // tslint:disable-next-line:no-unused-expression

      options1 && Object.keys(options1).forEach(keys.add.bind(keys)); // tslint:disable-next-line:no-unused-expression

      options2 && Object.keys(options2).forEach(keys.add.bind(keys));
      Array.from(keys).forEach(function (key) {
        return changeObject[key] = !(Object.prototype.hasOwnProperty.call(options1, key) && Object.prototype.hasOwnProperty.call(options2, key) && options1[key] === options2[key]);
      });
      return changeObject;
    }
  }]);

  return AbstractValueEditor;
}(ng_model_connector_1.default);

exports.default = AbstractValueEditor;
AbstractValueEditor.$inject = ['emptyConfigurationService'];

var EmptyConfigurationService = /*#__PURE__*/function (_abstract_value_edito) {
  EmptyConfigurationService.$inject = ["aliasesServiceProvider"];

  _inherits(EmptyConfigurationService, _abstract_value_edito);

  var _super2 = _createSuper(EmptyConfigurationService);

  /*@ngInject*/
  function EmptyConfigurationService(aliasesServiceProvider) {
    _classCallCheck(this, EmptyConfigurationService);

    return _super2.call(this, aliasesServiceProvider, {});
  }

  return EmptyConfigurationService;
}(abstract_value_editor_configuration_provider_1.default);

exports.EmptyConfigurationService = EmptyConfigurationService;
EmptyConfigurationService.serviceName = 'emptyConfigurationService';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc provider
 * @name AbstractValueEditorLocalizationProvider
 * @module angularjs-value-editor
 *
 * @abstract
 *
 * @description
 * Generic provider for value editor localizations.
 */

var AbstractValueEditorLocalizationProvider = /*#__PURE__*/function () {
  function AbstractValueEditorLocalizationProvider(defaultLocalizations) {
    _classCallCheck(this, AbstractValueEditorLocalizationProvider);

    this.localizations = Object.assign({}, defaultLocalizations);
  }
  /**
   * @ngdoc method
   * @name AbstractValueEditorLocalizationProvider#setLocalization
   * @module angularjs-value-editor
   *
   * @param {string} code Message code.
   * @param {string} message Localization message.
   *
   * @description
   * Sets one localization message to given parameter.
   */


  _createClass(AbstractValueEditorLocalizationProvider, [{
    key: "setLocalization",
    value: function setLocalization(code, message) {
      this.localizations[code] = message;
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorLocalizationProvider#setAll
     * @module angularjs-value-editor
     *
     * @param {ValueEditorLocalizations} localizations
     *
     * @description
     * Sets localizations at once.
     */

  }, {
    key: "setAll",
    value: function setAll(localizations) {
      this.localizations = Object.assign({}, localizations);
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorLocalizationProvider#getLocalization
     * @module angularjs-value-editor
     *
     * @param {string} code Wanted localization code.
     *
     * @returns {string} Localization message.
     *
     * @description
     * Returns specific localization message.
     */

  }, {
    key: "getLocalization",
    value: function getLocalization(code) {
      return this.localizations[code];
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorLocalizationProvider#getAll
     * @module angularjs-value-editor
     *
     * @returns {ValueEditorLocalizations} All messages.
     *
     * @description
     * Returns all localization messages.
     */

  }, {
    key: "getAll",
    value: function getAll() {
      return Object.assign({}, this.localizations);
    }
  }, {
    key: "$get",
    value: function $get() {
      return this;
    }
  }]);

  return AbstractValueEditorLocalizationProvider;
}();

exports.default = AbstractValueEditorLocalizationProvider;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_1 = __webpack_require__(3);

var uuid_generator_1 = __webpack_require__(8);
/**
 * Abstract editor class which contains some helpers for managing and simplify template parsing.
 */


var AbstractTemplateValueEditor = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(AbstractTemplateValueEditor, _abstract_value_edito);

  var _super = _createSuper(AbstractTemplateValueEditor);

  function AbstractTemplateValueEditor(baseTemplateUrl, templatePrefix, $interpolate, $templateCache, configurationService, localizationService) {
    var _this;

    _classCallCheck(this, AbstractTemplateValueEditor);

    _this = _super.call(this, configurationService, localizationService);
    _this.baseTemplateUrl = baseTemplateUrl;
    _this.templatePrefix = templatePrefix;
    _this.$interpolate = $interpolate;
    _this.$templateCache = $templateCache;
    _this.configurationService = configurationService;
    _this.localizationService = localizationService;
    _this.uuid = uuid_generator_1.generateUuid();
    return _this;
  }

  _createClass(AbstractTemplateValueEditor, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AbstractTemplateValueEditor.prototype), "$onInit", this).call(this);

      this.updateTemplate();
    }
    /**
     * Updates template
     */

  }, {
    key: "updateTemplate",
    value: function updateTemplate() {
      this.$templateCache.remove(this.templateUrl);
      var newTemplateName = "".concat(this.templatePrefix, "_").concat(this.uuid, "_").concat(new Date().valueOf());
      var template = this.$templateCache.get(this.baseTemplateUrl);
      var interpolated = this.$interpolate(template)(_objectSpread({}, this.getTemplateModel()));
      this.$templateCache.put(newTemplateName, interpolated);
      this.templateUrl = newTemplateName;
    }
  }]);

  return AbstractTemplateValueEditor;
}(abstract_value_editor_1.default);

exports.default = AbstractTemplateValueEditor;
/**
 * Pre-defined component template.
 * @type {string}
 */

AbstractTemplateValueEditor.COMPONENT_TEMPLATE = '<ng-include src="$ctrl.templateUrl"></ng-include>';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ALIAS = 'DEFAULT';

var AliasesServiceProviderImpl = /*#__PURE__*/function () {
  AliasesServiceProviderImpl.$inject = ["$injector", "$logProvider", "$windowProvider"];

  /*@ngInject*/
  function AliasesServiceProviderImpl($injector, $logProvider, $windowProvider) {
    _classCallCheck(this, AliasesServiceProviderImpl);

    this.aliases = {};
    var $window = $injector.instantiate($windowProvider.$get);
    this.$log = $injector.instantiate($logProvider.$get, {
      $window: $window
    });
  }

  _createClass(AliasesServiceProviderImpl, [{
    key: "addAlias",
    value: function addAlias(aliasTypeName, editorType) {
      if (this.aliases[aliasTypeName]) {
        throw new Error("Alias '".concat(aliasTypeName, "' is already defined"));
      }

      this.aliases[aliasTypeName] = editorType;
    }
  }, {
    key: "removeAlias",
    value: function removeAlias(aliasTypeName) {
      if (!this.aliases[aliasTypeName]) {
        this.$log.warn("Alias '".concat(aliasTypeName, "' not found."));
      }

      delete this.aliases[aliasTypeName];
    }
  }, {
    key: "getAlias",
    value: function getAlias(alias) {
      if (!this.aliases[alias]) {
        throw new Error("Alias '".concat(alias, "' not found."));
      }

      return this.aliases[alias];
    }
  }, {
    key: "isAlias",
    value: function isAlias(type) {
      return !!this.aliases[type];
    }
  }, {
    key: "$get",
    value: function $get() {
      return {
        getAlias: this.getAlias.bind(this),
        isAlias: this.isAlias.bind(this)
      };
    }
  }]);

  return AliasesServiceProviderImpl;
}();

exports.AliasesServiceProviderImpl = AliasesServiceProviderImpl;
AliasesServiceProviderImpl.providerName = 'aliasesService';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generates random pseudo-UUID.
 */

function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

exports.generateUuid = generateUuid;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var aliases_service_1 = __webpack_require__(7);
/**
 * @ngdoc module
 * @name angularjs-value-editor.aliases
 * @module angularjs-value-editor.aliases
 *
 * @description
 * Support for editor types aliasing
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.aliases').provider(aliases_service_1.AliasesServiceProviderImpl.providerName, aliases_service_1.AliasesServiceProviderImpl).name();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Connects outer required ngModel with inner ngModel
 */

var NgModelConnector = /*#__PURE__*/function () {
  function NgModelConnector() {
    _classCallCheck(this, NgModelConnector);
  }

  _createClass(NgModelConnector, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      this.ngModelController.$render = function () {
        _this.modelValue = _this.ngModelController.$viewValue;
      };
    }
  }, {
    key: "model",
    set: function set(value) {
      this.modelValue = value;
      this.ngModelController.$setViewValue(this.modelValue);
    },
    get: function get() {
      return this.modelValue;
    }
  }]);

  return NgModelConnector;
}();

exports.default = NgModelConnector;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// tested by angular team

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var angular = __webpack_require__(5);

function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}

function isWindow(obj) {
  return obj && obj.window === obj;
}

function simpleCompare(a, b) {
  return a === b || a !== a && b !== b;
}

function createMap() {
  return Object.create(null);
}
/**
 * Modified `angular.equals` function for support function check also.
 *
 * @param {any} o1
 * @param {any} o2
 *
 * @returns {boolean}
 */


function customEquals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false; // eslint-disable-next-line no-self-compare

  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN

  var t1 = _typeof(o1);

  var t2 = _typeof(o2);

  var length;
  var key;
  var keySet;

  if (t1 === t2 && t1 === 'object') {
    if (angular.isArray(o1)) {
      if (!angular.isArray(o2)) return false; // tslint:disable-next-line:no-conditional-assignment

      if ((length = o1.length) === o2.length) {
        for (key = 0; key < length; key++) {
          if (!customEquals(o1[key], o2[key])) return false;
        }

        return true;
      }
    } else if (angular.isDate(o1)) {
      if (!angular.isDate(o2)) return false;
      return simpleCompare(o1.getTime(), o2.getTime());
    } else if (isRegExp(o1)) {
      if (!isRegExp(o2)) return false;
      return o1.toString() === o2.toString();
    } else {
      if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || angular.isArray(o2) || angular.isDate(o2) || isRegExp(o2)) return false;
      keySet = createMap();

      for (key in o1) {
        if (key.charAt(0) === '$'
        /* || angular.isFunction(o1[key])*/
        ) continue;
        if (!customEquals(o1[key], o2[key])) return false;
        keySet[key] = true;
      }

      for (key in o2) {
        if (!(key in keySet) && key.charAt(0) !== '$' && angular.isDefined(o2[key])
        /* &&
        !angular.isFunction(o2[key])*/
        ) return false;
      }

      return true;
    }
  }

  return false;
}

exports.default = customEquals;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getFormModel(form) {
  var model = {};

  var _iterator = _createForOfIteratorHelper(form.$getControls()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var control = _step.value;

      if (isNgModelController(control)) {
        if (control.$name) {
          model[control.$name] = control.$modelValue;
        }
      }

      if (isFormController(control)) {
        Object.assign(model, getFormModel(control));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return model;
}

exports.getFormModel = getFormModel;

function isNgModelController(controller) {
  return typeof controller.$setTouched === 'function';
}

function isFormController(controller) {
  return typeof controller.$getControls === 'function';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(17);

__webpack_require__(18);

var angularjs_register_1 = __webpack_require__(0);

var aliases_module_1 = __webpack_require__(9);

var acceptable_value_editor_module_1 = __webpack_require__(19);

var boolean_value_editor_module_1 = __webpack_require__(30);

var date_value_editor_module_1 = __webpack_require__(35);

var hidden_value_editor_module_1 = __webpack_require__(42);

var html_value_editor_module_1 = __webpack_require__(45);

var number_value_editor_module_1 = __webpack_require__(49);

var text_value_editor_module_1 = __webpack_require__(54);

var year_value_editor_module_1 = __webpack_require__(60);

var card_number_value_editor_module_1 = __webpack_require__(63);

var index_selection_value_editor_module_1 = __webpack_require__(68);

var autocomplete_value_editor_module_1 = __webpack_require__(72);

var password_value_editor_module_1 = __webpack_require__(77);

var signature_value_editor_module_1 = __webpack_require__(84);

var access_number_value_editor_module_1 = __webpack_require__(89);

var number_range_value_editor_module_1 = __webpack_require__(94);

var exemplar_bar_code_value_editor_module_1 = __webpack_require__(101);

var acceptable_root_value_editor_module_1 = __webpack_require__(103);

var search_text_value_editor_module_1 = __webpack_require__(113);

var searchable_value_editor_module_1 = __webpack_require__(117);

var velocity_template_value_editor_module_1 = __webpack_require__(123);

var range_value_editor_module_1 = __webpack_require__(125);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name loadingSpinnerTemplateUrl
 * @module angularjs-value-editor
 *
 * @description
 * AngularJS template url with SVG spinner.
 *
 * It can be used for waiting for async operations, etc...
 */
// tslint:disable-next-line:no-var-requires


var LOADING_SPINNER_TPL_URL = __webpack_require__(132);
/**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */


exports.default = angularjs_register_1.default('angularjs-value-editor', ['ui.bootstrap', aliases_module_1.default, acceptable_value_editor_module_1.default, boolean_value_editor_module_1.default, date_value_editor_module_1.default, hidden_value_editor_module_1.default, html_value_editor_module_1.default, number_value_editor_module_1.default, text_value_editor_module_1.default, year_value_editor_module_1.default, card_number_value_editor_module_1.default, index_selection_value_editor_module_1.default, autocomplete_value_editor_module_1.default, password_value_editor_module_1.default, signature_value_editor_module_1.default, access_number_value_editor_module_1.default, number_range_value_editor_module_1.default, exemplar_bar_code_value_editor_module_1.default, acceptable_root_value_editor_module_1.default, search_text_value_editor_module_1.default, searchable_value_editor_module_1.default, velocity_template_value_editor_module_1.default, range_value_editor_module_1.default]).constant('loadingSpinnerTemplateUrl', LOADING_SPINNER_TPL_URL).provider(abstract_value_editor_1.EmptyConfigurationService.serviceName, abstract_value_editor_1.EmptyConfigurationService).component(value_editor_component_1.default.componentName, value_editor_component_1.default).name();
/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var aliases_module_1 = __webpack_require__(9);

__webpack_require__(20);

__webpack_require__(21);

var uiSelect_decorator_1 = __webpack_require__(22);

var acceptable_value_editor_localizations_provider_1 = __webpack_require__(23);

var acceptable_value_editor_component_1 = __webpack_require__(24);

var acceptable_value_editor_configuration_provider_1 = __webpack_require__(29);
/**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * Acceptable value editor module.
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.acceptable', [aliases_module_1.default, 'ngSanitize', 'ui.select']).decorator(uiSelect_decorator_1.default.decoratorName, uiSelect_decorator_1.default).constant('acceptableValueEditorDefaultOptions', acceptable_value_editor_configuration_provider_1.ACCEPTABLE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('acceptableValueEditorDefaultLocalizations', acceptable_value_editor_localizations_provider_1.ACCEPTABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(acceptable_value_editor_configuration_provider_1.default.providerName, acceptable_value_editor_configuration_provider_1.default).provider(acceptable_value_editor_localizations_provider_1.default.providerName, acceptable_value_editor_localizations_provider_1.default).component(acceptable_value_editor_component_1.default.componentName, acceptable_value_editor_component_1.default).name();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__21__;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


uiSelectDecorator.$inject = ["$delegate", "acceptableValueEditorLocalizationsService"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc service
 * @name uiSelectDecorator
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * This decorator modifies placeholder behaviour in multiselectable ui-select. In original, placeholder disappears if some values is selected,
 * but empty space under items is confusing, so in terms of UX, it is better to leave placeholder visible always.
 * If all items are selected, it shows `allSelected` localization from {@link AcceptableValueEditorLocalizations}
 */

/*@ngInject*/

function uiSelectDecorator($delegate, acceptableValueEditorLocalizationsService) {
  var directive = $delegate[0];
  var link = directive.link;
  directive.require = ['^uiSelect', '^ngModel', 'uiSelectMultiple'];

  $delegate[0].compile = function () {
    return function ($scope, $element, $attrs, controllers) {
      link.apply(this, arguments);
      var $select = controllers[0];
      var uiSelectMultipleDirectiveController = controllers[2];

      uiSelectMultipleDirectiveController.getPlaceholder = function () {
        if ($select.items.length === 0) {
          return acceptableValueEditorLocalizationsService.getLocalization('allSelected');
        }

        return $select.placeholder;
      };
    };
  };

  return $delegate;
}

exports.default = uiSelectDecorator;
uiSelectDecorator.decoratorName = 'uiSelectMultipleDirective';

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name acceptableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * See {@link acceptableValueEditorLocalizationsService}
 */


var AcceptableValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorLocalizationsProvider.$inject = ["acceptableValueEditorDefaultLocalizations"];

  _inherits(AcceptableValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorLocalizationsProvider);

  /*@ngInject*/
  function AcceptableValueEditorLocalizationsProvider(acceptableValueEditorDefaultLocalizations) {
    _classCallCheck(this, AcceptableValueEditorLocalizationsProvider);

    return _super.call(this, acceptableValueEditorDefaultLocalizations);
  }

  return AcceptableValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AcceptableValueEditorLocalizationsProvider;
AcceptableValueEditorLocalizationsProvider.providerName = 'acceptableValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name acceptableValueEditorDefaultLocalizations
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * ```
 * {
 *     allSelected: 'All selected',
 *     more: 'More',
 *     less: 'Less',
 *     selectAll: 'Select all',
 *     deselectAll: 'Deselect all'
 * }
 * ```
 */

exports.ACCEPTABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  allSelected: 'All selected',
  more: 'More',
  less: 'Less',
  selectAll: 'Select all',
  deselectAll: 'Deselect all'
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(25);

var value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.acceptableValueEditor';

var AcceptableValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  AcceptableValueEditorComponentController.$inject = ["$interpolate", "$templateCache", "acceptableValueEditorLocalizationsService", "acceptableValueEditorConfigurationService"];

  _inherits(AcceptableValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(AcceptableValueEditorComponentController);

  /*@ngInject*/
  function AcceptableValueEditorComponentController($interpolate, $templateCache, acceptableValueEditorLocalizationsService, acceptableValueEditorConfigurationService) {
    var _this;

    _classCallCheck(this, AcceptableValueEditorComponentController);

    _this = _super.call(this, AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, acceptableValueEditorConfigurationService, acceptableValueEditorLocalizationsService);
    _this.acceptableValueEditorLocalizationsService = acceptableValueEditorLocalizationsService;
    _this.acceptableValueEditorConfigurationService = acceptableValueEditorConfigurationService;
    _this.uiSelectComparator = _this.uiSelectComparator.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AcceptableValueEditorComponentController, [{
    key: "hasMore",
    value: function hasMore() {
      return this.options.showFirstCount && this.getMoreCount() > 0;
    }
  }, {
    key: "getAcceptableValues",
    value: function getAcceptableValues() {
      var _this2 = this;

      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.showFirstCount;
      var values = this.options.acceptableValues;

      if (this.options.selectedFirst) {
        var selected = this.options.acceptableValues.filter(function (value) {
          return _this2.includes(_this2.adjustToArrayIfNot(_this2.model), value);
        }).sort(this.options.sortComparator);
        var unSelected = this.options.acceptableValues.filter(function (value) {
          return !_this2.includes(_this2.adjustToArrayIfNot(_this2.model), value);
        }).sort(this.options.sortComparator);
        values = selected.concat(unSelected);
      } else {
        values.sort(this.options.sortComparator);
      }

      if (count) {
        return values.slice(from, from + count);
      }

      return values;
    }
  }, {
    key: "checkboxModel",
    value: function checkboxModel(item) {
      var _this3 = this;

      return function () {
        return _this3.isChecked(item);
      };
    }
  }, {
    key: "updateModel",
    value: function updateModel(item) {
      var newModel = this.adjustToArrayIfNot(this.model).slice();

      if (this.isChecked(item)) {
        var indexOfRemovingItem = this.getIndexOfItemInModelUsingEqualityComparator(item);
        newModel.splice(indexOfRemovingItem, 1);
      } else {
        newModel.push(item);
      }

      this.model = newModel;
    }
  }, {
    key: "uiSelectComparator",
    value: function uiSelectComparator(e1, e2) {
      return this.options.sortComparator ? this.options.sortComparator(e1.value, e2.value) : 0;
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whichOptionIsChanged) {
      if (whichOptionIsChanged.optionsTemplate || whichOptionIsChanged.singleSelectedValueTemplate || whichOptionIsChanged.multiSelectedValueTemplate || whichOptionIsChanged.searchable || whichOptionIsChanged.multiselectable || whichOptionIsChanged.sortComparator || whichOptionIsChanged.reorderable || whichOptionIsChanged.acceptableValues || whichOptionIsChanged.switchToCheckboxesThreshold || whichOptionIsChanged.selectedFirst) {
        this.baseTemplateUrl = this.checkboxesMode() ? AcceptableValueEditorComponentController.CHECKBOXES_TEMPLATE_URL : AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL;
        this.updateTemplate();
      }

      if (whichOptionIsChanged.selectedFirst) {
        this.options.acceptableValues = this.options.acceptableValues.slice();
      }

      if ((whichOptionIsChanged.sortModel || whichOptionIsChanged.sortComparator) && newOptions.sortModel) {
        // trigger model sort by calling its setter and setting same value
        this.model = this.model;
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        optionsTemplate: this.options.optionsTemplate,
        singleSelectedValueTemplate: this.options.singleSelectedValueTemplate,
        multiSelectedValueTemplate: this.options.multiSelectedValueTemplate,
        searchable: this.options.searchable,
        multiselectable: this.options.multiselectable,
        uuid: this.uuid,
        sort: !!this.options.sortComparator
      };
    }
  }, {
    key: "adjustToArrayIfNot",
    value: function adjustToArrayIfNot(value) {
      if (!value) {
        return [];
      }

      if (!Array.isArray(value)) {
        return [value];
      } else {
        return value;
      }
    }
  }, {
    key: "isChecked",
    value: function isChecked(item) {
      return this.includes(this.model, item);
    }
  }, {
    key: "includes",
    value: function includes(array, item) {
      var comparator = this.options.equalityComparator ? this.options.equalityComparator : this.acceptableValueEditorConfigurationService.getDefaults().equalityComparator;
      return Array.isArray(array) && array.some(comparator.bind(null, item));
    }
  }, {
    key: "getMoreCount",
    value: function getMoreCount() {
      return Math.max((this.options.acceptableValues || []).length - this.options.showFirstCount, 0);
    }
  }, {
    key: "checkboxesMode",
    value: function checkboxesMode() {
      return this.options.multiselectable && (this.options.switchToCheckboxesThreshold === 0 || !this.options.reorderable && this.options.acceptableValues.length > this.options.switchToCheckboxesThreshold);
    }
  }, {
    key: "getIndexOfItemInModelUsingEqualityComparator",
    value: function getIndexOfItemInModelUsingEqualityComparator(item) {
      for (var i = 0; i < this.model.length; i++) {
        if (this.options.equalityComparator(this.model[i], item)) {
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "model",
    get: function get() {
      return _get(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", this);
    },
    set: function set(value) {
      if (this.options.multiselectable && this.options.sortModel) {
        _set(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", value.sort(this.options.sortComparator), this, true);
      } else {
        _set(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", value, this, true);
      }
    }
  }]);

  return AcceptableValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.AcceptableValueEditorComponentController = AcceptableValueEditorComponentController;
AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL = __webpack_require__(27);
AcceptableValueEditorComponentController.CHECKBOXES_TEMPLATE_URL = __webpack_require__(28);
/**
 * @ngdoc component
 * @name acceptableValueEditor
 * @module angularjs-value-editor.acceptable
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * This component is for selecting value from predefined values.
 * It has two basic modes - single selectable and multi selectable - which are controlled by `multiselectable` option.
 * Multi selectable mode has two visual sub-modes: select-based and checkbox-based which are controlled by `switchToCheckboxesThreshold` option.
 *
 * Supported options: {@link type:AcceptableValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="acceptableValueEditorExample" module="acceptableValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="demoController as $ctrl">
 *              <kp-value-editor type="'acceptable'" ng-model="model" options="{
 *                  acceptableValues: $ctrl.acceptableValues,
 *                  multiselectable: $ctrl.multiselectable,
 *                  optionsTemplate: $ctrl.optionsTemplate,
 *                  singleSelectedValueTemplate: $ctrl.singleSelectedValueTemplate,
 *                  multiSelectedValueTemplate: $ctrl.multiSelectedValueTemplate,
 *                  searchable: $ctrl.searchable,
 *                  reorderable: $ctrl.reorderable,
 *                  showFirstCount: $ctrl.showFirstCount,
 *                  selectedFirst: $ctrl.selectedFirst,
 *                  sortModel: $ctrl.sortModel,
 *                  switchToCheckboxesThreshold: $ctrl.switchToCheckboxesThreshold,
 *                  sortComparator: $ctrl.sortComparator,
 *                  equalityComparator: $ctrl.equalityComparator
 *              }" placeholder="Select...">
 *              </kp-value-editor>
 *              <div>Model: {{model}}</div>
 *              <hr>
 *              Options:
 *              <div>{{$ctrl.acceptableValues}}</div>
 *              Settings:
 *              <div>multiselectable: <input type="checkbox" ng-model="$ctrl.multiselectable"></div>
 *              <div>optionsTemplate: <input type="text" ng-model="$ctrl.optionsTemplate"></div>
 *              <div>singleSelectedValueTemplate: <input type="text" ng-model="$ctrl.singleSelectedValueTemplate"></div>
 *              <div>multiSelectedValueTemplate: <input type="text" ng-model="$ctrl.multiSelectedValueTemplate"></div>
 *              <div>searchable: <input type="checkbox" ng-model="$ctrl.searchable"></div>
 *              <div>reorderable: <input type="checkbox" ng-model="$ctrl.reorderable"></div>
 *              <div>showFirstCount: <input type="number" ng-model="$ctrl.showFirstCount"></div>
 *              <div>selectedFirst: <input type="checkbox" ng-model="$ctrl.selectedFirst"></div>
 *              <div>sortModel: <input type="checkbox" ng-model="$ctrl.sortModel"></div>
 *              <div>switchToCheckboxesThreshold: <input type="number" ng-model="$ctrl.switchToCheckboxesThreshold"></div>
 *              <div>sortComparator: <input type="text" ng-model="$ctrl.sortComparatorString" ng-change="$ctrl.evalComparators()"></div>
 *              <div>equalityComparator: <input type="text" ng-model="$ctrl.equalityComparatorString" ng-change="$ctrl.evalComparators()"></div>
 *              OPTS:
 *              <div>{{$ctrl.multiselectable | json}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('acceptableValueEditorExample', ['angularjs-value-editor'])
 *          .controller('demoController', ['acceptableValueEditorDefaultOptions', class {
 *              multiselectable;
 *              optionsTemplate;
 *              singleSelectedValueTemplate;
 *              multiSelectedValueTemplate;
 *              searchable;
 *              reorderable;
 *              showFirstCount;
 *              selectedFirst;
 *              sortModel;
 *              switchToCheckboxesThreshold;
 *              sortComparatorString = '(e1, e2) => e1.x.localeCompare(e2.x)*-1';
 *              equalityComparatorString = '(e1, e2) => e1.x === e2.x';
 *
 *              constructor(acceptableValueEditorDefaultOptions) {
 *                  angular.merge(this, acceptableValueEditorDefaultOptions);
 *                  this.acceptableValues = [{x: 'a'}, {x: 'b'}, {x: 'c'}, {x: 'd'}, {x: 'e'}, {x: 'f'}, {x: 'g'}, {x: 'h'}];
 *                  this.evalComparators();
 *              }
 *
 *              evalComparators() {
 *                  let sortComparator = undefined;
 *                  let equalityComparator = undefined;
 *
 *                  try {
 *                      sortComparator = eval(this.sortComparatorString);
 *                      equalityComparator = eval(this.equalityComparatorString);
 *                  } catch (e) {
 *                      console.error('Invalid syntax');
 *                  }
 *
 *                  this.sortComparator = sortComparator;
 *                  this.equalityComparator = equalityComparator;
 *              }
 *          }]);
 *     </file>
 * </example>
 */

var AcceptableValueEditorComponent = function AcceptableValueEditorComponent() {
  _classCallCheck(this, AcceptableValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = AcceptableValueEditorComponentController;
};

exports.default = AcceptableValueEditorComponent;
AcceptableValueEditorComponent.componentName = 'acceptableValueEditor';

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var path = '/value-editor/value-editor.tpl.pug';
var html = "<div ng-switch=\"$ctrl.resolveAlias()\" ng-show=\"$ctrl.visible\"><text-value-editor ng-switch-when=\"text\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></text-value-editor><number-value-editor ng-switch-when=\"number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></number-value-editor><boolean-value-editor ng-switch-when=\"boolean\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></boolean-value-editor><hidden-value-editor ng-switch-when=\"hidden\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></hidden-value-editor><html-value-editor ng-switch-when=\"html\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></html-value-editor><date-value-editor ng-switch-when=\"date\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></date-value-editor><acceptable-value-editor ng-switch-when=\"acceptable\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></acceptable-value-editor><year-value-editor ng-switch-when=\"year\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></year-value-editor><card-number-value-editor ng-switch-when=\"card-number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></card-number-value-editor><index-selection-value-editor ng-switch-when=\"index-selection\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></index-selection-value-editor><autocomplete-value-editor ng-switch-when=\"autocomplete\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></autocomplete-value-editor><password-value-editor ng-switch-when=\"password\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></password-value-editor><signature-value-editor ng-switch-when=\"signature\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></signature-value-editor><access-number-value-editor ng-switch-when=\"access-number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></access-number-value-editor><number-range-value-editor ng-switch-when=\"number-range\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></number-range-value-editor><acceptable-root-value-editor ng-switch-when=\"acceptable-root\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></acceptable-root-value-editor><search-text-value-editor ng-switch-when=\"search-text\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></search-text-value-editor><searchable-value-editor ng-switch-when=\"searchable\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></searchable-value-editor><range-value-editor ng-switch-when=\"range\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></range-value-editor></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/select.tpl.pug';
var html = "<ui-select input-id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" {{multiselectable ? 'multiple' : ''}}=\"\" close-on-select=\"{{!multiselectable}}\" sortable=\"$ctrl.options.reorderable\" ng-disabled=\"$ctrl.valueEditorController.disabled || $ctrl.options.acceptableValues.length === 1 && $ctrl.valueEditorController.validations.required\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"><ui-select-choices repeat=\"$item in $ctrl.options.acceptableValues {{sort ? '| orderBy : \\'\\' : false : $ctrl.uiSelectComparator' : ''}} {{searchable ? '| filter:$select.search' : ''}} track by $index\">{{optionsTemplate}}</ui-select-choices><ui-select-match placeholder=\"\\{\\{$ctrl.valueEditorController.placeholder\\}\\}\">{{multiselectable ? multiSelectedValueTemplate : singleSelectedValueTemplate}}</ui-select-match></ui-select>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/checkboxes.tpl.pug';
var html = "<div class=\"checkboxes-mode\" ng-class=\"{'with-more': $ctrl.hasMore()}\" data-main-input=\"data-main-input\"><ul ng-ref=\"ulElement\"><li class=\"av-item\" ng-repeat=\"$item in $ctrl.getAcceptableValues() track by $index\"><div class=\"pretty p-icon p-smooth p-curve\"><input type=\"checkbox\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.checkboxModel($item)\" ng-model-options=\"{getterSetter: true}\" ng-click=\"$ctrl.updateModel($item)\" ng-disabled=\"$ctrl.valueEditorController.disabled\"/><div class=\"state p-primary\"><i class=\"icon glyphicon glyphicon-ok\"></i><label><span>{{optionsTemplate}}</span></label></div></div></li><li class=\"more-container {{uuid}}\" ng-if=\"$ctrl.hasMore()\"><style type=\"text/css\">acceptable-value-editor #check-{{uuid}}:checked ~ ul {\n    max-height: \\{\\{ulElement[0].children[0].offsetHeight * $ctrl.getMoreCount()\\}\\}px;\n}\n</style><input class=\"more-checkbox\" id=\"check-{{uuid}}\" type=\"checkbox\" ng-model=\"expanded\"/><label class=\"more-label\" for=\"check-{{uuid}}\"><i class=\"glyphicon\" ng-class=\"expanded ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'\"></i><span ng-show=\"expanded\" ng-bind=\"$ctrl.localize('less')\"></span><span ng-hide=\"expanded\" ng-bind=\"$ctrl.localize('more') + ' (' + $ctrl.getMoreCount() + ')'\"></span></label><ul><li class=\"av-item\" ng-repeat=\"$item in $ctrl.getAcceptableValues($ctrl.options.showFirstCount, 9007199254740990) track by $index\"><div class=\"pretty p-icon p-smooth p-curve\"><input type=\"checkbox\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.checkboxModel($item)\" ng-model-options=\"{getterSetter: true}\" ng-click=\"$ctrl.updateModel($item)\" ng-disabled=\"$ctrl.valueEditorController.disabled\"/><div class=\"state p-primary\"><i class=\"icon glyphicon glyphicon-ok\"></i><label><span>{{optionsTemplate}}</span></label></div></div></li></ul></li></ul><div class=\"btn-group\"><button class=\"btn btn-default btn-xs select-all\" type=\"button\" ng-disabled=\"$ctrl.model.length === $ctrl.options.acceptableValues.length\" ng-click=\"$ctrl.model = $ctrl.options.acceptableValues.slice()\" ng-bind=\"$ctrl.localize('selectAll')\"></button><button class=\"btn btn-default btn-xs deselect-all\" type=\"button\" ng-disabled=\"$ctrl.model.length === 0\" ng-click=\"$ctrl.model = []\" ng-bind=\"$ctrl.localize('deselectAll')\"></button></div></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var angular = __webpack_require__(5);
/**
 * @ngdoc constant
 * @name acceptableValueEditorDefaultOptions
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * For description see {@link AcceptableValueEditorOptions}
 *
 * ```javascript
 *  {
 *      cssClasses: ['form-control'],
 *      acceptableValues: [],
 *      multiselectable: false,
 *      searchable: true,
 *      optionsTemplate: '{{$item}}',
 *      singleSelectedValueTemplate: '{{$select.selected}}',
 *      multiSelectedValueTemplate: '{{$item}}',
 *      equalityComparator: angular.equals,
 *      reorderable: false,
 *      showFirstCount: 0,
 *      selectedFirst: false,
 *      sortComparator: undefined,
 *      sortModel: false,
 *      switchToCheckboxesThreshold: 13
 *  }
 * ```
 */


exports.ACCEPTABLE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  cssClasses: ['form-control'],
  acceptableValues: [],
  multiselectable: false,
  searchable: true,
  optionsTemplate: '{{$item}}',
  singleSelectedValueTemplate: '{{$select.selected}}',
  multiSelectedValueTemplate: '{{$item}}',
  equalityComparator: angular.equals,
  reorderable: false,
  showFirstCount: 0,
  selectedFirst: false,
  sortComparator: undefined,
  sortModel: false,
  switchToCheckboxesThreshold: 13
};
/**
 * @ngdoc provider
 * @name acceptableValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link acceptableValueEditorDefaultOptions}
 */

var AcceptableValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "acceptableValueEditorDefaultOptions"];

  _inherits(AcceptableValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorConfigurationProvider);

  /*@ngInject*/
  function AcceptableValueEditorConfigurationProvider(aliasesServiceProvider, acceptableValueEditorDefaultOptions) {
    _classCallCheck(this, AcceptableValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, acceptableValueEditorDefaultOptions);
  }

  return AcceptableValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AcceptableValueEditorConfigurationProvider;
AcceptableValueEditorConfigurationProvider.providerName = 'acceptableValueEditorConfigurationService';

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var boolean_value_editor_configuration_provider_1 = __webpack_require__(31);

var boolean_value_editor_component_1 = __webpack_require__(32);
/**
 * @ngdoc module
 * @name angularjs-value-editor.boolean
 * @module angularjs-value-editor.boolean
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.boolean').constant('booleanValueEditorDefaultOptions', boolean_value_editor_configuration_provider_1.BOOLEAN_VALUE_EDITOR_DEFAULT_OPTIONS).provider(boolean_value_editor_configuration_provider_1.default.providerName, boolean_value_editor_configuration_provider_1.default).component(boolean_value_editor_component_1.default.componentName, boolean_value_editor_component_1.default).name();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name booleanValueEditorDefaultOptions
 * @module angularjs-value-editor.boolean
 *
 * @description
 * For description see {@link BooleanValueEditorOptions}
 *
 * ```javascript
 *  {
 *      type: 'checkbox',
 *      trueValue: undefined,
 *      falseValue: undefined,
 *      nullAsIndeterminate: false
 *  }
 * ```
 */


exports.BOOLEAN_VALUE_EDITOR_DEFAULT_OPTIONS = {
  type: 'checkbox',
  trueValue: undefined,
  falseValue: undefined,
  nullAsIndeterminate: false
};
/**
 * @ngdoc provider
 * @name booleanValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.boolean
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link booleanValueEditorDefaultOptions}
 */

var BooleanValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  BooleanValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "booleanValueEditorDefaultOptions"];

  _inherits(BooleanValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(BooleanValueEditorConfigurationProvider);

  /*@ngInject*/
  function BooleanValueEditorConfigurationProvider(aliasesServiceProvider, booleanValueEditorDefaultOptions) {
    _classCallCheck(this, BooleanValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, booleanValueEditorDefaultOptions);
  }

  return BooleanValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = BooleanValueEditorConfigurationProvider;
BooleanValueEditorConfigurationProvider.providerName = 'booleanValueEditorConfigurationService';

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(33);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var BooleanValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  BooleanValueEditorComponentController.$inject = ["booleanValueEditorConfigurationService"];

  _inherits(BooleanValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(BooleanValueEditorComponentController);

  /*@ngInject*/
  function BooleanValueEditorComponentController(booleanValueEditorConfigurationService) {
    _classCallCheck(this, BooleanValueEditorComponentController);

    return _super.call(this, booleanValueEditorConfigurationService);
  }

  _createClass(BooleanValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(BooleanValueEditorComponentController.prototype), "$postLink", this).call(this);

      this.ngModelController.$formatters.push(this.formatToCustomValue.bind(this));
      this.ngModelController.$parsers.push(this.parseFromCustomValue.bind(this));
      this.ngModelController.$parsers.push(this.adjustIndeterminateState.bind(this));
      this.ngModelController.$formatters.push(this.adjustIndeterminateState.bind(this));
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {
      this.ngModelController.$processModelValue();
    }
  }, {
    key: "formatToCustomValue",
    value: function formatToCustomValue(value) {
      if (this.options.trueValue !== undefined && value === this.options.trueValue) {
        return true;
      }

      if (this.options.falseValue !== undefined && value === this.options.falseValue) {
        return false;
      }

      return value;
    }
  }, {
    key: "parseFromCustomValue",
    value: function parseFromCustomValue(value) {
      if (this.options.trueValue !== undefined && value === true) {
        return this.options.trueValue;
      }

      if (this.options.falseValue !== undefined && value === false) {
        return this.options.falseValue;
      }

      return value;
    }
  }, {
    key: "adjustIndeterminateState",
    value: function adjustIndeterminateState(value) {
      // @ts-ignore - $$element is not typed, because it's internal API
      this.inputElementModelController.$$element[0].indeterminate = this.options.nullAsIndeterminate && value === null;
      var isInvalid = this.valueEditorController.validations && this.valueEditorController.validations.required && this.options.nullAsIndeterminate && (value === null || value === undefined);
      this.inputElementModelController.$setValidity('required', !isInvalid);
      return value;
    }
  }]);

  return BooleanValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.BooleanValueEditorComponentController = BooleanValueEditorComponentController;
/**
 * @ngdoc component
 * @name booleanValueEditor
 * @module angularjs-value-editor.boolean
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for boolean input.
 *
 * Supported options: {@link type:BooleanValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * This value editor supports custom model value substitution via options parameters `trueValue` and `falseValue`.
 *
 * @example
 * <example name="booleanValueEditorExample" module="booleanValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'boolean'" ng-model="model"></kp-value-editor>
 *              <div>{{model | json}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('booleanValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var BooleanValueEditorComponent = function BooleanValueEditorComponent() {
  _classCallCheck(this, BooleanValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(34);
  this.controller = BooleanValueEditorComponentController;
};

exports.default = BooleanValueEditorComponent;
BooleanValueEditorComponent.componentName = 'booleanValueEditor';

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/boolean/boolean.value-editor.tpl.pug';
var html = "<span class=\"pretty p-icon p-smooth p-curve {{$ctrl.options.cssClasses.join(' ')}}\" ng-class=\"{'p-has-indeterminate': $ctrl.options.nullAsIndeterminate}\"><input type=\"checkbox\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-ref=\"$ctrl.inputElementModelController\" ng-ref-read=\"ngModel\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" data-main-input=\"data-main-input\"/><div class=\"state\"><i class=\"icon glyphicon glyphicon-ok\"></i><label></label></div><div class=\"state p-is-indeterminate\"><i class=\"icon glyphicon glyphicon-minus\"></i><label></label></div></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_date_parser_1 = __webpack_require__(36);

var angularjs_bootstrap_datetimepicker_1 = __webpack_require__(37);

var angularjs_register_1 = __webpack_require__(0);

var date_value_editor_component_1 = __webpack_require__(38);

var date_value_editor_configuration_provider_1 = __webpack_require__(41);
/**
 * @ngdoc module
 * @name angularjs-value-editor.date
 * @module angularjs-value-editor.date
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.date', [angularjs_date_parser_1.default, angularjs_bootstrap_datetimepicker_1.default]).constant('dateValueEditorDefaultOptions', date_value_editor_configuration_provider_1.DATE_VALUE_EDITOR_DEFAULT_OPTIONS).provider(date_value_editor_configuration_provider_1.default.providerName, date_value_editor_configuration_provider_1.default).component(date_value_editor_component_1.default.componentName, date_value_editor_component_1.default).name();

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(39);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var luxon_1 = __webpack_require__(12);

var DateValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  DateValueEditorComponentController.$inject = ["dateValueEditorConfigurationService"];

  _inherits(DateValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(DateValueEditorComponentController);

  /*@ngInject*/
  function DateValueEditorComponentController(dateValueEditorConfigurationService) {
    _classCallCheck(this, DateValueEditorComponentController);

    return _super.call(this, dateValueEditorConfigurationService);
  }

  _createClass(DateValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(DateValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.startView = this.options.maximumGranularity;
    }
  }, {
    key: "dateRestriction",
    value: function dateRestriction(dates, view) {
      if (!this.valueEditorController.validations) {
        return;
      }

      var minDate = luxon_1.DateTime.fromISO(this.valueEditorController.validations.minDate);
      var maxDate = luxon_1.DateTime.fromISO(this.valueEditorController.validations.maxDate);

      if (!maxDate.isValid && !minDate.isValid) {
        return;
      }

      var _iterator = _createForOfIteratorHelper(dates),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var date = _step.value;
          date.selectable = (!minDate.isValid || minDate.startOf(view) <= date.dateTime.startOf(view)) && (!maxDate.isValid || date.dateTime.startOf(view) <= maxDate.startOf(view));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whichOptionChanged) {
      if (whichOptionChanged.maximumGranularity) {
        if (newOptions.maximumGranularity === 'minute') {
          this.startView = 'day';
        } else {
          this.startView = newOptions.maximumGranularity;
        }
      }
    }
  }]);

  return DateValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.DateValueEditorComponentController = DateValueEditorComponentController;
/**
 * @ngdoc component
 * @name dateValueEditor
 * @module angularjs-value-editor.date
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for date input.
 *
 * Supported options: {@link type:DateValueEditorOptions}
 *
 * Supported validations: {@link type:DateValueEditorValidations}
 *
 * @example
 * <example name="dateValueEditorExample" module="dateValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'date'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('dateValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var DateValueEditorComponent = function DateValueEditorComponent() {
  _classCallCheck(this, DateValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(40);
  this.controller = DateValueEditorComponentController;
};

exports.default = DateValueEditorComponent;
DateValueEditorComponent.componentName = 'dateValueEditor';

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/date/date.value-editor.tpl.pug';
var html = "<div class=\"input-group\" uib-dropdown=\"\" dropdown-append-to-body=\"\" is-open=\"datePickerOpen\"><input type=\"text\" ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.name}}\" ng-attr-placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" kp-date-parser=\"kp-date-parser\" min-date=\"$ctrl.valueEditorController.validations.minDate ? $ctrl.valueEditorController.validations.minDate : null\" max-date=\"$ctrl.valueEditorController.validations.maxDate ? $ctrl.valueEditorController.validations.maxDate : null\" view-format=\"{{$ctrl.options.viewFormat}}\" data-main-input=\"data-main-input\"/><div uib-dropdown-menu=\"\"><datetimepicker ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" datetimepicker-config=\"{minView: $ctrl.options.maximumGranularity, startView: $ctrl.startView}\" on-set-time=\"datePickerOpen = false\" before-render=\"$ctrl.dateRestriction($dates, $view)\" view-format=\"{{$ctrl.options.viewFormat}}\" kp-date-parser=\"kp-date-parser\"></datetimepicker></div><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled\" uib-dropdown-toggle=\"\"><span class=\"glyphicon glyphicon-calendar\"></span></button></span></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name dateValueEditorDefaultOptions
 * @module angularjs-value-editor.date
 *
 * @description
 * For description see {@link DateValueEditorOptions}
 *
 * ```javascript
 *  {
 *      cssClasses: ['form-control'],
 *      maximumGranularity: 'day',
 *      viewFormat: 'd.L.y'
 *  }
 * ```
 */


exports.DATE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  cssClasses: ['form-control'],
  maximumGranularity: 'day',
  viewFormat: 'd.L.y'
};
/**
 * @ngdoc provider
 * @name dateValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.date
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link dateValueEditorDefaultOptions}
 */

var DateValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  DateValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "dateValueEditorDefaultOptions"];

  _inherits(DateValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(DateValueEditorConfigurationProvider);

  /*@ngInject*/
  function DateValueEditorConfigurationProvider(aliasesServiceProvider, dateValueEditorDefaultOptions) {
    _classCallCheck(this, DateValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, dateValueEditorDefaultOptions);
  }

  return DateValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = DateValueEditorConfigurationProvider;
DateValueEditorConfigurationProvider.providerName = 'dateValueEditorConfigurationService';

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var hidden_value_editor_component_1 = __webpack_require__(43);
/**
 * @ngdoc module
 * @name angularjs-value-editor.hidden
 * @module angularjs-value-editor.hidden
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.hidden').component(hidden_value_editor_component_1.default.componentName, hidden_value_editor_component_1.default).name();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var HiddenValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(HiddenValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(HiddenValueEditorComponentController);

  function HiddenValueEditorComponentController() {
    _classCallCheck(this, HiddenValueEditorComponentController);

    return _super.apply(this, arguments);
  }

  _createClass(HiddenValueEditorComponentController, [{
    key: "onOptionsChange",

    /* istanbul ignore next */
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }]);

  return HiddenValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.HiddenValueEditorComponentController = HiddenValueEditorComponentController;
/**
 * @ngdoc component
 * @name hiddenValueEditor
 * @module angularjs-value-editor.hidden
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for store any value.
 *
 * Supported options: {@link type:ValueEditorOptions}
 *
 * Supported validations: None
 *
 * @example
 * <example name="hiddenValueEditorExample" module="hiddenValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'hidden'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('hiddenValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var HiddenValueEditorComponent = function HiddenValueEditorComponent() {
  _classCallCheck(this, HiddenValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(44);
  this.controller = HiddenValueEditorComponentController;
};

exports.default = HiddenValueEditorComponent;
HiddenValueEditorComponent.componentName = 'hiddenValueEditor';

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/hidden/hidden.value-editor.tpl.pug';
var html = "<input type=\"hidden\" ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.name}}\" ng-class=\"$ctrl.options.cssClasses\" ng-value=\"$ctrl.model\" ng-disabled=\"$ctrl.valueEditorController.disabled\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var html_value_editor_component_1 = __webpack_require__(46);

var html_value_editor_configuration_provider_1 = __webpack_require__(48);
/**
 * @ngdoc module
 * @name angularjs-value-editor.html-editor
 * @module angularjs-value-editor.html-editor
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.html').constant('htmlValueEditorDefaultOptions', html_value_editor_configuration_provider_1.HTML_VALUE_EDITOR_DEFAULT_OPTIONS).provider(html_value_editor_configuration_provider_1.default.providerName, html_value_editor_configuration_provider_1.default).component(html_value_editor_component_1.default.componentName, html_value_editor_component_1.default).name();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var bind_decorator_1 = __webpack_require__(13);

var HtmlValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  HtmlValueEditorComponentController.$inject = ["htmlValueEditorConfigurationService", "$timeout"];

  _inherits(HtmlValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(HtmlValueEditorComponentController);

  /*@ngInject*/
  function HtmlValueEditorComponentController(htmlValueEditorConfigurationService, $timeout) {
    var _this;

    _classCallCheck(this, HtmlValueEditorComponentController);

    _this = _super.call(this, htmlValueEditorConfigurationService);
    _this.$timeout = $timeout;
    return _this;
  }

  _createClass(HtmlValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(HtmlValueEditorComponentController.prototype), "$postLink", this).call(this);

      this.$timeout(this.initTrumbowyg);
    }
  }, {
    key: "$doCheck",
    value: function $doCheck() {
      var _a;

      if (this.valueEditorController.disabled !== this.isDisabled && ((_a = this.container) === null || _a === void 0 ? void 0 : _a.trumbowyg)) {
        this.isDisabled = this.valueEditorController.disabled;
        this.container.trumbowyg(this.isDisabled ? 'disable' : 'enable');
      }
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      this.container.trumbowyg('destroy');
      this.container.off('tbwchange tbwpaste');
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }, {
    key: "initTrumbowyg",
    value: function initTrumbowyg() {
      var _this2 = this;

      var options = _objectSpread({}, this.options.editorOptions, {
        disabled: this.valueEditorController.disabled
      });

      this.container.trumbowyg(options);
      this.container.on('tbwchange tbwpaste', function () {
        return _this2.container.triggerHandler('input');
      });
      var originalRender = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        originalRender();

        _this2.container.trumbowyg('html', _this2.model);
      };
    }
  }]);

  return HtmlValueEditorComponentController;
}(abstract_value_editor_1.default);

__decorate([bind_decorator_1.default], HtmlValueEditorComponentController.prototype, "initTrumbowyg", null);

exports.HtmlValueEditorComponentController = HtmlValueEditorComponentController;
/**
 * @ngdoc component
 * @name htmlValueEditor
 * @module angularjs-value-editor.html-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 * @requires http://jquery.com/ jQuery
 * @requires https://alex-d.github.io/Trumbowyg/documentation/#installation Trumbowyg dependencies and plugins.
 *
 * @description
 * Value editor for formatted text input.
 *
 * Component uses <a href="https://alex-d.github.io/Trumbowyg/documentation/#basic-options">Trumbowyg editor</a>,
 * because it is lightweight, (almost) libraries agnostic with possibility to be, in near future, jQuery less.
 *
 * It is required to attach also table and colors plugins - more info how to do it can be find in Trumbowyg site.
 * For attaching SVGs via webpack use this configuration:
 * ```javascript
 *      $.trumbowyg.svgPath = require('trumbowyg/dist/ui/icons.svg');
 * ```
 *
 * Supported options: {@link type:HtmlValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="htmlValueEditorExample" module="htmlValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/ui/trumbowyg.min.css">
 *         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/colors/ui/trumbowyg.colors.min.css">
 *         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/table/ui/trumbowyg.table.min.css">
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/trumbowyg.min.js"></script>
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/colors/trumbowyg.colors.min.js"></script>
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/table/trumbowyg.table.min.js"></script>
 *         <main>
 *             <em>Example probably doesn't work, because jQuery is need to be load before angular. You can use >>Edit in Plunker<< button and prepend jQuery script tag before angular.</em>
 *             <em>Hmmm... It isn't all yet. You must load SVG icons, but plunker doesn't allow CORS requests. No help...</em>
 *              <kp-value-editor type="'html'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('htmlValueEditorExample', ['angularjs-value-editor']);
 *         $(document).ready(() => {
 *             $.trumbowyg.svgPath = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/ui/icons.svg';
 *         });
 *     </file>
 * </example>
 */

var HtmlValueEditorComponent = function HtmlValueEditorComponent() {
  _classCallCheck(this, HtmlValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(47);
  this.controller = HtmlValueEditorComponentController;
};

exports.default = HtmlValueEditorComponent;
HtmlValueEditorComponent.componentName = 'htmlValueEditor';

/***/ }),
/* 47 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/html/html.value-editor.tpl.pug';
var html = "<textarea ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.name}}\" ng-attr-placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-ref=\"$ctrl.container\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"></textarea>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name htmlValueEditorDefaultOptions
 * @module angularjs-value-editor.html-editor
 *
 * @description
 * For description see {@link HtmlValueEditorOptions}
 *
 * Default value:
 *
 * ```javascript
 * {
 *      editorOptions: {
 *          btns: [
 *              ['formatting'],
 *              ['bold', 'italic', 'underline', 'del', 'removeformat'],
 *              ['superscript', 'subscript'],
 *              ['foreColor', 'backColor'],
 *              ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
 *              ['unorderedList', 'orderedList'],
 *              ['table'],
 *              ['link', 'insertImage'],
 *              ['fullscreen', 'viewHTML']
 *          ]
 *      }
 *  }
 * ```
 */


exports.HTML_VALUE_EDITOR_DEFAULT_OPTIONS = {
  editorOptions: {
    btns: [['formatting'], ['bold', 'italic', 'underline', 'del', 'removeformat'], ['superscript', 'subscript'], ['foreColor', 'backColor'], ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'], ['unorderedList', 'orderedList'], ['table'], ['link', 'insertImage'], ['fullscreen', 'viewHTML']]
  }
};
/**
 * @ngdoc provider
 * @name htmlValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.html-editor
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link htmlValueEditorDefaultOptions}
 */

var HtmlValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  HtmlValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "htmlValueEditorDefaultOptions"];

  _inherits(HtmlValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(HtmlValueEditorConfigurationProvider);

  /*@ngInject*/
  function HtmlValueEditorConfigurationProvider(aliasesServiceProvider, htmlValueEditorDefaultOptions) {
    _classCallCheck(this, HtmlValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, htmlValueEditorDefaultOptions);
  }

  return HtmlValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = HtmlValueEditorConfigurationProvider;
HtmlValueEditorConfigurationProvider.providerName = 'htmlValueEditorConfigurationService';

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var number_value_editor_component_1 = __webpack_require__(50);

var number_value_editor_configuration_provider_1 = __webpack_require__(53);
/**
 * @ngdoc module
 * @name angularjs-value-editor.number
 * @module angularjs-value-editor.number
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.number').constant('numberValueEditorDefaultOptions', number_value_editor_configuration_provider_1.NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS).provider(number_value_editor_configuration_provider_1.default.providerName, number_value_editor_configuration_provider_1.default).component(number_value_editor_component_1.default.componentName, number_value_editor_component_1.default).name();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(51);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var NumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  NumberValueEditorComponentController.$inject = ["numberValueEditorConfigurationService"];

  _inherits(NumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(NumberValueEditorComponentController);

  /*@ngInject*/
  function NumberValueEditorComponentController(numberValueEditorConfigurationService) {
    _classCallCheck(this, NumberValueEditorComponentController);

    return _super.call(this, numberValueEditorConfigurationService);
  }

  _createClass(NumberValueEditorComponentController, [{
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }]);

  return NumberValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.NumberValueEditorComponentController = NumberValueEditorComponentController;
/**
 * @ngdoc component
 * @name numberValueEditor
 * @module angularjs-value-editor.number
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for number input.
 *
 * Supported options: {@link type:NumberValueEditorOptions}
 *
 * Supported validations: {@link type:NumberValueEditorValidations}
 *
 * @example
 * <example name="numberValueEditorExample" module="numberValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'number'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('numberValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var NumberValueEditorComponent = function NumberValueEditorComponent() {
  _classCallCheck(this, NumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(52);
  this.controller = NumberValueEditorComponentController;
};

exports.default = NumberValueEditorComponent;
NumberValueEditorComponent.componentName = 'numberValueEditor';

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/number/number.value-editor.tpl.pug';
var html = "<input class=\"{{$ctrl.options.hideSpinners ? 'hide-spinners' : ''}}\" type=\"number\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" step=\"{{$ctrl.options.step}}\" min=\"{{$ctrl.valueEditorController.validations.min}}\" max=\"{{$ctrl.valueEditorController.validations.max}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name numberValueEditorDefaultOptions
 * @module angularjs-value-editor.number
 *
 * @description
 * For description see {@link NumberValueEditorOptions}
 *
 * Default value:
 * ```javascript
 *  {
 *      decimal: false,
 *      step: 1,
 *      hideSpinners: false
 *  }
 * ```
 */


exports.NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  decimal: false,
  step: 1,
  hideSpinners: false
};
/**
 * @ngdoc provider
 * @name numberValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link numberValueEditorDefaultOptions}
 */

var NumberValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "numberValueEditorDefaultOptions"];

  _inherits(NumberValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(NumberValueEditorConfigurationProvider);

  /*@ngInject*/
  function NumberValueEditorConfigurationProvider(aliasesServiceProvider, numberValueEditorDefaultOptions) {
    _classCallCheck(this, NumberValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, numberValueEditorDefaultOptions);
  }

  return NumberValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = NumberValueEditorConfigurationProvider;
NumberValueEditorConfigurationProvider.providerName = 'numberValueEditorConfigurationService';

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(55);

var angularjs_register_1 = __webpack_require__(0);

var text_value_editor_component_1 = __webpack_require__(56);

var text_value_editor_configuration_provider_1 = __webpack_require__(59);
/**
 * @ngdoc module
 * @name angularjs-value-editor.text
 * @module angularjs-value-editor.text
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.text', ['ui.ace']).constant('textValueEditorDefaultOptions', text_value_editor_configuration_provider_1.TEXT_VALUE_EDITOR_DEFAULT_OPTIONS).provider(text_value_editor_configuration_provider_1.default.providerName, text_value_editor_configuration_provider_1.default).component(text_value_editor_component_1.default.componentName, text_value_editor_component_1.default).name();

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__55__;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(57);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var TextValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorComponentController.$inject = ["textValueEditorConfigurationService"];

  _inherits(TextValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorComponentController);

  /*@ngInject*/
  function TextValueEditorComponentController(textValueEditorConfigurationService) {
    var _this;

    _classCallCheck(this, TextValueEditorComponentController);

    _this = _super.call(this, textValueEditorConfigurationService);
    _this.textValueEditorConfigurationService = textValueEditorConfigurationService;
    return _this;
  }

  _createClass(TextValueEditorComponentController, [{
    key: "$doCheck",
    value: function $doCheck() {
      if (this.options.type === 'rich-textarea' && this.valueEditorController.disabled !== this.isDisabled && this.aceEditor) {
        this.isDisabled = this.valueEditorController.disabled;
        this.aceEditor.setReadOnly(this.isDisabled);
      }
    }
    /**
     * Get number of rows between nim and max range.
     */

  }, {
    key: "getNumberOfRows",
    value: function getNumberOfRows() {
      var minRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      if (this.model) {
        return Math.min(Math.max(this.countRowsInString(this.model), minRows), maxRows);
      }

      return minRows;
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      var _this2 = this;

      if (whatChanged.type && this.options.type === 'rich-textarea') {
        if (!this.options.aceOptions) {
          this.options.aceOptions = this.textValueEditorConfigurationService.forAlias(this.valueEditorController.type).getConfiguration().aceOptions;
        }

        this.options.aceOptions.onLoad = function (ace) {
          _this2.aceEditor = ace;

          _this2.initACE();
        };
      }
    }
    /**
     * Try to count rows in string. if string is without `\n`, it tries to estimate number of rows. Always return value greater then 0.
     */

  }, {
    key: "countRowsInString",
    value: function countRowsInString() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var rowsCount = (str.match(/\n/g) || []).length + 1;

      if (rowsCount === 1) {
        return Math.floor(str.length / 60) + 1;
      }

      return rowsCount;
    }
  }, {
    key: "initACE",
    value: function initACE() {
      var _this3 = this;

      // Original directive doesn't sets model to touched if ACE editor is blurred. This fixes it.
      this.aceEditor.on('blur', function () {
        _this3.ngModelController.$setTouched();
      }); // Propagate disabled -> set Ace to readonly

      this.aceEditor.setReadOnly(this.valueEditorController.disabled);
    }
  }]);

  return TextValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.TextValueEditorComponentController = TextValueEditorComponentController;
/**
 * @ngdoc component
 * @name textValueEditor
 * @module angularjs-value-editor.text
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for text input.
 * Depending on type are four versions:
 * - `text`
 *
 *      Common text input.
 *
 * - `textarea`
 *
 *      Textarea value editor.
 *
 * - `rich-textarea`.
 *
 *      [ACE editor](https://ace.c9.io).
 *
 * Supported options: {@link type:TextValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="textValueEditorExample" module="textValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'text'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('textValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var TextValueEditorComponent = function TextValueEditorComponent() {
  _classCallCheck(this, TextValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(58);
  this.controller = TextValueEditorComponentController;
};

exports.default = TextValueEditorComponent;
TextValueEditorComponent.componentName = 'textValueEditor';

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/text/text.value-editor.tpl.pug';
var html = "<!-- TEXT--><input ng-if=\"$ctrl.options.type === 'text'\" type=\"{{$ctrl.options.type}}\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/><!-- TEXTAREA--><textarea ng-if=\"$ctrl.options.type === 'textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" rows=\"{{$ctrl.getNumberOfRows()}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-trim=\"false\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"></textarea><!-- ACE EDITOR--><div class=\"ace-editor\" ng-if=\"$ctrl.options.type === 'rich-textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-class=\"$ctrl.options.cssClasses\" ui-ace=\"$ctrl.options.aceOptions\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name textValueEditorDefaultOptions
 * @module angularjs-value-editor.text
 *
 * @description
 * For description see {@link TextValueEditorOptions}
 *
 * ```javascript
 *  {
 *      type: 'text',
 *      aceOptions: {
 *          useWrapMode: false,
 *          showGutter: true
 *      }
 *  }
 * ```
 */


exports.TEXT_VALUE_EDITOR_DEFAULT_OPTIONS = {
  type: 'text',
  aceOptions: {
    useWrapMode: false,
    showGutter: true
  }
};
/**
 * @ngdoc provider
 * @name textValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.text
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link textValueEditorDefaultOptions}
 */

var TextValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "textValueEditorDefaultOptions"];

  _inherits(TextValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorConfigurationProvider);

  /*@ngInject*/
  function TextValueEditorConfigurationProvider(aliasesServiceProvider, textValueEditorDefaultOptions) {
    _classCallCheck(this, TextValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, textValueEditorDefaultOptions);
  }

  return TextValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = TextValueEditorConfigurationProvider;
TextValueEditorConfigurationProvider.providerName = 'textValueEditorConfigurationService';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var year_value_editor_component_1 = __webpack_require__(61);
/**
 * @ngdoc module
 * @name angularjs-value-editor.year
 * @module angularjs-value-editor.year
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.year').component(year_value_editor_component_1.default.componentName, year_value_editor_component_1.default).name();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var luxon_1 = __webpack_require__(12);

var YearValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(YearValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(YearValueEditorComponentController);

  function YearValueEditorComponentController() {
    _classCallCheck(this, YearValueEditorComponentController);

    return _super.apply(this, arguments);
  }

  _createClass(YearValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(YearValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.ngModelController.$parsers.push(this.modelFormatter);
      this.ngModelController.$formatters.push(this.modelParser);
    }
    /* istanbul ignore next */

  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "convertYearToISO",
    value: function convertYearToISO(year) {
      return year ? luxon_1.DateTime.fromFormat(String(year), 'y').toISODate() : undefined;
    }
  }, {
    key: "convertISOToYear",
    value: function convertISOToYear(date) {
      return date ? luxon_1.DateTime.fromISO(date).year : undefined;
    }
  }, {
    key: "modelFormatter",
    value: function modelFormatter(isoDate) {
      if (isoDate) {
        return luxon_1.DateTime.fromISO(isoDate).year;
      }

      return isoDate;
    }
  }, {
    key: "modelParser",
    value: function modelParser(year) {
      if (year) {
        var parsed = luxon_1.DateTime.fromFormat(String(year), 'y').toISODate();
        return parsed;
      }

      return year;
    }
  }]);

  return YearValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.YearValueEditorComponentController = YearValueEditorComponentController;
/**
 * @ngdoc component
 * @name yearValueEditor
 * @module angularjs-value-editor.year
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for year input.
 *
 * Supported options: {@link type:YearValueEditorOptions}
 *
 * Supported validations: {@link type:YearValueEditorValidations}
 *
 * @example
 * <example name="yearValueEditorExample" module="yearValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'year'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('yearValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var YearValueEditorComponent = function YearValueEditorComponent() {
  _classCallCheck(this, YearValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(62);
  this.controller = YearValueEditorComponentController;
};

exports.default = YearValueEditorComponent;
YearValueEditorComponent.componentName = 'yearValueEditor';

/***/ }),
/* 62 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/year/year.value-editor.tpl.pug';
var html = "<kp-value-editor class=\"{{$ctrl.options.cssClasses}}\" editor-id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" type=\"'date'\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" disabled=\"$ctrl.valueEditorController.disabled\" options=\"{viewFormat: 'y', maximumGranularity: 'year'}\" validations=\"{minDate: $ctrl.convertYearToISO($ctrl.valueEditorController.validations.minDate), maxDate: $ctrl.convertYearToISO($ctrl.valueEditorController.validations.maxDate), required: $ctrl.valueEditorController.validations.required}\"></kp-value-editor>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var card_number_value_editor_configuration_provider_1 = __webpack_require__(64);

var card_number_value_editor_localization_provider_1 = __webpack_require__(65);

var card_number_value_editor_component_1 = __webpack_require__(66);
/**
 * @ngdoc module
 * @name angularjs-value-editor.card-number
 * @module angularjs-value-editor.card-number
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.card-number').constant('cardNumberValueEditorDefaultOptions', card_number_value_editor_configuration_provider_1.CARD_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS).constant('cardNumberValueEditorDefaultLocalizations', card_number_value_editor_localization_provider_1.CARD_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(card_number_value_editor_configuration_provider_1.default.providerName, card_number_value_editor_configuration_provider_1.default).provider(card_number_value_editor_localization_provider_1.default.providerName, card_number_value_editor_localization_provider_1.default).component(card_number_value_editor_component_1.default.componentName, card_number_value_editor_component_1.default).name();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name cardNumberValueEditorDefaultOptions
 * @module angularjs-value-editor.card-number
 *
 * @description
 * For description see {@link CardNumberValueEditorOptions}
 *
 * ```javascript
 *  {
 *      inputSize: 'sm',
 *      requestParameters: {},
 *      requestFunction: (requestParameters, additionalParameters) => Promise.resolve(additionalParameters.currentValue)
 *  }
 * ```
 */


exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  inputSize: 'sm',
  requestParameters: {},
  requestFunction:
  /* istanbul ignore next */
  function requestFunction(requestParameters, additionalParameters) {
    return Promise.resolve(additionalParameters.currentValue);
  }
};
/**
 * @ngdoc provider
 * @name cardNumberValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.card-number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link cardNumberValueEditorDefaultOptions}
 */

var CardNumberValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "cardNumberValueEditorDefaultOptions"];

  _inherits(CardNumberValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorConfigurationProvider);

  /*@ngInject*/
  function CardNumberValueEditorConfigurationProvider(aliasesServiceProvider, cardNumberValueEditorDefaultOptions) {
    _classCallCheck(this, CardNumberValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, cardNumberValueEditorDefaultOptions);
  }

  return CardNumberValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = CardNumberValueEditorConfigurationProvider;
CardNumberValueEditorConfigurationProvider.providerName = 'cardNumberValueEditorConfigurationService';

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name cardNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.card-number
 *
 * @description
 * See {@link cardNumberValueEditorLocalizationsService}
 */


var CardNumberValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorLocalizationsProvider.$inject = ["cardNumberValueEditorDefaultLocalizations"];

  _inherits(CardNumberValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorLocalizationsProvider);

  /*@ngInject*/
  function CardNumberValueEditorLocalizationsProvider(cardNumberValueEditorDefaultLocalizations) {
    _classCallCheck(this, CardNumberValueEditorLocalizationsProvider);

    return _super.call(this, cardNumberValueEditorDefaultLocalizations);
  }

  return CardNumberValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = CardNumberValueEditorLocalizationsProvider;
CardNumberValueEditorLocalizationsProvider.providerName = 'cardNumberValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name cardNumberValueEditorDefaultLocalizations
 * @module angularjs-value-editor.card-number
 *
 * @description
 * ```
 * {
 *     generate: 'Generate'
 * }
 * ```
 */

exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  generate: 'Generate'
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_1 = __webpack_require__(3);

var value_editor_component_1 = __webpack_require__(1);

var CardNumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorComponentController.$inject = ["cardNumberValueEditorConfigurationService", "cardNumberValueEditorLocalizationsService", "$timeout"];

  _inherits(CardNumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorComponentController);

  /*@ngInject*/
  function CardNumberValueEditorComponentController(cardNumberValueEditorConfigurationService, cardNumberValueEditorLocalizationsService, $timeout) {
    var _this;

    _classCallCheck(this, CardNumberValueEditorComponentController);

    _this = _super.call(this, cardNumberValueEditorConfigurationService);
    _this.cardNumberValueEditorLocalizationsService = cardNumberValueEditorLocalizationsService;
    _this.$timeout = $timeout;
    return _this;
  }

  _createClass(CardNumberValueEditorComponentController, [{
    key: "generate",
    value: function () {
      var _generate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var originalButtonCursor, value;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.options && typeof this.options.requestFunction === 'function')) {
                  _context.next = 26;
                  break;
                }

                originalButtonCursor = this.generationButton[0].style.cursor;
                this.generationButton[0].disabled = true;
                this.generationButton[0].style.cursor = 'wait';
                this.$timeout(function () {
                  return _this2.openPopover = false;
                });
                _context.prev = 5;
                _context.next = 8;
                return this.options.requestFunction(this.options.requestParameters, {
                  inputName: this.valueEditorController.name,
                  currentValue: this.model
                });

              case 8:
                value = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                this.$timeout(function () {
                  _this2.openPopover = true;
                  _this2.popoverError = _context.t0;
                });

              case 14:
                _context.prev = 14;
                this.generationButton[0].disabled = false;
                this.generationButton[0].style.cursor = originalButtonCursor;
                return _context.finish(14);

              case 18:
                if (!value) {
                  _context.next = 24;
                  break;
                }

                if (!(typeof value === 'string')) {
                  _context.next = 23;
                  break;
                }

                this.model = value;
                _context.next = 24;
                break;

              case 23:
                throw new TypeError("Type of response value must be string: ".concat(value));

              case 24:
                _context.next = 27;
                break;

              case 26:
                throw new TypeError("requestFunction option is not Function: ".concat(this.options.requestFunction));

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 11, 14, 18]]);
      }));

      function generate() {
        return _generate.apply(this, arguments);
      }

      return generate;
    }()
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }]);

  return CardNumberValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.CardNumberValueEditorComponentController = CardNumberValueEditorComponentController;
/**
 * @ngdoc component
 * @name cardNumberValueEditor
 * @module angularjs-value-editor.card-number
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for card-number input with possibility to generation from backend.
 *
 * Supported options: {@link type:CardNumberValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="cardNumberValueEditorExample" module="cardNumberValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'card-number'" ng-model="model" options="{requestFunction: $ctrl.requestFunction}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('cardNumberValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', class {
 *              requestFunction() {
 *                  return new Promise((resolve) => {
 *                      setTimeout(() => {
 *                          resolve('Generated')
 *                      }, 1000);
 *                  });
 *              }
 *          });
 *     </file>
 * </example>
 */

var CardNumberValueEditorComponent = function CardNumberValueEditorComponent() {
  _classCallCheck(this, CardNumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(67);
  this.controller = CardNumberValueEditorComponentController;
};

exports.default = CardNumberValueEditorComponent;
CardNumberValueEditorComponent.componentName = 'cardNumberValueEditor';

/***/ }),
/* 67 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/card-number/card-number.value-editor.tpl.pug';
var html = "<div class=\"input-group\"><div class=\"input-group-btn\"><button class=\"btn btn-default generate\" type=\"button\" ng-class=\"{{$ctrl.options.inputSize}}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-click=\"$ctrl.generate()\" ng-ref=\"$ctrl.generationButton\" uib-popover=\"{{$ctrl.popoverError}}\" popover-is-open=\"$ctrl.openPopover\" popover-trigger=\"'none'\">{{$ctrl.cardNumberValueEditorLocalizationsService.getLocalization('generate')}}</button></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"/></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var index_selection_value_editor_component_1 = __webpack_require__(69);

var index_selection_value_editor_configuration_provider_1 = __webpack_require__(71);
/**
 * @ngdoc module
 * @name angularjs-value-editor.index-selection
 * @module angularjs-value-editor.index-selection
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.index-selection').constant('indexSelectionValueEditorDefaultOptions', index_selection_value_editor_configuration_provider_1.INDEX_SELECTION_VALUE_EDITOR_DEFAULT_OPTIONS).provider(index_selection_value_editor_configuration_provider_1.default.providerName, index_selection_value_editor_configuration_provider_1.default).component(index_selection_value_editor_component_1.default.componentName, index_selection_value_editor_component_1.default).name();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.indexSelectionValueEditor';

var IndexSelectionValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  IndexSelectionValueEditorComponentController.$inject = ["indexSelectionValueEditorConfigurationService", "$interpolate", "$templateCache"];

  _inherits(IndexSelectionValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(IndexSelectionValueEditorComponentController);

  /*@ngInject*/
  function IndexSelectionValueEditorComponentController(indexSelectionValueEditorConfigurationService, $interpolate, $templateCache) {
    var _this;

    _classCallCheck(this, IndexSelectionValueEditorComponentController);

    _this = _super.call(this, IndexSelectionValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, indexSelectionValueEditorConfigurationService);
    _this.indexSelectionValueEditorConfigurationService = indexSelectionValueEditorConfigurationService;
    return _this;
  }

  _createClass(IndexSelectionValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(IndexSelectionValueEditorComponentController.prototype), "$onInit", this).call(this); // normalize model


      if (this.model && !Array.isArray(this.model)) {
        this.model = [this.model];
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(item) {
      if (this.model !== undefined && this.model !== null) {
        var comparator = this.options.equalityComparator ? this.options.equalityComparator : this.indexSelectionValueEditorConfigurationService.getDefaults().equalityComparator;
        return comparator(this.model, item);
      }

      return false;
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.model = [item.id];
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (whatChanged.optionsTemplate) {
        this.updateTemplate();
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        optionsTemplate: this.options.optionsTemplate
      };
    }
  }]);

  return IndexSelectionValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.IndexSelectionValueEditorComponentController = IndexSelectionValueEditorComponentController;
IndexSelectionValueEditorComponentController.TEMPLATE_URL = __webpack_require__(70);
/**
 * @ngdoc component
 * @name indexSelectionValueEditor
 * @module angularjs-value-editor.index-selection
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for index select.
 *
 * From some unknown reason, model is array.
 *
 * Supported options: {@link type:ValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="indexSelectionValueEditorExample" module="indexSelectionValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="demoController as dc">
 *              <kp-value-editor type="'index-selection'" ng-model="model" options="{items: dc.items, optionsTemplate: '{{$item.text}}'}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('indexSelectionValueEditorExample', ['angularjs-value-editor'])
 *         .controller('demoController', class {
 *              items = [
 *                {
 *                    id: 1,
 *                    text: 'one'
 *                },
 *                {
 *                    id: 2,
 *                    text: 'two'
 *                },
 *                {
 *                    id: 3,
 *                    text: 'three'
 *                },
 *                {
 *                    id: 4,
 *                    text: 'four'
 *                }
 *            ];
 *         });
 *     </file>
 * </example>
 */

var IndexSelectionValueEditorComponent = function IndexSelectionValueEditorComponent() {
  _classCallCheck(this, IndexSelectionValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = IndexSelectionValueEditorComponentController;
};

exports.default = IndexSelectionValueEditorComponent;
IndexSelectionValueEditorComponent.componentName = 'indexSelectionValueEditor';

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/index-selection/index-selection.value-editor.tpl.pug';
var html = "<div class=\"list-group\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" ng-class=\"$ctrl.options.cssClasses\" data-main-input=\"data-main-input\"><button class=\"list-group-item\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-repeat=\"$item in $ctrl.options.items\" ng-class=\"{'active': $ctrl.isSelected($item), 'disabled': $ctrl.valueEditorController.disabled}\" ng-click=\"$ctrl.selectItem($item)\">{{optionsTemplate}}</button></div><input type=\"hidden\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-required=\"$ctrl.valueEditorController.validations.required\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var angular = __webpack_require__(5);
/**
 * @ngdoc constant
 * @name indexSelectionValueEditorDefaultOptions
 * @module angularjs-value-editor.index-selection
 *
 * @description
 * For description see {@link IndexSelectionValueEditorOptions}
 *
 * ```javascript
 *  {
 *      items: [],
 *      optionsTemplate: '{{$item}}',
 *      equalityComparator: (model, item) => angular.equals(Array.isArray(model) ? model[0] : model, item.id)
 *  }
 * ```
 */


exports.INDEX_SELECTION_VALUE_EDITOR_DEFAULT_OPTIONS = {
  items: [],
  optionsTemplate: '{{$item}}',
  equalityComparator: function equalityComparator(model, item) {
    return angular.equals(Array.isArray(model) ? model[0] : model, item.id);
  }
};
/**
 * @ngdoc provider
 * @name indexSelectionValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.index-selection
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link indexSelectionValueEditorDefaultOptions}
 */

var IndexSelectionValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  IndexSelectionValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "indexSelectionValueEditorDefaultOptions"];

  _inherits(IndexSelectionValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(IndexSelectionValueEditorConfigurationProvider);

  /*@ngInject*/
  function IndexSelectionValueEditorConfigurationProvider(aliasesServiceProvider, indexSelectionValueEditorDefaultOptions) {
    _classCallCheck(this, IndexSelectionValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, indexSelectionValueEditorDefaultOptions);
  }

  return IndexSelectionValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = IndexSelectionValueEditorConfigurationProvider;
IndexSelectionValueEditorConfigurationProvider.providerName = 'indexSelectionValueEditorConfigurationService';

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(73);

var angularjs_register_1 = __webpack_require__(0);

var autocomplete_value_editor_component_1 = __webpack_require__(74);

var autocomplete_value_editor_configuration_provider_1 = __webpack_require__(76);
/**
 * @ngdoc module
 * @name angularjs-value-editor.autocomplete
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.autocomplete').constant('autocompleteValueEditorDefaultOptions', autocomplete_value_editor_configuration_provider_1.AUTOCOMPLETE_VALUE_EDITOR_DEFAULT_OPTIONS).provider(autocomplete_value_editor_configuration_provider_1.default.providerName, autocomplete_value_editor_configuration_provider_1.default).component(autocomplete_value_editor_component_1.default.componentName, autocomplete_value_editor_component_1.default).name();

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var angular = __webpack_require__(5);

var AutocompleteValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  AutocompleteValueEditorComponentController.$inject = ["autocompleteValueEditorConfigurationService", "loadingSpinnerTemplateUrl", "$log", "$timeout", "$element"];

  _inherits(AutocompleteValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(AutocompleteValueEditorComponentController);

  /*@ngInject*/
  function AutocompleteValueEditorComponentController(autocompleteValueEditorConfigurationService, loadingSpinnerTemplateUrl, $log, $timeout, $element) {
    var _this;

    _classCallCheck(this, AutocompleteValueEditorComponentController);

    _this = _super.call(this, autocompleteValueEditorConfigurationService);
    _this.autocompleteValueEditorConfigurationService = autocompleteValueEditorConfigurationService;
    _this.loadingSpinnerTemplateUrl = loadingSpinnerTemplateUrl;
    _this.$log = $log;
    _this.$timeout = $timeout;
    _this.$element = $element;
    _this.items = [];
    return _this;
  }

  _createClass(AutocompleteValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(AutocompleteValueEditorComponentController.prototype), "$postLink", this).call(this);

      var inputElement = this.$element[0].querySelector('input');
      this.inputNgModelController = angular.element(inputElement).controller('ngModel');
    }
  }, {
    key: "fetchItemsIfNeed",
    value: function () {
      var _fetchItemsIfNeed = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.items === null || Array.isArray(this.items) && this.items.length === 0)) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return this.fetchItems();

              case 4:
                this.items = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                this.$log.error('Cannot load items, error:', _context.t0);

              case 10:
                _context.next = 13;
                break;

              case 12:
                this.asyncCall();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function fetchItemsIfNeed() {
        return _fetchItemsIfNeed.apply(this, arguments);
      }

      return fetchItemsIfNeed;
    }()
  }, {
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetchItemsIfNeed();

              case 2:
                this.minLength = 0;
                this.asyncCall(function () {
                  return _this2.inputNgModelController.$parsers.forEach(function (parser) {
                    return parser(_this2.model);
                  });
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function open() {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "resetMinLength",
    value: function resetMinLength() {
      var _this3 = this;

      this.asyncCall(function () {
        return _this3.minLength = _this3.options.minLength;
      });
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "fetchItems",
    value: function () {
      var _fetchItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var items;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.asyncCall(function () {
                  return _this4.loading = true;
                });
                _context3.prev = 1;
                _context3.next = 4;
                return this.options.dataSource(Object.assign({}, {
                  query: this.model
                }, this.options.staticParams));

              case 4:
                items = _context3.sent;
                this.$log.debug('Loaded items: ', items);
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                this.$log.error('kp-autocomplete: Loading items failed, setting []: ', _context3.t0);
                items = [];

              case 12:
                _context3.prev = 12;
                this.asyncCall(function () {
                  return _this4.loading = false;
                });
                return _context3.finish(12);

              case 15:
                if (!items.some(function (item) {
                  return typeof item !== 'string';
                })) {
                  _context3.next = 17;
                  break;
                }

                throw new TypeError('Loaded items are not string values.');

              case 17:
                return _context3.abrupt("return", items);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8, 12, 15]]);
      }));

      function fetchItems() {
        return _fetchItems.apply(this, arguments);
      }

      return fetchItems;
    }()
  }, {
    key: "asyncCall",
    value: function asyncCall(func) {
      this.$timeout(func ? func.bind(this) :
      /* istanbul ignore next */
      function () {
        return void 0;
      }, 0);
    }
  }]);

  return AutocompleteValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.AutocompleteValueEditorComponentController = AutocompleteValueEditorComponentController;
/**
 * @ngdoc component
 * @name autocompleteValueEditor
 * @module angularjs-value-editor.autocomplete
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for autocompletion input.
 *
 * Supported options: {@link type:AutocompleteValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="autocompleteValueEditorExample" module="autocompleteValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="demoController as dc">
 *              <kp-value-editor type="'autocomplete'" ng-model="model" options="{dataSource: dc.dataSource}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('autocompleteValueEditorExample', ['angularjs-value-editor'])
 *         .controller('demoController', ['$timeout', class {
 *
 *         constructor($timeout) {
 *             this.$timeout = $timeout;
 *         }
 *
 *         items = [
 *                'one',
 *                'two',
 *                'three',
 *                'four'
 *            ];
 *
 *            dataSource = () => new Promise((resolve) => this.$timeout(resolve(this.items), 1000));
 *         }]);
 *     </file>
 * </example>
 */

var AutocompleteValueEditorComponent = function AutocompleteValueEditorComponent() {
  _classCallCheck(this, AutocompleteValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(75);
  this.controller = AutocompleteValueEditorComponentController;
};

exports.default = AutocompleteValueEditorComponent;
AutocompleteValueEditorComponent.componentName = 'autocompleteValueEditor';

/***/ }),
/* 75 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/autocomplete/autocomplete.value-editor.tpl.pug';
var html = "<div class=\"kp-autocomplete input-group\"><input class=\"form-control\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" ng-focus=\"$ctrl.fetchItemsIfNeed()\" uib-typeahead=\"item for item in $ctrl.items | filter : $viewValue\" typeahead-is-open=\"$ctrl.isOpen\" typeahead-min-length=\"$ctrl.minLength\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"/><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-click=\"$ctrl.open()\" ng-blur=\"$ctrl.resetMinLength()\"><i class=\"glyphicon glyphicon-chevron-down\" ng-hide=\"$ctrl.loading\"></i><ng-include class=\"autocomplete-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.loading\"></ng-include></button></span></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name autocompleteValueEditorDefaultOptions
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 * For description see {@link AutocompleteValueEditorOptions}
 *
 * ```javascript
 * {
 *     minLength: 1,
 *     dataSource: () => Promise.resolve([]),
 *     staticParams: {}
 * }
 * ```
 */


exports.AUTOCOMPLETE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  dataSource:
  /* istanbul ignore next */
  function dataSource() {
    return Promise.resolve([]);
  },
  minLength: 1,
  staticParams: {}
};
/**
 * @ngdoc provider
 * @name autocompleteValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link autocompleteValueEditorDefaultOptions}
 */

var AutocompleteValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AutocompleteValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "autocompleteValueEditorDefaultOptions"];

  _inherits(AutocompleteValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(AutocompleteValueEditorConfigurationProvider);

  /*@ngInject*/
  function AutocompleteValueEditorConfigurationProvider(aliasesServiceProvider, autocompleteValueEditorDefaultOptions) {
    _classCallCheck(this, AutocompleteValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, autocompleteValueEditorDefaultOptions);
  }

  return AutocompleteValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AutocompleteValueEditorConfigurationProvider;
AutocompleteValueEditorConfigurationProvider.providerName = 'autocompleteValueEditorConfigurationService';

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(78);

var angularjs_register_1 = __webpack_require__(0);

var password_value_editor_component_1 = __webpack_require__(79);

var password_value_editor_configuration_provider_1 = __webpack_require__(81);

var password_value_editor_localization_provider_1 = __webpack_require__(82);

var kpModelEquals_directive_1 = __webpack_require__(83);
/**
 * @ngdoc module
 * @name angularjs-value-editor.password
 * @module angularjs-value-editor.password
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.password').constant('passwordValueEditorDefaultOptions', password_value_editor_configuration_provider_1.PASSWORD_VALUE_EDITOR_DEFAULT_OPTIONS).constant('passwordValueEditorDefaultLocalizations', password_value_editor_localization_provider_1.PASSWORD_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(password_value_editor_configuration_provider_1.default.providerName, password_value_editor_configuration_provider_1.default).provider(password_value_editor_localization_provider_1.default.providerName, password_value_editor_localization_provider_1.default).directive(kpModelEquals_directive_1.KpModelEqualsDirective.directiveName, kpModelEquals_directive_1.KpModelEqualsDirective).component(password_value_editor_component_1.default.componentName, password_value_editor_component_1.default).name();

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var PasswordValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  PasswordValueEditorComponentController.$inject = ["passwordValueEditorConfigurationService", "passwordValueEditorLocalizationsService"];

  _inherits(PasswordValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(PasswordValueEditorComponentController);

  /*@ngInject*/
  function PasswordValueEditorComponentController(passwordValueEditorConfigurationService, passwordValueEditorLocalizationsService) {
    _classCallCheck(this, PasswordValueEditorComponentController);

    return _super.call(this, passwordValueEditorConfigurationService, passwordValueEditorLocalizationsService);
  }

  _createClass(PasswordValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      _get(_getPrototypeOf(PasswordValueEditorComponentController.prototype), "$onInit", this).call(this);

      var originalRenderFunction = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        originalRenderFunction();
        _this.passwordRepetition = _this.model;
      };
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }]);

  return PasswordValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.PasswordValueEditorComponentController = PasswordValueEditorComponentController;
/**
 * @ngdoc component
 * @name passwordValueEditor
 * @module angularjs-value-editor.password
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for password input.
 *
 * Supported options: {@link type:PasswordValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="passwordValueEditorExample" module="passwordValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'password'" ng-model="model" options="{withConfirmation: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('passwordValueEditorExample', ['angularjs-value-editor'])
 *     </file>
 * </example>
 */

var PasswordValueEditorComponent = function PasswordValueEditorComponent() {
  _classCallCheck(this, PasswordValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(80);
  this.controller = PasswordValueEditorComponentController;
};

exports.default = PasswordValueEditorComponent;
PasswordValueEditorComponent.componentName = 'passwordValueEditor';

/***/ }),
/* 80 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/password/password.value-editor.tpl.pug';
var html = "<span class=\"with-confirmation\" ng-if=\"$ctrl.options.withConfirmation\"><div class=\"form-group\"><input class=\"form-control\" type=\"password\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}_repetition\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.passwordRepetition\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\"/><span class=\"help-block\"><span class=\"text-muted\" ng-show=\"!!$ctrl.localize('patternDescription')\">{{$ctrl.localize('patternDescription')}}</span><span class=\"text-muted\" ng-show=\"!$ctrl.valueEditorController.validations.required  &amp;&amp; $ctrl.localize('patternDescription') &amp;&amp; $ctrl.localize('noChangeIfEmpty')\">{{$ctrl.localize('helpTextsSeparator')}}</span><span class=\"text-muted\" ng-show=\"!$ctrl.valueEditorController.validations.required\">{{$ctrl.localize('noChangeIfEmpty')}}</span></span></div><div class=\"form-group\"><label for=\"{{$ctrl.valueEditorController.editorId}}_repetition\">{{$ctrl.localize('confirmPassword')}}</label><input class=\"form-control\" type=\"password\" id=\"{{$ctrl.valueEditorController.editorId}}_repetition\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" kp-model-equals=\"{{$ctrl.passwordRepetition}}\" data-main-input=\"data-main-input\"/></div></span><span class=\"without-confirmation\" ng-if=\"!$ctrl.options.withConfirmation\"><input class=\"form-control\" type=\"password\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name passwordValueEditorDefaultOptions
 * @module angularjs-value-editor.password
 *
 * @description
 * For description see {@link PasswordValueEditorOptions}
 *
 * ```javascript
 * {
 *      withConfirmation: false
 * }
 * ```
 */


exports.PASSWORD_VALUE_EDITOR_DEFAULT_OPTIONS = {
  withConfirmation: false
};
/**
 * @ngdoc provider
 * @name passwordValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.password
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link passwordValueEditorDefaultOptions}
 */

var PasswordValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  PasswordValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "passwordValueEditorDefaultOptions"];

  _inherits(PasswordValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(PasswordValueEditorConfigurationProvider);

  /*@ngInject*/
  function PasswordValueEditorConfigurationProvider(aliasesServiceProvider, passwordValueEditorDefaultOptions) {
    _classCallCheck(this, PasswordValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, passwordValueEditorDefaultOptions);
  }

  return PasswordValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = PasswordValueEditorConfigurationProvider;
PasswordValueEditorConfigurationProvider.providerName = 'passwordValueEditorConfigurationService';

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name passwordValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.password
 *
 * @description
 * See {@link passwordValueEditorLocalizationsService}
 */


var PasswordValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  PasswordValueEditorLocalizationsProvider.$inject = ["passwordValueEditorDefaultLocalizations"];

  _inherits(PasswordValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(PasswordValueEditorLocalizationsProvider);

  /*@ngInject*/
  function PasswordValueEditorLocalizationsProvider(passwordValueEditorDefaultLocalizations) {
    _classCallCheck(this, PasswordValueEditorLocalizationsProvider);

    return _super.call(this, passwordValueEditorDefaultLocalizations);
  }

  return PasswordValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = PasswordValueEditorLocalizationsProvider;
PasswordValueEditorLocalizationsProvider.providerName = 'passwordValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name passwordValueEditorDefaultLocalizations
 * @module angularjs-value-editor.password
 *
 * @description
 * ```
 * {
 *      patternDescription: '',
 *      confirmPassword: 'Confirm password',
 *      noChangeIfEmpty: 'If You don\'t want to change password, leave blank.',
 *      helpTextsSeparator: ' | '
 * }
 * ```
 */

exports.PASSWORD_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  patternDescription: '',
  confirmPassword: 'Confirm password',
  noChangeIfEmpty: 'If You don\'t want to change password, leave blank.',
  helpTextsSeparator: ' | '
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name kpModelEquals
 * @module angularjs-value-editor.password
 *
 * @restrict A
 *
 * @param {string} kpModelEquals Comparing value.
 *
 * @description
 * Directive add equals validator. If input value is not equal to model value, it will fails.
 */

var KpModelEqualsDirective = /*#__PURE__*/function () {
  function KpModelEqualsDirective() {
    _classCallCheck(this, KpModelEqualsDirective);

    this.restrict = 'A';
    this.require = 'ngModel';
  }

  _createClass(KpModelEqualsDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, ngModelController) {
      ngModelController.$validators.equals = function (modelValue) {
        var valueToCompare = $attrs[KpModelEqualsDirective.directiveName];
        return !(modelValue || valueToCompare) || valueToCompare === modelValue;
      };

      $attrs.$observe(KpModelEqualsDirective.directiveName, function () {
        ngModelController.$validate();
      });
    }
  }]);

  return KpModelEqualsDirective;
}();

exports.KpModelEqualsDirective = KpModelEqualsDirective;
KpModelEqualsDirective.directiveName = 'kpModelEquals';

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var signature_value_editor_component_1 = __webpack_require__(85);

var signature_value_editor_configuration_provider_1 = __webpack_require__(87);

var signature_value_editor_localization_provider_1 = __webpack_require__(88);
/**
 * @ngdoc module
 * @name angularjs-value-editor.signature
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.signature').constant('signatureValueEditorDefaultOptions', signature_value_editor_configuration_provider_1.SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('signatureValueEditorDefaultLocalizations', signature_value_editor_localization_provider_1.SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(signature_value_editor_configuration_provider_1.default.providerName, signature_value_editor_configuration_provider_1.default).provider(signature_value_editor_localization_provider_1.default.providerName, signature_value_editor_localization_provider_1.default).component(signature_value_editor_component_1.default.componentName, signature_value_editor_component_1.default).name();

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var forms_1 = __webpack_require__(14);

var SignatureValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  SignatureValueEditorComponentController.$inject = ["signatureValueEditorConfigurationService", "signatureValueEditorLocalizationsService", "$injector", "$timeout", "$log"];

  _inherits(SignatureValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(SignatureValueEditorComponentController);

  /*@ngInject*/
  function SignatureValueEditorComponentController(signatureValueEditorConfigurationService, signatureValueEditorLocalizationsService, $injector, $timeout, $log) {
    var _this;

    _classCallCheck(this, SignatureValueEditorComponentController);

    _this = _super.call(this, signatureValueEditorConfigurationService, signatureValueEditorLocalizationsService);
    _this.$injector = $injector;
    _this.$timeout = $timeout;
    _this.$log = $log;
    _this.items = [];
    return _this;
  }

  _createClass(SignatureValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(SignatureValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (newOptions.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "loadItems",
    value: function loadItems() {
      var _this2 = this;

      this.$timeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var $formModel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                $formModel = _this2.valueEditorController.formController ? forms_1.getFormModel(_this2.valueEditorController.formController) : undefined;
                _context.next = 4;
                return _this2.$injector.invoke(_this2.options.dataSource, _this2, {
                  $model: _this2.model,
                  $name: _this2.valueEditorController.name,
                  $formModel: $formModel
                });

              case 4:
                _this2.items = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this2.$log.error('Unable to fetch items. Error:', _context.t0);

              case 10:
                _context.prev = 10;
                _this2.showSelect = _this2.options.canDoAction && _this2.items && _this2.items.length > 0;
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7, 10, 13]]);
      })));
    }
  }]);

  return SignatureValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.SignatureValueEditorComponentController = SignatureValueEditorComponentController;
/**
 * @ngdoc component
 * @name signatureValueEditor
 * @module angularjs-value-editor.signature
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for signature input.
 *
 * Supported options: {@link type:SignatureValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="signatureValueEditorExample" module="signatureValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'signature'" ng-model="model" options="{canDoAction: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('signatureValueEditorExample', ['angularjs-value-editor'])
 *          .config((signatureValueEditorConfigurationServiceProvider) => signatureValueEditorConfigurationServiceProvider.setConfiguration({
 *              dataSource: () => Promise.resolve(['one', 'two', 'three'])
 *          }));
 *     </file>
 * </example>
 */

var SignatureValueEditorComponent = function SignatureValueEditorComponent() {
  _classCallCheck(this, SignatureValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(86);
  this.controller = SignatureValueEditorComponentController;
};

exports.default = SignatureValueEditorComponent;
SignatureValueEditorComponent.componentName = 'signatureValueEditor';

/***/ }),
/* 86 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/signature/signature.value-editor.tpl.pug';
var html = "<div class=\"input-group\" ng-if=\"$ctrl.showSelect\"><div class=\"input-group-addon input-group-select\"><ui-select ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" search-enabled=\"false\" ng-disabled=\"$ctrl.valueEditorController.disabled\" tagging=\"tagging\"><ui-select-match placeholder=\"{{$ctrl.localize('select')}}\">{{($ctrl.items | filter: $select.selected)[0]}}</ui-select-match><ui-select-choices repeat=\"$item in $ctrl.items track by $item\">{{$item}}</ui-select-choices></ui-select></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.localize('orType')}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-if=\"!$ctrl.showSelect\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name signatureValueEditorDefaultOptions
 * @module angularjs-value-editor.signature
 *
 * @description
 * For description see {@link SignatureValueEditorOptions}
 *
 * ```javascript
 * {
 *      canDoAction: false,
 *      dataSource: () => Promise.resolve([])
 * }
 * ```
 */


exports.SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  canDoAction: false,
  dataSource:
  /* istanbul ignore next */
  function dataSource() {
    return Promise.resolve([]);
  }
};
/**
 * @ngdoc provider
 * @name signatureValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link signatureValueEditorDefaultOptions}
 */

var SignatureValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SignatureValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "signatureValueEditorDefaultOptions"];

  _inherits(SignatureValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(SignatureValueEditorConfigurationProvider);

  /*@ngInject*/
  function SignatureValueEditorConfigurationProvider(aliasesServiceProvider, signatureValueEditorDefaultOptions) {
    _classCallCheck(this, SignatureValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, signatureValueEditorDefaultOptions);
  }

  return SignatureValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = SignatureValueEditorConfigurationProvider;
SignatureValueEditorConfigurationProvider.providerName = 'signatureValueEditorConfigurationService';

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name signatureValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.signature
 *
 * @description
 * See {@link signatureValueEditorLocalizationsService}
 */


var SignatureValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SignatureValueEditorLocalizationsProvider.$inject = ["signatureValueEditorDefaultLocalizations"];

  _inherits(SignatureValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(SignatureValueEditorLocalizationsProvider);

  /*@ngInject*/
  function SignatureValueEditorLocalizationsProvider(signatureValueEditorDefaultLocalizations) {
    _classCallCheck(this, SignatureValueEditorLocalizationsProvider);

    return _super.call(this, signatureValueEditorDefaultLocalizations);
  }

  return SignatureValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = SignatureValueEditorLocalizationsProvider;
SignatureValueEditorLocalizationsProvider.providerName = 'signatureValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name signatureValueEditorDefaultLocalizations
 * @module angularjs-value-editor.signature
 *
 * @description
 * ```
 * {
 *      select: 'Select...',
 *      orType: 'or type...'
 * }
 * ```
 */

exports.SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  select: 'Select...',
  orType: 'or type...'
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var access_number_value_editor_component_1 = __webpack_require__(90);

var access_number_value_editor_configuration_provider_1 = __webpack_require__(92);

var access_number_value_editor_localization_provider_1 = __webpack_require__(93);
/**
 * @ngdoc module
 * @name angularjs-value-editor.access-number
 * @module angularjs-value-editor.access-number
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.access-number').constant('accessNumberValueEditorDefaultOptions', access_number_value_editor_configuration_provider_1.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS).constant('accessNumberValueEditorDefaultLocalizations', access_number_value_editor_localization_provider_1.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(access_number_value_editor_configuration_provider_1.default.providerName, access_number_value_editor_configuration_provider_1.default).provider(access_number_value_editor_localization_provider_1.default.providerName, access_number_value_editor_localization_provider_1.default).component(access_number_value_editor_component_1.default.componentName, access_number_value_editor_component_1.default).name();

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var forms_1 = __webpack_require__(14);

var AccessNumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  AccessNumberValueEditorComponentController.$inject = ["accessNumberValueEditorConfigurationService", "accessNumberValueEditorLocalizationsService", "$injector", "$timeout", "$log"];

  _inherits(AccessNumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(AccessNumberValueEditorComponentController);

  /*@ngInject*/
  function AccessNumberValueEditorComponentController(accessNumberValueEditorConfigurationService, accessNumberValueEditorLocalizationsService, $injector, $timeout, $log) {
    var _this;

    _classCallCheck(this, AccessNumberValueEditorComponentController);

    _this = _super.call(this, accessNumberValueEditorConfigurationService, accessNumberValueEditorLocalizationsService);
    _this.$injector = $injector;
    _this.$timeout = $timeout;
    _this.$log = $log;
    _this.items = [];
    return _this;
  }

  _createClass(AccessNumberValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AccessNumberValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (newOptions.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "loadItems",
    value: function loadItems() {
      var _this2 = this;

      this.$timeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var $formModel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                $formModel = _this2.valueEditorController.formController ? forms_1.getFormModel(_this2.valueEditorController.formController) : undefined;
                _context.next = 4;
                return _this2.$injector.invoke(_this2.options.dataSource, _this2, {
                  $model: _this2.model,
                  $name: _this2.valueEditorController.name,
                  $formModel: $formModel
                });

              case 4:
                _this2.items = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this2.$log.error('Unable to fetch items. Error:', _context.t0);

              case 10:
                _context.prev = 10;
                _this2.showSelect = _this2.options.canDoAction && _this2.items && _this2.items.length > 0;
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7, 10, 13]]);
      })));
    }
  }, {
    key: "required",
    get: function get() {
      var _a, _b, _c;

      return forms_1.getFormModel(this.valueEditorController.formController).issue ? false : (_c = (_b = (_a = this.valueEditorController) === null || _a === void 0 ? void 0 : _a.validations) === null || _b === void 0 ? void 0 : _b.required) !== null && _c !== void 0 ? _c : false;
    }
  }]);

  return AccessNumberValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.AccessNumberValueEditorComponentController = AccessNumberValueEditorComponentController;
/**
 * @ngdoc component
 * @name accessNumberValueEditor
 * @module angularjs-value-editor.access-number
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for access number input.
 *
 * Supported options: {@link type:AccessNumberValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="accessNumberValueEditorExample" module="accessNumberValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'access-number'" ng-model="model" options="{canDoAction: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('accessNumberValueEditorExample', ['angularjs-value-editor'])
 *          .config((accessNumberValueEditorConfigurationServiceProvider) => accessNumberValueEditorConfigurationServiceProvider.setConfiguration({
 *              dataSource: () => Promise.resolve(['one', 'two', 'three'])
 *          }));
 *     </file>
 * </example>
 */

var AccessNumberValueEditorComponent = function AccessNumberValueEditorComponent() {
  _classCallCheck(this, AccessNumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(91);
  this.controller = AccessNumberValueEditorComponentController;
};

exports.default = AccessNumberValueEditorComponent;
AccessNumberValueEditorComponent.componentName = 'accessNumberValueEditor';

/***/ }),
/* 91 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/access-number/access-number.value-editor.tpl.pug';
var html = "<div class=\"input-group\" ng-if=\"$ctrl.showSelect\"><div class=\"input-group-addon input-group-select\"><ui-select ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" search-enabled=\"false\" ng-disabled=\"$ctrl.valueEditorController.disabled\" tagging=\"tagging\"><ui-select-match placeholder=\"{{$ctrl.localize('select')}}\">{{($ctrl.items | filter: $select.selected)[0]}}</ui-select-match><ui-select-choices repeat=\"$item in $ctrl.items track by $item\">{{$item}}</ui-select-choices></ui-select></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.localize('orType')}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-if=\"!$ctrl.showSelect\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name accessNumberValueEditorDefaultOptions
 * @module angularjs-value-editor.access-number
 *
 * @description
 * For description see {@link AccessNumberValueEditorOptions}
 *
 * ```javascript
 * {
 *      canDoAction: false,
 *      dataSource: () => Promise.resolve([])
 * }
 * ```
 */


exports.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  canDoAction: false,
  dataSource:
  /* istanbul ignore next */
  function dataSource() {
    return Promise.resolve([]);
  }
};
/**
 * @ngdoc provider
 * @name accessNumberValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.access-number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link accessNumberValueEditorDefaultOptions}
 */

var AccessNumberValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AccessNumberValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "accessNumberValueEditorDefaultOptions"];

  _inherits(AccessNumberValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(AccessNumberValueEditorConfigurationProvider);

  /*@ngInject*/
  function AccessNumberValueEditorConfigurationProvider(aliasesServiceProvider, accessNumberValueEditorDefaultOptions) {
    _classCallCheck(this, AccessNumberValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, accessNumberValueEditorDefaultOptions);
  }

  return AccessNumberValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AccessNumberValueEditorConfigurationProvider;
AccessNumberValueEditorConfigurationProvider.providerName = 'accessNumberValueEditorConfigurationService';

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name accessNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.access-number
 *
 * @description
 * See {@link AccessNumberValueEditorLocalizationsService}
 */


var AccessNumberValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AccessNumberValueEditorLocalizationsProvider.$inject = ["accessNumberValueEditorDefaultLocalizations"];

  _inherits(AccessNumberValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(AccessNumberValueEditorLocalizationsProvider);

  /*@ngInject*/
  function AccessNumberValueEditorLocalizationsProvider(accessNumberValueEditorDefaultLocalizations) {
    _classCallCheck(this, AccessNumberValueEditorLocalizationsProvider);

    return _super.call(this, accessNumberValueEditorDefaultLocalizations);
  }

  return AccessNumberValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AccessNumberValueEditorLocalizationsProvider;
AccessNumberValueEditorLocalizationsProvider.providerName = 'accessNumberValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name accessNumberValueEditorDefaultLocalizations
 * @module angularjs-value-editor.access-number
 *
 * @description
 * ```
 * {
 *      select: 'Select...',
 *      orType: 'or type...'
 * }
 * ```
 */

exports.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  select: 'Select...',
  orType: 'or type...'
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(95);

var angularjs_register_1 = __webpack_require__(0);

var number_range_value_editor_component_1 = __webpack_require__(96);

var number_range_value_editor_configuration_provider_1 = __webpack_require__(98);

var number_range_value_editor_localization_provider_1 = __webpack_require__(99);

var number_range_validations_directive_1 = __webpack_require__(100);
/**
 * @ngdoc module
 * @name angularjs-value-editor.number-range
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.number-range').constant('numberRangeValueEditorDefaultOptions', number_range_value_editor_configuration_provider_1.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('numberRangeValueEditorDefaultLocalizations', number_range_value_editor_localization_provider_1.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(number_range_value_editor_configuration_provider_1.default.providerName, number_range_value_editor_configuration_provider_1.default).provider(number_range_value_editor_localization_provider_1.default.providerName, number_range_value_editor_localization_provider_1.default).directive(number_range_validations_directive_1.default.directiveName, number_range_validations_directive_1.default).component(number_range_value_editor_component_1.default.componentName, number_range_value_editor_component_1.default).name();

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var uuid_generator_1 = __webpack_require__(8);

var NumberRangeValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  NumberRangeValueEditorComponentController.$inject = ["numberRangeValueEditorConfigurationService", "numberRangeValueEditorLocalizationsService"];

  _inherits(NumberRangeValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(NumberRangeValueEditorComponentController);

  /*@ngInject*/
  function NumberRangeValueEditorComponentController(numberRangeValueEditorConfigurationService, numberRangeValueEditorLocalizationsService) {
    var _this;

    _classCallCheck(this, NumberRangeValueEditorComponentController);

    _this = _super.call(this, numberRangeValueEditorConfigurationService, numberRangeValueEditorLocalizationsService);
    _this.uuid = uuid_generator_1.generateUuid();
    return _this;
  }

  _createClass(NumberRangeValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;

      _get(_getPrototypeOf(NumberRangeValueEditorComponentController.prototype), "$onInit", this).call(this);

      var originalRender = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        var _a, _b, _c, _d;

        originalRender();
        _this2.modelFrom = (_b = (_a = _this2.model) === null || _a === void 0 ? void 0 : _a.from) !== null && _b !== void 0 ? _b : null;
        _this2.modelTo = (_d = (_c = _this2.model) === null || _c === void 0 ? void 0 : _c.to) !== null && _d !== void 0 ? _d : null;
      };
    }
  }, {
    key: "$doCheck",
    value: function $doCheck() {
      var _a, _b, _c, _d, _e, _f;

      var isNumberInvalid = ((_c = (_b = (_a = this.fromRef) === null || _a === void 0 ? void 0 : _a.controller('ngModel').$error) === null || _b === void 0 ? void 0 : _b.number) !== null && _c !== void 0 ? _c : false) || ((_f = (_e = (_d = this.toRef) === null || _d === void 0 ? void 0 : _d.controller('ngModel').$error) === null || _e === void 0 ? void 0 : _e.number) !== null && _f !== void 0 ? _f : false);
      this.validNumber = !isNumberInvalid;
    }
  }, {
    key: "setNgModel",
    value: function setNgModel() {
      this.model = {
        from: this.modelFrom,
        to: this.modelTo
      };
    }
    /* istanbul ignore next */

  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "validations",
    get: function get() {
      return this.valueEditorController.validations;
    }
  }]);

  return NumberRangeValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.NumberRangeValueEditorComponentController = NumberRangeValueEditorComponentController;
/**
 * @ngdoc component
 * @name numberRangeValueEditor
 * @module angularjs-value-editor.number-range
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for integer number range input.
 *
 * Supported options: {@link type:NumberRangeValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="numberRangeValueEditorExample" module="numberRangeValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'number-range'" ng-model="model" options="{canDoAction: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('numberRangeValueEditorExample', ['angularjs-value-editor'])
 *          .config((numberRangeValueEditorConfigurationServiceProvider) => numberRangeValueEditorConfigurationServiceProvider.setConfiguration({
 *              dataSource: () => Promise.resolve(['one', 'two', 'three'])
 *          }));
 *     </file>
 * </example>
 */

var NumberRangeValueEditorComponent = function NumberRangeValueEditorComponent() {
  _classCallCheck(this, NumberRangeValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(97);
  this.controller = NumberRangeValueEditorComponentController;
};

exports.default = NumberRangeValueEditorComponent;
NumberRangeValueEditorComponent.componentName = 'numberRangeValueEditor';

/***/ }),
/* 97 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/number-range/number-range.value-editor.tpl.pug';
var html = "<div class=\"form-control multi-input-group\"><div class=\"input-group from\"><label class=\"input-group-addon\" for=\"{{$ctrl.uuid}}_from\">{{$ctrl.localize('from')}}</label><input class=\"form-control\" id=\"{{$ctrl.uuid}}_from\" type=\"number\" ng-model=\"$ctrl.modelFrom\" ng-change=\"$ctrl.setNgModel()\" ng-ref=\"$ctrl.fromRef\" ng-disabled=\"$ctrl.valueEditorController.disabled\"/></div><div class=\"input-group to\"><label class=\"input-group-addon\" for=\"{{$ctrl.uuid}}_to\">{{$ctrl.localize('to')}}</label><input class=\"form-control\" id=\"{{$ctrl.uuid}}_to\" type=\"number\" ng-model=\"$ctrl.modelTo\" ng-change=\"$ctrl.setNgModel()\" ng-ref=\"$ctrl.toRef\" ng-disabled=\"$ctrl.valueEditorController.disabled\"/></div></div><input type=\"hidden\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" number-range-validations=\"$ctrl.validNumber\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name numberRangeValueEditorDefaultOptions
 * @module angularjs-value-editor.number-range
 *
 * @description
 * For description see {@link NumberRangeValueEditorOptions}
 *
 * ```javascript
 * {
 * }
 * ```
 */


exports.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_OPTIONS = {};
/**
 * @ngdoc provider
 * @name numberRangeValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link numberRangeValueEditorDefaultOptions}
 */

var NumberRangeValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberRangeValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "numberRangeValueEditorDefaultOptions"];

  _inherits(NumberRangeValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(NumberRangeValueEditorConfigurationProvider);

  /*@ngInject*/
  function NumberRangeValueEditorConfigurationProvider(aliasesServiceProvider, numberRangeValueEditorDefaultOptions) {
    _classCallCheck(this, NumberRangeValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, numberRangeValueEditorDefaultOptions);
  }

  return NumberRangeValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = NumberRangeValueEditorConfigurationProvider;
NumberRangeValueEditorConfigurationProvider.providerName = 'numberRangeValueEditorConfigurationService';

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name numberRangeValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.number-range
 *
 * @description
 * See {@link NumberRangeValueEditorLocalizationsService}
 */


var NumberRangeValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberRangeValueEditorLocalizationsProvider.$inject = ["numberRangeValueEditorDefaultLocalizations"];

  _inherits(NumberRangeValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(NumberRangeValueEditorLocalizationsProvider);

  /*@ngInject*/
  function NumberRangeValueEditorLocalizationsProvider(numberRangeValueEditorDefaultLocalizations) {
    _classCallCheck(this, NumberRangeValueEditorLocalizationsProvider);

    return _super.call(this, numberRangeValueEditorDefaultLocalizations);
  }

  return NumberRangeValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = NumberRangeValueEditorLocalizationsProvider;
NumberRangeValueEditorLocalizationsProvider.providerName = 'numberRangeValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name numberRangeValueEditorDefaultLocalizations
 * @module angularjs-value-editor.number-range
 *
 * @description
 * ```
 * {
 *      from: 'from',
 *      to: 'to'
 * }
 * ```
 */

exports.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  from: 'from',
  to: 'to'
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name numberRangeValidations
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 */

var NumberRangeValidationsDirective = /*#__PURE__*/function () {
  NumberRangeValidationsDirective.$inject = ["$parse"];

  /*@ngInject*/
  function NumberRangeValidationsDirective($parse) {
    _classCallCheck(this, NumberRangeValidationsDirective);

    this.$parse = $parse;
    this.restrict = 'A';
    this.require = ['ngModel', '^numberRangeValueEditor'];
  }

  _createClass(NumberRangeValidationsDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          numberRangeValueEditorController = _ref2[1];

      ngModelController.$validators.required = requiredValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.min = minValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.max = maxValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.fromBiggerThanTo = fromBiggerThanToValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.toBiggerThanFrom = toBiggerThanFromValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.number = numberValidationFactory($scope, this.$parse, $attrs);
    }
  }]);

  return NumberRangeValidationsDirective;
}();

exports.default = NumberRangeValidationsDirective;
NumberRangeValidationsDirective.directiveName = 'numberRangeValidations';

function requiredValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a;

    return !((_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) || Number.isInteger(modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) && Number.isInteger(modelValue === null || modelValue === void 0 ? void 0 : modelValue.to);
  };
}

function minValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a, _b, _c;

    var min = (_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.min;
    return !Number.isInteger(min) || ((_b = modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) !== null && _b !== void 0 ? _b : min) >= min && ((_c = modelValue === null || modelValue === void 0 ? void 0 : modelValue.to) !== null && _c !== void 0 ? _c : min) >= min;
  };
}

function maxValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a, _b, _c;

    var max = (_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.max;
    return !Number.isInteger(max) || ((_b = modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) !== null && _b !== void 0 ? _b : max) <= max && ((_c = modelValue === null || modelValue === void 0 ? void 0 : modelValue.to) !== null && _c !== void 0 ? _c : max) <= max;
  };
}

function fromBiggerThanToValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a;

    return !((_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.fromBiggerThanTo) || (modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) > (modelValue === null || modelValue === void 0 ? void 0 : modelValue.to);
  };
}

function toBiggerThanFromValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a;

    return !((_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.toBiggerThanFrom) || (modelValue === null || modelValue === void 0 ? void 0 : modelValue.to) > (modelValue === null || modelValue === void 0 ? void 0 : modelValue.from);
  };
}

function numberValidationFactory($scope, $parse, $attrs) {
  return function () {
    return $parse($attrs[NumberRangeValidationsDirective.directiveName])($scope);
  };
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var exemplar_bar_code_value_editor_config_1 = __webpack_require__(102);
/**
 * @ngdoc module
 * @name angularjs-value-editor.exemplar-bar-code
 * @module angularjs-value-editor.exemplar-bar-code
 *
 * @description
 * `exemplar-bar-code` value editor is only {@link aliasesService alias} for {@link textValueEditor text-value-editor} with default {@link TextValueEditorOptions options}:
 * ```
 *  {
 *      type: 'text'
 *  }
 * ```
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.exemplar-bar-code').config(exemplar_bar_code_value_editor_config_1.default).name();

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exemplarBarCodeValueEditorConfig.$inject = ["aliasesServiceProvider", "textValueEditorConfigurationServiceProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
var EXEMPLAR_BAR_CODE_ALIAS = 'exemplar-bar-code';
/*@ngInject*/

function exemplarBarCodeValueEditorConfig(aliasesServiceProvider, textValueEditorConfigurationServiceProvider) {
  aliasesServiceProvider.addAlias(EXEMPLAR_BAR_CODE_ALIAS, 'text');
  textValueEditorConfigurationServiceProvider.forAlias(EXEMPLAR_BAR_CODE_ALIAS).setConfiguration({
    type: 'text'
  });
}

exports.default = exemplarBarCodeValueEditorConfig;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(104);

var angularjs_register_1 = __webpack_require__(0);

var angular_tree_control_1 = __webpack_require__(105);

var acceptable_root_value_editor_configuration_provider_1 = __webpack_require__(107);

var acceptable_root_value_editor_localization_provider_1 = __webpack_require__(108);

var acceptable_root_value_editor_component_1 = __webpack_require__(109);

var acceptable_root_value_editor_1 = __webpack_require__(112);
/**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable-root
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.acceptable-root', [angular_tree_control_1.default]).config(acceptable_root_value_editor_1.acceptableRootValueEditorConfig).constant('acceptableRootValueEditorDefaultOptions', acceptable_root_value_editor_configuration_provider_1.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_OPTIONS).constant('acceptableRootValueEditorDefaultLocalizations', acceptable_root_value_editor_localization_provider_1.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(acceptable_root_value_editor_configuration_provider_1.default.providerName, acceptable_root_value_editor_configuration_provider_1.default).provider(acceptable_root_value_editor_localization_provider_1.default.providerName, acceptable_root_value_editor_localization_provider_1.default).component(acceptable_root_value_editor_component_1.default.componentName, acceptable_root_value_editor_component_1.default).name();

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// neni cas... :-(

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(106);

var angular = __webpack_require__(5);

function createPath(startScope) {
  return function path() {
    var currentPath = [];
    var scope = startScope;
    var prevNode;

    while (scope && scope.$node !== startScope.synteticRoot) {
      if (prevNode !== scope.$node) {
        currentPath.push(scope.$node);
      }

      prevNode = scope.$node;
      scope = scope.$parent;
    }

    return currentPath;
  };
}

function ensureDefault(obj, prop, value) {
  if (!obj.hasOwnProperty(prop)) {
    obj[prop] = value;
  }
}

function defaultIsLeaf(node, $scope) {
  return !(node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) || (node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren].length) === 0;
}

function shallowCopy(src, dst) {
  if (angular.isArray(src)) {
    dst = dst || [];

    for (var i = 0; i < src.length; i++) {
      dst[i] = src[i];
    }
  } else if (angular.isObject(src)) {
    dst = dst || {};

    for (var key in src) {
      if (Object.hasOwnProperty.call(src, key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
  }

  return dst || src;
}

function defaultEquality(a, b, $scope) {
  if (!a || !b) {
    return false;
  }

  a = shallowCopy(a);
  a[$scope.options.nodeChildren] = [];
  b = shallowCopy(b);
  b[$scope.options.nodeChildren] = [];
  return angular.equals(a, b);
}

function defaultIsSelectable() {
  return true;
}

function ensureAllDefaultOptions($scope) {
  ensureDefault($scope.options, 'multiSelection', false);
  ensureDefault($scope.options, 'nodeChildren', 'children');
  ensureDefault($scope.options, 'dirSelectable', 'true');
  ensureDefault($scope.options, 'injectClasses', {});
  ensureDefault($scope.options.injectClasses, 'ul', '');
  ensureDefault($scope.options.injectClasses, 'li', '');
  ensureDefault($scope.options.injectClasses, 'liSelected', '');
  ensureDefault($scope.options.injectClasses, 'iExpanded', '');
  ensureDefault($scope.options.injectClasses, 'iCollapsed', '');
  ensureDefault($scope.options.injectClasses, 'iLeaf', '');
  ensureDefault($scope.options.injectClasses, 'label', '');
  ensureDefault($scope.options.injectClasses, 'labelSelected', '');
  ensureDefault($scope.options, 'equality', defaultEquality);
  ensureDefault($scope.options, 'isLeaf', defaultIsLeaf);
  ensureDefault($scope.options, 'allowDeselect', true);
  ensureDefault($scope.options, 'isSelectable', defaultIsSelectable);
}

exports.default = angular.module('treeControl', []).constant('treeConfig', {
  templateUrl: null
}).directive('treecontrol', ['$compile', function ($compile) {
  /**
   * @param cssClass - the css class
   * @param addClassProperty - should we wrap the class name with class=""
   */
  function classIfDefined(cssClass, addClassProperty) {
    if (cssClass) {
      if (addClassProperty) {
        return "class=\"".concat(cssClass, "\"");
      } else {
        return cssClass;
      }
    } else {
      return '';
    }
  }

  return {
    restrict: 'EA',
    require: 'treecontrol',
    transclude: true,
    scope: {
      treeModel: '=',
      selectedNode: '=?',
      selectedNodes: '=?',
      expandedNodes: '=?',
      onSelection: '&',
      onNodeToggle: '&',
      options: '=?',
      orderBy: '=?',
      reverseOrder: '@',
      filterExpression: '=?',
      filterComparator: '=?'
    },
    controller: ['$scope', '$templateCache', '$interpolate', 'treeConfig', function treecontrolController($scope, $templateCache, $interpolate, treeConfig) {
      $scope.options = $scope.options || {};
      ensureAllDefaultOptions($scope);
      $scope.selectedNodes = $scope.selectedNodes || [];
      $scope.expandedNodes = $scope.expandedNodes || [];
      $scope.expandedNodesMap = {};

      for (var i = 0; i < $scope.expandedNodes.length; i++) {
        $scope.expandedNodesMap["a".concat(i)] = $scope.expandedNodes[i];
      }

      $scope.parentScopeOfTree = $scope.$parent;

      function isSelectedNode(node) {
        if (!$scope.options.multiSelection && $scope.options.equality(node, $scope.selectedNode, $scope)) {
          return true;
        } else if ($scope.options.multiSelection && $scope.selectedNodes) {
          return $scope.selectedNodes.some(function (child) {
            return $scope.options.equality(node, child, $scope);
          });
        }
      }

      $scope.headClass = function headClass(node) {
        var liSelectionClass = classIfDefined($scope.options.injectClasses.liSelected, false);
        var injectSelectionClass = '';

        if (liSelectionClass && isSelectedNode(node)) {
          injectSelectionClass = " ".concat(liSelectionClass);
        }

        if ($scope.options.isLeaf(node, $scope)) {
          return "tree-leaf".concat(injectSelectionClass);
        }

        if ($scope.expandedNodesMap[this.$id]) {
          return "tree-expanded".concat(injectSelectionClass);
        } else {
          return "tree-collapsed".concat(injectSelectionClass);
        }
      };

      $scope.iBranchClass = function iBranchClass() {
        if ($scope.expandedNodesMap[this.$id]) {
          return classIfDefined($scope.options.injectClasses.iExpanded);
        } else {
          return classIfDefined($scope.options.injectClasses.iCollapsed);
        }
      };

      $scope.nodeExpanded = function nodeExpanded() {
        return !!$scope.expandedNodesMap[this.$id];
      };

      $scope.selectNodeHead = function selectNodeHead() {
        var transcludedScope = this;
        var expanding = $scope.expandedNodesMap[transcludedScope.$id] === undefined;
        $scope.expandedNodesMap[transcludedScope.$id] = expanding ? transcludedScope.$node : undefined;

        if (expanding) {
          $scope.expandedNodes.push(transcludedScope.$node);
        } else {
          var index;

          for (var _i = 0; _i < $scope.expandedNodes.length && !index; _i++) {
            if ($scope.options.equality($scope.expandedNodes[_i], transcludedScope.$node, $scope)) {
              index = _i;
            }
          }

          if (index !== undefined) {
            $scope.expandedNodes.splice(index, 1);
          }
        }

        if ($scope.onNodeToggle) {
          var parentNode = transcludedScope.$parent.$node === transcludedScope.synteticRoot ? null : transcludedScope.$parent.$node;
          var path = createPath(transcludedScope);
          $scope.onNodeToggle({
            node: transcludedScope.$node,
            $parentNode: parentNode,
            $path: path,
            $index: transcludedScope.$index,
            $first: transcludedScope.$first,
            $middle: transcludedScope.$middle,
            $last: transcludedScope.$last,
            $odd: transcludedScope.$odd,
            $even: transcludedScope.$even,
            expanded: expanding
          });
        }
      };

      $scope.selectNodeLabel = function selectNodeLabel(selectedNode) {
        var transcludedScope = this;

        if (!$scope.options.isLeaf(selectedNode, $scope) && (!$scope.options.dirSelectable || !$scope.options.isSelectable(selectedNode))) {
          // Branch node is not selectable, expand
          this.selectNodeHead();
        } else if ($scope.options.isLeaf(selectedNode, $scope) && !$scope.options.isSelectable(selectedNode)) {
          // Leaf node is not selectable
          return;
        } else {
          var selected = false;

          if ($scope.options.multiSelection) {
            var pos = -1;

            for (var _i2 = 0; _i2 < $scope.selectedNodes.length; _i2++) {
              if ($scope.options.equality(selectedNode, $scope.selectedNodes[_i2], $scope)) {
                pos = _i2;
                break;
              }
            }

            if (pos === -1) {
              $scope.selectedNodes.push(selectedNode);
              selected = true;
            } else {
              $scope.selectedNodes.splice(pos, 1);
            }
          } else {
            if (!$scope.options.equality(selectedNode, $scope.selectedNode, $scope)) {
              $scope.selectedNode = selectedNode;
              selected = true;
            } else {
              if ($scope.options.allowDeselect) {
                $scope.selectedNode = undefined;
              } else {
                $scope.selectedNode = selectedNode;
                selected = true;
              }
            }
          }

          if ($scope.onSelection) {
            var parentNode = transcludedScope.$parent.$node === transcludedScope.synteticRoot ? null : transcludedScope.$parent.$node;
            var path = createPath(transcludedScope);
            $scope.onSelection({
              node: selectedNode,
              selected: selected,
              $parentNode: parentNode,
              $path: path,
              $index: transcludedScope.$index,
              $first: transcludedScope.$first,
              $middle: transcludedScope.$middle,
              $last: transcludedScope.$last,
              $odd: transcludedScope.$odd,
              $even: transcludedScope.$even
            });
          }
        }
      };

      $scope.hasCheckedAnyChild = function hasCheckedAnyChild(node) {
        var _a;

        return (_a = node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) === null || _a === void 0 ? void 0 : _a.some(function (child) {
          return isSelectedNode(child) || hasCheckedAnyChild(child);
        });
      };

      $scope.hasCheckedAllChildren = function hasCheckedAllChildren(node) {
        var _a, _b;

        return (_b = (_a = node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) === null || _a === void 0 ? void 0 : _a.every(function (child) {
          if (child[$scope.options.nodeChildren]) {
            return isSelectedNode(child) && hasCheckedAllChildren(child);
          }

          return isSelectedNode(child);
        })) !== null && _b !== void 0 ? _b : true;
      };

      function expandSelectedNodesRecursive(node) {
        var _iterator = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;

            if ($scope.hasCheckedAnyChild(child)) {
              $scope.expandedNodes.push(child);
            }

            if (node[$scope.options.nodeChildren]) {
              expandSelectedNodesRecursive(child);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      $scope.expandSelectedNodes = function expandSelectedNodes(node) {
        if ($scope.hasCheckedAnyChild(node)) {
          $scope.expandedNodes.push(node);
        }

        expandSelectedNodesRecursive(node);
      };

      $scope.selectAllChildren = function selectAllChildren(node) {
        if (node[$scope.options.nodeChildren]) {
          var _iterator2 = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;

              if (!isSelectedNode(child)) {
                $scope.selectedNodes.push(child);
              }

              selectAllChildren(child);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };

      $scope.deselectAllChildren = function deselectAllChildren(node) {
        if (node[$scope.options.nodeChildren]) {
          var _iterator3 = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var child = _step3.value;

              for (var _i3 = 0; _i3 < $scope.selectedNodes.length; _i3++) {
                if ($scope.options.equality($scope.selectedNodes[_i3], child, $scope)) {
                  $scope.selectedNodes.splice(_i3, 1);
                  break;
                }
              }

              deselectAllChildren(child);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      };

      function expandAllChildren(node) {
        if (node[$scope.options.nodeChildren]) {
          var _iterator4 = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var child = _step4.value;

              if (!isExpandedNode(child)) {
                $scope.expandedNodes.push(child);
              }

              expandAllChildren(child);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }

      $scope.expandSelfAndAllChildren = function expandSelfAndAllChildren(node) {
        if (!isExpandedNode(node)) {
          this.expandedNodes.push(node);
        }

        expandAllChildren(node);
      };

      function isExpandedNode(node) {
        return $scope.expandedNodes.some(function (child) {
          return $scope.options.equality(node, child, $scope);
        });
      }

      function hasExpandedAllChildren(node) {
        return !(node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) || (node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren].every(function (child) {
          var _a, _b;

          return isExpandedNode(child) && hasExpandedAllChildren(child) || ((_b = (_a = child[$scope.options.nodeChildren]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) === 0;
        }));
      }

      $scope.isExpandedAndAllChildrenToo = function isExpandedAndAllChildrenToo(node) {
        return isExpandedNode(node) && hasExpandedAllChildren(node);
      };

      $scope.expandOrSelectAll = function expandOrSelectAll(node) {
        if ($scope.isExpandedAndAllChildrenToo(node)) {
          if ($scope.options.multiSelection) {
            if ($scope.hasCheckedAllChildren(node)) {
              $scope.deselectAllChildren(node);
            } else {
              $scope.selectAllChildren(node);
            }
          }
        } else {
          $scope.expandSelfAndAllChildren(node);
        }
      };

      $scope.isSelectedNode = isSelectedNode;

      $scope.selectedClass = function selectedClass() {
        var isThisNodeSelected = isSelectedNode(this.$node);
        var labelSelectionClass = classIfDefined($scope.options.injectClasses.labelSelected, false);
        var injectSelectionClass = '';

        if (labelSelectionClass && isThisNodeSelected) {
          injectSelectionClass = " ".concat(labelSelectionClass);
        }

        return isThisNodeSelected ? "tree-selected".concat(injectSelectionClass) : '';
      };

      $scope.unselectableClass = function unselectableClass() {
        var isThisNodeUnselectable = !$scope.options.isSelectable(this.$node);
        var labelUnselectableClass = classIfDefined($scope.options.injectClasses.labelUnselectable, false);
        return isThisNodeUnselectable ? "tree-unselectable ".concat(labelUnselectableClass) : '';
      }; // tree template


      $scope.isReverse = function isReverse() {
        return !($scope.reverseOrder === 'false' || $scope.reverseOrder === 'False' || $scope.reverseOrder === '' || $scope.reverseOrder === false);
      };

      $scope.orderByFunc = function orderByFunc() {
        return $scope.orderBy;
      };

      var templateOptions = {
        orderBy: $scope.orderBy ? ' | orderBy:orderByFunc():isReverse()' : '',
        ulClass: classIfDefined($scope.options.injectClasses.ul, true),
        nodeChildren: $scope.options.nodeChildren,
        liClass: classIfDefined($scope.options.injectClasses.li, true),
        iLeafClass: classIfDefined($scope.options.injectClasses.iLeaf, false),
        labelClass: classIfDefined($scope.options.injectClasses.label, false)
      };
      var template;
      var templateUrl = $scope.options.templateUrl || treeConfig.templateUrl;

      if (templateUrl) {
        template = $templateCache.get(templateUrl);
      }

      if (!template) {
        template = '<ul {{options.ulClass}} >' + '<li ng-repeat="$node in $node.{{options.nodeChildren}} | filter:filterExpression:filterComparator {{options.orderBy}}" ng-class="headClass($node)" {{options.liClass}}' + 'set-node-to-data>' + '<i class="tree-branch-head" ng-class="iBranchClass()" ng-click="selectNodeHead($node)"></i>' + '<i class="tree-leaf-head {{options.iLeafClass}}"></i>' + '<div class="tree-label {{options.labelClass}}" ng-class="[selectedClass(), unselectableClass()]" ng-click="selectNodeLabel($node)" tree-transclude></div>' + '<treeitem ng-if="nodeExpanded()"></treeitem>' + '</li>' + '</ul>';
      }

      this.template = $compile($interpolate(template)({
        options: templateOptions
      }));
    }],
    compile: function compile(element, attrs, childTranscludeFn) {
      return function (scope, $element, $attrs, treemodelController) {
        scope.$watch('treeModel', function updateNodeOnRootScope(newValue) {
          if (angular.isArray(newValue)) {
            if (angular.isDefined(scope.$node) && angular.equals(scope.$node[scope.options.nodeChildren], newValue)) {
              return;
            }

            scope.$node = {};
            scope.synteticRoot = scope.$node;
            scope.$node[scope.options.nodeChildren] = newValue;
          } else {
            if (angular.equals(scope.$node, newValue)) {
              return;
            }

            scope.$node = newValue;
          }
        });
        scope.$watchCollection('expandedNodes', function (newValue) {
          var notFoundIds = 0;
          var newExpandedNodesMap = {};
          var $liElements = $element.find('li');
          var existingScopes = []; // find all nodes visible on the tree and the scope $id of the scopes including them

          angular.forEach($liElements, function (liElement) {
            var $liElement = angular.element(liElement);
            var liScope = {
              $id: $liElement.data('scope-id'),
              $node: $liElement.data('$node')
            };
            existingScopes.push(liScope);
          }); // iterate over the newValue, the new expanded nodes, and for each find it in the existingNodesAndScopes
          // if found, add the mapping $id -> node into newExpandedNodesMap
          // if not found, add the mapping num -> node into newExpandedNodesMap

          angular.forEach(newValue, function (newExNode) {
            var found = false;

            for (var i = 0; i < existingScopes.length && !found; i++) {
              var existingScope = existingScopes[i];

              if (scope.options.equality(newExNode, existingScope.$node, scope)) {
                newExpandedNodesMap[existingScope.$id] = existingScope.$node;
                found = true;
              }
            }

            if (!found) {
              newExpandedNodesMap["a".concat(notFoundIds++)] = newExNode;
            }
          });
          scope.expandedNodesMap = newExpandedNodesMap;
        }); // Rendering template for a root node

        treemodelController.template(scope, function (clone) {
          $element.html('').append(clone);
        }); // save the transclude function from compile (which is not bound to a scope as apposed to the one from link)
        // we can fix this to work with the link transclude function with angular 1.2.6. as for angular 1.2.0 we need
        // to keep using the compile function

        scope.$treeTransclude = childTranscludeFn;
      };
    }
  };
}]).directive('setNodeToData', ['$parse', function () {
  return {
    restrict: 'A',
    link: function link($scope, $element) {
      $element.data('$node', $scope.$node);
      $element.data('scope-id', $scope.$id);
    }
  };
}]).directive('treeitem', function () {
  return {
    restrict: 'E',
    require: '^treecontrol',
    link: function link(scope, element, attrs, treemodelController) {
      // Rendering template for the current node
      treemodelController.template(scope, function (clone) {
        element.html('').append(clone);
      });
    }
  };
}).directive('treeTransclude', function () {
  return {
    controller: ['$scope', function ($scope) {
      ensureAllDefaultOptions($scope);
    }],
    link: function link(scope, element) {
      if (!scope.options.isLeaf(scope.$node, scope)) {
        angular.forEach(scope.expandedNodesMap, function (node, id) {
          if (scope.options.equality(node, scope.$node, scope)) {
            scope.expandedNodesMap[scope.$id] = scope.$node;
            scope.expandedNodesMap[id] = undefined;
          }
        });
      }

      if (!scope.options.multiSelection && scope.options.equality(scope.$node, scope.selectedNode, scope)) {
        scope.selectedNode = scope.$node;
      } else if (scope.options.multiSelection) {
        var newSelectedNodes = [];

        for (var i = 0; i < scope.selectedNodes.length; i++) {
          if (scope.options.equality(scope.$node, scope.selectedNodes[i], scope)) {
            newSelectedNodes.push(scope.$node);
          }
        }

        scope.selectedNodes = newSelectedNodes;
      } // create a scope for the transclusion, whos parent is the parent of the tree control


      scope.transcludeScope = scope.parentScopeOfTree.$new();
      scope.transcludeScope.$node = scope.$node;
      scope.transcludeScope.$path = createPath(scope);
      scope.transcludeScope.$parentNode = scope.$parent.$node === scope.synteticRoot ? null : scope.$parent.$node;
      scope.transcludeScope.$index = scope.$index;
      scope.transcludeScope.$first = scope.$first;
      scope.transcludeScope.$middle = scope.$middle;
      scope.transcludeScope.$last = scope.$last;
      scope.transcludeScope.$odd = scope.$odd;
      scope.transcludeScope.$even = scope.$even;
      scope.$on('$destroy', function () {
        scope.transcludeScope.$destroy();
      });
      scope.$treeTransclude(scope.transcludeScope, function (clone) {
        element.empty();
        element.append(clone);
      });
    }
  };
}).name;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var angular = __webpack_require__(5);
/**
 * @ngdoc constant
 * @name acceptableRootValueEditorDefaultOptions
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * For description see {@link AcceptableRootValueEditorOptions}
 *
 * ```javascript
 *  {
 *      acceptableValue: null,
 *      multiselect: false,
 *      disabledItems: [],
 *      equalityComparator: angular.equals,
 *      optionsTemplate: '{{$node}}'
 *  }
 * ```
 */


exports.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_OPTIONS = {
  acceptableValue: null,
  multiselect: false,
  disabledItems: [],
  equalityComparator: angular.equals,
  optionsTemplate: '{{$node}}'
};
/**
 * @ngdoc provider
 * @name acceptableRootValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link acceptableRootValueEditorDefaultOptions}
 */

var AcceptableRootValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableRootValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "acceptableRootValueEditorDefaultOptions"];

  _inherits(AcceptableRootValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableRootValueEditorConfigurationProvider);

  /*@ngInject*/
  function AcceptableRootValueEditorConfigurationProvider(aliasesServiceProvider, acceptableRootValueEditorDefaultOptions) {
    _classCallCheck(this, AcceptableRootValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, acceptableRootValueEditorDefaultOptions);
  }

  return AcceptableRootValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AcceptableRootValueEditorConfigurationProvider;
AcceptableRootValueEditorConfigurationProvider.providerName = 'acceptableRootValueEditorConfigurationService';

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name acceptableRootValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * See {@link acceptableRootValueEditorLocalizationsService}
 */


var AcceptableRootValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableRootValueEditorLocalizationsProvider.$inject = ["acceptableRootValueEditorDefaultLocalizations"];

  _inherits(AcceptableRootValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableRootValueEditorLocalizationsProvider);

  /*@ngInject*/
  function AcceptableRootValueEditorLocalizationsProvider(acceptableRootValueEditorDefaultLocalizations) {
    _classCallCheck(this, AcceptableRootValueEditorLocalizationsProvider);

    return _super.call(this, acceptableRootValueEditorDefaultLocalizations);
  }

  return AcceptableRootValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AcceptableRootValueEditorLocalizationsProvider;
AcceptableRootValueEditorLocalizationsProvider.providerName = 'acceptableRootValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name acceptableRootValueEditorDefaultLocalizations
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * ```
 * {
 *      cannotSelect: '(cannot select)',
 *      showAll: 'Show all',
 *      deselectAll: 'Deselect all',
 *      selectAll: 'Select all'
 * }
 * ```
 */

exports.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  cannotSelect: '(cannot select)',
  showAll: 'Show all',
  deselectAll: 'Deselect all',
  selectAll: 'Select all'
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// neni cas... :-(

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var bind_decorator_1 = __webpack_require__(13);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.acceptableRootValueEditor';

var AcceptableRootValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  AcceptableRootValueEditorComponentController.$inject = ["acceptableRootValueEditorConfigurationService", "acceptableRootValueEditorLocalizationsService", "$interpolate", "$templateCache"];

  _inherits(AcceptableRootValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(AcceptableRootValueEditorComponentController);

  /*@ngInject*/
  function AcceptableRootValueEditorComponentController(acceptableRootValueEditorConfigurationService, acceptableRootValueEditorLocalizationsService, $interpolate, $templateCache) {
    _classCallCheck(this, AcceptableRootValueEditorComponentController);

    return _super.call(this, AcceptableRootValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, acceptableRootValueEditorConfigurationService, acceptableRootValueEditorLocalizationsService);
  }

  _createClass(AcceptableRootValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AcceptableRootValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.multiselect && !Array.isArray(this.model)) {
        this.model = [];
      }

      this.internalAcceptableValues = [this.options.acceptableValue];
      this.treeOptions = {
        nodeChildren: 'children',
        equality: this.options.equalityComparator,
        multiSelection: this.options.multiselect,
        templateUrl: AcceptableRootValueEditorComponentController.TREECONTROL_TEMPLATE_URL,
        isSelectable: this.isSelectable
      }; // expanded is always first level

      this.expandedNodes = [this.options.acceptableValue];
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(node) {
      var _this = this;

      return !this.options.disabledItems.some(function (disabledItem) {
        return _this.options.equalityComparator(disabledItem, node);
      });
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (whatChanged.optionsTemplate) {
        this.updateTemplate();
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        optionsTemplate: this.options.optionsTemplate
      };
    }
  }]);

  return AcceptableRootValueEditorComponentController;
}(abstract_template_value_editor_1.default);

AcceptableRootValueEditorComponentController.TEMPLATE_URL = __webpack_require__(110);
AcceptableRootValueEditorComponentController.TREECONTROL_TEMPLATE_URL = __webpack_require__(111);

__decorate([bind_decorator_1.default], AcceptableRootValueEditorComponentController.prototype, "isSelectable", null);

exports.AcceptableRootValueEditorComponentController = AcceptableRootValueEditorComponentController;
/**
 * @ngdoc component
 * @name acceptableRootValueEditor
 * @module angularjs-value-editor.acceptable-root
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for tree selection.
 *
 * It has two aliases:
 *
 *  - `single-acceptable-root`
 *  - `multiple-acceptable-root`
 *
 * Supported options: {@link type:AcceptableRootValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="acceptableRootValueEditorExample" module="acceptableRootValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'multiple-acceptable-root'" ng-model="model" options="{acceptableValue: $ctrl.acceptableValue, optionsTemplate: '{{$node.text}}'}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('acceptableRootValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', class {
 *              acceptableValue = {
 *                  text: '0',
 *                  children: [
 *                      {
 *                          text: '1'
 *                      },
 *                      {
 *                          text: '2',
 *                          children: [
 *                              {
 *                                  text: '2-1'
 *                              },
 *                              {
 *                                  text: '2-2'
 *                              }
 *                          ]
 *                      }
 *                  ]
 *              };
 *          });
 *     </file>
 * </example>
 */

var AcceptableRootValueEditorComponent = function AcceptableRootValueEditorComponent() {
  _classCallCheck(this, AcceptableRootValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.template = "\n        <ng-include src=\"$ctrl.templateName\"></ng-include>\n    ";
  this.controller = AcceptableRootValueEditorComponentController;
};

exports.default = AcceptableRootValueEditorComponent;
AcceptableRootValueEditorComponent.componentName = 'acceptableRootValueEditor';

/***/ }),
/* 110 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable-root/acceptable-root.value-editor.tpl.pug';
var html = "<treecontrol class=\"tree-boot\" tree-model=\"$ctrl.internalAcceptableValues\" options=\"$ctrl.treeOptions\" selected-node=\"$ctrl.model\" selected-nodes=\"$ctrl.model\" expanded-nodes=\"$ctrl.expandedNodes\"><span ng-class=\"{'text-muted': !$ctrl.isSelectable(node)}\">{{optionsTemplate}}</span><span class=\"text-muted\" ng-if=\"!$ctrl.isSelectable(node)\">(\\{\\{$ctrl.localize('cannotSelect')\\}\\})</span></treecontrol>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable-root/treecontrol-custom-template.tpl.html';
var html = "<ul {{options.ulClass}} ng-class=\"'tree-list'\">\n    <li ng-repeat=\"$node in $node.{{options.nodeChildren}} | filter:filterExpression:filterComparator {{options.orderBy}}\"\n        ng-class=\"headClass($node)\"\n        {{options.liClass}}\n        set-node-to-data>\n\n        <div class=\"item\" ng-class=\"{'has-children': $node.children.length > 0, 'has-not-children': !$node.children || $node.children.length === 0}\">\n            <div class=\"switcher\" ng-click=\"selectNodeHead($node)\">\n                <i class=\"tree-branch-head glyphicon glyphicon-triangle-right\" ng-class=\"iBranchClass()\"></i>\n            </div>\n\n            <div class=\"content\" ng-class=\"selectedClass()\">\n                <div class=\"tree-label {{options.labelClass}}\" ng-class=\"unselectableClass()\" ng-click=\"selectNodeHead($node)\" tree-transclude></div>\n\n                <div class=\"selector\" ng-click=\"selectNodeLabel($node)\">\n                    <i class=\"tcf tcf-checkmark-empty\" ng-hide=\"selectedClass()\"></i>\n                    <i class=\"tcf tcf-checkmark\" ng-show=\"selectedClass()\"></i>\n                </div>\n            </div>\n\n            {{'{' + '{checkedAllChildren = hasCheckedAllChildren($node);' +\n              'checkedAnyChild = hasCheckedAnyChild($node);' +\n              'expandedAndAllChildrenToo = isExpandedAndAllChildrenToo($node);' +\n              '\\'\\'' +\n              '}' + '}' }}\n\n            <div class=\"multiselector\"\n                 ng-class=\"{'checked': checkedAllChildren, 'semi-checked': checkedAnyChild, 'clickable': options.multiSelection || (!options.multiSelection && !expandedAndAllChildrenToo)}\"\n                 ng-click=\"expandOrSelectAll($node)\"\n                 ng-attr-title=\"{{ '{' + '{!expandedAndAllChildrenToo ? $ctrl.localize(\\'showAll\\') :' +\n                                           'options.multiSelection && expandedAndAllChildrenToo && checkedAllChildren ? $ctrl.localize(\\'deselectAll\\') : ' +\n                                           'options.multiSelection && expandedAndAllChildrenToo && !checkedAllChildren ? $ctrl.localize(\\'selectAll\\') : \\'\\'}' + '}' }}\">\n                <!-- Unselect all children -->\n                <i class=\"tcf tcf-checkmark-double\" ng-show=\"checkedAllChildren\"></i>\n                <!-- Select all children -->\n                <i class=\"tcf tcf-checkmark-double-semi\" ng-show=\"checkedAnyChild && !checkedAllChildren\"></i>\n                <!-- Select all children -->\n                <i class=\"tcf tcf-checkmark-double-empty\" ng-show=\"!checkedAllChildren && !checkedAnyChild\"></i>\n                <!-- Expand all children -->\n                <i class=\"glyphicon glyphicon-arrow-down\" ng-show=\"!expandedAndAllChildrenToo\"></i>\n            </div>\n        </div>\n\n        <treeitem ng-if=\"nodeExpanded()\"></treeitem>\n    </li>\n</ul>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


acceptableRootValueEditorConfig.$inject = ["aliasesServiceProvider", "acceptableRootValueEditorConfigurationServiceProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
var SINGLE_ACCEPTABLE_ROOT_ALIAS = 'single-acceptable-root';
var MULTIPLE_ACCEPTABLE_ROOT_ALIAS = 'multiple-acceptable-root';
/*@ngInject*/

function acceptableRootValueEditorConfig(aliasesServiceProvider, acceptableRootValueEditorConfigurationServiceProvider) {
  aliasesServiceProvider.addAlias(SINGLE_ACCEPTABLE_ROOT_ALIAS, 'acceptable-root');
  acceptableRootValueEditorConfigurationServiceProvider.forAlias(SINGLE_ACCEPTABLE_ROOT_ALIAS).setConfiguration({
    multiselect: false
  });
  aliasesServiceProvider.addAlias(MULTIPLE_ACCEPTABLE_ROOT_ALIAS, 'acceptable-root');
  acceptableRootValueEditorConfigurationServiceProvider.forAlias(MULTIPLE_ACCEPTABLE_ROOT_ALIAS).setConfiguration({
    multiselect: true
  });
}

exports.acceptableRootValueEditorConfig = acceptableRootValueEditorConfig;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var search_text_value_editor_localization_provider_1 = __webpack_require__(114);

var search_text_value_editor_component_1 = __webpack_require__(115);
/**
 * @ngdoc module
 * @name angularjs-value-editor.search-text
 * @module angularjs-value-editor.search-text
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.search-text').constant('searchTextValueEditorDefaultLocalizations', search_text_value_editor_localization_provider_1.SEARCH_TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(search_text_value_editor_localization_provider_1.default.providerName, search_text_value_editor_localization_provider_1.default).component(search_text_value_editor_component_1.default.componentName, search_text_value_editor_component_1.default).name();

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name searchTextValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.search-text
 *
 * @description
 * See {@link searchTextValueEditorLocalizationsService}
 */


var SearchTextValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SearchTextValueEditorLocalizationsProvider.$inject = ["searchTextValueEditorDefaultLocalizations"];

  _inherits(SearchTextValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(SearchTextValueEditorLocalizationsProvider);

  /*@ngInject*/
  function SearchTextValueEditorLocalizationsProvider(searchTextValueEditorDefaultLocalizations) {
    _classCallCheck(this, SearchTextValueEditorLocalizationsProvider);

    return _super.call(this, searchTextValueEditorDefaultLocalizations);
  }

  return SearchTextValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = SearchTextValueEditorLocalizationsProvider;
SearchTextValueEditorLocalizationsProvider.providerName = 'searchTextValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name searchTextValueEditorDefaultLocalizations
 * @module angularjs-value-editor.search-text
 *
 * @description
 * ```
 * {
 *      startsWith: 'Starts with',
 *      equals: 'Equals'
 * }
 * ```
 */

exports.SEARCH_TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  startsWith: 'Starts with',
  equals: 'Equals'
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_1 = __webpack_require__(3);

var value_editor_component_1 = __webpack_require__(1);
/**
 * @ngdoc type
 * @name SearchTextValueEditorModelExtension
 * @module angularjs-value-editor.search-text
 *
 * @description
 * Enum of possible `extensions`.
 *
 * ```
 * enum SearchTextValueEditorModelExtension {
 *      STARTS_WITH = 'startsWith',
 *      EQUALS = 'equals'
 *  }
 * ```
 */


var SearchTextValueEditorModelExtension;

(function (SearchTextValueEditorModelExtension) {
  SearchTextValueEditorModelExtension["STARTS_WITH"] = "startsWith";
  SearchTextValueEditorModelExtension["EQUALS"] = "equals";
})(SearchTextValueEditorModelExtension = exports.SearchTextValueEditorModelExtension || (exports.SearchTextValueEditorModelExtension = {}));

var SearchTextValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  SearchTextValueEditorComponentController.$inject = ["emptyConfigurationService", "searchTextValueEditorLocalizationsService"];

  _inherits(SearchTextValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(SearchTextValueEditorComponentController);

  /*@ngInject*/
  function SearchTextValueEditorComponentController(emptyConfigurationService, searchTextValueEditorLocalizationsService) {
    var _this;

    _classCallCheck(this, SearchTextValueEditorComponentController);

    _this = _super.call(this, emptyConfigurationService, searchTextValueEditorLocalizationsService);
    _this.searchTextValueEditorLocalizationsService = searchTextValueEditorLocalizationsService;
    _this.extensions = Object.values(SearchTextValueEditorModelExtension);
    return _this;
  }

  _createClass(SearchTextValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(SearchTextValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.normalizeModel();
    }
    /* istanbul ignore next */

  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "normalizeModel",
    value: function normalizeModel() {
      // @ts-ignore
      if (_typeof(this.model) !== 'object') {
        this.model = {
          extension: undefined,
          row: ''
        };
      }

      if (!this.model.extension) {
        this.model.extension = SearchTextValueEditorModelExtension.STARTS_WITH;
      } // this.model.extension is not a member of SearchTextValueEditorModelExtension enum


      if (!Object.values(SearchTextValueEditorModelExtension).includes(this.model.extension)) {
        this.model.extension = SearchTextValueEditorModelExtension.STARTS_WITH;
      }

      if (typeof this.model.row !== 'string') {
        this.model.row = '';
      }
    }
  }]);

  return SearchTextValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.SearchTextValueEditorComponentController = SearchTextValueEditorComponentController;
/**
 * @ngdoc component
 * @name searchTextValueEditor
 * @module angularjs-value-editor.search-text
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for search-text input with possibility to generation from backend.
 *
 * No options needed.
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="searchTextValueEditorExample" module="searchTextValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'search-text'" ng-model="model" options="{requestFunction: $ctrl.requestFunction}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('searchTextValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', class {
 *              requestFunction() {
 *                  return new Promise((resolve) => {
 *                      setTimeout(() => {
 *                          resolve('Generated')
 *                      }, 1000);
 *                  });
 *              }
 *          });
 *     </file>
 * </example>
 */

var SearchTextValueEditorComponent = function SearchTextValueEditorComponent() {
  _classCallCheck(this, SearchTextValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(116);
  this.controller = SearchTextValueEditorComponentController;
};

exports.default = SearchTextValueEditorComponent;
SearchTextValueEditorComponent.componentName = 'searchTextValueEditor';

/***/ }),
/* 116 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/search-text/search-text.value-editor.tpl.pug';
var html = "<div class=\"input-group\"><div class=\"input-group-addon input-group-select\"><ui-select ng-model=\"$ctrl.model.extension\" ng-model-options=\"{getterSetter: true}\" search-enabled=\"false\" ng-disabled=\"$ctrl.valueEditorController.disabled\" tagging=\"tagging\"><ui-select-match>{{$ctrl.localize(($ctrl.extensions | filter: $select.selected)[0])}}</ui-select-match><ui-select-choices repeat=\"$extension in $ctrl.extensions track by $extension\">{{$ctrl.localize($extension)}}</ui-select-choices></ui-select></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model.row\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(118);

var angularjs_register_1 = __webpack_require__(0);

var searchable_value_editor_component_1 = __webpack_require__(119);

var searchable_value_editor_configuration_provider_1 = __webpack_require__(121);

var searchable_value_editor_localization_provider_1 = __webpack_require__(122);
/**
 * @ngdoc module
 * @name angularjs-value-editor.searchable
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.searchable').constant('searchableValueEditorDefaultOptions', searchable_value_editor_configuration_provider_1.SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('searchableValueEditorDefaultLocalizations', searchable_value_editor_localization_provider_1.SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(searchable_value_editor_configuration_provider_1.default.providerName, searchable_value_editor_configuration_provider_1.default).provider(searchable_value_editor_localization_provider_1.default.providerName, searchable_value_editor_localization_provider_1.default).component(searchable_value_editor_component_1.default.componentName, searchable_value_editor_component_1.default).name();

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.searchableValueEditor';

var SearchableValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  SearchableValueEditorComponentController.$inject = ["searchableValueEditorConfigurationService", "searchableValueEditorLocalizationsService", "$interpolate", "$templateCache", "loadingSpinnerTemplateUrl", "$timeout", "$injector"];

  _inherits(SearchableValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(SearchableValueEditorComponentController);

  /*@ngInject*/
  function SearchableValueEditorComponentController(searchableValueEditorConfigurationService, searchableValueEditorLocalizationsService, $interpolate, $templateCache, loadingSpinnerTemplateUrl, $timeout, $injector) {
    var _this;

    _classCallCheck(this, SearchableValueEditorComponentController);

    _this = _super.call(this, SearchableValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, searchableValueEditorConfigurationService, searchableValueEditorLocalizationsService);
    _this.loadingSpinnerTemplateUrl = loadingSpinnerTemplateUrl;
    _this.$timeout = $timeout;
    _this.$injector = $injector;
    _this.searching = false;
    _this.editing = false;
    return _this;
  }

  _createClass(SearchableValueEditorComponentController, [{
    key: "search",
    value: function () {
      var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.asyncCall(function () {
                  return _this2.searching = true;
                });
                _context.prev = 1;
                _context.next = 4;
                return this.$injector.invoke(this.options.searchModelFunction, null, {
                  $model: this.model,
                  $additionalParameters: this.options.additionalParameters
                });

              case 4:
                this.model = _context.sent;

              case 5:
                _context.prev = 5;
                this.asyncCall(function () {
                  return _this2.searching = false;
                });
                return _context.finish(5);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1,, 5, 8]]);
      }));

      function search() {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "edit",
    value: function () {
      var _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.asyncCall(function () {
                  return _this3.editing = true;
                });
                _context2.prev = 1;
                _context2.next = 4;
                return this.$injector.invoke(this.options.editModelFunction, null, {
                  $model: this.model,
                  $additionalParameters: this.options.additionalParameters
                });

              case 4:
                this.model = _context2.sent;

              case 5:
                _context2.prev = 5;
                this.asyncCall(function () {
                  return _this3.editing = false;
                });
                return _context2.finish(5);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1,, 5, 8]]);
      }));

      function edit() {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (whatChanged.modelTemplate) {
        this.updateTemplate();
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        modelTemplate: this.options.modelTemplate
      };
    }
  }, {
    key: "asyncCall",
    value: function asyncCall(func) {
      this.$timeout(func ? func.bind(this) :
      /* istanbul ignore next */
      function () {
        return void 0;
      }, 0);
    }
  }, {
    key: "hasEditModelFunction",
    get: function get() {
      return typeof this.options.editModelFunction === 'function';
    }
  }]);

  return SearchableValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.SearchableValueEditorComponentController = SearchableValueEditorComponentController;
SearchableValueEditorComponentController.TEMPLATE_URL = __webpack_require__(120);
/**
 * @ngdoc component
 * @name searchableValueEditor
 * @module angularjs-value-editor.searchable
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for searchable input.
 *
 * Supported options: {@link type:SearchableValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="searchableValueEditorExample" module="searchableValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'searchable'" ng-model="model" placeholder="Search some value..."></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('searchableValueEditorExample', ['angularjs-value-editor'])
 *         .config(['searchableValueEditorConfigurationServiceProvider', (searchableValueEditorConfigurationServiceProvider) =>
 *              searchableValueEditorConfigurationServiceProvider.setConfiguration({
 *                  searchModelFunction: ['$timeout', ($timeout) => new Promise((resolve => $timeout(() => resolve('Some result'), 1500)))]
 *              })
 *         ]);
 *     </file>
 * </example>
 */

var SearchableValueEditorComponent = function SearchableValueEditorComponent() {
  _classCallCheck(this, SearchableValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = SearchableValueEditorComponentController;
};

exports.default = SearchableValueEditorComponent;
SearchableValueEditorComponent.componentName = 'searchableValueEditor';

/***/ }),
/* 120 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/searchable/searchable.value-editor.tpl.pug';
var html = "\\{\\{$model = $ctrl.model; ''\\}\\}<span class=\"model-value\" ng-if=\"$ctrl.model\">{{modelTemplate}}</span><span class=\"text-muted\" ng-if=\"!$ctrl.model\" ng-bind=\"$ctrl.valueEditorController.placeholder\"></span><button class=\"search-button btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled || $ctrl.searching\" ng-click=\"$ctrl.search()\"><span class=\"glyphicon glyphicon-search\" ng-show=\"!$ctrl.searching\"></span><ng-include class=\"glyphicon searchable-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.searching\"></ng-include><span ng-if=\"$ctrl.model\" ng-bind=\"$ctrl.localize('searchOther')\"></span><span ng-if=\"!$ctrl.model\" ng-bind=\"$ctrl.localize('search')\"></span></button><button class=\"edit-button btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled || $ctrl.editing\" ng-show=\"$ctrl.hasEditModelFunction\" ng-click=\"$ctrl.edit()\"><span class=\"glyphicon glyphicon-pencil\" ng-show=\"!$ctrl.editing\"></span><ng-include class=\"glyphicon searchable-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.editing\"></ng-include><span ng-if=\"$ctrl.model\" ng-bind=\"$ctrl.localize('editValue')\"></span><span ng-if=\"!$ctrl.model\" ng-bind=\"$ctrl.localize('createNew')\"></span></button><input type=\"hidden\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name searchableValueEditorDefaultOptions
 * @module angularjs-value-editor.searchable
 *
 * @description
 * For description see {@link SearchableValueEditorOptions}
 *
 * ```javascript
 * {
 *      modelTemplate: '{{$model}}',
 *      additionalParameters: undefined,
 *      searchModelFunction: async () => {throw new Error('searchModelFunction is not set')},
 *      editModelFunction: undefined
 * }
 * ```
 */


exports.SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  modelTemplate: '{{$model}}',
  additionalParameters: undefined,
  searchModelFunction: function () {
    var _searchModelFunction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw new Error('searchModelFunction is not set');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function searchModelFunction() {
      return _searchModelFunction.apply(this, arguments);
    }

    return searchModelFunction;
  }(),
  editModelFunction: undefined
};
/**
 * @ngdoc provider
 * @name searchableValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link searchableValueEditorDefaultOptions}
 */

var SearchableValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SearchableValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "searchableValueEditorDefaultOptions"];

  _inherits(SearchableValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(SearchableValueEditorConfigurationProvider);

  /*@ngInject*/
  function SearchableValueEditorConfigurationProvider(aliasesServiceProvider, searchableValueEditorDefaultOptions) {
    _classCallCheck(this, SearchableValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, searchableValueEditorDefaultOptions);
  }

  return SearchableValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = SearchableValueEditorConfigurationProvider;
SearchableValueEditorConfigurationProvider.providerName = 'searchableValueEditorConfigurationService';

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name searchableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.searchable
 *
 * @description
 * See {@link searchableValueEditorLocalizationsService}
 */


var SearchableValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SearchableValueEditorLocalizationsProvider.$inject = ["searchableValueEditorDefaultLocalizations"];

  _inherits(SearchableValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(SearchableValueEditorLocalizationsProvider);

  /*@ngInject*/
  function SearchableValueEditorLocalizationsProvider(searchableValueEditorDefaultLocalizations) {
    _classCallCheck(this, SearchableValueEditorLocalizationsProvider);

    return _super.call(this, searchableValueEditorDefaultLocalizations);
  }

  return SearchableValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = SearchableValueEditorLocalizationsProvider;
SearchableValueEditorLocalizationsProvider.providerName = 'searchableValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name searchableValueEditorDefaultLocalizations
 * @module angularjs-value-editor.searchable
 *
 * @description
 * ```
 * {
 *      search: 'Search',
 *      searchOther: 'Search other',
 *      editValue: 'Edit value',
 *      createNew: 'Create new'
 * }
 * ```
 */

exports.SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  search: 'Search',
  searchOther: 'Search other',
  editValue: 'Edit value',
  createNew: 'Create new'
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var velocity_template_value_editor_config_1 = __webpack_require__(124); // import VelocityTemplateValueEditorComponent from './velocity-template.value-editor.component';

/**
 * @ngdoc module
 * @name angularjs-value-editor.velocity-template
 * @module angularjs-value-editor.velocity-template
 *
 * @description
 * `velocity-template` value editor is only {@link aliasesService alias} for {@link textValueEditor text-value-editor} with default {@link TextValueEditorOptions options}:
 * ```
 *  {
 *      type: 'rich-textarea'
 *  }
 * ```
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.velocity-template').config(velocity_template_value_editor_config_1.default) // .component(VelocityTemplateValueEditorComponent.componentName, VelocityTemplateValueEditorComponent)
.name();

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


velocityTemplateValueEditorConfig.$inject = ["aliasesServiceProvider", "textValueEditorConfigurationServiceProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
var VELOCITY_TEMPLATE_ALIAS = 'velocity-template';
/*@ngInject*/

function velocityTemplateValueEditorConfig(aliasesServiceProvider, textValueEditorConfigurationServiceProvider) {
  aliasesServiceProvider.addAlias(VELOCITY_TEMPLATE_ALIAS, 'text');
  textValueEditorConfigurationServiceProvider.forAlias(VELOCITY_TEMPLATE_ALIAS).setConfiguration({
    type: 'rich-textarea'
  });
}

exports.default = velocityTemplateValueEditorConfig;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(126);

var angularjs_register_1 = __webpack_require__(0);

var angularjs_histogram_slider_1 = __webpack_require__(127);

var range_value_editor_component_1 = __webpack_require__(128);

var range_value_editor_configuration_provider_1 = __webpack_require__(130);

var model_transformer_directive_1 = __webpack_require__(131);
/**
 * @ngdoc module
 * @name angularjs-value-editor.range
 * @module angularjs-value-editor.range
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.range', [angularjs_histogram_slider_1.default]).constant('rangeValueEditorDefaultOptions', range_value_editor_configuration_provider_1.RANGE_VALUE_EDITOR_DEFAULT_OPTIONS).provider(range_value_editor_configuration_provider_1.default.providerName, range_value_editor_configuration_provider_1.default).directive(model_transformer_directive_1.default.directiveName, model_transformer_directive_1.default).component(range_value_editor_component_1.default.componentName, range_value_editor_component_1.default).name();

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__127__;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// neni moc co testovat... viz. testy

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var _internalModel;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.rangeValueEditor';

var RangeValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  RangeValueEditorComponentController.$inject = ["$interpolate", "$templateCache", "rangeValueEditorConfigurationService"];

  _inherits(RangeValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(RangeValueEditorComponentController);

  /*@ngInject*/
  function RangeValueEditorComponentController($interpolate, $templateCache, rangeValueEditorConfigurationService) {
    var _this;

    _classCallCheck(this, RangeValueEditorComponentController);

    _this = _super.call(this, RangeValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, rangeValueEditorConfigurationService);

    _internalModel.set(_assertThisInitialized(_this), void 0);

    return _this;
  }

  _createClass(RangeValueEditorComponentController, [{
    key: "$doCheck",
    value: function $doCheck() {
      var _a, _b, _c, _d;

      if (((_a = __classPrivateFieldGet(this, _internalModel)) === null || _a === void 0 ? void 0 : _a.from) !== ((_b = this.model) === null || _b === void 0 ? void 0 : _b.from) || ((_c = __classPrivateFieldGet(this, _internalModel)) === null || _c === void 0 ? void 0 : _c.to) !== ((_d = this.model) === null || _d === void 0 ? void 0 : _d.to)) {
        __classPrivateFieldSet(this, _internalModel, Object.assign({}, this.model));
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        currentValueTemplate: this.options.currentValueTemplate
      };
    }
  }, {
    key: "internalModel",
    get: function get() {
      return __classPrivateFieldGet(this, _internalModel);
    },
    set: function set(value) {
      this.model = value;
    }
  }]);

  return RangeValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.RangeValueEditorComponentController = RangeValueEditorComponentController;
_internalModel = new WeakMap();
RangeValueEditorComponentController.TEMPLATE_URL = __webpack_require__(129);
/**
 * @ngdoc component
 * @name rangeValueEditor
 * @module angularjs-value-editor.range
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for range input.
 *
 * Supported options: {@link type:RangeValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="rangeValueEditorExample" module="rangeValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'range'" ng-model="model" options="{withConfirmation: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('rangeValueEditorExample', ['angularjs-value-editor'])
 *     </file>
 * </example>
 */

var RangeValueEditorComponent = function RangeValueEditorComponent() {
  _classCallCheck(this, RangeValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = RangeValueEditorComponentController;
};

exports.default = RangeValueEditorComponent;
RangeValueEditorComponent.componentName = 'rangeValueEditor';

/***/ }),
/* 129 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/range/range.value-editor.tpl.pug';
var html = "<div class=\"curent-value\">{{currentValueTemplate}}</div><td-slider ng-model=\"$ctrl.internalModel\" ng-model-options=\"{ getterSetter: true}\" slider-model-transformer=\"$ctrl.options.extremesAsNull\" min=\"$ctrl.options.min\" max=\"$ctrl.options.max\" snap=\"$ctrl.options.snap\" snap-points=\"$ctrl.options.snapPoints\" pit-points=\"$ctrl.options.pitPoints\" on-values-updated=\"$from = $values[0]; $to = $values[1]\" data-main-input=\"data-main-input\"></td-slider>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name rangeValueEditorDefaultOptions
 * @module angularjs-value-editor.range
 *
 * @description
 * For description see {@link RangeValueEditorOptions}
 *
 * ```javascript
 * {
 *     extremesAsNull: true,
 *     min: 0,
 *     max: 0,
 *     snap: false,
 *     snapPoints: undefined,
 *     pitPoints: undefined,
 *     currentValueTemplate: '{{$from}} - {{$to}}'
 * }
 * ```
 */


exports.RANGE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  extremesAsNull: true,
  min: 0,
  max: 0,
  snap: false,
  snapPoints: undefined,
  pitPoints: undefined,
  currentValueTemplate: '{{$from}} - {{$to}}'
};
/**
 * @ngdoc provider
 * @name rangeValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.range
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link rangeValueEditorDefaultOptions}
 */

var RangeValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  RangeValueEditorConfigurationProvider.$inject = ["aliasesServiceProvider", "rangeValueEditorDefaultOptions"];

  _inherits(RangeValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(RangeValueEditorConfigurationProvider);

  /*@ngInject*/
  function RangeValueEditorConfigurationProvider(aliasesServiceProvider, rangeValueEditorDefaultOptions) {
    _classCallCheck(this, RangeValueEditorConfigurationProvider);

    return _super.call(this, aliasesServiceProvider, rangeValueEditorDefaultOptions);
  }

  return RangeValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = RangeValueEditorConfigurationProvider;
RangeValueEditorConfigurationProvider.providerName = 'rangeValueEditorConfigurationService';

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// uncomment after write some test for component

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name sliderModelTransformer
 * @module angularjs-value-editor.range
 *
 * @restrict A
 * @element td-slider
 *
 * @requires ngModel
 * @requires tdSlider
 *
 * @param {boolean} sliderModelTransformer If true, transform selected extremes as `null`.
 *
 * @description
 * Directive transforms ngModel from object `{from: XXX, to: YYY}` to array `[XXX, YYY]`
 * If selected values are minimum and maximum values from slider and `sliderModelTransformer` param is `true`, then model will be transformed to `null`.
 */

var SliderModelTransformerDirective = /*#__PURE__*/function () {
  SliderModelTransformerDirective.$inject = ["$parse"];

  /*@ngInject*/
  function SliderModelTransformerDirective($parse) {
    _classCallCheck(this, SliderModelTransformerDirective);

    this.$parse = $parse;
    this.restrict = 'A';
    this.require = ['ngModel', 'tdSlider'];
  }

  _createClass(SliderModelTransformerDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          sliderController = _ref2[1];

      var extremesAsNull = this.$parse($attrs[SliderModelTransformerDirective.directiveName])($scope);
      ngModelController.$formatters.push(this.formatter(sliderController, extremesAsNull));
      ngModelController.$parsers.push(this.parser(sliderController, extremesAsNull));
    }
  }, {
    key: "formatter",
    value: function formatter(sliderComponentController, extremesAsNull) {
      return function (model) {
        var from = model === null || model === void 0 ? void 0 : model.from;
        var to = model === null || model === void 0 ? void 0 : model.to;

        if (typeof (model === null || model === void 0 ? void 0 : model.from) === 'undefined' || model.from === null && extremesAsNull) {
          from = sliderComponentController.min;
        }

        if (typeof (model === null || model === void 0 ? void 0 : model.to) === 'undefined' || model.to === null && extremesAsNull) {
          to = sliderComponentController.max;
        }

        var result = [from, to];
        return result;
      };
    }
  }, {
    key: "parser",
    value: function parser(sliderComponentController, extremesAsNull) {
      return function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            minimum = _ref4[0],
            maximum = _ref4[1];

        var from = minimum;
        var to = maximum;

        if (extremesAsNull && from === sliderComponentController.min) {
          from = null;
        }

        if (extremesAsNull && to === sliderComponentController.max) {
          to = null;
        }

        return {
          from: from,
          to: to
        };
      };
    }
  }]);

  return SliderModelTransformerDirective;
}();

exports.default = SliderModelTransformerDirective;
SliderModelTransformerDirective.directiveName = 'sliderModelTransformer';

/***/ }),
/* 132 */
/***/ (function(module, exports) {

var path = '/home/travis/build/kp-sys/angularjs-value-editor/src/value-editor/resources/loading-spinner.svg';
var html = "<svg class=\"lds-spinner\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 20 60 60\" preserveAspectRatio=\"xMidYMid\">\n    <g transform=\"rotate(0 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9230769230769231s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(27.692307692307693 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8461538461538461s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(55.38461538461539 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7692307692307693s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(83.07692307692308 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6923076923076923s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(110.76923076923077 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6153846153846154s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(138.46153846153845 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5384615384615384s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(166.15384615384616 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.46153846153846156s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(193.84615384615384 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.38461538461538464s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(221.53846153846155 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3076923076923077s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(249.23076923076923 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.23076923076923078s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(276.9230769230769 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.15384615384615385s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(304.61538461538464 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.07692307692307693s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(332.3076923076923 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n</svg>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
/******/ ]);
});