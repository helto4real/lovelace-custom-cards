/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_canvas_gauge_card_canvas_gauge_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/canvas-gauge-card/canvas-gauge-card.js */ "./src/canvas-gauge-card/canvas-gauge-card.js");
/* harmony import */ var _src_picture_status_card_picture_status_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/picture-status-card/picture-status-card.js */ "./src/picture-status-card/picture-status-card.js");
/* harmony import */ var _src_media_player_card_media_player_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/media-player-card/media-player-card.js */ "./src/media-player-card/media-player-card.js");




/***/ }),

/***/ "./node_modules/@polymer/lit-element/lit-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/lit-element/lit-element.js ***!
  \**********************************************************/
/*! exports provided: html, svg, renderAttributes, classString, styleString, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAttributes", function() { return renderAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classString", function() { return classString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleString", function() { return styleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var _polymer_polymer_lib_mixins_properties_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/properties-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var lit_html_lib_lit_extended_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/lib/lit-extended.js */ "./node_modules/lit-html/lib/lit-extended.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html_lib_lit_extended_js__WEBPACK_IMPORTED_MODULE_3__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html_lib_lit_extended_js__WEBPACK_IMPORTED_MODULE_3__["svg"]; });





/**
 * Renders attributes to the given element based on the `attrInfo` object where
 * boolean values are added/removed as attributes.
 * @param element Element on which to set attributes.
 * @param attrInfo Object describing attributes.
 */
function renderAttributes(element, attrInfo) {
    for (const a in attrInfo) {
        const v = attrInfo[a] === true ? '' : attrInfo[a];
        if (v || v === '' || v === 0) {
            if (element.getAttribute(a) !== v) {
                element.setAttribute(a, String(v));
            }
        }
        else if (element.hasAttribute(a)) {
            element.removeAttribute(a);
        }
    }
}
/**
 * Returns a string of css class names formed by taking the properties
 * in the `classInfo` object and appending the property name to the string of
 * class names if the property value is truthy.
 * @param classInfo
 */
function classString(classInfo) {
    const o = [];
    for (const name in classInfo) {
        const v = classInfo[name];
        if (v) {
            o.push(name);
        }
    }
    return o.join(' ');
}
/**
 * Returns a css style string formed by taking the properties in the `styleInfo`
 * object and appending the property name (dash-cased) colon the
 * property value. Properties are separated by a semi-colon.
 * @param styleInfo
 */
function styleString(styleInfo) {
    const o = [];
    for (const name in styleInfo) {
        const v = styleInfo[name];
        if (v || v === 0) {
            o.push(`${Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_1__["camelToDashCase"])(name)}: ${v}`);
        }
    }
    return o.join('; ');
}
class LitElement extends Object(_polymer_polymer_lib_mixins_properties_mixin_js__WEBPACK_IMPORTED_MODULE_0__["PropertiesMixin"])(HTMLElement) {
    constructor() {
        super(...arguments);
        this.__renderComplete = null;
        this.__resolveRenderComplete = null;
        this.__isInvalid = false;
        this.__isChanging = false;
    }
    /**
     * Override which sets up element rendering by calling* `_createRoot`
     * and `_firstRendered`.
     */
    ready() {
        this._root = this._createRoot();
        super.ready();
        this._firstRendered();
    }
    connectedCallback() {
        if (window.ShadyCSS && this._root) {
            window.ShadyCSS.styleElement(this);
        }
        super.connectedCallback();
    }
    /**
     * Called after the element DOM is rendered for the first time.
     * Implement to perform tasks after first rendering like capturing a
     * reference to a static node which must be directly manipulated.
     * This should not be commonly needed. For tasks which should be performed
     * before first render, use the element constructor.
     */
    _firstRendered() { }
    /**
     * Implement to customize where the element's template is rendered by
     * returning an element into which to render. By default this creates
     * a shadowRoot for the element. To render into the element's childNodes,
     * return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    _createRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Override which returns the value of `_shouldRender` which users
     * should implement to control rendering. If this method returns false,
     * _propertiesChanged will not be called and no rendering will occur even
     * if property values change or `requestRender` is called.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     * @returns {boolean} Default implementation always returns true.
     */
    _shouldPropertiesChange(_props, _changedProps, _prevProps) {
        const shouldRender = this._shouldRender(_props, _changedProps, _prevProps);
        if (!shouldRender && this.__resolveRenderComplete) {
            this.__resolveRenderComplete(false);
        }
        return shouldRender;
    }
    /**
     * Implement to control if rendering should occur when property values
     * change or `requestRender` is called. By default, this method always
     * returns true, but this can be customized as an optimization to avoid
     * rendering work when changes occur which should not be rendered.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     * @returns {boolean} Default implementation always returns true.
     */
    _shouldRender(_props, _changedProps, _prevProps) {
        return true;
    }
    /**
     * Override which performs element rendering by calling
     * `_render`, `_applyRender`, and finally `_didRender`.
     * @param props Current element properties
     * @param changedProps Changing element properties
     * @param prevProps Previous element properties
     */
    _propertiesChanged(props, changedProps, prevProps) {
        super._propertiesChanged(props, changedProps, prevProps);
        const result = this._render(props);
        if (result && this._root !== undefined) {
            this._applyRender(result, this._root);
        }
        this._didRender(props, changedProps, prevProps);
        if (this.__resolveRenderComplete) {
            this.__resolveRenderComplete(true);
        }
    }
    _flushProperties() {
        this.__isChanging = true;
        this.__isInvalid = false;
        super._flushProperties();
        this.__isChanging = false;
    }
    /**
     * Override which warns when a user attempts to change a property during
     * the rendering lifecycle. This is an anti-pattern and should be avoided.
     * @param property {string}
     * @param value {any}
     * @param old {any}
     */
    // tslint:disable-next-line no-any
    _shouldPropertyChange(property, value, old) {
        const change = super._shouldPropertyChange(property, value, old);
        if (change && this.__isChanging) {
            console.trace(`Setting properties in response to other properties changing ` +
                `considered harmful. Setting '${property}' from ` +
                `'${this._getProperty(property)}' to '${value}'.`);
        }
        return change;
    }
    /**
     * Implement to describe the DOM which should be rendered in the element.
     * Ideally, the implementation is a pure function using only props to describe
     * the element template. The implementation must return a `lit-html`
     * TemplateResult. By default this template is rendered into the element's
     * shadowRoot. This can be customized by implementing `_createRoot`. This
     * method must be implemented.
     * @param {*} _props Current element properties
     * @returns {TemplateResult} Must return a lit-html TemplateResult.
     */
    _render(_props) {
        throw new Error('_render() not implemented');
    }
    /**
     * Renders the given lit-html template `result` into the given `node`.
     * Implement to customize the way rendering is applied. This is should not
     * typically be needed and is provided for advanced use cases.
     * @param result {TemplateResult} `lit-html` template result to render
     * @param node {Element|DocumentFragment} node into which to render
     */
    _applyRender(result, node) {
        Object(lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, node, this.localName);
    }
    /**
     * Called after element DOM has been rendered. Implement to
     * directly control rendered DOM. Typically this is not needed as `lit-html`
     * can be used in the `_render` method to set properties, attributes, and
     * event listeners. However, it is sometimes useful for calling methods on
     * rendered elements, like calling `focus()` on an element to focus it.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     */
    _didRender(_props, _changedProps, _prevProps) { }
    /**
     * Call to request the element to asynchronously re-render regardless
     * of whether or not any property changes are pending.
     */
    requestRender() { this._invalidateProperties(); }
    /**
     * Override which provides tracking of invalidated state.
     */
    _invalidateProperties() {
        this.__isInvalid = true;
        super._invalidateProperties();
    }
    /**
     * Returns a promise which resolves after the element next renders.
     * The promise resolves to `true` if the element rendered and `false` if the
     * element did not render.
     * This is useful when users (e.g. tests) need to react to the rendered state
     * of the element after a change is made.
     * This can also be useful in event handlers if it is desireable to wait
     * to send an event until after rendering. If possible implement the
     * `_didRender` method to directly respond to rendering within the
     * rendering lifecycle.
     */
    get renderComplete() {
        if (!this.__renderComplete) {
            this.__renderComplete = new Promise((resolve) => {
                this.__resolveRenderComplete = (value) => {
                    this.__resolveRenderComplete = this.__renderComplete = null;
                    resolve(value);
                };
            });
            if (!this.__isInvalid && this.__resolveRenderComplete) {
                Promise.resolve().then(() => this.__resolveRenderComplete(false));
            }
        }
        return this.__renderComplete;
    }
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/properties-changed.js ***!
  \************************************************************************/
/*! exports provided: PropertiesChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesChanged", function() { return PropertiesChanged; });
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/





/** @const {!AsyncInterface} */
const microtask = _utils_async_js__WEBPACK_IMPORTED_MODULE_2__["microTask"];

/**
 * Element class mixin that provides basic meta-programming for creating one
 * or more property accessors (getter/setter pair) that enqueue an async
 * (batched) `_propertiesChanged` callback.
 *
 * For basic usage of this mixin, call `MyClass.createProperties(props)`
 * once at class definition time to create property accessors for properties
 * named in props, implement `_propertiesChanged` to react as desired to
 * property changes, and implement `static get observedAttributes()` and
 * include lowercase versions of any property names that should be set from
 * attributes. Last, call `this._enableProperties()` in the element's
 * `connectedCallback` to enable the accessors.
 *
 * @mixinFunction
 * @polymer
 * @summary Element class mixin for reacting to property changes from
 *   generated property accessors.
 */
const PropertiesChanged = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(superClass => {

  /**
   * @polymer
   * @mixinClass
   * @extends {superClass}
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */
  class PropertiesChanged extends superClass {

    /**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     */
    static createProperties(props) {
      const proto = this.prototype;
      for (let prop in props) {
        // don't stomp an existing accessor
        if (!(prop in proto)) {
          proto._createPropertyAccessor(prop);
        }
      }
    }

    /**
     * Returns an attribute name that corresponds to the given property.
     * The attribute name is the lowercased property name. Override to
     * customize this mapping.
     * @param {string} property Property to convert
     * @return {string} Attribute name corresponding to the given property.
     *
     * @protected
     */
    static attributeNameForProperty(property) {
      return property.toLowerCase();
    }

    /**
     * Override point to provide a type to which to deserialize a value to
     * a given property.
     * @param {string} name Name of property
     *
     * @protected
     */
    static typeForProperty(name) { } //eslint-disable-line no-unused-vars

    /**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     */
    _createPropertyAccessor(property, readOnly) {
      this._addPropertyToAttributeMap(property);
      if (!this.hasOwnProperty('__dataHasAccessor')) {
        this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
      }
      if (!this.__dataHasAccessor[property]) {
        this.__dataHasAccessor[property] = true;
        this._definePropertyAccessor(property, readOnly);
      }
    }

    /**
     * Adds the given `property` to a map matching attribute names
     * to property names, using `attributeNameForProperty`. This map is
     * used when deserializing attribute values to properties.
     *
     * @param {string} property Name of the property
     */
    _addPropertyToAttributeMap(property) {
      if (!this.hasOwnProperty('__dataAttributes')) {
        this.__dataAttributes = Object.assign({}, this.__dataAttributes);
      }
      if (!this.__dataAttributes[property]) {
        const attr = this.constructor.attributeNameForProperty(property);
        this.__dataAttributes[attr] = property;
      }
    }

    /**
     * Defines a property accessor for the given property.
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created
     * @return {void}
     */
     _definePropertyAccessor(property, readOnly) {
      Object.defineProperty(this, property, {
        /* eslint-disable valid-jsdoc */
        /** @this {PropertiesChanged} */
        get() {
          return this._getProperty(property);
        },
        /** @this {PropertiesChanged} */
        set: readOnly ? function () {} : function (value) {
          this._setProperty(property, value);
        }
        /* eslint-enable */
      });
    }

    constructor() {
      super();
      this.__dataEnabled = false;
      this.__dataReady = false;
      this.__dataInvalid = false;
      this.__data = {};
      this.__dataPending = null;
      this.__dataOld = null;
      this.__dataInstanceProps = null;
      this.__serializing = false;
      this._initializeProperties();
    }

    /**
     * Lifecycle callback called when properties are enabled via
     * `_enableProperties`.
     *
     * Users may override this function to implement behavior that is
     * dependent on the element having its property data initialized, e.g.
     * from defaults (initialized from `constructor`, `_initializeProperties`),
     * `attributeChangedCallback`, or values propagated from host e.g. via
     * bindings.  `super.ready()` must be called to ensure the data system
     * becomes enabled.
     *
     * @return {void}
     * @public
     */
    ready() {
      this.__dataReady = true;
      this._flushProperties();
    }

    /**
     * Initializes the local storage for property accessors.
     *
     * Provided as an override point for performing any setup work prior
     * to initializing the property accessor system.
     *
     * @return {void}
     * @protected
     */
    _initializeProperties() {
      // Capture instance properties; these will be set into accessors
      // during first flush. Don't set them here, since we want
      // these to overwrite defaults/constructor assignments
      for (let p in this.__dataHasAccessor) {
        if (this.hasOwnProperty(p)) {
          this.__dataInstanceProps = this.__dataInstanceProps || {};
          this.__dataInstanceProps[p] = this[p];
          delete this[p];
        }
      }
    }

    /**
     * Called at ready time with bag of instance properties that overwrote
     * accessors when the element upgraded.
     *
     * The default implementation sets these properties back into the
     * setter at ready time.  This method is provided as an override
     * point for customizing or providing more efficient initialization.
     *
     * @param {Object} props Bag of property values that were overwritten
     *   when creating property accessors.
     * @return {void}
     * @protected
     */
    _initializeInstanceProperties(props) {
      Object.assign(this, props);
    }

    /**
     * Updates the local storage for a property (via `_setPendingProperty`)
     * and enqueues a `_proeprtiesChanged` callback.
     *
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @return {void}
     * @protected
     */
    _setProperty(property, value) {
      if (this._setPendingProperty(property, value)) {
        this._invalidateProperties();
      }
    }

    /**
     * Returns the value for the given property.
     * @param {string} property Name of property
     * @return {*} Value for the given property
     * @protected
     */
    _getProperty(property) {
      return this.__data[property];
    }

    /* eslint-disable no-unused-vars */
    /**
     * Updates the local storage for a property, records the previous value,
     * and adds it to the set of "pending changes" that will be passed to the
     * `_propertiesChanged` callback.  This method does not enqueue the
     * `_propertiesChanged` callback.
     *
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @param {boolean=} ext Not used here; affordance for closure
     * @return {boolean} Returns true if the property changed
     * @protected
     */
    _setPendingProperty(property, value, ext) {
      let old = this.__data[property];
      let changed = this._shouldPropertyChange(property, value, old);
      if (changed) {
        if (!this.__dataPending) {
          this.__dataPending = {};
          this.__dataOld = {};
        }
        // Ensure old is captured from the last turn
        if (this.__dataOld && !(property in this.__dataOld)) {
          this.__dataOld[property] = old;
        }
        this.__data[property] = value;
        this.__dataPending[property] = value;
      }
      return changed;
    }
    /* eslint-enable */

    /**
     * Marks the properties as invalid, and enqueues an async
     * `_propertiesChanged` callback.
     *
     * @return {void}
     * @protected
     */
    _invalidateProperties() {
      if (!this.__dataInvalid && this.__dataReady) {
        this.__dataInvalid = true;
        microtask.run(() => {
          if (this.__dataInvalid) {
            this.__dataInvalid = false;
            this._flushProperties();
          }
        });
      }
    }

    /**
     * Call to enable property accessor processing. Before this method is
     * called accessor values will be set but side effects are
     * queued. When called, any pending side effects occur immediately.
     * For elements, generally `connectedCallback` is a normal spot to do so.
     * It is safe to call this method multiple times as it only turns on
     * property accessors once.
     *
     * @return {void}
     * @protected
     */
    _enableProperties() {
      if (!this.__dataEnabled) {
        this.__dataEnabled = true;
        if (this.__dataInstanceProps) {
          this._initializeInstanceProperties(this.__dataInstanceProps);
          this.__dataInstanceProps = null;
        }
        this.ready();
      }
    }

    /**
     * Calls the `_propertiesChanged` callback with the current set of
     * pending changes (and old values recorded when pending changes were
     * set), and resets the pending set of changes. Generally, this method
     * should not be called in user code.
     *
     * @return {void}
     * @protected
     */
    _flushProperties() {
      const props = this.__data;
      const changedProps = this.__dataPending;
      const old = this.__dataOld;
      if (this._shouldPropertiesChange(props, changedProps, old)) {
        this.__dataPending = null;
        this.__dataOld = null;
        this._propertiesChanged(props, changedProps, old);
      }
    }

    /**
     * Called in `_flushProperties` to determine if `_propertiesChanged`
     * should be called. The default implementation returns true if
     * properties are pending. Override to customize when
     * `_propertiesChanged` is called.
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {!Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {!Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {boolean} true if changedProps is truthy
     */
    _shouldPropertiesChange(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
      return Boolean(changedProps);
    }

    /**
     * Callback called when any properties with accessors created via
     * `_createPropertyAccessor` have been set.
     *
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {!Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {!Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {void}
     * @protected
     */
    _propertiesChanged(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
    }

    /**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     */
    _shouldPropertyChange(property, value, old) {
      return (
        // Strict equality check
        (old !== value &&
          // This ensures (old==NaN, value==NaN) always returns false
          (old === old || value === value))
      );
    }

    /**
     * Implements native Custom Elements `attributeChangedCallback` to
     * set an attribute value to a property via `_attributeToProperty`.
     *
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     * @suppress {missingProperties} Super may or may not implement the callback
     */
    attributeChangedCallback(name, old, value, namespace) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(name, old, value, namespace);
      }
    }

    /**
     * Deserializes an attribute to its associated property.
     *
     * This method calls the `_deserializeValue` method to convert the string to
     * a typed value.
     *
     * @param {string} attribute Name of attribute to deserialize.
     * @param {?string} value of the attribute.
     * @param {*=} type type to deserialize to, defaults to the value
     * returned from `typeForProperty`
     * @return {void}
     */
    _attributeToProperty(attribute, value, type) {
      if (!this.__serializing) {
        const map = this.__dataAttributes;
        const property = map && map[attribute] || attribute;
        this[property] = this._deserializeValue(value, type ||
          this.constructor.typeForProperty(property));
      }
    }

    /**
     * Serializes a property to its associated attribute.
     *
     * @suppress {invalidCasts} Closure can't figure out `this` is an element.
     *
     * @param {string} property Property name to reflect.
     * @param {string=} attribute Attribute name to reflect to.
     * @param {*=} value Property value to refect.
     * @return {void}
     */
    _propertyToAttribute(property, attribute, value) {
      this.__serializing = true;
      value = (arguments.length < 3) ? this[property] : value;
      this._valueToNodeAttribute(/** @type {!HTMLElement} */(this), value,
        attribute || this.constructor.attributeNameForProperty(property));
      this.__serializing = false;
    }

    /**
     * Sets a typed value to an HTML attribute on a node.
     *
     * This method calls the `_serializeValue` method to convert the typed
     * value to a string.  If the `_serializeValue` method returns `undefined`,
     * the attribute will be removed (this is the default for boolean
     * type `false`).
     *
     * @param {Element} node Element to set attribute to.
     * @param {*} value Value to serialize.
     * @param {string} attribute Attribute name to serialize to.
     * @return {void}
     */
    _valueToNodeAttribute(node, value, attribute) {
      const str = this._serializeValue(value);
      if (str === undefined) {
        node.removeAttribute(attribute);
      } else {
        node.setAttribute(attribute, str);
      }
    }

    /**
     * Converts a typed JavaScript value to a string.
     *
     * This method is called when setting JS property values to
     * HTML attributes.  Users may override this method to provide
     * serialization for custom types.
     *
     * @param {*} value Property value to serialize.
     * @return {string | undefined} String serialized from the provided
     * property  value.
     */
    _serializeValue(value) {
      switch (typeof value) {
        case 'boolean':
          return value ? '' : undefined;
        default:
          return value != null ? value.toString() : undefined;
      }
    }

    /**
     * Converts a string to a typed JavaScript value.
     *
     * This method is called when reading HTML attribute values to
     * JS properties.  Users may override this method to provide
     * deserialization for custom `type`s. Types for `Boolean`, `String`,
     * and `Number` convert attributes to the expected types.
     *
     * @param {?string} value Value to deserialize.
     * @param {*=} type Type to deserialize the string to.
     * @return {*} Typed value deserialized from the provided string.
     */
    _deserializeValue(value, type) {
      switch (type) {
        case Boolean:
          return (value !== null);
        case Number:
          return Number(value);
        default:
          return value;
      }
    }

  }

  return PropertiesChanged;
});


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js ***!
  \**********************************************************************/
/*! exports provided: PropertiesMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesMixin", function() { return PropertiesMixin; });
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _properties_changed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-changed.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/





/**
 * Creates a copy of `props` with each property normalized such that
 * upgraded it is an object with at least a type property { type: Type}.
 *
 * @param {Object} props Properties to normalize
 * @return {Object} Copy of input `props` with normalized properties that
 * are in the form {type: Type}
 * @private
 */
function normalizeProperties(props) {
  const output = {};
  for (let p in props) {
    const o = props[p];
    output[p] = (typeof o === 'function') ? {type: o} : o;
  }
  return output;
}

/**
 * Mixin that provides a minimal starting point to using the PropertiesChanged
 * mixin by providing a mechanism to declare properties in a static
 * getter (e.g. static get properties() { return { foo: String } }). Changes
 * are reported via the `_propertiesChanged` method.
 *
 * This mixin provides no specific support for rendering. Users are expected
 * to create a ShadowRoot and put content into it and update it in whatever
 * way makes sense. This can be done in reaction to properties changing by
 * implementing `_propertiesChanged`.
 *
 * @mixinFunction
 * @polymer
 * @appliesMixin PropertiesChanged
 * @summary Mixin that provides a minimal starting point for using
 * the PropertiesChanged mixin by providing a declarative `properties` object.
 */
const PropertiesMixin = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(superClass => {

 /**
  * @constructor
  * @extends {superClass}
  * @implements {Polymer_PropertiesChanged}
  */
 const base = Object(_properties_changed_js__WEBPACK_IMPORTED_MODULE_2__["PropertiesChanged"])(superClass);

 /**
  * Returns the super class constructor for the given class, if it is an
  * instance of the PropertiesMixin.
  *
  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {PropertiesMixinConstructor} Super class constructor
  */
 function superPropertiesClass(constructor) {
   const superCtor = Object.getPrototypeOf(constructor);

   // Note, the `PropertiesMixin` class below only refers to the class
   // generated by this call to the mixin; the instanceof test only works
   // because the mixin is deduped and guaranteed only to apply once, hence
   // all constructors in a proto chain will see the same `PropertiesMixin`
   return (superCtor.prototype instanceof PropertiesMixin) ?
     /** @type {PropertiesMixinConstructor} */ (superCtor) : null;
 }

 /**
  * Returns a memoized version of the `properties` object for the
  * given class. Properties not in object format are converted to at
  * least {type}.
  *
  * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {Object} Memoized properties object
  */
 function ownProperties(constructor) {
   if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
     let props = null;

     if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
       props = normalizeProperties(constructor.properties);
     }

     constructor.__ownProperties = props;
   }
   return constructor.__ownProperties;
 }

 /**
  * @polymer
  * @mixinClass
  * @extends {base}
  * @implements {Polymer_PropertiesMixin}
  * @unrestricted
  */
 class PropertiesMixin extends base {

   /**
    * Implements standard custom elements getter to observes the attributes
    * listed in `properties`.
    * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
    */
   static get observedAttributes() {
     const props = this._properties;
     return props ? Object.keys(props).map(p => this.attributeNameForProperty(p)) : [];
   }

   /**
    * Finalizes an element definition, including ensuring any super classes
    * are also finalized. This includes ensuring property
    * accessors exist on the element prototype. This method calls
    * `_finalizeClass` to finalize each constructor in the prototype chain.
    * @return {void}
    */
   static finalize() {
     if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
       const superCtor = superPropertiesClass(/** @type {PropertiesMixinConstructor} */(this));
       if (superCtor) {
         superCtor.finalize();
       }
       this.__finalized = true;
       this._finalizeClass();
     }
   }

   /**
    * Finalize an element class. This includes ensuring property
    * accessors exist on the element prototype. This method is called by
    * `finalize` and finalizes the class constructor.
    *
    * @protected
    */
   static _finalizeClass() {
     const props = ownProperties(/** @type {PropertiesMixinConstructor} */(this));
     if (props) {
       this.createProperties(props);
     }
   }

   /**
    * Returns a memoized version of all properties, including those inherited
    * from super classes. Properties not in object format are converted to
    * at least {type}.
    *
    * @return {Object} Object containing properties for this class
    * @protected
    */
   static get _properties() {
     if (!this.hasOwnProperty(
       JSCompiler_renameProperty('__properties', this))) {
       const superCtor = superPropertiesClass(/** @type {PropertiesMixinConstructor} */(this));
       this.__properties = Object.assign({},
         superCtor && superCtor._properties,
         ownProperties(/** @type {PropertiesMixinConstructor} */(this)));
     }
     return this.__properties;
   }

   /**
    * Overrides `PropertiesChanged` method to return type specified in the
    * static `properties` object for the given property.
    * @param {string} name Name of property
    * @return {*} Type to which to deserialize attribute
    *
    * @protected
    */
   static typeForProperty(name) {
     const info = this._properties[name];
     return info && info.type;
   }

   /**
    * Overrides `PropertiesChanged` method and adds a call to
    * `finalize` which lazily configures the element's property accessors.
    * @override
    * @return {void}
    */
   _initializeProperties() {
     this.constructor.finalize();
     super._initializeProperties();
   }

   /**
    * Called when the element is added to a document.
    * Calls `_enableProperties` to turn on property system from
    * `PropertiesChanged`.
    * @suppress {missingProperties} Super may or may not implement the callback
    * @return {void}
    */
   connectedCallback() {
     if (super.connectedCallback) {
       super.connectedCallback();
     }
     this._enableProperties();
   }

   /**
    * Called when the element is removed from a document
    * @suppress {missingProperties} Super may or may not implement the callback
    * @return {void}
    */
   disconnectedCallback() {
     if (super.disconnectedCallback) {
       super.disconnectedCallback();
     }
   }

 }

 return PropertiesMixin;

});


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/async.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/async.js ***!
  \**********************************************************/
/*! exports provided: timeOut, animationFrame, idlePeriod, microTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOut", function() { return timeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idlePeriod", function() { return idlePeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microTask", function() { return microTask; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @fileoverview
 *
 * This module provides a number of strategies for enqueuing asynchronous
 * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
 * handle, and a `cancel(handle)` interface for canceling async tasks before
 * they run.
 *
 * @summary Module that provides a number of strategies for enqueuing
 * asynchronous tasks.
 */



// Microtask implemented using Mutation Observer
let microtaskCurrHandle = 0;
let microtaskLastHandle = 0;
let microtaskCallbacks = [];
let microtaskNodeContent = 0;
let microtaskNode = document.createTextNode('');
new window.MutationObserver(microtaskFlush).observe(microtaskNode, {characterData: true});

function microtaskFlush() {
  const len = microtaskCallbacks.length;
  for (let i = 0; i < len; i++) {
    let cb = microtaskCallbacks[i];
    if (cb) {
      try {
        cb();
      } catch (e) {
        setTimeout(() => { throw e; });
      }
    }
  }
  microtaskCallbacks.splice(0, len);
  microtaskLastHandle += len;
}

/**
 * Async interface wrapper around `setTimeout`.
 *
 * @namespace
 * @summary Async interface wrapper around `setTimeout`.
 */
const timeOut = {
  /**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */
  after(delay) {
    return {
      run(fn) { return window.setTimeout(fn, delay); },
      cancel(handle) {
        window.clearTimeout(handle);
      }
    };
  },
  /**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */
  run(fn, delay) {
    return window.setTimeout(fn, delay);
  },
  /**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.clearTimeout(handle);
  }
};


/**
 * Async interface wrapper around `requestAnimationFrame`.
 *
 * @namespace
 * @summary Async interface wrapper around `requestAnimationFrame`.
 */
const animationFrame = {
  /**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run(fn) {
    return window.requestAnimationFrame(fn);
  },
  /**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.cancelAnimationFrame(handle);
  }
};


/**
 * Async interface wrapper around `requestIdleCallback`.  Falls back to
 * `setTimeout` on browsers that do not support `requestIdleCallback`.
 *
 * @namespace
 * @summary Async interface wrapper around `requestIdleCallback`.
 */
const idlePeriod = {
  /**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run(fn) {
    return window.requestIdleCallback ?
      window.requestIdleCallback(fn) :
      window.setTimeout(fn, 16);
  },
  /**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.cancelIdleCallback ?
      window.cancelIdleCallback(handle) :
      window.clearTimeout(handle);
  }
};


/**
 * Async interface for enqueuing callbacks that run at microtask timing.
 *
 * Note that microtask timing is achieved via a single `MutationObserver`,
 * and thus callbacks enqueued with this API will all run in a single
 * batch, and not interleaved with other microtasks such as promises.
 * Promises are avoided as an implementation choice for the time being
 * due to Safari bugs that cause Promises to lack microtask guarantees.
 *
 * @namespace
 * @summary Async interface for enqueuing callbacks that run at microtask
 *   timing.
 */
const microTask = {

  /**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */
  run(callback) {
    microtaskNode.textContent = microtaskNodeContent++;
    microtaskCallbacks.push(callback);
    return microtaskCurrHandle++;
  },

  /**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    const idx = handle - microtaskLastHandle;
    if (idx >= 0) {
      if (!microtaskCallbacks[idx]) {
        throw new Error('invalid async handle: ' + handle);
      }
      microtaskCallbacks[idx] = null;
    }
  }

};



/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/boot.js":
/*!*********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/boot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

window.JSCompiler_renameProperty = function(prop) { return prop; };


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/case-map.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/case-map.js ***!
  \*************************************************************/
/*! exports provided: dashToCamelCase, camelToDashCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashToCamelCase", function() { return dashToCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDashCase", function() { return camelToDashCase; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


const caseMap = {};
const DASH_TO_CAMEL = /-[a-z]/g;
const CAMEL_TO_DASH = /([A-Z])/g;

/**
 * Module with utilities for converting between "dash-case" and "camelCase"
 * identifiers.
 *
 * @summary Module that provides utilities for converting between "dash-case"
 *   and "camelCase".
 */
`TODO(modulizer): A namespace named Polymer.CaseMap was
declared here. The surrounding comments should be reviewed,
and this string can then be deleted`;

/**
 * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
 * (e.g. `fooBarBaz`).
 *
 * @param {string} dash Dash-case identifier
 * @return {string} Camel-case representation of the identifier
 */
function dashToCamelCase(dash) {
  return caseMap[dash] || (
    caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL,
      (m) => m[1].toUpperCase()
    )
  );
}

/**
 * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
 * (e.g. `foo-bar-baz`).
 *
 * @param {string} camel Camel-case identifier
 * @return {string} Dash-case representation of the identifier
 */
function camelToDashCase(camel) {
  return caseMap[camel] || (
    caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase()
  );
}


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/mixin.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/mixin.js ***!
  \**********************************************************/
/*! exports provided: dedupingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedupingMixin", function() { return dedupingMixin; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


// unique global id for deduping mixins.
let dedupeId = 0;

/**
 * @constructor
 * @extends {Function}
 */
function MixinFunction(){}
/** @type {(WeakMap | undefined)} */
MixinFunction.prototype.__mixinApplications;
/** @type {(Object | undefined)} */
MixinFunction.prototype.__mixinSet;

/* eslint-disable valid-jsdoc */
/**
 * Wraps an ES6 class expression mixin such that the mixin is only applied
 * if it has not already been applied its base argument. Also memoizes mixin
 * applications.
 *
 * @template T
 * @param {T} mixin ES6 class expression mixin to wrap
 * @return {T}
 * @suppress {invalidCasts}
 */
const dedupingMixin = function(mixin) {
  let mixinApplications = /** @type {!MixinFunction} */(mixin).__mixinApplications;
  if (!mixinApplications) {
    mixinApplications = new WeakMap();
    /** @type {!MixinFunction} */(mixin).__mixinApplications = mixinApplications;
  }
  // maintain a unique id for each mixin
  let mixinDedupeId = dedupeId++;
  function dedupingMixin(base) {
    let baseSet = /** @type {!MixinFunction} */(base).__mixinSet;
    if (baseSet && baseSet[mixinDedupeId]) {
      return base;
    }
    let map = mixinApplications;
    let extended = map.get(base);
    if (!extended) {
      extended = /** @type {!Function} */(mixin)(base);
      map.set(base, extended);
    }
    // copy inherited mixin set from the extended class, or the base class
    // NOTE: we avoid use of Set here because some browser (IE11)
    // cannot extend a base Set via the constructor.
    let mixinSet = Object.create(/** @type {!MixinFunction} */(extended).__mixinSet || baseSet || null);
    mixinSet[mixinDedupeId] = true;
    /** @type {!MixinFunction} */(extended).__mixinSet = mixinSet;
    return extended;
  }

  return /** @type {T} */ (dedupingMixin);
};
/* eslint-enable valid-jsdoc */


/***/ }),

/***/ "./node_modules/canvas-gauges/gauge.min.js":
/*!*************************************************!*\
  !*** ./node_modules/canvas-gauges/gauge.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/canvas-gauges/gauge.min.js */ "./node_modules/raw-loader/index.js!./node_modules/canvas-gauges/gauge.min.js"))

/***/ }),

/***/ "./node_modules/lit-html/lib/lit-extended.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/lit-extended.js ***!
  \***************************************************/
/*! exports provided: render, html, svg, extendedPartCallback, BooleanAttributePart, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendedPartCallback", function() { return extendedPartCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * Interprets a template literal as a lit-extended HTML template.
 */
const html = (strings, ...values) => new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"](strings, values, 'html', extendedPartCallback);
/**
 * Interprets a template literal as a lit-extended SVG template.
 */
const svg = (strings, ...values) => new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"](strings, values, 'svg', extendedPartCallback);
/**
 * A PartCallback which allows templates to set properties and declarative
 * event handlers.
 *
 * Properties are set by default, instead of attributes. Attribute names in
 * lit-html templates preserve case, so properties are case sensitive. If an
 * expression takes up an entire attribute value, then the property is set to
 * that value. If an expression is interpolated with a string or other
 * expressions then the property is set to the string result of the
 * interpolation.
 *
 * To set an attribute instead of a property, append a `$` suffix to the
 * attribute name.
 *
 * Example:
 *
 *     html`<button class$="primary">Buy Now</button>`
 *
 * To set an event handler, prefix the attribute name with `on-`:
 *
 * Example:
 *
 *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
 *
 */
const extendedPartCallback = (instance, templatePart, node) => {
    if (templatePart.type === 'attribute') {
        if (templatePart.rawName.substr(0, 3) === 'on-') {
            const eventName = templatePart.rawName.slice(3);
            return new EventPart(instance, node, eventName);
        }
        const lastChar = templatePart.name.substr(templatePart.name.length - 1);
        if (lastChar === '$') {
            const name = templatePart.name.slice(0, -1);
            return new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"](instance, node, name, templatePart.strings);
        }
        if (lastChar === '?') {
            const name = templatePart.name.slice(0, -1);
            return new BooleanAttributePart(instance, node, name, templatePart.strings);
        }
        return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
    }
    return Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["defaultPartCallback"])(instance, templatePart, node);
};
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart extends _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"] {
    setValue(values, startIndex) {
        const s = this.strings;
        if (s.length === 2 && s[0] === '' && s[1] === '') {
            const value = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this, values[startIndex]);
            if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["noChange"]) {
                return;
            }
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
        }
        else {
            throw new Error('boolean attributes can only contain a single expression');
        }
    }
}
class PropertyPart extends _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"] {
    setValue(values, startIndex) {
        const s = this.strings;
        let value;
        if (this._equalToPreviousValues(values, startIndex)) {
            return;
        }
        if (s.length === 2 && s[0] === '' && s[1] === '') {
            // An expression that occupies the whole attribute value will leave
            // leading and trailing empty strings.
            value = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this, values[startIndex]);
        }
        else {
            // Interpolation, so interpolate
            value = this._interpolate(values, startIndex);
        }
        if (value !== _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["noChange"]) {
            this.element[this.name] = value;
        }
        this._previousValues = values;
    }
}
class EventPart {
    constructor(instance, element, eventName) {
        this.instance = instance;
        this.element = element;
        this.eventName = eventName;
    }
    setValue(value) {
        const listener = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this, value);
        if (listener === this._listener) {
            return;
        }
        if (listener == null) {
            this.element.removeEventListener(this.eventName, this);
        }
        else if (this._listener == null) {
            this.element.addEventListener(this.eventName, this);
        }
        this._listener = listener;
    }
    handleEvent(event) {
        if (typeof this._listener === 'function') {
            this._listener.call(this.element, event);
        }
        else if (typeof this._listener.handleEvent === 'function') {
            this._listener.handleEvent(event);
        }
    }
}
//# sourceMappingURL=lit-extended.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
    NodeFilter.SHOW_TEXT;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = 0;
    let part = parts[0];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            part = parts[++partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            refNode.parentNode.insertBefore(node, refNode);
            insertCount = countNodes(node);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = new Map();
        _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.get(result.strings);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (typeof window.ShadyCSS === 'object') {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, element);
        templateCache.set(result.strings, template);
    }
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.forEach((template) => {
                const { element: { content } } = template;
                const styles = content.querySelectorAll('style');
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, new Set(Array.from(styles)));
            });
        }
    });
}
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered output.
 */
const ensureStylesScoped = (fragment, template, scopeName) => {
    // only scope element template once per scope name
    if (!shadyRenderSet.has(scopeName)) {
        shadyRenderSet.add(scopeName);
        const styleTemplate = document.createElement('template');
        Array.from(fragment.querySelectorAll('style')).forEach((s) => {
            styleTemplate.content.appendChild(s);
        });
        window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName);
        // Fix templates: note the expectation here is that the given `fragment`
        // has been generated from the given `template` which contains
        // the set of templates rendered into this scope.
        // It is only from this set of initial templates from which styles
        // will be scoped and removed.
        removeStylesFromLitTemplates(scopeName);
        // ApplyShim case
        if (window.ShadyCSS.nativeShadow) {
            const style = styleTemplate.content.querySelector('style');
            if (style !== null) {
                // Insert style into rendered fragment
                fragment.insertBefore(style, fragment.firstChild);
                // Insert into lit-template (for subsequent renders)
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, style.cloneNode(true), template.element.content.firstChild);
            }
        }
    }
};
// NOTE: We're copying code from lit-html's `render` method here.
// We're doing this explicitly because the API for rendering templates is likely
// to change in the near term.
function render(result, container, scopeName) {
    const templateFactory = shadyTemplateFactory(scopeName);
    const template = templateFactory(result);
    let instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === template &&
        instance._partCallback === result.partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance =
        new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["TemplateInstance"](template, result.partCallback, templateFactory);
    container.__templateInstance = instance;
    const fragment = instance._clone();
    instance.update(result.values);
    const host = container instanceof ShadowRoot ?
        container.host :
        undefined;
    // If there's a shadow host, do ShadyCSS scoping...
    if (host !== undefined && typeof window.ShadyCSS === 'object') {
        ensureStylesScoped(fragment, template, scopeName);
        window.ShadyCSS.styleElement(host);
    }
    Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    container.appendChild(fragment);
}
//# sourceMappingURL=shady-render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: templateCaches, html, svg, TemplateResult, SVGTemplateResult, defaultTemplateFactory, render, TemplatePart, isTemplatePartActive, Template, getValue, directive, noChange, directiveValue, AttributePart, NodePart, defaultPartCallback, TemplateInstance, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateFactory", function() { return defaultTemplateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePart", function() { return TemplatePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directiveValue", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPartCallback", function() { return defaultPartCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
const templateCaches = new Map();
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html');
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new SVGTemplateResult(strings, values, 'svg');
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, partCallback = defaultPartCallback) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.partCallback = partCallback;
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isTextBinding = true;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            html += s;
            // We're in a text position if the previous string closed its tags.
            // If it doesn't have any tags, then we use the previous text position
            // state.
            const closing = findTagClose(s);
            isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
            html += isTextBinding ? nodeMarker : marker;
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an <svg> tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the <svg> tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
    }
}
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function defaultTemplateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = new Map();
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.get(result.strings);
    if (template === undefined) {
        template = new Template(result, result.getTemplateElement());
        templateCache.set(result.strings, template);
    }
    return template;
}
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param templateFactory a function to create a Template or retreive one from
 *     cache.
 */
function render(result, container, templateFactory = defaultTemplateFactory) {
    const template = templateFactory(result);
    let instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === template &&
        instance._partCallback === result.partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance =
        new TemplateInstance(template, result.partCallback, templateFactory);
    container.__templateInstance = instance;
    const fragment = instance._clone();
    instance.update(result.values);
    removeNodes(container, container.firstChild);
    container.appendChild(fragment);
}
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, not attribute positions,
 * in template.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
/**
 * Finds the closing index of the last closed HTML tag.
 * This has 3 possible return values:
 *   - `-1`, meaning there is no tag in str.
 *   - `string.length`, meaning the last opened tag is unclosed.
 *   - Some positive number < str.length, meaning the index of the closing '>'.
 */
function findTagClose(str) {
    const close = str.lastIndexOf('>');
    const open = str.indexOf('<', close + 1);
    return open > -1 ? str.length : close;
}
/**
 * A placeholder for a dynamic expression in an HTML template.
 *
 * There are two built-in part types: AttributePart and NodePart. NodeParts
 * always represent a single dynamic expression, while AttributeParts may
 * represent as many expressions are contained in the attribute.
 *
 * A Template's parts are mutable, so parts can be replaced or modified
 * (possibly to implement different template semantics). The contract is that
 * parts can only be replaced, not removed, added or reordered, and parts must
 * always consume the correct number of values in their `update()` method.
 *
 * TODO(justinfagnani): That requirement is a little fragile. A
 * TemplateInstance could instead be more careful about which values it gives
 * to Part.update().
 */
class TemplatePart {
    constructor(type, index, name, rawName, strings) {
        this.type = type;
        this.index = index;
        this.name = name;
        this.rawName = rawName;
        this.strings = strings;
    }
}
const isTemplatePartActive = (part) => part.index !== -1;
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const content = this.element.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
               NodeFilter.SHOW_TEXT */, null, false);
        let index = -1;
        let partIndex = 0;
        const nodesToRemove = [];
        // The actual previous node, accounting for removals: if a node is removed
        // it will never be the previousNode.
        let previousNode;
        // Used to set previousNode at the top of the loop.
        let currentNode;
        while (walker.nextNode()) {
            index++;
            previousNode = currentNode;
            const node = currentNode = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (!node.hasAttributes()) {
                    continue;
                }
                const attributes = node.attributes;
                // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                // attributes are not guaranteed to be returned in document order. In
                // particular, Edge/IE can return them out of order, so we cannot assume
                // a correspondance between part index and attribute index.
                let count = 0;
                for (let i = 0; i < attributes.length; i++) {
                    if (attributes[i].value.indexOf(marker) >= 0) {
                        count++;
                    }
                }
                while (count-- > 0) {
                    // Get the template literal section leading up to the first
                    // expression in this attribute
                    const stringForPart = result.strings[partIndex];
                    // Find the attribute name
                    const attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                    // Find the corresponding attribute
                    // TODO(justinfagnani): remove non-null assertion
                    const attribute = attributes.getNamedItem(attributeNameInPart);
                    const stringsForAttributeValue = attribute.value.split(markerRegex);
                    this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                    node.removeAttribute(attribute.name);
                    partIndex += stringsForAttributeValue.length - 1;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const nodeValue = node.nodeValue;
                if (nodeValue.indexOf(marker) < 0) {
                    continue;
                }
                const parent = node.parentNode;
                const strings = nodeValue.split(markerRegex);
                const lastIndex = strings.length - 1;
                // We have a part for each match found
                partIndex += lastIndex;
                // Generate a new text node for each literal section
                // These nodes are also used as the markers for node parts
                for (let i = 0; i < lastIndex; i++) {
                    parent.insertBefore((strings[i] === '')
                        ? document.createComment('')
                        : document.createTextNode(strings[i]), node);
                    this.parts.push(new TemplatePart('node', index++));
                }
                parent.insertBefore(strings[lastIndex] === '' ?
                    document.createComment('') :
                    document.createTextNode(strings[lastIndex]), node);
                nodesToRemove.push(node);
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */ &&
                node.nodeValue === marker) {
                const parent = node.parentNode;
                // Add a new marker node to be the startNode of the Part if any of the
                // following are true:
                //  * We don't have a previousSibling
                //  * previousSibling is being removed (thus it's not the
                //    `previousNode`)
                //  * previousSibling is not a Text node
                //
                // TODO(justinfagnani): We should be able to use the previousNode here
                // as the marker node and reduce the number of extra nodes we add to a
                // template. See https://github.com/PolymerLabs/lit-html/issues/147
                const previousSibling = node.previousSibling;
                if (previousSibling === null || previousSibling !== previousNode ||
                    previousSibling.nodeType !== Node.TEXT_NODE) {
                    parent.insertBefore(document.createComment(''), node);
                }
                else {
                    index--;
                }
                this.parts.push(new TemplatePart('node', index++));
                nodesToRemove.push(node);
                // If we don't have a nextSibling add a marker node.
                // We don't have to check if the next node is going to be removed,
                // because that node will induce a new marker if so.
                if (node.nextSibling === null) {
                    parent.insertBefore(document.createComment(''), node);
                }
                else {
                    index--;
                }
                currentNode = previousNode;
                partIndex++;
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
/**
 * Returns a value ready to be inserted into a Part from a user-provided value.
 *
 * If the user value is a directive, this invokes the directive with the given
 * part. If the value is null, it's converted to undefined to work better
 * with certain DOM APIs, like textContent.
 */
const getValue = (part, value) => {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (isDirective(value)) {
        value = value(part);
        return noChange;
    }
    return value === null ? undefined : value;
};
const directive = (f) => {
    f.__litDirective = true;
    return f;
};
const isDirective = (o) => typeof o === 'function' && o.__litDirective === true;
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * @deprecated Use `noChange` instead.
 */

const isPrimitiveValue = (value) => value === null ||
    !(typeof value === 'object' || typeof value === 'function');
class AttributePart {
    constructor(instance, element, name, strings) {
        this.instance = instance;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.size = strings.length - 1;
        this._previousValues = [];
    }
    _interpolate(values, startIndex) {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const v = getValue(this, values[startIndex + i]);
            if (v && v !== noChange &&
                (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                for (const t of v) {
                    // TODO: we need to recursively call getValue into iterables...
                    text += t;
                }
            }
            else {
                text += v;
            }
        }
        return text + strings[l];
    }
    _equalToPreviousValues(values, startIndex) {
        for (let i = startIndex; i < startIndex + this.size; i++) {
            if (this._previousValues[i] !== values[i] ||
                !isPrimitiveValue(values[i])) {
                return false;
            }
        }
        return true;
    }
    setValue(values, startIndex) {
        if (this._equalToPreviousValues(values, startIndex)) {
            return;
        }
        const s = this.strings;
        let value;
        if (s.length === 2 && s[0] === '' && s[1] === '') {
            // An expression that occupies the whole attribute value will leave
            // leading and trailing empty strings.
            value = getValue(this, values[startIndex]);
            if (Array.isArray(value)) {
                value = value.join('');
            }
        }
        else {
            value = this._interpolate(values, startIndex);
        }
        if (value !== noChange) {
            this.element.setAttribute(this.name, value);
        }
        this._previousValues = values;
    }
}
class NodePart {
    constructor(instance, startNode, endNode) {
        this.instance = instance;
        this.startNode = startNode;
        this.endNode = endNode;
        this._previousValue = undefined;
    }
    setValue(value) {
        value = getValue(this, value);
        if (value === noChange) {
            return;
        }
        if (isPrimitiveValue(value)) {
            // Handle primitive values
            // If the value didn't change, do nothing
            if (value === this._previousValue) {
                return;
            }
            this._setText(value);
        }
        else if (value instanceof TemplateResult) {
            this._setTemplateResult(value);
        }
        else if (Array.isArray(value) || value[Symbol.iterator]) {
            this._setIterable(value);
        }
        else if (value instanceof Node) {
            this._setNode(value);
        }
        else if (value.then !== undefined) {
            this._setPromise(value);
        }
        else {
            // Fallback, will render the string representation
            this._setText(value);
        }
    }
    _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    _setNode(value) {
        if (this._previousValue === value) {
            return;
        }
        this.clear();
        this._insert(value);
        this._previousValue = value;
    }
    _setText(value) {
        const node = this.startNode.nextSibling;
        value = value === undefined ? '' : value;
        if (node === this.endNode.previousSibling &&
            node.nodeType === Node.TEXT_NODE) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if _previousValue is
            // primitive?
            node.textContent = value;
        }
        else {
            this._setNode(document.createTextNode(value));
        }
        this._previousValue = value;
    }
    _setTemplateResult(value) {
        const template = this.instance._getTemplate(value);
        let instance;
        if (this._previousValue && this._previousValue.template === template) {
            instance = this._previousValue;
        }
        else {
            instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
            this._setNode(instance._clone());
            this._previousValue = instance;
        }
        instance.update(value.values);
    }
    _setIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _previousValue is an array, then the previous render was of an
        // iterable and _previousValue will contain the NodeParts from the previous
        // render. If _previousValue is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this._previousValue)) {
            this.clear();
            this._previousValue = [];
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._previousValue;
        let partIndex = 0;
        for (const item of value) {
            // Try to reuse an existing part
            let itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                // If we're creating the first item part, it's startNode should be the
                // container's startNode
                let itemStart = this.startNode;
                // If we're not creating the first part, create a new separator marker
                // node, and fix up the previous part's endNode to point to it
                if (partIndex > 0) {
                    const previousPart = itemParts[partIndex - 1];
                    itemStart = previousPart.endNode = document.createTextNode('');
                    this._insert(itemStart);
                }
                itemPart = new NodePart(this.instance, itemStart, this.endNode);
                itemParts.push(itemPart);
            }
            itemPart.setValue(item);
            partIndex++;
        }
        if (partIndex === 0) {
            this.clear();
            this._previousValue = undefined;
        }
        else if (partIndex < itemParts.length) {
            const lastPart = itemParts[partIndex - 1];
            // Truncate the parts array so _previousValue reflects the current state
            itemParts.length = partIndex;
            this.clear(lastPart.endNode.previousSibling);
            lastPart.endNode = this.endNode;
        }
    }
    _setPromise(value) {
        this._previousValue = value;
        value.then((v) => {
            if (this._previousValue === value) {
                this.setValue(v);
            }
        });
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
const defaultPartCallback = (instance, templatePart, node) => {
    if (templatePart.type === 'attribute') {
        return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    }
    else if (templatePart.type === 'node') {
        return new NodePart(instance, node, node.nextSibling);
    }
    throw new Error(`Unknown part type ${templatePart.type}`);
};
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, partCallback, getTemplate) {
        this._parts = [];
        this.template = template;
        this._partCallback = partCallback;
        this._getTemplate = getTemplate;
    }
    update(values) {
        let valueIndex = 0;
        for (const part of this._parts) {
            if (!part) {
                valueIndex++;
            }
            else if (part.size === undefined) {
                part.setValue(values[valueIndex]);
                valueIndex++;
            }
            else {
                part.setValue(values, valueIndex);
                valueIndex += part.size;
            }
        }
    }
    _clone() {
        // Clone the node, rather than importing it, to keep the fragment in the
        // template's document. This leaves the fragment inert so custom elements
        // won't upgrade until after the main document adopts the node.
        const fragment = this.template.element.content.cloneNode(true);
        const parts = this.template.parts;
        if (parts.length > 0) {
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                   NodeFilter.SHOW_TEXT */, null, false);
            let index = -1;
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                const partActive = isTemplatePartActive(part);
                // An inactive part has no coresponding Template node.
                if (partActive) {
                    while (index < part.index) {
                        index++;
                        walker.nextNode();
                    }
                }
                this._parts.push(partActive ? this._partCallback(this, part, walker.currentNode) : undefined);
            }
        }
        return fragment;
    }
}
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    let node = start;
    while (node !== end) {
        const n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
const removeNodes = (container, startNode, endNode = null) => {
    let node = startNode;
    while (node !== endNode) {
        const n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/canvas-gauges/gauge.min.js":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/canvas-gauges/gauge.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * The MIT License (MIT)\n * \n * Copyright (c) 2016 Mykhailo Stadnyk <mikhus@gmail.com>\n * \n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n * \n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n *\n * @version 2.1.5\n */\n!function(e){\"use strict\";function t(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function i(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(t||(t=\"undefined\"==typeof window?global:window),void 0!==t[e])return t[e];for(var i=[\"webkit\",\"moz\",\"ms\",\"o\"],r=0,o=i.length,n=e.charAt(0).toUpperCase()+e.substr(1);r<o;r++){var a=t[i[r]+n];if(void 0!==a)return a}return null}function a(e,t,i,r,o,n,l){if(\"function\"!=typeof r)throw new TypeError(\"Invalid animation rule:\",r);var s=e-i,d=s/o,c=0;d>1&&(d=1),1!==d&&(c=r(d),isFinite(c)&&!isNaN(c)&&(d=c)),t&&t(d),s<o?l.frame=ue(function(e){return a(e,t,i,r,o,n,l)}):(n&&n(),l.inProgress=!1)}function l(){Array.prototype.constructor.apply(this,arguments)}function s(e){if(!(e instanceof DOMException&&2152923147===e.result))throw e}function d(e){return e.majorTicks instanceof Array||(e.majorTicks=e.majorTicks?[e.majorTicks]:[]),e.majorTicks.length||(e.majorTicks.push(Te.formatMajorTickNumber(e.minValue,e)),e.majorTicks.push(Te.formatMajorTickNumber(e.maxValue,e))),[\"right\"!==e.tickSide,\"left\"!==e.tickSide]}function c(e,t,i,r,o,n){e.beginPath(),e.moveTo(t+n,i),e.lineTo(t+r-n,i),e.quadraticCurveTo(t+r,i,t+r,i+n),e.lineTo(t+r,i+o-n),e.quadraticCurveTo(t+r,i+o,t+r-n,i+o),e.lineTo(t+n,i+o),e.quadraticCurveTo(t,i+o,t,i+o-n),e.lineTo(t,i+n),e.quadraticCurveTo(t,i,t+n,i),e.closePath()}function h(e,t){var i=t.valueDec,r=t.valueInt,o=0,n=void 0,a=void 0,l=void 0;if(e=parseFloat(e),l=e<0,e=Math.abs(e),i>0){for(a=e.toFixed(i).toString().split(\".\"),n=r-a[0].length;o<n;++o)a[0]=\"0\"+a[0];a=(l?\"-\":\"\")+a[0]+\".\"+a[1]}else{for(a=Math.round(e).toString(),n=r-a.length;o<n;++o)a=\"0\"+a;a=(l?\"-\":\"\")+a}return a}function u(e,t){var i=void 0,r=!1;return i=0===t.majorTicksDec?Math.round(e).toString():e.toFixed(t.majorTicksDec),t.majorTicksInt>1?(r=~i.indexOf(\".\"),~i.indexOf(\"-\")?\"-\"+[t.majorTicksInt+t.majorTicksDec+2+(r?1:0)-i.length].join(\"0\")+i.replace(\"-\",\"\"):[t.majorTicksInt+t.majorTicksDec+1+(r?1:0)-i.length].join(\"0\")+i):i}function f(e){return e*Math.PI/180}function m(e,t){return{x:-e*Math.sin(t),y:e*Math.cos(t)}}function v(e,t,i,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=e.createLinearGradient(o?0:n,o?n:0,o?0:r,o?r:0);return a.addColorStop(0,t),a.addColorStop(1,i),a}function b(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return e.restore(),!0;e.save();var i=t.borderShadowWidth;return i&&(e.shadowBlur=i,e.shadowColor=t.colorBorderShadow),!0}function g(e,t){t.needleShadow&&(e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowBlur=10,e.shadowColor=t.colorNeedleShadowDown)}function p(e,t,i){return e[\"font\"+t+\"Style\"]+\" \"+e[\"font\"+t+\"Weight\"]+\" \"+e[\"font\"+t+\"Size\"]*i+\"px \"+e[\"font\"+t]}function w(e){e.shadowOffsetX=null,e.shadowOffsetY=null,e.shadowBlur=null,e.shadowColor=\"\",e.strokeStyle=null,e.lineWidth=0,e.save()}function y(e,t,i,r){t.valueTextShadow&&(e.shadowOffsetX=i,e.shadowOffsetY=i,e.shadowBlur=r,e.shadowColor=t.colorValueTextShadow)}function k(e,t,i,r,o,n){if(t.valueBox){w(e);var a=t.valueDec?1+t.valueDec:0,l=\"9\".repeat(Math.max.apply(null,[String(parseInt(i)).length+a].concat(t.majorTicks.map(function(e){return String(parseInt(e,10)).length+a})))),s=t.valueText||h(i,t),d=n/200,u=n/100,f=.4*u,m=1.2*u;e.font=p(t,\"Value\",d),y(e,t,f,m);var v=e.measureText(t.valueText?s:\"-\"+h(Number(l),t)).width;w(e);var b=parseFloat(t.fontValueSize)*d+f+m,g=u*parseFloat(t.valueBoxStroke),k=2*n-2*g,x=v+10*u,T=1.1*b+f+m,S=u*t.valueBoxBorderRadius,W=(parseFloat(t.valueBoxWidth)||0)/100*k;W>x&&(x=W),x>k&&(x=k);var O=r-x/2,V=o-T/2,P=o-5.75*u;if(e.beginPath(),S?c(e,O,V,x,T,S):e.rect(O,V,x,T),g){var M=e.createRadialGradient(r,P,10*u,r,P,20*u);M.addColorStop(0,t.colorValueBoxRect),M.addColorStop(1,t.colorValueBoxRectEnd),e.strokeStyle=M,e.lineWidth=g,e.stroke()}t.colorValueBoxShadow&&(e.shadowBlur=1.2*u,e.shadowColor=t.colorValueBoxShadow),t.colorValueBoxBackground&&(e.fillStyle=t.colorValueBoxBackground,e.fill()),e.closePath(),e.restore(),y(e,t,f,m),e.fillStyle=t.colorValueText,e.textAlign=\"center\",e.textBaseline=\"alphabetic\",e.fillText(s,O+x/2,o+T/2-b/3),e.restore()}}function x(e){var t=e.value,i=e.minValue,r=e.maxValue,o=.01*(r-i);return{normal:t<i?i:t>r?r:t,indented:t<i?i-o:t>r?r+o:t}}function T(e,t,i,r,o){i.beginPath(),i.arc(0,0,ye(e),0,2*Se,!0),i.lineWidth=t,i.strokeStyle=o?Te.linearGradient(i,r,o,e):r,i.stroke(),i.closePath()}function S(e,t){var i=be.pixelRatio;return e.maxRadius||(e.maxRadius=e.max-t.borderShadowWidth-t.borderOuterWidth*i-t.borderMiddleWidth*i-t.borderInnerWidth*i+(t.borderOuterWidth?.5:0)+(t.borderMiddleWidth?.5:0)+(t.borderInnerWidth?.5:0)),e.maxRadius}function W(e,t){var i=be.pixelRatio,r=t.borderShadowWidth*i,o=e.max-r-t.borderOuterWidth*i/2,n=o-t.borderOuterWidth*i/2-t.borderMiddleWidth*i/2+.5,a=n-t.borderMiddleWidth*i/2-t.borderInnerWidth*i/2+.5,l=S(e,t),s=void 0,d=!1;e.save(),t.borderOuterWidth&&(d=Te.drawShadow(e,t,d),T(o,t.borderOuterWidth*i,e,t.colorBorderOuter,t.colorBorderOuterEnd)),t.borderMiddleWidth&&(d=Te.drawShadow(e,t,d),T(n,t.borderMiddleWidth*i,e,t.colorBorderMiddle,t.colorBorderMiddleEnd)),t.borderInnerWidth&&(d=Te.drawShadow(e,t,d),T(a,t.borderInnerWidth*i,e,t.colorBorderInner,t.colorBorderInnerEnd)),Te.drawShadow(e,t,d),e.beginPath(),e.arc(0,0,ye(l),0,2*Se,!0),t.colorPlateEnd?(s=e.createRadialGradient(0,0,l/2,0,0,l),s.addColorStop(0,t.colorPlate),s.addColorStop(1,t.colorPlateEnd)):s=t.colorPlate,e.fillStyle=s,e.fill(),e.closePath(),e.restore()}function O(e,t){var i=e.max*(parseFloat(t.highlightsWidth)||0)/100;if(i){var r=ye(P(e,t)-i/2),o=0,n=t.highlights.length,a=(t.maxValue-t.minValue)/t.ticksAngle;for(e.save();o<n;o++){var l=t.highlights[o];e.beginPath(),e.rotate(We),e.arc(0,0,r,Te.radians(t.startAngle+(l.from-t.minValue)/a),Te.radians(t.startAngle+(l.to-t.minValue)/a),!1),e.strokeStyle=l.color,e.lineWidth=i,e.stroke(),e.closePath(),e.restore(),e.save()}}}function V(e,t){var i=P(e,t),r=void 0,o=void 0,n=void 0,a=0,l=0,s=Math.abs(t.minorTicks)||0,d=t.ticksAngle/(t.maxValue-t.minValue);for(e.lineWidth=be.pixelRatio,e.strokeStyle=t.colorMinorTicks||t.colorStrokeTicks,e.save(),t.exactTicks?(o=t.maxValue-t.minValue,r=s?o/s:0,l=(xe.mod(t.majorTicks[0],s)||0)*d):r=s*(t.majorTicks.length-1);a<r;++a)(n=t.startAngle+l+a*(t.ticksAngle/r))<=t.ticksAngle+t.startAngle&&(e.rotate(Te.radians(n)),e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-.075*e.max),B(e))}function P(e,t){var i=e.max/100;return S(e,t)-5*i-(t.barWidth?2*(parseFloat(t.barStrokeWidth)||0)+((parseFloat(t.barWidth)||0)+5)*i:0)}function M(e,t){Te.prepareTicks(t);var i=ye(P(e,t)),r=void 0,o=void 0,n=t.majorTicks.length,a=be.pixelRatio;for(e.lineWidth=2*a,e.save(),o=t.colorMajorTicks instanceof Array?t.colorMajorTicks:new Array(n).fill(t.colorStrokeTicks||t.colorMajorTicks),r=0;r<n;++r)e.strokeStyle=o[r],e.rotate(Te.radians(A(t,t.exactTicks?t.majorTicks[r]:r,n))),e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-.15*e.max),B(e);t.strokeTicks&&(e.strokeStyle=t.colorStrokeTicks||o[0],e.rotate(We),e.beginPath(),e.arc(0,0,i,Te.radians(t.startAngle),Te.radians(t.startAngle+t.ticksAngle),!1),B(e))}function A(e,t,i){if(e.exactTicks){var r=e.ticksAngle/(e.maxValue-e.minValue);return e.startAngle+r*(t-e.minValue)}return e.startAngle+t*(e.ticksAngle/(i-1))}function B(e){e.stroke(),e.restore(),e.closePath(),e.save()}function j(e,t){var i=P(e,t)-.15*e.max,r={},o=0,n=t.majorTicks.length,a=\"needle\"!==t.animationTarget,l=t.colorNumbers instanceof Array?t.colorNumbers:new Array(n).fill(t.colorNumbers),s=a?-(t.value-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle:0;for(a&&(e.save(),e.rotate(-Te.radians(s))),e.font=Te.font(t,\"Numbers\",e.max/200),e.lineWidth=0,e.textAlign=\"center\",e.textBaseline=\"middle\";o<n;++o){var d=s+A(t,t.exactTicks?t.majorTicks[o]:o,n),c=e.measureText(t.majorTicks[o]).width,h=t.fontNumbersSize,u=Math.sqrt(c*c+h*h)/2,f=Te.radialPoint(i-u-t.numbersMargin/100*e.max,Te.radians(d));360===d&&(d=0),r[d]||(r[d]=!0,e.fillStyle=l[o],e.fillText(t.majorTicks[o],f.x,f.y))}a&&e.restore()}function C(e,t){t.title&&(e.save(),e.font=Te.font(t,\"Title\",e.max/200),e.fillStyle=t.colorTitle,e.textAlign=\"center\",e.fillText(t.title,0,-e.max/4.25,.8*e.max),e.restore())}function N(e,t){t.units&&(e.save(),e.font=Te.font(t,\"Units\",e.max/200),e.fillStyle=t.colorUnits,e.textAlign=\"center\",e.fillText(t.units,0,e.max/3.25,.8*e.max),e.restore())}function E(e,t){if(t.needle){var i=t.ticksAngle<360?Te.normalizedValue(t).indented:t.value,r=S(e,t),o=ye(r/100*t.needleCircleSize),n=ye(r/100*t.needleCircleSize*.75),a=ye(r/100*t.needleEnd),l=ye(t.needleStart?r/100*t.needleStart:0),s=r/100*t.needleWidth,d=r/100*t.needleWidth/2,c=be.pixelRatio,h=\"needle\"!==t.animationTarget;e.save(),Te.drawNeedleShadow(e,t),e.rotate(Te.radians(h?t.startAngle:t.startAngle+(i-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle)),e.fillStyle=Te.linearGradient(e,t.colorNeedle,t.colorNeedleEnd,a-l),\"arrow\"===t.needleType?(e.beginPath(),e.moveTo(-d,-l),e.lineTo(-s,0),e.lineTo(-1*c,a),e.lineTo(c,a),e.lineTo(s,0),e.lineTo(d,-l),e.closePath(),e.fill(),e.beginPath(),e.lineTo(-.5*c,a),e.lineTo(-1*c,a),e.lineTo(-s,0),e.lineTo(-d,-l),e.lineTo(d/2*c-2*c,-l),e.closePath(),e.fillStyle=t.colorNeedleShadowUp,e.fill()):(e.beginPath(),e.moveTo(-d,a),e.lineTo(-d,l),e.lineTo(d,l),e.lineTo(d,a),e.closePath(),e.fill()),t.needleCircleSize&&(e.restore(),Te.drawNeedleShadow(e,t),t.needleCircleOuter&&(e.beginPath(),e.arc(0,0,o,0,2*Se,!0),e.fillStyle=Te.linearGradient(e,t.colorNeedleCircleOuter,t.colorNeedleCircleOuterEnd,o),e.fill(),e.closePath()),t.needleCircleInner&&(e.beginPath(),e.arc(0,0,n,0,2*Se,!0),e.fillStyle=Te.linearGradient(e,t.colorNeedleCircleInner,t.colorNeedleCircleInnerEnd,n),e.fill(),e.closePath()),e.restore())}}function _(e,t,i){Te.drawValueBox(e,t,i,0,e.max-.33*e.max,e.max)}function R(e,t){var i=e.max/100,r=S(e,t)-5*i,o=parseFloat(t.barStrokeWidth)||0,n=(parseFloat(t.barWidth)||0)*i,a=r-2*o-n,l=(r-a)/2,s=a+l,d=o/s,c=t.startAngle,h=t.startAngle+t.ticksAngle;e.save(),e.rotate(We),o&&(e.beginPath(),e.arc(0,0,s,Te.radians(c)-d,Te.radians(h)+d,!1),e.strokeStyle=t.colorBarStroke,e.lineWidth=2*l,e.stroke(),e.closePath()),n&&(e.beginPath(),e.arc(0,0,s,Te.radians(c),Te.radians(h),!1),e.strokeStyle=t.colorBar,e.lineWidth=n,e.stroke(),e.closePath(),t.barShadow&&(e.beginPath(),e.arc(0,0,r,Te.radians(c),Te.radians(h),!1),e.clip(),e.beginPath(),e.strokeStyle=t.colorBar,e.lineWidth=1,e.shadowBlur=t.barShadow,e.shadowColor=t.colorBarShadow,e.shadowOffsetX=0,e.shadowOffsetY=0,e.arc(0,0,r,Te.radians(t.startAngle),Te.radians(t.startAngle+t.ticksAngle),!1),e.stroke(),e.closePath(),e.restore(),e.rotate(We)),t.barProgress&&(e.beginPath(),e.arc(0,0,s,Te.radians(c),Te.radians(c+(Te.normalizedValue(t).normal-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle),!1),e.strokeStyle=t.colorBarProgress,e.lineWidth=n,e.stroke(),e.closePath())),e.restore()}function I(e){return e.options.animatedValue?e.options.value:e.value}function D(e,t,i,r,o,n,a,l){e.beginPath(),e.fillStyle=l?Te.linearGradient(e,a,l,o>n?o:n,n>o,o>n?i:r):a,t>0?Te.roundRect(e,i,r,o,n,t):e.rect(i,r,o,n),e.fill(),e.closePath()}function z(e,t,i,r,o,n,a,l,s){e.beginPath(),e.lineWidth=t,e.strokeStyle=s?Te.linearGradient(e,l,s,a,!0,o):l,i>0?Te.roundRect(e,r,o,n,a,i):e.rect(r,o,n,a),e.stroke(),e.closePath()}function L(e,t,i,r,o,n){var a=be.pixelRatio;e.save();var l=t.borderRadius*a,s=o-t.borderShadowWidth-t.borderOuterWidth*a,d=s-t.borderOuterWidth*a-t.borderMiddleWidth*a,c=d-t.borderMiddleWidth*a-t.borderInnerWidth*a,h=c-t.borderInnerWidth*a,u=n-t.borderShadowWidth-t.borderOuterWidth*a,f=u-t.borderOuterWidth*a-t.borderMiddleWidth*a,m=f-t.borderMiddleWidth*a-t.borderInnerWidth*a,v=m-t.borderInnerWidth*a,b=i-(d-s)/2,g=b-(c-d)/2,p=g-(h-c)/2,w=r-(f-u)/2,y=w-(m-f)/2,k=y-(v-m)/2,x=0,T=!1;return t.borderOuterWidth&&(T=Te.drawShadow(e,t,T),z(e,t.borderOuterWidth*a,l,i+t.borderOuterWidth*a/2-x,r+t.borderOuterWidth*a/2-x,s,u,t.colorBorderOuter,t.colorBorderOuterEnd),x+=.5*a),t.borderMiddleWidth&&(T=Te.drawShadow(e,t,T),z(e,t.borderMiddleWidth*a,l-=1+2*x,b+t.borderMiddleWidth*a/2-x,w+t.borderMiddleWidth*a/2-x,d+2*x,f+2*x,t.colorBorderMiddle,t.colorBorderMiddleEnd),x+=.5*a),t.borderInnerWidth&&(T=Te.drawShadow(e,t,T),z(e,t.borderInnerWidth*a,l-=1+2*x,g+t.borderInnerWidth*a/2-x,y+t.borderInnerWidth*a/2-x,c+2*x,m+2*x,t.colorBorderInner,t.colorBorderInnerEnd),x+=.5*a),Te.drawShadow(e,t,T),D(e,l,p,k,h+2*x,v+2*x,t.colorPlate,t.colorPlateEnd),e.restore(),[p,k,h,v]}function G(e,t,i,r,o,n){var a=be.pixelRatio,l=n>=o,s=l?.85*o:n,d=l?n:o;i=l?we(i+(o-s)/2):i;var c=!!t.title,h=!!t.units,u=!!t.valueBox,f=void 0,m=void 0,v=void 0;l?(m=we(.05*d),f=we(.075*d),v=we(.11*d),c&&(d-=f,r+=f),h&&(d-=m),u&&(d-=v)):(m=f=we(.15*s),c&&(s-=f,r+=f),h&&(s-=m));var b=2*t.barStrokeWidth,g=t.barBeginCircle?we(s*t.barBeginCircle/200-b/2):0,p=we(s*t.barWidth/100-b),w=we(d*t.barLength/100-b),y=we((d-w)/2),k=we(i+(l?s/2:y+g)),x=we(r+(l?d-y-g+b/2:s/2)),T=!l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s,S=l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s;return e.barDimensions={isVertical:l,width:s,length:d,barWidth:p,barLength:w,strokeWidth:b,barMargin:y,radius:g,pixelRatio:a,barOffset:null,titleMargin:c?f:0,unitsMargin:h?m:0,get ticksLength(){return this.barLength-this.barOffset-this.strokeWidth},X:i+T,Y:r+S,x0:k+T,y0:x+S,baseX:i,baseY:r,ticksPadding:t.ticksPadding/100},e.barDimensions}function F(e,t,i,r,o,n,a){var l=G(e,t,r,o,n,a),s=l.isVertical,d=l.width,c=l.barWidth,h=l.barLength,u=l.strokeWidth,f=l.barMargin,m=l.radius,v=l.x0,b=l.y0,g=l.X,p=l.Y,w=h;if(e.save(),e.beginPath(),t.barBeginCircle){var y=Te.radians(s?270:0),k=Math.asin(c/2/m),x=Math.cos(k),T=Math.sin(k),S=v+(s?m*T:m*x-u/2),W=s?b-m*x:b+m*T,O=ye(s?W-b:S-v);e.barDimensions.barOffset=we(O+m);var V=s?we(v-m*T):S,P=s?W:we(b-m*T);\"progress\"===i&&(h=e.barDimensions.barOffset+(h-e.barDimensions.barOffset)*(Te.normalizedValue(t).normal-t.minValue)/(t.maxValue-t.minValue));var M=we(S+h-e.barDimensions.barOffset+u/2),A=we(W-h+e.barDimensions.barOffset-u/2);e.arc(v,b,m,y+k,y-k),s?(e.moveTo(S,P),e.lineTo(S,A),e.lineTo(V,A),e.lineTo(V,P)):(e.moveTo(S,P),e.lineTo(M,P),e.lineTo(M,W),e.lineTo(S,W))}else{var B=we(s?g+(d-c)/2:g+f),j=we(s?p+h+f:p+(d-c)/2);\"progress\"===i&&(h*=(t.value-t.minValue)/(t.maxValue-t.minValue)),s?e.rect(B,j,c,-h):e.rect(B,j,h,c)}\"progress\"!==i&&t.barStrokeWidth&&(e.lineWidth=u,e.strokeStyle=t.colorBarStroke,e.stroke()),\"progress\"!==i&&t.colorBar?(e.fillStyle=t.colorBarEnd?Te.linearGradient(e,t.colorBar,t.colorBarEnd,h,s,s?p:g):t.colorBar,e.fill()):\"progress\"===i&&t.colorBarProgress&&(e.fillStyle=t.colorBarProgressEnd?Te.linearGradient(e,t.colorBarProgress,t.colorBarProgressEnd,w,s,s?p:g):t.colorBarProgress,e.fill()),e.closePath(),t.barBeginCircle&&(e.barDimensions.radius+=u),e.barDimensions.barWidth+=u,e.barDimensions.barLength+=u}function X(e,t,i,r,o,n){F(e,t,\"\",i,r,o,n)}function Y(e,t){return t.needleSide!==e||t.tickSide!==e||t.numberSide!==e}function U(e,t,i,r,o,n){t.barProgress&&F(e,t,\"progress\",i,r,o,n)}function q(e,t){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.X,c=i.Y,h=i.ticksLength,u=i.ticksPadding,f=o*(parseFloat(t.highlightsWidth)||0)/100;if(t.highlights&&f){var m=\"right\"!==t.tickSide,v=\"left\"!==t.tickSide,b=0,g=t.highlights.length,p=(o-a)/2,w=t.maxValue-t.minValue,y=we(r?d+p:d+s+l),k=f,x=r?c+n-s-l:c+p,T=we((t.ticksWidth/100+u)*o)+(f-t.ticksWidth/100*o),S=we(a+u*o);for(e.save();b<g;b++){var W=t.highlights[b],O=h*ye(t.minValue-W.from)/w,V=h*ye((W.to-W.from)/w);e.beginPath(),e.fillStyle=W.color,r?(m&&e.rect(y-T,x-O,k,-V),v&&e.rect(y+S,x-O,k,-V)):(m&&e.rect(y+O,x-T,V,k),v&&e.rect(y+O,x+S,V,k)),e.fill(),e.closePath()}}}function H(e,t,i,r,o){e.beginPath(),e.moveTo(t,i),e.lineTo(r,o),e.stroke(),e.closePath(),e.save()}function J(e,t,i,r,o,n,a,l,s){var d=e.barDimensions,c=d.isVertical,h=d.length,u=d.barWidth,f=d.barOffset,m=d.barMargin,v=d.pixelRatio,b=d.width,g=d.X,p=d.Y,w=d.ticksLength,y=d.ticksPadding,k=(b-u)/2,x=void 0,T=void 0,S=0,W=i.length,O=void 0,V=s*b,P=k-y*b,M=k+u+V+y*b,A=t instanceof Array?t:new Array(i.length).fill(t);e.lineWidth=l*v,e.save();for(var B=w/(o-r);S<W;S++)O=i[S],e.strokeStyle=A[S],c?(T=p+h-m-f+(r-O)*B,n&&(x=g+P,H(e,x,T,we(x-V),T)),a&&(x=g+M,H(e,x,T,we(x-V),T))):(x=g+m+f-(r-O)*B,n&&(T=p+P,H(e,x,T,x,we(T-V))),a&&(T=p+M,H(e,x,we(T),x,T-V)))}function $(e,t){var i=Te.prepareTicks(t),r=le(i,2),o=r[0],n=r[1],a=2,l=(t.maxValue-t.minValue)/(t.majorTicks.length-1),s=t.colorMajorTicks instanceof Array?t.colorMajorTicks:new Array(t.majorTicks.length).fill(t.colorStrokeTicks||t.colorMajorTicks);if(J(e,s,t.exactTicks?t.majorTicks:t.majorTicks.map(function(e,i){return t.minValue+l*i}),t.minValue,t.maxValue,o,n,a,t.ticksWidth/100),t.strokeTicks){var d=e.barDimensions,c=d.isVertical,h=d.length,u=d.width,f=d.barWidth,m=d.barMargin,v=d.barOffset,b=d.X,g=d.Y,p=d.ticksLength,w=d.pixelRatio,y=d.ticksPadding,k=(u-f)/2+f+y*u,x=(u-f)/2-y*u,T=void 0,S=void 0,W=void 0,O=void 0;e.strokeStyle=t.colorStrokeTicks||s[0],a*=w,c?(S=g+h-m-v+a/2,O=S-p-a,o&&(W=T=we(b+x),Z(e,T,S,W,O)),n&&(W=T=we(b+k),Z(e,T,S,W,O))):(T=b+m+v-a/2,W=T+p+a,o&&(O=S=we(g+x),Z(e,T,S,W,O)),n&&(O=S=we(g+k),Z(e,T,S,W,O)))}}function Z(e,t,i,r,o){e.beginPath(),e.moveTo(t,i),e.lineTo(r,o),e.stroke(),e.closePath()}function K(e,t){var i=Te.prepareTicks(t),r=le(i,2),o=r[0],n=r[1],a=[],l=t.minValue,s=Math.abs(t.minorTicks)||0,d=s?(t.maxValue-t.minValue)/(s*(t.majorTicks.length-1)):0;if(s)if(t.exactTicks)for(var c=xe.mod(t.majorTicks[0],s)||0;l<t.maxValue;l+=s)c+l<t.maxValue&&a.push(c+l);else for(;l<t.maxValue;l+=d)a.push(l);J(e,t.colorMinorTicks||t.colorStrokeTicks,a,t.minValue,t.maxValue,o,n,1,t.ticksWidthMinor/100)}function Q(e,t){var i=e.barDimensions,r=i.isVertical,o=i.length,n=i.width,a=i.barWidth,l=i.barMargin,s=i.barOffset,d=i.X,c=i.Y,h=i.ticksLength,u=i.ticksPadding,f=t.maxValue-t.minValue,m=f/(t.majorTicks.length-1),v=t.exactTicks?t.majorTicks:t.majorTicks.map(function(e,i){return t.minValue+m*i}),b=v.length,g=\"right\"!==t.numberSide,p=\"left\"!==t.numberSide,w=t.fontNumbersSize*n/200,y=0,k=(t.ticksWidth/100+2*u)*n,x=(n-a)/2-k,T=(n-a)/2+a+k,S=void 0,W=void 0,O=void 0,V=void 0,P=t.colorNumbers instanceof Array?t.colorNumbers:new Array(b).fill(t.colorNumbers),M=t.numbersMargin/100*n;for(e.font=Te.font(t,\"Numbers\",n/200),e.lineWidth=0,e.textAlign=\"center\";y<b;y++)e.fillStyle=P[y],V=t.majorTicks[y],O=t.exactTicks?h*((v[y]-t.minValue)/f):y*h/(b-1),r?(W=c+o-l-s-O+w/3,g&&(e.textAlign=\"right\",e.fillText(V,d+x-M,W)),p&&(e.textAlign=\"left\",e.fillText(V,d+T+M,W))):(e.measureText(V).width,S=d+l+s+O,g&&e.fillText(V,S,c+x-M),p&&e.fillText(V,S,c+T+w+M))}function ee(e,t){if(t.title){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.baseX,l=i.baseY,s=i.titleMargin,d=t.fontTitleSize*o/200,c=we(a+(r?o:n)/2),h=we(l+s/2-(r?d:d/2)-.025*(r?n:o));e.save(),e.textAlign=\"center\",e.fillStyle=t.colorTitle,e.font=Te.font(t,\"Title\",o/200),e.lineWidth=0,e.fillText(t.title,c,h,r?o:n)}}function te(e,t){if(t.units){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.baseX,l=i.baseY,s=i.unitsMargin,d=t.fontUnitsSize*o/200,c=we(a+(r?o:n)/2),h=we(l+(r?n:o)+s/2-d/2);e.save(),e.textAlign=\"center\",e.fillStyle=t.colorUnits,e.font=Te.font(t,\"Units\",o/200),e.lineWidth=0,e.fillText(t.units,c,h,r?o:n)}}function ie(e,t){if(t.needle){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.ticksLength,c=i.X,h=i.Y,u=i.ticksPadding,f=\"right\"!==t.needleSide,m=\"left\"!==t.needleSide,v=d*(Te.normalizedValue(t).indented-t.minValue)/(t.maxValue-t.minValue),b=(t.ticksWidth/100+u)*o,g=a/2+b,p=g*(t.needleEnd/100),w=void 0,y=void 0,k=void 0,x=void 0,T=\"arrow\"===t.needleType.toLowerCase()?ne:oe,S=(o-a)/2,W=g*(t.needleStart/100),O=S-b-W,V=S+a+b+W;e.save(),Te.drawNeedleShadow(e,t),r?(k=we(h+n-s-l-v),f&&(w=we(c+O),y=w+p,T(e,t,w,k,y,k,p)),m&&(w=we(c+V),y=w-p,T(e,t,w,k,y,k,p,!0))):(w=we(c+s+l+v),f&&(k=we(h+O),x=k+p,T(e,t,w,k,w,x,p)),m&&(k=we(h+V),x=k-p,T(e,t,w,k,w,x,p,!0))),e.restore()}}function re(e,t,i,r){return t.colorNeedleEnd?Te.linearGradient(e,r?t.colorNeedleEnd:t.colorNeedle,r?t.colorNeedle:t.colorNeedleEnd,i,!e.barDimensions.isVertical):t.colorNeedle}function oe(e,t,i,r,o,n,a,l){e.lineWidth=t.needleWidth,e.strokeStyle=re(e,t,a,l),e.beginPath(),e.moveTo(i,r),e.lineTo(o,n),e.stroke(),e.closePath()}function ne(e,t,i,r,o,n,a,l){var s=we(.4*a),d=a-s,c=i===o,h=t.needleWidth/2;e.fillStyle=re(e,t,a,l),e.beginPath(),c?(r>n&&(d*=-1),e.moveTo(i-h,r),e.lineTo(i+h,r),e.lineTo(i+h,r+d),e.lineTo(i,n),e.lineTo(i-h,r+d),e.lineTo(i-h,r)):(i>o&&(d*=-1),e.moveTo(i,r-h),e.lineTo(i,r+h),e.lineTo(i+d,r+h),e.lineTo(o,r),e.lineTo(i+d,r-h),e.lineTo(i,r-h)),e.fill(),e.closePath()}function ae(e,t,i,r,o,n,a){var l=(parseFloat(t.fontValueSize)||0)*n/200,s=(.11*a-l)/2;e.barDimensions.isVertical&&Te.drawValueBox(e,t,i,r+n/2,o+a-l-s,n)}var le=function(){function e(e,t){var i=[],r=!0,o=!1,n=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}}(),se=function e(t,i,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,r)}if(\"value\"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},de=function e(t,i,r,o){var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var a=Object.getPrototypeOf(t);null!==a&&e(a,i,r,o)}else if(\"value\"in n&&n.writable)n.value=r;else{var l=n.set;void 0!==l&&l.call(o,r)}return r},ce=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();Object.assign||Object.defineProperty(Object,\"assign\",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(void 0===e||null===e)throw new TypeError(\"Cannot convert first argument to object\");for(var i=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(void 0!==o&&null!==o)for(var n=Object.keys(Object(o)),a=0,l=n.length;a<l;a++){var s=n[a],d=Object.getOwnPropertyDescriptor(o,s);void 0!==d&&d.enumerable&&(i[s]=o[s])}}return i}}),Array.prototype.indexOf||Object.defineProperty(Array.prototype,\"indexOf\",{value:function(e,t){var i;if(null===this)throw new TypeError('\"this\" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var n=+t||0;if(Math.abs(n)===1/0&&(n=0),n>=o)return-1;for(i=Math.max(n>=0?n:o-Math.abs(n),0);i<o;){if(i in r&&r[i]===e)return i;i++}return-1}}),Array.prototype.fill||Object.defineProperty(Array.prototype,\"fill\",{value:function(e){if(null===this)throw new TypeError(\"this is null or not defined\");for(var t=Object(this),i=t.length>>>0,r=arguments[1],o=r>>0,n=o<0?Math.max(i+o,0):Math.min(o,i),a=arguments[2],l=void 0===a?i:a>>0,s=l<0?Math.max(i+l,0):Math.min(l,i);n<s;)t[n]=e,n++;return t}}),\"undefined\"==typeof window&&(window=\"undefined\"==typeof global?{}:global);var he=function(){function e(){o(this,e),this._events={},this.addListener=this.on,this.removeListener=this.off}return ce(e,[{key:\"emit\",value:function(e){if(this._events[e]){for(var t=0,i=this._events[e].length,r=arguments.length,o=Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];for(;t<i;t++)this._events[e][t]&&this._events[e][t].apply(this,o)}}},{key:\"once\",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];for(var o=0,n=i.length,a=this;o<n;o++)!function(){var t=i[o],r=function i(){a.off(e,i),t.apply(a,arguments)};i[o]=r}();this.on.apply(this,[e].concat(i))}},{key:\"on\",value:function(e){this._events[e]||(this._events[e]=[]);for(var t=0,i=arguments.length<=1?0:arguments.length-1;t<i;t++)this._events[e].push(arguments.length<=t+1?void 0:arguments[t+1])}},{key:\"off\",value:function(e){if(this._events[e])for(var t=0,i=arguments.length<=1?0:arguments.length-1;t<i;t++)for(var r=arguments.length<=t+1?void 0:arguments[t+1],o=void 0;~(o=this._events[e].indexOf(r));)this._events[e].splice(o,1)}},{key:\"removeAllListeners\",value:function(e){delete this._events[e]}},{key:\"listeners\",get:function(){return this._events}}]),e}(),ue=n(\"requestAnimationFrame\")||function(e){return setTimeout(function(){return e((new Date).getTime())},1e3/60)},fe={linear:function(e){return e},quad:function(e){return Math.pow(e,2)},dequad:function(e){return 1-fe.quad(1-e)},quint:function(e){return Math.pow(e,5)},dequint:function(e){return 1-Math.pow(1-e,5)},cycle:function(e){return 1-Math.sin(Math.acos(e))},decycle:function(e){return Math.sin(Math.acos(1-e))},bounce:function(e){return 1-fe.debounce(1-e)},debounce:function(e){for(var t=0,i=1;1;t+=i,i/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(i,2)},elastic:function(e){return 1-fe.delastic(1-e)},delastic:function(e){return Math.pow(2,10*(e-1))*Math.cos(20*Math.PI*1.5/3*e)}},me=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"linear\",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(o(this,e),this.duration=i,this.rule=t,this.draw=r,this.end=n,\"function\"!=typeof this.draw)throw new TypeError(\"Invalid animation draw callback:\",r);if(\"function\"!=typeof this.end)throw new TypeError(\"Invalid animation end callback:\",n)}return ce(e,[{key:\"animate\",value:function(e,t){var i=this;this.frame&&this.cancel();var r=window.performance&&window.performance.now?window.performance.now():n(\"animationStartTime\")||Date.now();e=e||this.draw,t=t||this.end,this.draw=e,this.end=t,this.frame=ue(function(o){return a(o,e,r,fe[i.rule]||i.rule,i.duration,t,i)})}},{key:\"cancel\",value:function(){if(this.frame){(n(\"cancelAnimationFrame\")||function(e){})(this.frame),this.frame=null}}},{key:\"destroy\",value:function(){this.cancel(),this.draw=null,this.end=null}}]),e}();me.rules=fe;var ve=function(){function t(i,r,n){o(this,t),this.options=i,this.element=r.toLowerCase(),this.type=t.toDashed(n),this.Type=e[n],this.mutationsObserved=!1,this.isObservable=!!window.MutationObserver,window.GAUGES_NO_AUTO_INIT||t.domReady(this.traverse.bind(this))}return ce(t,[{key:\"isValidNode\",value:function(e){return!(!e.tagName||e.tagName.toLowerCase()!==this.element||e.getAttribute(\"data-type\")!==this.type)}},{key:\"traverse\",value:function(){for(var e=document.getElementsByTagName(this.element),t=0,i=e.length;t<i;t++)this.process(e[t]);this.isObservable&&!this.mutationsObserved&&(new MutationObserver(this.observe.bind(this)).observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.mutationsObserved=!0)}},{key:\"observe\",value:function(e){for(var t=0,i=e.length;t<i;t++){var r=e[t];if(\"attributes\"===r.type&&\"data-type\"===r.attributeName&&this.isValidNode(r.target)&&r.oldValue!==this.type)setTimeout(this.process.bind(this,r.target));else if(r.addedNodes&&r.addedNodes.length)for(var o=0,n=r.addedNodes.length;o<n;o++)setTimeout(this.process.bind(this,r.addedNodes[o]))}}},{key:\"process\",value:function(e){var i=this;if(!this.isValidNode(e))return null;var r=void 0,o=JSON.parse(JSON.stringify(this.options)),n=null;for(r in o)if(o.hasOwnProperty(r)){var a=t.toAttributeName(r),l=t.parse(e.getAttribute(a));null!==l&&void 0!==l&&(o[r]=l)}return o.renderTo=e,n=new this.Type(o),n.draw&&n.draw(),this.isObservable?(n.observer=new MutationObserver(function(r){r.forEach(function(r){if(\"attributes\"===r.type){var o=r.attributeName.toLowerCase(),a=e.getAttribute(o).toLowerCase();if(\"data-type\"===o&&a&&a!==i.type)n.observer.disconnect(),delete n.observer,n.destroy&&n.destroy();else if(\"data-\"===o.substr(0,5)){var l=o.substr(5).split(\"-\").map(function(e,t){return t?e.charAt(0).toUpperCase()+e.substr(1):e}).join(\"\"),s={};s[l]=t.parse(e.getAttribute(r.attributeName)),\"value\"===l?n&&(n.value=s[l]):n.update&&n.update(s)}}})}),n.observer.observe(e,{attributes:!0}),n):n}}],[{key:\"parse\",value:function(e){if(\"true\"===e)return!0;if(\"false\"===e)return!1;if(\"undefined\"!==e){if(\"null\"===e)return null;if(/^[-+#.\\w\\d\\s]+(?:,[-+#.\\w\\d\\s]*)+$/.test(e))return e.split(\",\");try{return JSON.parse(e)}catch(e){}return e}}},{key:\"toDashed\",value:function(e){for(var t=e.split(/(?=[A-Z])/),i=1,r=t.length,o=t[0].toLowerCase();i<r;i++)o+=\"-\"+t[i].toLowerCase();return o}},{key:\"toCamelCase\",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e.split(/-/),r=0,o=i.length,n=\"\";r<o;r++)n+=r||t?i[r][0].toUpperCase()+i[r].substr(1).toLowerCase():i[r].toLowerCase();return n}},{key:\"toAttributeName\",value:function(e){return\"data-\"+t.toDashed(e)}},{key:\"domReady\",value:function(e){if(/comp|inter|loaded/.test((window.document||{}).readyState+\"\"))return e();window.addEventListener?window.addEventListener(\"DOMContentLoaded\",e,!1):window.attachEvent&&window.attachEvent(\"onload\",e)}}]),t}(),be=function(){function e(t,i,r){o(this,e),e.collection.push(this),this.width=i||0,this.height=r||0,this.element=t,this.init()}return ce(e,[{key:\"init\",value:function(){var t=e.pixelRatio;this.element.width=this.width*t,this.element.height=this.height*t,this.element.style.width=this.width+\"px\",this.element.style.height=this.height+\"px\",this.elementClone=this.element.cloneNode(!0),this.context=this.element.getContext(\"2d\"),this.contextClone=this.elementClone.getContext(\"2d\"),this.drawWidth=this.element.width,this.drawHeight=this.element.height,this.drawX=this.drawWidth/2,this.drawY=this.drawHeight/2,this.minSide=this.drawX<this.drawY?this.drawX:this.drawY,this.elementClone.initialized=!1,this.contextClone.translate(this.drawX,this.drawY),this.contextClone.save(),this.context.translate(this.drawX,this.drawY),this.context.save(),this.context.max=this.contextClone.max=this.minSide,this.context.maxRadius=this.contextClone.maxRadius=null}},{key:\"destroy\",value:function(){var t=e.collection.indexOf(this);~t&&e.collection.splice(t,1),this.context.clearRect(-this.drawX,-this.drawY,this.drawWidth,this.drawHeight),this.context.max=null,delete this.context.max,this.context.maxRadius=null,delete this.context.maxRadius,this.context=null,this.contextClone=null,this.elementClone=null,this.element=null,this.onRedraw=null}},{key:\"commit\",value:function(){var t=e.pixelRatio;return 1!==t&&(this.contextClone.scale(t,t),this.contextClone.save()),this}},{key:\"redraw\",value:function(){return this.init(),this.onRedraw&&this.onRedraw(),this}}],[{key:\"redraw\",value:function(){for(var t=0,i=e.collection.length;t<i;t++)e.collection[t].redraw()}},{key:\"pixelRatio\",get:function(){return window.devicePixelRatio||1}}]),e}();be.collection=[],window.matchMedia&&window.matchMedia(\"screen and (min-resolution: 2dppx)\").addListener(be.redraw);var ge={renderTo:null,width:0,height:0,minValue:0,maxValue:100,value:0,units:!1,exactTicks:!1,majorTicks:[0,20,40,60,80,100],minorTicks:10,strokeTicks:!0,animatedValue:!1,animateOnInit:!1,title:!1,borders:!0,numbersMargin:1,listeners:null,valueInt:3,valueDec:2,majorTicksInt:1,majorTicksDec:0,animation:!0,animationDuration:500,animationRule:\"cycle\",colorPlate:\"#fff\",colorPlateEnd:\"\",colorMajorTicks:\"#444\",\ncolorMinorTicks:\"#666\",colorStrokeTicks:\"\",colorTitle:\"#888\",colorUnits:\"#888\",colorNumbers:\"#444\",colorNeedle:\"rgba(240,128,128,1)\",colorNeedleEnd:\"rgba(255,160,122,.9)\",colorValueText:\"#444\",colorValueTextShadow:\"rgba(0,0,0,0.3)\",colorBorderShadow:\"rgba(0,0,0,0.5)\",colorBorderOuter:\"#ddd\",colorBorderOuterEnd:\"#aaa\",colorBorderMiddle:\"#eee\",colorBorderMiddleEnd:\"#f0f0f0\",colorBorderInner:\"#fafafa\",colorBorderInnerEnd:\"#ccc\",colorValueBoxRect:\"#888\",colorValueBoxRectEnd:\"#666\",colorValueBoxBackground:\"#babab2\",colorValueBoxShadow:\"rgba(0,0,0,1)\",colorNeedleShadowUp:\"rgba(2,255,255,0.2)\",colorNeedleShadowDown:\"rgba(188,143,143,0.45)\",colorBarStroke:\"#222\",colorBar:\"#ccc\",colorBarProgress:\"#888\",colorBarShadow:\"#000\",fontNumbers:\"Arial\",fontTitle:\"Arial\",fontUnits:\"Arial\",fontValue:\"Arial\",fontNumbersSize:20,fontTitleSize:24,fontUnitsSize:22,fontValueSize:26,fontNumbersStyle:\"normal\",fontTitleStyle:\"normal\",fontUnitsStyle:\"normal\",fontValueStyle:\"normal\",fontNumbersWeight:\"normal\",fontTitleWeight:\"normal\",fontUnitsWeight:\"normal\",fontValueWeight:\"normal\",needle:!0,needleShadow:!0,needleType:\"arrow\",needleStart:5,needleEnd:85,needleWidth:4,borderOuterWidth:3,borderMiddleWidth:3,borderInnerWidth:3,borderShadowWidth:3,valueBox:!0,valueBoxStroke:5,valueBoxWidth:0,valueText:\"\",valueTextShadow:!0,valueBoxBorderRadius:2.5,highlights:[{from:20,to:60,color:\"#eee\"},{from:60,to:80,color:\"#ccc\"},{from:80,to:100,color:\"#999\"}],highlightsWidth:15,barWidth:20,barStrokeWidth:0,barProgress:!0,barShadow:0};l.prototype=Object.create(Array.prototype),l.prototype.constructor=l,l.prototype.get=function(e){if(\"string\"==typeof e)for(var t=0,i=this.length;t<i;t++){var r=this[t].options.renderTo.tagName?this[t].options.renderTo:document.getElementById(this[t].options.renderTo||\"\");if(r.getAttribute(\"id\")===e)return this[t]}else if(\"number\"==typeof e)return this[e];return null};var pe=\"2.1.5\",we=Math.round,ye=Math.abs,ke=new l;ke.version=pe;var xe=function(t){function n(t){o(this,n);var r=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),a=r.constructor.name;if(\"BaseGauge\"===a)throw new TypeError(\"Attempt to instantiate abstract class!\");if(ke.push(r),t.listeners&&Object.keys(t.listeners).forEach(function(e){(t.listeners[e]instanceof Array?t.listeners[e]:[t.listeners[e]]).forEach(function(t){r.on(e,t)})}),r.version=pe,r.type=e[a]||n,r.initialized=!1,t.minValue=parseFloat(t.minValue),t.maxValue=parseFloat(t.maxValue),t.value=parseFloat(t.value)||0,t.borders||(t.borderInnerWidth=t.borderMiddleWidth=t.borderOuterWidth=0),!t.renderTo)throw TypeError(\"Canvas element was not specified when creating the Gauge object!\");var l=t.renderTo.tagName?t.renderTo:document.getElementById(t.renderTo);if(!(l instanceof HTMLCanvasElement))throw TypeError(\"Given gauge canvas element is invalid!\");return t.width=parseFloat(t.width)||0,t.height=parseFloat(t.height)||0,t.width&&t.height||(t.width||(t.width=l.parentNode?l.parentNode.offsetWidth:l.offsetWidth),t.height||(t.height=l.parentNode?l.parentNode.offsetHeight:l.offsetHeight)),r.options=t||{},r.options.animateOnInit&&(r._value=r.options.value,r.options.value=r.options.minValue),r.canvas=new be(l,t.width,t.height),r.canvas.onRedraw=r.draw.bind(r),r.animation=new me(t.animationRule,t.animationDuration),r}return r(n,t),ce(n,[{key:\"update\",value:function(e){return Object.assign(this.options,this.type.configure(e||{})),this.canvas.width=this.options.width,this.canvas.height=this.options.height,this.animation.rule=this.options.animationRule,this.animation.duration=this.options.animationDuration,this.canvas.redraw(),this}},{key:\"destroy\",value:function(){var e=ke.indexOf(this);~e&&ke.splice(e,1),this.canvas.destroy(),this.canvas=null,this.animation.destroy(),this.animation=null,this.emit(\"destroy\")}},{key:\"draw\",value:function(){return this.options.animateOnInit&&!this.initialized&&(this.value=this._value,this.initialized=!0,this.emit(\"init\")),this.emit(\"render\"),this}},{key:\"value\",set:function(e){var t=this;e=n.ensureValue(e,this.options.minValue);var i=this.options.value;if(e!==i)if(this.options.animation){if(this.animation.frame&&(this.options.value=this._value,this._value===e))return this.animation.cancel(),void delete this._value;void 0===this._value&&(this._value=e),this.emit(\"animationStart\"),this.animation.animate(function(r){var o=i+(e-i)*r;t.options.animatedValue&&t.emit(\"value\",o,t.value),t.options.value=o,t.draw(),t.emit(\"animate\",r,t.options.value)},function(){void 0!==t._value&&(t.emit(\"value\",t._value,t.value),t.options.value=t._value,delete t._value),t.draw(),t.emit(\"animationEnd\")})}else this.emit(\"value\",e,this.value),this.options.value=e,this.draw()},get:function(){return void 0===this._value?this.options.value:this._value}}],[{key:\"configure\",value:function(e){return e}},{key:\"initialize\",value:function(e,t){return new ve(t,\"canvas\",e)}},{key:\"fromElement\",value:function(e){var t=ve.toCamelCase(e.getAttribute(\"data-type\")),i=e.attributes,r=0,o=i.length,n={};if(t){for(/Gauge$/.test(t)||(t+=\"Gauge\");r<o;r++)n[ve.toCamelCase(i[r].name.replace(/^data-/,\"\"),!1)]=ve.parse(i[r].value);new ve(n,e.tagName,t).process(e)}}},{key:\"ensureValue\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e=parseFloat(e),!isNaN(e)&&isFinite(e)||(e=parseFloat(t)||0),e}},{key:\"mod\",value:function(e,t){return(e%t+t)%t}},{key:\"version\",get:function(){return pe}}]),n}(he);void 0!==e&&(e.BaseGauge=xe,e.gauges=(window.document||{}).gauges=ke);var Te={roundRect:c,padValue:h,formatMajorTickNumber:u,radians:f,radialPoint:m,linearGradient:v,drawNeedleShadow:g,drawValueBox:k,verifyError:s,prepareTicks:d,drawShadow:b,font:p,normalizedValue:x},Se=Math.PI,We=Se/2,Oe=Object.assign({},ge,{ticksAngle:270,startAngle:45,colorNeedleCircleOuter:\"#f0f0f0\",colorNeedleCircleOuterEnd:\"#ccc\",colorNeedleCircleInner:\"#e8e8e8\",colorNeedleCircleInnerEnd:\"#f5f5f5\",needleCircleSize:10,needleCircleInner:!0,needleCircleOuter:!0,needleStart:20,animationTarget:\"needle\",useMinPath:!1,barWidth:0}),Ve=function(e){function t(e){return o(this,t),e=Object.assign({},Oe,e||{}),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.configure(e)))}return r(t,e),ce(t,[{key:\"draw\",value:function(){try{var e=this.canvas,i=[-e.drawX,-e.drawY,e.drawWidth,e.drawHeight],r=i[0],o=i[1],n=i[2],a=i[3],l=this.options;if(\"needle\"===l.animationTarget){if(!e.elementClone.initialized){var s=e.contextClone;s.clearRect(r,o,n,a),s.save(),this.emit(\"beforePlate\"),W(s,l),this.emit(\"beforeHighlights\"),O(s,l),this.emit(\"beforeMinorTicks\"),V(s,l),this.emit(\"beforeMajorTicks\"),M(s,l),this.emit(\"beforeNumbers\"),j(s,l),this.emit(\"beforeTitle\"),C(s,l),this.emit(\"beforeUnits\"),N(s,l),e.elementClone.initialized=!0}this.canvas.commit(),e.context.clearRect(r,o,n,a),e.context.save(),e.context.drawImage(e.elementClone,r,o,n,a),e.context.save(),this.emit(\"beforeProgressBar\"),R(e.context,l),this.emit(\"beforeValueBox\"),_(e.context,l,I(this)),this.emit(\"beforeNeedle\"),E(e.context,l)}else{var d=-Te.radians((l.value-l.minValue)/(l.maxValue-l.minValue)*l.ticksAngle);if(e.context.clearRect(r,o,n,a),e.context.save(),this.emit(\"beforePlate\"),W(e.context,l),e.context.rotate(d),this.emit(\"beforeHighlights\"),O(e.context,l),this.emit(\"beforeMinorTicks\"),V(e.context,l),this.emit(\"beforeMajorTicks\"),M(e.context,l),this.emit(\"beforeNumbers\"),j(e.context,l),this.emit(\"beforeProgressBar\"),R(e.context,l),e.context.rotate(-d),e.context.save(),!e.elementClone.initialized){var c=e.contextClone;c.clearRect(r,o,n,a),c.save(),this.emit(\"beforeTitle\"),C(c,l),this.emit(\"beforeUnits\"),N(c,l),this.emit(\"beforeNeedle\"),E(c,l),e.elementClone.initialized=!0}e.context.drawImage(e.elementClone,r,o,n,a)}this.emit(\"beforeValueBox\"),_(e.context,l,I(this)),se(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),\"draw\",this).call(this)}catch(e){Te.verifyError(e)}return this}},{key:\"value\",set:function(e){e=xe.ensureValue(e,this.options.minValue),this.options.animation&&360===this.options.ticksAngle&&this.options.useMinPath&&(this._value=e,e=this.options.value+((e-this.options.value)%360+540)%360-180),de(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),\"value\",e,this)},get:function(){return se(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),\"value\",this)}}],[{key:\"configure\",value:function(e){return e.barWidth>50&&(e.barWidth=50),isNaN(e.startAngle)&&(e.startAngle=45),isNaN(e.ticksAngle)&&(e.ticksAngle=270),e.ticksAngle>360&&(e.ticksAngle=360),e.ticksAngle<0&&(e.ticksAngle=0),e.startAngle<0&&(e.startAngle=0),e.startAngle>360&&(e.startAngle=360),e}}]),t}(xe);void 0!==e&&(e.RadialGauge=Ve),xe.initialize(\"RadialGauge\",Oe);var Pe=Object.assign({},ge,{borderRadius:0,barBeginCircle:30,colorBarEnd:\"\",colorBarProgressEnd:\"\",needleWidth:6,tickSide:\"both\",needleSide:\"both\",numberSide:\"both\",ticksWidth:10,ticksWidthMinor:5,ticksPadding:5,barLength:85,fontTitleSize:26,highlightsWidth:10}),Me=function(e){function n(e){return o(this,n),e=Object.assign({},Pe,e||{}),i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n.configure(e)))}return r(n,e),ce(n,[{key:\"draw\",value:function(){try{var e=this.canvas,i=[-e.drawX,-e.drawY,e.drawWidth,e.drawHeight],r=i[0],o=i[1],a=i[2],l=i[3],s=this.options;if(!e.elementClone.initialized){var d=e.contextClone;d.clearRect(r,o,a,l),d.save(),this.emit(\"beforePlate\"),this.drawBox=L(d,s,r,o,a,l),this.emit(\"beforeBar\"),X.apply(void 0,[d,s].concat(t(this.drawBox))),e.context.barDimensions=d.barDimensions,this.emit(\"beforeHighlights\"),q(d,s),this.emit(\"beforeMinorTicks\"),K(d,s),this.emit(\"beforeMajorTicks\"),$(d,s),this.emit(\"beforeNumbers\"),Q(d,s),this.emit(\"beforeTitle\"),ee(d,s),this.emit(\"beforeUnits\"),te(d,s),e.elementClone.initialized=!0}this.canvas.commit(),e.context.clearRect(r,o,a,l),e.context.save(),e.context.drawImage(e.elementClone,r,o,a,l),e.context.save(),this.emit(\"beforeProgressBar\"),U.apply(void 0,[e.context,s].concat(t(this.drawBox))),this.emit(\"beforeNeedle\"),ie(e.context,s),this.emit(\"beforeValueBox\"),ae.apply(void 0,[e.context,s,s.animatedValue?this.options.value:this.value].concat(t(this.drawBox))),se(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),\"draw\",this).call(this)}catch(e){Te.verifyError(e)}return this}}],[{key:\"configure\",value:function(e){return e.barStrokeWidth>=e.barWidth&&(e.barStrokeWidth=we(e.barWidth/2)),e.hasLeft=Y(\"right\",e),e.hasRight=Y(\"left\",e),e.value>e.maxValue&&(e.value=e.maxValue),e.value<e.minValue&&(e.value=e.minValue),xe.configure(e)}}]),n}(xe);void 0!==e&&(e.LinearGauge=Me),xe.initialize(\"LinearGauge\",Pe),\"undefined\"!=typeof module&&Object.assign(e,{Collection:l,GenericOptions:ge,Animation:me,BaseGauge:xe,drawings:Te,SmartCanvas:be,DomObserver:ve,vendorize:n})}(\"undefined\"!=typeof module?module.exports:window);"

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "./src/canvas-gauge-card/canvas-gauge-card.js":
/*!****************************************************!*\
  !*** ./src/canvas-gauge-card/canvas-gauge-card.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var canvas_gauges__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-gauges */ "./node_modules/canvas-gauges/gauge.min.js");
/* harmony import */ var canvas_gauges__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canvas_gauges__WEBPACK_IMPORTED_MODULE_0__);
/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Tomas Hellström (https://github.com/helto4real/lovelace-custom-cards)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

  /**
  * DO NOT USE THIS FILE IF USING SINGLE CARDS, USE THE VERSION UNDER 'dist' CATALOG!!!!
  */



/**
 * `canvas-gauge-card`
 * Lovelace element for displaying the canvas gauges at 
 * https://canvas-gauges.com/
 * 
 * If you like the gauges please support the original gauge devs.
 * 
 * Usage och card:
 *  - Copy this file 'canvas-guage-card.js' and 'gauge.min.js' to same folder in hass. 
 *  - Set the ui-lovelace.yaml, Include the canvas-guage-card.js and cofigure at minimum:
    * cards:
        - type: custom:canvas-gauge-card
            entity: sensor.temp_outside
            gauge:
            type: "linear-gauge"
            width: 120
            height: 400
    - Use the javascript properties withouth the ',' to configure properties under 'gauge'
    - Use name property to show the name att bottom of the card
    - See http://sss for docs
 */
class CanvasGaugeCard extends HTMLElement {
    /**
     * Renders the card 
     */
    _render() {
        // Create the container element 
        const elemContainer = document.createElement('div');
        elemContainer.id = 'container';
        elemContainer.width = this.config.card_width ? this.config.card_width : this.config.gauge['width'];
        elemContainer.height = this.config.card_height ? this.config.card_height : this.config.gauge['height'];

        const shadowHeight = (this.config.shadow_height) ? this.config.shadow_height : '10%';
        // The styles
        const style = `
            <style>
                #container {
                    width: ${elemContainer.width}px;
                    height: ${elemContainer.height}px;        
                    position: relative;
                    top: 0px;
                    overflow: hidden;
                    text-align: center;
                }
                #innercontainer {
                    position: relative;
                    top: ${this.config.card_top ? this.config.card_top : 0}
                    left: ${this.config.card_left ? this.config.card_left : 0}
                }
                .shadow {
                    width: 100%;
                    height: ${shadowHeight};
                    left: 0px;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);;
                    position: absolute;
                    }
                #state{
                    position: relative;
                    float: left;
                    top: 50%;
                    left: 50%;
                    color: white;
                    font-size: 100%;
                    transform: translate(-50%, -50%);
                }
            </style>
           
        `;
        this.shadowRoot.innerHTML = style;

        // We need an inner container so we can hide part of the gauge cause it
        // renders full circle even if only showing half gauge. 
        const elemInnerContainer = document.createElement('div');
        elemInnerContainer.id = 'innercontainer';

        // canvas element that the gauge will be drawn by the canvas gauge Lib
        const elemCanvas = document.createElement('canvas');
        elemCanvas.width = this.config.gauge['width'];
        elemCanvas.height = this.config.gauge['height'];

        // Have to do this cause some bug in library gauge.min.js dont display the gauge
        // keep this code for a while incase I need to activate it again...
        //var ctx = elemCanvas.getContext('2d');
        //ctx.fillStyle = 'black';
        //ctx.fillRect(0, 0, elemCanvas.width, elemCanvas.height);
        var gauge;
        if (this.config.gauge.type == 'linear-gauge') {
            gauge = new LinearGauge({
                renderTo: elemCanvas,
                height: elemCanvas.height,
                width: elemCanvas.width,
                value: 0
            });
        }
        else if (this.config.gauge.type == 'radial-gauge') {
            gauge = new RadialGauge({
                renderTo: elemCanvas,
                height: elemCanvas.height,
                width: elemCanvas.width,
                value: 0
            });
        }


        for (const key in this.config.gauge) {
            if (this.config.gauge.hasOwnProperty(key)) {
                gauge.options[key] = this.config.gauge[key];
            }
        }

        elemInnerContainer.appendChild(elemCanvas);

        elemContainer.appendChild(elemInnerContainer);
        if (this.config.name) {
            var elemShadow = document.createElement('div');
            elemShadow.className = 'shadow';

            var elemState = document.createElement('div');
            elemState.id = 'state';
            // Automatic font resize or set one
            var font_size = this.config.font_size ? this.config.font_size : `calc(${this.config.gauge['height']}px/22)`;
            elemState.style.fontSize = font_size;
            elemState.innerText = this.config.name;

            elemShadow.appendChild(elemState);
            elemContainer.appendChild(elemShadow);
        }

        elemContainer.onclick = this._click.bind(this);
        this.shadowRoot.appendChild(elemContainer);

        this._gauge = gauge;
    }

    /**
     * onclick event for card, gets the enity info
     */
    _click() {
        this._fire('hass-more-info', { entityId: this.config.entity });
    }

    /**
     * Fires the event that opens the enity info
     */
    _fire(type, detail) {

        const event = new Event(type, {
            bubbles: true,
            cancelable: false,
            composed: true
        });
        event.detail = detail || {};
        this.shadowRoot.dispatchEvent(event);
        return event;
    }

    set hass(hass) {
        const entityId = this.config.entity;
        this._state = hass.states[entityId].state;
        this._gauge['value'] = this._state;
        this._gauge.draw(); // Have to call to redraw canvas
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error('You need to define an entity');
        }
        if (!config.gauge) {
            throw new Error('You need to define gauge and default gauge values');
        }
        if (!config.gauge.height) {
            throw new Error('You need to define gauge height');
        }
        if (!config.gauge.width) {
            throw new Error('You need to define gauge width');
        }
        if (!config.gauge.type) {
            throw new Error('You need to define gauge type');
        }
        if (!(config.gauge.type == 'linear-gauge' || config.gauge.type == 'radial-gauge')) {
            throw new Error('You need to define gauge type "linear-gauge" or "radial-gauge"');
        }
        this.config = config;

        // Fix initbug from the canvas lib that shows borders even if set to false
        if (typeof config.gauge.borders != typeof undefined && config.gauge.borders === false) {
            config.gauge['borderShadowWidth'] = 0;
            config.gauge['borderOuterWidth'] = 0;
            config.gauge['borderMiddleWidth'] = 0;
            config.gauge['borderInnerWidth'] = 0;
        }
        this._render();
    }

    getCardSize() {
        return 2;
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // ** START FOR TEST
        if (typeof process != typeof undefined && "development" == 'production') {return;} 
        this.__initTests();
        // ** END FOR TEST
    }

    // ** START FOR TEST

    /** 
     * Init testdata
     * I use this in my development environment to make a very simple mock of config/hass objects 
    */
    __initTests() {
        var test_config =
        {
            entity: 'sensor.temp',
            name: 'Test',
            card_height: 190,
            card_width: undefined,
            card_top: undefined,
            card_left: undefined,
            gauge: {}
        };

        test_config.gauge['type'] = 'radial-gauge';
        test_config.gauge['title'] = 'Speed';
        test_config.gauge['width'] = 300;
        test_config.gauge['height'] = 300;
        test_config.gauge['units'] = 'Km/h';
        test_config.gauge['minValue'] = 0;
        test_config.gauge['maxValue'] = 220;
        test_config.gauge['startAngle'] = 90;
        test_config.gauge['ticksAngle'] = 180;
        test_config.gauge['valueBox'] = false;
        test_config.gauge['majorTicks'] = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220];
        test_config.gauge['minorTicks'] = 2;
        test_config.gauge['strokeTicks'] = true;
        test_config.gauge['highlights'] = [
            {
                "from": 160,
                "to": 220,
                "color": "rgba(200, 50, 50, .75)"
            }
        ];
        test_config.gauge['colorPlate'] = '#fff';
        test_config.gauge['borders'] = false;
        test_config.gauge['needleType'] = 'arrow';
        test_config.gauge['needleWidth'] = 2;
        test_config.gauge['needleCircleSize'] = 7;
        test_config.gauge['needleCircleOuter'] = true;
        test_config.gauge['needleCircleInner'] = false;
        test_config.gauge['animationDuration'] = 1500;
        test_config.gauge['animationRule'] = 'linear';
        test_config.gauge['value'] = '50';

        var test_hass = { states: [] };
        test_hass.states[test_config.entity] = { state: "15" };
        this.setConfig(test_config);

        this.hass = test_hass;
    }
    // ** END FOR TEST
}

window.customElements.define('canvas-gauge-card', CanvasGaugeCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/media-player-card/media-player-card.js":
/*!****************************************************!*\
  !*** ./src/media-player-card/media-player-card.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js");
/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Tomas Hellström  (https://github.com/helto4real/lovelace-custom-cards)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

 /**
  * DO NOT USE THIS FILE IF USING SINGLE CARDS, USE THE VERSION UNDER 'dist' CATALOG!!!!
  */



/**
 * `picture-status-card`
 * Lovelace element for displaying status on a picture bottom centered on a shadow
 */
class MediaPlayerCard extends _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  
  _render({ hass, config }) {
    return _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <style>
            #container {
                width: calc(561px/1.3);
                height: calc(406px/1.3);;
                position: relative;
                top: 0px;
                overflow: hidden;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                transform: none;
            }

            #movie-image {
                position: relative;
                width: 93.6%;
                height: 72%;
                left: 3.2%;
                top: 4.4%;
                background-size: cover;
                background-repeat: no-repeat;
                background-color: darkgray;
                transform: none;
            }

            #media-info {
                width: 99.95%;
                height: 30%;
                left:0;
                top: 70%;
                background: rgba(0, 0, 0, 0.5);
                position: absolute;
                transform: none;
            }

            #entity {
                position: relative;
                width: 100%;
                top: 8%;
                left: 2.3%;
                color: white;
                text-align: left;
                font-size: 85%;
                transform: none;
            }

            #media-title {
                position: relative;
                width: 100%;
                top: 18%;
                left: 2.3%;
                text-align: left;
                color: white;
                font-weight: bold;
                font-size: 100%;
                transform: none;
            }

            #app-name {
                position: relative;
                width: 100%;
                text-align: left;
                top: 12%;
                left: 2.3%;
                color: white;
                font-size: 85%;
                transform: none;
            }
        </style>
        <div id="container" on-click="${() => this._click()}">
            <div id="movie-image">
                <div id="media-info">
                    <div id="entity"></div>
                    <div id="media-title"></div>
                    <div id="app-name">HBO Nordic</div>
                </div>
            </div>
        </div>
        
        `;
  }

  /*
    Cant set background image in render method for the style, some bug prohibit that.
    So we need to set the background image after the page has rendered
  */
  _didRender(_props, _changedProps, _prevProps) {
    

    const containerElement = this._root.querySelector('#container');
    const movieImageElement = this._root.querySelector('#movie-image');
    const entityElement = this._root.querySelector('#entity');
    const mediaTitleElement = this._root.querySelector('#media-title');
    const appNameElement = this._root.querySelector('#app-name');

    
    containerElement.style.backgroundImage = `url(${this._config.image_folder}/tv.png)`;

    const dev_state = this._hass.states[this._config.entity];
    const dev_attr = dev_state.attributes;

    if (!dev_attr.entity_picture){
      if (dev_attr.app_name){
        if (dev_attr.app_name.toLowerCase().indexOf('netflix')!==-1) {
          movieImageElement.style.backgroundImage = `url(${this._config.image_folder}/netflix-logo.png)`;
        }
      }
    }
    else{
      movieImageElement.style.backgroundImage = `url(${dev_attr.entity_picture})`;
    }
 
    entityElement.innerText = dev_attr.friendly_name? dev_attr.friendly_name: this._config.entity;
    mediaTitleElement.innerText = dev_attr.media_title? dev_attr.media_title: dev_state.state;
    appNameElement.innerText = dev_attr.app_name? dev_attr.app_name: 'Nothing is currently playing';
 }

  _click() {
    this._fire('hass-more-info', { entityId: this._config.entity });
  }

  _fire(type, detail) {

    const event = new Event(type, {
      bubbles: true,
      cancelable: false,
      composed: true
    });
    event.detail = detail || {};
    this._root.dispatchEvent(event);
    return event;
  }

  setConfig(config) {
    this._config = config;

    if (!config.entity) {
      throw Error('No entity defined')
    }
    if (!config.image_folder) {
      throw Error('No image_folder defined')
    }
  }

  set hass(hass) {
    this._hass = hass;

    var entityState = this._hass.states[this._config.entity].state
    if (entityState != this.state) {
      this.state = entityState; // This triggers _render since LitElement support two way binding
    }
  }

  static get properties() {
    return {
      hass: Object,
      config: Object,
      state: String
    }
  }

  getCardSize() {
    return 2;
  }

  constructor() {
    super();
    // ** START FOR TEST
    if (typeof process != typeof undefined && "development" == 'production') {return;} 
    this.__initTests();
    // ** END FOR TEST
  }

  // ** START FOR TEST

  /*
    I use this in my development environment to make a very simple mock of config/hass objects 
  */
  __initTests() {

    this.state = 'idle';
    var test_config = { entity: 'media_player.tv_nere', image_folder: 'img'}; //, font_size: '1ev'
  
   
    const test_hass = { states: {} };
    test_hass.states[test_config.entity] = {attributes:{}, state: 'playing'};
    const attr = test_hass.states[test_config.entity].attributes;

    attr['friendly_name'] = "TV Nere"
    attr['app_name'] = "HBO Nordic Netflix"
    attr['media_title'] = "Game of thrones"
   // attr['entity_picture'] = 'img/media_playing.png'
    this.setConfig(test_config);
    this._hass = test_hass;
  }

  // ** END FOR TEST
}

window.customElements.define('media-player-card', MediaPlayerCard);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/picture-status-card/picture-status-card.js":
/*!********************************************************!*\
  !*** ./src/picture-status-card/picture-status-card.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js");
/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Tomas Hellström  (https://github.com/helto4real/lovelace-custom-cards)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

 /**
  * DO NOT USE THIS FILE IF USING SINGLE CARDS, USE THE VERSION UNDER 'dist' CATALOG!!!!
  */

// Use when dev outside HASS and build using npm


/**
 * `picture-status-card`
 * Lovelace element for displaying status on a picture bottom centered on a shadow
 */
class PictureStatusCard extends _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  _render({ hass, config }) {
    return _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        
        <style>
            #container {
                max-width: 100%;
                height: 100px;        
                position: relative;
                top: 0px;
                overflow: hidden;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
            }
            .shadow {
              width: 100%;
              height: 25%;
              left: 0px;
              bottom: 0;
              background: rgba(0, 0, 0, 0.4);;
              position: absolute;
            }
            #state{
              position: relative;
              float: left;
              top: 50%;
              left: 50%;
              color: white;
              font-size: 100%;
              transform: translate(-50%, -50%);
            }
        </style>
        <div id="container" on-click="${() => this._click()}">
          <div class="shadow"><div id="state">${this.state}</div></div>
        </div>
        
        `;
  }

  /*
    Cant set background image in render method for the style, some bug prohibit that.
    So we need to set the background image after the page has rendered
  */
  _didRender(_props, _changedProps, _prevProps) {
    const container = this._root.querySelector('#container');
    const state_div = this._root.querySelector('#state');

    container.style.backgroundImage = `url(${this._getStateImage()})`;
    container.style.height = this._card_height;


    this._font_size = this._config.font_size ? this._config.font_size : `calc(${this._card_height}/6)`;

    state_div.style.fontSize = this._font_size;
    state_div.style.color = this._font_color;
  }

  _click() {
    this._fire('hass-more-info', { entityId: this._config.entity });
  }

  _fire(type, detail) {

    const event = new Event(type, {
      bubbles: true,
      cancelable: false,
      composed: true
    });
    event.detail = detail || {};
    this._root.dispatchEvent(event);
    return event;
  }
  /*
    Returns the state image for specific state 
    or default image if not specific state image found
  */
  _getStateImage() {
    if (this.state in this._config.state_image) {
      return this._config.state_image[this.state];
    }
    return this._config.image;
  }

  setConfig(config) {
    this._config = config;

    if (!config.entity) {
      throw Error('No entity defined')
    }
    if (!config.image) {
      throw Error('No image defined')
    }

    this._card_height = config.card_height ? config.card_height : '200px';
    this._font_color = config.font_color ? config.font_color : 'white';

  }

  set hass(hass) {
    this._hass = hass;

    var entityState = this._hass.states[this._config.entity].state
    if (entityState != this.state) {
      this.state = entityState; // This triggers _render since LitElement support two way binding
    }
  }

  static get properties() {
    return {
      hass: Object,
      config: Object,
      state: String
    }
  }

  getCardSize() {
    return 2;
  }

  constructor() {
    super();
    // ** START FOR TEST
    if (typeof process != typeof undefined && "development" == 'production') {return;} 
    this.__initTests();
    // ** END FOR TEST
  }

  // ** START FOR TEST

  /*
    I use this in my development environment to make a very simple mock of config/hass objects 
  */
  __initTests() {
    this.state = 'Home';
    var test_config = { entity: 'device_tracker.any', image: 'test/img/tomas_presence_away.jpg', state_image: {} }; //, font_size: '1ev'
    test_config.state_image['Home'] = 'test/img/tomas_presence_away.jpg'

    var test_hass = { states: [] };
    test_hass.states[test_config.entity] = "Home";
    this.setConfig(test_config);
  }
  // ** END FOR TEST
}

window.customElements.define('picture-status-card', PictureStatusCard);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1jaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FudmFzLWdhdWdlcy9nYXVnZS5taW4uanM/ZjUxMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2xpdC1leHRlbmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL21vZGlmeS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3NoYWR5LXJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FudmFzLWdhdWdlcy9nYXVnZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjcmlwdC1sb2FkZXIvYWRkU2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMtZ2F1Z2UtY2FyZC9jYW52YXMtZ2F1Z2UtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVkaWEtcGxheWVyLWNhcmQvbWVkaWEtcGxheWVyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpY3R1cmUtc3RhdHVzLWNhcmQvcGljdHVyZS1zdGF0dXMtY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0QwQjtBQUNBO0FBQ1Q7QUFDRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVyxVQUFVLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVcsVUFBVSxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7QUFDUjtBQUN0QjtBQUNwQztBQUNBLG9EQUFvRCxLQUFLLElBQUksVUFBVTtBQUN2RTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVcsVUFBVSxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLGtDQUFrQyxPQUFPLEdBQUcsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7OztBQ3pvQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFH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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5RkFBeUYsR0FBRztBQUNuSDs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjdXN0b20tY2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zcmMvY2FudmFzLWdhdWdlLWNhcmQvY2FudmFzLWdhdWdlLWNhcmQuanNcIjtcclxuaW1wb3J0IFwiLi9zcmMvcGljdHVyZS1zdGF0dXMtY2FyZC9waWN0dXJlLXN0YXR1cy1jYXJkLmpzXCJcclxuaW1wb3J0IFwiLi9zcmMvbWVkaWEtcGxheWVyLWNhcmQvbWVkaWEtcGxheWVyLWNhcmQuanNcIiIsImltcG9ydCB7IFByb3BlcnRpZXNNaXhpbiB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9wcm9wZXJ0aWVzLW1peGluLmpzJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoQ2FzZSB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ2xpdC1odG1sL2xpYi9zaGFkeS1yZW5kZXIuanMnO1xuZXhwb3J0IHsgaHRtbCwgc3ZnIH0gZnJvbSAnbGl0LWh0bWwvbGliL2xpdC1leHRlbmRlZC5qcyc7XG4vKipcbiAqIFJlbmRlcnMgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgYGF0dHJJbmZvYCBvYmplY3Qgd2hlcmVcbiAqIGJvb2xlYW4gdmFsdWVzIGFyZSBhZGRlZC9yZW1vdmVkIGFzIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IG9uIHdoaWNoIHRvIHNldCBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIGF0dHJJbmZvIE9iamVjdCBkZXNjcmliaW5nIGF0dHJpYnV0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJJbmZvKSB7XG4gICAgZm9yIChjb25zdCBhIGluIGF0dHJJbmZvKSB7XG4gICAgICAgIGNvbnN0IHYgPSBhdHRySW5mb1thXSA9PT0gdHJ1ZSA/ICcnIDogYXR0ckluZm9bYV07XG4gICAgICAgIGlmICh2IHx8IHYgPT09ICcnIHx8IHYgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhKSAhPT0gdikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGEsIFN0cmluZyh2KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoYSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIG9mIGNzcyBjbGFzcyBuYW1lcyBmb3JtZWQgYnkgdGFraW5nIHRoZSBwcm9wZXJ0aWVzXG4gKiBpbiB0aGUgYGNsYXNzSW5mb2Agb2JqZWN0IGFuZCBhcHBlbmRpbmcgdGhlIHByb3BlcnR5IG5hbWUgdG8gdGhlIHN0cmluZyBvZlxuICogY2xhc3MgbmFtZXMgaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIHRydXRoeS5cbiAqIEBwYXJhbSBjbGFzc0luZm9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzU3RyaW5nKGNsYXNzSW5mbykge1xuICAgIGNvbnN0IG8gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gY2xhc3NJbmZvKSB7XG4gICAgICAgIGNvbnN0IHYgPSBjbGFzc0luZm9bbmFtZV07XG4gICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICBvLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG8uam9pbignICcpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgY3NzIHN0eWxlIHN0cmluZyBmb3JtZWQgYnkgdGFraW5nIHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBgc3R5bGVJbmZvYFxuICogb2JqZWN0IGFuZCBhcHBlbmRpbmcgdGhlIHByb3BlcnR5IG5hbWUgKGRhc2gtY2FzZWQpIGNvbG9uIHRoZVxuICogcHJvcGVydHkgdmFsdWUuIFByb3BlcnRpZXMgYXJlIHNlcGFyYXRlZCBieSBhIHNlbWktY29sb24uXG4gKiBAcGFyYW0gc3R5bGVJbmZvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVN0cmluZyhzdHlsZUluZm8pIHtcbiAgICBjb25zdCBvID0gW107XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgICAgICBjb25zdCB2ID0gc3R5bGVJbmZvW25hbWVdO1xuICAgICAgICBpZiAodiB8fCB2ID09PSAwKSB7XG4gICAgICAgICAgICBvLnB1c2goYCR7Y2FtZWxUb0Rhc2hDYXNlKG5hbWUpfTogJHt2fWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvLmpvaW4oJzsgJyk7XG59XG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFByb3BlcnRpZXNNaXhpbihIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9fcmVuZGVyQ29tcGxldGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2lzSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB3aGljaCBzZXRzIHVwIGVsZW1lbnQgcmVuZGVyaW5nIGJ5IGNhbGxpbmcqIGBfY3JlYXRlUm9vdGBcbiAgICAgKiBhbmQgYF9maXJzdFJlbmRlcmVkYC5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuX2NyZWF0ZVJvb3QoKTtcbiAgICAgICAgc3VwZXIucmVhZHkoKTtcbiAgICAgICAgdGhpcy5fZmlyc3RSZW5kZXJlZCgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUyAmJiB0aGlzLl9yb290KSB7XG4gICAgICAgICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCBhZnRlciB0aGUgZWxlbWVudCBET00gaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqIEltcGxlbWVudCB0byBwZXJmb3JtIHRhc2tzIGFmdGVyIGZpcnN0IHJlbmRlcmluZyBsaWtlIGNhcHR1cmluZyBhXG4gICAgICogcmVmZXJlbmNlIHRvIGEgc3RhdGljIG5vZGUgd2hpY2ggbXVzdCBiZSBkaXJlY3RseSBtYW5pcHVsYXRlZC5cbiAgICAgKiBUaGlzIHNob3VsZCBub3QgYmUgY29tbW9ubHkgbmVlZGVkLiBGb3IgdGFza3Mgd2hpY2ggc2hvdWxkIGJlIHBlcmZvcm1lZFxuICAgICAqIGJlZm9yZSBmaXJzdCByZW5kZXIsIHVzZSB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBfZmlyc3RSZW5kZXJlZCgpIHsgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBieVxuICAgICAqIHJldHVybmluZyBhbiBlbGVtZW50IGludG8gd2hpY2ggdG8gcmVuZGVyLiBCeSBkZWZhdWx0IHRoaXMgY3JlYXRlc1xuICAgICAqIGEgc2hhZG93Um9vdCBmb3IgdGhlIGVsZW1lbnQuIFRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3MgY2hpbGROb2RlcyxcbiAgICAgKiByZXR1cm4gYHRoaXNgLlxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIF9jcmVhdGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHdoaWNoIHJldHVybnMgdGhlIHZhbHVlIG9mIGBfc2hvdWxkUmVuZGVyYCB3aGljaCB1c2Vyc1xuICAgICAqIHNob3VsZCBpbXBsZW1lbnQgdG8gY29udHJvbCByZW5kZXJpbmcuIElmIHRoaXMgbWV0aG9kIHJldHVybnMgZmFsc2UsXG4gICAgICogX3Byb3BlcnRpZXNDaGFuZ2VkIHdpbGwgbm90IGJlIGNhbGxlZCBhbmQgbm8gcmVuZGVyaW5nIHdpbGwgb2NjdXIgZXZlblxuICAgICAqIGlmIHByb3BlcnR5IHZhbHVlcyBjaGFuZ2Ugb3IgYHJlcXVlc3RSZW5kZXJgIGlzIGNhbGxlZC5cbiAgICAgKiBAcGFyYW0gX3Byb3BzIEN1cnJlbnQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcHMgQ2hhbmdpbmcgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIF9wcmV2UHJvcHMgUHJldmlvdXMgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IERlZmF1bHQgaW1wbGVtZW50YXRpb24gYWx3YXlzIHJldHVybnMgdHJ1ZS5cbiAgICAgKi9cbiAgICBfc2hvdWxkUHJvcGVydGllc0NoYW5nZShfcHJvcHMsIF9jaGFuZ2VkUHJvcHMsIF9wcmV2UHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVuZGVyID0gdGhpcy5fc2hvdWxkUmVuZGVyKF9wcm9wcywgX2NoYW5nZWRQcm9wcywgX3ByZXZQcm9wcyk7XG4gICAgICAgIGlmICghc2hvdWxkUmVuZGVyICYmIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaG91bGRSZW5kZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudCB0byBjb250cm9sIGlmIHJlbmRlcmluZyBzaG91bGQgb2NjdXIgd2hlbiBwcm9wZXJ0eSB2YWx1ZXNcbiAgICAgKiBjaGFuZ2Ugb3IgYHJlcXVlc3RSZW5kZXJgIGlzIGNhbGxlZC4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzXG4gICAgICogcmV0dXJucyB0cnVlLCBidXQgdGhpcyBjYW4gYmUgY3VzdG9taXplZCBhcyBhbiBvcHRpbWl6YXRpb24gdG8gYXZvaWRcbiAgICAgKiByZW5kZXJpbmcgd29yayB3aGVuIGNoYW5nZXMgb2NjdXIgd2hpY2ggc2hvdWxkIG5vdCBiZSByZW5kZXJlZC5cbiAgICAgKiBAcGFyYW0gX3Byb3BzIEN1cnJlbnQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcHMgQ2hhbmdpbmcgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIF9wcmV2UHJvcHMgUHJldmlvdXMgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IERlZmF1bHQgaW1wbGVtZW50YXRpb24gYWx3YXlzIHJldHVybnMgdHJ1ZS5cbiAgICAgKi9cbiAgICBfc2hvdWxkUmVuZGVyKF9wcm9wcywgX2NoYW5nZWRQcm9wcywgX3ByZXZQcm9wcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgd2hpY2ggcGVyZm9ybXMgZWxlbWVudCByZW5kZXJpbmcgYnkgY2FsbGluZ1xuICAgICAqIGBfcmVuZGVyYCwgYF9hcHBseVJlbmRlcmAsIGFuZCBmaW5hbGx5IGBfZGlkUmVuZGVyYC5cbiAgICAgKiBAcGFyYW0gcHJvcHMgQ3VycmVudCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gY2hhbmdlZFByb3BzIENoYW5naW5nIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBwcmV2UHJvcHMgUHJldmlvdXMgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgX3Byb3BlcnRpZXNDaGFuZ2VkKHByb3BzLCBjaGFuZ2VkUHJvcHMsIHByZXZQcm9wcykge1xuICAgICAgICBzdXBlci5fcHJvcGVydGllc0NoYW5nZWQocHJvcHMsIGNoYW5nZWRQcm9wcywgcHJldlByb3BzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcmVuZGVyKHByb3BzKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiB0aGlzLl9yb290ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5UmVuZGVyKHJlc3VsdCwgdGhpcy5fcm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGlkUmVuZGVyKHByb3BzLCBjaGFuZ2VkUHJvcHMsIHByZXZQcm9wcyk7XG4gICAgICAgIGlmICh0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9mbHVzaFByb3BlcnRpZXMoKSB7XG4gICAgICAgIHRoaXMuX19pc0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX2lzSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICBzdXBlci5fZmx1c2hQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuX19pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHdoaWNoIHdhcm5zIHdoZW4gYSB1c2VyIGF0dGVtcHRzIHRvIGNoYW5nZSBhIHByb3BlcnR5IGR1cmluZ1xuICAgICAqIHRoZSByZW5kZXJpbmcgbGlmZWN5Y2xlLiBUaGlzIGlzIGFuIGFudGktcGF0dGVybiBhbmQgc2hvdWxkIGJlIGF2b2lkZWQuXG4gICAgICogQHBhcmFtIHByb3BlcnR5IHtzdHJpbmd9XG4gICAgICogQHBhcmFtIHZhbHVlIHthbnl9XG4gICAgICogQHBhcmFtIG9sZCB7YW55fVxuICAgICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICBfc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHksIHZhbHVlLCBvbGQpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlID0gc3VwZXIuX3Nob3VsZFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkKTtcbiAgICAgICAgaWYgKGNoYW5nZSAmJiB0aGlzLl9faXNDaGFuZ2luZykge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZShgU2V0dGluZyBwcm9wZXJ0aWVzIGluIHJlc3BvbnNlIHRvIG90aGVyIHByb3BlcnRpZXMgY2hhbmdpbmcgYCArXG4gICAgICAgICAgICAgICAgYGNvbnNpZGVyZWQgaGFybWZ1bC4gU2V0dGluZyAnJHtwcm9wZXJ0eX0nIGZyb20gYCArXG4gICAgICAgICAgICAgICAgYCcke3RoaXMuX2dldFByb3BlcnR5KHByb3BlcnR5KX0nIHRvICcke3ZhbHVlfScuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50IHRvIGRlc2NyaWJlIHRoZSBET00gd2hpY2ggc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSBlbGVtZW50LlxuICAgICAqIElkZWFsbHksIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBhIHB1cmUgZnVuY3Rpb24gdXNpbmcgb25seSBwcm9wcyB0byBkZXNjcmliZVxuICAgICAqIHRoZSBlbGVtZW50IHRlbXBsYXRlLiBUaGUgaW1wbGVtZW50YXRpb24gbXVzdCByZXR1cm4gYSBgbGl0LWh0bWxgXG4gICAgICogVGVtcGxhdGVSZXN1bHQuIEJ5IGRlZmF1bHQgdGhpcyB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBzaGFkb3dSb290LiBUaGlzIGNhbiBiZSBjdXN0b21pemVkIGJ5IGltcGxlbWVudGluZyBgX2NyZWF0ZVJvb3RgLiBUaGlzXG4gICAgICogbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuXG4gICAgICogQHBhcmFtIHsqfSBfcHJvcHMgQ3VycmVudCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7VGVtcGxhdGVSZXN1bHR9IE11c3QgcmV0dXJuIGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQuXG4gICAgICovXG4gICAgX3JlbmRlcihfcHJvcHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdfcmVuZGVyKCkgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdpdmVuIGxpdC1odG1sIHRlbXBsYXRlIGByZXN1bHRgIGludG8gdGhlIGdpdmVuIGBub2RlYC5cbiAgICAgKiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHRoZSB3YXkgcmVuZGVyaW5nIGlzIGFwcGxpZWQuIFRoaXMgaXMgc2hvdWxkIG5vdFxuICAgICAqIHR5cGljYWxseSBiZSBuZWVkZWQgYW5kIGlzIHByb3ZpZGVkIGZvciBhZHZhbmNlZCB1c2UgY2FzZXMuXG4gICAgICogQHBhcmFtIHJlc3VsdCB7VGVtcGxhdGVSZXN1bHR9IGBsaXQtaHRtbGAgdGVtcGxhdGUgcmVzdWx0IHRvIHJlbmRlclxuICAgICAqIEBwYXJhbSBub2RlIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IG5vZGUgaW50byB3aGljaCB0byByZW5kZXJcbiAgICAgKi9cbiAgICBfYXBwbHlSZW5kZXIocmVzdWx0LCBub2RlKSB7XG4gICAgICAgIHJlbmRlcihyZXN1bHQsIG5vZGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGFmdGVyIGVsZW1lbnQgRE9NIGhhcyBiZWVuIHJlbmRlcmVkLiBJbXBsZW1lbnQgdG9cbiAgICAgKiBkaXJlY3RseSBjb250cm9sIHJlbmRlcmVkIERPTS4gVHlwaWNhbGx5IHRoaXMgaXMgbm90IG5lZWRlZCBhcyBgbGl0LWh0bWxgXG4gICAgICogY2FuIGJlIHVzZWQgaW4gdGhlIGBfcmVuZGVyYCBtZXRob2QgdG8gc2V0IHByb3BlcnRpZXMsIGF0dHJpYnV0ZXMsIGFuZFxuICAgICAqIGV2ZW50IGxpc3RlbmVycy4gSG93ZXZlciwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCBmb3IgY2FsbGluZyBtZXRob2RzIG9uXG4gICAgICogcmVuZGVyZWQgZWxlbWVudHMsIGxpa2UgY2FsbGluZyBgZm9jdXMoKWAgb24gYW4gZWxlbWVudCB0byBmb2N1cyBpdC5cbiAgICAgKiBAcGFyYW0gX3Byb3BzIEN1cnJlbnQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcHMgQ2hhbmdpbmcgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIF9wcmV2UHJvcHMgUHJldmlvdXMgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgX2RpZFJlbmRlcihfcHJvcHMsIF9jaGFuZ2VkUHJvcHMsIF9wcmV2UHJvcHMpIHsgfVxuICAgIC8qKlxuICAgICAqIENhbGwgdG8gcmVxdWVzdCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSByZS1yZW5kZXIgcmVnYXJkbGVzc1xuICAgICAqIG9mIHdoZXRoZXIgb3Igbm90IGFueSBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBwZW5kaW5nLlxuICAgICAqL1xuICAgIHJlcXVlc3RSZW5kZXIoKSB7IHRoaXMuX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCk7IH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB3aGljaCBwcm92aWRlcyB0cmFja2luZyBvZiBpbnZhbGlkYXRlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBfaW52YWxpZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIHRoaXMuX19pc0ludmFsaWQgPSB0cnVlO1xuICAgICAgICBzdXBlci5faW52YWxpZGF0ZVByb3BlcnRpZXMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgYWZ0ZXIgdGhlIGVsZW1lbnQgbmV4dCByZW5kZXJzLlxuICAgICAqIFRoZSBwcm9taXNlIHJlc29sdmVzIHRvIGB0cnVlYCBpZiB0aGUgZWxlbWVudCByZW5kZXJlZCBhbmQgYGZhbHNlYCBpZiB0aGVcbiAgICAgKiBlbGVtZW50IGRpZCBub3QgcmVuZGVyLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNlcnMgKGUuZy4gdGVzdHMpIG5lZWQgdG8gcmVhY3QgdG8gdGhlIHJlbmRlcmVkIHN0YXRlXG4gICAgICogb2YgdGhlIGVsZW1lbnQgYWZ0ZXIgYSBjaGFuZ2UgaXMgbWFkZS5cbiAgICAgKiBUaGlzIGNhbiBhbHNvIGJlIHVzZWZ1bCBpbiBldmVudCBoYW5kbGVycyBpZiBpdCBpcyBkZXNpcmVhYmxlIHRvIHdhaXRcbiAgICAgKiB0byBzZW5kIGFuIGV2ZW50IHVudGlsIGFmdGVyIHJlbmRlcmluZy4gSWYgcG9zc2libGUgaW1wbGVtZW50IHRoZVxuICAgICAqIGBfZGlkUmVuZGVyYCBtZXRob2QgdG8gZGlyZWN0bHkgcmVzcG9uZCB0byByZW5kZXJpbmcgd2l0aGluIHRoZVxuICAgICAqIHJlbmRlcmluZyBsaWZlY3ljbGUuXG4gICAgICovXG4gICAgZ2V0IHJlbmRlckNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX19yZW5kZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3JlbmRlckNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUgPSB0aGlzLl9fcmVuZGVyQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX19pc0ludmFsaWQgJiYgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZShmYWxzZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9fcmVuZGVyQ29tcGxldGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi4vdXRpbHMvYm9vdC5qcyc7XG5cbmltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tICcuLi91dGlscy9taXhpbi5qcyc7XG5pbXBvcnQgeyBtaWNyb1Rhc2sgfSBmcm9tICcuLi91dGlscy9hc3luYy5qcyc7XG5cbi8qKiBAY29uc3QgeyFBc3luY0ludGVyZmFjZX0gKi9cbmNvbnN0IG1pY3JvdGFzayA9IG1pY3JvVGFzaztcblxuLyoqXG4gKiBFbGVtZW50IGNsYXNzIG1peGluIHRoYXQgcHJvdmlkZXMgYmFzaWMgbWV0YS1wcm9ncmFtbWluZyBmb3IgY3JlYXRpbmcgb25lXG4gKiBvciBtb3JlIHByb3BlcnR5IGFjY2Vzc29ycyAoZ2V0dGVyL3NldHRlciBwYWlyKSB0aGF0IGVucXVldWUgYW4gYXN5bmNcbiAqIChiYXRjaGVkKSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAqXG4gKiBGb3IgYmFzaWMgdXNhZ2Ugb2YgdGhpcyBtaXhpbiwgY2FsbCBgTXlDbGFzcy5jcmVhdGVQcm9wZXJ0aWVzKHByb3BzKWBcbiAqIG9uY2UgYXQgY2xhc3MgZGVmaW5pdGlvbiB0aW1lIHRvIGNyZWF0ZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHByb3BlcnRpZXNcbiAqIG5hbWVkIGluIHByb3BzLCBpbXBsZW1lbnQgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgdG8gcmVhY3QgYXMgZGVzaXJlZCB0b1xuICogcHJvcGVydHkgY2hhbmdlcywgYW5kIGltcGxlbWVudCBgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKWAgYW5kXG4gKiBpbmNsdWRlIGxvd2VyY2FzZSB2ZXJzaW9ucyBvZiBhbnkgcHJvcGVydHkgbmFtZXMgdGhhdCBzaG91bGQgYmUgc2V0IGZyb21cbiAqIGF0dHJpYnV0ZXMuIExhc3QsIGNhbGwgYHRoaXMuX2VuYWJsZVByb3BlcnRpZXMoKWAgaW4gdGhlIGVsZW1lbnQnc1xuICogYGNvbm5lY3RlZENhbGxiYWNrYCB0byBlbmFibGUgdGhlIGFjY2Vzc29ycy5cbiAqXG4gKiBAbWl4aW5GdW5jdGlvblxuICogQHBvbHltZXJcbiAqIEBzdW1tYXJ5IEVsZW1lbnQgY2xhc3MgbWl4aW4gZm9yIHJlYWN0aW5nIHRvIHByb3BlcnR5IGNoYW5nZXMgZnJvbVxuICogICBnZW5lcmF0ZWQgcHJvcGVydHkgYWNjZXNzb3JzLlxuICovXG5leHBvcnQgY29uc3QgUHJvcGVydGllc0NoYW5nZWQgPSBkZWR1cGluZ01peGluKHN1cGVyQ2xhc3MgPT4ge1xuXG4gIC8qKlxuICAgKiBAcG9seW1lclxuICAgKiBAbWl4aW5DbGFzc1xuICAgKiBAZXh0ZW5kcyB7c3VwZXJDbGFzc31cbiAgICogQGltcGxlbWVudHMge1BvbHltZXJfUHJvcGVydGllc0NoYW5nZWR9XG4gICAqIEB1bnJlc3RyaWN0ZWRcbiAgICovXG4gIGNsYXNzIFByb3BlcnRpZXNDaGFuZ2VkIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWVzLlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gcHJvcHMgT2JqZWN0IHdob3NlIGtleXMgYXJlIG5hbWVzIG9mIGFjY2Vzc29ycy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydGllcyhwcm9wcykge1xuICAgICAgY29uc3QgcHJvdG8gPSB0aGlzLnByb3RvdHlwZTtcbiAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgLy8gZG9uJ3Qgc3RvbXAgYW4gZXhpc3RpbmcgYWNjZXNzb3JcbiAgICAgICAgaWYgKCEocHJvcCBpbiBwcm90bykpIHtcbiAgICAgICAgICBwcm90by5fY3JlYXRlUHJvcGVydHlBY2Nlc3Nvcihwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXR0cmlidXRlIG5hbWUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIHRoZSBsb3dlcmNhc2VkIHByb3BlcnR5IG5hbWUuIE92ZXJyaWRlIHRvXG4gICAgICogY3VzdG9taXplIHRoaXMgbWFwcGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUHJvcGVydHkgdG8gY29udmVydFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gQXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgdG8gcHJvdmlkZSBhIHR5cGUgdG8gd2hpY2ggdG8gZGVzZXJpYWxpemUgYSB2YWx1ZSB0b1xuICAgICAqIGEgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyB0eXBlRm9yUHJvcGVydHkobmFtZSkgeyB9IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlci9nZXR0ZXIgcGFpciBmb3IgdGhlIG5hbWVkIHByb3BlcnR5IHdpdGggaXRzIG93blxuICAgICAqIGxvY2FsIHN0b3JhZ2UuICBUaGUgZ2V0dGVyIHJldHVybnMgdGhlIHZhbHVlIGluIHRoZSBsb2NhbCBzdG9yYWdlLFxuICAgICAqIGFuZCB0aGUgc2V0dGVyIGNhbGxzIGBfc2V0UHJvcGVydHlgLCB3aGljaCB1cGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICogZm9yIHRoZSBwcm9wZXJ0eSBhbmQgZW5xdWV1ZXMgYSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBjYWxsZWQgb24gYSBwcm90b3R5cGUgb3IgYW4gaW5zdGFuY2UuICBDYWxsaW5nXG4gICAgICogdGhpcyBtZXRob2QgbWF5IG92ZXJ3cml0ZSBhIHByb3BlcnR5IHZhbHVlIHRoYXQgYWxyZWFkeSBleGlzdHMgb25cbiAgICAgKiB0aGUgcHJvdG90eXBlL2luc3RhbmNlIGJ5IGNyZWF0aW5nIHRoZSBhY2Nlc3Nvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IHJlYWRPbmx5IFdoZW4gdHJ1ZSwgbm8gc2V0dGVyIGlzIGNyZWF0ZWQ7IHRoZVxuICAgICAqICAgcHJvdGVjdGVkIGBfc2V0UHJvcGVydHlgIGZ1bmN0aW9uIG11c3QgYmUgdXNlZCB0byBzZXQgdGhlIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2NyZWF0ZVByb3BlcnR5QWNjZXNzb3IocHJvcGVydHksIHJlYWRPbmx5KSB7XG4gICAgICB0aGlzLl9hZGRQcm9wZXJ0eVRvQXR0cmlidXRlTWFwKHByb3BlcnR5KTtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgnX19kYXRhSGFzQWNjZXNzb3InKSkge1xuICAgICAgICB0aGlzLl9fZGF0YUhhc0FjY2Vzc29yID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fX2RhdGFIYXNBY2Nlc3Nvcik7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX19kYXRhSGFzQWNjZXNzb3JbcHJvcGVydHldKSB7XG4gICAgICAgIHRoaXMuX19kYXRhSGFzQWNjZXNzb3JbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZGVmaW5lUHJvcGVydHlBY2Nlc3Nvcihwcm9wZXJ0eSwgcmVhZE9ubHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIGBwcm9wZXJ0eWAgdG8gYSBtYXAgbWF0Y2hpbmcgYXR0cmlidXRlIG5hbWVzXG4gICAgICogdG8gcHJvcGVydHkgbmFtZXMsIHVzaW5nIGBhdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHlgLiBUaGlzIG1hcCBpc1xuICAgICAqIHVzZWQgd2hlbiBkZXNlcmlhbGl6aW5nIGF0dHJpYnV0ZSB2YWx1ZXMgdG8gcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqL1xuICAgIF9hZGRQcm9wZXJ0eVRvQXR0cmlidXRlTWFwKHByb3BlcnR5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ19fZGF0YUF0dHJpYnV0ZXMnKSkge1xuICAgICAgICB0aGlzLl9fZGF0YUF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9fZGF0YUF0dHJpYnV0ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9fZGF0YUF0dHJpYnV0ZXNbcHJvcGVydHldKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICAgIHRoaXMuX19kYXRhQXR0cmlidXRlc1thdHRyXSA9IHByb3BlcnR5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IHJlYWRPbmx5IFdoZW4gdHJ1ZSwgbm8gc2V0dGVyIGlzIGNyZWF0ZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgICBfZGVmaW5lUHJvcGVydHlBY2Nlc3Nvcihwcm9wZXJ0eSwgcmVhZE9ubHkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eSwge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuICAgICAgICAvKiogQHRoaXMge1Byb3BlcnRpZXNDaGFuZ2VkfSAqL1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHtQcm9wZXJ0aWVzQ2hhbmdlZH0gKi9cbiAgICAgICAgc2V0OiByZWFkT25seSA/IGZ1bmN0aW9uICgpIHt9IDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9fZGF0YUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19kYXRhUmVhZHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19kYXRhSW52YWxpZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2RhdGEgPSB7fTtcbiAgICAgIHRoaXMuX19kYXRhUGVuZGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9fZGF0YU9sZCA9IG51bGw7XG4gICAgICB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgPSBudWxsO1xuICAgICAgdGhpcy5fX3NlcmlhbGl6aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbml0aWFsaXplUHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpZmVjeWNsZSBjYWxsYmFjayBjYWxsZWQgd2hlbiBwcm9wZXJ0aWVzIGFyZSBlbmFibGVkIHZpYVxuICAgICAqIGBfZW5hYmxlUHJvcGVydGllc2AuXG4gICAgICpcbiAgICAgKiBVc2VycyBtYXkgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBpbXBsZW1lbnQgYmVoYXZpb3IgdGhhdCBpc1xuICAgICAqIGRlcGVuZGVudCBvbiB0aGUgZWxlbWVudCBoYXZpbmcgaXRzIHByb3BlcnR5IGRhdGEgaW5pdGlhbGl6ZWQsIGUuZy5cbiAgICAgKiBmcm9tIGRlZmF1bHRzIChpbml0aWFsaXplZCBmcm9tIGBjb25zdHJ1Y3RvcmAsIGBfaW5pdGlhbGl6ZVByb3BlcnRpZXNgKSxcbiAgICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgdmFsdWVzIHByb3BhZ2F0ZWQgZnJvbSBob3N0IGUuZy4gdmlhXG4gICAgICogYmluZGluZ3MuICBgc3VwZXIucmVhZHkoKWAgbXVzdCBiZSBjYWxsZWQgdG8gZW5zdXJlIHRoZSBkYXRhIHN5c3RlbVxuICAgICAqIGJlY29tZXMgZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgdGhpcy5fX2RhdGFSZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLl9mbHVzaFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgcHJvcGVydHkgYWNjZXNzb3JzLlxuICAgICAqXG4gICAgICogUHJvdmlkZWQgYXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBlcmZvcm1pbmcgYW55IHNldHVwIHdvcmsgcHJpb3JcbiAgICAgKiB0byBpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5IGFjY2Vzc29yIHN5c3RlbS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9pbml0aWFsaXplUHJvcGVydGllcygpIHtcbiAgICAgIC8vIENhcHR1cmUgaW5zdGFuY2UgcHJvcGVydGllczsgdGhlc2Ugd2lsbCBiZSBzZXQgaW50byBhY2Nlc3NvcnNcbiAgICAgIC8vIGR1cmluZyBmaXJzdCBmbHVzaC4gRG9uJ3Qgc2V0IHRoZW0gaGVyZSwgc2luY2Ugd2Ugd2FudFxuICAgICAgLy8gdGhlc2UgdG8gb3ZlcndyaXRlIGRlZmF1bHRzL2NvbnN0cnVjdG9yIGFzc2lnbm1lbnRzXG4gICAgICBmb3IgKGxldCBwIGluIHRoaXMuX19kYXRhSGFzQWNjZXNzb3IpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgPSB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgfHwge307XG4gICAgICAgICAgdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzW3BdID0gdGhpc1twXTtcbiAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBhdCByZWFkeSB0aW1lIHdpdGggYmFnIG9mIGluc3RhbmNlIHByb3BlcnRpZXMgdGhhdCBvdmVyd3JvdGVcbiAgICAgKiBhY2Nlc3NvcnMgd2hlbiB0aGUgZWxlbWVudCB1cGdyYWRlZC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHNldHMgdGhlc2UgcHJvcGVydGllcyBiYWNrIGludG8gdGhlXG4gICAgICogc2V0dGVyIGF0IHJlYWR5IHRpbWUuICBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBhcyBhbiBvdmVycmlkZVxuICAgICAqIHBvaW50IGZvciBjdXN0b21pemluZyBvciBwcm92aWRpbmcgbW9yZSBlZmZpY2llbnQgaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQmFnIG9mIHByb3BlcnR5IHZhbHVlcyB0aGF0IHdlcmUgb3ZlcndyaXR0ZW5cbiAgICAgKiAgIHdoZW4gY3JlYXRpbmcgcHJvcGVydHkgYWNjZXNzb3JzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9pbml0aWFsaXplSW5zdGFuY2VQcm9wZXJ0aWVzKHByb3BzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHByb3BlcnR5ICh2aWEgYF9zZXRQZW5kaW5nUHJvcGVydHlgKVxuICAgICAqIGFuZCBlbnF1ZXVlcyBhIGBfcHJvZXBydGllc0NoYW5nZWRgIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBzZXRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5fc2V0UGVuZGluZ1Byb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5faW52YWxpZGF0ZVByb3BlcnRpZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7Kn0gVmFsdWUgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfZ2V0UHJvcGVydHkocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fZGF0YVtwcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHByb3BlcnR5LCByZWNvcmRzIHRoZSBwcmV2aW91cyB2YWx1ZSxcbiAgICAgKiBhbmQgYWRkcyBpdCB0byB0aGUgc2V0IG9mIFwicGVuZGluZyBjaGFuZ2VzXCIgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay4gIFRoaXMgbWV0aG9kIGRvZXMgbm90IGVucXVldWUgdGhlXG4gICAgICogYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGV4dCBOb3QgdXNlZCBoZXJlOyBhZmZvcmRhbmNlIGZvciBjbG9zdXJlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBjaGFuZ2VkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9zZXRQZW5kaW5nUHJvcGVydHkocHJvcGVydHksIHZhbHVlLCBleHQpIHtcbiAgICAgIGxldCBvbGQgPSB0aGlzLl9fZGF0YVtwcm9wZXJ0eV07XG4gICAgICBsZXQgY2hhbmdlZCA9IHRoaXMuX3Nob3VsZFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkKTtcbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2RhdGFQZW5kaW5nKSB7XG4gICAgICAgICAgdGhpcy5fX2RhdGFQZW5kaW5nID0ge307XG4gICAgICAgICAgdGhpcy5fX2RhdGFPbGQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgb2xkIGlzIGNhcHR1cmVkIGZyb20gdGhlIGxhc3QgdHVyblxuICAgICAgICBpZiAodGhpcy5fX2RhdGFPbGQgJiYgIShwcm9wZXJ0eSBpbiB0aGlzLl9fZGF0YU9sZCkpIHtcbiAgICAgICAgICB0aGlzLl9fZGF0YU9sZFtwcm9wZXJ0eV0gPSBvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX2RhdGFbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX19kYXRhUGVuZGluZ1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgcHJvcGVydGllcyBhcyBpbnZhbGlkLCBhbmQgZW5xdWV1ZXMgYW4gYXN5bmNcbiAgICAgKiBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9pbnZhbGlkYXRlUHJvcGVydGllcygpIHtcbiAgICAgIGlmICghdGhpcy5fX2RhdGFJbnZhbGlkICYmIHRoaXMuX19kYXRhUmVhZHkpIHtcbiAgICAgICAgdGhpcy5fX2RhdGFJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbWljcm90YXNrLnJ1bigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX19kYXRhSW52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fX2RhdGFJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9mbHVzaFByb3BlcnRpZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdG8gZW5hYmxlIHByb3BlcnR5IGFjY2Vzc29yIHByb2Nlc3NpbmcuIEJlZm9yZSB0aGlzIG1ldGhvZCBpc1xuICAgICAqIGNhbGxlZCBhY2Nlc3NvciB2YWx1ZXMgd2lsbCBiZSBzZXQgYnV0IHNpZGUgZWZmZWN0cyBhcmVcbiAgICAgKiBxdWV1ZWQuIFdoZW4gY2FsbGVkLCBhbnkgcGVuZGluZyBzaWRlIGVmZmVjdHMgb2NjdXIgaW1tZWRpYXRlbHkuXG4gICAgICogRm9yIGVsZW1lbnRzLCBnZW5lcmFsbHkgYGNvbm5lY3RlZENhbGxiYWNrYCBpcyBhIG5vcm1hbCBzcG90IHRvIGRvIHNvLlxuICAgICAqIEl0IGlzIHNhZmUgdG8gY2FsbCB0aGlzIG1ldGhvZCBtdWx0aXBsZSB0aW1lcyBhcyBpdCBvbmx5IHR1cm5zIG9uXG4gICAgICogcHJvcGVydHkgYWNjZXNzb3JzIG9uY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfZW5hYmxlUHJvcGVydGllcygpIHtcbiAgICAgIGlmICghdGhpcy5fX2RhdGFFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX19kYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMpIHtcbiAgICAgICAgICB0aGlzLl9pbml0aWFsaXplSW5zdGFuY2VQcm9wZXJ0aWVzKHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcyk7XG4gICAgICAgICAgdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrIHdpdGggdGhlIGN1cnJlbnQgc2V0IG9mXG4gICAgICogcGVuZGluZyBjaGFuZ2VzIChhbmQgb2xkIHZhbHVlcyByZWNvcmRlZCB3aGVuIHBlbmRpbmcgY2hhbmdlcyB3ZXJlXG4gICAgICogc2V0KSwgYW5kIHJlc2V0cyB0aGUgcGVuZGluZyBzZXQgb2YgY2hhbmdlcy4gR2VuZXJhbGx5LCB0aGlzIG1ldGhvZFxuICAgICAqIHNob3VsZCBub3QgYmUgY2FsbGVkIGluIHVzZXIgY29kZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9mbHVzaFByb3BlcnRpZXMoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHRoaXMuX19kYXRhO1xuICAgICAgY29uc3QgY2hhbmdlZFByb3BzID0gdGhpcy5fX2RhdGFQZW5kaW5nO1xuICAgICAgY29uc3Qgb2xkID0gdGhpcy5fX2RhdGFPbGQ7XG4gICAgICBpZiAodGhpcy5fc2hvdWxkUHJvcGVydGllc0NoYW5nZShwcm9wcywgY2hhbmdlZFByb3BzLCBvbGQpKSB7XG4gICAgICAgIHRoaXMuX19kYXRhUGVuZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX19kYXRhT2xkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcHJvcGVydGllc0NoYW5nZWQocHJvcHMsIGNoYW5nZWRQcm9wcywgb2xkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgaW4gYF9mbHVzaFByb3BlcnRpZXNgIHRvIGRldGVybWluZSBpZiBgX3Byb3BlcnRpZXNDaGFuZ2VkYFxuICAgICAqIHNob3VsZCBiZSBjYWxsZWQuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnMgdHJ1ZSBpZlxuICAgICAqIHByb3BlcnRpZXMgYXJlIHBlbmRpbmcuIE92ZXJyaWRlIHRvIGN1c3RvbWl6ZSB3aGVuXG4gICAgICogYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgaXMgY2FsbGVkLlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gY3VycmVudFByb3BzIEJhZyBvZiBhbGwgY3VycmVudCBhY2Nlc3NvciB2YWx1ZXNcbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IGNoYW5nZWRQcm9wcyBCYWcgb2YgcHJvcGVydGllcyBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0XG4gICAgICogICBjYWxsIHRvIGBfcHJvcGVydGllc0NoYW5nZWRgXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBvbGRQcm9wcyBCYWcgb2YgcHJldmlvdXMgdmFsdWVzIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICogICBpbiBgY2hhbmdlZFByb3BzYFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgY2hhbmdlZFByb3BzIGlzIHRydXRoeVxuICAgICAqL1xuICAgIF9zaG91bGRQcm9wZXJ0aWVzQ2hhbmdlKGN1cnJlbnRQcm9wcywgY2hhbmdlZFByb3BzLCBvbGRQcm9wcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gQm9vbGVhbihjaGFuZ2VkUHJvcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIGFueSBwcm9wZXJ0aWVzIHdpdGggYWNjZXNzb3JzIGNyZWF0ZWQgdmlhXG4gICAgICogYF9jcmVhdGVQcm9wZXJ0eUFjY2Vzc29yYCBoYXZlIGJlZW4gc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBjdXJyZW50UHJvcHMgQmFnIG9mIGFsbCBjdXJyZW50IGFjY2Vzc29yIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gY2hhbmdlZFByb3BzIEJhZyBvZiBwcm9wZXJ0aWVzIGNoYW5nZWQgc2luY2UgdGhlIGxhc3RcbiAgICAgKiAgIGNhbGwgdG8gYF9wcm9wZXJ0aWVzQ2hhbmdlZGBcbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IG9sZFByb3BzIEJhZyBvZiBwcmV2aW91cyB2YWx1ZXMgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgKiAgIGluIGBjaGFuZ2VkUHJvcHNgXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3Byb3BlcnRpZXNDaGFuZ2VkKGN1cnJlbnRQcm9wcywgY2hhbmdlZFByb3BzLCBvbGRQcm9wcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGNhbGxlZCB0byBkZXRlcm1pbmUgd2hldGhlciBhIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZVxuICAgICAqIGNvbnNpZGVyZWQgYXMgYSBjaGFuZ2UgYW5kIGNhdXNlIHRoZSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFja1xuICAgICAqIHRvIGJlIGVucXVldWVkLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gcmV0dXJucyBgdHJ1ZWAgaWYgYSBzdHJpY3QgZXF1YWxpdHlcbiAgICAgKiBjaGVjayBmYWlscy4gVGhlIG1ldGhvZCBhbHdheXMgcmV0dXJucyBmYWxzZSBmb3IgYE5hTmAuXG4gICAgICpcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBlLmcuIHByb3ZpZGUgc3RyaWN0ZXIgY2hlY2tpbmcgZm9yXG4gICAgICogT2JqZWN0cy9BcnJheXMgd2hlbiB1c2luZyBpbW11dGFibGUgcGF0dGVybnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUHJvcGVydHkgbmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgTmV3IHByb3BlcnR5IHZhbHVlXG4gICAgICogQHBhcmFtIHsqfSBvbGQgUHJldmlvdXMgcHJvcGVydHkgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIGNoYW5nZVxuICAgICAqICAgYW5kIGVucXVldWUgYSBgX3Byb2VwcnRpZXNDaGFuZ2VkYCBjYWxsYmFja1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHksIHZhbHVlLCBvbGQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIFN0cmljdCBlcXVhbGl0eSBjaGVja1xuICAgICAgICAob2xkICE9PSB2YWx1ZSAmJlxuICAgICAgICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgICAgICAgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgbmF0aXZlIEN1c3RvbSBFbGVtZW50cyBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0b1xuICAgICAqIHNldCBhbiBhdHRyaWJ1dGUgdmFsdWUgdG8gYSBwcm9wZXJ0eSB2aWEgYF9hdHRyaWJ1dGVUb1Byb3BlcnR5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgYXR0cmlidXRlIHRoYXQgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gb2xkIE9sZCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlIE5ldyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IG5hbWVzcGFjZSBBdHRyaWJ1dGUgbmFtZXNwYWNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc30gU3VwZXIgbWF5IG9yIG1heSBub3QgaW1wbGVtZW50IHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlLCBuYW1lc3BhY2UpIHtcbiAgICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykge1xuICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkLCB2YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgYW4gYXR0cmlidXRlIHRvIGl0cyBhc3NvY2lhdGVkIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgY2FsbHMgdGhlIGBfZGVzZXJpYWxpemVWYWx1ZWAgbWV0aG9kIHRvIGNvbnZlcnQgdGhlIHN0cmluZyB0b1xuICAgICAqIGEgdHlwZWQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIE5hbWUgb2YgYXR0cmlidXRlIHRvIGRlc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0geyo9fSB0eXBlIHR5cGUgdG8gZGVzZXJpYWxpemUgdG8sIGRlZmF1bHRzIHRvIHRoZSB2YWx1ZVxuICAgICAqIHJldHVybmVkIGZyb20gYHR5cGVGb3JQcm9wZXJ0eWBcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIF9hdHRyaWJ1dGVUb1Byb3BlcnR5KGF0dHJpYnV0ZSwgdmFsdWUsIHR5cGUpIHtcbiAgICAgIGlmICghdGhpcy5fX3NlcmlhbGl6aW5nKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuX19kYXRhQXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBtYXAgJiYgbWFwW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IHRoaXMuX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUgfHxcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGVGb3JQcm9wZXJ0eShwcm9wZXJ0eSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBwcm9wZXJ0eSB0byBpdHMgYXNzb2NpYXRlZCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAc3VwcHJlc3Mge2ludmFsaWRDYXN0c30gQ2xvc3VyZSBjYW4ndCBmaWd1cmUgb3V0IGB0aGlzYCBpcyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFByb3BlcnR5IG5hbWUgdG8gcmVmbGVjdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGF0dHJpYnV0ZSBBdHRyaWJ1dGUgbmFtZSB0byByZWZsZWN0IHRvLlxuICAgICAqIEBwYXJhbSB7Kj19IHZhbHVlIFByb3BlcnR5IHZhbHVlIHRvIHJlZmVjdC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIF9wcm9wZXJ0eVRvQXR0cmlidXRlKHByb3BlcnR5LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICB0aGlzLl9fc2VyaWFsaXppbmcgPSB0cnVlO1xuICAgICAgdmFsdWUgPSAoYXJndW1lbnRzLmxlbmd0aCA8IDMpID8gdGhpc1twcm9wZXJ0eV0gOiB2YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlVG9Ob2RlQXR0cmlidXRlKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyh0aGlzKSwgdmFsdWUsXG4gICAgICAgIGF0dHJpYnV0ZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwcm9wZXJ0eSkpO1xuICAgICAgdGhpcy5fX3NlcmlhbGl6aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHR5cGVkIHZhbHVlIHRvIGFuIEhUTUwgYXR0cmlidXRlIG9uIGEgbm9kZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbGxzIHRoZSBgX3NlcmlhbGl6ZVZhbHVlYCBtZXRob2QgdG8gY29udmVydCB0aGUgdHlwZWRcbiAgICAgKiB2YWx1ZSB0byBhIHN0cmluZy4gIElmIHRoZSBgX3NlcmlhbGl6ZVZhbHVlYCBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYCxcbiAgICAgKiB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCAodGhpcyBpcyB0aGUgZGVmYXVsdCBmb3IgYm9vbGVhblxuICAgICAqIHR5cGUgYGZhbHNlYCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBzZXQgYXR0cmlidXRlIHRvLlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgQXR0cmlidXRlIG5hbWUgdG8gc2VyaWFsaXplIHRvLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgX3ZhbHVlVG9Ob2RlQXR0cmlidXRlKG5vZGUsIHZhbHVlLCBhdHRyaWJ1dGUpIHtcbiAgICAgIGNvbnN0IHN0ciA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgIGlmIChzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBzdHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgdHlwZWQgSmF2YVNjcmlwdCB2YWx1ZSB0byBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHNldHRpbmcgSlMgcHJvcGVydHkgdmFsdWVzIHRvXG4gICAgICogSFRNTCBhdHRyaWJ1dGVzLiAgVXNlcnMgbWF5IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGVcbiAgICAgKiBzZXJpYWxpemF0aW9uIGZvciBjdXN0b20gdHlwZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFByb3BlcnR5IHZhbHVlIHRvIHNlcmlhbGl6ZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmcgfCB1bmRlZmluZWR9IFN0cmluZyBzZXJpYWxpemVkIGZyb20gdGhlIHByb3ZpZGVkXG4gICAgICogcHJvcGVydHkgIHZhbHVlLlxuICAgICAqL1xuICAgIF9zZXJpYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID8gJycgOiB1bmRlZmluZWQ7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyB2YWx1ZS50b1N0cmluZygpIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3RyaW5nIHRvIGEgdHlwZWQgSmF2YVNjcmlwdCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHJlYWRpbmcgSFRNTCBhdHRyaWJ1dGUgdmFsdWVzIHRvXG4gICAgICogSlMgcHJvcGVydGllcy4gIFVzZXJzIG1heSBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlXG4gICAgICogZGVzZXJpYWxpemF0aW9uIGZvciBjdXN0b20gYHR5cGVgcy4gVHlwZXMgZm9yIGBCb29sZWFuYCwgYFN0cmluZ2AsXG4gICAgICogYW5kIGBOdW1iZXJgIGNvbnZlcnQgYXR0cmlidXRlcyB0byB0aGUgZXhwZWN0ZWQgdHlwZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlIFZhbHVlIHRvIGRlc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSB7Kj19IHR5cGUgVHlwZSB0byBkZXNlcmlhbGl6ZSB0aGUgc3RyaW5nIHRvLlxuICAgICAqIEByZXR1cm4geyp9IFR5cGVkIHZhbHVlIGRlc2VyaWFsaXplZCBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gICAgICovXG4gICAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gbnVsbCk7XG4gICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBQcm9wZXJ0aWVzQ2hhbmdlZDtcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi4vdXRpbHMvYm9vdC5qcyc7XG5cbmltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tICcuLi91dGlscy9taXhpbi5qcyc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzQ2hhbmdlZCB9IGZyb20gJy4vcHJvcGVydGllcy1jaGFuZ2VkLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29weSBvZiBgcHJvcHNgIHdpdGggZWFjaCBwcm9wZXJ0eSBub3JtYWxpemVkIHN1Y2ggdGhhdFxuICogdXBncmFkZWQgaXQgaXMgYW4gb2JqZWN0IHdpdGggYXQgbGVhc3QgYSB0eXBlIHByb3BlcnR5IHsgdHlwZTogVHlwZX0uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BlcnRpZXMgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJuIHtPYmplY3R9IENvcHkgb2YgaW5wdXQgYHByb3BzYCB3aXRoIG5vcm1hbGl6ZWQgcHJvcGVydGllcyB0aGF0XG4gKiBhcmUgaW4gdGhlIGZvcm0ge3R5cGU6IFR5cGV9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0aWVzKHByb3BzKSB7XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuICBmb3IgKGxldCBwIGluIHByb3BzKSB7XG4gICAgY29uc3QgbyA9IHByb3BzW3BdO1xuICAgIG91dHB1dFtwXSA9ICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJykgPyB7dHlwZTogb30gOiBvO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogTWl4aW4gdGhhdCBwcm92aWRlcyBhIG1pbmltYWwgc3RhcnRpbmcgcG9pbnQgdG8gdXNpbmcgdGhlIFByb3BlcnRpZXNDaGFuZ2VkXG4gKiBtaXhpbiBieSBwcm92aWRpbmcgYSBtZWNoYW5pc20gdG8gZGVjbGFyZSBwcm9wZXJ0aWVzIGluIGEgc3RhdGljXG4gKiBnZXR0ZXIgKGUuZy4gc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkgeyByZXR1cm4geyBmb286IFN0cmluZyB9IH0pLiBDaGFuZ2VzXG4gKiBhcmUgcmVwb3J0ZWQgdmlhIHRoZSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBtZXRob2QuXG4gKlxuICogVGhpcyBtaXhpbiBwcm92aWRlcyBubyBzcGVjaWZpYyBzdXBwb3J0IGZvciByZW5kZXJpbmcuIFVzZXJzIGFyZSBleHBlY3RlZFxuICogdG8gY3JlYXRlIGEgU2hhZG93Um9vdCBhbmQgcHV0IGNvbnRlbnQgaW50byBpdCBhbmQgdXBkYXRlIGl0IGluIHdoYXRldmVyXG4gKiB3YXkgbWFrZXMgc2Vuc2UuIFRoaXMgY2FuIGJlIGRvbmUgaW4gcmVhY3Rpb24gdG8gcHJvcGVydGllcyBjaGFuZ2luZyBieVxuICogaW1wbGVtZW50aW5nIGBfcHJvcGVydGllc0NoYW5nZWRgLlxuICpcbiAqIEBtaXhpbkZ1bmN0aW9uXG4gKiBAcG9seW1lclxuICogQGFwcGxpZXNNaXhpbiBQcm9wZXJ0aWVzQ2hhbmdlZFxuICogQHN1bW1hcnkgTWl4aW4gdGhhdCBwcm92aWRlcyBhIG1pbmltYWwgc3RhcnRpbmcgcG9pbnQgZm9yIHVzaW5nXG4gKiB0aGUgUHJvcGVydGllc0NoYW5nZWQgbWl4aW4gYnkgcHJvdmlkaW5nIGEgZGVjbGFyYXRpdmUgYHByb3BlcnRpZXNgIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oc3VwZXJDbGFzcyA9PiB7XG5cbiAvKipcbiAgKiBAY29uc3RydWN0b3JcbiAgKiBAZXh0ZW5kcyB7c3VwZXJDbGFzc31cbiAgKiBAaW1wbGVtZW50cyB7UG9seW1lcl9Qcm9wZXJ0aWVzQ2hhbmdlZH1cbiAgKi9cbiBjb25zdCBiYXNlID0gUHJvcGVydGllc0NoYW5nZWQoc3VwZXJDbGFzcyk7XG5cbiAvKipcbiAgKiBSZXR1cm5zIHRoZSBzdXBlciBjbGFzcyBjb25zdHJ1Y3RvciBmb3IgdGhlIGdpdmVuIGNsYXNzLCBpZiBpdCBpcyBhblxuICAqIGluc3RhbmNlIG9mIHRoZSBQcm9wZXJ0aWVzTWl4aW4uXG4gICpcbiAgKiBAcGFyYW0geyFQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gY29uc3RydWN0b3IgUHJvcGVydGllc01peGluIGNvbnN0cnVjdG9yXG4gICogQHJldHVybiB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9IFN1cGVyIGNsYXNzIGNvbnN0cnVjdG9yXG4gICovXG4gZnVuY3Rpb24gc3VwZXJQcm9wZXJ0aWVzQ2xhc3MoY29uc3RydWN0b3IpIHtcbiAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG5cbiAgIC8vIE5vdGUsIHRoZSBgUHJvcGVydGllc01peGluYCBjbGFzcyBiZWxvdyBvbmx5IHJlZmVycyB0byB0aGUgY2xhc3NcbiAgIC8vIGdlbmVyYXRlZCBieSB0aGlzIGNhbGwgdG8gdGhlIG1peGluOyB0aGUgaW5zdGFuY2VvZiB0ZXN0IG9ubHkgd29ya3NcbiAgIC8vIGJlY2F1c2UgdGhlIG1peGluIGlzIGRlZHVwZWQgYW5kIGd1YXJhbnRlZWQgb25seSB0byBhcHBseSBvbmNlLCBoZW5jZVxuICAgLy8gYWxsIGNvbnN0cnVjdG9ycyBpbiBhIHByb3RvIGNoYWluIHdpbGwgc2VlIHRoZSBzYW1lIGBQcm9wZXJ0aWVzTWl4aW5gXG4gICByZXR1cm4gKHN1cGVyQ3Rvci5wcm90b3R5cGUgaW5zdGFuY2VvZiBQcm9wZXJ0aWVzTWl4aW4pID9cbiAgICAgLyoqIEB0eXBlIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gKi8gKHN1cGVyQ3RvcikgOiBudWxsO1xuIH1cblxuIC8qKlxuICAqIFJldHVybnMgYSBtZW1vaXplZCB2ZXJzaW9uIG9mIHRoZSBgcHJvcGVydGllc2Agb2JqZWN0IGZvciB0aGVcbiAgKiBnaXZlbiBjbGFzcy4gUHJvcGVydGllcyBub3QgaW4gb2JqZWN0IGZvcm1hdCBhcmUgY29udmVydGVkIHRvIGF0XG4gICogbGVhc3Qge3R5cGV9LlxuICAqXG4gICogQHBhcmFtIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gY29uc3RydWN0b3IgUHJvcGVydGllc01peGluIGNvbnN0cnVjdG9yXG4gICogQHJldHVybiB7T2JqZWN0fSBNZW1vaXplZCBwcm9wZXJ0aWVzIG9iamVjdFxuICAqL1xuIGZ1bmN0aW9uIG93blByb3BlcnRpZXMoY29uc3RydWN0b3IpIHtcbiAgIGlmICghY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX19vd25Qcm9wZXJ0aWVzJywgY29uc3RydWN0b3IpKSkge1xuICAgICBsZXQgcHJvcHMgPSBudWxsO1xuXG4gICAgIGlmIChjb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgY29uc3RydWN0b3IpKSAmJiBjb25zdHJ1Y3Rvci5wcm9wZXJ0aWVzKSB7XG4gICAgICAgcHJvcHMgPSBub3JtYWxpemVQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yLnByb3BlcnRpZXMpO1xuICAgICB9XG5cbiAgICAgY29uc3RydWN0b3IuX19vd25Qcm9wZXJ0aWVzID0gcHJvcHM7XG4gICB9XG4gICByZXR1cm4gY29uc3RydWN0b3IuX19vd25Qcm9wZXJ0aWVzO1xuIH1cblxuIC8qKlxuICAqIEBwb2x5bWVyXG4gICogQG1peGluQ2xhc3NcbiAgKiBAZXh0ZW5kcyB7YmFzZX1cbiAgKiBAaW1wbGVtZW50cyB7UG9seW1lcl9Qcm9wZXJ0aWVzTWl4aW59XG4gICogQHVucmVzdHJpY3RlZFxuICAqL1xuIGNsYXNzIFByb3BlcnRpZXNNaXhpbiBleHRlbmRzIGJhc2Uge1xuXG4gICAvKipcbiAgICAqIEltcGxlbWVudHMgc3RhbmRhcmQgY3VzdG9tIGVsZW1lbnRzIGdldHRlciB0byBvYnNlcnZlcyB0aGUgYXR0cmlidXRlc1xuICAgICogbGlzdGVkIGluIGBwcm9wZXJ0aWVzYC5cbiAgICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9IEludGVyZmFjZXMgaW4gY2xvc3VyZSBkbyBub3QgaW5oZXJpdCBzdGF0aWNzLCBidXQgY2xhc3NlcyBkb1xuICAgICovXG4gICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgY29uc3QgcHJvcHMgPSB0aGlzLl9wcm9wZXJ0aWVzO1xuICAgICByZXR1cm4gcHJvcHMgPyBPYmplY3Qua2V5cyhwcm9wcykubWFwKHAgPT4gdGhpcy5hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCkpIDogW107XG4gICB9XG5cbiAgIC8qKlxuICAgICogRmluYWxpemVzIGFuIGVsZW1lbnQgZGVmaW5pdGlvbiwgaW5jbHVkaW5nIGVuc3VyaW5nIGFueSBzdXBlciBjbGFzc2VzXG4gICAgKiBhcmUgYWxzbyBmaW5hbGl6ZWQuIFRoaXMgaW5jbHVkZXMgZW5zdXJpbmcgcHJvcGVydHlcbiAgICAqIGFjY2Vzc29ycyBleGlzdCBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUuIFRoaXMgbWV0aG9kIGNhbGxzXG4gICAgKiBgX2ZpbmFsaXplQ2xhc3NgIHRvIGZpbmFsaXplIGVhY2ggY29uc3RydWN0b3IgaW4gdGhlIHByb3RvdHlwZSBjaGFpbi5cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ19fZmluYWxpemVkJywgdGhpcykpKSB7XG4gICAgICAgY29uc3Qgc3VwZXJDdG9yID0gc3VwZXJQcm9wZXJ0aWVzQ2xhc3MoLyoqIEB0eXBlIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gKi8odGhpcykpO1xuICAgICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgICAgIH1cbiAgICAgICB0aGlzLl9fZmluYWxpemVkID0gdHJ1ZTtcbiAgICAgICB0aGlzLl9maW5hbGl6ZUNsYXNzKCk7XG4gICAgIH1cbiAgIH1cblxuICAgLyoqXG4gICAgKiBGaW5hbGl6ZSBhbiBlbGVtZW50IGNsYXNzLiBUaGlzIGluY2x1ZGVzIGVuc3VyaW5nIHByb3BlcnR5XG4gICAgKiBhY2Nlc3NvcnMgZXhpc3Qgb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnlcbiAgICAqIGBmaW5hbGl6ZWAgYW5kIGZpbmFsaXplcyB0aGUgY2xhc3MgY29uc3RydWN0b3IuXG4gICAgKlxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICBzdGF0aWMgX2ZpbmFsaXplQ2xhc3MoKSB7XG4gICAgIGNvbnN0IHByb3BzID0gb3duUHJvcGVydGllcygvKiogQHR5cGUge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSk7XG4gICAgIGlmIChwcm9wcykge1xuICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcyhwcm9wcyk7XG4gICAgIH1cbiAgIH1cblxuICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiBhbGwgcHJvcGVydGllcywgaW5jbHVkaW5nIHRob3NlIGluaGVyaXRlZFxuICAgICogZnJvbSBzdXBlciBjbGFzc2VzLiBQcm9wZXJ0aWVzIG5vdCBpbiBvYmplY3QgZm9ybWF0IGFyZSBjb252ZXJ0ZWQgdG9cbiAgICAqIGF0IGxlYXN0IHt0eXBlfS5cbiAgICAqXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgZm9yIHRoaXMgY2xhc3NcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgc3RhdGljIGdldCBfcHJvcGVydGllcygpIHtcbiAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KFxuICAgICAgIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ19fcHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IHN1cGVyUHJvcGVydGllc0NsYXNzKC8qKiBAdHlwZSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9ICovKHRoaXMpKTtcbiAgICAgICB0aGlzLl9fcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgICBzdXBlckN0b3IgJiYgc3VwZXJDdG9yLl9wcm9wZXJ0aWVzLFxuICAgICAgICAgb3duUHJvcGVydGllcygvKiogQHR5cGUge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSkpO1xuICAgICB9XG4gICAgIHJldHVybiB0aGlzLl9fcHJvcGVydGllcztcbiAgIH1cblxuICAgLyoqXG4gICAgKiBPdmVycmlkZXMgYFByb3BlcnRpZXNDaGFuZ2VkYCBtZXRob2QgdG8gcmV0dXJuIHR5cGUgc3BlY2lmaWVkIGluIHRoZVxuICAgICogc3RhdGljIGBwcm9wZXJ0aWVzYCBvYmplY3QgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgcHJvcGVydHlcbiAgICAqIEByZXR1cm4geyp9IFR5cGUgdG8gd2hpY2ggdG8gZGVzZXJpYWxpemUgYXR0cmlidXRlXG4gICAgKlxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICBzdGF0aWMgdHlwZUZvclByb3BlcnR5KG5hbWUpIHtcbiAgICAgY29uc3QgaW5mbyA9IHRoaXMuX3Byb3BlcnRpZXNbbmFtZV07XG4gICAgIHJldHVybiBpbmZvICYmIGluZm8udHlwZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBPdmVycmlkZXMgYFByb3BlcnRpZXNDaGFuZ2VkYCBtZXRob2QgYW5kIGFkZHMgYSBjYWxsIHRvXG4gICAgKiBgZmluYWxpemVgIHdoaWNoIGxhemlseSBjb25maWd1cmVzIHRoZSBlbGVtZW50J3MgcHJvcGVydHkgYWNjZXNzb3JzLlxuICAgICogQG92ZXJyaWRlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICBfaW5pdGlhbGl6ZVByb3BlcnRpZXMoKSB7XG4gICAgIHRoaXMuY29uc3RydWN0b3IuZmluYWxpemUoKTtcbiAgICAgc3VwZXIuX2luaXRpYWxpemVQcm9wZXJ0aWVzKCk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgYWRkZWQgdG8gYSBkb2N1bWVudC5cbiAgICAqIENhbGxzIGBfZW5hYmxlUHJvcGVydGllc2AgdG8gdHVybiBvbiBwcm9wZXJ0eSBzeXN0ZW0gZnJvbVxuICAgICogYFByb3BlcnRpZXNDaGFuZ2VkYC5cbiAgICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9IFN1cGVyIG1heSBvciBtYXkgbm90IGltcGxlbWVudCB0aGUgY2FsbGJhY2tcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICB9XG4gICAgIHRoaXMuX2VuYWJsZVByb3BlcnRpZXMoKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gYSBkb2N1bWVudFxuICAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc30gU3VwZXIgbWF5IG9yIG1heSBub3QgaW1wbGVtZW50IHRoZSBjYWxsYmFja1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgIGlmIChzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgIH1cbiAgIH1cblxuIH1cblxuIHJldHVybiBQcm9wZXJ0aWVzTWl4aW47XG5cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBudW1iZXIgb2Ygc3RyYXRlZ2llcyBmb3IgZW5xdWV1aW5nIGFzeW5jaHJvbm91c1xuICogdGFza3MuIEVhY2ggc3ViLW1vZHVsZSBwcm92aWRlcyBhIHN0YW5kYXJkIGBydW4oZm4pYCBpbnRlcmZhY2UgdGhhdCByZXR1cm5zIGFcbiAqIGhhbmRsZSwgYW5kIGEgYGNhbmNlbChoYW5kbGUpYCBpbnRlcmZhY2UgZm9yIGNhbmNlbGluZyBhc3luYyB0YXNrcyBiZWZvcmVcbiAqIHRoZXkgcnVuLlxuICpcbiAqIEBzdW1tYXJ5IE1vZHVsZSB0aGF0IHByb3ZpZGVzIGEgbnVtYmVyIG9mIHN0cmF0ZWdpZXMgZm9yIGVucXVldWluZ1xuICogYXN5bmNocm9ub3VzIHRhc2tzLlxuICovXG5cbmltcG9ydCAnLi9ib290LmpzJztcblxuLy8gTWljcm90YXNrIGltcGxlbWVudGVkIHVzaW5nIE11dGF0aW9uIE9ic2VydmVyXG5sZXQgbWljcm90YXNrQ3VyckhhbmRsZSA9IDA7XG5sZXQgbWljcm90YXNrTGFzdEhhbmRsZSA9IDA7XG5sZXQgbWljcm90YXNrQ2FsbGJhY2tzID0gW107XG5sZXQgbWljcm90YXNrTm9kZUNvbnRlbnQgPSAwO1xubGV0IG1pY3JvdGFza05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5uZXcgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIobWljcm90YXNrRmx1c2gpLm9ic2VydmUobWljcm90YXNrTm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcblxuZnVuY3Rpb24gbWljcm90YXNrRmx1c2goKSB7XG4gIGNvbnN0IGxlbiA9IG1pY3JvdGFza0NhbGxiYWNrcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBsZXQgY2IgPSBtaWNyb3Rhc2tDYWxsYmFja3NbaV07XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG1pY3JvdGFza0NhbGxiYWNrcy5zcGxpY2UoMCwgbGVuKTtcbiAgbWljcm90YXNrTGFzdEhhbmRsZSArPSBsZW47XG59XG5cbi8qKlxuICogQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAc3VtbWFyeSBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHNldFRpbWVvdXRgLlxuICovXG5jb25zdCB0aW1lT3V0ID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHN1Yi1tb2R1bGUgd2l0aCB0aGUgYXN5bmMgaW50ZXJmYWNlIHByb3ZpZGluZyB0aGUgcHJvdmlkZWRcbiAgICogZGVsYXkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiB0aW1lT3V0XG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGVsYXkgVGltZSB0byB3YWl0IGJlZm9yZSBjYWxsaW5nIGNhbGxiYWNrcyBpbiBtc1xuICAgKiBAcmV0dXJuIHshQXN5bmNJbnRlcmZhY2V9IEFuIGFzeW5jIHRpbWVvdXQgaW50ZXJmYWNlXG4gICAqL1xuICBhZnRlcihkZWxheSkge1xuICAgIHJldHVybiB7XG4gICAgICBydW4oZm4pIHsgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCBkZWxheSk7IH0sXG4gICAgICBjYW5jZWwoaGFuZGxlKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogRW5xdWV1ZXMgYSBmdW5jdGlvbiBjYWxsZWQgaW4gdGhlIG5leHQgdGFzay5cbiAgICpcbiAgICogQG1lbWJlcm9mIHRpbWVPdXRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGZuIENhbGxiYWNrIHRvIHJ1blxuICAgKiBAcGFyYW0ge251bWJlcj19IGRlbGF5IERlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhbmRsZSB1c2VkIGZvciBjYW5jZWxpbmcgdGFza1xuICAgKi9cbiAgcnVuKGZuLCBkZWxheSkge1xuICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmbiwgZGVsYXkpO1xuICB9LFxuICAvKipcbiAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgZW5xdWV1ZWQgYHRpbWVPdXRgIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgdGltZU91dFxuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlIEhhbmRsZSByZXR1cm5lZCBmcm9tIGBydW5gIG9mIGNhbGxiYWNrIHRvIGNhbmNlbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2FuY2VsKGhhbmRsZSkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgfVxufTtcbmV4cG9ydCB7dGltZU91dH07XG5cbi8qKlxuICogQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgLlxuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBzdW1tYXJ5IEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYC5cbiAqL1xuY29uc3QgYW5pbWF0aW9uRnJhbWUgPSB7XG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIGZ1bmN0aW9uIGNhbGxlZCBhdCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0aW1pbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBhbmltYXRpb25GcmFtZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKG51bWJlcik6dm9pZH0gZm4gQ2FsbGJhY2sgdG8gcnVuXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFuZGxlIHVzZWQgZm9yIGNhbmNlbGluZyB0YXNrXG4gICAqL1xuICBydW4oZm4pIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XG4gIH0sXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgcHJldmlvdXNseSBlbnF1ZXVlZCBgYW5pbWF0aW9uRnJhbWVgIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgYW5pbWF0aW9uRnJhbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZSBIYW5kbGUgcmV0dXJuZWQgZnJvbSBgcnVuYCBvZiBjYWxsYmFjayB0byBjYW5jZWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNhbmNlbChoYW5kbGUpIHtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgfVxufTtcbmV4cG9ydCB7YW5pbWF0aW9uRnJhbWV9O1xuXG4vKipcbiAqIEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgcmVxdWVzdElkbGVDYWxsYmFja2AuICBGYWxscyBiYWNrIHRvXG4gKiBgc2V0VGltZW91dGAgb24gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgcmVxdWVzdElkbGVDYWxsYmFja2AuXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHN1bW1hcnkgQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGByZXF1ZXN0SWRsZUNhbGxiYWNrYC5cbiAqL1xuY29uc3QgaWRsZVBlcmlvZCA9IHtcbiAgLyoqXG4gICAqIEVucXVldWVzIGEgZnVuY3Rpb24gY2FsbGVkIGF0IGByZXF1ZXN0SWRsZUNhbGxiYWNrYCB0aW1pbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBpZGxlUGVyaW9kXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUlkbGVEZWFkbGluZSk6dm9pZH0gZm4gQ2FsbGJhY2sgdG8gcnVuXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFuZGxlIHVzZWQgZm9yIGNhbmNlbGluZyB0YXNrXG4gICAqL1xuICBydW4oZm4pIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2sgP1xuICAgICAgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soZm4pIDpcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCAxNik7XG4gIH0sXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgcHJldmlvdXNseSBlbnF1ZXVlZCBgaWRsZVBlcmlvZGAgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiBpZGxlUGVyaW9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGUgSGFuZGxlIHJldHVybmVkIGZyb20gYHJ1bmAgb2YgY2FsbGJhY2sgdG8gY2FuY2VsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjYW5jZWwoaGFuZGxlKSB7XG4gICAgd2luZG93LmNhbmNlbElkbGVDYWxsYmFjayA/XG4gICAgICB3aW5kb3cuY2FuY2VsSWRsZUNhbGxiYWNrKGhhbmRsZSkgOlxuICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYW5kbGUpO1xuICB9XG59O1xuZXhwb3J0IHtpZGxlUGVyaW9kfTtcblxuLyoqXG4gKiBBc3luYyBpbnRlcmZhY2UgZm9yIGVucXVldWluZyBjYWxsYmFja3MgdGhhdCBydW4gYXQgbWljcm90YXNrIHRpbWluZy5cbiAqXG4gKiBOb3RlIHRoYXQgbWljcm90YXNrIHRpbWluZyBpcyBhY2hpZXZlZCB2aWEgYSBzaW5nbGUgYE11dGF0aW9uT2JzZXJ2ZXJgLFxuICogYW5kIHRodXMgY2FsbGJhY2tzIGVucXVldWVkIHdpdGggdGhpcyBBUEkgd2lsbCBhbGwgcnVuIGluIGEgc2luZ2xlXG4gKiBiYXRjaCwgYW5kIG5vdCBpbnRlcmxlYXZlZCB3aXRoIG90aGVyIG1pY3JvdGFza3Mgc3VjaCBhcyBwcm9taXNlcy5cbiAqIFByb21pc2VzIGFyZSBhdm9pZGVkIGFzIGFuIGltcGxlbWVudGF0aW9uIGNob2ljZSBmb3IgdGhlIHRpbWUgYmVpbmdcbiAqIGR1ZSB0byBTYWZhcmkgYnVncyB0aGF0IGNhdXNlIFByb21pc2VzIHRvIGxhY2sgbWljcm90YXNrIGd1YXJhbnRlZXMuXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHN1bW1hcnkgQXN5bmMgaW50ZXJmYWNlIGZvciBlbnF1ZXVpbmcgY2FsbGJhY2tzIHRoYXQgcnVuIGF0IG1pY3JvdGFza1xuICogICB0aW1pbmcuXG4gKi9cbmNvbnN0IG1pY3JvVGFzayA9IHtcblxuICAvKipcbiAgICogRW5xdWV1ZXMgYSBmdW5jdGlvbiBjYWxsZWQgYXQgbWljcm90YXNrIHRpbWluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1pY3JvVGFza1xuICAgKiBAcGFyYW0geyFGdW5jdGlvbj19IGNhbGxiYWNrIENhbGxiYWNrIHRvIHJ1blxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhbmRsZSB1c2VkIGZvciBjYW5jZWxpbmcgdGFza1xuICAgKi9cbiAgcnVuKGNhbGxiYWNrKSB7XG4gICAgbWljcm90YXNrTm9kZS50ZXh0Q29udGVudCA9IG1pY3JvdGFza05vZGVDb250ZW50Kys7XG4gICAgbWljcm90YXNrQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiBtaWNyb3Rhc2tDdXJySGFuZGxlKys7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IGVucXVldWVkIGBtaWNyb1Rhc2tgIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbWljcm9UYXNrXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGUgSGFuZGxlIHJldHVybmVkIGZyb20gYHJ1bmAgb2YgY2FsbGJhY2sgdG8gY2FuY2VsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjYW5jZWwoaGFuZGxlKSB7XG4gICAgY29uc3QgaWR4ID0gaGFuZGxlIC0gbWljcm90YXNrTGFzdEhhbmRsZTtcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGlmICghbWljcm90YXNrQ2FsbGJhY2tzW2lkeF0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFzeW5jIGhhbmRsZTogJyArIGhhbmRsZSk7XG4gICAgICB9XG4gICAgICBtaWNyb3Rhc2tDYWxsYmFja3NbaWR4XSA9IG51bGw7XG4gICAgfVxuICB9XG5cbn07XG5leHBvcnQge21pY3JvVGFza307XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHByb3ApIHsgcmV0dXJuIHByb3A7IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG5jb25zdCBjYXNlTWFwID0ge307XG5jb25zdCBEQVNIX1RPX0NBTUVMID0gLy1bYS16XS9nO1xuY29uc3QgQ0FNRUxfVE9fREFTSCA9IC8oW0EtWl0pL2c7XG5cbi8qKlxuICogTW9kdWxlIHdpdGggdXRpbGl0aWVzIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gXCJkYXNoLWNhc2VcIiBhbmQgXCJjYW1lbENhc2VcIlxuICogaWRlbnRpZmllcnMuXG4gKlxuICogQHN1bW1hcnkgTW9kdWxlIHRoYXQgcHJvdmlkZXMgdXRpbGl0aWVzIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gXCJkYXNoLWNhc2VcIlxuICogICBhbmQgXCJjYW1lbENhc2VcIi5cbiAqL1xuYFRPRE8obW9kdWxpemVyKTogQSBuYW1lc3BhY2UgbmFtZWQgUG9seW1lci5DYXNlTWFwIHdhc1xuZGVjbGFyZWQgaGVyZS4gVGhlIHN1cnJvdW5kaW5nIGNvbW1lbnRzIHNob3VsZCBiZSByZXZpZXdlZCxcbmFuZCB0aGlzIHN0cmluZyBjYW4gdGhlbiBiZSBkZWxldGVkYDtcblxuLyoqXG4gKiBDb252ZXJ0cyBcImRhc2gtY2FzZVwiIGlkZW50aWZpZXIgKGUuZy4gYGZvby1iYXItYmF6YCkgdG8gXCJjYW1lbENhc2VcIlxuICogKGUuZy4gYGZvb0JhckJhemApLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXNoIERhc2gtY2FzZSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IENhbWVsLWNhc2UgcmVwcmVzZW50YXRpb24gb2YgdGhlIGlkZW50aWZpZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsQ2FzZShkYXNoKSB7XG4gIHJldHVybiBjYXNlTWFwW2Rhc2hdIHx8IChcbiAgICBjYXNlTWFwW2Rhc2hdID0gZGFzaC5pbmRleE9mKCctJykgPCAwID8gZGFzaCA6IGRhc2gucmVwbGFjZShEQVNIX1RPX0NBTUVMLFxuICAgICAgKG0pID0+IG1bMV0udG9VcHBlckNhc2UoKVxuICAgIClcbiAgKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBcImNhbWVsQ2FzZVwiIGlkZW50aWZpZXIgKGUuZy4gYGZvb0JhckJhemApIHRvIFwiZGFzaC1jYXNlXCJcbiAqIChlLmcuIGBmb28tYmFyLWJhemApLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYW1lbCBDYW1lbC1jYXNlIGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gRGFzaC1jYXNlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpZGVudGlmaWVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaENhc2UoY2FtZWwpIHtcbiAgcmV0dXJuIGNhc2VNYXBbY2FtZWxdIHx8IChcbiAgICBjYXNlTWFwW2NhbWVsXSA9IGNhbWVsLnJlcGxhY2UoQ0FNRUxfVE9fREFTSCwgJy0kMScpLnRvTG93ZXJDYXNlKClcbiAgKTtcbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8vIHVuaXF1ZSBnbG9iYWwgaWQgZm9yIGRlZHVwaW5nIG1peGlucy5cbmxldCBkZWR1cGVJZCA9IDA7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIE1peGluRnVuY3Rpb24oKXt9XG4vKiogQHR5cGUgeyhXZWFrTWFwIHwgdW5kZWZpbmVkKX0gKi9cbk1peGluRnVuY3Rpb24ucHJvdG90eXBlLl9fbWl4aW5BcHBsaWNhdGlvbnM7XG4vKiogQHR5cGUgeyhPYmplY3QgfCB1bmRlZmluZWQpfSAqL1xuTWl4aW5GdW5jdGlvbi5wcm90b3R5cGUuX19taXhpblNldDtcblxuLyogZXNsaW50LWRpc2FibGUgdmFsaWQtanNkb2MgKi9cbi8qKlxuICogV3JhcHMgYW4gRVM2IGNsYXNzIGV4cHJlc3Npb24gbWl4aW4gc3VjaCB0aGF0IHRoZSBtaXhpbiBpcyBvbmx5IGFwcGxpZWRcbiAqIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFwcGxpZWQgaXRzIGJhc2UgYXJndW1lbnQuIEFsc28gbWVtb2l6ZXMgbWl4aW5cbiAqIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBtaXhpbiBFUzYgY2xhc3MgZXhwcmVzc2lvbiBtaXhpbiB0byB3cmFwXG4gKiBAcmV0dXJuIHtUfVxuICogQHN1cHByZXNzIHtpbnZhbGlkQ2FzdHN9XG4gKi9cbmV4cG9ydCBjb25zdCBkZWR1cGluZ01peGluID0gZnVuY3Rpb24obWl4aW4pIHtcbiAgbGV0IG1peGluQXBwbGljYXRpb25zID0gLyoqIEB0eXBlIHshTWl4aW5GdW5jdGlvbn0gKi8obWl4aW4pLl9fbWl4aW5BcHBsaWNhdGlvbnM7XG4gIGlmICghbWl4aW5BcHBsaWNhdGlvbnMpIHtcbiAgICBtaXhpbkFwcGxpY2F0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgLyoqIEB0eXBlIHshTWl4aW5GdW5jdGlvbn0gKi8obWl4aW4pLl9fbWl4aW5BcHBsaWNhdGlvbnMgPSBtaXhpbkFwcGxpY2F0aW9ucztcbiAgfVxuICAvLyBtYWludGFpbiBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBtaXhpblxuICBsZXQgbWl4aW5EZWR1cGVJZCA9IGRlZHVwZUlkKys7XG4gIGZ1bmN0aW9uIGRlZHVwaW5nTWl4aW4oYmFzZSkge1xuICAgIGxldCBiYXNlU2V0ID0gLyoqIEB0eXBlIHshTWl4aW5GdW5jdGlvbn0gKi8oYmFzZSkuX19taXhpblNldDtcbiAgICBpZiAoYmFzZVNldCAmJiBiYXNlU2V0W21peGluRGVkdXBlSWRdKSB7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG4gICAgbGV0IG1hcCA9IG1peGluQXBwbGljYXRpb25zO1xuICAgIGxldCBleHRlbmRlZCA9IG1hcC5nZXQoYmFzZSk7XG4gICAgaWYgKCFleHRlbmRlZCkge1xuICAgICAgZXh0ZW5kZWQgPSAvKiogQHR5cGUgeyFGdW5jdGlvbn0gKi8obWl4aW4pKGJhc2UpO1xuICAgICAgbWFwLnNldChiYXNlLCBleHRlbmRlZCk7XG4gICAgfVxuICAgIC8vIGNvcHkgaW5oZXJpdGVkIG1peGluIHNldCBmcm9tIHRoZSBleHRlbmRlZCBjbGFzcywgb3IgdGhlIGJhc2UgY2xhc3NcbiAgICAvLyBOT1RFOiB3ZSBhdm9pZCB1c2Ugb2YgU2V0IGhlcmUgYmVjYXVzZSBzb21lIGJyb3dzZXIgKElFMTEpXG4gICAgLy8gY2Fubm90IGV4dGVuZCBhIGJhc2UgU2V0IHZpYSB0aGUgY29uc3RydWN0b3IuXG4gICAgbGV0IG1peGluU2V0ID0gT2JqZWN0LmNyZWF0ZSgvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhleHRlbmRlZCkuX19taXhpblNldCB8fCBiYXNlU2V0IHx8IG51bGwpO1xuICAgIG1peGluU2V0W21peGluRGVkdXBlSWRdID0gdHJ1ZTtcbiAgICAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhleHRlbmRlZCkuX19taXhpblNldCA9IG1peGluU2V0O1xuICAgIHJldHVybiBleHRlbmRlZDtcbiAgfVxuXG4gIHJldHVybiAvKiogQHR5cGUge1R9ICovIChkZWR1cGluZ01peGluKTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIHZhbGlkLWpzZG9jICovXG4iLCJyZXF1aXJlKFwiISFCOlxcXFxHSVRcXFxcaGFzc2lvLWN1c3RvbS1jYXJkc1xcXFxub2RlX21vZHVsZXNcXFxcc2NyaXB0LWxvYWRlclxcXFxhZGRTY3JpcHQuanNcIikocmVxdWlyZShcIiEhQjpcXFxcR0lUXFxcXGhhc3Npby1jdXN0b20tY2FyZHNcXFxcbm9kZV9tb2R1bGVzXFxcXHJhdy1sb2FkZXJcXFxcaW5kZXguanMhQjpcXFxcR0lUXFxcXGhhc3Npby1jdXN0b20tY2FyZHNcXFxcbm9kZV9tb2R1bGVzXFxcXGNhbnZhcy1nYXVnZXNcXFxcZ2F1Z2UubWluLmpzXCIpKSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZVBhcnQsIGRlZmF1bHRQYXJ0Q2FsbGJhY2ssIG5vQ2hhbmdlLCBnZXRWYWx1ZSwgU1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuZXhwb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhIGxpdC1leHRlbmRlZCBIVE1MIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZXh0ZW5kZWRQYXJ0Q2FsbGJhY2spO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhIGxpdC1leHRlbmRlZCBTVkcgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZXh0ZW5kZWRQYXJ0Q2FsbGJhY2spO1xuLyoqXG4gKiBBIFBhcnRDYWxsYmFjayB3aGljaCBhbGxvd3MgdGVtcGxhdGVzIHRvIHNldCBwcm9wZXJ0aWVzIGFuZCBkZWNsYXJhdGl2ZVxuICogZXZlbnQgaGFuZGxlcnMuXG4gKlxuICogUHJvcGVydGllcyBhcmUgc2V0IGJ5IGRlZmF1bHQsIGluc3RlYWQgb2YgYXR0cmlidXRlcy4gQXR0cmlidXRlIG5hbWVzIGluXG4gKiBsaXQtaHRtbCB0ZW1wbGF0ZXMgcHJlc2VydmUgY2FzZSwgc28gcHJvcGVydGllcyBhcmUgY2FzZSBzZW5zaXRpdmUuIElmIGFuXG4gKiBleHByZXNzaW9uIHRha2VzIHVwIGFuIGVudGlyZSBhdHRyaWJ1dGUgdmFsdWUsIHRoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0b1xuICogdGhhdCB2YWx1ZS4gSWYgYW4gZXhwcmVzc2lvbiBpcyBpbnRlcnBvbGF0ZWQgd2l0aCBhIHN0cmluZyBvciBvdGhlclxuICogZXhwcmVzc2lvbnMgdGhlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvIHRoZSBzdHJpbmcgcmVzdWx0IG9mIHRoZVxuICogaW50ZXJwb2xhdGlvbi5cbiAqXG4gKiBUbyBzZXQgYW4gYXR0cmlidXRlIGluc3RlYWQgb2YgYSBwcm9wZXJ0eSwgYXBwZW5kIGEgYCRgIHN1ZmZpeCB0byB0aGVcbiAqIGF0dHJpYnV0ZSBuYW1lLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGh0bWxgPGJ1dHRvbiBjbGFzcyQ9XCJwcmltYXJ5XCI+QnV5IE5vdzwvYnV0dG9uPmBcbiAqXG4gKiBUbyBzZXQgYW4gZXZlbnQgaGFuZGxlciwgcHJlZml4IHRoZSBhdHRyaWJ1dGUgbmFtZSB3aXRoIGBvbi1gOlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGh0bWxgPGJ1dHRvbiBvbi1jbGljaz0keyhlKT0+IHRoaXMub25DbGlja0hhbmRsZXIoZSl9PkJ1eSBOb3c8L2J1dHRvbj5gXG4gKlxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kZWRQYXJ0Q2FsbGJhY2sgPSAoaW5zdGFuY2UsIHRlbXBsYXRlUGFydCwgbm9kZSkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gJ2F0dHJpYnV0ZScpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlUGFydC5yYXdOYW1lLnN1YnN0cigwLCAzKSA9PT0gJ29uLScpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHRlbXBsYXRlUGFydC5yYXdOYW1lLnNsaWNlKDMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFdmVudFBhcnQoaW5zdGFuY2UsIG5vZGUsIGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdENoYXIgPSB0ZW1wbGF0ZVBhcnQubmFtZS5zdWJzdHIodGVtcGxhdGVQYXJ0Lm5hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChsYXN0Q2hhciA9PT0gJyQnKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGVtcGxhdGVQYXJ0Lm5hbWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KGluc3RhbmNlLCBub2RlLCBuYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RDaGFyID09PSAnPycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZVBhcnQubmFtZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGluc3RhbmNlLCBub2RlLCBuYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQoaW5zdGFuY2UsIG5vZGUsIHRlbXBsYXRlUGFydC5yYXdOYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncyk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UGFydENhbGxiYWNrKGluc3RhbmNlLCB0ZW1wbGF0ZVBhcnQsIG5vZGUpO1xufTtcbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAyICYmIHNbMF0gPT09ICcnICYmIHNbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKHRoaXMsIHZhbHVlc1tzdGFydEluZGV4XSk7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm9vbGVhbiBhdHRyaWJ1dGVzIGNhbiBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIHNldFZhbHVlKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9lcXVhbFRvUHJldmlvdXNWYWx1ZXModmFsdWVzLCBzdGFydEluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMiAmJiBzWzBdID09PSAnJyAmJiBzWzFdID09PSAnJykge1xuICAgICAgICAgICAgLy8gQW4gZXhwcmVzc2lvbiB0aGF0IG9jY3VwaWVzIHRoZSB3aG9sZSBhdHRyaWJ1dGUgdmFsdWUgd2lsbCBsZWF2ZVxuICAgICAgICAgICAgLy8gbGVhZGluZyBhbmQgdHJhaWxpbmcgZW1wdHkgc3RyaW5ncy5cbiAgICAgICAgICAgIHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24sIHNvIGludGVycG9sYXRlXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX2ludGVycG9sYXRlKHZhbHVlcywgc3RhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gZ2V0VmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICBpZiAobGlzdGVuZXIgPT09IHRoaXMuX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9saXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9saXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIuY2FsbCh0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5fbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1leHRlbmRlZC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBpc1RlbXBsYXRlUGFydEFjdGl2ZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmNvbnN0IHdhbGtlck5vZGVGaWx0ZXIgPSBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHxcbiAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVDtcbi8qKlxuICogUmVtb3ZlcyB0aGUgbGlzdCBvZiBub2RlcyBmcm9tIGEgVGVtcGxhdGUgc2FmZWx5LiBJbiBhZGRpdGlvbiB0byByZW1vdmluZ1xuICogbm9kZXMgZnJvbSB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZSBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2hcbiAqIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqXG4gKiBBcyB0aGUgdGVtcGxhdGUgaXMgd2Fsa2VkIHRoZSByZW1vdmFsIHN0YXRlIGlzIHRyYWNrZWQgYW5kXG4gKiBwYXJ0IGluZGljZXMgYXJlIGFkanVzdGVkIGFzIG5lZWRlZC5cbiAqXG4gKiBkaXZcbiAqICAgZGl2IzEgKHJlbW92ZSkgPC0tIHN0YXJ0IHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIGRpdiMxKVxuICogICAgIGRpdlxuICogICAgICAgZGl2IzIgKHJlbW92ZSkgIDwtLSBjb250aW51ZSByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBzdGlsbCBkaXYjMSlcbiAqICAgICAgICAgZGl2XG4gKiBkaXYgPC0tIHN0b3AgcmVtb3Zpbmcgc2luY2UgcHJldmlvdXMgc2libGluZyBpcyB0aGUgcmVtb3Zpbmcgbm9kZSAoZGl2IzEsIHJlbW92ZWQgNCBub2RlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSwgcGFydHMgfSA9IHRlbXBsYXRlO1xuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBwYXJ0ID0gcGFydHNbMF07XG4gICAgbGV0IG5vZGVJbmRleCA9IC0xO1xuICAgIGxldCByZW1vdmVDb3VudCA9IDA7XG4gICAgY29uc3Qgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUgPSBbXTtcbiAgICBsZXQgY3VycmVudFJlbW92aW5nTm9kZSA9IG51bGw7XG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuICAgICAgICAvLyBFbmQgcmVtb3ZhbCBpZiBzdGVwcGVkIHBhc3QgdGhlIHJlbW92aW5nIG5vZGVcbiAgICAgICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBjdXJyZW50UmVtb3ZpbmdOb2RlKSB7XG4gICAgICAgICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIG5vZGUgdG8gcmVtb3ZlIHdhcyBmb3VuZCBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgaWYgKG5vZGVzVG9SZW1vdmUuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgLy8gVHJhY2sgbm9kZSB3ZSdyZSByZW1vdmluZ1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHJlbW92aW5nLCBpbmNyZW1lbnQgY291bnQgYnkgd2hpY2ggdG8gYWRqdXN0IHN1YnNlcXVlbnQgcGFydCBpbmRpY2VzXG4gICAgICAgIGlmIChjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChwYXJ0ICE9PSB1bmRlZmluZWQgJiYgcGFydC5pbmRleCA9PT0gbm9kZUluZGV4KSB7XG4gICAgICAgICAgICAvLyBJZiBwYXJ0IGlzIGluIGEgcmVtb3ZlZCBub2RlIGRlYWN0aXZhdGUgaXQgYnkgc2V0dGluZyBpbmRleCB0byAtMSBvclxuICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBpbmRleCBhcyBuZWVkZWQuXG4gICAgICAgICAgICBwYXJ0LmluZGV4ID0gY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCA/IC0xIDogcGFydC5pbmRleCAtIHJlbW92ZUNvdW50O1xuICAgICAgICAgICAgcGFydCA9IHBhcnRzWysrcGFydEluZGV4XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5mb3JFYWNoKChuKSA9PiBuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobikpO1xufVxuY29uc3QgY291bnROb2RlcyA9IChub2RlKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMTtcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xufTtcbmNvbnN0IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyA9IChwYXJ0cywgc3RhcnRJbmRleCA9IC0xKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggKyAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICBpZiAoaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG4vKipcbiAqIEluc2VydHMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIG9wdGlvbmFsbHkgYmVmb3JlIHRoZSBnaXZlblxuICogcmVmTm9kZS4gSW4gYWRkaXRpb24gdG8gaW5zZXJ0aW5nIHRoZSBub2RlIGludG8gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGVcbiAqIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaCB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROb2RlSW50b1RlbXBsYXRlKHRlbXBsYXRlLCBub2RlLCByZWZOb2RlID0gbnVsbCkge1xuICAgIGNvbnN0IHsgZWxlbWVudDogeyBjb250ZW50IH0sIHBhcnRzIH0gPSB0ZW1wbGF0ZTtcbiAgICAvLyBJZiB0aGVyZSdzIG5vIHJlZk5vZGUsIHRoZW4gcHV0IG5vZGUgYXQgZW5kIG9mIHRlbXBsYXRlLlxuICAgIC8vIE5vIHBhcnQgaW5kaWNlcyBuZWVkIHRvIGJlIHNoaWZ0ZWQgaW4gdGhpcyBjYXNlLlxuICAgIGlmIChyZWZOb2RlID09PSBudWxsIHx8IHJlZk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICAgIGxldCBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMpO1xuICAgIGxldCBpbnNlcnRDb3VudCA9IDA7XG4gICAgbGV0IHdhbGtlckluZGV4ID0gLTE7XG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIHdhbGtlckluZGV4Kys7XG4gICAgICAgIGNvbnN0IHdhbGtlck5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG4gICAgICAgIGlmICh3YWxrZXJOb2RlID09PSByZWZOb2RlKSB7XG4gICAgICAgICAgICByZWZOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZk5vZGUpO1xuICAgICAgICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xICYmIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggPT09IHdhbGtlckluZGV4KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBpbnNlcnRlZCB0aGUgbm9kZSwgc2ltcGx5IGFkanVzdCBhbGwgc3Vic2VxdWVudCBwYXJ0c1xuICAgICAgICAgICAgaWYgKGluc2VydENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggKz0gaW5zZXJ0Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kaWZ5LXRlbXBsYXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IHJlbW92ZU5vZGVzLCBUZW1wbGF0ZSwgdGVtcGxhdGVDYWNoZXMsIFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5pbXBvcnQgeyBpbnNlcnROb2RlSW50b1RlbXBsYXRlLCByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSB9IGZyb20gJy4vbW9kaWZ5LXRlbXBsYXRlLmpzJztcbmV4cG9ydCB7IGh0bWwsIHN2ZywgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG4vLyBHZXQgYSBrZXkgdG8gbG9va3VwIGluIGB0ZW1wbGF0ZUNhY2hlc2AuXG5jb25zdCBnZXRUZW1wbGF0ZUNhY2hlS2V5ID0gKHR5cGUsIHNjb3BlTmFtZSkgPT4gYCR7dHlwZX0tLSR7c2NvcGVOYW1lfWA7XG4vKipcbiAqIFRlbXBsYXRlIGZhY3Rvcnkgd2hpY2ggc2NvcGVzIHRlbXBsYXRlIERPTSB1c2luZyBTaGFkeUNTUy5cbiAqIEBwYXJhbSBzY29wZU5hbWUge3N0cmluZ31cbiAqL1xuY29uc3Qgc2hhZHlUZW1wbGF0ZUZhY3RvcnkgPSAoc2NvcGVOYW1lKSA9PiAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVEb20oZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIGVsZW1lbnQpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuY29uc3QgVEVNUExBVEVfVFlQRVMgPSBbJ2h0bWwnLCAnc3ZnJ107XG4vKipcbiAqIFJlbW92ZXMgYWxsIHN0eWxlIGVsZW1lbnRzIGZyb20gVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gc2NvcGVOYW1lLlxuICovXG5mdW5jdGlvbiByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZSkge1xuICAgIFRFTVBMQVRFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVzID0gdGVtcGxhdGVDYWNoZXMuZ2V0KGdldFRlbXBsYXRlQ2FjaGVLZXkodHlwZSwgc2NvcGVOYW1lKSk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSB9ID0gdGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBuZXcgU2V0KEFycmF5LmZyb20oc3R5bGVzKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmNvbnN0IHNoYWR5UmVuZGVyU2V0ID0gbmV3IFNldCgpO1xuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIHNjb3BlIG5hbWUsIGVuc3VyZXMgdGhhdCBTaGFkeUNTUyBzdHlsZSBzY29waW5nIGlzIHBlcmZvcm1lZC5cbiAqIFRoaXMgaXMgZG9uZSBqdXN0IG9uY2UgcGVyIHNjb3BlIG5hbWUgc28gdGhlIGZyYWdtZW50IGFuZCB0ZW1wbGF0ZSBjYW5ub3RcbiAqIGJlIG1vZGlmaWVkLlxuICogKDEpIGV4dHJhY3RzIHN0eWxlcyBmcm9tIHRoZSByZW5kZXJlZCBmcmFnbWVudCBhbmQgaGFuZHMgdGhlbSB0byBTaGFkeUNTU1xuICogdG8gYmUgc2NvcGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnRcbiAqICgyKSByZW1vdmVzIHN0eWxlIGVsZW1lbnRzIGZyb20gYWxsIGxpdC1odG1sIFRlbXBsYXRlcyBmb3IgdGhpcyBzY29wZSBuYW1lLlxuICpcbiAqIE5vdGUsIDxzdHlsZT4gZWxlbWVudHMgY2FuIG9ubHkgYmUgcGxhY2VkIGludG8gdGVtcGxhdGVzIGZvciB0aGVcbiAqIGluaXRpYWwgcmVuZGVyaW5nIG9mIHRoZSBzY29wZS4gSWYgPHN0eWxlPiBlbGVtZW50cyBhcmUgaW5jbHVkZWQgaW4gdGVtcGxhdGVzXG4gKiBkeW5hbWljYWxseSByZW5kZXJlZCB0byB0aGUgc2NvcGUgKGFmdGVyIHRoZSBmaXJzdCBzY29wZSByZW5kZXIpLCB0aGV5IHdpbGxcbiAqIG5vdCBiZSBzY29wZWQgYW5kIHRoZSA8c3R5bGU+IHdpbGwgYmUgbGVmdCBpbiB0aGUgdGVtcGxhdGUgYW5kIHJlbmRlcmVkIG91dHB1dC5cbiAqL1xuY29uc3QgZW5zdXJlU3R5bGVzU2NvcGVkID0gKGZyYWdtZW50LCB0ZW1wbGF0ZSwgc2NvcGVOYW1lKSA9PiB7XG4gICAgLy8gb25seSBzY29wZSBlbGVtZW50IHRlbXBsYXRlIG9uY2UgcGVyIHNjb3BlIG5hbWVcbiAgICBpZiAoIXNoYWR5UmVuZGVyU2V0LmhhcyhzY29wZU5hbWUpKSB7XG4gICAgICAgIHNoYWR5UmVuZGVyU2V0LmFkZChzY29wZU5hbWUpO1xuICAgICAgICBjb25zdCBzdHlsZVRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgQXJyYXkuZnJvbShmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgICAgICBzdHlsZVRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlU3R5bGVzKHN0eWxlVGVtcGxhdGUsIHNjb3BlTmFtZSk7XG4gICAgICAgIC8vIEZpeCB0ZW1wbGF0ZXM6IG5vdGUgdGhlIGV4cGVjdGF0aW9uIGhlcmUgaXMgdGhhdCB0aGUgZ2l2ZW4gYGZyYWdtZW50YFxuICAgICAgICAvLyBoYXMgYmVlbiBnZW5lcmF0ZWQgZnJvbSB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCB3aGljaCBjb250YWluc1xuICAgICAgICAvLyB0aGUgc2V0IG9mIHRlbXBsYXRlcyByZW5kZXJlZCBpbnRvIHRoaXMgc2NvcGUuXG4gICAgICAgIC8vIEl0IGlzIG9ubHkgZnJvbSB0aGlzIHNldCBvZiBpbml0aWFsIHRlbXBsYXRlcyBmcm9tIHdoaWNoIHN0eWxlc1xuICAgICAgICAvLyB3aWxsIGJlIHNjb3BlZCBhbmQgcmVtb3ZlZC5cbiAgICAgICAgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyhzY29wZU5hbWUpO1xuICAgICAgICAvLyBBcHBseVNoaW0gY2FzZVxuICAgICAgICBpZiAod2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3R5bGUnKTtcbiAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIEluc2VydCBzdHlsZSBpbnRvIHJlbmRlcmVkIGZyYWdtZW50XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBmcmFnbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgaW50byBsaXQtdGVtcGxhdGUgKGZvciBzdWJzZXF1ZW50IHJlbmRlcnMpXG4gICAgICAgICAgICAgICAgaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSh0ZW1wbGF0ZSwgc3R5bGUuY2xvbmVOb2RlKHRydWUpLCB0ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gTk9URTogV2UncmUgY29weWluZyBjb2RlIGZyb20gbGl0LWh0bWwncyBgcmVuZGVyYCBtZXRob2QgaGVyZS5cbi8vIFdlJ3JlIGRvaW5nIHRoaXMgZXhwbGljaXRseSBiZWNhdXNlIHRoZSBBUEkgZm9yIHJlbmRlcmluZyB0ZW1wbGF0ZXMgaXMgbGlrZWx5XG4vLyB0byBjaGFuZ2UgaW4gdGhlIG5lYXIgdGVybS5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIocmVzdWx0LCBjb250YWluZXIsIHNjb3BlTmFtZSkge1xuICAgIGNvbnN0IHRlbXBsYXRlRmFjdG9yeSA9IHNoYWR5VGVtcGxhdGVGYWN0b3J5KHNjb3BlTmFtZSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0KTtcbiAgICBsZXQgaW5zdGFuY2UgPSBjb250YWluZXIuX190ZW1wbGF0ZUluc3RhbmNlO1xuICAgIC8vIFJlcGVhdCByZW5kZXIsIGp1c3QgY2FsbCB1cGRhdGUoKVxuICAgIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkICYmIGluc3RhbmNlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSAmJlxuICAgICAgICBpbnN0YW5jZS5fcGFydENhbGxiYWNrID09PSByZXN1bHQucGFydENhbGxiYWNrKSB7XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZShyZXN1bHQudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaXJzdCByZW5kZXIsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZUluc3RhbmNlIGFuZCBhcHBlbmQgaXRcbiAgICBpbnN0YW5jZSA9XG4gICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCByZXN1bHQucGFydENhbGxiYWNrLCB0ZW1wbGF0ZUZhY3RvcnkpO1xuICAgIGNvbnRhaW5lci5fX3RlbXBsYXRlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgIGluc3RhbmNlLnVwZGF0ZShyZXN1bHQudmFsdWVzKTtcbiAgICBjb25zdCBob3N0ID0gY29udGFpbmVyIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/XG4gICAgICAgIGNvbnRhaW5lci5ob3N0IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIC8vIElmIHRoZXJlJ3MgYSBzaGFkb3cgaG9zdCwgZG8gU2hhZHlDU1Mgc2NvcGluZy4uLlxuICAgIGlmIChob3N0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZW5zdXJlU3R5bGVzU2NvcGVkKGZyYWdtZW50LCB0ZW1wbGF0ZSwgc2NvcGVOYW1lKTtcbiAgICAgICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlRWxlbWVudChob3N0KTtcbiAgICB9XG4gICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoYWR5LXJlbmRlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vLyBUaGUgZmlyc3QgYXJndW1lbnQgdG8gSlMgdGVtcGxhdGUgdGFncyByZXRhaW4gaWRlbnRpdHkgYWNyb3NzIG11bHRpcGxlXG4vLyBjYWxscyB0byBhIHRhZyBmb3IgdGhlIHNhbWUgbGl0ZXJhbCwgc28gd2UgY2FuIGNhY2hlIHdvcmsgZG9uZSBwZXIgbGl0ZXJhbFxuLy8gaW4gYSBNYXAuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYWNoZXMgPSBuZXcgTWFwKCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJyk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJyk7XG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHN0cmluZ3MsIHZhbHVlcywgdHlwZSwgcGFydENhbGxiYWNrID0gZGVmYXVsdFBhcnRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wYXJ0Q2FsbGJhY2sgPSBwYXJ0Q2FsbGJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIDx0ZW1wbGF0ZT4gZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRIVE1MKCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICAgIGxldCBpc1RleHRCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAgICAgICBodG1sICs9IHM7XG4gICAgICAgICAgICAvLyBXZSdyZSBpbiBhIHRleHQgcG9zaXRpb24gaWYgdGhlIHByZXZpb3VzIHN0cmluZyBjbG9zZWQgaXRzIHRhZ3MuXG4gICAgICAgICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgYW55IHRhZ3MsIHRoZW4gd2UgdXNlIHRoZSBwcmV2aW91cyB0ZXh0IHBvc2l0aW9uXG4gICAgICAgICAgICAvLyBzdGF0ZS5cbiAgICAgICAgICAgIGNvbnN0IGNsb3NpbmcgPSBmaW5kVGFnQ2xvc2Uocyk7XG4gICAgICAgICAgICBpc1RleHRCaW5kaW5nID0gY2xvc2luZyA+IC0xID8gY2xvc2luZyA8IHMubGVuZ3RoIDogaXNUZXh0QmluZGluZztcbiAgICAgICAgICAgIGh0bWwgKz0gaXNUZXh0QmluZGluZyA/IG5vZGVNYXJrZXIgOiBtYXJrZXI7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSB0aGlzLnN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1sIGluIGFuIDxzdmc+IHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIDxzdmc+IHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgZ2V0SFRNTCgpIHtcbiAgICAgICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzdXBlci5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgICAgIHJlcGFyZW50Tm9kZXMoY29udGVudCwgc3ZnRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRUZW1wbGF0ZUZhY3RvcnkocmVzdWx0KSB7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocmVzdWx0LnR5cGUpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuLyoqXG4gKiBSZW5kZXJzIGEgdGVtcGxhdGUgdG8gYSBjb250YWluZXIuXG4gKlxuICogVG8gdXBkYXRlIGEgY29udGFpbmVyIHdpdGggbmV3IHZhbHVlcywgcmVldmFsdWF0ZSB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBhbmRcbiAqIGNhbGwgYHJlbmRlcmAgd2l0aCB0aGUgbmV3IHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gcmVzdWx0IGEgVGVtcGxhdGVSZXN1bHQgY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnIGxpa2VcbiAqICAgICBgaHRtbGAgb3IgYHN2Z2AuXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIHBhcmVudCB0byByZW5kZXIgdG8uIFRoZSBlbnRpcmUgY29udGVudHMgYXJlIGVpdGhlclxuICogICAgIHJlcGxhY2VkLCBvciBlZmZpY2llbnRseSB1cGRhdGVkIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhcyBwcmV2aW91c1xuICogICAgIHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFRlbXBsYXRlIG9yIHJldHJlaXZlIG9uZSBmcm9tXG4gKiAgICAgY2FjaGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIocmVzdWx0LCBjb250YWluZXIsIHRlbXBsYXRlRmFjdG9yeSA9IGRlZmF1bHRUZW1wbGF0ZUZhY3RvcnkpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpO1xuICAgIGxldCBpbnN0YW5jZSA9IGNvbnRhaW5lci5fX3RlbXBsYXRlSW5zdGFuY2U7XG4gICAgLy8gUmVwZWF0IHJlbmRlciwganVzdCBjYWxsIHVwZGF0ZSgpXG4gICAgaWYgKGluc3RhbmNlICE9PSB1bmRlZmluZWQgJiYgaW5zdGFuY2UudGVtcGxhdGUgPT09IHRlbXBsYXRlICYmXG4gICAgICAgIGluc3RhbmNlLl9wYXJ0Q2FsbGJhY2sgPT09IHJlc3VsdC5wYXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZpcnN0IHJlbmRlciwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlSW5zdGFuY2UgYW5kIGFwcGVuZCBpdFxuICAgIGluc3RhbmNlID1cbiAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHJlc3VsdC5wYXJ0Q2FsbGJhY2ssIHRlbXBsYXRlRmFjdG9yeSk7XG4gICAgY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHdpdGggZW1iZWRkZWQgdW5pcXVlIGtleSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aFxuICogcG9zc2libGUgdGV4dCBpbiB0ZW1wbGF0ZXMuXG4gKi9cbmNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG5vdCBhdHRyaWJ1dGUgcG9zaXRpb25zLFxuICogaW4gdGVtcGxhdGUuXG4gKi9cbmNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5jb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG4vKipcbiAqIFRoaXMgcmVnZXggZXh0cmFjdHMgdGhlIGF0dHJpYnV0ZSBuYW1lIHByZWNlZGluZyBhbiBhdHRyaWJ1dGUtcG9zaXRpb25cbiAqIGV4cHJlc3Npb24uIEl0IGRvZXMgdGhpcyBieSBtYXRjaGluZyB0aGUgc3ludGF4IGFsbG93ZWQgZm9yIGF0dHJpYnV0ZXNcbiAqIGFnYWluc3QgdGhlIHN0cmluZyBsaXRlcmFsIGRpcmVjdGx5IHByZWNlZGluZyB0aGUgZXhwcmVzc2lvbiwgYXNzdW1pbmcgdGhhdFxuICogdGhlIGV4cHJlc3Npb24gaXMgaW4gYW4gYXR0cmlidXRlLXZhbHVlIHBvc2l0aW9uLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0wXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVyc1xuICpcbiAqIFwiIFxceDA5XFx4MGFcXHgwY1xceDBkXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI3NwYWNlLWNoYXJhY3RlclxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPSAvWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0oW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJz49L10rKVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKj1bIFxceDA5XFx4MGFcXHgwY1xceDBkXSooPzpbXiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJ2A8Pj1dKnxcIlteXCJdKnwnW14nXSopJC87XG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zaW5nIGluZGV4IG9mIHRoZSBsYXN0IGNsb3NlZCBIVE1MIHRhZy5cbiAqIFRoaXMgaGFzIDMgcG9zc2libGUgcmV0dXJuIHZhbHVlczpcbiAqICAgLSBgLTFgLCBtZWFuaW5nIHRoZXJlIGlzIG5vIHRhZyBpbiBzdHIuXG4gKiAgIC0gYHN0cmluZy5sZW5ndGhgLCBtZWFuaW5nIHRoZSBsYXN0IG9wZW5lZCB0YWcgaXMgdW5jbG9zZWQuXG4gKiAgIC0gU29tZSBwb3NpdGl2ZSBudW1iZXIgPCBzdHIubGVuZ3RoLCBtZWFuaW5nIHRoZSBpbmRleCBvZiB0aGUgY2xvc2luZyAnPicuXG4gKi9cbmZ1bmN0aW9uIGZpbmRUYWdDbG9zZShzdHIpIHtcbiAgICBjb25zdCBjbG9zZSA9IHN0ci5sYXN0SW5kZXhPZignPicpO1xuICAgIGNvbnN0IG9wZW4gPSBzdHIuaW5kZXhPZignPCcsIGNsb3NlICsgMSk7XG4gICAgcmV0dXJuIG9wZW4gPiAtMSA/IHN0ci5sZW5ndGggOiBjbG9zZTtcbn1cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBpbmRleCwgbmFtZSwgcmF3TmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucmF3TmFtZSA9IHJhd05hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVQYXJ0QWN0aXZlID0gKHBhcnQpID0+IHBhcnQuaW5kZXggIT09IC0xO1xuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKHJlc3VsdCwgZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuY29udGVudDtcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfFxuICAgICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQgKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBub2Rlc1RvUmVtb3ZlID0gW107XG4gICAgICAgIC8vIFRoZSBhY3R1YWwgcHJldmlvdXMgbm9kZSwgYWNjb3VudGluZyBmb3IgcmVtb3ZhbHM6IGlmIGEgbm9kZSBpcyByZW1vdmVkXG4gICAgICAgIC8vIGl0IHdpbGwgbmV2ZXIgYmUgdGhlIHByZXZpb3VzTm9kZS5cbiAgICAgICAgbGV0IHByZXZpb3VzTm9kZTtcbiAgICAgICAgLy8gVXNlZCB0byBzZXQgcHJldmlvdXNOb2RlIGF0IHRoZSB0b3Agb2YgdGhlIGxvb3AuXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY3VycmVudE5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgLy8gUGVyIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuIEluXG4gICAgICAgICAgICAgICAgLy8gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3QgYXNzdW1lXG4gICAgICAgICAgICAgICAgLy8gYSBjb3JyZXNwb25kYW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGb3JQYXJ0ID0gcmVzdWx0LnN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZUluUGFydCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KVsxXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIG5vbi1udWxsIGFzc2VydGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShhdHRyaWJ1dGVOYW1lSW5QYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nc0ZvckF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKG5ldyBUZW1wbGF0ZVBhcnQoJ2F0dHJpYnV0ZScsIGluZGV4LCBhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlTmFtZUluUGFydCwgc3RyaW5nc0ZvckF0dHJpYnV0ZVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IHN0cmluZ3NGb3JBdHRyaWJ1dGVWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSBub2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZVZhbHVlLmluZGV4T2YobWFya2VyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKChzdHJpbmdzW2ldID09PSAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tpXSksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnbm9kZScsIGluZGV4KyspKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnID9cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykgOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHJpbmdzW2xhc3RJbmRleF0pLCBub2RlKTtcbiAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovICYmXG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAgICAgICAvLyAgKiBwcmV2aW91c1NpYmxpbmcgaXMgYmVpbmcgcmVtb3ZlZCAodGh1cyBpdCdzIG5vdCB0aGVcbiAgICAgICAgICAgICAgICAvLyAgICBgcHJldmlvdXNOb2RlYClcbiAgICAgICAgICAgICAgICAvLyAgKiBwcmV2aW91c1NpYmxpbmcgaXMgbm90IGEgVGV4dCBub2RlXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBXZSBzaG91bGQgYmUgYWJsZSB0byB1c2UgdGhlIHByZXZpb3VzTm9kZSBoZXJlXG4gICAgICAgICAgICAgICAgLy8gYXMgdGhlIG1hcmtlciBub2RlIGFuZCByZWR1Y2UgdGhlIG51bWJlciBvZiBleHRyYSBub2RlcyB3ZSBhZGQgdG8gYVxuICAgICAgICAgICAgICAgIC8vIHRlbXBsYXRlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJMYWJzL2xpdC1odG1sL2lzc3Vlcy8xNDdcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBub2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IHByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNOb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzU2libGluZy5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnbm9kZScsIGluZGV4KyspKTtcbiAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nIGFkZCBhIG1hcmtlciBub2RlLlxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gY2hlY2sgaWYgdGhlIG5leHQgbm9kZSBpcyBnb2luZyB0byBiZSByZW1vdmVkLFxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCBub2RlIHdpbGwgaW5kdWNlIGEgbmV3IG1hcmtlciBpZiBzby5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gcHJldmlvdXNOb2RlO1xuICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogUmV0dXJucyBhIHZhbHVlIHJlYWR5IHRvIGJlIGluc2VydGVkIGludG8gYSBQYXJ0IGZyb20gYSB1c2VyLXByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIElmIHRoZSB1c2VyIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCB0aGlzIGludm9rZXMgdGhlIGRpcmVjdGl2ZSB3aXRoIHRoZSBnaXZlblxuICogcGFydC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIGl0J3MgY29udmVydGVkIHRvIHVuZGVmaW5lZCB0byB3b3JrIGJldHRlclxuICogd2l0aCBjZXJ0YWluIERPTSBBUElzLCBsaWtlIHRleHRDb250ZW50LlxuICovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWUgPSAocGFydCwgdmFsdWUpID0+IHtcbiAgICAvLyBgbnVsbGAgYXMgdGhlIHZhbHVlIG9mIGEgVGV4dCBub2RlIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgJ251bGwnXG4gICAgLy8gc28gd2UgY29udmVydCBpdCB0byB1bmRlZmluZWRcbiAgICBpZiAoaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUocGFydCk7XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gdW5kZWZpbmVkIDogdmFsdWU7XG59O1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiB7XG4gICAgZi5fX2xpdERpcmVjdGl2ZSA9IHRydWU7XG4gICAgcmV0dXJuIGY7XG59O1xuY29uc3QgaXNEaXJlY3RpdmUgPSAobykgPT4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgby5fX2xpdERpcmVjdGl2ZSA9PT0gdHJ1ZTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYG5vQ2hhbmdlYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgeyBub0NoYW5nZSBhcyBkaXJlY3RpdmVWYWx1ZSB9O1xuY29uc3QgaXNQcmltaXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHxcbiAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKTtcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSBbXTtcbiAgICB9XG4gICAgX2ludGVycG9sYXRlKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGV4dCArPSBzdHJpbmdzW2ldO1xuICAgICAgICAgICAgY29uc3QgdiA9IGdldFZhbHVlKHRoaXMsIHZhbHVlc1tzdGFydEluZGV4ICsgaV0pO1xuICAgICAgICAgICAgaWYgKHYgJiYgdiAhPT0gbm9DaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheSh2KSB8fCB0eXBlb2YgdiAhPT0gJ3N0cmluZycgJiYgdltTeW1ib2wuaXRlcmF0b3JdKSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdlIG5lZWQgdG8gcmVjdXJzaXZlbHkgY2FsbCBnZXRWYWx1ZSBpbnRvIGl0ZXJhYmxlcy4uLlxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0ICsgc3RyaW5nc1tsXTtcbiAgICB9XG4gICAgX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBzdGFydEluZGV4ICsgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlc1tpXSAhPT0gdmFsdWVzW2ldIHx8XG4gICAgICAgICAgICAgICAgIWlzUHJpbWl0aXZlVmFsdWUodmFsdWVzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWVzLCBzdGFydEluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLl9lcXVhbFRvUHJldmlvdXNWYWx1ZXModmFsdWVzLCBzdGFydEluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAyICYmIHNbMF0gPT09ICcnICYmIHNbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICAvLyBBbiBleHByZXNzaW9uIHRoYXQgb2NjdXBpZXMgdGhlIHdob2xlIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGxlYXZlXG4gICAgICAgICAgICAvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBlbXB0eSBzdHJpbmdzLlxuICAgICAgICAgICAgdmFsdWUgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZXNbc3RhcnRJbmRleF0pO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5faW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2UsIHN0YXJ0Tm9kZSwgZW5kTm9kZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSBlbmROb2RlO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHByaW1pdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBkaWRuJ3QgY2hhbmdlLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX3ByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUudGhlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRQcm9taXNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxuICAgIF9zZXROb2RlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfc2V0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdGFydE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgX3ByZXZpb3VzVmFsdWUgaXNcbiAgICAgICAgICAgIC8vIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9zZXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuaW5zdGFuY2UuX2dldFRlbXBsYXRlKHZhbHVlKTtcbiAgICAgICAgbGV0IGluc3RhbmNlO1xuICAgICAgICBpZiAodGhpcy5fcHJldmlvdXNWYWx1ZSAmJiB0aGlzLl9wcmV2aW91c1ZhbHVlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLl9wcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdGhpcy5pbnN0YW5jZS5fcGFydENhbGxiYWNrLCB0aGlzLmluc3RhbmNlLl9nZXRUZW1wbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlKGluc3RhbmNlLl9jbG9uZSgpKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICB9XG4gICAgX3NldEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIF9wcmV2aW91c1ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCBfcHJldmlvdXNWYWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF9wcmV2aW91c1ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLl9wcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuX3ByZXZpb3VzVmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBsZXQgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgY3JlYXRpbmcgdGhlIGZpcnN0IGl0ZW0gcGFydCwgaXQncyBzdGFydE5vZGUgc2hvdWxkIGJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lcidzIHN0YXJ0Tm9kZVxuICAgICAgICAgICAgICAgIGxldCBpdGVtU3RhcnQgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3QgY3JlYXRpbmcgdGhlIGZpcnN0IHBhcnQsIGNyZWF0ZSBhIG5ldyBzZXBhcmF0b3IgbWFya2VyXG4gICAgICAgICAgICAgICAgLy8gbm9kZSwgYW5kIGZpeCB1cCB0aGUgcHJldmlvdXMgcGFydCdzIGVuZE5vZGUgdG8gcG9pbnQgdG8gaXRcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1BhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TdGFydCA9IHByZXZpb3VzUGFydC5lbmROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQoaXRlbVN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5pbnN0YW5jZSwgaXRlbVN0YXJ0LCB0aGlzLmVuZE5vZGUpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0UGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfcHJldmlvdXNWYWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIobGFzdFBhcnQuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgbGFzdFBhcnQuZW5kTm9kZSA9IHRoaXMuZW5kTm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfc2V0UHJvbWlzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHZhbHVlLnRoZW4oKHYpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICByZW1vdmVOb2Rlcyh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlLCBzdGFydE5vZGUubmV4dFNpYmxpbmcsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYXJ0Q2FsbGJhY2sgPSAoaW5zdGFuY2UsIHRlbXBsYXRlUGFydCwgbm9kZSkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gJ2F0dHJpYnV0ZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KGluc3RhbmNlLCBub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5vZGUubmV4dFNpYmxpbmcpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcGFydCB0eXBlICR7dGVtcGxhdGVQYXJ0LnR5cGV9YCk7XG59O1xuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHBhcnRDYWxsYmFjaywgZ2V0VGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLl9wYXJ0Q2FsbGJhY2sgPSBwYXJ0Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2dldFRlbXBsYXRlID0gZ2V0VGVtcGxhdGU7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IHZhbHVlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgICAgICAgIGlmICghcGFydCkge1xuICAgICAgICAgICAgICAgIHZhbHVlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnQuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbdmFsdWVJbmRleF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzLCB2YWx1ZUluZGV4KTtcbiAgICAgICAgICAgICAgICB2YWx1ZUluZGV4ICs9IHBhcnQuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2xvbmUoKSB7XG4gICAgICAgIC8vIENsb25lIHRoZSBub2RlLCByYXRoZXIgdGhhbiBpbXBvcnRpbmcgaXQsIHRvIGtlZXAgdGhlIGZyYWdtZW50IGluIHRoZVxuICAgICAgICAvLyB0ZW1wbGF0ZSdzIGRvY3VtZW50LiBUaGlzIGxlYXZlcyB0aGUgZnJhZ21lbnQgaW5lcnQgc28gY3VzdG9tIGVsZW1lbnRzXG4gICAgICAgIC8vIHdvbid0IHVwZ3JhZGUgdW50aWwgYWZ0ZXIgdGhlIG1haW4gZG9jdW1lbnQgYWRvcHRzIHRoZSBub2RlLlxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgICAgICAgLy8gbnVsbFxuICAgICAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihmcmFnbWVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfFxuICAgICAgICAgICAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19URVhUICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydEFjdGl2ZSA9IGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpO1xuICAgICAgICAgICAgICAgIC8vIEFuIGluYWN0aXZlIHBhcnQgaGFzIG5vIGNvcmVzcG9uZGluZyBUZW1wbGF0ZSBub2RlLlxuICAgICAgICAgICAgICAgIGlmIChwYXJ0QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnRBY3RpdmUgPyB0aGlzLl9wYXJ0Q2FsbGJhY2sodGhpcywgcGFydCwgd2Fsa2VyLmN1cnJlbnROb2RlKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn1cbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydE5vZGVgIChpbmNsdXNpdmUpIHRvIGBlbmROb2RlYFxuICogKGV4Y2x1c2l2ZSksIGludG8gYW5vdGhlciBjb250YWluZXIgKGNvdWxkIGJlIHRoZSBzYW1lIGNvbnRhaW5lciksIGJlZm9yZVxuICogYGJlZm9yZU5vZGVgLiBJZiBgYmVmb3JlTm9kZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlXG4gKiBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBhcmVudE5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnQsIGVuZCA9IG51bGwsIGJlZm9yZSA9IG51bGwpID0+IHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0O1xuICAgIHdoaWxlIChub2RlICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobm9kZSwgYmVmb3JlKTtcbiAgICAgICAgbm9kZSA9IG47XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBmcm9tIGBjb250YWluZXJgLlxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlTm9kZXMgPSAoY29udGFpbmVyLCBzdGFydE5vZGUsIGVuZE5vZGUgPSBudWxsKSA9PiB7XG4gICAgbGV0IG5vZGUgPSBzdGFydE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgY29uc3QgbiA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgbm9kZSA9IG47XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyohXFxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXFxuICogXFxuICogQ29weXJpZ2h0IChjKSAyMDE2IE15a2hhaWxvIFN0YWRueWsgPG1pa2h1c0BnbWFpbC5jb20+XFxuICogXFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFxcXCJTb2Z0d2FyZVxcXCIpLCB0byBkZWFsXFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxcbiAqIFxcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuICogXFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxcbiAqIFNPRlRXQVJFLlxcbiAqXFxuICogQHZlcnNpb24gMi4xLjVcXG4gKi9cXG4hZnVuY3Rpb24oZSl7XFxcInVzZSBzdHJpY3RcXFwiO2Z1bmN0aW9uIHQoZSl7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciB0PTAsaT1BcnJheShlLmxlbmd0aCk7dDxlLmxlbmd0aDt0KyspaVt0XT1lW3RdO3JldHVybiBpfXJldHVybiBBcnJheS5mcm9tKGUpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXFxcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFxcXCIpO3JldHVybiF0fHxcXFwib2JqZWN0XFxcIiE9dHlwZW9mIHQmJlxcXCJmdW5jdGlvblxcXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiByKGUsdCl7aWYoXFxcImZ1bmN0aW9uXFxcIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXFxcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXFxcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1mdW5jdGlvbiBvKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIil9ZnVuY3Rpb24gbihlLHQpe2lmKHR8fCh0PVxcXCJ1bmRlZmluZWRcXFwiPT10eXBlb2Ygd2luZG93P2dsb2JhbDp3aW5kb3cpLHZvaWQgMCE9PXRbZV0pcmV0dXJuIHRbZV07Zm9yKHZhciBpPVtcXFwid2Via2l0XFxcIixcXFwibW96XFxcIixcXFwibXNcXFwiLFxcXCJvXFxcIl0scj0wLG89aS5sZW5ndGgsbj1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpO3I8bztyKyspe3ZhciBhPXRbaVtyXStuXTtpZih2b2lkIDAhPT1hKXJldHVybiBhfXJldHVybiBudWxsfWZ1bmN0aW9uIGEoZSx0LGkscixvLG4sbCl7aWYoXFxcImZ1bmN0aW9uXFxcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhbmltYXRpb24gcnVsZTpcXFwiLHIpO3ZhciBzPWUtaSxkPXMvbyxjPTA7ZD4xJiYoZD0xKSwxIT09ZCYmKGM9cihkKSxpc0Zpbml0ZShjKSYmIWlzTmFOKGMpJiYoZD1jKSksdCYmdChkKSxzPG8/bC5mcmFtZT11ZShmdW5jdGlvbihlKXtyZXR1cm4gYShlLHQsaSxyLG8sbixsKX0pOihuJiZuKCksbC5pblByb2dyZXNzPSExKX1mdW5jdGlvbiBsKCl7QXJyYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBzKGUpe2lmKCEoZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiYmMjE1MjkyMzE0Nz09PWUucmVzdWx0KSl0aHJvdyBlfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGUubWFqb3JUaWNrcyBpbnN0YW5jZW9mIEFycmF5fHwoZS5tYWpvclRpY2tzPWUubWFqb3JUaWNrcz9bZS5tYWpvclRpY2tzXTpbXSksZS5tYWpvclRpY2tzLmxlbmd0aHx8KGUubWFqb3JUaWNrcy5wdXNoKFRlLmZvcm1hdE1ham9yVGlja051bWJlcihlLm1pblZhbHVlLGUpKSxlLm1ham9yVGlja3MucHVzaChUZS5mb3JtYXRNYWpvclRpY2tOdW1iZXIoZS5tYXhWYWx1ZSxlKSkpLFtcXFwicmlnaHRcXFwiIT09ZS50aWNrU2lkZSxcXFwibGVmdFxcXCIhPT1lLnRpY2tTaWRlXX1mdW5jdGlvbiBjKGUsdCxpLHIsbyxuKXtlLmJlZ2luUGF0aCgpLGUubW92ZVRvKHQrbixpKSxlLmxpbmVUbyh0K3ItbixpKSxlLnF1YWRyYXRpY0N1cnZlVG8odCtyLGksdCtyLGkrbiksZS5saW5lVG8odCtyLGkrby1uKSxlLnF1YWRyYXRpY0N1cnZlVG8odCtyLGkrbyx0K3ItbixpK28pLGUubGluZVRvKHQrbixpK28pLGUucXVhZHJhdGljQ3VydmVUbyh0LGkrbyx0LGkrby1uKSxlLmxpbmVUbyh0LGkrbiksZS5xdWFkcmF0aWNDdXJ2ZVRvKHQsaSx0K24saSksZS5jbG9zZVBhdGgoKX1mdW5jdGlvbiBoKGUsdCl7dmFyIGk9dC52YWx1ZURlYyxyPXQudmFsdWVJbnQsbz0wLG49dm9pZCAwLGE9dm9pZCAwLGw9dm9pZCAwO2lmKGU9cGFyc2VGbG9hdChlKSxsPWU8MCxlPU1hdGguYWJzKGUpLGk+MCl7Zm9yKGE9ZS50b0ZpeGVkKGkpLnRvU3RyaW5nKCkuc3BsaXQoXFxcIi5cXFwiKSxuPXItYVswXS5sZW5ndGg7bzxuOysrbylhWzBdPVxcXCIwXFxcIithWzBdO2E9KGw/XFxcIi1cXFwiOlxcXCJcXFwiKSthWzBdK1xcXCIuXFxcIithWzFdfWVsc2V7Zm9yKGE9TWF0aC5yb3VuZChlKS50b1N0cmluZygpLG49ci1hLmxlbmd0aDtvPG47KytvKWE9XFxcIjBcXFwiK2E7YT0obD9cXFwiLVxcXCI6XFxcIlxcXCIpK2F9cmV0dXJuIGF9ZnVuY3Rpb24gdShlLHQpe3ZhciBpPXZvaWQgMCxyPSExO3JldHVybiBpPTA9PT10Lm1ham9yVGlja3NEZWM/TWF0aC5yb3VuZChlKS50b1N0cmluZygpOmUudG9GaXhlZCh0Lm1ham9yVGlja3NEZWMpLHQubWFqb3JUaWNrc0ludD4xPyhyPX5pLmluZGV4T2YoXFxcIi5cXFwiKSx+aS5pbmRleE9mKFxcXCItXFxcIik/XFxcIi1cXFwiK1t0Lm1ham9yVGlja3NJbnQrdC5tYWpvclRpY2tzRGVjKzIrKHI/MTowKS1pLmxlbmd0aF0uam9pbihcXFwiMFxcXCIpK2kucmVwbGFjZShcXFwiLVxcXCIsXFxcIlxcXCIpOlt0Lm1ham9yVGlja3NJbnQrdC5tYWpvclRpY2tzRGVjKzErKHI/MTowKS1pLmxlbmd0aF0uam9pbihcXFwiMFxcXCIpK2kpOml9ZnVuY3Rpb24gZihlKXtyZXR1cm4gZSpNYXRoLlBJLzE4MH1mdW5jdGlvbiBtKGUsdCl7cmV0dXJue3g6LWUqTWF0aC5zaW4odCkseTplKk1hdGguY29zKHQpfX1mdW5jdGlvbiB2KGUsdCxpLHIpe3ZhciBvPSEoYXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0pfHxhcmd1bWVudHNbNF0sbj1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06MCxhPWUuY3JlYXRlTGluZWFyR3JhZGllbnQobz8wOm4sbz9uOjAsbz8wOnIsbz9yOjApO3JldHVybiBhLmFkZENvbG9yU3RvcCgwLHQpLGEuYWRkQ29sb3JTdG9wKDEsaSksYX1mdW5jdGlvbiBiKGUsdCl7aWYoYXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSlyZXR1cm4gZS5yZXN0b3JlKCksITA7ZS5zYXZlKCk7dmFyIGk9dC5ib3JkZXJTaGFkb3dXaWR0aDtyZXR1cm4gaSYmKGUuc2hhZG93Qmx1cj1pLGUuc2hhZG93Q29sb3I9dC5jb2xvckJvcmRlclNoYWRvdyksITB9ZnVuY3Rpb24gZyhlLHQpe3QubmVlZGxlU2hhZG93JiYoZS5zaGFkb3dPZmZzZXRYPTIsZS5zaGFkb3dPZmZzZXRZPTIsZS5zaGFkb3dCbHVyPTEwLGUuc2hhZG93Q29sb3I9dC5jb2xvck5lZWRsZVNoYWRvd0Rvd24pfWZ1bmN0aW9uIHAoZSx0LGkpe3JldHVybiBlW1xcXCJmb250XFxcIit0K1xcXCJTdHlsZVxcXCJdK1xcXCIgXFxcIitlW1xcXCJmb250XFxcIit0K1xcXCJXZWlnaHRcXFwiXStcXFwiIFxcXCIrZVtcXFwiZm9udFxcXCIrdCtcXFwiU2l6ZVxcXCJdKmkrXFxcInB4IFxcXCIrZVtcXFwiZm9udFxcXCIrdF19ZnVuY3Rpb24gdyhlKXtlLnNoYWRvd09mZnNldFg9bnVsbCxlLnNoYWRvd09mZnNldFk9bnVsbCxlLnNoYWRvd0JsdXI9bnVsbCxlLnNoYWRvd0NvbG9yPVxcXCJcXFwiLGUuc3Ryb2tlU3R5bGU9bnVsbCxlLmxpbmVXaWR0aD0wLGUuc2F2ZSgpfWZ1bmN0aW9uIHkoZSx0LGkscil7dC52YWx1ZVRleHRTaGFkb3cmJihlLnNoYWRvd09mZnNldFg9aSxlLnNoYWRvd09mZnNldFk9aSxlLnNoYWRvd0JsdXI9cixlLnNoYWRvd0NvbG9yPXQuY29sb3JWYWx1ZVRleHRTaGFkb3cpfWZ1bmN0aW9uIGsoZSx0LGkscixvLG4pe2lmKHQudmFsdWVCb3gpe3coZSk7dmFyIGE9dC52YWx1ZURlYz8xK3QudmFsdWVEZWM6MCxsPVxcXCI5XFxcIi5yZXBlYXQoTWF0aC5tYXguYXBwbHkobnVsbCxbU3RyaW5nKHBhcnNlSW50KGkpKS5sZW5ndGgrYV0uY29uY2F0KHQubWFqb3JUaWNrcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZyhwYXJzZUludChlLDEwKSkubGVuZ3RoK2F9KSkpKSxzPXQudmFsdWVUZXh0fHxoKGksdCksZD1uLzIwMCx1PW4vMTAwLGY9LjQqdSxtPTEuMip1O2UuZm9udD1wKHQsXFxcIlZhbHVlXFxcIixkKSx5KGUsdCxmLG0pO3ZhciB2PWUubWVhc3VyZVRleHQodC52YWx1ZVRleHQ/czpcXFwiLVxcXCIraChOdW1iZXIobCksdCkpLndpZHRoO3coZSk7dmFyIGI9cGFyc2VGbG9hdCh0LmZvbnRWYWx1ZVNpemUpKmQrZittLGc9dSpwYXJzZUZsb2F0KHQudmFsdWVCb3hTdHJva2UpLGs9MipuLTIqZyx4PXYrMTAqdSxUPTEuMSpiK2YrbSxTPXUqdC52YWx1ZUJveEJvcmRlclJhZGl1cyxXPShwYXJzZUZsb2F0KHQudmFsdWVCb3hXaWR0aCl8fDApLzEwMCprO1c+eCYmKHg9VykseD5rJiYoeD1rKTt2YXIgTz1yLXgvMixWPW8tVC8yLFA9by01Ljc1KnU7aWYoZS5iZWdpblBhdGgoKSxTP2MoZSxPLFYseCxULFMpOmUucmVjdChPLFYseCxUKSxnKXt2YXIgTT1lLmNyZWF0ZVJhZGlhbEdyYWRpZW50KHIsUCwxMCp1LHIsUCwyMCp1KTtNLmFkZENvbG9yU3RvcCgwLHQuY29sb3JWYWx1ZUJveFJlY3QpLE0uYWRkQ29sb3JTdG9wKDEsdC5jb2xvclZhbHVlQm94UmVjdEVuZCksZS5zdHJva2VTdHlsZT1NLGUubGluZVdpZHRoPWcsZS5zdHJva2UoKX10LmNvbG9yVmFsdWVCb3hTaGFkb3cmJihlLnNoYWRvd0JsdXI9MS4yKnUsZS5zaGFkb3dDb2xvcj10LmNvbG9yVmFsdWVCb3hTaGFkb3cpLHQuY29sb3JWYWx1ZUJveEJhY2tncm91bmQmJihlLmZpbGxTdHlsZT10LmNvbG9yVmFsdWVCb3hCYWNrZ3JvdW5kLGUuZmlsbCgpKSxlLmNsb3NlUGF0aCgpLGUucmVzdG9yZSgpLHkoZSx0LGYsbSksZS5maWxsU3R5bGU9dC5jb2xvclZhbHVlVGV4dCxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIixlLnRleHRCYXNlbGluZT1cXFwiYWxwaGFiZXRpY1xcXCIsZS5maWxsVGV4dChzLE8reC8yLG8rVC8yLWIvMyksZS5yZXN0b3JlKCl9fWZ1bmN0aW9uIHgoZSl7dmFyIHQ9ZS52YWx1ZSxpPWUubWluVmFsdWUscj1lLm1heFZhbHVlLG89LjAxKihyLWkpO3JldHVybntub3JtYWw6dDxpP2k6dD5yP3I6dCxpbmRlbnRlZDp0PGk/aS1vOnQ+cj9yK286dH19ZnVuY3Rpb24gVChlLHQsaSxyLG8pe2kuYmVnaW5QYXRoKCksaS5hcmMoMCwwLHllKGUpLDAsMipTZSwhMCksaS5saW5lV2lkdGg9dCxpLnN0cm9rZVN0eWxlPW8/VGUubGluZWFyR3JhZGllbnQoaSxyLG8sZSk6cixpLnN0cm9rZSgpLGkuY2xvc2VQYXRoKCl9ZnVuY3Rpb24gUyhlLHQpe3ZhciBpPWJlLnBpeGVsUmF0aW87cmV0dXJuIGUubWF4UmFkaXVzfHwoZS5tYXhSYWRpdXM9ZS5tYXgtdC5ib3JkZXJTaGFkb3dXaWR0aC10LmJvcmRlck91dGVyV2lkdGgqaS10LmJvcmRlck1pZGRsZVdpZHRoKmktdC5ib3JkZXJJbm5lcldpZHRoKmkrKHQuYm9yZGVyT3V0ZXJXaWR0aD8uNTowKSsodC5ib3JkZXJNaWRkbGVXaWR0aD8uNTowKSsodC5ib3JkZXJJbm5lcldpZHRoPy41OjApKSxlLm1heFJhZGl1c31mdW5jdGlvbiBXKGUsdCl7dmFyIGk9YmUucGl4ZWxSYXRpbyxyPXQuYm9yZGVyU2hhZG93V2lkdGgqaSxvPWUubWF4LXItdC5ib3JkZXJPdXRlcldpZHRoKmkvMixuPW8tdC5ib3JkZXJPdXRlcldpZHRoKmkvMi10LmJvcmRlck1pZGRsZVdpZHRoKmkvMisuNSxhPW4tdC5ib3JkZXJNaWRkbGVXaWR0aCppLzItdC5ib3JkZXJJbm5lcldpZHRoKmkvMisuNSxsPVMoZSx0KSxzPXZvaWQgMCxkPSExO2Uuc2F2ZSgpLHQuYm9yZGVyT3V0ZXJXaWR0aCYmKGQ9VGUuZHJhd1NoYWRvdyhlLHQsZCksVChvLHQuYm9yZGVyT3V0ZXJXaWR0aCppLGUsdC5jb2xvckJvcmRlck91dGVyLHQuY29sb3JCb3JkZXJPdXRlckVuZCkpLHQuYm9yZGVyTWlkZGxlV2lkdGgmJihkPVRlLmRyYXdTaGFkb3coZSx0LGQpLFQobix0LmJvcmRlck1pZGRsZVdpZHRoKmksZSx0LmNvbG9yQm9yZGVyTWlkZGxlLHQuY29sb3JCb3JkZXJNaWRkbGVFbmQpKSx0LmJvcmRlcklubmVyV2lkdGgmJihkPVRlLmRyYXdTaGFkb3coZSx0LGQpLFQoYSx0LmJvcmRlcklubmVyV2lkdGgqaSxlLHQuY29sb3JCb3JkZXJJbm5lcix0LmNvbG9yQm9yZGVySW5uZXJFbmQpKSxUZS5kcmF3U2hhZG93KGUsdCxkKSxlLmJlZ2luUGF0aCgpLGUuYXJjKDAsMCx5ZShsKSwwLDIqU2UsITApLHQuY29sb3JQbGF0ZUVuZD8ocz1lLmNyZWF0ZVJhZGlhbEdyYWRpZW50KDAsMCxsLzIsMCwwLGwpLHMuYWRkQ29sb3JTdG9wKDAsdC5jb2xvclBsYXRlKSxzLmFkZENvbG9yU3RvcCgxLHQuY29sb3JQbGF0ZUVuZCkpOnM9dC5jb2xvclBsYXRlLGUuZmlsbFN0eWxlPXMsZS5maWxsKCksZS5jbG9zZVBhdGgoKSxlLnJlc3RvcmUoKX1mdW5jdGlvbiBPKGUsdCl7dmFyIGk9ZS5tYXgqKHBhcnNlRmxvYXQodC5oaWdobGlnaHRzV2lkdGgpfHwwKS8xMDA7aWYoaSl7dmFyIHI9eWUoUChlLHQpLWkvMiksbz0wLG49dC5oaWdobGlnaHRzLmxlbmd0aCxhPSh0Lm1heFZhbHVlLXQubWluVmFsdWUpL3QudGlja3NBbmdsZTtmb3IoZS5zYXZlKCk7bzxuO28rKyl7dmFyIGw9dC5oaWdobGlnaHRzW29dO2UuYmVnaW5QYXRoKCksZS5yb3RhdGUoV2UpLGUuYXJjKDAsMCxyLFRlLnJhZGlhbnModC5zdGFydEFuZ2xlKyhsLmZyb20tdC5taW5WYWx1ZSkvYSksVGUucmFkaWFucyh0LnN0YXJ0QW5nbGUrKGwudG8tdC5taW5WYWx1ZSkvYSksITEpLGUuc3Ryb2tlU3R5bGU9bC5jb2xvcixlLmxpbmVXaWR0aD1pLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKSxlLnJlc3RvcmUoKSxlLnNhdmUoKX19fWZ1bmN0aW9uIFYoZSx0KXt2YXIgaT1QKGUsdCkscj12b2lkIDAsbz12b2lkIDAsbj12b2lkIDAsYT0wLGw9MCxzPU1hdGguYWJzKHQubWlub3JUaWNrcyl8fDAsZD10LnRpY2tzQW5nbGUvKHQubWF4VmFsdWUtdC5taW5WYWx1ZSk7Zm9yKGUubGluZVdpZHRoPWJlLnBpeGVsUmF0aW8sZS5zdHJva2VTdHlsZT10LmNvbG9yTWlub3JUaWNrc3x8dC5jb2xvclN0cm9rZVRpY2tzLGUuc2F2ZSgpLHQuZXhhY3RUaWNrcz8obz10Lm1heFZhbHVlLXQubWluVmFsdWUscj1zP28vczowLGw9KHhlLm1vZCh0Lm1ham9yVGlja3NbMF0scyl8fDApKmQpOnI9cyoodC5tYWpvclRpY2tzLmxlbmd0aC0xKTthPHI7KythKShuPXQuc3RhcnRBbmdsZStsK2EqKHQudGlja3NBbmdsZS9yKSk8PXQudGlja3NBbmdsZSt0LnN0YXJ0QW5nbGUmJihlLnJvdGF0ZShUZS5yYWRpYW5zKG4pKSxlLmJlZ2luUGF0aCgpLGUubW92ZVRvKDAsaSksZS5saW5lVG8oMCxpLS4wNzUqZS5tYXgpLEIoZSkpfWZ1bmN0aW9uIFAoZSx0KXt2YXIgaT1lLm1heC8xMDA7cmV0dXJuIFMoZSx0KS01KmktKHQuYmFyV2lkdGg/MioocGFyc2VGbG9hdCh0LmJhclN0cm9rZVdpZHRoKXx8MCkrKChwYXJzZUZsb2F0KHQuYmFyV2lkdGgpfHwwKSs1KSppOjApfWZ1bmN0aW9uIE0oZSx0KXtUZS5wcmVwYXJlVGlja3ModCk7dmFyIGk9eWUoUChlLHQpKSxyPXZvaWQgMCxvPXZvaWQgMCxuPXQubWFqb3JUaWNrcy5sZW5ndGgsYT1iZS5waXhlbFJhdGlvO2ZvcihlLmxpbmVXaWR0aD0yKmEsZS5zYXZlKCksbz10LmNvbG9yTWFqb3JUaWNrcyBpbnN0YW5jZW9mIEFycmF5P3QuY29sb3JNYWpvclRpY2tzOm5ldyBBcnJheShuKS5maWxsKHQuY29sb3JTdHJva2VUaWNrc3x8dC5jb2xvck1ham9yVGlja3MpLHI9MDtyPG47KytyKWUuc3Ryb2tlU3R5bGU9b1tyXSxlLnJvdGF0ZShUZS5yYWRpYW5zKEEodCx0LmV4YWN0VGlja3M/dC5tYWpvclRpY2tzW3JdOnIsbikpKSxlLmJlZ2luUGF0aCgpLGUubW92ZVRvKDAsaSksZS5saW5lVG8oMCxpLS4xNSplLm1heCksQihlKTt0LnN0cm9rZVRpY2tzJiYoZS5zdHJva2VTdHlsZT10LmNvbG9yU3Ryb2tlVGlja3N8fG9bMF0sZS5yb3RhdGUoV2UpLGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLGksVGUucmFkaWFucyh0LnN0YXJ0QW5nbGUpLFRlLnJhZGlhbnModC5zdGFydEFuZ2xlK3QudGlja3NBbmdsZSksITEpLEIoZSkpfWZ1bmN0aW9uIEEoZSx0LGkpe2lmKGUuZXhhY3RUaWNrcyl7dmFyIHI9ZS50aWNrc0FuZ2xlLyhlLm1heFZhbHVlLWUubWluVmFsdWUpO3JldHVybiBlLnN0YXJ0QW5nbGUrcioodC1lLm1pblZhbHVlKX1yZXR1cm4gZS5zdGFydEFuZ2xlK3QqKGUudGlja3NBbmdsZS8oaS0xKSl9ZnVuY3Rpb24gQihlKXtlLnN0cm9rZSgpLGUucmVzdG9yZSgpLGUuY2xvc2VQYXRoKCksZS5zYXZlKCl9ZnVuY3Rpb24gaihlLHQpe3ZhciBpPVAoZSx0KS0uMTUqZS5tYXgscj17fSxvPTAsbj10Lm1ham9yVGlja3MubGVuZ3RoLGE9XFxcIm5lZWRsZVxcXCIhPT10LmFuaW1hdGlvblRhcmdldCxsPXQuY29sb3JOdW1iZXJzIGluc3RhbmNlb2YgQXJyYXk/dC5jb2xvck51bWJlcnM6bmV3IEFycmF5KG4pLmZpbGwodC5jb2xvck51bWJlcnMpLHM9YT8tKHQudmFsdWUtdC5taW5WYWx1ZSkvKHQubWF4VmFsdWUtdC5taW5WYWx1ZSkqdC50aWNrc0FuZ2xlOjA7Zm9yKGEmJihlLnNhdmUoKSxlLnJvdGF0ZSgtVGUucmFkaWFucyhzKSkpLGUuZm9udD1UZS5mb250KHQsXFxcIk51bWJlcnNcXFwiLGUubWF4LzIwMCksZS5saW5lV2lkdGg9MCxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIixlLnRleHRCYXNlbGluZT1cXFwibWlkZGxlXFxcIjtvPG47KytvKXt2YXIgZD1zK0EodCx0LmV4YWN0VGlja3M/dC5tYWpvclRpY2tzW29dOm8sbiksYz1lLm1lYXN1cmVUZXh0KHQubWFqb3JUaWNrc1tvXSkud2lkdGgsaD10LmZvbnROdW1iZXJzU2l6ZSx1PU1hdGguc3FydChjKmMraCpoKS8yLGY9VGUucmFkaWFsUG9pbnQoaS11LXQubnVtYmVyc01hcmdpbi8xMDAqZS5tYXgsVGUucmFkaWFucyhkKSk7MzYwPT09ZCYmKGQ9MCkscltkXXx8KHJbZF09ITAsZS5maWxsU3R5bGU9bFtvXSxlLmZpbGxUZXh0KHQubWFqb3JUaWNrc1tvXSxmLngsZi55KSl9YSYmZS5yZXN0b3JlKCl9ZnVuY3Rpb24gQyhlLHQpe3QudGl0bGUmJihlLnNhdmUoKSxlLmZvbnQ9VGUuZm9udCh0LFxcXCJUaXRsZVxcXCIsZS5tYXgvMjAwKSxlLmZpbGxTdHlsZT10LmNvbG9yVGl0bGUsZS50ZXh0QWxpZ249XFxcImNlbnRlclxcXCIsZS5maWxsVGV4dCh0LnRpdGxlLDAsLWUubWF4LzQuMjUsLjgqZS5tYXgpLGUucmVzdG9yZSgpKX1mdW5jdGlvbiBOKGUsdCl7dC51bml0cyYmKGUuc2F2ZSgpLGUuZm9udD1UZS5mb250KHQsXFxcIlVuaXRzXFxcIixlLm1heC8yMDApLGUuZmlsbFN0eWxlPXQuY29sb3JVbml0cyxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIixlLmZpbGxUZXh0KHQudW5pdHMsMCxlLm1heC8zLjI1LC44KmUubWF4KSxlLnJlc3RvcmUoKSl9ZnVuY3Rpb24gRShlLHQpe2lmKHQubmVlZGxlKXt2YXIgaT10LnRpY2tzQW5nbGU8MzYwP1RlLm5vcm1hbGl6ZWRWYWx1ZSh0KS5pbmRlbnRlZDp0LnZhbHVlLHI9UyhlLHQpLG89eWUoci8xMDAqdC5uZWVkbGVDaXJjbGVTaXplKSxuPXllKHIvMTAwKnQubmVlZGxlQ2lyY2xlU2l6ZSouNzUpLGE9eWUoci8xMDAqdC5uZWVkbGVFbmQpLGw9eWUodC5uZWVkbGVTdGFydD9yLzEwMCp0Lm5lZWRsZVN0YXJ0OjApLHM9ci8xMDAqdC5uZWVkbGVXaWR0aCxkPXIvMTAwKnQubmVlZGxlV2lkdGgvMixjPWJlLnBpeGVsUmF0aW8saD1cXFwibmVlZGxlXFxcIiE9PXQuYW5pbWF0aW9uVGFyZ2V0O2Uuc2F2ZSgpLFRlLmRyYXdOZWVkbGVTaGFkb3coZSx0KSxlLnJvdGF0ZShUZS5yYWRpYW5zKGg/dC5zdGFydEFuZ2xlOnQuc3RhcnRBbmdsZSsoaS10Lm1pblZhbHVlKS8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKSp0LnRpY2tzQW5nbGUpKSxlLmZpbGxTdHlsZT1UZS5saW5lYXJHcmFkaWVudChlLHQuY29sb3JOZWVkbGUsdC5jb2xvck5lZWRsZUVuZCxhLWwpLFxcXCJhcnJvd1xcXCI9PT10Lm5lZWRsZVR5cGU/KGUuYmVnaW5QYXRoKCksZS5tb3ZlVG8oLWQsLWwpLGUubGluZVRvKC1zLDApLGUubGluZVRvKC0xKmMsYSksZS5saW5lVG8oYyxhKSxlLmxpbmVUbyhzLDApLGUubGluZVRvKGQsLWwpLGUuY2xvc2VQYXRoKCksZS5maWxsKCksZS5iZWdpblBhdGgoKSxlLmxpbmVUbygtLjUqYyxhKSxlLmxpbmVUbygtMSpjLGEpLGUubGluZVRvKC1zLDApLGUubGluZVRvKC1kLC1sKSxlLmxpbmVUbyhkLzIqYy0yKmMsLWwpLGUuY2xvc2VQYXRoKCksZS5maWxsU3R5bGU9dC5jb2xvck5lZWRsZVNoYWRvd1VwLGUuZmlsbCgpKTooZS5iZWdpblBhdGgoKSxlLm1vdmVUbygtZCxhKSxlLmxpbmVUbygtZCxsKSxlLmxpbmVUbyhkLGwpLGUubGluZVRvKGQsYSksZS5jbG9zZVBhdGgoKSxlLmZpbGwoKSksdC5uZWVkbGVDaXJjbGVTaXplJiYoZS5yZXN0b3JlKCksVGUuZHJhd05lZWRsZVNoYWRvdyhlLHQpLHQubmVlZGxlQ2lyY2xlT3V0ZXImJihlLmJlZ2luUGF0aCgpLGUuYXJjKDAsMCxvLDAsMipTZSwhMCksZS5maWxsU3R5bGU9VGUubGluZWFyR3JhZGllbnQoZSx0LmNvbG9yTmVlZGxlQ2lyY2xlT3V0ZXIsdC5jb2xvck5lZWRsZUNpcmNsZU91dGVyRW5kLG8pLGUuZmlsbCgpLGUuY2xvc2VQYXRoKCkpLHQubmVlZGxlQ2lyY2xlSW5uZXImJihlLmJlZ2luUGF0aCgpLGUuYXJjKDAsMCxuLDAsMipTZSwhMCksZS5maWxsU3R5bGU9VGUubGluZWFyR3JhZGllbnQoZSx0LmNvbG9yTmVlZGxlQ2lyY2xlSW5uZXIsdC5jb2xvck5lZWRsZUNpcmNsZUlubmVyRW5kLG4pLGUuZmlsbCgpLGUuY2xvc2VQYXRoKCkpLGUucmVzdG9yZSgpKX19ZnVuY3Rpb24gXyhlLHQsaSl7VGUuZHJhd1ZhbHVlQm94KGUsdCxpLDAsZS5tYXgtLjMzKmUubWF4LGUubWF4KX1mdW5jdGlvbiBSKGUsdCl7dmFyIGk9ZS5tYXgvMTAwLHI9UyhlLHQpLTUqaSxvPXBhcnNlRmxvYXQodC5iYXJTdHJva2VXaWR0aCl8fDAsbj0ocGFyc2VGbG9hdCh0LmJhcldpZHRoKXx8MCkqaSxhPXItMipvLW4sbD0oci1hKS8yLHM9YStsLGQ9by9zLGM9dC5zdGFydEFuZ2xlLGg9dC5zdGFydEFuZ2xlK3QudGlja3NBbmdsZTtlLnNhdmUoKSxlLnJvdGF0ZShXZSksbyYmKGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLHMsVGUucmFkaWFucyhjKS1kLFRlLnJhZGlhbnMoaCkrZCwhMSksZS5zdHJva2VTdHlsZT10LmNvbG9yQmFyU3Ryb2tlLGUubGluZVdpZHRoPTIqbCxlLnN0cm9rZSgpLGUuY2xvc2VQYXRoKCkpLG4mJihlLmJlZ2luUGF0aCgpLGUuYXJjKDAsMCxzLFRlLnJhZGlhbnMoYyksVGUucmFkaWFucyhoKSwhMSksZS5zdHJva2VTdHlsZT10LmNvbG9yQmFyLGUubGluZVdpZHRoPW4sZS5zdHJva2UoKSxlLmNsb3NlUGF0aCgpLHQuYmFyU2hhZG93JiYoZS5iZWdpblBhdGgoKSxlLmFyYygwLDAscixUZS5yYWRpYW5zKGMpLFRlLnJhZGlhbnMoaCksITEpLGUuY2xpcCgpLGUuYmVnaW5QYXRoKCksZS5zdHJva2VTdHlsZT10LmNvbG9yQmFyLGUubGluZVdpZHRoPTEsZS5zaGFkb3dCbHVyPXQuYmFyU2hhZG93LGUuc2hhZG93Q29sb3I9dC5jb2xvckJhclNoYWRvdyxlLnNoYWRvd09mZnNldFg9MCxlLnNoYWRvd09mZnNldFk9MCxlLmFyYygwLDAscixUZS5yYWRpYW5zKHQuc3RhcnRBbmdsZSksVGUucmFkaWFucyh0LnN0YXJ0QW5nbGUrdC50aWNrc0FuZ2xlKSwhMSksZS5zdHJva2UoKSxlLmNsb3NlUGF0aCgpLGUucmVzdG9yZSgpLGUucm90YXRlKFdlKSksdC5iYXJQcm9ncmVzcyYmKGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLHMsVGUucmFkaWFucyhjKSxUZS5yYWRpYW5zKGMrKFRlLm5vcm1hbGl6ZWRWYWx1ZSh0KS5ub3JtYWwtdC5taW5WYWx1ZSkvKHQubWF4VmFsdWUtdC5taW5WYWx1ZSkqdC50aWNrc0FuZ2xlKSwhMSksZS5zdHJva2VTdHlsZT10LmNvbG9yQmFyUHJvZ3Jlc3MsZS5saW5lV2lkdGg9bixlLnN0cm9rZSgpLGUuY2xvc2VQYXRoKCkpKSxlLnJlc3RvcmUoKX1mdW5jdGlvbiBJKGUpe3JldHVybiBlLm9wdGlvbnMuYW5pbWF0ZWRWYWx1ZT9lLm9wdGlvbnMudmFsdWU6ZS52YWx1ZX1mdW5jdGlvbiBEKGUsdCxpLHIsbyxuLGEsbCl7ZS5iZWdpblBhdGgoKSxlLmZpbGxTdHlsZT1sP1RlLmxpbmVhckdyYWRpZW50KGUsYSxsLG8+bj9vOm4sbj5vLG8+bj9pOnIpOmEsdD4wP1RlLnJvdW5kUmVjdChlLGkscixvLG4sdCk6ZS5yZWN0KGkscixvLG4pLGUuZmlsbCgpLGUuY2xvc2VQYXRoKCl9ZnVuY3Rpb24geihlLHQsaSxyLG8sbixhLGwscyl7ZS5iZWdpblBhdGgoKSxlLmxpbmVXaWR0aD10LGUuc3Ryb2tlU3R5bGU9cz9UZS5saW5lYXJHcmFkaWVudChlLGwscyxhLCEwLG8pOmwsaT4wP1RlLnJvdW5kUmVjdChlLHIsbyxuLGEsaSk6ZS5yZWN0KHIsbyxuLGEpLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKX1mdW5jdGlvbiBMKGUsdCxpLHIsbyxuKXt2YXIgYT1iZS5waXhlbFJhdGlvO2Uuc2F2ZSgpO3ZhciBsPXQuYm9yZGVyUmFkaXVzKmEscz1vLXQuYm9yZGVyU2hhZG93V2lkdGgtdC5ib3JkZXJPdXRlcldpZHRoKmEsZD1zLXQuYm9yZGVyT3V0ZXJXaWR0aCphLXQuYm9yZGVyTWlkZGxlV2lkdGgqYSxjPWQtdC5ib3JkZXJNaWRkbGVXaWR0aCphLXQuYm9yZGVySW5uZXJXaWR0aCphLGg9Yy10LmJvcmRlcklubmVyV2lkdGgqYSx1PW4tdC5ib3JkZXJTaGFkb3dXaWR0aC10LmJvcmRlck91dGVyV2lkdGgqYSxmPXUtdC5ib3JkZXJPdXRlcldpZHRoKmEtdC5ib3JkZXJNaWRkbGVXaWR0aCphLG09Zi10LmJvcmRlck1pZGRsZVdpZHRoKmEtdC5ib3JkZXJJbm5lcldpZHRoKmEsdj1tLXQuYm9yZGVySW5uZXJXaWR0aCphLGI9aS0oZC1zKS8yLGc9Yi0oYy1kKS8yLHA9Zy0oaC1jKS8yLHc9ci0oZi11KS8yLHk9dy0obS1mKS8yLGs9eS0odi1tKS8yLHg9MCxUPSExO3JldHVybiB0LmJvcmRlck91dGVyV2lkdGgmJihUPVRlLmRyYXdTaGFkb3coZSx0LFQpLHooZSx0LmJvcmRlck91dGVyV2lkdGgqYSxsLGkrdC5ib3JkZXJPdXRlcldpZHRoKmEvMi14LHIrdC5ib3JkZXJPdXRlcldpZHRoKmEvMi14LHMsdSx0LmNvbG9yQm9yZGVyT3V0ZXIsdC5jb2xvckJvcmRlck91dGVyRW5kKSx4Kz0uNSphKSx0LmJvcmRlck1pZGRsZVdpZHRoJiYoVD1UZS5kcmF3U2hhZG93KGUsdCxUKSx6KGUsdC5ib3JkZXJNaWRkbGVXaWR0aCphLGwtPTErMip4LGIrdC5ib3JkZXJNaWRkbGVXaWR0aCphLzIteCx3K3QuYm9yZGVyTWlkZGxlV2lkdGgqYS8yLXgsZCsyKngsZisyKngsdC5jb2xvckJvcmRlck1pZGRsZSx0LmNvbG9yQm9yZGVyTWlkZGxlRW5kKSx4Kz0uNSphKSx0LmJvcmRlcklubmVyV2lkdGgmJihUPVRlLmRyYXdTaGFkb3coZSx0LFQpLHooZSx0LmJvcmRlcklubmVyV2lkdGgqYSxsLT0xKzIqeCxnK3QuYm9yZGVySW5uZXJXaWR0aCphLzIteCx5K3QuYm9yZGVySW5uZXJXaWR0aCphLzIteCxjKzIqeCxtKzIqeCx0LmNvbG9yQm9yZGVySW5uZXIsdC5jb2xvckJvcmRlcklubmVyRW5kKSx4Kz0uNSphKSxUZS5kcmF3U2hhZG93KGUsdCxUKSxEKGUsbCxwLGssaCsyKngsdisyKngsdC5jb2xvclBsYXRlLHQuY29sb3JQbGF0ZUVuZCksZS5yZXN0b3JlKCksW3AsayxoLHZdfWZ1bmN0aW9uIEcoZSx0LGkscixvLG4pe3ZhciBhPWJlLnBpeGVsUmF0aW8sbD1uPj1vLHM9bD8uODUqbzpuLGQ9bD9uOm87aT1sP3dlKGkrKG8tcykvMik6aTt2YXIgYz0hIXQudGl0bGUsaD0hIXQudW5pdHMsdT0hIXQudmFsdWVCb3gsZj12b2lkIDAsbT12b2lkIDAsdj12b2lkIDA7bD8obT13ZSguMDUqZCksZj13ZSguMDc1KmQpLHY9d2UoLjExKmQpLGMmJihkLT1mLHIrPWYpLGgmJihkLT1tKSx1JiYoZC09dikpOihtPWY9d2UoLjE1KnMpLGMmJihzLT1mLHIrPWYpLGgmJihzLT1tKSk7dmFyIGI9Mip0LmJhclN0cm9rZVdpZHRoLGc9dC5iYXJCZWdpbkNpcmNsZT93ZShzKnQuYmFyQmVnaW5DaXJjbGUvMjAwLWIvMik6MCxwPXdlKHMqdC5iYXJXaWR0aC8xMDAtYiksdz13ZShkKnQuYmFyTGVuZ3RoLzEwMC1iKSx5PXdlKChkLXcpLzIpLGs9d2UoaSsobD9zLzI6eStnKSkseD13ZShyKyhsP2QteS1nK2IvMjpzLzIpKSxUPSFsfHx0Lmhhc0xlZnQmJnQuaGFzUmlnaHQ/MDoodC5oYXNSaWdodD8tMToxKSp0LnRpY2tzV2lkdGgvMTAwKnMsUz1sfHx0Lmhhc0xlZnQmJnQuaGFzUmlnaHQ/MDoodC5oYXNSaWdodD8tMToxKSp0LnRpY2tzV2lkdGgvMTAwKnM7cmV0dXJuIGUuYmFyRGltZW5zaW9ucz17aXNWZXJ0aWNhbDpsLHdpZHRoOnMsbGVuZ3RoOmQsYmFyV2lkdGg6cCxiYXJMZW5ndGg6dyxzdHJva2VXaWR0aDpiLGJhck1hcmdpbjp5LHJhZGl1czpnLHBpeGVsUmF0aW86YSxiYXJPZmZzZXQ6bnVsbCx0aXRsZU1hcmdpbjpjP2Y6MCx1bml0c01hcmdpbjpoP206MCxnZXQgdGlja3NMZW5ndGgoKXtyZXR1cm4gdGhpcy5iYXJMZW5ndGgtdGhpcy5iYXJPZmZzZXQtdGhpcy5zdHJva2VXaWR0aH0sWDppK1QsWTpyK1MseDA6aytULHkwOngrUyxiYXNlWDppLGJhc2VZOnIsdGlja3NQYWRkaW5nOnQudGlja3NQYWRkaW5nLzEwMH0sZS5iYXJEaW1lbnNpb25zfWZ1bmN0aW9uIEYoZSx0LGkscixvLG4sYSl7dmFyIGw9RyhlLHQscixvLG4sYSkscz1sLmlzVmVydGljYWwsZD1sLndpZHRoLGM9bC5iYXJXaWR0aCxoPWwuYmFyTGVuZ3RoLHU9bC5zdHJva2VXaWR0aCxmPWwuYmFyTWFyZ2luLG09bC5yYWRpdXMsdj1sLngwLGI9bC55MCxnPWwuWCxwPWwuWSx3PWg7aWYoZS5zYXZlKCksZS5iZWdpblBhdGgoKSx0LmJhckJlZ2luQ2lyY2xlKXt2YXIgeT1UZS5yYWRpYW5zKHM/MjcwOjApLGs9TWF0aC5hc2luKGMvMi9tKSx4PU1hdGguY29zKGspLFQ9TWF0aC5zaW4oayksUz12KyhzP20qVDptKngtdS8yKSxXPXM/Yi1tKng6YittKlQsTz15ZShzP1ctYjpTLXYpO2UuYmFyRGltZW5zaW9ucy5iYXJPZmZzZXQ9d2UoTyttKTt2YXIgVj1zP3dlKHYtbSpUKTpTLFA9cz9XOndlKGItbSpUKTtcXFwicHJvZ3Jlc3NcXFwiPT09aSYmKGg9ZS5iYXJEaW1lbnNpb25zLmJhck9mZnNldCsoaC1lLmJhckRpbWVuc2lvbnMuYmFyT2Zmc2V0KSooVGUubm9ybWFsaXplZFZhbHVlKHQpLm5vcm1hbC10Lm1pblZhbHVlKS8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKSk7dmFyIE09d2UoUytoLWUuYmFyRGltZW5zaW9ucy5iYXJPZmZzZXQrdS8yKSxBPXdlKFctaCtlLmJhckRpbWVuc2lvbnMuYmFyT2Zmc2V0LXUvMik7ZS5hcmModixiLG0seStrLHktaykscz8oZS5tb3ZlVG8oUyxQKSxlLmxpbmVUbyhTLEEpLGUubGluZVRvKFYsQSksZS5saW5lVG8oVixQKSk6KGUubW92ZVRvKFMsUCksZS5saW5lVG8oTSxQKSxlLmxpbmVUbyhNLFcpLGUubGluZVRvKFMsVykpfWVsc2V7dmFyIEI9d2Uocz9nKyhkLWMpLzI6ZytmKSxqPXdlKHM/cCtoK2Y6cCsoZC1jKS8yKTtcXFwicHJvZ3Jlc3NcXFwiPT09aSYmKGgqPSh0LnZhbHVlLXQubWluVmFsdWUpLyh0Lm1heFZhbHVlLXQubWluVmFsdWUpKSxzP2UucmVjdChCLGosYywtaCk6ZS5yZWN0KEIsaixoLGMpfVxcXCJwcm9ncmVzc1xcXCIhPT1pJiZ0LmJhclN0cm9rZVdpZHRoJiYoZS5saW5lV2lkdGg9dSxlLnN0cm9rZVN0eWxlPXQuY29sb3JCYXJTdHJva2UsZS5zdHJva2UoKSksXFxcInByb2dyZXNzXFxcIiE9PWkmJnQuY29sb3JCYXI/KGUuZmlsbFN0eWxlPXQuY29sb3JCYXJFbmQ/VGUubGluZWFyR3JhZGllbnQoZSx0LmNvbG9yQmFyLHQuY29sb3JCYXJFbmQsaCxzLHM/cDpnKTp0LmNvbG9yQmFyLGUuZmlsbCgpKTpcXFwicHJvZ3Jlc3NcXFwiPT09aSYmdC5jb2xvckJhclByb2dyZXNzJiYoZS5maWxsU3R5bGU9dC5jb2xvckJhclByb2dyZXNzRW5kP1RlLmxpbmVhckdyYWRpZW50KGUsdC5jb2xvckJhclByb2dyZXNzLHQuY29sb3JCYXJQcm9ncmVzc0VuZCx3LHMscz9wOmcpOnQuY29sb3JCYXJQcm9ncmVzcyxlLmZpbGwoKSksZS5jbG9zZVBhdGgoKSx0LmJhckJlZ2luQ2lyY2xlJiYoZS5iYXJEaW1lbnNpb25zLnJhZGl1cys9dSksZS5iYXJEaW1lbnNpb25zLmJhcldpZHRoKz11LGUuYmFyRGltZW5zaW9ucy5iYXJMZW5ndGgrPXV9ZnVuY3Rpb24gWChlLHQsaSxyLG8sbil7RihlLHQsXFxcIlxcXCIsaSxyLG8sbil9ZnVuY3Rpb24gWShlLHQpe3JldHVybiB0Lm5lZWRsZVNpZGUhPT1lfHx0LnRpY2tTaWRlIT09ZXx8dC5udW1iZXJTaWRlIT09ZX1mdW5jdGlvbiBVKGUsdCxpLHIsbyxuKXt0LmJhclByb2dyZXNzJiZGKGUsdCxcXFwicHJvZ3Jlc3NcXFwiLGkscixvLG4pfWZ1bmN0aW9uIHEoZSx0KXt2YXIgaT1lLmJhckRpbWVuc2lvbnMscj1pLmlzVmVydGljYWwsbz1pLndpZHRoLG49aS5sZW5ndGgsYT1pLmJhcldpZHRoLGw9aS5iYXJPZmZzZXQscz1pLmJhck1hcmdpbixkPWkuWCxjPWkuWSxoPWkudGlja3NMZW5ndGgsdT1pLnRpY2tzUGFkZGluZyxmPW8qKHBhcnNlRmxvYXQodC5oaWdobGlnaHRzV2lkdGgpfHwwKS8xMDA7aWYodC5oaWdobGlnaHRzJiZmKXt2YXIgbT1cXFwicmlnaHRcXFwiIT09dC50aWNrU2lkZSx2PVxcXCJsZWZ0XFxcIiE9PXQudGlja1NpZGUsYj0wLGc9dC5oaWdobGlnaHRzLmxlbmd0aCxwPShvLWEpLzIsdz10Lm1heFZhbHVlLXQubWluVmFsdWUseT13ZShyP2QrcDpkK3MrbCksaz1mLHg9cj9jK24tcy1sOmMrcCxUPXdlKCh0LnRpY2tzV2lkdGgvMTAwK3UpKm8pKyhmLXQudGlja3NXaWR0aC8xMDAqbyksUz13ZShhK3Uqbyk7Zm9yKGUuc2F2ZSgpO2I8ZztiKyspe3ZhciBXPXQuaGlnaGxpZ2h0c1tiXSxPPWgqeWUodC5taW5WYWx1ZS1XLmZyb20pL3csVj1oKnllKChXLnRvLVcuZnJvbSkvdyk7ZS5iZWdpblBhdGgoKSxlLmZpbGxTdHlsZT1XLmNvbG9yLHI/KG0mJmUucmVjdCh5LVQseC1PLGssLVYpLHYmJmUucmVjdCh5K1MseC1PLGssLVYpKToobSYmZS5yZWN0KHkrTyx4LVQsVixrKSx2JiZlLnJlY3QoeStPLHgrUyxWLGspKSxlLmZpbGwoKSxlLmNsb3NlUGF0aCgpfX19ZnVuY3Rpb24gSChlLHQsaSxyLG8pe2UuYmVnaW5QYXRoKCksZS5tb3ZlVG8odCxpKSxlLmxpbmVUbyhyLG8pLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKSxlLnNhdmUoKX1mdW5jdGlvbiBKKGUsdCxpLHIsbyxuLGEsbCxzKXt2YXIgZD1lLmJhckRpbWVuc2lvbnMsYz1kLmlzVmVydGljYWwsaD1kLmxlbmd0aCx1PWQuYmFyV2lkdGgsZj1kLmJhck9mZnNldCxtPWQuYmFyTWFyZ2luLHY9ZC5waXhlbFJhdGlvLGI9ZC53aWR0aCxnPWQuWCxwPWQuWSx3PWQudGlja3NMZW5ndGgseT1kLnRpY2tzUGFkZGluZyxrPShiLXUpLzIseD12b2lkIDAsVD12b2lkIDAsUz0wLFc9aS5sZW5ndGgsTz12b2lkIDAsVj1zKmIsUD1rLXkqYixNPWsrdStWK3kqYixBPXQgaW5zdGFuY2VvZiBBcnJheT90Om5ldyBBcnJheShpLmxlbmd0aCkuZmlsbCh0KTtlLmxpbmVXaWR0aD1sKnYsZS5zYXZlKCk7Zm9yKHZhciBCPXcvKG8tcik7UzxXO1MrKylPPWlbU10sZS5zdHJva2VTdHlsZT1BW1NdLGM/KFQ9cCtoLW0tZisoci1PKSpCLG4mJih4PWcrUCxIKGUseCxULHdlKHgtViksVCkpLGEmJih4PWcrTSxIKGUseCxULHdlKHgtViksVCkpKTooeD1nK20rZi0oci1PKSpCLG4mJihUPXArUCxIKGUseCxULHgsd2UoVC1WKSkpLGEmJihUPXArTSxIKGUseCx3ZShUKSx4LFQtVikpKX1mdW5jdGlvbiAkKGUsdCl7dmFyIGk9VGUucHJlcGFyZVRpY2tzKHQpLHI9bGUoaSwyKSxvPXJbMF0sbj1yWzFdLGE9MixsPSh0Lm1heFZhbHVlLXQubWluVmFsdWUpLyh0Lm1ham9yVGlja3MubGVuZ3RoLTEpLHM9dC5jb2xvck1ham9yVGlja3MgaW5zdGFuY2VvZiBBcnJheT90LmNvbG9yTWFqb3JUaWNrczpuZXcgQXJyYXkodC5tYWpvclRpY2tzLmxlbmd0aCkuZmlsbCh0LmNvbG9yU3Ryb2tlVGlja3N8fHQuY29sb3JNYWpvclRpY2tzKTtpZihKKGUscyx0LmV4YWN0VGlja3M/dC5tYWpvclRpY2tzOnQubWFqb3JUaWNrcy5tYXAoZnVuY3Rpb24oZSxpKXtyZXR1cm4gdC5taW5WYWx1ZStsKml9KSx0Lm1pblZhbHVlLHQubWF4VmFsdWUsbyxuLGEsdC50aWNrc1dpZHRoLzEwMCksdC5zdHJva2VUaWNrcyl7dmFyIGQ9ZS5iYXJEaW1lbnNpb25zLGM9ZC5pc1ZlcnRpY2FsLGg9ZC5sZW5ndGgsdT1kLndpZHRoLGY9ZC5iYXJXaWR0aCxtPWQuYmFyTWFyZ2luLHY9ZC5iYXJPZmZzZXQsYj1kLlgsZz1kLlkscD1kLnRpY2tzTGVuZ3RoLHc9ZC5waXhlbFJhdGlvLHk9ZC50aWNrc1BhZGRpbmcsaz0odS1mKS8yK2YreSp1LHg9KHUtZikvMi15KnUsVD12b2lkIDAsUz12b2lkIDAsVz12b2lkIDAsTz12b2lkIDA7ZS5zdHJva2VTdHlsZT10LmNvbG9yU3Ryb2tlVGlja3N8fHNbMF0sYSo9dyxjPyhTPWcraC1tLXYrYS8yLE89Uy1wLWEsbyYmKFc9VD13ZShiK3gpLFooZSxULFMsVyxPKSksbiYmKFc9VD13ZShiK2spLFooZSxULFMsVyxPKSkpOihUPWIrbSt2LWEvMixXPVQrcCthLG8mJihPPVM9d2UoZyt4KSxaKGUsVCxTLFcsTykpLG4mJihPPVM9d2UoZytrKSxaKGUsVCxTLFcsTykpKX19ZnVuY3Rpb24gWihlLHQsaSxyLG8pe2UuYmVnaW5QYXRoKCksZS5tb3ZlVG8odCxpKSxlLmxpbmVUbyhyLG8pLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKX1mdW5jdGlvbiBLKGUsdCl7dmFyIGk9VGUucHJlcGFyZVRpY2tzKHQpLHI9bGUoaSwyKSxvPXJbMF0sbj1yWzFdLGE9W10sbD10Lm1pblZhbHVlLHM9TWF0aC5hYnModC5taW5vclRpY2tzKXx8MCxkPXM/KHQubWF4VmFsdWUtdC5taW5WYWx1ZSkvKHMqKHQubWFqb3JUaWNrcy5sZW5ndGgtMSkpOjA7aWYocylpZih0LmV4YWN0VGlja3MpZm9yKHZhciBjPXhlLm1vZCh0Lm1ham9yVGlja3NbMF0scyl8fDA7bDx0Lm1heFZhbHVlO2wrPXMpYytsPHQubWF4VmFsdWUmJmEucHVzaChjK2wpO2Vsc2UgZm9yKDtsPHQubWF4VmFsdWU7bCs9ZClhLnB1c2gobCk7SihlLHQuY29sb3JNaW5vclRpY2tzfHx0LmNvbG9yU3Ryb2tlVGlja3MsYSx0Lm1pblZhbHVlLHQubWF4VmFsdWUsbyxuLDEsdC50aWNrc1dpZHRoTWlub3IvMTAwKX1mdW5jdGlvbiBRKGUsdCl7dmFyIGk9ZS5iYXJEaW1lbnNpb25zLHI9aS5pc1ZlcnRpY2FsLG89aS5sZW5ndGgsbj1pLndpZHRoLGE9aS5iYXJXaWR0aCxsPWkuYmFyTWFyZ2luLHM9aS5iYXJPZmZzZXQsZD1pLlgsYz1pLlksaD1pLnRpY2tzTGVuZ3RoLHU9aS50aWNrc1BhZGRpbmcsZj10Lm1heFZhbHVlLXQubWluVmFsdWUsbT1mLyh0Lm1ham9yVGlja3MubGVuZ3RoLTEpLHY9dC5leGFjdFRpY2tzP3QubWFqb3JUaWNrczp0Lm1ham9yVGlja3MubWFwKGZ1bmN0aW9uKGUsaSl7cmV0dXJuIHQubWluVmFsdWUrbSppfSksYj12Lmxlbmd0aCxnPVxcXCJyaWdodFxcXCIhPT10Lm51bWJlclNpZGUscD1cXFwibGVmdFxcXCIhPT10Lm51bWJlclNpZGUsdz10LmZvbnROdW1iZXJzU2l6ZSpuLzIwMCx5PTAsaz0odC50aWNrc1dpZHRoLzEwMCsyKnUpKm4seD0obi1hKS8yLWssVD0obi1hKS8yK2ErayxTPXZvaWQgMCxXPXZvaWQgMCxPPXZvaWQgMCxWPXZvaWQgMCxQPXQuY29sb3JOdW1iZXJzIGluc3RhbmNlb2YgQXJyYXk/dC5jb2xvck51bWJlcnM6bmV3IEFycmF5KGIpLmZpbGwodC5jb2xvck51bWJlcnMpLE09dC5udW1iZXJzTWFyZ2luLzEwMCpuO2ZvcihlLmZvbnQ9VGUuZm9udCh0LFxcXCJOdW1iZXJzXFxcIixuLzIwMCksZS5saW5lV2lkdGg9MCxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIjt5PGI7eSsrKWUuZmlsbFN0eWxlPVBbeV0sVj10Lm1ham9yVGlja3NbeV0sTz10LmV4YWN0VGlja3M/aCooKHZbeV0tdC5taW5WYWx1ZSkvZik6eSpoLyhiLTEpLHI/KFc9YytvLWwtcy1PK3cvMyxnJiYoZS50ZXh0QWxpZ249XFxcInJpZ2h0XFxcIixlLmZpbGxUZXh0KFYsZCt4LU0sVykpLHAmJihlLnRleHRBbGlnbj1cXFwibGVmdFxcXCIsZS5maWxsVGV4dChWLGQrVCtNLFcpKSk6KGUubWVhc3VyZVRleHQoVikud2lkdGgsUz1kK2wrcytPLGcmJmUuZmlsbFRleHQoVixTLGMreC1NKSxwJiZlLmZpbGxUZXh0KFYsUyxjK1QrdytNKSl9ZnVuY3Rpb24gZWUoZSx0KXtpZih0LnRpdGxlKXt2YXIgaT1lLmJhckRpbWVuc2lvbnMscj1pLmlzVmVydGljYWwsbz1pLndpZHRoLG49aS5sZW5ndGgsYT1pLmJhc2VYLGw9aS5iYXNlWSxzPWkudGl0bGVNYXJnaW4sZD10LmZvbnRUaXRsZVNpemUqby8yMDAsYz13ZShhKyhyP286bikvMiksaD13ZShsK3MvMi0ocj9kOmQvMiktLjAyNSoocj9uOm8pKTtlLnNhdmUoKSxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIixlLmZpbGxTdHlsZT10LmNvbG9yVGl0bGUsZS5mb250PVRlLmZvbnQodCxcXFwiVGl0bGVcXFwiLG8vMjAwKSxlLmxpbmVXaWR0aD0wLGUuZmlsbFRleHQodC50aXRsZSxjLGgscj9vOm4pfX1mdW5jdGlvbiB0ZShlLHQpe2lmKHQudW5pdHMpe3ZhciBpPWUuYmFyRGltZW5zaW9ucyxyPWkuaXNWZXJ0aWNhbCxvPWkud2lkdGgsbj1pLmxlbmd0aCxhPWkuYmFzZVgsbD1pLmJhc2VZLHM9aS51bml0c01hcmdpbixkPXQuZm9udFVuaXRzU2l6ZSpvLzIwMCxjPXdlKGErKHI/bzpuKS8yKSxoPXdlKGwrKHI/bjpvKStzLzItZC8yKTtlLnNhdmUoKSxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIixlLmZpbGxTdHlsZT10LmNvbG9yVW5pdHMsZS5mb250PVRlLmZvbnQodCxcXFwiVW5pdHNcXFwiLG8vMjAwKSxlLmxpbmVXaWR0aD0wLGUuZmlsbFRleHQodC51bml0cyxjLGgscj9vOm4pfX1mdW5jdGlvbiBpZShlLHQpe2lmKHQubmVlZGxlKXt2YXIgaT1lLmJhckRpbWVuc2lvbnMscj1pLmlzVmVydGljYWwsbz1pLndpZHRoLG49aS5sZW5ndGgsYT1pLmJhcldpZHRoLGw9aS5iYXJPZmZzZXQscz1pLmJhck1hcmdpbixkPWkudGlja3NMZW5ndGgsYz1pLlgsaD1pLlksdT1pLnRpY2tzUGFkZGluZyxmPVxcXCJyaWdodFxcXCIhPT10Lm5lZWRsZVNpZGUsbT1cXFwibGVmdFxcXCIhPT10Lm5lZWRsZVNpZGUsdj1kKihUZS5ub3JtYWxpemVkVmFsdWUodCkuaW5kZW50ZWQtdC5taW5WYWx1ZSkvKHQubWF4VmFsdWUtdC5taW5WYWx1ZSksYj0odC50aWNrc1dpZHRoLzEwMCt1KSpvLGc9YS8yK2IscD1nKih0Lm5lZWRsZUVuZC8xMDApLHc9dm9pZCAwLHk9dm9pZCAwLGs9dm9pZCAwLHg9dm9pZCAwLFQ9XFxcImFycm93XFxcIj09PXQubmVlZGxlVHlwZS50b0xvd2VyQ2FzZSgpP25lOm9lLFM9KG8tYSkvMixXPWcqKHQubmVlZGxlU3RhcnQvMTAwKSxPPVMtYi1XLFY9UythK2IrVztlLnNhdmUoKSxUZS5kcmF3TmVlZGxlU2hhZG93KGUsdCkscj8oaz13ZShoK24tcy1sLXYpLGYmJih3PXdlKGMrTykseT13K3AsVChlLHQsdyxrLHksayxwKSksbSYmKHc9d2UoYytWKSx5PXctcCxUKGUsdCx3LGsseSxrLHAsITApKSk6KHc9d2UoYytzK2wrdiksZiYmKGs9d2UoaCtPKSx4PWsrcCxUKGUsdCx3LGssdyx4LHApKSxtJiYoaz13ZShoK1YpLHg9ay1wLFQoZSx0LHcsayx3LHgscCwhMCkpKSxlLnJlc3RvcmUoKX19ZnVuY3Rpb24gcmUoZSx0LGkscil7cmV0dXJuIHQuY29sb3JOZWVkbGVFbmQ/VGUubGluZWFyR3JhZGllbnQoZSxyP3QuY29sb3JOZWVkbGVFbmQ6dC5jb2xvck5lZWRsZSxyP3QuY29sb3JOZWVkbGU6dC5jb2xvck5lZWRsZUVuZCxpLCFlLmJhckRpbWVuc2lvbnMuaXNWZXJ0aWNhbCk6dC5jb2xvck5lZWRsZX1mdW5jdGlvbiBvZShlLHQsaSxyLG8sbixhLGwpe2UubGluZVdpZHRoPXQubmVlZGxlV2lkdGgsZS5zdHJva2VTdHlsZT1yZShlLHQsYSxsKSxlLmJlZ2luUGF0aCgpLGUubW92ZVRvKGksciksZS5saW5lVG8obyxuKSxlLnN0cm9rZSgpLGUuY2xvc2VQYXRoKCl9ZnVuY3Rpb24gbmUoZSx0LGkscixvLG4sYSxsKXt2YXIgcz13ZSguNCphKSxkPWEtcyxjPWk9PT1vLGg9dC5uZWVkbGVXaWR0aC8yO2UuZmlsbFN0eWxlPXJlKGUsdCxhLGwpLGUuYmVnaW5QYXRoKCksYz8ocj5uJiYoZCo9LTEpLGUubW92ZVRvKGktaCxyKSxlLmxpbmVUbyhpK2gsciksZS5saW5lVG8oaStoLHIrZCksZS5saW5lVG8oaSxuKSxlLmxpbmVUbyhpLWgscitkKSxlLmxpbmVUbyhpLWgscikpOihpPm8mJihkKj0tMSksZS5tb3ZlVG8oaSxyLWgpLGUubGluZVRvKGkscitoKSxlLmxpbmVUbyhpK2QscitoKSxlLmxpbmVUbyhvLHIpLGUubGluZVRvKGkrZCxyLWgpLGUubGluZVRvKGksci1oKSksZS5maWxsKCksZS5jbG9zZVBhdGgoKX1mdW5jdGlvbiBhZShlLHQsaSxyLG8sbixhKXt2YXIgbD0ocGFyc2VGbG9hdCh0LmZvbnRWYWx1ZVNpemUpfHwwKSpuLzIwMCxzPSguMTEqYS1sKS8yO2UuYmFyRGltZW5zaW9ucy5pc1ZlcnRpY2FsJiZUZS5kcmF3VmFsdWVCb3goZSx0LGkscituLzIsbythLWwtcyxuKX12YXIgbGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIGk9W10scj0hMCxvPSExLG49dm9pZCAwO3RyeXtmb3IodmFyIGEsbD1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKHI9KGE9bC5uZXh0KCkpLmRvbmUpJiYoaS5wdXNoKGEudmFsdWUpLCF0fHxpLmxlbmd0aCE9PXQpO3I9ITApO31jYXRjaChlKXtvPSEwLG49ZX1maW5hbGx5e3RyeXshciYmbC5yZXR1cm4mJmwucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IG59fXJldHVybiBpfXJldHVybiBmdW5jdGlvbih0LGkpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHQ7aWYoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSlyZXR1cm4gZSh0LGkpO3Rocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcXFwiKX19KCksc2U9ZnVuY3Rpb24gZSh0LGkscil7bnVsbD09PXQmJih0PUZ1bmN0aW9uLnByb3RvdHlwZSk7dmFyIG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGkpO2lmKHZvaWQgMD09PW8pe3ZhciBuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbD09PW4/dm9pZCAwOmUobixpLHIpfWlmKFxcXCJ2YWx1ZVxcXCJpbiBvKXJldHVybiBvLnZhbHVlO3ZhciBhPW8uZ2V0O2lmKHZvaWQgMCE9PWEpcmV0dXJuIGEuY2FsbChyKX0sZGU9ZnVuY3Rpb24gZSh0LGkscixvKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsaSk7aWYodm9pZCAwPT09bil7dmFyIGE9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO251bGwhPT1hJiZlKGEsaSxyLG8pfWVsc2UgaWYoXFxcInZhbHVlXFxcImluIG4mJm4ud3JpdGFibGUpbi52YWx1ZT1yO2Vsc2V7dmFyIGw9bi5zZXQ7dm9pZCAwIT09bCYmbC5jYWxsKG8scil9cmV0dXJuIHJ9LGNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgcj10W2ldO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFxcXCJ2YWx1ZVxcXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpO09iamVjdC5hc3NpZ258fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QsXFxcImFzc2lnblxcXCIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09ZXx8bnVsbD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XFxcIik7Zm9yKHZhciBpPU9iamVjdChlKSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7dmFyIG89YXJndW1lbnRzW3JdO2lmKHZvaWQgMCE9PW8mJm51bGwhPT1vKWZvcih2YXIgbj1PYmplY3Qua2V5cyhPYmplY3QobykpLGE9MCxsPW4ubGVuZ3RoO2E8bDthKyspe3ZhciBzPW5bYV0sZD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8scyk7dm9pZCAwIT09ZCYmZC5lbnVtZXJhYmxlJiYoaVtzXT1vW3NdKX19cmV0dXJuIGl9fSksQXJyYXkucHJvdG90eXBlLmluZGV4T2Z8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsXFxcImluZGV4T2ZcXFwiLHt2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpO2lmKG51bGw9PT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoJ1xcXCJ0aGlzXFxcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7dmFyIHI9T2JqZWN0KHRoaXMpLG89ci5sZW5ndGg+Pj4wO2lmKDA9PT1vKXJldHVybi0xO3ZhciBuPSt0fHwwO2lmKE1hdGguYWJzKG4pPT09MS8wJiYobj0wKSxuPj1vKXJldHVybi0xO2ZvcihpPU1hdGgubWF4KG4+PTA/bjpvLU1hdGguYWJzKG4pLDApO2k8bzspe2lmKGkgaW4gciYmcltpXT09PWUpcmV0dXJuIGk7aSsrfXJldHVybi0xfX0pLEFycmF5LnByb3RvdHlwZS5maWxsfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLFxcXCJmaWxsXFxcIix7dmFsdWU6ZnVuY3Rpb24oZSl7aWYobnVsbD09PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwidGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkXFxcIik7Zm9yKHZhciB0PU9iamVjdCh0aGlzKSxpPXQubGVuZ3RoPj4+MCxyPWFyZ3VtZW50c1sxXSxvPXI+PjAsbj1vPDA/TWF0aC5tYXgoaStvLDApOk1hdGgubWluKG8saSksYT1hcmd1bWVudHNbMl0sbD12b2lkIDA9PT1hP2k6YT4+MCxzPWw8MD9NYXRoLm1heChpK2wsMCk6TWF0aC5taW4obCxpKTtuPHM7KXRbbl09ZSxuKys7cmV0dXJuIHR9fSksXFxcInVuZGVmaW5lZFxcXCI9PXR5cGVvZiB3aW5kb3cmJih3aW5kb3c9XFxcInVuZGVmaW5lZFxcXCI9PXR5cGVvZiBnbG9iYWw/e306Z2xvYmFsKTt2YXIgaGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7byh0aGlzLGUpLHRoaXMuX2V2ZW50cz17fSx0aGlzLmFkZExpc3RlbmVyPXRoaXMub24sdGhpcy5yZW1vdmVMaXN0ZW5lcj10aGlzLm9mZn1yZXR1cm4gY2UoZSxbe2tleTpcXFwiZW1pdFxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5fZXZlbnRzW2VdKXtmb3IodmFyIHQ9MCxpPXRoaXMuX2V2ZW50c1tlXS5sZW5ndGgscj1hcmd1bWVudHMubGVuZ3RoLG89QXJyYXkocj4xP3ItMTowKSxuPTE7bjxyO24rKylvW24tMV09YXJndW1lbnRzW25dO2Zvcig7dDxpO3QrKyl0aGlzLl9ldmVudHNbZV1bdF0mJnRoaXMuX2V2ZW50c1tlXVt0XS5hcHBseSh0aGlzLG8pfX19LHtrZXk6XFxcIm9uY2VcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGk9QXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKylpW3ItMV09YXJndW1lbnRzW3JdO2Zvcih2YXIgbz0wLG49aS5sZW5ndGgsYT10aGlzO288bjtvKyspIWZ1bmN0aW9uKCl7dmFyIHQ9aVtvXSxyPWZ1bmN0aW9uIGkoKXthLm9mZihlLGkpLHQuYXBwbHkoYSxhcmd1bWVudHMpfTtpW29dPXJ9KCk7dGhpcy5vbi5hcHBseSh0aGlzLFtlXS5jb25jYXQoaSkpfX0se2tleTpcXFwib25cXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX2V2ZW50c1tlXXx8KHRoaXMuX2V2ZW50c1tlXT1bXSk7Zm9yKHZhciB0PTAsaT1hcmd1bWVudHMubGVuZ3RoPD0xPzA6YXJndW1lbnRzLmxlbmd0aC0xO3Q8aTt0KyspdGhpcy5fZXZlbnRzW2VdLnB1c2goYXJndW1lbnRzLmxlbmd0aDw9dCsxP3ZvaWQgMDphcmd1bWVudHNbdCsxXSl9fSx7a2V5OlxcXCJvZmZcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuX2V2ZW50c1tlXSlmb3IodmFyIHQ9MCxpPWFyZ3VtZW50cy5sZW5ndGg8PTE/MDphcmd1bWVudHMubGVuZ3RoLTE7dDxpO3QrKylmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aDw9dCsxP3ZvaWQgMDphcmd1bWVudHNbdCsxXSxvPXZvaWQgMDt+KG89dGhpcy5fZXZlbnRzW2VdLmluZGV4T2YocikpOyl0aGlzLl9ldmVudHNbZV0uc3BsaWNlKG8sMSl9fSx7a2V5OlxcXCJyZW1vdmVBbGxMaXN0ZW5lcnNcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2RlbGV0ZSB0aGlzLl9ldmVudHNbZV19fSx7a2V5OlxcXCJsaXN0ZW5lcnNcXFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9ldmVudHN9fV0pLGV9KCksdWU9bihcXFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXFxcIil8fGZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGUoKG5ldyBEYXRlKS5nZXRUaW1lKCkpfSwxZTMvNjApfSxmZT17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxxdWFkOmZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLnBvdyhlLDIpfSxkZXF1YWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtZmUucXVhZCgxLWUpfSxxdWludDpmdW5jdGlvbihlKXtyZXR1cm4gTWF0aC5wb3coZSw1KX0sZGVxdWludDpmdW5jdGlvbihlKXtyZXR1cm4gMS1NYXRoLnBvdygxLWUsNSl9LGN5Y2xlOmZ1bmN0aW9uKGUpe3JldHVybiAxLU1hdGguc2luKE1hdGguYWNvcyhlKSl9LGRlY3ljbGU6ZnVuY3Rpb24oZSl7cmV0dXJuIE1hdGguc2luKE1hdGguYWNvcygxLWUpKX0sYm91bmNlOmZ1bmN0aW9uKGUpe3JldHVybiAxLWZlLmRlYm91bmNlKDEtZSl9LGRlYm91bmNlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLGk9MTsxO3QrPWksaS89MilpZihlPj0oNy00KnQpLzExKXJldHVybi1NYXRoLnBvdygoMTEtNip0LTExKmUpLzQsMikrTWF0aC5wb3coaSwyKX0sZWxhc3RpYzpmdW5jdGlvbihlKXtyZXR1cm4gMS1mZS5kZWxhc3RpYygxLWUpfSxkZWxhc3RpYzpmdW5jdGlvbihlKXtyZXR1cm4gTWF0aC5wb3coMiwxMCooZS0xKSkqTWF0aC5jb3MoMjAqTWF0aC5QSSoxLjUvMyplKX19LG1lPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcXFwibGluZWFyXFxcIixpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToyNTAscj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ZnVuY3Rpb24oKXt9LG49YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOmZ1bmN0aW9uKCl7fTtpZihvKHRoaXMsZSksdGhpcy5kdXJhdGlvbj1pLHRoaXMucnVsZT10LHRoaXMuZHJhdz1yLHRoaXMuZW5kPW4sXFxcImZ1bmN0aW9uXFxcIiE9dHlwZW9mIHRoaXMuZHJhdyl0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGFuaW1hdGlvbiBkcmF3IGNhbGxiYWNrOlxcXCIscik7aWYoXFxcImZ1bmN0aW9uXFxcIiE9dHlwZW9mIHRoaXMuZW5kKXRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYW5pbWF0aW9uIGVuZCBjYWxsYmFjazpcXFwiLG4pfXJldHVybiBjZShlLFt7a2V5OlxcXCJhbmltYXRlXFxcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXM7dGhpcy5mcmFtZSYmdGhpcy5jYW5jZWwoKTt2YXIgcj13aW5kb3cucGVyZm9ybWFuY2UmJndpbmRvdy5wZXJmb3JtYW5jZS5ub3c/d2luZG93LnBlcmZvcm1hbmNlLm5vdygpOm4oXFxcImFuaW1hdGlvblN0YXJ0VGltZVxcXCIpfHxEYXRlLm5vdygpO2U9ZXx8dGhpcy5kcmF3LHQ9dHx8dGhpcy5lbmQsdGhpcy5kcmF3PWUsdGhpcy5lbmQ9dCx0aGlzLmZyYW1lPXVlKGZ1bmN0aW9uKG8pe3JldHVybiBhKG8sZSxyLGZlW2kucnVsZV18fGkucnVsZSxpLmR1cmF0aW9uLHQsaSl9KX19LHtrZXk6XFxcImNhbmNlbFxcXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmZyYW1lKXsobihcXFwiY2FuY2VsQW5pbWF0aW9uRnJhbWVcXFwiKXx8ZnVuY3Rpb24oZSl7fSkodGhpcy5mcmFtZSksdGhpcy5mcmFtZT1udWxsfX19LHtrZXk6XFxcImRlc3Ryb3lcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jYW5jZWwoKSx0aGlzLmRyYXc9bnVsbCx0aGlzLmVuZD1udWxsfX1dKSxlfSgpO21lLnJ1bGVzPWZlO3ZhciB2ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoaSxyLG4pe28odGhpcyx0KSx0aGlzLm9wdGlvbnM9aSx0aGlzLmVsZW1lbnQ9ci50b0xvd2VyQ2FzZSgpLHRoaXMudHlwZT10LnRvRGFzaGVkKG4pLHRoaXMuVHlwZT1lW25dLHRoaXMubXV0YXRpb25zT2JzZXJ2ZWQ9ITEsdGhpcy5pc09ic2VydmFibGU9ISF3aW5kb3cuTXV0YXRpb25PYnNlcnZlcix3aW5kb3cuR0FVR0VTX05PX0FVVE9fSU5JVHx8dC5kb21SZWFkeSh0aGlzLnRyYXZlcnNlLmJpbmQodGhpcykpfXJldHVybiBjZSh0LFt7a2V5OlxcXCJpc1ZhbGlkTm9kZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuISghZS50YWdOYW1lfHxlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSE9PXRoaXMuZWxlbWVudHx8ZS5nZXRBdHRyaWJ1dGUoXFxcImRhdGEtdHlwZVxcXCIpIT09dGhpcy50eXBlKX19LHtrZXk6XFxcInRyYXZlcnNlXFxcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLmVsZW1lbnQpLHQ9MCxpPWUubGVuZ3RoO3Q8aTt0KyspdGhpcy5wcm9jZXNzKGVbdF0pO3RoaXMuaXNPYnNlcnZhYmxlJiYhdGhpcy5tdXRhdGlvbnNPYnNlcnZlZCYmKG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub2JzZXJ2ZS5iaW5kKHRoaXMpKS5vYnNlcnZlKGRvY3VtZW50LmJvZHkse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLGF0dHJpYnV0ZXM6ITAsY2hhcmFjdGVyRGF0YTohMCxhdHRyaWJ1dGVPbGRWYWx1ZTohMCxjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6ITB9KSx0aGlzLm11dGF0aW9uc09ic2VydmVkPSEwKX19LHtrZXk6XFxcIm9ic2VydmVcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLGk9ZS5sZW5ndGg7dDxpO3QrKyl7dmFyIHI9ZVt0XTtpZihcXFwiYXR0cmlidXRlc1xcXCI9PT1yLnR5cGUmJlxcXCJkYXRhLXR5cGVcXFwiPT09ci5hdHRyaWJ1dGVOYW1lJiZ0aGlzLmlzVmFsaWROb2RlKHIudGFyZ2V0KSYmci5vbGRWYWx1ZSE9PXRoaXMudHlwZSlzZXRUaW1lb3V0KHRoaXMucHJvY2Vzcy5iaW5kKHRoaXMsci50YXJnZXQpKTtlbHNlIGlmKHIuYWRkZWROb2RlcyYmci5hZGRlZE5vZGVzLmxlbmd0aClmb3IodmFyIG89MCxuPXIuYWRkZWROb2Rlcy5sZW5ndGg7bzxuO28rKylzZXRUaW1lb3V0KHRoaXMucHJvY2Vzcy5iaW5kKHRoaXMsci5hZGRlZE5vZGVzW29dKSl9fX0se2tleTpcXFwicHJvY2Vzc1xcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcztpZighdGhpcy5pc1ZhbGlkTm9kZShlKSlyZXR1cm4gbnVsbDt2YXIgcj12b2lkIDAsbz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpLG49bnVsbDtmb3IociBpbiBvKWlmKG8uaGFzT3duUHJvcGVydHkocikpe3ZhciBhPXQudG9BdHRyaWJ1dGVOYW1lKHIpLGw9dC5wYXJzZShlLmdldEF0dHJpYnV0ZShhKSk7bnVsbCE9PWwmJnZvaWQgMCE9PWwmJihvW3JdPWwpfXJldHVybiBvLnJlbmRlclRvPWUsbj1uZXcgdGhpcy5UeXBlKG8pLG4uZHJhdyYmbi5kcmF3KCksdGhpcy5pc09ic2VydmFibGU/KG4ub2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24ocil7ci5mb3JFYWNoKGZ1bmN0aW9uKHIpe2lmKFxcXCJhdHRyaWJ1dGVzXFxcIj09PXIudHlwZSl7dmFyIG89ci5hdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksYT1lLmdldEF0dHJpYnV0ZShvKS50b0xvd2VyQ2FzZSgpO2lmKFxcXCJkYXRhLXR5cGVcXFwiPT09byYmYSYmYSE9PWkudHlwZSluLm9ic2VydmVyLmRpc2Nvbm5lY3QoKSxkZWxldGUgbi5vYnNlcnZlcixuLmRlc3Ryb3kmJm4uZGVzdHJveSgpO2Vsc2UgaWYoXFxcImRhdGEtXFxcIj09PW8uc3Vic3RyKDAsNSkpe3ZhciBsPW8uc3Vic3RyKDUpLnNwbGl0KFxcXCItXFxcIikubWFwKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKTplfSkuam9pbihcXFwiXFxcIikscz17fTtzW2xdPXQucGFyc2UoZS5nZXRBdHRyaWJ1dGUoci5hdHRyaWJ1dGVOYW1lKSksXFxcInZhbHVlXFxcIj09PWw/biYmKG4udmFsdWU9c1tsXSk6bi51cGRhdGUmJm4udXBkYXRlKHMpfX19KX0pLG4ub2JzZXJ2ZXIub2JzZXJ2ZShlLHthdHRyaWJ1dGVzOiEwfSksbik6bn19XSxbe2tleTpcXFwicGFyc2VcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKFxcXCJ0cnVlXFxcIj09PWUpcmV0dXJuITA7aWYoXFxcImZhbHNlXFxcIj09PWUpcmV0dXJuITE7aWYoXFxcInVuZGVmaW5lZFxcXCIhPT1lKXtpZihcXFwibnVsbFxcXCI9PT1lKXJldHVybiBudWxsO2lmKC9eWy0rIy5cXFxcd1xcXFxkXFxcXHNdKyg/OixbLSsjLlxcXFx3XFxcXGRcXFxcc10qKSskLy50ZXN0KGUpKXJldHVybiBlLnNwbGl0KFxcXCIsXFxcIik7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKGUpe31yZXR1cm4gZX19fSx7a2V5OlxcXCJ0b0Rhc2hlZFxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoLyg/PVtBLVpdKS8pLGk9MSxyPXQubGVuZ3RoLG89dFswXS50b0xvd2VyQ2FzZSgpO2k8cjtpKyspbys9XFxcIi1cXFwiK3RbaV0udG9Mb3dlckNhc2UoKTtyZXR1cm4gb319LHtrZXk6XFxcInRvQ2FtZWxDYXNlXFxcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXSxpPWUuc3BsaXQoLy0vKSxyPTAsbz1pLmxlbmd0aCxuPVxcXCJcXFwiO3I8bztyKyspbis9cnx8dD9pW3JdWzBdLnRvVXBwZXJDYXNlKCkraVtyXS5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTppW3JdLnRvTG93ZXJDYXNlKCk7cmV0dXJuIG59fSx7a2V5OlxcXCJ0b0F0dHJpYnV0ZU5hbWVcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVyblxcXCJkYXRhLVxcXCIrdC50b0Rhc2hlZChlKX19LHtrZXk6XFxcImRvbVJlYWR5XFxcIix2YWx1ZTpmdW5jdGlvbihlKXtpZigvY29tcHxpbnRlcnxsb2FkZWQvLnRlc3QoKHdpbmRvdy5kb2N1bWVudHx8e30pLnJlYWR5U3RhdGUrXFxcIlxcXCIpKXJldHVybiBlKCk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXI/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXFxcIkRPTUNvbnRlbnRMb2FkZWRcXFwiLGUsITEpOndpbmRvdy5hdHRhY2hFdmVudCYmd2luZG93LmF0dGFjaEV2ZW50KFxcXCJvbmxvYWRcXFwiLGUpfX1dKSx0fSgpLGJlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGkscil7byh0aGlzLGUpLGUuY29sbGVjdGlvbi5wdXNoKHRoaXMpLHRoaXMud2lkdGg9aXx8MCx0aGlzLmhlaWdodD1yfHwwLHRoaXMuZWxlbWVudD10LHRoaXMuaW5pdCgpfXJldHVybiBjZShlLFt7a2V5OlxcXCJpbml0XFxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWUucGl4ZWxSYXRpbzt0aGlzLmVsZW1lbnQud2lkdGg9dGhpcy53aWR0aCp0LHRoaXMuZWxlbWVudC5oZWlnaHQ9dGhpcy5oZWlnaHQqdCx0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGg9dGhpcy53aWR0aCtcXFwicHhcXFwiLHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQ9dGhpcy5oZWlnaHQrXFxcInB4XFxcIix0aGlzLmVsZW1lbnRDbG9uZT10aGlzLmVsZW1lbnQuY2xvbmVOb2RlKCEwKSx0aGlzLmNvbnRleHQ9dGhpcy5lbGVtZW50LmdldENvbnRleHQoXFxcIjJkXFxcIiksdGhpcy5jb250ZXh0Q2xvbmU9dGhpcy5lbGVtZW50Q2xvbmUuZ2V0Q29udGV4dChcXFwiMmRcXFwiKSx0aGlzLmRyYXdXaWR0aD10aGlzLmVsZW1lbnQud2lkdGgsdGhpcy5kcmF3SGVpZ2h0PXRoaXMuZWxlbWVudC5oZWlnaHQsdGhpcy5kcmF3WD10aGlzLmRyYXdXaWR0aC8yLHRoaXMuZHJhd1k9dGhpcy5kcmF3SGVpZ2h0LzIsdGhpcy5taW5TaWRlPXRoaXMuZHJhd1g8dGhpcy5kcmF3WT90aGlzLmRyYXdYOnRoaXMuZHJhd1ksdGhpcy5lbGVtZW50Q2xvbmUuaW5pdGlhbGl6ZWQ9ITEsdGhpcy5jb250ZXh0Q2xvbmUudHJhbnNsYXRlKHRoaXMuZHJhd1gsdGhpcy5kcmF3WSksdGhpcy5jb250ZXh0Q2xvbmUuc2F2ZSgpLHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5kcmF3WCx0aGlzLmRyYXdZKSx0aGlzLmNvbnRleHQuc2F2ZSgpLHRoaXMuY29udGV4dC5tYXg9dGhpcy5jb250ZXh0Q2xvbmUubWF4PXRoaXMubWluU2lkZSx0aGlzLmNvbnRleHQubWF4UmFkaXVzPXRoaXMuY29udGV4dENsb25lLm1heFJhZGl1cz1udWxsfX0se2tleTpcXFwiZGVzdHJveVxcXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1lLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzKTt+dCYmZS5jb2xsZWN0aW9uLnNwbGljZSh0LDEpLHRoaXMuY29udGV4dC5jbGVhclJlY3QoLXRoaXMuZHJhd1gsLXRoaXMuZHJhd1ksdGhpcy5kcmF3V2lkdGgsdGhpcy5kcmF3SGVpZ2h0KSx0aGlzLmNvbnRleHQubWF4PW51bGwsZGVsZXRlIHRoaXMuY29udGV4dC5tYXgsdGhpcy5jb250ZXh0Lm1heFJhZGl1cz1udWxsLGRlbGV0ZSB0aGlzLmNvbnRleHQubWF4UmFkaXVzLHRoaXMuY29udGV4dD1udWxsLHRoaXMuY29udGV4dENsb25lPW51bGwsdGhpcy5lbGVtZW50Q2xvbmU9bnVsbCx0aGlzLmVsZW1lbnQ9bnVsbCx0aGlzLm9uUmVkcmF3PW51bGx9fSx7a2V5OlxcXCJjb21taXRcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9ZS5waXhlbFJhdGlvO3JldHVybiAxIT09dCYmKHRoaXMuY29udGV4dENsb25lLnNjYWxlKHQsdCksdGhpcy5jb250ZXh0Q2xvbmUuc2F2ZSgpKSx0aGlzfX0se2tleTpcXFwicmVkcmF3XFxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXQoKSx0aGlzLm9uUmVkcmF3JiZ0aGlzLm9uUmVkcmF3KCksdGhpc319XSxbe2tleTpcXFwicmVkcmF3XFxcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgdD0wLGk9ZS5jb2xsZWN0aW9uLmxlbmd0aDt0PGk7dCsrKWUuY29sbGVjdGlvblt0XS5yZWRyYXcoKX19LHtrZXk6XFxcInBpeGVsUmF0aW9cXFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MX19XSksZX0oKTtiZS5jb2xsZWN0aW9uPVtdLHdpbmRvdy5tYXRjaE1lZGlhJiZ3aW5kb3cubWF0Y2hNZWRpYShcXFwic2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KVxcXCIpLmFkZExpc3RlbmVyKGJlLnJlZHJhdyk7dmFyIGdlPXtyZW5kZXJUbzpudWxsLHdpZHRoOjAsaGVpZ2h0OjAsbWluVmFsdWU6MCxtYXhWYWx1ZToxMDAsdmFsdWU6MCx1bml0czohMSxleGFjdFRpY2tzOiExLG1ham9yVGlja3M6WzAsMjAsNDAsNjAsODAsMTAwXSxtaW5vclRpY2tzOjEwLHN0cm9rZVRpY2tzOiEwLGFuaW1hdGVkVmFsdWU6ITEsYW5pbWF0ZU9uSW5pdDohMSx0aXRsZTohMSxib3JkZXJzOiEwLG51bWJlcnNNYXJnaW46MSxsaXN0ZW5lcnM6bnVsbCx2YWx1ZUludDozLHZhbHVlRGVjOjIsbWFqb3JUaWNrc0ludDoxLG1ham9yVGlja3NEZWM6MCxhbmltYXRpb246ITAsYW5pbWF0aW9uRHVyYXRpb246NTAwLGFuaW1hdGlvblJ1bGU6XFxcImN5Y2xlXFxcIixjb2xvclBsYXRlOlxcXCIjZmZmXFxcIixjb2xvclBsYXRlRW5kOlxcXCJcXFwiLGNvbG9yTWFqb3JUaWNrczpcXFwiIzQ0NFxcXCIsXFxuY29sb3JNaW5vclRpY2tzOlxcXCIjNjY2XFxcIixjb2xvclN0cm9rZVRpY2tzOlxcXCJcXFwiLGNvbG9yVGl0bGU6XFxcIiM4ODhcXFwiLGNvbG9yVW5pdHM6XFxcIiM4ODhcXFwiLGNvbG9yTnVtYmVyczpcXFwiIzQ0NFxcXCIsY29sb3JOZWVkbGU6XFxcInJnYmEoMjQwLDEyOCwxMjgsMSlcXFwiLGNvbG9yTmVlZGxlRW5kOlxcXCJyZ2JhKDI1NSwxNjAsMTIyLC45KVxcXCIsY29sb3JWYWx1ZVRleHQ6XFxcIiM0NDRcXFwiLGNvbG9yVmFsdWVUZXh0U2hhZG93OlxcXCJyZ2JhKDAsMCwwLDAuMylcXFwiLGNvbG9yQm9yZGVyU2hhZG93OlxcXCJyZ2JhKDAsMCwwLDAuNSlcXFwiLGNvbG9yQm9yZGVyT3V0ZXI6XFxcIiNkZGRcXFwiLGNvbG9yQm9yZGVyT3V0ZXJFbmQ6XFxcIiNhYWFcXFwiLGNvbG9yQm9yZGVyTWlkZGxlOlxcXCIjZWVlXFxcIixjb2xvckJvcmRlck1pZGRsZUVuZDpcXFwiI2YwZjBmMFxcXCIsY29sb3JCb3JkZXJJbm5lcjpcXFwiI2ZhZmFmYVxcXCIsY29sb3JCb3JkZXJJbm5lckVuZDpcXFwiI2NjY1xcXCIsY29sb3JWYWx1ZUJveFJlY3Q6XFxcIiM4ODhcXFwiLGNvbG9yVmFsdWVCb3hSZWN0RW5kOlxcXCIjNjY2XFxcIixjb2xvclZhbHVlQm94QmFja2dyb3VuZDpcXFwiI2JhYmFiMlxcXCIsY29sb3JWYWx1ZUJveFNoYWRvdzpcXFwicmdiYSgwLDAsMCwxKVxcXCIsY29sb3JOZWVkbGVTaGFkb3dVcDpcXFwicmdiYSgyLDI1NSwyNTUsMC4yKVxcXCIsY29sb3JOZWVkbGVTaGFkb3dEb3duOlxcXCJyZ2JhKDE4OCwxNDMsMTQzLDAuNDUpXFxcIixjb2xvckJhclN0cm9rZTpcXFwiIzIyMlxcXCIsY29sb3JCYXI6XFxcIiNjY2NcXFwiLGNvbG9yQmFyUHJvZ3Jlc3M6XFxcIiM4ODhcXFwiLGNvbG9yQmFyU2hhZG93OlxcXCIjMDAwXFxcIixmb250TnVtYmVyczpcXFwiQXJpYWxcXFwiLGZvbnRUaXRsZTpcXFwiQXJpYWxcXFwiLGZvbnRVbml0czpcXFwiQXJpYWxcXFwiLGZvbnRWYWx1ZTpcXFwiQXJpYWxcXFwiLGZvbnROdW1iZXJzU2l6ZToyMCxmb250VGl0bGVTaXplOjI0LGZvbnRVbml0c1NpemU6MjIsZm9udFZhbHVlU2l6ZToyNixmb250TnVtYmVyc1N0eWxlOlxcXCJub3JtYWxcXFwiLGZvbnRUaXRsZVN0eWxlOlxcXCJub3JtYWxcXFwiLGZvbnRVbml0c1N0eWxlOlxcXCJub3JtYWxcXFwiLGZvbnRWYWx1ZVN0eWxlOlxcXCJub3JtYWxcXFwiLGZvbnROdW1iZXJzV2VpZ2h0OlxcXCJub3JtYWxcXFwiLGZvbnRUaXRsZVdlaWdodDpcXFwibm9ybWFsXFxcIixmb250VW5pdHNXZWlnaHQ6XFxcIm5vcm1hbFxcXCIsZm9udFZhbHVlV2VpZ2h0OlxcXCJub3JtYWxcXFwiLG5lZWRsZTohMCxuZWVkbGVTaGFkb3c6ITAsbmVlZGxlVHlwZTpcXFwiYXJyb3dcXFwiLG5lZWRsZVN0YXJ0OjUsbmVlZGxlRW5kOjg1LG5lZWRsZVdpZHRoOjQsYm9yZGVyT3V0ZXJXaWR0aDozLGJvcmRlck1pZGRsZVdpZHRoOjMsYm9yZGVySW5uZXJXaWR0aDozLGJvcmRlclNoYWRvd1dpZHRoOjMsdmFsdWVCb3g6ITAsdmFsdWVCb3hTdHJva2U6NSx2YWx1ZUJveFdpZHRoOjAsdmFsdWVUZXh0OlxcXCJcXFwiLHZhbHVlVGV4dFNoYWRvdzohMCx2YWx1ZUJveEJvcmRlclJhZGl1czoyLjUsaGlnaGxpZ2h0czpbe2Zyb206MjAsdG86NjAsY29sb3I6XFxcIiNlZWVcXFwifSx7ZnJvbTo2MCx0bzo4MCxjb2xvcjpcXFwiI2NjY1xcXCJ9LHtmcm9tOjgwLHRvOjEwMCxjb2xvcjpcXFwiIzk5OVxcXCJ9XSxoaWdobGlnaHRzV2lkdGg6MTUsYmFyV2lkdGg6MjAsYmFyU3Ryb2tlV2lkdGg6MCxiYXJQcm9ncmVzczohMCxiYXJTaGFkb3c6MH07bC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShBcnJheS5wcm90b3R5cGUpLGwucHJvdG90eXBlLmNvbnN0cnVjdG9yPWwsbC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGUpe2lmKFxcXCJzdHJpbmdcXFwiPT10eXBlb2YgZSlmb3IodmFyIHQ9MCxpPXRoaXMubGVuZ3RoO3Q8aTt0Kyspe3ZhciByPXRoaXNbdF0ub3B0aW9ucy5yZW5kZXJUby50YWdOYW1lP3RoaXNbdF0ub3B0aW9ucy5yZW5kZXJUbzpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzW3RdLm9wdGlvbnMucmVuZGVyVG98fFxcXCJcXFwiKTtpZihyLmdldEF0dHJpYnV0ZShcXFwiaWRcXFwiKT09PWUpcmV0dXJuIHRoaXNbdF19ZWxzZSBpZihcXFwibnVtYmVyXFxcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXNbZV07cmV0dXJuIG51bGx9O3ZhciBwZT1cXFwiMi4xLjVcXFwiLHdlPU1hdGgucm91bmQseWU9TWF0aC5hYnMsa2U9bmV3IGw7a2UudmVyc2lvbj1wZTt2YXIgeGU9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbih0KXtvKHRoaXMsbik7dmFyIHI9aSh0aGlzLChuLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pKS5jYWxsKHRoaXMpKSxhPXIuY29uc3RydWN0b3IubmFtZTtpZihcXFwiQmFzZUdhdWdlXFxcIj09PWEpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQXR0ZW1wdCB0byBpbnN0YW50aWF0ZSBhYnN0cmFjdCBjbGFzcyFcXFwiKTtpZihrZS5wdXNoKHIpLHQubGlzdGVuZXJzJiZPYmplY3Qua2V5cyh0Lmxpc3RlbmVycykuZm9yRWFjaChmdW5jdGlvbihlKXsodC5saXN0ZW5lcnNbZV1pbnN0YW5jZW9mIEFycmF5P3QubGlzdGVuZXJzW2VdOlt0Lmxpc3RlbmVyc1tlXV0pLmZvckVhY2goZnVuY3Rpb24odCl7ci5vbihlLHQpfSl9KSxyLnZlcnNpb249cGUsci50eXBlPWVbYV18fG4sci5pbml0aWFsaXplZD0hMSx0Lm1pblZhbHVlPXBhcnNlRmxvYXQodC5taW5WYWx1ZSksdC5tYXhWYWx1ZT1wYXJzZUZsb2F0KHQubWF4VmFsdWUpLHQudmFsdWU9cGFyc2VGbG9hdCh0LnZhbHVlKXx8MCx0LmJvcmRlcnN8fCh0LmJvcmRlcklubmVyV2lkdGg9dC5ib3JkZXJNaWRkbGVXaWR0aD10LmJvcmRlck91dGVyV2lkdGg9MCksIXQucmVuZGVyVG8pdGhyb3cgVHlwZUVycm9yKFxcXCJDYW52YXMgZWxlbWVudCB3YXMgbm90IHNwZWNpZmllZCB3aGVuIGNyZWF0aW5nIHRoZSBHYXVnZSBvYmplY3QhXFxcIik7dmFyIGw9dC5yZW5kZXJUby50YWdOYW1lP3QucmVuZGVyVG86ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodC5yZW5kZXJUbyk7aWYoIShsIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpKXRocm93IFR5cGVFcnJvcihcXFwiR2l2ZW4gZ2F1Z2UgY2FudmFzIGVsZW1lbnQgaXMgaW52YWxpZCFcXFwiKTtyZXR1cm4gdC53aWR0aD1wYXJzZUZsb2F0KHQud2lkdGgpfHwwLHQuaGVpZ2h0PXBhcnNlRmxvYXQodC5oZWlnaHQpfHwwLHQud2lkdGgmJnQuaGVpZ2h0fHwodC53aWR0aHx8KHQud2lkdGg9bC5wYXJlbnROb2RlP2wucGFyZW50Tm9kZS5vZmZzZXRXaWR0aDpsLm9mZnNldFdpZHRoKSx0LmhlaWdodHx8KHQuaGVpZ2h0PWwucGFyZW50Tm9kZT9sLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0Omwub2Zmc2V0SGVpZ2h0KSksci5vcHRpb25zPXR8fHt9LHIub3B0aW9ucy5hbmltYXRlT25Jbml0JiYoci5fdmFsdWU9ci5vcHRpb25zLnZhbHVlLHIub3B0aW9ucy52YWx1ZT1yLm9wdGlvbnMubWluVmFsdWUpLHIuY2FudmFzPW5ldyBiZShsLHQud2lkdGgsdC5oZWlnaHQpLHIuY2FudmFzLm9uUmVkcmF3PXIuZHJhdy5iaW5kKHIpLHIuYW5pbWF0aW9uPW5ldyBtZSh0LmFuaW1hdGlvblJ1bGUsdC5hbmltYXRpb25EdXJhdGlvbikscn1yZXR1cm4gcihuLHQpLGNlKG4sW3trZXk6XFxcInVwZGF0ZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLHRoaXMudHlwZS5jb25maWd1cmUoZXx8e30pKSx0aGlzLmNhbnZhcy53aWR0aD10aGlzLm9wdGlvbnMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0PXRoaXMub3B0aW9ucy5oZWlnaHQsdGhpcy5hbmltYXRpb24ucnVsZT10aGlzLm9wdGlvbnMuYW5pbWF0aW9uUnVsZSx0aGlzLmFuaW1hdGlvbi5kdXJhdGlvbj10aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24sdGhpcy5jYW52YXMucmVkcmF3KCksdGhpc319LHtrZXk6XFxcImRlc3Ryb3lcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9a2UuaW5kZXhPZih0aGlzKTt+ZSYma2Uuc3BsaWNlKGUsMSksdGhpcy5jYW52YXMuZGVzdHJveSgpLHRoaXMuY2FudmFzPW51bGwsdGhpcy5hbmltYXRpb24uZGVzdHJveSgpLHRoaXMuYW5pbWF0aW9uPW51bGwsdGhpcy5lbWl0KFxcXCJkZXN0cm95XFxcIil9fSx7a2V5OlxcXCJkcmF3XFxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMuYW5pbWF0ZU9uSW5pdCYmIXRoaXMuaW5pdGlhbGl6ZWQmJih0aGlzLnZhbHVlPXRoaXMuX3ZhbHVlLHRoaXMuaW5pdGlhbGl6ZWQ9ITAsdGhpcy5lbWl0KFxcXCJpbml0XFxcIikpLHRoaXMuZW1pdChcXFwicmVuZGVyXFxcIiksdGhpc319LHtrZXk6XFxcInZhbHVlXFxcIixzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlPW4uZW5zdXJlVmFsdWUoZSx0aGlzLm9wdGlvbnMubWluVmFsdWUpO3ZhciBpPXRoaXMub3B0aW9ucy52YWx1ZTtpZihlIT09aSlpZih0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKXtpZih0aGlzLmFuaW1hdGlvbi5mcmFtZSYmKHRoaXMub3B0aW9ucy52YWx1ZT10aGlzLl92YWx1ZSx0aGlzLl92YWx1ZT09PWUpKXJldHVybiB0aGlzLmFuaW1hdGlvbi5jYW5jZWwoKSx2b2lkIGRlbGV0ZSB0aGlzLl92YWx1ZTt2b2lkIDA9PT10aGlzLl92YWx1ZSYmKHRoaXMuX3ZhbHVlPWUpLHRoaXMuZW1pdChcXFwiYW5pbWF0aW9uU3RhcnRcXFwiKSx0aGlzLmFuaW1hdGlvbi5hbmltYXRlKGZ1bmN0aW9uKHIpe3ZhciBvPWkrKGUtaSkqcjt0Lm9wdGlvbnMuYW5pbWF0ZWRWYWx1ZSYmdC5lbWl0KFxcXCJ2YWx1ZVxcXCIsbyx0LnZhbHVlKSx0Lm9wdGlvbnMudmFsdWU9byx0LmRyYXcoKSx0LmVtaXQoXFxcImFuaW1hdGVcXFwiLHIsdC5vcHRpb25zLnZhbHVlKX0sZnVuY3Rpb24oKXt2b2lkIDAhPT10Ll92YWx1ZSYmKHQuZW1pdChcXFwidmFsdWVcXFwiLHQuX3ZhbHVlLHQudmFsdWUpLHQub3B0aW9ucy52YWx1ZT10Ll92YWx1ZSxkZWxldGUgdC5fdmFsdWUpLHQuZHJhdygpLHQuZW1pdChcXFwiYW5pbWF0aW9uRW5kXFxcIil9KX1lbHNlIHRoaXMuZW1pdChcXFwidmFsdWVcXFwiLGUsdGhpcy52YWx1ZSksdGhpcy5vcHRpb25zLnZhbHVlPWUsdGhpcy5kcmF3KCl9LGdldDpmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT10aGlzLl92YWx1ZT90aGlzLm9wdGlvbnMudmFsdWU6dGhpcy5fdmFsdWV9fV0sW3trZXk6XFxcImNvbmZpZ3VyZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9fSx7a2V5OlxcXCJpbml0aWFsaXplXFxcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiBuZXcgdmUodCxcXFwiY2FudmFzXFxcIixlKX19LHtrZXk6XFxcImZyb21FbGVtZW50XFxcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD12ZS50b0NhbWVsQ2FzZShlLmdldEF0dHJpYnV0ZShcXFwiZGF0YS10eXBlXFxcIikpLGk9ZS5hdHRyaWJ1dGVzLHI9MCxvPWkubGVuZ3RoLG49e307aWYodCl7Zm9yKC9HYXVnZSQvLnRlc3QodCl8fCh0Kz1cXFwiR2F1Z2VcXFwiKTtyPG87cisrKW5bdmUudG9DYW1lbENhc2UoaVtyXS5uYW1lLnJlcGxhY2UoL15kYXRhLS8sXFxcIlxcXCIpLCExKV09dmUucGFyc2UoaVtyXS52YWx1ZSk7bmV3IHZlKG4sZS50YWdOYW1lLHQpLnByb2Nlc3MoZSl9fX0se2tleTpcXFwiZW5zdXJlVmFsdWVcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowO3JldHVybiBlPXBhcnNlRmxvYXQoZSksIWlzTmFOKGUpJiZpc0Zpbml0ZShlKXx8KGU9cGFyc2VGbG9hdCh0KXx8MCksZX19LHtrZXk6XFxcIm1vZFxcXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZSV0K3QpJXR9fSx7a2V5OlxcXCJ2ZXJzaW9uXFxcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcGV9fV0pLG59KGhlKTt2b2lkIDAhPT1lJiYoZS5CYXNlR2F1Z2U9eGUsZS5nYXVnZXM9KHdpbmRvdy5kb2N1bWVudHx8e30pLmdhdWdlcz1rZSk7dmFyIFRlPXtyb3VuZFJlY3Q6YyxwYWRWYWx1ZTpoLGZvcm1hdE1ham9yVGlja051bWJlcjp1LHJhZGlhbnM6ZixyYWRpYWxQb2ludDptLGxpbmVhckdyYWRpZW50OnYsZHJhd05lZWRsZVNoYWRvdzpnLGRyYXdWYWx1ZUJveDprLHZlcmlmeUVycm9yOnMscHJlcGFyZVRpY2tzOmQsZHJhd1NoYWRvdzpiLGZvbnQ6cCxub3JtYWxpemVkVmFsdWU6eH0sU2U9TWF0aC5QSSxXZT1TZS8yLE9lPU9iamVjdC5hc3NpZ24oe30sZ2Use3RpY2tzQW5nbGU6MjcwLHN0YXJ0QW5nbGU6NDUsY29sb3JOZWVkbGVDaXJjbGVPdXRlcjpcXFwiI2YwZjBmMFxcXCIsY29sb3JOZWVkbGVDaXJjbGVPdXRlckVuZDpcXFwiI2NjY1xcXCIsY29sb3JOZWVkbGVDaXJjbGVJbm5lcjpcXFwiI2U4ZThlOFxcXCIsY29sb3JOZWVkbGVDaXJjbGVJbm5lckVuZDpcXFwiI2Y1ZjVmNVxcXCIsbmVlZGxlQ2lyY2xlU2l6ZToxMCxuZWVkbGVDaXJjbGVJbm5lcjohMCxuZWVkbGVDaXJjbGVPdXRlcjohMCxuZWVkbGVTdGFydDoyMCxhbmltYXRpb25UYXJnZXQ6XFxcIm5lZWRsZVxcXCIsdXNlTWluUGF0aDohMSxiYXJXaWR0aDowfSksVmU9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gbyh0aGlzLHQpLGU9T2JqZWN0LmFzc2lnbih7fSxPZSxlfHx7fSksaSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsdC5jb25maWd1cmUoZSkpKX1yZXR1cm4gcih0LGUpLGNlKHQsW3trZXk6XFxcImRyYXdcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7dHJ5e3ZhciBlPXRoaXMuY2FudmFzLGk9Wy1lLmRyYXdYLC1lLmRyYXdZLGUuZHJhd1dpZHRoLGUuZHJhd0hlaWdodF0scj1pWzBdLG89aVsxXSxuPWlbMl0sYT1pWzNdLGw9dGhpcy5vcHRpb25zO2lmKFxcXCJuZWVkbGVcXFwiPT09bC5hbmltYXRpb25UYXJnZXQpe2lmKCFlLmVsZW1lbnRDbG9uZS5pbml0aWFsaXplZCl7dmFyIHM9ZS5jb250ZXh0Q2xvbmU7cy5jbGVhclJlY3QocixvLG4sYSkscy5zYXZlKCksdGhpcy5lbWl0KFxcXCJiZWZvcmVQbGF0ZVxcXCIpLFcocyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZUhpZ2hsaWdodHNcXFwiKSxPKHMsbCksdGhpcy5lbWl0KFxcXCJiZWZvcmVNaW5vclRpY2tzXFxcIiksVihzLGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlTWFqb3JUaWNrc1xcXCIpLE0ocyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZU51bWJlcnNcXFwiKSxqKHMsbCksdGhpcy5lbWl0KFxcXCJiZWZvcmVUaXRsZVxcXCIpLEMocyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZVVuaXRzXFxcIiksTihzLGwpLGUuZWxlbWVudENsb25lLmluaXRpYWxpemVkPSEwfXRoaXMuY2FudmFzLmNvbW1pdCgpLGUuY29udGV4dC5jbGVhclJlY3QocixvLG4sYSksZS5jb250ZXh0LnNhdmUoKSxlLmNvbnRleHQuZHJhd0ltYWdlKGUuZWxlbWVudENsb25lLHIsbyxuLGEpLGUuY29udGV4dC5zYXZlKCksdGhpcy5lbWl0KFxcXCJiZWZvcmVQcm9ncmVzc0JhclxcXCIpLFIoZS5jb250ZXh0LGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlVmFsdWVCb3hcXFwiKSxfKGUuY29udGV4dCxsLEkodGhpcykpLHRoaXMuZW1pdChcXFwiYmVmb3JlTmVlZGxlXFxcIiksRShlLmNvbnRleHQsbCl9ZWxzZXt2YXIgZD0tVGUucmFkaWFucygobC52YWx1ZS1sLm1pblZhbHVlKS8obC5tYXhWYWx1ZS1sLm1pblZhbHVlKSpsLnRpY2tzQW5nbGUpO2lmKGUuY29udGV4dC5jbGVhclJlY3QocixvLG4sYSksZS5jb250ZXh0LnNhdmUoKSx0aGlzLmVtaXQoXFxcImJlZm9yZVBsYXRlXFxcIiksVyhlLmNvbnRleHQsbCksZS5jb250ZXh0LnJvdGF0ZShkKSx0aGlzLmVtaXQoXFxcImJlZm9yZUhpZ2hsaWdodHNcXFwiKSxPKGUuY29udGV4dCxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZU1pbm9yVGlja3NcXFwiKSxWKGUuY29udGV4dCxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZU1ham9yVGlja3NcXFwiKSxNKGUuY29udGV4dCxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZU51bWJlcnNcXFwiKSxqKGUuY29udGV4dCxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZVByb2dyZXNzQmFyXFxcIiksUihlLmNvbnRleHQsbCksZS5jb250ZXh0LnJvdGF0ZSgtZCksZS5jb250ZXh0LnNhdmUoKSwhZS5lbGVtZW50Q2xvbmUuaW5pdGlhbGl6ZWQpe3ZhciBjPWUuY29udGV4dENsb25lO2MuY2xlYXJSZWN0KHIsbyxuLGEpLGMuc2F2ZSgpLHRoaXMuZW1pdChcXFwiYmVmb3JlVGl0bGVcXFwiKSxDKGMsbCksdGhpcy5lbWl0KFxcXCJiZWZvcmVVbml0c1xcXCIpLE4oYyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZU5lZWRsZVxcXCIpLEUoYyxsKSxlLmVsZW1lbnRDbG9uZS5pbml0aWFsaXplZD0hMH1lLmNvbnRleHQuZHJhd0ltYWdlKGUuZWxlbWVudENsb25lLHIsbyxuLGEpfXRoaXMuZW1pdChcXFwiYmVmb3JlVmFsdWVCb3hcXFwiKSxfKGUuY29udGV4dCxsLEkodGhpcykpLHNlKHQucHJvdG90eXBlLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcXFwiZHJhd1xcXCIsdGhpcykuY2FsbCh0aGlzKX1jYXRjaChlKXtUZS52ZXJpZnlFcnJvcihlKX1yZXR1cm4gdGhpc319LHtrZXk6XFxcInZhbHVlXFxcIixzZXQ6ZnVuY3Rpb24oZSl7ZT14ZS5lbnN1cmVWYWx1ZShlLHRoaXMub3B0aW9ucy5taW5WYWx1ZSksdGhpcy5vcHRpb25zLmFuaW1hdGlvbiYmMzYwPT09dGhpcy5vcHRpb25zLnRpY2tzQW5nbGUmJnRoaXMub3B0aW9ucy51c2VNaW5QYXRoJiYodGhpcy5fdmFsdWU9ZSxlPXRoaXMub3B0aW9ucy52YWx1ZSsoKGUtdGhpcy5vcHRpb25zLnZhbHVlKSUzNjArNTQwKSUzNjAtMTgwKSxkZSh0LnByb3RvdHlwZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0LnByb3RvdHlwZSksXFxcInZhbHVlXFxcIixlLHRoaXMpfSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gc2UodC5wcm90b3R5cGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFxcXCJ2YWx1ZVxcXCIsdGhpcyl9fV0sW3trZXk6XFxcImNvbmZpZ3VyZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYmFyV2lkdGg+NTAmJihlLmJhcldpZHRoPTUwKSxpc05hTihlLnN0YXJ0QW5nbGUpJiYoZS5zdGFydEFuZ2xlPTQ1KSxpc05hTihlLnRpY2tzQW5nbGUpJiYoZS50aWNrc0FuZ2xlPTI3MCksZS50aWNrc0FuZ2xlPjM2MCYmKGUudGlja3NBbmdsZT0zNjApLGUudGlja3NBbmdsZTwwJiYoZS50aWNrc0FuZ2xlPTApLGUuc3RhcnRBbmdsZTwwJiYoZS5zdGFydEFuZ2xlPTApLGUuc3RhcnRBbmdsZT4zNjAmJihlLnN0YXJ0QW5nbGU9MzYwKSxlfX1dKSx0fSh4ZSk7dm9pZCAwIT09ZSYmKGUuUmFkaWFsR2F1Z2U9VmUpLHhlLmluaXRpYWxpemUoXFxcIlJhZGlhbEdhdWdlXFxcIixPZSk7dmFyIFBlPU9iamVjdC5hc3NpZ24oe30sZ2Use2JvcmRlclJhZGl1czowLGJhckJlZ2luQ2lyY2xlOjMwLGNvbG9yQmFyRW5kOlxcXCJcXFwiLGNvbG9yQmFyUHJvZ3Jlc3NFbmQ6XFxcIlxcXCIsbmVlZGxlV2lkdGg6Nix0aWNrU2lkZTpcXFwiYm90aFxcXCIsbmVlZGxlU2lkZTpcXFwiYm90aFxcXCIsbnVtYmVyU2lkZTpcXFwiYm90aFxcXCIsdGlja3NXaWR0aDoxMCx0aWNrc1dpZHRoTWlub3I6NSx0aWNrc1BhZGRpbmc6NSxiYXJMZW5ndGg6ODUsZm9udFRpdGxlU2l6ZToyNixoaWdobGlnaHRzV2lkdGg6MTB9KSxNZT1mdW5jdGlvbihlKXtmdW5jdGlvbiBuKGUpe3JldHVybiBvKHRoaXMsbiksZT1PYmplY3QuYXNzaWduKHt9LFBlLGV8fHt9KSxpKHRoaXMsKG4uX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpLmNhbGwodGhpcyxuLmNvbmZpZ3VyZShlKSkpfXJldHVybiByKG4sZSksY2Uobixbe2tleTpcXFwiZHJhd1xcXCIsdmFsdWU6ZnVuY3Rpb24oKXt0cnl7dmFyIGU9dGhpcy5jYW52YXMsaT1bLWUuZHJhd1gsLWUuZHJhd1ksZS5kcmF3V2lkdGgsZS5kcmF3SGVpZ2h0XSxyPWlbMF0sbz1pWzFdLGE9aVsyXSxsPWlbM10scz10aGlzLm9wdGlvbnM7aWYoIWUuZWxlbWVudENsb25lLmluaXRpYWxpemVkKXt2YXIgZD1lLmNvbnRleHRDbG9uZTtkLmNsZWFyUmVjdChyLG8sYSxsKSxkLnNhdmUoKSx0aGlzLmVtaXQoXFxcImJlZm9yZVBsYXRlXFxcIiksdGhpcy5kcmF3Qm94PUwoZCxzLHIsbyxhLGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlQmFyXFxcIiksWC5hcHBseSh2b2lkIDAsW2Qsc10uY29uY2F0KHQodGhpcy5kcmF3Qm94KSkpLGUuY29udGV4dC5iYXJEaW1lbnNpb25zPWQuYmFyRGltZW5zaW9ucyx0aGlzLmVtaXQoXFxcImJlZm9yZUhpZ2hsaWdodHNcXFwiKSxxKGQscyksdGhpcy5lbWl0KFxcXCJiZWZvcmVNaW5vclRpY2tzXFxcIiksSyhkLHMpLHRoaXMuZW1pdChcXFwiYmVmb3JlTWFqb3JUaWNrc1xcXCIpLCQoZCxzKSx0aGlzLmVtaXQoXFxcImJlZm9yZU51bWJlcnNcXFwiKSxRKGQscyksdGhpcy5lbWl0KFxcXCJiZWZvcmVUaXRsZVxcXCIpLGVlKGQscyksdGhpcy5lbWl0KFxcXCJiZWZvcmVVbml0c1xcXCIpLHRlKGQscyksZS5lbGVtZW50Q2xvbmUuaW5pdGlhbGl6ZWQ9ITB9dGhpcy5jYW52YXMuY29tbWl0KCksZS5jb250ZXh0LmNsZWFyUmVjdChyLG8sYSxsKSxlLmNvbnRleHQuc2F2ZSgpLGUuY29udGV4dC5kcmF3SW1hZ2UoZS5lbGVtZW50Q2xvbmUscixvLGEsbCksZS5jb250ZXh0LnNhdmUoKSx0aGlzLmVtaXQoXFxcImJlZm9yZVByb2dyZXNzQmFyXFxcIiksVS5hcHBseSh2b2lkIDAsW2UuY29udGV4dCxzXS5jb25jYXQodCh0aGlzLmRyYXdCb3gpKSksdGhpcy5lbWl0KFxcXCJiZWZvcmVOZWVkbGVcXFwiKSxpZShlLmNvbnRleHQscyksdGhpcy5lbWl0KFxcXCJiZWZvcmVWYWx1ZUJveFxcXCIpLGFlLmFwcGx5KHZvaWQgMCxbZS5jb250ZXh0LHMscy5hbmltYXRlZFZhbHVlP3RoaXMub3B0aW9ucy52YWx1ZTp0aGlzLnZhbHVlXS5jb25jYXQodCh0aGlzLmRyYXdCb3gpKSksc2Uobi5wcm90b3R5cGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2Yobi5wcm90b3R5cGUpLFxcXCJkcmF3XFxcIix0aGlzKS5jYWxsKHRoaXMpfWNhdGNoKGUpe1RlLnZlcmlmeUVycm9yKGUpfXJldHVybiB0aGlzfX1dLFt7a2V5OlxcXCJjb25maWd1cmVcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmJhclN0cm9rZVdpZHRoPj1lLmJhcldpZHRoJiYoZS5iYXJTdHJva2VXaWR0aD13ZShlLmJhcldpZHRoLzIpKSxlLmhhc0xlZnQ9WShcXFwicmlnaHRcXFwiLGUpLGUuaGFzUmlnaHQ9WShcXFwibGVmdFxcXCIsZSksZS52YWx1ZT5lLm1heFZhbHVlJiYoZS52YWx1ZT1lLm1heFZhbHVlKSxlLnZhbHVlPGUubWluVmFsdWUmJihlLnZhbHVlPWUubWluVmFsdWUpLHhlLmNvbmZpZ3VyZShlKX19XSksbn0oeGUpO3ZvaWQgMCE9PWUmJihlLkxpbmVhckdhdWdlPU1lKSx4ZS5pbml0aWFsaXplKFxcXCJMaW5lYXJHYXVnZVxcXCIsUGUpLFxcXCJ1bmRlZmluZWRcXFwiIT10eXBlb2YgbW9kdWxlJiZPYmplY3QuYXNzaWduKGUse0NvbGxlY3Rpb246bCxHZW5lcmljT3B0aW9uczpnZSxBbmltYXRpb246bWUsQmFzZUdhdWdlOnhlLGRyYXdpbmdzOlRlLFNtYXJ0Q2FudmFzOmJlLERvbU9ic2VydmVyOnZlLHZlbmRvcml6ZTpufSl9KFxcXCJ1bmRlZmluZWRcXFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzOndpbmRvdyk7XCIiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzcmMpIHtcblx0ZnVuY3Rpb24gbG9nKGVycm9yKSB7XG5cdFx0KHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKVxuXHRcdCYmIChjb25zb2xlLmVycm9yIHx8IGNvbnNvbGUubG9nKShcIltTY3JpcHQgTG9hZGVyXVwiLCBlcnJvcik7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgSUUgPTwgOFxuXHRmdW5jdGlvbiBpc0lFKCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXR0YWNoRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwidW5kZWZpbmVkXCI7XG5cdH1cblxuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgZXhlY1NjcmlwdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpc0lFKCkpIHtcblx0XHRcdGV4ZWNTY3JpcHQoc3JjKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBldmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRldmFsLmNhbGwobnVsbCwgc3JjKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9nKFwiRXZhbEVycm9yOiBObyBldmFsIGZ1bmN0aW9uIGF2YWlsYWJsZVwiKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bG9nKGVycm9yKTtcblx0fVxufVxuIiwiLyohXHJcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVG9tYXMgSGVsbHN0csO2bSAoaHR0cHM6Ly9naXRodWIuY29tL2hlbHRvNHJlYWwvbG92ZWxhY2UtY3VzdG9tLWNhcmRzKVxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICogU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuICAvKipcclxuICAqIERPIE5PVCBVU0UgVEhJUyBGSUxFIElGIFVTSU5HIFNJTkdMRSBDQVJEUywgVVNFIFRIRSBWRVJTSU9OIFVOREVSICdkaXN0JyBDQVRBTE9HISEhIVxyXG4gICovXHJcblxyXG5pbXBvcnQgXCJjYW52YXMtZ2F1Z2VzXCI7XHJcblxyXG4vKipcclxuICogYGNhbnZhcy1nYXVnZS1jYXJkYFxyXG4gKiBMb3ZlbGFjZSBlbGVtZW50IGZvciBkaXNwbGF5aW5nIHRoZSBjYW52YXMgZ2F1Z2VzIGF0IFxyXG4gKiBodHRwczovL2NhbnZhcy1nYXVnZXMuY29tL1xyXG4gKiBcclxuICogSWYgeW91IGxpa2UgdGhlIGdhdWdlcyBwbGVhc2Ugc3VwcG9ydCB0aGUgb3JpZ2luYWwgZ2F1Z2UgZGV2cy5cclxuICogXHJcbiAqIFVzYWdlIG9jaCBjYXJkOlxyXG4gKiAgLSBDb3B5IHRoaXMgZmlsZSAnY2FudmFzLWd1YWdlLWNhcmQuanMnIGFuZCAnZ2F1Z2UubWluLmpzJyB0byBzYW1lIGZvbGRlciBpbiBoYXNzLiBcclxuICogIC0gU2V0IHRoZSB1aS1sb3ZlbGFjZS55YW1sLCBJbmNsdWRlIHRoZSBjYW52YXMtZ3VhZ2UtY2FyZC5qcyBhbmQgY29maWd1cmUgYXQgbWluaW11bTpcclxuICAgICogY2FyZHM6XHJcbiAgICAgICAgLSB0eXBlOiBjdXN0b206Y2FudmFzLWdhdWdlLWNhcmRcclxuICAgICAgICAgICAgZW50aXR5OiBzZW5zb3IudGVtcF9vdXRzaWRlXHJcbiAgICAgICAgICAgIGdhdWdlOlxyXG4gICAgICAgICAgICB0eXBlOiBcImxpbmVhci1nYXVnZVwiXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBcclxuICAgIC0gVXNlIHRoZSBqYXZhc2NyaXB0IHByb3BlcnRpZXMgd2l0aG91dGggdGhlICcsJyB0byBjb25maWd1cmUgcHJvcGVydGllcyB1bmRlciAnZ2F1Z2UnXHJcbiAgICAtIFVzZSBuYW1lIHByb3BlcnR5IHRvIHNob3cgdGhlIG5hbWUgYXR0IGJvdHRvbSBvZiB0aGUgY2FyZFxyXG4gICAgLSBTZWUgaHR0cDovL3NzcyBmb3IgZG9jc1xyXG4gKi9cclxuY2xhc3MgQ2FudmFzR2F1Z2VDYXJkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJzIHRoZSBjYXJkIFxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgXHJcbiAgICAgICAgY29uc3QgZWxlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsZW1Db250YWluZXIuaWQgPSAnY29udGFpbmVyJztcclxuICAgICAgICBlbGVtQ29udGFpbmVyLndpZHRoID0gdGhpcy5jb25maWcuY2FyZF93aWR0aCA/IHRoaXMuY29uZmlnLmNhcmRfd2lkdGggOiB0aGlzLmNvbmZpZy5nYXVnZVsnd2lkdGgnXTtcclxuICAgICAgICBlbGVtQ29udGFpbmVyLmhlaWdodCA9IHRoaXMuY29uZmlnLmNhcmRfaGVpZ2h0ID8gdGhpcy5jb25maWcuY2FyZF9oZWlnaHQgOiB0aGlzLmNvbmZpZy5nYXVnZVsnaGVpZ2h0J107XHJcblxyXG4gICAgICAgIGNvbnN0IHNoYWRvd0hlaWdodCA9ICh0aGlzLmNvbmZpZy5zaGFkb3dfaGVpZ2h0KSA/IHRoaXMuY29uZmlnLnNoYWRvd19oZWlnaHQgOiAnMTAlJztcclxuICAgICAgICAvLyBUaGUgc3R5bGVzXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBgXHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke2VsZW1Db250YWluZXIud2lkdGh9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke2VsZW1Db250YWluZXIuaGVpZ2h0fXB4OyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2lubmVyY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAke3RoaXMuY29uZmlnLmNhcmRfdG9wID8gdGhpcy5jb25maWcuY2FyZF90b3AgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7dGhpcy5jb25maWcuY2FyZF9sZWZ0ID8gdGhpcy5jb25maWcuY2FyZF9sZWZ0IDogMH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zaGFkb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHtzaGFkb3dIZWlnaHR9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI3N0YXRle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICBcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwgPSBzdHlsZTtcclxuXHJcbiAgICAgICAgLy8gV2UgbmVlZCBhbiBpbm5lciBjb250YWluZXIgc28gd2UgY2FuIGhpZGUgcGFydCBvZiB0aGUgZ2F1Z2UgY2F1c2UgaXRcclxuICAgICAgICAvLyByZW5kZXJzIGZ1bGwgY2lyY2xlIGV2ZW4gaWYgb25seSBzaG93aW5nIGhhbGYgZ2F1Z2UuIFxyXG4gICAgICAgIGNvbnN0IGVsZW1Jbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsZW1Jbm5lckNvbnRhaW5lci5pZCA9ICdpbm5lcmNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIC8vIGNhbnZhcyBlbGVtZW50IHRoYXQgdGhlIGdhdWdlIHdpbGwgYmUgZHJhd24gYnkgdGhlIGNhbnZhcyBnYXVnZSBMaWJcclxuICAgICAgICBjb25zdCBlbGVtQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgZWxlbUNhbnZhcy53aWR0aCA9IHRoaXMuY29uZmlnLmdhdWdlWyd3aWR0aCddO1xyXG4gICAgICAgIGVsZW1DYW52YXMuaGVpZ2h0ID0gdGhpcy5jb25maWcuZ2F1Z2VbJ2hlaWdodCddO1xyXG5cclxuICAgICAgICAvLyBIYXZlIHRvIGRvIHRoaXMgY2F1c2Ugc29tZSBidWcgaW4gbGlicmFyeSBnYXVnZS5taW4uanMgZG9udCBkaXNwbGF5IHRoZSBnYXVnZVxyXG4gICAgICAgIC8vIGtlZXAgdGhpcyBjb2RlIGZvciBhIHdoaWxlIGluY2FzZSBJIG5lZWQgdG8gYWN0aXZhdGUgaXQgYWdhaW4uLi5cclxuICAgICAgICAvL3ZhciBjdHggPSBlbGVtQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgLy9jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICAvL2N0eC5maWxsUmVjdCgwLCAwLCBlbGVtQ2FudmFzLndpZHRoLCBlbGVtQ2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdmFyIGdhdWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5nYXVnZS50eXBlID09ICdsaW5lYXItZ2F1Z2UnKSB7XHJcbiAgICAgICAgICAgIGdhdWdlID0gbmV3IExpbmVhckdhdWdlKHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclRvOiBlbGVtQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBlbGVtQ2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBlbGVtQ2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29uZmlnLmdhdWdlLnR5cGUgPT0gJ3JhZGlhbC1nYXVnZScpIHtcclxuICAgICAgICAgICAgZ2F1Z2UgPSBuZXcgUmFkaWFsR2F1Z2Uoe1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG86IGVsZW1DYW52YXMsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1DYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1DYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5nYXVnZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZ2F1Z2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZ2F1Z2Uub3B0aW9uc1trZXldID0gdGhpcy5jb25maWcuZ2F1Z2Vba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbUlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1DYW52YXMpO1xyXG5cclxuICAgICAgICBlbGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1Jbm5lckNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1TaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbVNoYWRvdy5jbGFzc05hbWUgPSAnc2hhZG93JztcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbVN0YXRlLmlkID0gJ3N0YXRlJztcclxuICAgICAgICAgICAgLy8gQXV0b21hdGljIGZvbnQgcmVzaXplIG9yIHNldCBvbmVcclxuICAgICAgICAgICAgdmFyIGZvbnRfc2l6ZSA9IHRoaXMuY29uZmlnLmZvbnRfc2l6ZSA/IHRoaXMuY29uZmlnLmZvbnRfc2l6ZSA6IGBjYWxjKCR7dGhpcy5jb25maWcuZ2F1Z2VbJ2hlaWdodCddfXB4LzIyKWA7XHJcbiAgICAgICAgICAgIGVsZW1TdGF0ZS5zdHlsZS5mb250U2l6ZSA9IGZvbnRfc2l6ZTtcclxuICAgICAgICAgICAgZWxlbVN0YXRlLmlubmVyVGV4dCA9IHRoaXMuY29uZmlnLm5hbWU7XHJcblxyXG4gICAgICAgICAgICBlbGVtU2hhZG93LmFwcGVuZENoaWxkKGVsZW1TdGF0ZSk7XHJcbiAgICAgICAgICAgIGVsZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbVNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtQ29udGFpbmVyLm9uY2xpY2sgPSB0aGlzLl9jbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChlbGVtQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ2F1Z2UgPSBnYXVnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uY2xpY2sgZXZlbnQgZm9yIGNhcmQsIGdldHMgdGhlIGVuaXR5IGluZm9cclxuICAgICAqL1xyXG4gICAgX2NsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2ZpcmUoJ2hhc3MtbW9yZS1pbmZvJywgeyBlbnRpdHlJZDogdGhpcy5jb25maWcuZW50aXR5IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlyZXMgdGhlIGV2ZW50IHRoYXQgb3BlbnMgdGhlIGVuaXR5IGluZm9cclxuICAgICAqL1xyXG4gICAgX2ZpcmUodHlwZSwgZGV0YWlsKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhhc3MoaGFzcykge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eUlkID0gdGhpcy5jb25maWcuZW50aXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gaGFzcy5zdGF0ZXNbZW50aXR5SWRdLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2dhdWdlWyd2YWx1ZSddID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fZ2F1Z2UuZHJhdygpOyAvLyBIYXZlIHRvIGNhbGwgdG8gcmVkcmF3IGNhbnZhc1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmZpZyhjb25maWcpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgYW4gZW50aXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLmdhdWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gZGVmaW5lIGdhdWdlIGFuZCBkZWZhdWx0IGdhdWdlIHZhbHVlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZy5nYXVnZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgZ2F1Z2UgaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLmdhdWdlLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gZGVmaW5lIGdhdWdlIHdpZHRoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLmdhdWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgZ2F1Z2UgdHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIShjb25maWcuZ2F1Z2UudHlwZSA9PSAnbGluZWFyLWdhdWdlJyB8fCBjb25maWcuZ2F1Z2UudHlwZSA9PSAncmFkaWFsLWdhdWdlJykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgZ2F1Z2UgdHlwZSBcImxpbmVhci1nYXVnZVwiIG9yIFwicmFkaWFsLWdhdWdlXCInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIC8vIEZpeCBpbml0YnVnIGZyb20gdGhlIGNhbnZhcyBsaWIgdGhhdCBzaG93cyBib3JkZXJzIGV2ZW4gaWYgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuZ2F1Z2UuYm9yZGVycyAhPSB0eXBlb2YgdW5kZWZpbmVkICYmIGNvbmZpZy5nYXVnZS5ib3JkZXJzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25maWcuZ2F1Z2VbJ2JvcmRlclNoYWRvd1dpZHRoJ10gPSAwO1xyXG4gICAgICAgICAgICBjb25maWcuZ2F1Z2VbJ2JvcmRlck91dGVyV2lkdGgnXSA9IDA7XHJcbiAgICAgICAgICAgIGNvbmZpZy5nYXVnZVsnYm9yZGVyTWlkZGxlV2lkdGgnXSA9IDA7XHJcbiAgICAgICAgICAgIGNvbmZpZy5nYXVnZVsnYm9yZGVySW5uZXJXaWR0aCddID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICAvLyAqKiBTVEFSVCBGT1IgVEVTVFxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPSB0eXBlb2YgdW5kZWZpbmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge3JldHVybjt9IFxyXG4gICAgICAgIHRoaXMuX19pbml0VGVzdHMoKTtcclxuICAgICAgICAvLyAqKiBFTkQgRk9SIFRFU1RcclxuICAgIH1cclxuXHJcbiAgICAvLyAqKiBTVEFSVCBGT1IgVEVTVFxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEluaXQgdGVzdGRhdGFcclxuICAgICAqIEkgdXNlIHRoaXMgaW4gbXkgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gbWFrZSBhIHZlcnkgc2ltcGxlIG1vY2sgb2YgY29uZmlnL2hhc3Mgb2JqZWN0cyBcclxuICAgICovXHJcbiAgICBfX2luaXRUZXN0cygpIHtcclxuICAgICAgICB2YXIgdGVzdF9jb25maWcgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW50aXR5OiAnc2Vuc29yLnRlbXAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICAgICAgICAgIGNhcmRfaGVpZ2h0OiAxOTAsXHJcbiAgICAgICAgICAgIGNhcmRfd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY2FyZF90b3A6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY2FyZF9sZWZ0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGdhdWdlOiB7fVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyd0eXBlJ10gPSAncmFkaWFsLWdhdWdlJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsndGl0bGUnXSA9ICdTcGVlZCc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ3dpZHRoJ10gPSAzMDA7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ2hlaWdodCddID0gMzAwO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyd1bml0cyddID0gJ0ttL2gnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydtaW5WYWx1ZSddID0gMDtcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnbWF4VmFsdWUnXSA9IDIyMDtcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnc3RhcnRBbmdsZSddID0gOTA7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ3RpY2tzQW5nbGUnXSA9IDE4MDtcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsndmFsdWVCb3gnXSA9IGZhbHNlO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydtYWpvclRpY2tzJ10gPSBbMCwgMjAsIDQwLCA2MCwgODAsIDEwMCwgMTIwLCAxNDAsIDE2MCwgMTgwLCAyMDAsIDIyMF07XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ21pbm9yVGlja3MnXSA9IDI7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ3N0cm9rZVRpY2tzJ10gPSB0cnVlO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydoaWdobGlnaHRzJ10gPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZnJvbVwiOiAxNjAsXHJcbiAgICAgICAgICAgICAgICBcInRvXCI6IDIyMCxcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2JhKDIwMCwgNTAsIDUwLCAuNzUpXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ2NvbG9yUGxhdGUnXSA9ICcjZmZmJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnYm9yZGVycyddID0gZmFsc2U7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ25lZWRsZVR5cGUnXSA9ICdhcnJvdyc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ25lZWRsZVdpZHRoJ10gPSAyO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyduZWVkbGVDaXJjbGVTaXplJ10gPSA3O1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyduZWVkbGVDaXJjbGVPdXRlciddID0gdHJ1ZTtcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnbmVlZGxlQ2lyY2xlSW5uZXInXSA9IGZhbHNlO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydhbmltYXRpb25EdXJhdGlvbiddID0gMTUwMDtcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnYW5pbWF0aW9uUnVsZSddID0gJ2xpbmVhcic7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ3ZhbHVlJ10gPSAnNTAnO1xyXG5cclxuICAgICAgICB2YXIgdGVzdF9oYXNzID0geyBzdGF0ZXM6IFtdIH07XHJcbiAgICAgICAgdGVzdF9oYXNzLnN0YXRlc1t0ZXN0X2NvbmZpZy5lbnRpdHldID0geyBzdGF0ZTogXCIxNVwiIH07XHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodGVzdF9jb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLmhhc3MgPSB0ZXN0X2hhc3M7XHJcbiAgICB9XHJcbiAgICAvLyAqKiBFTkQgRk9SIFRFU1RcclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2FudmFzLWdhdWdlLWNhcmQnLCBDYW52YXNHYXVnZUNhcmQpOyIsIi8qIVxyXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRvbWFzIEhlbGxzdHLDtm0gIChodHRwczovL2dpdGh1Yi5jb20vaGVsdG80cmVhbC9sb3ZlbGFjZS1jdXN0b20tY2FyZHMpXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gKiBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4gLyoqXHJcbiAgKiBETyBOT1QgVVNFIFRISVMgRklMRSBJRiBVU0lORyBTSU5HTEUgQ0FSRFMsIFVTRSBUSEUgVkVSU0lPTiBVTkRFUiAnZGlzdCcgQ0FUQUxPRyEhISFcclxuICAqL1xyXG5cclxuaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL2xpdC1lbGVtZW50JztcclxuXHJcbi8qKlxyXG4gKiBgcGljdHVyZS1zdGF0dXMtY2FyZGBcclxuICogTG92ZWxhY2UgZWxlbWVudCBmb3IgZGlzcGxheWluZyBzdGF0dXMgb24gYSBwaWN0dXJlIGJvdHRvbSBjZW50ZXJlZCBvbiBhIHNoYWRvd1xyXG4gKi9cclxuY2xhc3MgTWVkaWFQbGF5ZXJDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgXHJcbiAgX3JlbmRlcih7IGhhc3MsIGNvbmZpZyB9KSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTYxcHgvMS4zKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg0MDZweC8xLjMpOztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI21vdmllLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5My42JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzIlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMy4yJTtcclxuICAgICAgICAgICAgICAgIHRvcDogNC40JTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtZWRpYS1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5OS45NSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIuMyU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtZWRpYS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTglO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMi4zJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2FwcC1uYW1lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMi4zJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgb24tY2xpY2s9XCIkeygpID0+IHRoaXMuX2NsaWNrKCl9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb3ZpZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lZGlhLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW50aXR5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lZGlhLXRpdGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFwcC1uYW1lXCI+SEJPIE5vcmRpYzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgQ2FudCBzZXQgYmFja2dyb3VuZCBpbWFnZSBpbiByZW5kZXIgbWV0aG9kIGZvciB0aGUgc3R5bGUsIHNvbWUgYnVnIHByb2hpYml0IHRoYXQuXHJcbiAgICBTbyB3ZSBuZWVkIHRvIHNldCB0aGUgYmFja2dyb3VuZCBpbWFnZSBhZnRlciB0aGUgcGFnZSBoYXMgcmVuZGVyZWRcclxuICAqL1xyXG4gIF9kaWRSZW5kZXIoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKSB7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5fcm9vdC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtb3ZpZUltYWdlRWxlbWVudCA9IHRoaXMuX3Jvb3QucXVlcnlTZWxlY3RvcignI21vdmllLWltYWdlJyk7XHJcbiAgICBjb25zdCBlbnRpdHlFbGVtZW50ID0gdGhpcy5fcm9vdC5xdWVyeVNlbGVjdG9yKCcjZW50aXR5Jyk7XHJcbiAgICBjb25zdCBtZWRpYVRpdGxlRWxlbWVudCA9IHRoaXMuX3Jvb3QucXVlcnlTZWxlY3RvcignI21lZGlhLXRpdGxlJyk7XHJcbiAgICBjb25zdCBhcHBOYW1lRWxlbWVudCA9IHRoaXMuX3Jvb3QucXVlcnlTZWxlY3RvcignI2FwcC1uYW1lJyk7XHJcblxyXG4gICAgXHJcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9jb25maWcuaW1hZ2VfZm9sZGVyfS90di5wbmcpYDtcclxuXHJcbiAgICBjb25zdCBkZXZfc3RhdGUgPSB0aGlzLl9oYXNzLnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5XTtcclxuICAgIGNvbnN0IGRldl9hdHRyID0gZGV2X3N0YXRlLmF0dHJpYnV0ZXM7XHJcblxyXG4gICAgaWYgKCFkZXZfYXR0ci5lbnRpdHlfcGljdHVyZSl7XHJcbiAgICAgIGlmIChkZXZfYXR0ci5hcHBfbmFtZSl7XHJcbiAgICAgICAgaWYgKGRldl9hdHRyLmFwcF9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbmV0ZmxpeCcpIT09LTEpIHtcclxuICAgICAgICAgIG1vdmllSW1hZ2VFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9jb25maWcuaW1hZ2VfZm9sZGVyfS9uZXRmbGl4LWxvZ28ucG5nKWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBtb3ZpZUltYWdlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGV2X2F0dHIuZW50aXR5X3BpY3R1cmV9KWA7XHJcbiAgICB9XHJcbiBcclxuICAgIGVudGl0eUVsZW1lbnQuaW5uZXJUZXh0ID0gZGV2X2F0dHIuZnJpZW5kbHlfbmFtZT8gZGV2X2F0dHIuZnJpZW5kbHlfbmFtZTogdGhpcy5fY29uZmlnLmVudGl0eTtcclxuICAgIG1lZGlhVGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IGRldl9hdHRyLm1lZGlhX3RpdGxlPyBkZXZfYXR0ci5tZWRpYV90aXRsZTogZGV2X3N0YXRlLnN0YXRlO1xyXG4gICAgYXBwTmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gZGV2X2F0dHIuYXBwX25hbWU/IGRldl9hdHRyLmFwcF9uYW1lOiAnTm90aGluZyBpcyBjdXJyZW50bHkgcGxheWluZyc7XHJcbiB9XHJcblxyXG4gIF9jbGljaygpIHtcclxuICAgIHRoaXMuX2ZpcmUoJ2hhc3MtbW9yZS1pbmZvJywgeyBlbnRpdHlJZDogdGhpcy5fY29uZmlnLmVudGl0eSB9KTtcclxuICB9XHJcblxyXG4gIF9maXJlKHR5cGUsIGRldGFpbCkge1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcclxuICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgIGNvbXBvc2VkOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbCB8fCB7fTtcclxuICAgIHRoaXMuX3Jvb3QuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWcoY29uZmlnKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgaWYgKCFjb25maWcuZW50aXR5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBlbnRpdHkgZGVmaW5lZCcpXHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbmZpZy5pbWFnZV9mb2xkZXIpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGltYWdlX2ZvbGRlciBkZWZpbmVkJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBoYXNzKGhhc3MpIHtcclxuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xyXG5cclxuICAgIHZhciBlbnRpdHlTdGF0ZSA9IHRoaXMuX2hhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldLnN0YXRlXHJcbiAgICBpZiAoZW50aXR5U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gZW50aXR5U3RhdGU7IC8vIFRoaXMgdHJpZ2dlcnMgX3JlbmRlciBzaW5jZSBMaXRFbGVtZW50IHN1cHBvcnQgdHdvIHdheSBiaW5kaW5nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoYXNzOiBPYmplY3QsXHJcbiAgICAgIGNvbmZpZzogT2JqZWN0LFxyXG4gICAgICBzdGF0ZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDYXJkU2l6ZSgpIHtcclxuICAgIHJldHVybiAyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLy8gKiogU1RBUlQgRk9SIFRFU1RcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPSB0eXBlb2YgdW5kZWZpbmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge3JldHVybjt9IFxyXG4gICAgdGhpcy5fX2luaXRUZXN0cygpO1xyXG4gICAgLy8gKiogRU5EIEZPUiBURVNUXHJcbiAgfVxyXG5cclxuICAvLyAqKiBTVEFSVCBGT1IgVEVTVFxyXG5cclxuICAvKlxyXG4gICAgSSB1c2UgdGhpcyBpbiBteSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCB0byBtYWtlIGEgdmVyeSBzaW1wbGUgbW9jayBvZiBjb25maWcvaGFzcyBvYmplY3RzIFxyXG4gICovXHJcbiAgX19pbml0VGVzdHMoKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdpZGxlJztcclxuICAgIHZhciB0ZXN0X2NvbmZpZyA9IHsgZW50aXR5OiAnbWVkaWFfcGxheWVyLnR2X25lcmUnLCBpbWFnZV9mb2xkZXI6ICdpbWcnfTsgLy8sIGZvbnRfc2l6ZTogJzFldidcclxuICBcclxuICAgXHJcbiAgICBjb25zdCB0ZXN0X2hhc3MgPSB7IHN0YXRlczoge30gfTtcclxuICAgIHRlc3RfaGFzcy5zdGF0ZXNbdGVzdF9jb25maWcuZW50aXR5XSA9IHthdHRyaWJ1dGVzOnt9LCBzdGF0ZTogJ3BsYXlpbmcnfTtcclxuICAgIGNvbnN0IGF0dHIgPSB0ZXN0X2hhc3Muc3RhdGVzW3Rlc3RfY29uZmlnLmVudGl0eV0uYXR0cmlidXRlcztcclxuXHJcbiAgICBhdHRyWydmcmllbmRseV9uYW1lJ10gPSBcIlRWIE5lcmVcIlxyXG4gICAgYXR0clsnYXBwX25hbWUnXSA9IFwiSEJPIE5vcmRpYyBOZXRmbGl4XCJcclxuICAgIGF0dHJbJ21lZGlhX3RpdGxlJ10gPSBcIkdhbWUgb2YgdGhyb25lc1wiXHJcbiAgIC8vIGF0dHJbJ2VudGl0eV9waWN0dXJlJ10gPSAnaW1nL21lZGlhX3BsYXlpbmcucG5nJ1xyXG4gICAgdGhpcy5zZXRDb25maWcodGVzdF9jb25maWcpO1xyXG4gICAgdGhpcy5faGFzcyA9IHRlc3RfaGFzcztcclxuICB9XHJcblxyXG4gIC8vICoqIEVORCBGT1IgVEVTVFxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtZWRpYS1wbGF5ZXItY2FyZCcsIE1lZGlhUGxheWVyQ2FyZCk7XHJcbiIsIi8qIVxyXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRvbWFzIEhlbGxzdHLDtm0gIChodHRwczovL2dpdGh1Yi5jb20vaGVsdG80cmVhbC9sb3ZlbGFjZS1jdXN0b20tY2FyZHMpXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gKiBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4gLyoqXHJcbiAgKiBETyBOT1QgVVNFIFRISVMgRklMRSBJRiBVU0lORyBTSU5HTEUgQ0FSRFMsIFVTRSBUSEUgVkVSU0lPTiBVTkRFUiAnZGlzdCcgQ0FUQUxPRyEhISFcclxuICAqL1xyXG5cclxuLy8gVXNlIHdoZW4gZGV2IG91dHNpZGUgSEFTUyBhbmQgYnVpbGQgdXNpbmcgbnBtXHJcbmltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9saXQtZWxlbWVudCc7XHJcblxyXG4vKipcclxuICogYHBpY3R1cmUtc3RhdHVzLWNhcmRgXHJcbiAqIExvdmVsYWNlIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgc3RhdHVzIG9uIGEgcGljdHVyZSBib3R0b20gY2VudGVyZWQgb24gYSBzaGFkb3dcclxuICovXHJcbmNsYXNzIFBpY3R1cmVTdGF0dXNDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgX3JlbmRlcih7IGhhc3MsIGNvbmZpZyB9KSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaGFkb3cge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpOztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXRle1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIG9uLWNsaWNrPVwiJHsoKSA9PiB0aGlzLl9jbGljaygpfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd1wiPjxkaXYgaWQ9XCJzdGF0ZVwiPiR7dGhpcy5zdGF0ZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBgO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIENhbnQgc2V0IGJhY2tncm91bmQgaW1hZ2UgaW4gcmVuZGVyIG1ldGhvZCBmb3IgdGhlIHN0eWxlLCBzb21lIGJ1ZyBwcm9oaWJpdCB0aGF0LlxyXG4gICAgU28gd2UgbmVlZCB0byBzZXQgdGhlIGJhY2tncm91bmQgaW1hZ2UgYWZ0ZXIgdGhlIHBhZ2UgaGFzIHJlbmRlcmVkXHJcbiAgKi9cclxuICBfZGlkUmVuZGVyKF9wcm9wcywgX2NoYW5nZWRQcm9wcywgX3ByZXZQcm9wcykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcm9vdC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzdGF0ZV9kaXYgPSB0aGlzLl9yb290LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0ZScpO1xyXG5cclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fZ2V0U3RhdGVJbWFnZSgpfSlgO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuX2NhcmRfaGVpZ2h0O1xyXG5cclxuXHJcbiAgICB0aGlzLl9mb250X3NpemUgPSB0aGlzLl9jb25maWcuZm9udF9zaXplID8gdGhpcy5fY29uZmlnLmZvbnRfc2l6ZSA6IGBjYWxjKCR7dGhpcy5fY2FyZF9oZWlnaHR9LzYpYDtcclxuXHJcbiAgICBzdGF0ZV9kaXYuc3R5bGUuZm9udFNpemUgPSB0aGlzLl9mb250X3NpemU7XHJcbiAgICBzdGF0ZV9kaXYuc3R5bGUuY29sb3IgPSB0aGlzLl9mb250X2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgdGhpcy5fZmlyZSgnaGFzcy1tb3JlLWluZm8nLCB7IGVudGl0eUlkOiB0aGlzLl9jb25maWcuZW50aXR5IH0pO1xyXG4gIH1cclxuXHJcbiAgX2ZpcmUodHlwZSwgZGV0YWlsKSB7XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgY29tcG9zZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsIHx8IHt9O1xyXG4gICAgdGhpcy5fcm9vdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcbiAgLypcclxuICAgIFJldHVybnMgdGhlIHN0YXRlIGltYWdlIGZvciBzcGVjaWZpYyBzdGF0ZSBcclxuICAgIG9yIGRlZmF1bHQgaW1hZ2UgaWYgbm90IHNwZWNpZmljIHN0YXRlIGltYWdlIGZvdW5kXHJcbiAgKi9cclxuICBfZ2V0U3RhdGVJbWFnZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlIGluIHRoaXMuX2NvbmZpZy5zdGF0ZV9pbWFnZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnN0YXRlX2ltYWdlW3RoaXMuc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5pbWFnZTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyhjb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGVudGl0eSBkZWZpbmVkJylcclxuICAgIH1cclxuICAgIGlmICghY29uZmlnLmltYWdlKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBpbWFnZSBkZWZpbmVkJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jYXJkX2hlaWdodCA9IGNvbmZpZy5jYXJkX2hlaWdodCA/IGNvbmZpZy5jYXJkX2hlaWdodCA6ICcyMDBweCc7XHJcbiAgICB0aGlzLl9mb250X2NvbG9yID0gY29uZmlnLmZvbnRfY29sb3IgPyBjb25maWcuZm9udF9jb2xvciA6ICd3aGl0ZSc7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0IGhhc3MoaGFzcykge1xyXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XHJcblxyXG4gICAgdmFyIGVudGl0eVN0YXRlID0gdGhpcy5faGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV0uc3RhdGVcclxuICAgIGlmIChlbnRpdHlTdGF0ZSAhPSB0aGlzLnN0YXRlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBlbnRpdHlTdGF0ZTsgLy8gVGhpcyB0cmlnZ2VycyBfcmVuZGVyIHNpbmNlIExpdEVsZW1lbnQgc3VwcG9ydCB0d28gd2F5IGJpbmRpbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhhc3M6IE9iamVjdCxcclxuICAgICAgY29uZmlnOiBPYmplY3QsXHJcbiAgICAgIHN0YXRlOiBTdHJpbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENhcmRTaXplKCkge1xyXG4gICAgcmV0dXJuIDI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvLyAqKiBTVEFSVCBGT1IgVEVTVFxyXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9IHR5cGVvZiB1bmRlZmluZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7cmV0dXJuO30gXHJcbiAgICB0aGlzLl9faW5pdFRlc3RzKCk7XHJcbiAgICAvLyAqKiBFTkQgRk9SIFRFU1RcclxuICB9XHJcblxyXG4gIC8vICoqIFNUQVJUIEZPUiBURVNUXHJcblxyXG4gIC8qXHJcbiAgICBJIHVzZSB0aGlzIGluIG15IGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIG1ha2UgYSB2ZXJ5IHNpbXBsZSBtb2NrIG9mIGNvbmZpZy9oYXNzIG9iamVjdHMgXHJcbiAgKi9cclxuICBfX2luaXRUZXN0cygpIHtcclxuICAgIHRoaXMuc3RhdGUgPSAnSG9tZSc7XHJcbiAgICB2YXIgdGVzdF9jb25maWcgPSB7IGVudGl0eTogJ2RldmljZV90cmFja2VyLmFueScsIGltYWdlOiAndGVzdC9pbWcvdG9tYXNfcHJlc2VuY2VfYXdheS5qcGcnLCBzdGF0ZV9pbWFnZToge30gfTsgLy8sIGZvbnRfc2l6ZTogJzFldidcclxuICAgIHRlc3RfY29uZmlnLnN0YXRlX2ltYWdlWydIb21lJ10gPSAndGVzdC9pbWcvdG9tYXNfcHJlc2VuY2VfYXdheS5qcGcnXHJcblxyXG4gICAgdmFyIHRlc3RfaGFzcyA9IHsgc3RhdGVzOiBbXSB9O1xyXG4gICAgdGVzdF9oYXNzLnN0YXRlc1t0ZXN0X2NvbmZpZy5lbnRpdHldID0gXCJIb21lXCI7XHJcbiAgICB0aGlzLnNldENvbmZpZyh0ZXN0X2NvbmZpZyk7XHJcbiAgfVxyXG4gIC8vICoqIEVORCBGT1IgVEVTVFxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwaWN0dXJlLXN0YXR1cy1jYXJkJywgUGljdHVyZVN0YXR1c0NhcmQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9