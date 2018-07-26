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
/* harmony import */ var canvas_gauges__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-gauges */ "./node_modules/canvas-gauges/gauge.min.js");
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

//import "./gauge.min.js";

// Use this when building to prod package


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
    constructor() {
        super();
        console.error("CONSTRUCTOR!!!");

        this.attachShadow({ mode: 'open' });
        this.__initTests();
    }
    /**
     * Renders the card 
     */
    _render() {
        // Create the container element 
        const elemContainer = document.createElement('div');
        elemContainer.id = 'container';
        elemContainer.width = this.config.gauge['width'];
        elemContainer.height = this.config.gauge['height'];

        const shadowHeight = (this.config.shadow_height) ? this.config.shadow_height : '7%';
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
                width: elemCanvas.width
            });
        }
        else if (this.config.gauge.type == 'radial-gauge') {
            gauge = new RadialGauge({
                renderTo: elemCanvas,
                height: elemCanvas.height,
                width: elemCanvas.width
            });
        }

        for (const key in this.config.gauge) {
            if (this.config.gauge.hasOwnProperty(key)) {
                gauge.options[key] = this.config.gauge[key];
            }
        }
        gauge.draw();

        elemContainer.appendChild(elemCanvas);

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
        const state = hass.states[entityId].state;
        this._gauge['value'] = state;
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
        this._render();

    }

    getCardSize() {
        return 2;
    }

    /** 
     * Init testdata
     * I use this in my development environment to make a very simple mock of config/hass objects 
    */
    __initTests() {
        var test_config =
        {
            entity: 'sensor.temp',
            name: 'temp',
            gauge: {}
        }; //, font_size: '1ev'

        test_config.gauge['type'] = 'linear-gauge';
        test_config.gauge['width'] = '120';
        test_config.gauge['height'] = '400';
        test_config.gauge['units'] = '°C';
        test_config.gauge['min-value'] = '0';
        test_config.gauge['start-angle'] = '90';
        test_config.gauge['ticks-angle'] = '180';
        test_config.gauge['value-box'] = 'false';
        test_config.gauge['max-value'] = '220';
        test_config.gauge['major-ticks'] = '0,20,40,60,80,100,120,140,160,180,200,220';
        test_config.gauge['minor-ticks'] = '2';
        test_config.gauge['stroke-ticks'] = 'true';
        test_config.gauge['highlights'] = '\'[ {\"from\": 100, \"to\": 220, \"color\": \"rgba(200, 50, 50, .75)\"} ]\'';
        test_config.gauge['color-plate'] = '#fff';
        test_config.gauge['border-shadow-width'] = '0';
        test_config.gauge['borders'] = 'false';
        test_config.gauge['needle-type'] = 'arrow';
        test_config.gauge['needle-width'] = '2';
        test_config.gauge['needle-circle-size'] = '7';
        test_config.gauge['needle-circle-outer'] = 'true';
        test_config.gauge['needle-circle-inner'] = 'false';
        test_config.gauge['animation-duration'] = '1500';
        test_config.gauge['animation-rule'] = 'linear';
        test_config.gauge['bar-width'] = '10';
        test_config.gauge['value'] = '50';

        var test_hass = { states: [] };
        test_hass.states[test_config.entity] = { state: "15" };
        this.setConfig(test_config);

        this.hass = test_hass;
    }
}

window.customElements.define('canvas-gauge-card', CanvasGaugeCard);

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


// Use when dev outside HASS and build using npm

// Use when deploy directly to HASS without complie and stuff. 
//import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

/**
 * `picture-status-element`
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
    // We check if we have set the environment var to production, if so we dont load testdata
    // this environment is set in webpack.prod.js
    if (typeof process != typeof undefined && "development" == 'production') { return; }

    this.__initTests(); // Init testdata if we are i dev
  }

  /*
    I use this in my development environment to make a very simple mock of config/hass objects 
  */
  __initTests() {
    this.state = 'Home';
    var test_config = { entity: 'device_tracker.any', image: '/dist/img/presence/tomas_presence_away.jpg', state_image: {} }; //, font_size: '1ev'
    test_config.state_image['Home'] = '/dist/img/presence/tomas_presence_away.jpg'

    var test_hass = { states: [] };
    test_hass.states[test_config.entity] = "Home";
    this.setConfig(test_config);


  }
}

window.customElements.define('picture-status-card', PictureStatusCard);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1jaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FudmFzLWdhdWdlcy9nYXVnZS5taW4uanM/ZjUxMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2xpdC1leHRlbmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL21vZGlmeS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3NoYWR5LXJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FudmFzLWdhdWdlcy9nYXVnZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjcmlwdC1sb2FkZXIvYWRkU2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMtZ2F1Z2UtY2FyZC9jYW52YXMtZ2F1Z2UtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS1zdGF0dXMtY2FyZC9waWN0dXJlLXN0YXR1cy1jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ0E7QUFDVDtBQUNHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SSxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVyxVQUFVLEVBQUU7QUFDOUM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU0saUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsa0NBQWtDLE9BQU8sR0FBRyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7O0FDem9CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUVsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBcUYsUUFBUTs7QUFFN0YsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUdBQW1HLEdBQUc7QUFDN0g7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY3VzdG9tLWNhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2NhbnZhcy1nYXVnZS1jYXJkL2NhbnZhcy1nYXVnZS1jYXJkLmpzXCI7XHJcbmltcG9ydCBcIi4vc3JjL3BpY3R1cmUtc3RhdHVzLWNhcmQvcGljdHVyZS1zdGF0dXMtY2FyZC5qc1wiIiwiaW1wb3J0IHsgUHJvcGVydGllc01peGluIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL3Byb3BlcnRpZXMtbWl4aW4uanMnO1xuaW1wb3J0IHsgY2FtZWxUb0Rhc2hDYXNlIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvY2FzZS1tYXAuanMnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnbGl0LWh0bWwvbGliL3NoYWR5LXJlbmRlci5qcyc7XG5leHBvcnQgeyBodG1sLCBzdmcgfSBmcm9tICdsaXQtaHRtbC9saWIvbGl0LWV4dGVuZGVkLmpzJztcbi8qKlxuICogUmVuZGVycyBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50IGJhc2VkIG9uIHRoZSBgYXR0ckluZm9gIG9iamVjdCB3aGVyZVxuICogYm9vbGVhbiB2YWx1ZXMgYXJlIGFkZGVkL3JlbW92ZWQgYXMgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgb24gd2hpY2ggdG8gc2V0IGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0gYXR0ckluZm8gT2JqZWN0IGRlc2NyaWJpbmcgYXR0cmlidXRlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0ckluZm8pIHtcbiAgICBmb3IgKGNvbnN0IGEgaW4gYXR0ckluZm8pIHtcbiAgICAgICAgY29uc3QgdiA9IGF0dHJJbmZvW2FdID09PSB0cnVlID8gJycgOiBhdHRySW5mb1thXTtcbiAgICAgICAgaWYgKHYgfHwgdiA9PT0gJycgfHwgdiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGEpICE9PSB2KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYSwgU3RyaW5nKHYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShhKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgb2YgY3NzIGNsYXNzIG5hbWVzIGZvcm1lZCBieSB0YWtpbmcgdGhlIHByb3BlcnRpZXNcbiAqIGluIHRoZSBgY2xhc3NJbmZvYCBvYmplY3QgYW5kIGFwcGVuZGluZyB0aGUgcHJvcGVydHkgbmFtZSB0byB0aGUgc3RyaW5nIG9mXG4gKiBjbGFzcyBuYW1lcyBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgdHJ1dGh5LlxuICogQHBhcmFtIGNsYXNzSW5mb1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NTdHJpbmcoY2xhc3NJbmZvKSB7XG4gICAgY29uc3QgbyA9IFtdO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBjbGFzc0luZm8pIHtcbiAgICAgICAgY29uc3QgdiA9IGNsYXNzSW5mb1tuYW1lXTtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIG8ucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gby5qb2luKCcgJyk7XG59XG4vKipcbiAqIFJldHVybnMgYSBjc3Mgc3R5bGUgc3RyaW5nIGZvcm1lZCBieSB0YWtpbmcgdGhlIHByb3BlcnRpZXMgaW4gdGhlIGBzdHlsZUluZm9gXG4gKiBvYmplY3QgYW5kIGFwcGVuZGluZyB0aGUgcHJvcGVydHkgbmFtZSAoZGFzaC1jYXNlZCkgY29sb24gdGhlXG4gKiBwcm9wZXJ0eSB2YWx1ZS4gUHJvcGVydGllcyBhcmUgc2VwYXJhdGVkIGJ5IGEgc2VtaS1jb2xvbi5cbiAqIEBwYXJhbSBzdHlsZUluZm9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlU3RyaW5nKHN0eWxlSW5mbykge1xuICAgIGNvbnN0IG8gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgICAgIGNvbnN0IHYgPSBzdHlsZUluZm9bbmFtZV07XG4gICAgICAgIGlmICh2IHx8IHYgPT09IDApIHtcbiAgICAgICAgICAgIG8ucHVzaChgJHtjYW1lbFRvRGFzaENhc2UobmFtZSl9OiAke3Z9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG8uam9pbignOyAnKTtcbn1cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUHJvcGVydGllc01peGluKEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX19yZW5kZXJDb21wbGV0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9faXNJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHdoaWNoIHNldHMgdXAgZWxlbWVudCByZW5kZXJpbmcgYnkgY2FsbGluZyogYF9jcmVhdGVSb290YFxuICAgICAqIGFuZCBgX2ZpcnN0UmVuZGVyZWRgLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5fY3JlYXRlUm9vdCgpO1xuICAgICAgICBzdXBlci5yZWFkeSgpO1xuICAgICAgICB0aGlzLl9maXJzdFJlbmRlcmVkKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAod2luZG93LlNoYWR5Q1NTICYmIHRoaXMuX3Jvb3QpIHtcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGFmdGVyIHRoZSBlbGVtZW50IERPTSBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICogSW1wbGVtZW50IHRvIHBlcmZvcm0gdGFza3MgYWZ0ZXIgZmlyc3QgcmVuZGVyaW5nIGxpa2UgY2FwdHVyaW5nIGFcbiAgICAgKiByZWZlcmVuY2UgdG8gYSBzdGF0aWMgbm9kZSB3aGljaCBtdXN0IGJlIGRpcmVjdGx5IG1hbmlwdWxhdGVkLlxuICAgICAqIFRoaXMgc2hvdWxkIG5vdCBiZSBjb21tb25seSBuZWVkZWQuIEZvciB0YXNrcyB3aGljaCBzaG91bGQgYmUgcGVyZm9ybWVkXG4gICAgICogYmVmb3JlIGZpcnN0IHJlbmRlciwgdXNlIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIF9maXJzdFJlbmRlcmVkKCkgeyB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGUgZWxlbWVudCdzIHRlbXBsYXRlIGlzIHJlbmRlcmVkIGJ5XG4gICAgICogcmV0dXJuaW5nIGFuIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIuIEJ5IGRlZmF1bHQgdGhpcyBjcmVhdGVzXG4gICAgICogYSBzaGFkb3dSb290IGZvciB0aGUgZWxlbWVudC4gVG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQncyBjaGlsZE5vZGVzLFxuICAgICAqIHJldHVybiBgdGhpc2AuXG4gICAgICogQHJldHVybnMge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAgICovXG4gICAgX2NyZWF0ZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgd2hpY2ggcmV0dXJucyB0aGUgdmFsdWUgb2YgYF9zaG91bGRSZW5kZXJgIHdoaWNoIHVzZXJzXG4gICAgICogc2hvdWxkIGltcGxlbWVudCB0byBjb250cm9sIHJlbmRlcmluZy4gSWYgdGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSxcbiAgICAgKiBfcHJvcGVydGllc0NoYW5nZWQgd2lsbCBub3QgYmUgY2FsbGVkIGFuZCBubyByZW5kZXJpbmcgd2lsbCBvY2N1ciBldmVuXG4gICAgICogaWYgcHJvcGVydHkgdmFsdWVzIGNoYW5nZSBvciBgcmVxdWVzdFJlbmRlcmAgaXMgY2FsbGVkLlxuICAgICAqIEBwYXJhbSBfcHJvcHMgQ3VycmVudCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wcyBDaGFuZ2luZyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gX3ByZXZQcm9wcyBQcmV2aW91cyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBhbHdheXMgcmV0dXJucyB0cnVlLlxuICAgICAqL1xuICAgIF9zaG91bGRQcm9wZXJ0aWVzQ2hhbmdlKF9wcm9wcywgX2NoYW5nZWRQcm9wcywgX3ByZXZQcm9wcykge1xuICAgICAgICBjb25zdCBzaG91bGRSZW5kZXIgPSB0aGlzLl9zaG91bGRSZW5kZXIoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKTtcbiAgICAgICAgaWYgKCFzaG91bGRSZW5kZXIgJiYgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNob3VsZFJlbmRlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50IHRvIGNvbnRyb2wgaWYgcmVuZGVyaW5nIHNob3VsZCBvY2N1ciB3aGVuIHByb3BlcnR5IHZhbHVlc1xuICAgICAqIGNoYW5nZSBvciBgcmVxdWVzdFJlbmRlcmAgaXMgY2FsbGVkLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXNcbiAgICAgKiByZXR1cm5zIHRydWUsIGJ1dCB0aGlzIGNhbiBiZSBjdXN0b21pemVkIGFzIGFuIG9wdGltaXphdGlvbiB0byBhdm9pZFxuICAgICAqIHJlbmRlcmluZyB3b3JrIHdoZW4gY2hhbmdlcyBvY2N1ciB3aGljaCBzaG91bGQgbm90IGJlIHJlbmRlcmVkLlxuICAgICAqIEBwYXJhbSBfcHJvcHMgQ3VycmVudCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wcyBDaGFuZ2luZyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gX3ByZXZQcm9wcyBQcmV2aW91cyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBhbHdheXMgcmV0dXJucyB0cnVlLlxuICAgICAqL1xuICAgIF9zaG91bGRSZW5kZXIoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB3aGljaCBwZXJmb3JtcyBlbGVtZW50IHJlbmRlcmluZyBieSBjYWxsaW5nXG4gICAgICogYF9yZW5kZXJgLCBgX2FwcGx5UmVuZGVyYCwgYW5kIGZpbmFsbHkgYF9kaWRSZW5kZXJgLlxuICAgICAqIEBwYXJhbSBwcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcHMgQ2hhbmdpbmcgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHByZXZQcm9wcyBQcmV2aW91cyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBfcHJvcGVydGllc0NoYW5nZWQocHJvcHMsIGNoYW5nZWRQcm9wcywgcHJldlByb3BzKSB7XG4gICAgICAgIHN1cGVyLl9wcm9wZXJ0aWVzQ2hhbmdlZChwcm9wcywgY2hhbmdlZFByb3BzLCBwcmV2UHJvcHMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9yZW5kZXIocHJvcHMpO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHRoaXMuX3Jvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlSZW5kZXIocmVzdWx0LCB0aGlzLl9yb290KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaWRSZW5kZXIocHJvcHMsIGNoYW5nZWRQcm9wcywgcHJldlByb3BzKTtcbiAgICAgICAgaWYgKHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2ZsdXNoUHJvcGVydGllcygpIHtcbiAgICAgICAgdGhpcy5fX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9faXNJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHN1cGVyLl9mbHVzaFByb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5fX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgd2hpY2ggd2FybnMgd2hlbiBhIHVzZXIgYXR0ZW1wdHMgdG8gY2hhbmdlIGEgcHJvcGVydHkgZHVyaW5nXG4gICAgICogdGhlIHJlbmRlcmluZyBsaWZlY3ljbGUuIFRoaXMgaXMgYW4gYW50aS1wYXR0ZXJuIGFuZCBzaG91bGQgYmUgYXZvaWRlZC5cbiAgICAgKiBAcGFyYW0gcHJvcGVydHkge3N0cmluZ31cbiAgICAgKiBAcGFyYW0gdmFsdWUge2FueX1cbiAgICAgKiBAcGFyYW0gb2xkIHthbnl9XG4gICAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgIF9zaG91bGRQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eSwgdmFsdWUsIG9sZCkge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSBzdXBlci5fc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHksIHZhbHVlLCBvbGQpO1xuICAgICAgICBpZiAoY2hhbmdlICYmIHRoaXMuX19pc0NoYW5naW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKGBTZXR0aW5nIHByb3BlcnRpZXMgaW4gcmVzcG9uc2UgdG8gb3RoZXIgcHJvcGVydGllcyBjaGFuZ2luZyBgICtcbiAgICAgICAgICAgICAgICBgY29uc2lkZXJlZCBoYXJtZnVsLiBTZXR0aW5nICcke3Byb3BlcnR5fScgZnJvbSBgICtcbiAgICAgICAgICAgICAgICBgJyR7dGhpcy5fZ2V0UHJvcGVydHkocHJvcGVydHkpfScgdG8gJyR7dmFsdWV9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnQgdG8gZGVzY3JpYmUgdGhlIERPTSB3aGljaCBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIGVsZW1lbnQuXG4gICAgICogSWRlYWxseSwgdGhlIGltcGxlbWVudGF0aW9uIGlzIGEgcHVyZSBmdW5jdGlvbiB1c2luZyBvbmx5IHByb3BzIHRvIGRlc2NyaWJlXG4gICAgICogdGhlIGVsZW1lbnQgdGVtcGxhdGUuIFRoZSBpbXBsZW1lbnRhdGlvbiBtdXN0IHJldHVybiBhIGBsaXQtaHRtbGBcbiAgICAgKiBUZW1wbGF0ZVJlc3VsdC4gQnkgZGVmYXVsdCB0aGlzIHRlbXBsYXRlIGlzIHJlbmRlcmVkIGludG8gdGhlIGVsZW1lbnQnc1xuICAgICAqIHNoYWRvd1Jvb3QuIFRoaXMgY2FuIGJlIGN1c3RvbWl6ZWQgYnkgaW1wbGVtZW50aW5nIGBfY3JlYXRlUm9vdGAuIFRoaXNcbiAgICAgKiBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC5cbiAgICAgKiBAcGFyYW0geyp9IF9wcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEByZXR1cm5zIHtUZW1wbGF0ZVJlc3VsdH0gTXVzdCByZXR1cm4gYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdC5cbiAgICAgKi9cbiAgICBfcmVuZGVyKF9wcm9wcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ19yZW5kZXIoKSBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgZ2l2ZW4gbGl0LWh0bWwgdGVtcGxhdGUgYHJlc3VsdGAgaW50byB0aGUgZ2l2ZW4gYG5vZGVgLlxuICAgICAqIEltcGxlbWVudCB0byBjdXN0b21pemUgdGhlIHdheSByZW5kZXJpbmcgaXMgYXBwbGllZC4gVGhpcyBpcyBzaG91bGQgbm90XG4gICAgICogdHlwaWNhbGx5IGJlIG5lZWRlZCBhbmQgaXMgcHJvdmlkZWQgZm9yIGFkdmFuY2VkIHVzZSBjYXNlcy5cbiAgICAgKiBAcGFyYW0gcmVzdWx0IHtUZW1wbGF0ZVJlc3VsdH0gYGxpdC1odG1sYCB0ZW1wbGF0ZSByZXN1bHQgdG8gcmVuZGVyXG4gICAgICogQHBhcmFtIG5vZGUge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlclxuICAgICAqL1xuICAgIF9hcHBseVJlbmRlcihyZXN1bHQsIG5vZGUpIHtcbiAgICAgICAgcmVuZGVyKHJlc3VsdCwgbm9kZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgZWxlbWVudCBET00gaGFzIGJlZW4gcmVuZGVyZWQuIEltcGxlbWVudCB0b1xuICAgICAqIGRpcmVjdGx5IGNvbnRyb2wgcmVuZGVyZWQgRE9NLiBUeXBpY2FsbHkgdGhpcyBpcyBub3QgbmVlZGVkIGFzIGBsaXQtaHRtbGBcbiAgICAgKiBjYW4gYmUgdXNlZCBpbiB0aGUgYF9yZW5kZXJgIG1ldGhvZCB0byBzZXQgcHJvcGVydGllcywgYXR0cmlidXRlcywgYW5kXG4gICAgICogZXZlbnQgbGlzdGVuZXJzLiBIb3dldmVyLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIGZvciBjYWxsaW5nIG1ldGhvZHMgb25cbiAgICAgKiByZW5kZXJlZCBlbGVtZW50cywgbGlrZSBjYWxsaW5nIGBmb2N1cygpYCBvbiBhbiBlbGVtZW50IHRvIGZvY3VzIGl0LlxuICAgICAqIEBwYXJhbSBfcHJvcHMgQ3VycmVudCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wcyBDaGFuZ2luZyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gX3ByZXZQcm9wcyBQcmV2aW91cyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBfZGlkUmVuZGVyKF9wcm9wcywgX2NoYW5nZWRQcm9wcywgX3ByZXZQcm9wcykgeyB9XG4gICAgLyoqXG4gICAgICogQ2FsbCB0byByZXF1ZXN0IHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHJlLXJlbmRlciByZWdhcmRsZXNzXG4gICAgICogb2Ygd2hldGhlciBvciBub3QgYW55IHByb3BlcnR5IGNoYW5nZXMgYXJlIHBlbmRpbmcuXG4gICAgICovXG4gICAgcmVxdWVzdFJlbmRlcigpIHsgdGhpcy5faW52YWxpZGF0ZVByb3BlcnRpZXMoKTsgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHdoaWNoIHByb3ZpZGVzIHRyYWNraW5nIG9mIGludmFsaWRhdGVkIHN0YXRlLlxuICAgICAqL1xuICAgIF9pbnZhbGlkYXRlUHJvcGVydGllcygpIHtcbiAgICAgICAgdGhpcy5fX2lzSW52YWxpZCA9IHRydWU7XG4gICAgICAgIHN1cGVyLl9pbnZhbGlkYXRlUHJvcGVydGllcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aGljaCByZXNvbHZlcyBhZnRlciB0aGUgZWxlbWVudCBuZXh0IHJlbmRlcnMuXG4gICAgICogVGhlIHByb21pc2UgcmVzb2x2ZXMgdG8gYHRydWVgIGlmIHRoZSBlbGVtZW50IHJlbmRlcmVkIGFuZCBgZmFsc2VgIGlmIHRoZVxuICAgICAqIGVsZW1lbnQgZGlkIG5vdCByZW5kZXIuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2VycyAoZS5nLiB0ZXN0cykgbmVlZCB0byByZWFjdCB0byB0aGUgcmVuZGVyZWQgc3RhdGVcbiAgICAgKiBvZiB0aGUgZWxlbWVudCBhZnRlciBhIGNoYW5nZSBpcyBtYWRlLlxuICAgICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZnVsIGluIGV2ZW50IGhhbmRsZXJzIGlmIGl0IGlzIGRlc2lyZWFibGUgdG8gd2FpdFxuICAgICAqIHRvIHNlbmQgYW4gZXZlbnQgdW50aWwgYWZ0ZXIgcmVuZGVyaW5nLiBJZiBwb3NzaWJsZSBpbXBsZW1lbnQgdGhlXG4gICAgICogYF9kaWRSZW5kZXJgIG1ldGhvZCB0byBkaXJlY3RseSByZXNwb25kIHRvIHJlbmRlcmluZyB3aXRoaW4gdGhlXG4gICAgICogcmVuZGVyaW5nIGxpZmVjeWNsZS5cbiAgICAgKi9cbiAgICBnZXQgcmVuZGVyQ29tcGxldGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5fX3JlbmRlckNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmVuZGVyQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSA9IHRoaXMuX19yZW5kZXJDb21wbGV0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fX2lzSW52YWxpZCAmJiB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKGZhbHNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX19yZW5kZXJDb21wbGV0ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi91dGlscy9ib290LmpzJztcblxuaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gJy4uL3V0aWxzL21peGluLmpzJztcbmltcG9ydCB7IG1pY3JvVGFzayB9IGZyb20gJy4uL3V0aWxzL2FzeW5jLmpzJztcblxuLyoqIEBjb25zdCB7IUFzeW5jSW50ZXJmYWNlfSAqL1xuY29uc3QgbWljcm90YXNrID0gbWljcm9UYXNrO1xuXG4vKipcbiAqIEVsZW1lbnQgY2xhc3MgbWl4aW4gdGhhdCBwcm92aWRlcyBiYXNpYyBtZXRhLXByb2dyYW1taW5nIGZvciBjcmVhdGluZyBvbmVcbiAqIG9yIG1vcmUgcHJvcGVydHkgYWNjZXNzb3JzIChnZXR0ZXIvc2V0dGVyIHBhaXIpIHRoYXQgZW5xdWV1ZSBhbiBhc3luY1xuICogKGJhdGNoZWQpIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrLlxuICpcbiAqIEZvciBiYXNpYyB1c2FnZSBvZiB0aGlzIG1peGluLCBjYWxsIGBNeUNsYXNzLmNyZWF0ZVByb3BlcnRpZXMocHJvcHMpYFxuICogb25jZSBhdCBjbGFzcyBkZWZpbml0aW9uIHRpbWUgdG8gY3JlYXRlIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcHJvcGVydGllc1xuICogbmFtZWQgaW4gcHJvcHMsIGltcGxlbWVudCBgX3Byb3BlcnRpZXNDaGFuZ2VkYCB0byByZWFjdCBhcyBkZXNpcmVkIHRvXG4gKiBwcm9wZXJ0eSBjaGFuZ2VzLCBhbmQgaW1wbGVtZW50IGBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpYCBhbmRcbiAqIGluY2x1ZGUgbG93ZXJjYXNlIHZlcnNpb25zIG9mIGFueSBwcm9wZXJ0eSBuYW1lcyB0aGF0IHNob3VsZCBiZSBzZXQgZnJvbVxuICogYXR0cmlidXRlcy4gTGFzdCwgY2FsbCBgdGhpcy5fZW5hYmxlUHJvcGVydGllcygpYCBpbiB0aGUgZWxlbWVudCdzXG4gKiBgY29ubmVjdGVkQ2FsbGJhY2tgIHRvIGVuYWJsZSB0aGUgYWNjZXNzb3JzLlxuICpcbiAqIEBtaXhpbkZ1bmN0aW9uXG4gKiBAcG9seW1lclxuICogQHN1bW1hcnkgRWxlbWVudCBjbGFzcyBtaXhpbiBmb3IgcmVhY3RpbmcgdG8gcHJvcGVydHkgY2hhbmdlcyBmcm9tXG4gKiAgIGdlbmVyYXRlZCBwcm9wZXJ0eSBhY2Nlc3NvcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzQ2hhbmdlZCA9IGRlZHVwaW5nTWl4aW4oc3VwZXJDbGFzcyA9PiB7XG5cbiAgLyoqXG4gICAqIEBwb2x5bWVyXG4gICAqIEBtaXhpbkNsYXNzXG4gICAqIEBleHRlbmRzIHtzdXBlckNsYXNzfVxuICAgKiBAaW1wbGVtZW50cyB7UG9seW1lcl9Qcm9wZXJ0aWVzQ2hhbmdlZH1cbiAgICogQHVucmVzdHJpY3RlZFxuICAgKi9cbiAgY2xhc3MgUHJvcGVydGllc0NoYW5nZWQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgYWNjZXNzb3JzIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZXMuXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBwcm9wcyBPYmplY3Qgd2hvc2Uga2V5cyBhcmUgbmFtZXMgb2YgYWNjZXNzb3JzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQcm9wZXJ0aWVzKHByb3BzKSB7XG4gICAgICBjb25zdCBwcm90byA9IHRoaXMucHJvdG90eXBlO1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAvLyBkb24ndCBzdG9tcCBhbiBleGlzdGluZyBhY2Nlc3NvclxuICAgICAgICBpZiAoIShwcm9wIGluIHByb3RvKSkge1xuICAgICAgICAgIHByb3RvLl9jcmVhdGVQcm9wZXJ0eUFjY2Vzc29yKHByb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhdHRyaWJ1dGUgbmFtZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBUaGUgYXR0cmlidXRlIG5hbWUgaXMgdGhlIGxvd2VyY2FzZWQgcHJvcGVydHkgbmFtZS4gT3ZlcnJpZGUgdG9cbiAgICAgKiBjdXN0b21pemUgdGhpcyBtYXBwaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBQcm9wZXJ0eSB0byBjb252ZXJ0XG4gICAgICogQHJldHVybiB7c3RyaW5nfSBBdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gcHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBwb2ludCB0byBwcm92aWRlIGEgdHlwZSB0byB3aGljaCB0byBkZXNlcmlhbGl6ZSBhIHZhbHVlIHRvXG4gICAgICogYSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIHR5cGVGb3JQcm9wZXJ0eShuYW1lKSB7IH0gLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0dGVyL2dldHRlciBwYWlyIGZvciB0aGUgbmFtZWQgcHJvcGVydHkgd2l0aCBpdHMgb3duXG4gICAgICogbG9jYWwgc3RvcmFnZS4gIFRoZSBnZXR0ZXIgcmV0dXJucyB0aGUgdmFsdWUgaW4gdGhlIGxvY2FsIHN0b3JhZ2UsXG4gICAgICogYW5kIHRoZSBzZXR0ZXIgY2FsbHMgYF9zZXRQcm9wZXJ0eWAsIHdoaWNoIHVwZGF0ZXMgdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBmb3IgdGhlIHByb3BlcnR5IGFuZCBlbnF1ZXVlcyBhIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgbWF5IGJlIGNhbGxlZCBvbiBhIHByb3RvdHlwZSBvciBhbiBpbnN0YW5jZS4gIENhbGxpbmdcbiAgICAgKiB0aGlzIG1ldGhvZCBtYXkgb3ZlcndyaXRlIGEgcHJvcGVydHkgdmFsdWUgdGhhdCBhbHJlYWR5IGV4aXN0cyBvblxuICAgICAqIHRoZSBwcm90b3R5cGUvaW5zdGFuY2UgYnkgY3JlYXRpbmcgdGhlIGFjY2Vzc29yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gcmVhZE9ubHkgV2hlbiB0cnVlLCBubyBzZXR0ZXIgaXMgY3JlYXRlZDsgdGhlXG4gICAgICogICBwcm90ZWN0ZWQgYF9zZXRQcm9wZXJ0eWAgZnVuY3Rpb24gbXVzdCBiZSB1c2VkIHRvIHNldCB0aGUgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfY3JlYXRlUHJvcGVydHlBY2Nlc3Nvcihwcm9wZXJ0eSwgcmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuX2FkZFByb3BlcnR5VG9BdHRyaWJ1dGVNYXAocHJvcGVydHkpO1xuICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdfX2RhdGFIYXNBY2Nlc3NvcicpKSB7XG4gICAgICAgIHRoaXMuX19kYXRhSGFzQWNjZXNzb3IgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9fZGF0YUhhc0FjY2Vzc29yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fX2RhdGFIYXNBY2Nlc3Nvcltwcm9wZXJ0eV0pIHtcbiAgICAgICAgdGhpcy5fX2RhdGFIYXNBY2Nlc3Nvcltwcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICB0aGlzLl9kZWZpbmVQcm9wZXJ0eUFjY2Vzc29yKHByb3BlcnR5LCByZWFkT25seSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gYHByb3BlcnR5YCB0byBhIG1hcCBtYXRjaGluZyBhdHRyaWJ1dGUgbmFtZXNcbiAgICAgKiB0byBwcm9wZXJ0eSBuYW1lcywgdXNpbmcgYGF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eWAuIFRoaXMgbWFwIGlzXG4gICAgICogdXNlZCB3aGVuIGRlc2VyaWFsaXppbmcgYXR0cmlidXRlIHZhbHVlcyB0byBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAgICovXG4gICAgX2FkZFByb3BlcnR5VG9BdHRyaWJ1dGVNYXAocHJvcGVydHkpIHtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgnX19kYXRhQXR0cmlidXRlcycpKSB7XG4gICAgICAgIHRoaXMuX19kYXRhQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX19kYXRhQXR0cmlidXRlcyk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX19kYXRhQXR0cmlidXRlc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgICAgdGhpcy5fX2RhdGFBdHRyaWJ1dGVzW2F0dHJdID0gcHJvcGVydHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIHByb3BlcnR5IGFjY2Vzc29yIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gcmVhZE9ubHkgV2hlbiB0cnVlLCBubyBzZXR0ZXIgaXMgY3JlYXRlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgIF9kZWZpbmVQcm9wZXJ0eUFjY2Vzc29yKHByb3BlcnR5LCByZWFkT25seSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5LCB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG4gICAgICAgIC8qKiBAdGhpcyB7UHJvcGVydGllc0NoYW5nZWR9ICovXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJvcGVydHkocHJvcGVydHkpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMge1Byb3BlcnRpZXNDaGFuZ2VkfSAqL1xuICAgICAgICBzZXQ6IHJlYWRPbmx5ID8gZnVuY3Rpb24gKCkge30gOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX19kYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2RhdGFSZWFkeSA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2RhdGFJbnZhbGlkID0gZmFsc2U7XG4gICAgICB0aGlzLl9fZGF0YSA9IHt9O1xuICAgICAgdGhpcy5fX2RhdGFQZW5kaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX19kYXRhT2xkID0gbnVsbDtcbiAgICAgIHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcyA9IG51bGw7XG4gICAgICB0aGlzLl9fc2VyaWFsaXppbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVQcm9wZXJ0aWVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlmZWN5Y2xlIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHByb3BlcnRpZXMgYXJlIGVuYWJsZWQgdmlhXG4gICAgICogYF9lbmFibGVQcm9wZXJ0aWVzYC5cbiAgICAgKlxuICAgICAqIFVzZXJzIG1heSBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIHRvIGltcGxlbWVudCBiZWhhdmlvciB0aGF0IGlzXG4gICAgICogZGVwZW5kZW50IG9uIHRoZSBlbGVtZW50IGhhdmluZyBpdHMgcHJvcGVydHkgZGF0YSBpbml0aWFsaXplZCwgZS5nLlxuICAgICAqIGZyb20gZGVmYXVsdHMgKGluaXRpYWxpemVkIGZyb20gYGNvbnN0cnVjdG9yYCwgYF9pbml0aWFsaXplUHJvcGVydGllc2ApLFxuICAgICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB2YWx1ZXMgcHJvcGFnYXRlZCBmcm9tIGhvc3QgZS5nLiB2aWFcbiAgICAgKiBiaW5kaW5ncy4gIGBzdXBlci5yZWFkeSgpYCBtdXN0IGJlIGNhbGxlZCB0byBlbnN1cmUgdGhlIGRhdGEgc3lzdGVtXG4gICAgICogYmVjb21lcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICB0aGlzLl9fZGF0YVJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2ZsdXNoUHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBwcm9wZXJ0eSBhY2Nlc3NvcnMuXG4gICAgICpcbiAgICAgKiBQcm92aWRlZCBhcyBhbiBvdmVycmlkZSBwb2ludCBmb3IgcGVyZm9ybWluZyBhbnkgc2V0dXAgd29yayBwcmlvclxuICAgICAqIHRvIGluaXRpYWxpemluZyB0aGUgcHJvcGVydHkgYWNjZXNzb3Igc3lzdGVtLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2luaXRpYWxpemVQcm9wZXJ0aWVzKCkge1xuICAgICAgLy8gQ2FwdHVyZSBpbnN0YW5jZSBwcm9wZXJ0aWVzOyB0aGVzZSB3aWxsIGJlIHNldCBpbnRvIGFjY2Vzc29yc1xuICAgICAgLy8gZHVyaW5nIGZpcnN0IGZsdXNoLiBEb24ndCBzZXQgdGhlbSBoZXJlLCBzaW5jZSB3ZSB3YW50XG4gICAgICAvLyB0aGVzZSB0byBvdmVyd3JpdGUgZGVmYXVsdHMvY29uc3RydWN0b3IgYXNzaWdubWVudHNcbiAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5fX2RhdGFIYXNBY2Nlc3Nvcikge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgIHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcyA9IHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcyB8fCB7fTtcbiAgICAgICAgICB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHNbcF0gPSB0aGlzW3BdO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGF0IHJlYWR5IHRpbWUgd2l0aCBiYWcgb2YgaW5zdGFuY2UgcHJvcGVydGllcyB0aGF0IG92ZXJ3cm90ZVxuICAgICAqIGFjY2Vzc29ycyB3aGVuIHRoZSBlbGVtZW50IHVwZ3JhZGVkLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gc2V0cyB0aGVzZSBwcm9wZXJ0aWVzIGJhY2sgaW50byB0aGVcbiAgICAgKiBzZXR0ZXIgYXQgcmVhZHkgdGltZS4gIFRoaXMgbWV0aG9kIGlzIHByb3ZpZGVkIGFzIGFuIG92ZXJyaWRlXG4gICAgICogcG9pbnQgZm9yIGN1c3RvbWl6aW5nIG9yIHByb3ZpZGluZyBtb3JlIGVmZmljaWVudCBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBCYWcgb2YgcHJvcGVydHkgdmFsdWVzIHRoYXQgd2VyZSBvdmVyd3JpdHRlblxuICAgICAqICAgd2hlbiBjcmVhdGluZyBwcm9wZXJ0eSBhY2Nlc3NvcnMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2luaXRpYWxpemVJbnN0YW5jZVByb3BlcnRpZXMocHJvcHMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIGEgcHJvcGVydHkgKHZpYSBgX3NldFBlbmRpbmdQcm9wZXJ0eWApXG4gICAgICogYW5kIGVucXVldWVzIGEgYF9wcm9lcHJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHNldFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9zZXRQZW5kaW5nUHJvcGVydHkocHJvcGVydHksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLl9pbnZhbGlkYXRlUHJvcGVydGllcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHsqfSBWYWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9nZXRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRoaXMuX19kYXRhW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIGEgcHJvcGVydHksIHJlY29yZHMgdGhlIHByZXZpb3VzIHZhbHVlLFxuICAgICAqIGFuZCBhZGRzIGl0IHRvIHRoZSBzZXQgb2YgXCJwZW5kaW5nIGNoYW5nZXNcIiB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrLiAgVGhpcyBtZXRob2QgZG9lcyBub3QgZW5xdWV1ZSB0aGVcbiAgICAgKiBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gZXh0IE5vdCB1c2VkIGhlcmU7IGFmZm9yZGFuY2UgZm9yIGNsb3N1cmVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGNoYW5nZWRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3NldFBlbmRpbmdQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUsIGV4dCkge1xuICAgICAgbGV0IG9sZCA9IHRoaXMuX19kYXRhW3Byb3BlcnR5XTtcbiAgICAgIGxldCBjaGFuZ2VkID0gdGhpcy5fc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHksIHZhbHVlLCBvbGQpO1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fZGF0YVBlbmRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9fZGF0YVBlbmRpbmcgPSB7fTtcbiAgICAgICAgICB0aGlzLl9fZGF0YU9sZCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSBvbGQgaXMgY2FwdHVyZWQgZnJvbSB0aGUgbGFzdCB0dXJuXG4gICAgICAgIGlmICh0aGlzLl9fZGF0YU9sZCAmJiAhKHByb3BlcnR5IGluIHRoaXMuX19kYXRhT2xkKSkge1xuICAgICAgICAgIHRoaXMuX19kYXRhT2xkW3Byb3BlcnR5XSA9IG9sZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RhdGFQZW5kaW5nW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBwcm9wZXJ0aWVzIGFzIGludmFsaWQsIGFuZCBlbnF1ZXVlcyBhbiBhc3luY1xuICAgICAqIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCkge1xuICAgICAgaWYgKCF0aGlzLl9fZGF0YUludmFsaWQgJiYgdGhpcy5fX2RhdGFSZWFkeSkge1xuICAgICAgICB0aGlzLl9fZGF0YUludmFsaWQgPSB0cnVlO1xuICAgICAgICBtaWNyb3Rhc2sucnVuKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fX2RhdGFJbnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9fZGF0YUludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ZsdXNoUHJvcGVydGllcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbCB0byBlbmFibGUgcHJvcGVydHkgYWNjZXNzb3IgcHJvY2Vzc2luZy4gQmVmb3JlIHRoaXMgbWV0aG9kIGlzXG4gICAgICogY2FsbGVkIGFjY2Vzc29yIHZhbHVlcyB3aWxsIGJlIHNldCBidXQgc2lkZSBlZmZlY3RzIGFyZVxuICAgICAqIHF1ZXVlZC4gV2hlbiBjYWxsZWQsIGFueSBwZW5kaW5nIHNpZGUgZWZmZWN0cyBvY2N1ciBpbW1lZGlhdGVseS5cbiAgICAgKiBGb3IgZWxlbWVudHMsIGdlbmVyYWxseSBgY29ubmVjdGVkQ2FsbGJhY2tgIGlzIGEgbm9ybWFsIHNwb3QgdG8gZG8gc28uXG4gICAgICogSXQgaXMgc2FmZSB0byBjYWxsIHRoaXMgbWV0aG9kIG11bHRpcGxlIHRpbWVzIGFzIGl0IG9ubHkgdHVybnMgb25cbiAgICAgKiBwcm9wZXJ0eSBhY2Nlc3NvcnMgb25jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9lbmFibGVQcm9wZXJ0aWVzKCkge1xuICAgICAgaWYgKCF0aGlzLl9fZGF0YUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fX2RhdGFFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcykge1xuICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVJbnN0YW5jZVByb3BlcnRpZXModGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzKTtcbiAgICAgICAgICB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVhZHkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyB0aGUgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2sgd2l0aCB0aGUgY3VycmVudCBzZXQgb2ZcbiAgICAgKiBwZW5kaW5nIGNoYW5nZXMgKGFuZCBvbGQgdmFsdWVzIHJlY29yZGVkIHdoZW4gcGVuZGluZyBjaGFuZ2VzIHdlcmVcbiAgICAgKiBzZXQpLCBhbmQgcmVzZXRzIHRoZSBwZW5kaW5nIHNldCBvZiBjaGFuZ2VzLiBHZW5lcmFsbHksIHRoaXMgbWV0aG9kXG4gICAgICogc2hvdWxkIG5vdCBiZSBjYWxsZWQgaW4gdXNlciBjb2RlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2ZsdXNoUHJvcGVydGllcygpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5fX2RhdGE7XG4gICAgICBjb25zdCBjaGFuZ2VkUHJvcHMgPSB0aGlzLl9fZGF0YVBlbmRpbmc7XG4gICAgICBjb25zdCBvbGQgPSB0aGlzLl9fZGF0YU9sZDtcbiAgICAgIGlmICh0aGlzLl9zaG91bGRQcm9wZXJ0aWVzQ2hhbmdlKHByb3BzLCBjaGFuZ2VkUHJvcHMsIG9sZCkpIHtcbiAgICAgICAgdGhpcy5fX2RhdGFQZW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2RhdGFPbGQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzQ2hhbmdlZChwcm9wcywgY2hhbmdlZFByb3BzLCBvbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBpbiBgX2ZsdXNoUHJvcGVydGllc2AgdG8gZGV0ZXJtaW5lIGlmIGBfcHJvcGVydGllc0NoYW5nZWRgXG4gICAgICogc2hvdWxkIGJlIGNhbGxlZC4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gcmV0dXJucyB0cnVlIGlmXG4gICAgICogcHJvcGVydGllcyBhcmUgcGVuZGluZy4gT3ZlcnJpZGUgdG8gY3VzdG9taXplIHdoZW5cbiAgICAgKiBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBpcyBjYWxsZWQuXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBjdXJyZW50UHJvcHMgQmFnIG9mIGFsbCBjdXJyZW50IGFjY2Vzc29yIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gY2hhbmdlZFByb3BzIEJhZyBvZiBwcm9wZXJ0aWVzIGNoYW5nZWQgc2luY2UgdGhlIGxhc3RcbiAgICAgKiAgIGNhbGwgdG8gYF9wcm9wZXJ0aWVzQ2hhbmdlZGBcbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IG9sZFByb3BzIEJhZyBvZiBwcmV2aW91cyB2YWx1ZXMgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgKiAgIGluIGBjaGFuZ2VkUHJvcHNgXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBjaGFuZ2VkUHJvcHMgaXMgdHJ1dGh5XG4gICAgICovXG4gICAgX3Nob3VsZFByb3BlcnRpZXNDaGFuZ2UoY3VycmVudFByb3BzLCBjaGFuZ2VkUHJvcHMsIG9sZFByb3BzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBCb29sZWFuKGNoYW5nZWRQcm9wcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gYW55IHByb3BlcnRpZXMgd2l0aCBhY2Nlc3NvcnMgY3JlYXRlZCB2aWFcbiAgICAgKiBgX2NyZWF0ZVByb3BlcnR5QWNjZXNzb3JgIGhhdmUgYmVlbiBzZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IGN1cnJlbnRQcm9wcyBCYWcgb2YgYWxsIGN1cnJlbnQgYWNjZXNzb3IgdmFsdWVzXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBjaGFuZ2VkUHJvcHMgQmFnIG9mIHByb3BlcnRpZXMgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdFxuICAgICAqICAgY2FsbCB0byBgX3Byb3BlcnRpZXNDaGFuZ2VkYFxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gb2xkUHJvcHMgQmFnIG9mIHByZXZpb3VzIHZhbHVlcyBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAqICAgaW4gYGNoYW5nZWRQcm9wc2BcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcHJvcGVydGllc0NoYW5nZWQoY3VycmVudFByb3BzLCBjaGFuZ2VkUHJvcHMsIG9sZFByb3BzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgY2FsbGVkIHRvIGRldGVybWluZSB3aGV0aGVyIGEgcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlXG4gICAgICogY29uc2lkZXJlZCBhcyBhIGNoYW5nZSBhbmQgY2F1c2UgdGhlIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrXG4gICAgICogdG8gYmUgZW5xdWV1ZWQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5zIGB0cnVlYCBpZiBhIHN0cmljdCBlcXVhbGl0eVxuICAgICAqIGNoZWNrIGZhaWxzLiBUaGUgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGZhbHNlIGZvciBgTmFOYC5cbiAgICAgKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGUuZy4gcHJvdmlkZSBzdHJpY3RlciBjaGVja2luZyBmb3JcbiAgICAgKiBPYmplY3RzL0FycmF5cyB3aGVuIHVzaW5nIGltbXV0YWJsZSBwYXR0ZXJucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBQcm9wZXJ0eSBuYW1lXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBOZXcgcHJvcGVydHkgdmFsdWVcbiAgICAgKiBAcGFyYW0geyp9IG9sZCBQcmV2aW91cyBwcm9wZXJ0eSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHByb3BlcnR5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgY2hhbmdlXG4gICAgICogICBhbmQgZW5xdWV1ZSBhIGBfcHJvZXBydGllc0NoYW5nZWRgIGNhbGxiYWNrXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9zaG91bGRQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eSwgdmFsdWUsIG9sZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLy8gU3RyaWN0IGVxdWFsaXR5IGNoZWNrXG4gICAgICAgIChvbGQgIT09IHZhbHVlICYmXG4gICAgICAgICAgLy8gVGhpcyBlbnN1cmVzIChvbGQ9PU5hTiwgdmFsdWU9PU5hTikgYWx3YXlzIHJldHVybnMgZmFsc2VcbiAgICAgICAgICAob2xkID09PSBvbGQgfHwgdmFsdWUgPT09IHZhbHVlKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBuYXRpdmUgQ3VzdG9tIEVsZW1lbnRzIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRvXG4gICAgICogc2V0IGFuIGF0dHJpYnV0ZSB2YWx1ZSB0byBhIHByb3BlcnR5IHZpYSBgX2F0dHJpYnV0ZVRvUHJvcGVydHlgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBhdHRyaWJ1dGUgdGhhdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBvbGQgT2xkIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWUgTmV3IGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gbmFtZXNwYWNlIEF0dHJpYnV0ZSBuYW1lc3BhY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfSBTdXBlciBtYXkgb3IgbWF5IG5vdCBpbXBsZW1lbnQgdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUsIG5hbWVzcGFjZSkge1xuICAgICAgaWYgKG9sZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7XG4gICAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlLCBuYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyBhbiBhdHRyaWJ1dGUgdG8gaXRzIGFzc29jaWF0ZWQgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYWxscyB0aGUgYF9kZXNlcmlhbGl6ZVZhbHVlYCBtZXRob2QgdG8gY29udmVydCB0aGUgc3RyaW5nIHRvXG4gICAgICogYSB0eXBlZCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgTmFtZSBvZiBhdHRyaWJ1dGUgdG8gZGVzZXJpYWxpemUuXG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgICAqIEBwYXJhbSB7Kj19IHR5cGUgdHlwZSB0byBkZXNlcmlhbGl6ZSB0bywgZGVmYXVsdHMgdG8gdGhlIHZhbHVlXG4gICAgICogcmV0dXJuZWQgZnJvbSBgdHlwZUZvclByb3BlcnR5YFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgX2F0dHJpYnV0ZVRvUHJvcGVydHkoYXR0cmlidXRlLCB2YWx1ZSwgdHlwZSkge1xuICAgICAgaWYgKCF0aGlzLl9fc2VyaWFsaXppbmcpIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5fX2RhdGFBdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IG1hcCAmJiBtYXBbYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gdGhpcy5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSB8fFxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudHlwZUZvclByb3BlcnR5KHByb3BlcnR5KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIHByb3BlcnR5IHRvIGl0cyBhc3NvY2lhdGVkIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBzdXBwcmVzcyB7aW52YWxpZENhc3RzfSBDbG9zdXJlIGNhbid0IGZpZ3VyZSBvdXQgYHRoaXNgIGlzIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUHJvcGVydHkgbmFtZSB0byByZWZsZWN0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYXR0cmlidXRlIEF0dHJpYnV0ZSBuYW1lIHRvIHJlZmxlY3QgdG8uXG4gICAgICogQHBhcmFtIHsqPX0gdmFsdWUgUHJvcGVydHkgdmFsdWUgdG8gcmVmZWN0LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgX3Byb3BlcnR5VG9BdHRyaWJ1dGUocHJvcGVydHksIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX19zZXJpYWxpemluZyA9IHRydWU7XG4gICAgICB2YWx1ZSA9IChhcmd1bWVudHMubGVuZ3RoIDwgMykgPyB0aGlzW3Byb3BlcnR5XSA6IHZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWVUb05vZGVBdHRyaWJ1dGUoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovKHRoaXMpLCB2YWx1ZSxcbiAgICAgICAgYXR0cmlidXRlIHx8IHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHByb3BlcnR5KSk7XG4gICAgICB0aGlzLl9fc2VyaWFsaXppbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdHlwZWQgdmFsdWUgdG8gYW4gSFRNTCBhdHRyaWJ1dGUgb24gYSBub2RlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgY2FsbHMgdGhlIGBfc2VyaWFsaXplVmFsdWVgIG1ldGhvZCB0byBjb252ZXJ0IHRoZSB0eXBlZFxuICAgICAqIHZhbHVlIHRvIGEgc3RyaW5nLiAgSWYgdGhlIGBfc2VyaWFsaXplVmFsdWVgIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLFxuICAgICAqIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkICh0aGlzIGlzIHRoZSBkZWZhdWx0IGZvciBib29sZWFuXG4gICAgICogdHlwZSBgZmFsc2VgKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSBFbGVtZW50IHRvIHNldCBhdHRyaWJ1dGUgdG8uXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBzZXJpYWxpemUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSBBdHRyaWJ1dGUgbmFtZSB0byBzZXJpYWxpemUgdG8uXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBfdmFsdWVUb05vZGVBdHRyaWJ1dGUobm9kZSwgdmFsdWUsIGF0dHJpYnV0ZSkge1xuICAgICAgY29uc3Qgc3RyID0gdGhpcy5fc2VyaWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHN0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB0eXBlZCBKYXZhU2NyaXB0IHZhbHVlIHRvIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gc2V0dGluZyBKUyBwcm9wZXJ0eSB2YWx1ZXMgdG9cbiAgICAgKiBIVE1MIGF0dHJpYnV0ZXMuICBVc2VycyBtYXkgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZVxuICAgICAqIHNlcmlhbGl6YXRpb24gZm9yIGN1c3RvbSB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgUHJvcGVydHkgdmFsdWUgdG8gc2VyaWFsaXplLlxuICAgICAqIEByZXR1cm4ge3N0cmluZyB8IHVuZGVmaW5lZH0gU3RyaW5nIHNlcmlhbGl6ZWQgZnJvbSB0aGUgcHJvdmlkZWRcbiAgICAgKiBwcm9wZXJ0eSAgdmFsdWUuXG4gICAgICovXG4gICAgX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IHZhbHVlLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzdHJpbmcgdG8gYSB0eXBlZCBKYXZhU2NyaXB0IHZhbHVlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gcmVhZGluZyBIVE1MIGF0dHJpYnV0ZSB2YWx1ZXMgdG9cbiAgICAgKiBKUyBwcm9wZXJ0aWVzLiAgVXNlcnMgbWF5IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGVcbiAgICAgKiBkZXNlcmlhbGl6YXRpb24gZm9yIGN1c3RvbSBgdHlwZWBzLiBUeXBlcyBmb3IgYEJvb2xlYW5gLCBgU3RyaW5nYCxcbiAgICAgKiBhbmQgYE51bWJlcmAgY29udmVydCBhdHRyaWJ1dGVzIHRvIHRoZSBleHBlY3RlZCB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWUgVmFsdWUgdG8gZGVzZXJpYWxpemUuXG4gICAgICogQHBhcmFtIHsqPX0gdHlwZSBUeXBlIHRvIGRlc2VyaWFsaXplIHRoZSBzdHJpbmcgdG8uXG4gICAgICogQHJldHVybiB7Kn0gVHlwZWQgdmFsdWUgZGVzZXJpYWxpemVkIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZy5cbiAgICAgKi9cbiAgICBfZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICByZXR1cm4gKHZhbHVlICE9PSBudWxsKTtcbiAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFByb3BlcnRpZXNDaGFuZ2VkO1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi91dGlscy9ib290LmpzJztcblxuaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gJy4uL3V0aWxzL21peGluLmpzJztcbmltcG9ydCB7IFByb3BlcnRpZXNDaGFuZ2VkIH0gZnJvbSAnLi9wcm9wZXJ0aWVzLWNoYW5nZWQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjb3B5IG9mIGBwcm9wc2Agd2l0aCBlYWNoIHByb3BlcnR5IG5vcm1hbGl6ZWQgc3VjaCB0aGF0XG4gKiB1cGdyYWRlZCBpdCBpcyBhbiBvYmplY3Qgd2l0aCBhdCBsZWFzdCBhIHR5cGUgcHJvcGVydHkgeyB0eXBlOiBUeXBlfS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcGVydGllcyB0byBub3JtYWxpemVcbiAqIEByZXR1cm4ge09iamVjdH0gQ29weSBvZiBpbnB1dCBgcHJvcHNgIHdpdGggbm9ybWFsaXplZCBwcm9wZXJ0aWVzIHRoYXRcbiAqIGFyZSBpbiB0aGUgZm9ybSB7dHlwZTogVHlwZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnRpZXMocHJvcHMpIHtcbiAgY29uc3Qgb3V0cHV0ID0ge307XG4gIGZvciAobGV0IHAgaW4gcHJvcHMpIHtcbiAgICBjb25zdCBvID0gcHJvcHNbcF07XG4gICAgb3V0cHV0W3BdID0gKHR5cGVvZiBvID09PSAnZnVuY3Rpb24nKSA/IHt0eXBlOiBvfSA6IG87XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBNaXhpbiB0aGF0IHByb3ZpZGVzIGEgbWluaW1hbCBzdGFydGluZyBwb2ludCB0byB1c2luZyB0aGUgUHJvcGVydGllc0NoYW5nZWRcbiAqIG1peGluIGJ5IHByb3ZpZGluZyBhIG1lY2hhbmlzbSB0byBkZWNsYXJlIHByb3BlcnRpZXMgaW4gYSBzdGF0aWNcbiAqIGdldHRlciAoZS5nLiBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7IHJldHVybiB7IGZvbzogU3RyaW5nIH0gfSkuIENoYW5nZXNcbiAqIGFyZSByZXBvcnRlZCB2aWEgdGhlIGBfcHJvcGVydGllc0NoYW5nZWRgIG1ldGhvZC5cbiAqXG4gKiBUaGlzIG1peGluIHByb3ZpZGVzIG5vIHNwZWNpZmljIHN1cHBvcnQgZm9yIHJlbmRlcmluZy4gVXNlcnMgYXJlIGV4cGVjdGVkXG4gKiB0byBjcmVhdGUgYSBTaGFkb3dSb290IGFuZCBwdXQgY29udGVudCBpbnRvIGl0IGFuZCB1cGRhdGUgaXQgaW4gd2hhdGV2ZXJcbiAqIHdheSBtYWtlcyBzZW5zZS4gVGhpcyBjYW4gYmUgZG9uZSBpbiByZWFjdGlvbiB0byBwcm9wZXJ0aWVzIGNoYW5naW5nIGJ5XG4gKiBpbXBsZW1lbnRpbmcgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAuXG4gKlxuICogQG1peGluRnVuY3Rpb25cbiAqIEBwb2x5bWVyXG4gKiBAYXBwbGllc01peGluIFByb3BlcnRpZXNDaGFuZ2VkXG4gKiBAc3VtbWFyeSBNaXhpbiB0aGF0IHByb3ZpZGVzIGEgbWluaW1hbCBzdGFydGluZyBwb2ludCBmb3IgdXNpbmdcbiAqIHRoZSBQcm9wZXJ0aWVzQ2hhbmdlZCBtaXhpbiBieSBwcm92aWRpbmcgYSBkZWNsYXJhdGl2ZSBgcHJvcGVydGllc2Agb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgUHJvcGVydGllc01peGluID0gZGVkdXBpbmdNaXhpbihzdXBlckNsYXNzID0+IHtcblxuIC8qKlxuICAqIEBjb25zdHJ1Y3RvclxuICAqIEBleHRlbmRzIHtzdXBlckNsYXNzfVxuICAqIEBpbXBsZW1lbnRzIHtQb2x5bWVyX1Byb3BlcnRpZXNDaGFuZ2VkfVxuICAqL1xuIGNvbnN0IGJhc2UgPSBQcm9wZXJ0aWVzQ2hhbmdlZChzdXBlckNsYXNzKTtcblxuIC8qKlxuICAqIFJldHVybnMgdGhlIHN1cGVyIGNsYXNzIGNvbnN0cnVjdG9yIGZvciB0aGUgZ2l2ZW4gY2xhc3MsIGlmIGl0IGlzIGFuXG4gICogaW5zdGFuY2Ugb2YgdGhlIFByb3BlcnRpZXNNaXhpbi5cbiAgKlxuICAqIEBwYXJhbSB7IVByb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvciBQcm9wZXJ0aWVzTWl4aW4gY29uc3RydWN0b3JcbiAgKiBAcmV0dXJuIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gU3VwZXIgY2xhc3MgY29uc3RydWN0b3JcbiAgKi9cbiBmdW5jdGlvbiBzdXBlclByb3BlcnRpZXNDbGFzcyhjb25zdHJ1Y3Rvcikge1xuICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbnN0cnVjdG9yKTtcblxuICAgLy8gTm90ZSwgdGhlIGBQcm9wZXJ0aWVzTWl4aW5gIGNsYXNzIGJlbG93IG9ubHkgcmVmZXJzIHRvIHRoZSBjbGFzc1xuICAgLy8gZ2VuZXJhdGVkIGJ5IHRoaXMgY2FsbCB0byB0aGUgbWl4aW47IHRoZSBpbnN0YW5jZW9mIHRlc3Qgb25seSB3b3Jrc1xuICAgLy8gYmVjYXVzZSB0aGUgbWl4aW4gaXMgZGVkdXBlZCBhbmQgZ3VhcmFudGVlZCBvbmx5IHRvIGFwcGx5IG9uY2UsIGhlbmNlXG4gICAvLyBhbGwgY29uc3RydWN0b3JzIGluIGEgcHJvdG8gY2hhaW4gd2lsbCBzZWUgdGhlIHNhbWUgYFByb3BlcnRpZXNNaXhpbmBcbiAgIHJldHVybiAoc3VwZXJDdG9yLnByb3RvdHlwZSBpbnN0YW5jZW9mIFByb3BlcnRpZXNNaXhpbikgP1xuICAgICAvKiogQHR5cGUge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyAoc3VwZXJDdG9yKSA6IG51bGw7XG4gfVxuXG4gLyoqXG4gICogUmV0dXJucyBhIG1lbW9pemVkIHZlcnNpb24gb2YgdGhlIGBwcm9wZXJ0aWVzYCBvYmplY3QgZm9yIHRoZVxuICAqIGdpdmVuIGNsYXNzLiBQcm9wZXJ0aWVzIG5vdCBpbiBvYmplY3QgZm9ybWF0IGFyZSBjb252ZXJ0ZWQgdG8gYXRcbiAgKiBsZWFzdCB7dHlwZX0uXG4gICpcbiAgKiBAcGFyYW0ge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvciBQcm9wZXJ0aWVzTWl4aW4gY29uc3RydWN0b3JcbiAgKiBAcmV0dXJuIHtPYmplY3R9IE1lbW9pemVkIHByb3BlcnRpZXMgb2JqZWN0XG4gICovXG4gZnVuY3Rpb24gb3duUHJvcGVydGllcyhjb25zdHJ1Y3Rvcikge1xuICAgaWYgKCFjb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdfX293blByb3BlcnRpZXMnLCBjb25zdHJ1Y3RvcikpKSB7XG4gICAgIGxldCBwcm9wcyA9IG51bGw7XG5cbiAgICAgaWYgKGNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCBjb25zdHJ1Y3RvcikpICYmIGNvbnN0cnVjdG9yLnByb3BlcnRpZXMpIHtcbiAgICAgICBwcm9wcyA9IG5vcm1hbGl6ZVByb3BlcnRpZXMoY29uc3RydWN0b3IucHJvcGVydGllcyk7XG4gICAgIH1cblxuICAgICBjb25zdHJ1Y3Rvci5fX293blByb3BlcnRpZXMgPSBwcm9wcztcbiAgIH1cbiAgIHJldHVybiBjb25zdHJ1Y3Rvci5fX293blByb3BlcnRpZXM7XG4gfVxuXG4gLyoqXG4gICogQHBvbHltZXJcbiAgKiBAbWl4aW5DbGFzc1xuICAqIEBleHRlbmRzIHtiYXNlfVxuICAqIEBpbXBsZW1lbnRzIHtQb2x5bWVyX1Byb3BlcnRpZXNNaXhpbn1cbiAgKiBAdW5yZXN0cmljdGVkXG4gICovXG4gY2xhc3MgUHJvcGVydGllc01peGluIGV4dGVuZHMgYmFzZSB7XG5cbiAgIC8qKlxuICAgICogSW1wbGVtZW50cyBzdGFuZGFyZCBjdXN0b20gZWxlbWVudHMgZ2V0dGVyIHRvIG9ic2VydmVzIHRoZSBhdHRyaWJ1dGVzXG4gICAgKiBsaXN0ZWQgaW4gYHByb3BlcnRpZXNgLlxuICAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc30gSW50ZXJmYWNlcyBpbiBjbG9zdXJlIGRvIG5vdCBpbmhlcml0IHN0YXRpY3MsIGJ1dCBjbGFzc2VzIGRvXG4gICAgKi9cbiAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICBjb25zdCBwcm9wcyA9IHRoaXMuX3Byb3BlcnRpZXM7XG4gICAgIHJldHVybiBwcm9wcyA/IE9iamVjdC5rZXlzKHByb3BzKS5tYXAocCA9PiB0aGlzLmF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwKSkgOiBbXTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBGaW5hbGl6ZXMgYW4gZWxlbWVudCBkZWZpbml0aW9uLCBpbmNsdWRpbmcgZW5zdXJpbmcgYW55IHN1cGVyIGNsYXNzZXNcbiAgICAqIGFyZSBhbHNvIGZpbmFsaXplZC4gVGhpcyBpbmNsdWRlcyBlbnN1cmluZyBwcm9wZXJ0eVxuICAgICogYWNjZXNzb3JzIGV4aXN0IG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAqIGBfZmluYWxpemVDbGFzc2AgdG8gZmluYWxpemUgZWFjaCBjb25zdHJ1Y3RvciBpbiB0aGUgcHJvdG90eXBlIGNoYWluLlxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX19maW5hbGl6ZWQnLCB0aGlzKSkpIHtcbiAgICAgICBjb25zdCBzdXBlckN0b3IgPSBzdXBlclByb3BlcnRpZXNDbGFzcygvKiogQHR5cGUge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSk7XG4gICAgICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgICAgfVxuICAgICAgIHRoaXMuX19maW5hbGl6ZWQgPSB0cnVlO1xuICAgICAgIHRoaXMuX2ZpbmFsaXplQ2xhc3MoKTtcbiAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIEZpbmFsaXplIGFuIGVsZW1lbnQgY2xhc3MuIFRoaXMgaW5jbHVkZXMgZW5zdXJpbmcgcHJvcGVydHlcbiAgICAqIGFjY2Vzc29ycyBleGlzdCBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieVxuICAgICogYGZpbmFsaXplYCBhbmQgZmluYWxpemVzIHRoZSBjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICAqXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgIHN0YXRpYyBfZmluYWxpemVDbGFzcygpIHtcbiAgICAgY29uc3QgcHJvcHMgPSBvd25Qcm9wZXJ0aWVzKC8qKiBAdHlwZSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9ICovKHRoaXMpKTtcbiAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0aWVzKHByb3BzKTtcbiAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIFJldHVybnMgYSBtZW1vaXplZCB2ZXJzaW9uIG9mIGFsbCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgdGhvc2UgaW5oZXJpdGVkXG4gICAgKiBmcm9tIHN1cGVyIGNsYXNzZXMuIFByb3BlcnRpZXMgbm90IGluIG9iamVjdCBmb3JtYXQgYXJlIGNvbnZlcnRlZCB0b1xuICAgICogYXQgbGVhc3Qge3R5cGV9LlxuICAgICpcbiAgICAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBmb3IgdGhpcyBjbGFzc1xuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICBzdGF0aWMgZ2V0IF9wcm9wZXJ0aWVzKCkge1xuICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoXG4gICAgICAgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX19wcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgY29uc3Qgc3VwZXJDdG9yID0gc3VwZXJQcm9wZXJ0aWVzQ2xhc3MoLyoqIEB0eXBlIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gKi8odGhpcykpO1xuICAgICAgIHRoaXMuX19wcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgIHN1cGVyQ3RvciAmJiBzdXBlckN0b3IuX3Byb3BlcnRpZXMsXG4gICAgICAgICBvd25Qcm9wZXJ0aWVzKC8qKiBAdHlwZSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9ICovKHRoaXMpKSk7XG4gICAgIH1cbiAgICAgcmV0dXJuIHRoaXMuX19wcm9wZXJ0aWVzO1xuICAgfVxuXG4gICAvKipcbiAgICAqIE92ZXJyaWRlcyBgUHJvcGVydGllc0NoYW5nZWRgIG1ldGhvZCB0byByZXR1cm4gdHlwZSBzcGVjaWZpZWQgaW4gdGhlXG4gICAgKiBzdGF0aWMgYHByb3BlcnRpZXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBwcm9wZXJ0eVxuICAgICogQHJldHVybiB7Kn0gVHlwZSB0byB3aGljaCB0byBkZXNlcmlhbGl6ZSBhdHRyaWJ1dGVcbiAgICAqXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgIHN0YXRpYyB0eXBlRm9yUHJvcGVydHkobmFtZSkge1xuICAgICBjb25zdCBpbmZvID0gdGhpcy5fcHJvcGVydGllc1tuYW1lXTtcbiAgICAgcmV0dXJuIGluZm8gJiYgaW5mby50eXBlO1xuICAgfVxuXG4gICAvKipcbiAgICAqIE92ZXJyaWRlcyBgUHJvcGVydGllc0NoYW5nZWRgIG1ldGhvZCBhbmQgYWRkcyBhIGNhbGwgdG9cbiAgICAqIGBmaW5hbGl6ZWAgd2hpY2ggbGF6aWx5IGNvbmZpZ3VyZXMgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSBhY2Nlc3NvcnMuXG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgIF9pbml0aWFsaXplUHJvcGVydGllcygpIHtcbiAgICAgdGhpcy5jb25zdHJ1Y3Rvci5maW5hbGl6ZSgpO1xuICAgICBzdXBlci5faW5pdGlhbGl6ZVByb3BlcnRpZXMoKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBhZGRlZCB0byBhIGRvY3VtZW50LlxuICAgICogQ2FsbHMgYF9lbmFibGVQcm9wZXJ0aWVzYCB0byB0dXJuIG9uIHByb3BlcnR5IHN5c3RlbSBmcm9tXG4gICAgKiBgUHJvcGVydGllc0NoYW5nZWRgLlxuICAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc30gU3VwZXIgbWF5IG9yIG1heSBub3QgaW1wbGVtZW50IHRoZSBjYWxsYmFja1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgIH1cbiAgICAgdGhpcy5fZW5hYmxlUHJvcGVydGllcygpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSBhIGRvY3VtZW50XG4gICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfSBTdXBlciBtYXkgb3IgbWF5IG5vdCBpbXBsZW1lbnQgdGhlIGNhbGxiYWNrXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgaWYgKHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgfVxuICAgfVxuXG4gfVxuXG4gcmV0dXJuIFByb3BlcnRpZXNNaXhpbjtcblxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIG51bWJlciBvZiBzdHJhdGVnaWVzIGZvciBlbnF1ZXVpbmcgYXN5bmNocm9ub3VzXG4gKiB0YXNrcy4gRWFjaCBzdWItbW9kdWxlIHByb3ZpZGVzIGEgc3RhbmRhcmQgYHJ1bihmbilgIGludGVyZmFjZSB0aGF0IHJldHVybnMgYVxuICogaGFuZGxlLCBhbmQgYSBgY2FuY2VsKGhhbmRsZSlgIGludGVyZmFjZSBmb3IgY2FuY2VsaW5nIGFzeW5jIHRhc2tzIGJlZm9yZVxuICogdGhleSBydW4uXG4gKlxuICogQHN1bW1hcnkgTW9kdWxlIHRoYXQgcHJvdmlkZXMgYSBudW1iZXIgb2Ygc3RyYXRlZ2llcyBmb3IgZW5xdWV1aW5nXG4gKiBhc3luY2hyb25vdXMgdGFza3MuXG4gKi9cblxuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vLyBNaWNyb3Rhc2sgaW1wbGVtZW50ZWQgdXNpbmcgTXV0YXRpb24gT2JzZXJ2ZXJcbmxldCBtaWNyb3Rhc2tDdXJySGFuZGxlID0gMDtcbmxldCBtaWNyb3Rhc2tMYXN0SGFuZGxlID0gMDtcbmxldCBtaWNyb3Rhc2tDYWxsYmFja3MgPSBbXTtcbmxldCBtaWNyb3Rhc2tOb2RlQ29udGVudCA9IDA7XG5sZXQgbWljcm90YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbm5ldyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcihtaWNyb3Rhc2tGbHVzaCkub2JzZXJ2ZShtaWNyb3Rhc2tOb2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuXG5mdW5jdGlvbiBtaWNyb3Rhc2tGbHVzaCgpIHtcbiAgY29uc3QgbGVuID0gbWljcm90YXNrQ2FsbGJhY2tzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGxldCBjYiA9IG1pY3JvdGFza0NhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWljcm90YXNrQ2FsbGJhY2tzLnNwbGljZSgwLCBsZW4pO1xuICBtaWNyb3Rhc2tMYXN0SGFuZGxlICs9IGxlbjtcbn1cblxuLyoqXG4gKiBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHNldFRpbWVvdXRgLlxuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBzdW1tYXJ5IEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgc2V0VGltZW91dGAuXG4gKi9cbmNvbnN0IHRpbWVPdXQgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3ViLW1vZHVsZSB3aXRoIHRoZSBhc3luYyBpbnRlcmZhY2UgcHJvdmlkaW5nIHRoZSBwcm92aWRlZFxuICAgKiBkZWxheS5cbiAgICpcbiAgICogQG1lbWJlcm9mIHRpbWVPdXRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBkZWxheSBUaW1lIHRvIHdhaXQgYmVmb3JlIGNhbGxpbmcgY2FsbGJhY2tzIGluIG1zXG4gICAqIEByZXR1cm4geyFBc3luY0ludGVyZmFjZX0gQW4gYXN5bmMgdGltZW91dCBpbnRlcmZhY2VcbiAgICovXG4gIGFmdGVyKGRlbGF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJ1bihmbikgeyByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZm4sIGRlbGF5KTsgfSxcbiAgICAgIGNhbmNlbChoYW5kbGUpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIGZ1bmN0aW9uIGNhbGxlZCBpbiB0aGUgbmV4dCB0YXNrLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgdGltZU91dFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgdG8gcnVuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGVsYXkgRGVsYXkgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFuZGxlIHVzZWQgZm9yIGNhbmNlbGluZyB0YXNrXG4gICAqL1xuICBydW4oZm4sIGRlbGF5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gIH0sXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgcHJldmlvdXNseSBlbnF1ZXVlZCBgdGltZU91dGAgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiB0aW1lT3V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGUgSGFuZGxlIHJldHVybmVkIGZyb20gYHJ1bmAgb2YgY2FsbGJhY2sgdG8gY2FuY2VsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjYW5jZWwoaGFuZGxlKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dChoYW5kbGUpO1xuICB9XG59O1xuZXhwb3J0IHt0aW1lT3V0fTtcblxuLyoqXG4gKiBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAuXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHN1bW1hcnkgQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgLlxuICovXG5jb25zdCBhbmltYXRpb25GcmFtZSA9IHtcbiAgLyoqXG4gICAqIEVucXVldWVzIGEgZnVuY3Rpb24gY2FsbGVkIGF0IGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRpbWluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIGFuaW1hdGlvbkZyYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24obnVtYmVyKTp2b2lkfSBmbiBDYWxsYmFjayB0byBydW5cbiAgICogQHJldHVybiB7bnVtYmVyfSBIYW5kbGUgdXNlZCBmb3IgY2FuY2VsaW5nIHRhc2tcbiAgICovXG4gIHJ1bihmbikge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgfSxcbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IGVucXVldWVkIGBhbmltYXRpb25GcmFtZWAgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiBhbmltYXRpb25GcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlIEhhbmRsZSByZXR1cm5lZCBmcm9tIGBydW5gIG9mIGNhbGxiYWNrIHRvIGNhbmNlbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2FuY2VsKGhhbmRsZSkge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICB9XG59O1xuZXhwb3J0IHthbmltYXRpb25GcmFtZX07XG5cbi8qKlxuICogQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGByZXF1ZXN0SWRsZUNhbGxiYWNrYC4gIEZhbGxzIGJhY2sgdG9cbiAqIGBzZXRUaW1lb3V0YCBvbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGByZXF1ZXN0SWRsZUNhbGxiYWNrYC5cbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAc3VtbWFyeSBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHJlcXVlc3RJZGxlQ2FsbGJhY2tgLlxuICovXG5jb25zdCBpZGxlUGVyaW9kID0ge1xuICAvKipcbiAgICogRW5xdWV1ZXMgYSBmdW5jdGlvbiBjYWxsZWQgYXQgYHJlcXVlc3RJZGxlQ2FsbGJhY2tgIHRpbWluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIGlkbGVQZXJpb2RcbiAgICogQHBhcmFtIHtmdW5jdGlvbighSWRsZURlYWRsaW5lKTp2b2lkfSBmbiBDYWxsYmFjayB0byBydW5cbiAgICogQHJldHVybiB7bnVtYmVyfSBIYW5kbGUgdXNlZCBmb3IgY2FuY2VsaW5nIHRhc2tcbiAgICovXG4gIHJ1bihmbikge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayA/XG4gICAgICB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhmbikgOlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZm4sIDE2KTtcbiAgfSxcbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IGVucXVldWVkIGBpZGxlUGVyaW9kYCBjYWxsYmFjay5cbiAgICpcbiAgICogQG1lbWJlcm9mIGlkbGVQZXJpb2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZSBIYW5kbGUgcmV0dXJuZWQgZnJvbSBgcnVuYCBvZiBjYWxsYmFjayB0byBjYW5jZWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNhbmNlbChoYW5kbGUpIHtcbiAgICB3aW5kb3cuY2FuY2VsSWRsZUNhbGxiYWNrID9cbiAgICAgIHdpbmRvdy5jYW5jZWxJZGxlQ2FsbGJhY2soaGFuZGxlKSA6XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gIH1cbn07XG5leHBvcnQge2lkbGVQZXJpb2R9O1xuXG4vKipcbiAqIEFzeW5jIGludGVyZmFjZSBmb3IgZW5xdWV1aW5nIGNhbGxiYWNrcyB0aGF0IHJ1biBhdCBtaWNyb3Rhc2sgdGltaW5nLlxuICpcbiAqIE5vdGUgdGhhdCBtaWNyb3Rhc2sgdGltaW5nIGlzIGFjaGlldmVkIHZpYSBhIHNpbmdsZSBgTXV0YXRpb25PYnNlcnZlcmAsXG4gKiBhbmQgdGh1cyBjYWxsYmFja3MgZW5xdWV1ZWQgd2l0aCB0aGlzIEFQSSB3aWxsIGFsbCBydW4gaW4gYSBzaW5nbGVcbiAqIGJhdGNoLCBhbmQgbm90IGludGVybGVhdmVkIHdpdGggb3RoZXIgbWljcm90YXNrcyBzdWNoIGFzIHByb21pc2VzLlxuICogUHJvbWlzZXMgYXJlIGF2b2lkZWQgYXMgYW4gaW1wbGVtZW50YXRpb24gY2hvaWNlIGZvciB0aGUgdGltZSBiZWluZ1xuICogZHVlIHRvIFNhZmFyaSBidWdzIHRoYXQgY2F1c2UgUHJvbWlzZXMgdG8gbGFjayBtaWNyb3Rhc2sgZ3VhcmFudGVlcy5cbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAc3VtbWFyeSBBc3luYyBpbnRlcmZhY2UgZm9yIGVucXVldWluZyBjYWxsYmFja3MgdGhhdCBydW4gYXQgbWljcm90YXNrXG4gKiAgIHRpbWluZy5cbiAqL1xuY29uc3QgbWljcm9UYXNrID0ge1xuXG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIGZ1bmN0aW9uIGNhbGxlZCBhdCBtaWNyb3Rhc2sgdGltaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbWljcm9UYXNrXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9uPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gcnVuXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFuZGxlIHVzZWQgZm9yIGNhbmNlbGluZyB0YXNrXG4gICAqL1xuICBydW4oY2FsbGJhY2spIHtcbiAgICBtaWNyb3Rhc2tOb2RlLnRleHRDb250ZW50ID0gbWljcm90YXNrTm9kZUNvbnRlbnQrKztcbiAgICBtaWNyb3Rhc2tDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIG1pY3JvdGFza0N1cnJIYW5kbGUrKztcbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgZW5xdWV1ZWQgYG1pY3JvVGFza2AgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtaWNyb1Rhc2tcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZSBIYW5kbGUgcmV0dXJuZWQgZnJvbSBgcnVuYCBvZiBjYWxsYmFjayB0byBjYW5jZWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNhbmNlbChoYW5kbGUpIHtcbiAgICBjb25zdCBpZHggPSBoYW5kbGUgLSBtaWNyb3Rhc2tMYXN0SGFuZGxlO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgaWYgKCFtaWNyb3Rhc2tDYWxsYmFja3NbaWR4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXN5bmMgaGFuZGxlOiAnICsgaGFuZGxlKTtcbiAgICAgIH1cbiAgICAgIG1pY3JvdGFza0NhbGxiYWNrc1tpZHhdID0gbnVsbDtcbiAgICB9XG4gIH1cblxufTtcbmV4cG9ydCB7bWljcm9UYXNrfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbmNvbnN0IGNhc2VNYXAgPSB7fTtcbmNvbnN0IERBU0hfVE9fQ0FNRUwgPSAvLVthLXpdL2c7XG5jb25zdCBDQU1FTF9UT19EQVNIID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBNb2R1bGUgd2l0aCB1dGlsaXRpZXMgZm9yIGNvbnZlcnRpbmcgYmV0d2VlbiBcImRhc2gtY2FzZVwiIGFuZCBcImNhbWVsQ2FzZVwiXG4gKiBpZGVudGlmaWVycy5cbiAqXG4gKiBAc3VtbWFyeSBNb2R1bGUgdGhhdCBwcm92aWRlcyB1dGlsaXRpZXMgZm9yIGNvbnZlcnRpbmcgYmV0d2VlbiBcImRhc2gtY2FzZVwiXG4gKiAgIGFuZCBcImNhbWVsQ2FzZVwiLlxuICovXG5gVE9ETyhtb2R1bGl6ZXIpOiBBIG5hbWVzcGFjZSBuYW1lZCBQb2x5bWVyLkNhc2VNYXAgd2FzXG5kZWNsYXJlZCBoZXJlLiBUaGUgc3Vycm91bmRpbmcgY29tbWVudHMgc2hvdWxkIGJlIHJldmlld2VkLFxuYW5kIHRoaXMgc3RyaW5nIGNhbiB0aGVuIGJlIGRlbGV0ZWRgO1xuXG4vKipcbiAqIENvbnZlcnRzIFwiZGFzaC1jYXNlXCIgaWRlbnRpZmllciAoZS5nLiBgZm9vLWJhci1iYXpgKSB0byBcImNhbWVsQ2FzZVwiXG4gKiAoZS5nLiBgZm9vQmFyQmF6YCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhc2ggRGFzaC1jYXNlIGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gQ2FtZWwtY2FzZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgaWRlbnRpZmllclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWxDYXNlKGRhc2gpIHtcbiAgcmV0dXJuIGNhc2VNYXBbZGFzaF0gfHwgKFxuICAgIGNhc2VNYXBbZGFzaF0gPSBkYXNoLmluZGV4T2YoJy0nKSA8IDAgPyBkYXNoIDogZGFzaC5yZXBsYWNlKERBU0hfVE9fQ0FNRUwsXG4gICAgICAobSkgPT4gbVsxXS50b1VwcGVyQ2FzZSgpXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIFwiY2FtZWxDYXNlXCIgaWRlbnRpZmllciAoZS5nLiBgZm9vQmFyQmF6YCkgdG8gXCJkYXNoLWNhc2VcIlxuICogKGUuZy4gYGZvby1iYXItYmF6YCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNhbWVsIENhbWVsLWNhc2UgaWRlbnRpZmllclxuICogQHJldHVybiB7c3RyaW5nfSBEYXNoLWNhc2UgcmVwcmVzZW50YXRpb24gb2YgdGhlIGlkZW50aWZpZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoQ2FzZShjYW1lbCkge1xuICByZXR1cm4gY2FzZU1hcFtjYW1lbF0gfHwgKFxuICAgIGNhc2VNYXBbY2FtZWxdID0gY2FtZWwucmVwbGFjZShDQU1FTF9UT19EQVNILCAnLSQxJykudG9Mb3dlckNhc2UoKVxuICApO1xufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLy8gdW5pcXVlIGdsb2JhbCBpZCBmb3IgZGVkdXBpbmcgbWl4aW5zLlxubGV0IGRlZHVwZUlkID0gMDtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gTWl4aW5GdW5jdGlvbigpe31cbi8qKiBAdHlwZSB7KFdlYWtNYXAgfCB1bmRlZmluZWQpfSAqL1xuTWl4aW5GdW5jdGlvbi5wcm90b3R5cGUuX19taXhpbkFwcGxpY2F0aW9ucztcbi8qKiBAdHlwZSB7KE9iamVjdCB8IHVuZGVmaW5lZCl9ICovXG5NaXhpbkZ1bmN0aW9uLnByb3RvdHlwZS5fX21peGluU2V0O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuLyoqXG4gKiBXcmFwcyBhbiBFUzYgY2xhc3MgZXhwcmVzc2lvbiBtaXhpbiBzdWNoIHRoYXQgdGhlIG1peGluIGlzIG9ubHkgYXBwbGllZFxuICogaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gYXBwbGllZCBpdHMgYmFzZSBhcmd1bWVudC4gQWxzbyBtZW1vaXplcyBtaXhpblxuICogYXBwbGljYXRpb25zLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IG1peGluIEVTNiBjbGFzcyBleHByZXNzaW9uIG1peGluIHRvIHdyYXBcbiAqIEByZXR1cm4ge1R9XG4gKiBAc3VwcHJlc3Mge2ludmFsaWRDYXN0c31cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZHVwaW5nTWl4aW4gPSBmdW5jdGlvbihtaXhpbikge1xuICBsZXQgbWl4aW5BcHBsaWNhdGlvbnMgPSAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhtaXhpbikuX19taXhpbkFwcGxpY2F0aW9ucztcbiAgaWYgKCFtaXhpbkFwcGxpY2F0aW9ucykge1xuICAgIG1peGluQXBwbGljYXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhtaXhpbikuX19taXhpbkFwcGxpY2F0aW9ucyA9IG1peGluQXBwbGljYXRpb25zO1xuICB9XG4gIC8vIG1haW50YWluIGEgdW5pcXVlIGlkIGZvciBlYWNoIG1peGluXG4gIGxldCBtaXhpbkRlZHVwZUlkID0gZGVkdXBlSWQrKztcbiAgZnVuY3Rpb24gZGVkdXBpbmdNaXhpbihiYXNlKSB7XG4gICAgbGV0IGJhc2VTZXQgPSAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhiYXNlKS5fX21peGluU2V0O1xuICAgIGlmIChiYXNlU2V0ICYmIGJhc2VTZXRbbWl4aW5EZWR1cGVJZF0pIHtcbiAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbiAgICBsZXQgbWFwID0gbWl4aW5BcHBsaWNhdGlvbnM7XG4gICAgbGV0IGV4dGVuZGVkID0gbWFwLmdldChiYXNlKTtcbiAgICBpZiAoIWV4dGVuZGVkKSB7XG4gICAgICBleHRlbmRlZCA9IC8qKiBAdHlwZSB7IUZ1bmN0aW9ufSAqLyhtaXhpbikoYmFzZSk7XG4gICAgICBtYXAuc2V0KGJhc2UsIGV4dGVuZGVkKTtcbiAgICB9XG4gICAgLy8gY29weSBpbmhlcml0ZWQgbWl4aW4gc2V0IGZyb20gdGhlIGV4dGVuZGVkIGNsYXNzLCBvciB0aGUgYmFzZSBjbGFzc1xuICAgIC8vIE5PVEU6IHdlIGF2b2lkIHVzZSBvZiBTZXQgaGVyZSBiZWNhdXNlIHNvbWUgYnJvd3NlciAoSUUxMSlcbiAgICAvLyBjYW5ub3QgZXh0ZW5kIGEgYmFzZSBTZXQgdmlhIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICBsZXQgbWl4aW5TZXQgPSBPYmplY3QuY3JlYXRlKC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKGV4dGVuZGVkKS5fX21peGluU2V0IHx8IGJhc2VTZXQgfHwgbnVsbCk7XG4gICAgbWl4aW5TZXRbbWl4aW5EZWR1cGVJZF0gPSB0cnVlO1xuICAgIC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKGV4dGVuZGVkKS5fX21peGluU2V0ID0gbWl4aW5TZXQ7XG4gICAgcmV0dXJuIGV4dGVuZGVkO1xuICB9XG5cbiAgcmV0dXJuIC8qKiBAdHlwZSB7VH0gKi8gKGRlZHVwaW5nTWl4aW4pO1xufTtcbi8qIGVzbGludC1lbmFibGUgdmFsaWQtanNkb2MgKi9cbiIsInJlcXVpcmUoXCIhIUI6XFxcXEdJVFxcXFxoYXNzaW8tY3VzdG9tLWNhcmRzXFxcXG5vZGVfbW9kdWxlc1xcXFxzY3JpcHQtbG9hZGVyXFxcXGFkZFNjcmlwdC5qc1wiKShyZXF1aXJlKFwiISFCOlxcXFxHSVRcXFxcaGFzc2lvLWN1c3RvbS1jYXJkc1xcXFxub2RlX21vZHVsZXNcXFxccmF3LWxvYWRlclxcXFxpbmRleC5qcyFCOlxcXFxHSVRcXFxcaGFzc2lvLWN1c3RvbS1jYXJkc1xcXFxub2RlX21vZHVsZXNcXFxcY2FudmFzLWdhdWdlc1xcXFxnYXVnZS5taW4uanNcIikpIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgQXR0cmlidXRlUGFydCwgZGVmYXVsdFBhcnRDYWxsYmFjaywgbm9DaGFuZ2UsIGdldFZhbHVlLCBTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5leHBvcnQgeyByZW5kZXIgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGEgbGl0LWV4dGVuZGVkIEhUTUwgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBleHRlbmRlZFBhcnRDYWxsYmFjayk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGEgbGl0LWV4dGVuZGVkIFNWRyB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBleHRlbmRlZFBhcnRDYWxsYmFjayk7XG4vKipcbiAqIEEgUGFydENhbGxiYWNrIHdoaWNoIGFsbG93cyB0ZW1wbGF0ZXMgdG8gc2V0IHByb3BlcnRpZXMgYW5kIGRlY2xhcmF0aXZlXG4gKiBldmVudCBoYW5kbGVycy5cbiAqXG4gKiBQcm9wZXJ0aWVzIGFyZSBzZXQgYnkgZGVmYXVsdCwgaW5zdGVhZCBvZiBhdHRyaWJ1dGVzLiBBdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIGxpdC1odG1sIHRlbXBsYXRlcyBwcmVzZXJ2ZSBjYXNlLCBzbyBwcm9wZXJ0aWVzIGFyZSBjYXNlIHNlbnNpdGl2ZS4gSWYgYW5cbiAqIGV4cHJlc3Npb24gdGFrZXMgdXAgYW4gZW50aXJlIGF0dHJpYnV0ZSB2YWx1ZSwgdGhlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvXG4gKiB0aGF0IHZhbHVlLiBJZiBhbiBleHByZXNzaW9uIGlzIGludGVycG9sYXRlZCB3aXRoIGEgc3RyaW5nIG9yIG90aGVyXG4gKiBleHByZXNzaW9ucyB0aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gdGhlIHN0cmluZyByZXN1bHQgb2YgdGhlXG4gKiBpbnRlcnBvbGF0aW9uLlxuICpcbiAqIFRvIHNldCBhbiBhdHRyaWJ1dGUgaW5zdGVhZCBvZiBhIHByb3BlcnR5LCBhcHBlbmQgYSBgJGAgc3VmZml4IHRvIHRoZVxuICogYXR0cmlidXRlIG5hbWUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaHRtbGA8YnV0dG9uIGNsYXNzJD1cInByaW1hcnlcIj5CdXkgTm93PC9idXR0b24+YFxuICpcbiAqIFRvIHNldCBhbiBldmVudCBoYW5kbGVyLCBwcmVmaXggdGhlIGF0dHJpYnV0ZSBuYW1lIHdpdGggYG9uLWA6XG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaHRtbGA8YnV0dG9uIG9uLWNsaWNrPSR7KGUpPT4gdGhpcy5vbkNsaWNrSGFuZGxlcihlKX0+QnV5IE5vdzwvYnV0dG9uPmBcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRlZFBhcnRDYWxsYmFjayA9IChpbnN0YW5jZSwgdGVtcGxhdGVQYXJ0LCBub2RlKSA9PiB7XG4gICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnJhd05hbWUuc3Vic3RyKDAsIDMpID09PSAnb24tJykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gdGVtcGxhdGVQYXJ0LnJhd05hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV2ZW50UGFydChpbnN0YW5jZSwgbm9kZSwgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0Q2hhciA9IHRlbXBsYXRlUGFydC5uYW1lLnN1YnN0cih0ZW1wbGF0ZVBhcnQubmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxhc3RDaGFyID09PSAnJCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZVBhcnQubmFtZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoYXIgPT09ICc/Jykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRlbXBsYXRlUGFydC5uYW1lLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydChpbnN0YW5jZSwgbm9kZSwgdGVtcGxhdGVQYXJ0LnJhd05hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRQYXJ0Q2FsbGJhY2soaW5zdGFuY2UsIHRlbXBsYXRlUGFydCwgbm9kZSk7XG59O1xuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIHNldFZhbHVlKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBpZiAocy5sZW5ndGggPT09IDIgJiYgc1swXSA9PT0gJycgJiYgc1sxXSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXhdKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgc2V0VmFsdWUodmFsdWVzLCBzdGFydEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAyICYmIHNbMF0gPT09ICcnICYmIHNbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICAvLyBBbiBleHByZXNzaW9uIHRoYXQgb2NjdXBpZXMgdGhlIHdob2xlIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGxlYXZlXG4gICAgICAgICAgICAvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBlbXB0eSBzdHJpbmdzLlxuICAgICAgICAgICAgdmFsdWUgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZXNbc3RhcnRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGlvbiwgc28gaW50ZXJwb2xhdGVcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5faW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlLCBlbGVtZW50LCBldmVudE5hbWUpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lciA9PT0gdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2xpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2xpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lci5jYWxsKHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9saXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWV4dGVuZGVkLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzVGVtcGxhdGVQYXJ0QWN0aXZlIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuY29uc3Qgd2Fsa2VyTm9kZUZpbHRlciA9IE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfFxuICAgIE5vZGVGaWx0ZXIuU0hPV19URVhUO1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBsaXN0IG9mIG5vZGVzIGZyb20gYSBUZW1wbGF0ZSBzYWZlbHkuIEluIGFkZGl0aW9uIHRvIHJlbW92aW5nXG4gKiBub2RlcyBmcm9tIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaFxuICogdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICpcbiAqIEFzIHRoZSB0ZW1wbGF0ZSBpcyB3YWxrZWQgdGhlIHJlbW92YWwgc3RhdGUgaXMgdHJhY2tlZCBhbmRcbiAqIHBhcnQgaW5kaWNlcyBhcmUgYWRqdXN0ZWQgYXMgbmVlZGVkLlxuICpcbiAqIGRpdlxuICogICBkaXYjMSAocmVtb3ZlKSA8LS0gc3RhcnQgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgZGl2IzEpXG4gKiAgICAgZGl2XG4gKiAgICAgICBkaXYjMiAocmVtb3ZlKSAgPC0tIGNvbnRpbnVlIHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIHN0aWxsIGRpdiMxKVxuICogICAgICAgICBkaXZcbiAqIGRpdiA8LS0gc3RvcCByZW1vdmluZyBzaW5jZSBwcmV2aW91cyBzaWJsaW5nIGlzIHRoZSByZW1vdmluZyBub2RlIChkaXYjMSwgcmVtb3ZlZCA0IG5vZGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIG5vZGVzVG9SZW1vdmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9LCBwYXJ0cyB9ID0gdGVtcGxhdGU7XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IHBhcnQgPSBwYXJ0c1swXTtcbiAgICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gICAgbGV0IHJlbW92ZUNvdW50ID0gMDtcbiAgICBjb25zdCBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZSA9IFtdO1xuICAgIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG4gICAgICAgIC8vIEVuZCByZW1vdmFsIGlmIHN0ZXBwZWQgcGFzdCB0aGUgcmVtb3Zpbmcgbm9kZVxuICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGN1cnJlbnRSZW1vdmluZ05vZGUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgbm9kZSB0byByZW1vdmUgd2FzIGZvdW5kIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICBpZiAobm9kZXNUb1JlbW92ZS5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAvLyBUcmFjayBub2RlIHdlJ3JlIHJlbW92aW5nXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAgICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgICAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICAgICAgICBwYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLmZvckVhY2goKG4pID0+IG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSk7XG59XG5jb25zdCBjb3VudE5vZGVzID0gKG5vZGUpID0+IHtcbiAgICBsZXQgY291bnQgPSAxO1xuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG59O1xuY29uc3QgbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzID0gKHBhcnRzLCBzdGFydEluZGV4ID0gLTEpID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCArIDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIGlmIChpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcbi8qKlxuICogSW5zZXJ0cyB0aGUgZ2l2ZW4gbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgb3B0aW9uYWxseSBiZWZvcmUgdGhlIGdpdmVuXG4gKiByZWZOb2RlLiBJbiBhZGRpdGlvbiB0byBpbnNlcnRpbmcgdGhlIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZVxuICogcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE5vZGVJbnRvVGVtcGxhdGUodGVtcGxhdGUsIG5vZGUsIHJlZk5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSwgcGFydHMgfSA9IHRlbXBsYXRlO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcmVmTm9kZSwgdGhlbiBwdXQgbm9kZSBhdCBlbmQgb2YgdGVtcGxhdGUuXG4gICAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gICAgaWYgKHJlZk5vZGUgPT09IG51bGwgfHwgcmVmTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gICAgbGV0IGluc2VydENvdW50ID0gMDtcbiAgICBsZXQgd2Fsa2VySW5kZXggPSAtMTtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgd2Fsa2VySW5kZXgrKztcbiAgICAgICAgY29uc3Qgd2Fsa2VyTm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgaWYgKHdhbGtlck5vZGUgPT09IHJlZk5vZGUpIHtcbiAgICAgICAgICAgIHJlZk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgICAgICAgICBpbnNlcnRDb3VudCA9IGNvdW50Tm9kZXMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEgJiYgcGFydHNbcGFydEluZGV4XS5pbmRleCA9PT0gd2Fsa2VySW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGluc2VydGVkIHRoZSBub2RlLCBzaW1wbHkgYWRqdXN0IGFsbCBzdWJzZXF1ZW50IHBhcnRzXG4gICAgICAgICAgICBpZiAoaW5zZXJ0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHNbcGFydEluZGV4XS5pbmRleCArPSBpbnNlcnRDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RpZnktdGVtcGxhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMsIFRlbXBsYXRlLCB0ZW1wbGF0ZUNhY2hlcywgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IGluc2VydE5vZGVJbnRvVGVtcGxhdGUsIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlIH0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuZXhwb3J0IHsgaHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8vIEdldCBhIGtleSB0byBsb29rdXAgaW4gYHRlbXBsYXRlQ2FjaGVzYC5cbmNvbnN0IGdldFRlbXBsYXRlQ2FjaGVLZXkgPSAodHlwZSwgc2NvcGVOYW1lKSA9PiBgJHt0eXBlfS0tJHtzY29wZU5hbWV9YDtcbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWUpID0+IChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGdldFRlbXBsYXRlQ2FjaGVLZXkocmVzdWx0LnR5cGUsIHNjb3BlTmFtZSk7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KGNhY2hlS2V5LCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbShlbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgZWxlbWVudCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5jb25zdCBURU1QTEFURV9UWVBFUyA9IFsnaHRtbCcsICdzdmcnXTtcbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMoc2NvcGVOYW1lKSB7XG4gICAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoZ2V0VGVtcGxhdGVDYWNoZUtleSh0eXBlLCBzY29wZU5hbWUpKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9IH0gPSB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIG5ldyBTZXQoQXJyYXkuZnJvbShzdHlsZXMpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuY29uc3Qgc2hhZHlSZW5kZXJTZXQgPSBuZXcgU2V0KCk7XG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gc2NvcGUgbmFtZSwgZW5zdXJlcyB0aGF0IFNoYWR5Q1NTIHN0eWxlIHNjb3BpbmcgaXMgcGVyZm9ybWVkLlxuICogVGhpcyBpcyBkb25lIGp1c3Qgb25jZSBwZXIgc2NvcGUgbmFtZSBzbyB0aGUgZnJhZ21lbnQgYW5kIHRlbXBsYXRlIGNhbm5vdFxuICogYmUgbW9kaWZpZWQuXG4gKiAoMSkgZXh0cmFjdHMgc3R5bGVzIGZyb20gdGhlIHJlbmRlcmVkIGZyYWdtZW50IGFuZCBoYW5kcyB0aGVtIHRvIFNoYWR5Q1NTXG4gKiB0byBiZSBzY29wZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudFxuICogKDIpIHJlbW92ZXMgc3R5bGUgZWxlbWVudHMgZnJvbSBhbGwgbGl0LWh0bWwgVGVtcGxhdGVzIGZvciB0aGlzIHNjb3BlIG5hbWUuXG4gKlxuICogTm90ZSwgPHN0eWxlPiBlbGVtZW50cyBjYW4gb25seSBiZSBwbGFjZWQgaW50byB0ZW1wbGF0ZXMgZm9yIHRoZVxuICogaW5pdGlhbCByZW5kZXJpbmcgb2YgdGhlIHNjb3BlLiBJZiA8c3R5bGU+IGVsZW1lbnRzIGFyZSBpbmNsdWRlZCBpbiB0ZW1wbGF0ZXNcbiAqIGR5bmFtaWNhbGx5IHJlbmRlcmVkIHRvIHRoZSBzY29wZSAoYWZ0ZXIgdGhlIGZpcnN0IHNjb3BlIHJlbmRlciksIHRoZXkgd2lsbFxuICogbm90IGJlIHNjb3BlZCBhbmQgdGhlIDxzdHlsZT4gd2lsbCBiZSBsZWZ0IGluIHRoZSB0ZW1wbGF0ZSBhbmQgcmVuZGVyZWQgb3V0cHV0LlxuICovXG5jb25zdCBlbnN1cmVTdHlsZXNTY29wZWQgPSAoZnJhZ21lbnQsIHRlbXBsYXRlLCBzY29wZU5hbWUpID0+IHtcbiAgICAvLyBvbmx5IHNjb3BlIGVsZW1lbnQgdGVtcGxhdGUgb25jZSBwZXIgc2NvcGUgbmFtZVxuICAgIGlmICghc2hhZHlSZW5kZXJTZXQuaGFzKHNjb3BlTmFtZSkpIHtcbiAgICAgICAgc2hhZHlSZW5kZXJTZXQuYWRkKHNjb3BlTmFtZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBBcnJheS5mcm9tKGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIHN0eWxlVGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVTdHlsZXMoc3R5bGVUZW1wbGF0ZSwgc2NvcGVOYW1lKTtcbiAgICAgICAgLy8gRml4IHRlbXBsYXRlczogbm90ZSB0aGUgZXhwZWN0YXRpb24gaGVyZSBpcyB0aGF0IHRoZSBnaXZlbiBgZnJhZ21lbnRgXG4gICAgICAgIC8vIGhhcyBiZWVuIGdlbmVyYXRlZCBmcm9tIHRoZSBnaXZlbiBgdGVtcGxhdGVgIHdoaWNoIGNvbnRhaW5zXG4gICAgICAgIC8vIHRoZSBzZXQgb2YgdGVtcGxhdGVzIHJlbmRlcmVkIGludG8gdGhpcyBzY29wZS5cbiAgICAgICAgLy8gSXQgaXMgb25seSBmcm9tIHRoaXMgc2V0IG9mIGluaXRpYWwgdGVtcGxhdGVzIGZyb20gd2hpY2ggc3R5bGVzXG4gICAgICAgIC8vIHdpbGwgYmUgc2NvcGVkIGFuZCByZW1vdmVkLlxuICAgICAgICByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZSk7XG4gICAgICAgIC8vIEFwcGx5U2hpbSBjYXNlXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHN0eWxlIGludG8gcmVuZGVyZWQgZnJhZ21lbnRcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5pbnNlcnRCZWZvcmUoc3R5bGUsIGZyYWdtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIC8vIEluc2VydCBpbnRvIGxpdC10ZW1wbGF0ZSAoZm9yIHN1YnNlcXVlbnQgcmVuZGVycylcbiAgICAgICAgICAgICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZS5jbG9uZU5vZGUodHJ1ZSksIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBOT1RFOiBXZSdyZSBjb3B5aW5nIGNvZGUgZnJvbSBsaXQtaHRtbCdzIGByZW5kZXJgIG1ldGhvZCBoZXJlLlxuLy8gV2UncmUgZG9pbmcgdGhpcyBleHBsaWNpdGx5IGJlY2F1c2UgdGhlIEFQSSBmb3IgcmVuZGVyaW5nIHRlbXBsYXRlcyBpcyBsaWtlbHlcbi8vIHRvIGNoYW5nZSBpbiB0aGUgbmVhciB0ZXJtLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihyZXN1bHQsIGNvbnRhaW5lciwgc2NvcGVOYW1lKSB7XG4gICAgY29uc3QgdGVtcGxhdGVGYWN0b3J5ID0gc2hhZHlUZW1wbGF0ZUZhY3Rvcnkoc2NvcGVOYW1lKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpO1xuICAgIGxldCBpbnN0YW5jZSA9IGNvbnRhaW5lci5fX3RlbXBsYXRlSW5zdGFuY2U7XG4gICAgLy8gUmVwZWF0IHJlbmRlciwganVzdCBjYWxsIHVwZGF0ZSgpXG4gICAgaWYgKGluc3RhbmNlICE9PSB1bmRlZmluZWQgJiYgaW5zdGFuY2UudGVtcGxhdGUgPT09IHRlbXBsYXRlICYmXG4gICAgICAgIGluc3RhbmNlLl9wYXJ0Q2FsbGJhY2sgPT09IHJlc3VsdC5wYXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZpcnN0IHJlbmRlciwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlSW5zdGFuY2UgYW5kIGFwcGVuZCBpdFxuICAgIGluc3RhbmNlID1cbiAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHJlc3VsdC5wYXJ0Q2FsbGJhY2ssIHRlbXBsYXRlRmFjdG9yeSk7XG4gICAgY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgIGNvbnN0IGhvc3QgPSBjb250YWluZXIgaW5zdGFuY2VvZiBTaGFkb3dSb290ID9cbiAgICAgICAgY29udGFpbmVyLmhvc3QgOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgLy8gSWYgdGhlcmUncyBhIHNoYWRvdyBob3N0LCBkbyBTaGFkeUNTUyBzY29waW5nLi4uXG4gICAgaWYgKGhvc3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LlNoYWR5Q1NTID09PSAnb2JqZWN0Jykge1xuICAgICAgICBlbnN1cmVTdHlsZXNTY29wZWQoZnJhZ21lbnQsIHRlbXBsYXRlLCBzY29wZU5hbWUpO1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KGhvc3QpO1xuICAgIH1cbiAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhZHktcmVuZGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8vIFRoZSBmaXJzdCBhcmd1bWVudCB0byBKUyB0ZW1wbGF0ZSB0YWdzIHJldGFpbiBpZGVudGl0eSBhY3Jvc3MgbXVsdGlwbGVcbi8vIGNhbGxzIHRvIGEgdGFnIGZvciB0aGUgc2FtZSBsaXRlcmFsLCBzbyB3ZSBjYW4gY2FjaGUgd29yayBkb25lIHBlciBsaXRlcmFsXG4vLyBpbiBhIE1hcC5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnKTtcbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgdmFsdWVzLCB0eXBlLCBwYXJ0Q2FsbGJhY2sgPSBkZWZhdWx0UGFydENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnBhcnRDYWxsYmFjayA9IHBhcnRDYWxsYmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgPHRlbXBsYXRlPiBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGh0bWwgPSAnJztcbiAgICAgICAgbGV0IGlzVGV4dEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGh0bWwgKz0gcztcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGEgdGV4dCBwb3NpdGlvbiBpZiB0aGUgcHJldmlvdXMgc3RyaW5nIGNsb3NlZCBpdHMgdGFncy5cbiAgICAgICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgdGFncywgdGhlbiB3ZSB1c2UgdGhlIHByZXZpb3VzIHRleHQgcG9zaXRpb25cbiAgICAgICAgICAgIC8vIHN0YXRlLlxuICAgICAgICAgICAgY29uc3QgY2xvc2luZyA9IGZpbmRUYWdDbG9zZShzKTtcbiAgICAgICAgICAgIGlzVGV4dEJpbmRpbmcgPSBjbG9zaW5nID4gLTEgPyBjbG9zaW5nIDwgcy5sZW5ndGggOiBpc1RleHRCaW5kaW5nO1xuICAgICAgICAgICAgaHRtbCArPSBpc1RleHRCaW5kaW5nID8gbm9kZU1hcmtlciA6IG1hcmtlcjtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTWwgaW4gYW4gPHN2Zz4gdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgPHN2Zz4gdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFRlbXBsYXRlRmFjdG9yeShyZXN1bHQpIHtcbiAgICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgVGVtcGxhdGUgb3IgcmV0cmVpdmUgb25lIGZyb21cbiAqICAgICBjYWNoZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihyZXN1bHQsIGNvbnRhaW5lciwgdGVtcGxhdGVGYWN0b3J5ID0gZGVmYXVsdFRlbXBsYXRlRmFjdG9yeSkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCk7XG4gICAgbGV0IGluc3RhbmNlID0gY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZTtcbiAgICAvLyBSZXBlYXQgcmVuZGVyLCBqdXN0IGNhbGwgdXBkYXRlKClcbiAgICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCAmJiBpbnN0YW5jZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUgJiZcbiAgICAgICAgaW5zdGFuY2UuX3BhcnRDYWxsYmFjayA9PT0gcmVzdWx0LnBhcnRDYWxsYmFjaykge1xuICAgICAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRmlyc3QgcmVuZGVyLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVJbnN0YW5jZSBhbmQgYXBwZW5kIGl0XG4gICAgaW5zdGFuY2UgPVxuICAgICAgICBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgcmVzdWx0LnBhcnRDYWxsYmFjaywgdGVtcGxhdGVGYWN0b3J5KTtcbiAgICBjb250YWluZXIuX190ZW1wbGF0ZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbm90IGF0dHJpYnV0ZSBwb3NpdGlvbnMsXG4gKiBpbiB0ZW1wbGF0ZS5cbiAqL1xuY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcbmNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTBcbiAqXG4gKiBcIlxcMC1cXHgxRlxceDdGLVxceDlGXCIgYXJlIFVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9IC9bIFxceDA5XFx4MGFcXHgwY1xceDBkXShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFxceDA5XFx4MGFcXHgwY1xceDBkXCInPj0vXSspWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikkLztcbi8qKlxuICogRmluZHMgdGhlIGNsb3NpbmcgaW5kZXggb2YgdGhlIGxhc3QgY2xvc2VkIEhUTUwgdGFnLlxuICogVGhpcyBoYXMgMyBwb3NzaWJsZSByZXR1cm4gdmFsdWVzOlxuICogICAtIGAtMWAsIG1lYW5pbmcgdGhlcmUgaXMgbm8gdGFnIGluIHN0ci5cbiAqICAgLSBgc3RyaW5nLmxlbmd0aGAsIG1lYW5pbmcgdGhlIGxhc3Qgb3BlbmVkIHRhZyBpcyB1bmNsb3NlZC5cbiAqICAgLSBTb21lIHBvc2l0aXZlIG51bWJlciA8IHN0ci5sZW5ndGgsIG1lYW5pbmcgdGhlIGluZGV4IG9mIHRoZSBjbG9zaW5nICc+Jy5cbiAqL1xuZnVuY3Rpb24gZmluZFRhZ0Nsb3NlKHN0cikge1xuICAgIGNvbnN0IGNsb3NlID0gc3RyLmxhc3RJbmRleE9mKCc+Jyk7XG4gICAgY29uc3Qgb3BlbiA9IHN0ci5pbmRleE9mKCc8JywgY2xvc2UgKyAxKTtcbiAgICByZXR1cm4gb3BlbiA+IC0xID8gc3RyLmxlbmd0aCA6IGNsb3NlO1xufVxuLyoqXG4gKiBBIHBsYWNlaG9sZGVyIGZvciBhIGR5bmFtaWMgZXhwcmVzc2lvbiBpbiBhbiBIVE1MIHRlbXBsYXRlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYnVpbHQtaW4gcGFydCB0eXBlczogQXR0cmlidXRlUGFydCBhbmQgTm9kZVBhcnQuIE5vZGVQYXJ0c1xuICogYWx3YXlzIHJlcHJlc2VudCBhIHNpbmdsZSBkeW5hbWljIGV4cHJlc3Npb24sIHdoaWxlIEF0dHJpYnV0ZVBhcnRzIG1heVxuICogcmVwcmVzZW50IGFzIG1hbnkgZXhwcmVzc2lvbnMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEEgVGVtcGxhdGUncyBwYXJ0cyBhcmUgbXV0YWJsZSwgc28gcGFydHMgY2FuIGJlIHJlcGxhY2VkIG9yIG1vZGlmaWVkXG4gKiAocG9zc2libHkgdG8gaW1wbGVtZW50IGRpZmZlcmVudCB0ZW1wbGF0ZSBzZW1hbnRpY3MpLiBUaGUgY29udHJhY3QgaXMgdGhhdFxuICogcGFydHMgY2FuIG9ubHkgYmUgcmVwbGFjZWQsIG5vdCByZW1vdmVkLCBhZGRlZCBvciByZW9yZGVyZWQsIGFuZCBwYXJ0cyBtdXN0XG4gKiBhbHdheXMgY29uc3VtZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgdmFsdWVzIGluIHRoZWlyIGB1cGRhdGUoKWAgbWV0aG9kLlxuICpcbiAqIFRPRE8oanVzdGluZmFnbmFuaSk6IFRoYXQgcmVxdWlyZW1lbnQgaXMgYSBsaXR0bGUgZnJhZ2lsZS4gQVxuICogVGVtcGxhdGVJbnN0YW5jZSBjb3VsZCBpbnN0ZWFkIGJlIG1vcmUgY2FyZWZ1bCBhYm91dCB3aGljaCB2YWx1ZXMgaXQgZ2l2ZXNcbiAqIHRvIFBhcnQudXBkYXRlKCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGluZGV4LCBuYW1lLCByYXdOYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5yYXdOYW1lID0gcmF3TmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZWxlbWVudC5jb250ZW50O1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBwcmV2aW91cyBub2RlLCBhY2NvdW50aW5nIGZvciByZW1vdmFsczogaWYgYSBub2RlIGlzIHJlbW92ZWRcbiAgICAgICAgLy8gaXQgd2lsbCBuZXZlciBiZSB0aGUgcHJldmlvdXNOb2RlLlxuICAgICAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgICAgICAvLyBVc2VkIHRvIHNldCBwcmV2aW91c05vZGUgYXQgdGhlIHRvcCBvZiB0aGUgbG9vcC5cbiAgICAgICAgbGV0IGN1cnJlbnROb2RlO1xuICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAvLyBQZXIgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci4gSW5cbiAgICAgICAgICAgICAgICAvLyBwYXJ0aWN1bGFyLCBFZGdlL0lFIGNhbiByZXR1cm4gdGhlbSBvdXQgb2Ygb3JkZXIsIHNvIHdlIGNhbm5vdCBhc3N1bWVcbiAgICAgICAgICAgICAgICAvLyBhIGNvcnJlc3BvbmRhbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldLnZhbHVlLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lSW5QYXJ0ID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpWzFdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbm9uLW51bGwgYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKGF0dHJpYnV0ZU5hbWVJblBhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzRm9yQXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnYXR0cmlidXRlJywgaW5kZXgsIGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGVOYW1lSW5QYXJ0LCBzdHJpbmdzRm9yQXR0cmlidXRlVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RyaW5nc0ZvckF0dHJpYnV0ZVZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChub2RlVmFsdWUuaW5kZXhPZihtYXJrZXIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBub2RlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoKHN0cmluZ3NbaV0gPT09ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHJpbmdzW2ldKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycgP1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbbGFzdEluZGV4XSksIG5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8gJiZcbiAgICAgICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyBmb2xsb3dpbmcgYXJlIHRydWU6XG4gICAgICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBiZWluZyByZW1vdmVkICh0aHVzIGl0J3Mgbm90IHRoZVxuICAgICAgICAgICAgICAgIC8vICAgIGBwcmV2aW91c05vZGVgKVxuICAgICAgICAgICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBub3QgYSBUZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IFdlIHNob3VsZCBiZSBhYmxlIHRvIHVzZSB0aGUgcHJldmlvdXNOb2RlIGhlcmVcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgbWFya2VyIG5vZGUgYW5kIHJlZHVjZSB0aGUgbnVtYmVyIG9mIGV4dHJhIG5vZGVzIHdlIGFkZCB0byBhXG4gICAgICAgICAgICAgICAgLy8gdGVtcGxhdGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckxhYnMvbGl0LWh0bWwvaXNzdWVzLzE0N1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzU2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgcHJldmlvdXNTaWJsaW5nICE9PSBwcmV2aW91c05vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcgYWRkIGEgbWFya2VyIG5vZGUuXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayBpZiB0aGUgbmV4dCBub2RlIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQsXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IG5vZGUgd2lsbCBpbmR1Y2UgYSBuZXcgbWFya2VyIGlmIHNvLlxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyksIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBwcmV2aW91c05vZGU7XG4gICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgcmVhZHkgdG8gYmUgaW5zZXJ0ZWQgaW50byBhIFBhcnQgZnJvbSBhIHVzZXItcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogSWYgdGhlIHVzZXIgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIHRoaXMgaW52b2tlcyB0aGUgZGlyZWN0aXZlIHdpdGggdGhlIGdpdmVuXG4gKiBwYXJ0LiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgaXQncyBjb252ZXJ0ZWQgdG8gdW5kZWZpbmVkIHRvIHdvcmsgYmV0dGVyXG4gKiB3aXRoIGNlcnRhaW4gRE9NIEFQSXMsIGxpa2UgdGV4dENvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZSA9IChwYXJ0LCB2YWx1ZSkgPT4ge1xuICAgIC8vIGBudWxsYCBhcyB0aGUgdmFsdWUgb2YgYSBUZXh0IG5vZGUgd2lsbCByZW5kZXIgdGhlIHN0cmluZyAnbnVsbCdcbiAgICAvLyBzbyB3ZSBjb252ZXJ0IGl0IHRvIHVuZGVmaW5lZFxuICAgIGlmIChpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZShwYXJ0KTtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbn07XG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGYpID0+IHtcbiAgICBmLl9fbGl0RGlyZWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gZjtcbn07XG5jb25zdCBpc0RpcmVjdGl2ZSA9IChvKSA9PiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBvLl9fbGl0RGlyZWN0aXZlID09PSB0cnVlO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgbm9DaGFuZ2VgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCB7IG5vQ2hhbmdlIGFzIGRpcmVjdGl2ZVZhbHVlIH07XG5jb25zdCBpc1ByaW1pdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlLCBlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy5zaXplID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlcyA9IFtdO1xuICAgIH1cbiAgICBfaW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBjb25zdCB2ID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXggKyBpXSk7XG4gICAgICAgICAgICBpZiAodiAmJiB2ICE9PSBub0NoYW5nZSAmJlxuICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHYpIHx8IHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiB2W1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byByZWN1cnNpdmVseSBjYWxsIGdldFZhbHVlIGludG8gaXRlcmFibGVzLi4uXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQgKyBzdHJpbmdzW2xdO1xuICAgIH1cbiAgICBfZXF1YWxUb1ByZXZpb3VzVmFsdWVzKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHN0YXJ0SW5kZXggKyB0aGlzLnNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWVzW2ldICE9PSB2YWx1ZXNbaV0gfHxcbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmVWYWx1ZSh2YWx1ZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAocy5sZW5ndGggPT09IDIgJiYgc1swXSA9PT0gJycgJiYgc1sxXSA9PT0gJycpIHtcbiAgICAgICAgICAgIC8vIEFuIGV4cHJlc3Npb24gdGhhdCBvY2N1cGllcyB0aGUgd2hvbGUgYXR0cmlidXRlIHZhbHVlIHdpbGwgbGVhdmVcbiAgICAgICAgICAgIC8vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGVtcHR5IHN0cmluZ3MuXG4gICAgICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHRoaXMsIHZhbHVlc1tzdGFydEluZGV4XSk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9pbnRlcnBvbGF0ZSh2YWx1ZXMsIHN0YXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgc3RhcnROb2RlLCBlbmROb2RlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgcHJpbWl0aXZlIHZhbHVlc1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGRpZG4ndCBjaGFuZ2UsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS50aGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFByb21pc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX3NldE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9zZXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiBfcHJldmlvdXNWYWx1ZSBpc1xuICAgICAgICAgICAgLy8gcHJpbWl0aXZlP1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5pbnN0YW5jZS5fZ2V0VGVtcGxhdGUodmFsdWUpO1xuICAgICAgICBsZXQgaW5zdGFuY2U7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlICYmIHRoaXMuX3ByZXZpb3VzVmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuX3ByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzLmluc3RhbmNlLl9wYXJ0Q2FsbGJhY2ssIHRoaXMuaW5zdGFuY2UuX2dldFRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGUoaW5zdGFuY2UuX2Nsb25lKCkpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH1cbiAgICBfc2V0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgX3ByZXZpb3VzVmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF9wcmV2aW91c1ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgX3ByZXZpb3VzVmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuX3ByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgIGxldCBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBjcmVhdGluZyB0aGUgZmlyc3QgaXRlbSBwYXJ0LCBpdCdzIHN0YXJ0Tm9kZSBzaG91bGQgYmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gY29udGFpbmVyJ3Mgc3RhcnROb2RlXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1TdGFydCA9IHRoaXMuc3RhcnROb2RlO1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBjcmVhdGluZyB0aGUgZmlyc3QgcGFydCwgY3JlYXRlIGEgbmV3IHNlcGFyYXRvciBtYXJrZXJcbiAgICAgICAgICAgICAgICAvLyBub2RlLCBhbmQgZml4IHVwIHRoZSBwcmV2aW91cyBwYXJ0J3MgZW5kTm9kZSB0byBwb2ludCB0byBpdFxuICAgICAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXJ0ID0gcHJldmlvdXNQYXJ0LmVuZE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydChpdGVtU3RhcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLmluc3RhbmNlLCBpdGVtU3RhcnQsIHRoaXMuZW5kTm9kZSk7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF9wcmV2aW91c1ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihsYXN0UGFydC5lbmROb2RlLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICBsYXN0UGFydC5lbmROb2RlID0gdGhpcy5lbmROb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9zZXRQcm9taXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUudGhlbigodikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyKHN0YXJ0Tm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUsIHN0YXJ0Tm9kZS5uZXh0U2libGluZywgdGhpcy5lbmROb2RlKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFBhcnRDYWxsYmFjayA9IChpbnN0YW5jZSwgdGVtcGxhdGVQYXJ0LCBub2RlKSA9PiB7XG4gICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlUGFydChpbnN0YW5jZSwgbm9kZSwgbm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJ0IHR5cGUgJHt0ZW1wbGF0ZVBhcnQudHlwZX1gKTtcbn07XG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFydENhbGxiYWNrLCBnZXRUZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuX3BhcnRDYWxsYmFjayA9IHBhcnRDYWxsYmFjaztcbiAgICAgICAgdGhpcy5fZ2V0VGVtcGxhdGUgPSBnZXRUZW1wbGF0ZTtcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgdmFsdWVJbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFydC5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1t2YWx1ZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXMsIHZhbHVlSW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhbHVlSW5kZXggKz0gcGFydC5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9uZSgpIHtcbiAgICAgICAgLy8gQ2xvbmUgdGhlIG5vZGUsIHJhdGhlciB0aGFuIGltcG9ydGluZyBpdCwgdG8ga2VlcCB0aGUgZnJhZ21lbnQgaW4gdGhlXG4gICAgICAgIC8vIHRlbXBsYXRlJ3MgZG9jdW1lbnQuIFRoaXMgbGVhdmVzIHRoZSBmcmFnbWVudCBpbmVydCBzbyBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgLy8gd29uJ3QgdXBncmFkZSB1bnRpbCBhZnRlciB0aGUgbWFpbiBkb2N1bWVudCBhZG9wdHMgdGhlIG5vZGUuXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlXG4gICAgICAgICAgICAvLyBudWxsXG4gICAgICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGZyYWdtZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQgKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0QWN0aXZlID0gaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCk7XG4gICAgICAgICAgICAgICAgLy8gQW4gaW5hY3RpdmUgcGFydCBoYXMgbm8gY29yZXNwb25kaW5nIFRlbXBsYXRlIG5vZGUuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydEFjdGl2ZSA/IHRoaXMuX3BhcnRDYWxsYmFjayh0aGlzLCBwYXJ0LCB3YWxrZXIuY3VycmVudE5vZGUpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufVxuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlXG4gKiBgYmVmb3JlTm9kZWAuIElmIGBiZWZvcmVOb2RlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGVcbiAqIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPSAoY29udGFpbmVyLCBzdGFydCwgZW5kID0gbnVsbCwgYmVmb3JlID0gbnVsbCkgPT4ge1xuICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlLCBiZWZvcmUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICB9XG59O1xuLyoqXG4gKiBSZW1vdmVzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydE5vZGVgIChpbmNsdXNpdmUpIHRvIGBlbmROb2RlYFxuICogKGV4Y2x1c2l2ZSksIGZyb20gYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9IChjb250YWluZXIsIHN0YXJ0Tm9kZSwgZW5kTm9kZSA9IG51bGwpID0+IHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICBjb25zdCBuID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiFcXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcXG4gKiBcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgTXlraGFpbG8gU3RhZG55ayA8bWlraHVzQGdtYWlsLmNvbT5cXG4gKiBcXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuICogXFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cXG4gKiBcXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXFxuICogU09GVFdBUkUuXFxuICpcXG4gKiBAdmVyc2lvbiAyLjEuNVxcbiAqL1xcbiFmdW5jdGlvbihlKXtcXFwidXNlIHN0cmljdFxcXCI7ZnVuY3Rpb24gdChlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxpPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKylpW3RdPWVbdF07cmV0dXJuIGl9cmV0dXJuIEFycmF5LmZyb20oZSl9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcXFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXFxcIik7cmV0dXJuIXR8fFxcXCJvYmplY3RcXFwiIT10eXBlb2YgdCYmXFxcImZ1bmN0aW9uXFxcIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIHIoZSx0KXtpZihcXFwiZnVuY3Rpb25cXFwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcXFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfWZ1bmN0aW9uIG8oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKX1mdW5jdGlvbiBuKGUsdCl7aWYodHx8KHQ9XFxcInVuZGVmaW5lZFxcXCI9PXR5cGVvZiB3aW5kb3c/Z2xvYmFsOndpbmRvdyksdm9pZCAwIT09dFtlXSlyZXR1cm4gdFtlXTtmb3IodmFyIGk9W1xcXCJ3ZWJraXRcXFwiLFxcXCJtb3pcXFwiLFxcXCJtc1xcXCIsXFxcIm9cXFwiXSxyPTAsbz1pLmxlbmd0aCxuPWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSk7cjxvO3IrKyl7dmFyIGE9dFtpW3JdK25dO2lmKHZvaWQgMCE9PWEpcmV0dXJuIGF9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYShlLHQsaSxyLG8sbixsKXtpZihcXFwiZnVuY3Rpb25cXFwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGFuaW1hdGlvbiBydWxlOlxcXCIscik7dmFyIHM9ZS1pLGQ9cy9vLGM9MDtkPjEmJihkPTEpLDEhPT1kJiYoYz1yKGQpLGlzRmluaXRlKGMpJiYhaXNOYU4oYykmJihkPWMpKSx0JiZ0KGQpLHM8bz9sLmZyYW1lPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBhKGUsdCxpLHIsbyxuLGwpfSk6KG4mJm4oKSxsLmluUHJvZ3Jlc3M9ITEpfWZ1bmN0aW9uIGwoKXtBcnJheS5wcm90b3R5cGUuY29uc3RydWN0b3IuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHMoZSl7aWYoIShlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uJiYyMTUyOTIzMTQ3PT09ZS5yZXN1bHQpKXRocm93IGV9ZnVuY3Rpb24gZChlKXtyZXR1cm4gZS5tYWpvclRpY2tzIGluc3RhbmNlb2YgQXJyYXl8fChlLm1ham9yVGlja3M9ZS5tYWpvclRpY2tzP1tlLm1ham9yVGlja3NdOltdKSxlLm1ham9yVGlja3MubGVuZ3RofHwoZS5tYWpvclRpY2tzLnB1c2goVGUuZm9ybWF0TWFqb3JUaWNrTnVtYmVyKGUubWluVmFsdWUsZSkpLGUubWFqb3JUaWNrcy5wdXNoKFRlLmZvcm1hdE1ham9yVGlja051bWJlcihlLm1heFZhbHVlLGUpKSksW1xcXCJyaWdodFxcXCIhPT1lLnRpY2tTaWRlLFxcXCJsZWZ0XFxcIiE9PWUudGlja1NpZGVdfWZ1bmN0aW9uIGMoZSx0LGkscixvLG4pe2UuYmVnaW5QYXRoKCksZS5tb3ZlVG8odCtuLGkpLGUubGluZVRvKHQrci1uLGkpLGUucXVhZHJhdGljQ3VydmVUbyh0K3IsaSx0K3IsaStuKSxlLmxpbmVUbyh0K3IsaStvLW4pLGUucXVhZHJhdGljQ3VydmVUbyh0K3IsaStvLHQrci1uLGkrbyksZS5saW5lVG8odCtuLGkrbyksZS5xdWFkcmF0aWNDdXJ2ZVRvKHQsaStvLHQsaStvLW4pLGUubGluZVRvKHQsaStuKSxlLnF1YWRyYXRpY0N1cnZlVG8odCxpLHQrbixpKSxlLmNsb3NlUGF0aCgpfWZ1bmN0aW9uIGgoZSx0KXt2YXIgaT10LnZhbHVlRGVjLHI9dC52YWx1ZUludCxvPTAsbj12b2lkIDAsYT12b2lkIDAsbD12b2lkIDA7aWYoZT1wYXJzZUZsb2F0KGUpLGw9ZTwwLGU9TWF0aC5hYnMoZSksaT4wKXtmb3IoYT1lLnRvRml4ZWQoaSkudG9TdHJpbmcoKS5zcGxpdChcXFwiLlxcXCIpLG49ci1hWzBdLmxlbmd0aDtvPG47KytvKWFbMF09XFxcIjBcXFwiK2FbMF07YT0obD9cXFwiLVxcXCI6XFxcIlxcXCIpK2FbMF0rXFxcIi5cXFwiK2FbMV19ZWxzZXtmb3IoYT1NYXRoLnJvdW5kKGUpLnRvU3RyaW5nKCksbj1yLWEubGVuZ3RoO288bjsrK28pYT1cXFwiMFxcXCIrYTthPShsP1xcXCItXFxcIjpcXFwiXFxcIikrYX1yZXR1cm4gYX1mdW5jdGlvbiB1KGUsdCl7dmFyIGk9dm9pZCAwLHI9ITE7cmV0dXJuIGk9MD09PXQubWFqb3JUaWNrc0RlYz9NYXRoLnJvdW5kKGUpLnRvU3RyaW5nKCk6ZS50b0ZpeGVkKHQubWFqb3JUaWNrc0RlYyksdC5tYWpvclRpY2tzSW50PjE/KHI9fmkuaW5kZXhPZihcXFwiLlxcXCIpLH5pLmluZGV4T2YoXFxcIi1cXFwiKT9cXFwiLVxcXCIrW3QubWFqb3JUaWNrc0ludCt0Lm1ham9yVGlja3NEZWMrMisocj8xOjApLWkubGVuZ3RoXS5qb2luKFxcXCIwXFxcIikraS5yZXBsYWNlKFxcXCItXFxcIixcXFwiXFxcIik6W3QubWFqb3JUaWNrc0ludCt0Lm1ham9yVGlja3NEZWMrMSsocj8xOjApLWkubGVuZ3RoXS5qb2luKFxcXCIwXFxcIikraSk6aX1mdW5jdGlvbiBmKGUpe3JldHVybiBlKk1hdGguUEkvMTgwfWZ1bmN0aW9uIG0oZSx0KXtyZXR1cm57eDotZSpNYXRoLnNpbih0KSx5OmUqTWF0aC5jb3ModCl9fWZ1bmN0aW9uIHYoZSx0LGkscil7dmFyIG89IShhcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XSl8fGFyZ3VtZW50c1s0XSxuPWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTowLGE9ZS5jcmVhdGVMaW5lYXJHcmFkaWVudChvPzA6bixvP246MCxvPzA6cixvP3I6MCk7cmV0dXJuIGEuYWRkQ29sb3JTdG9wKDAsdCksYS5hZGRDb2xvclN0b3AoMSxpKSxhfWZ1bmN0aW9uIGIoZSx0KXtpZihhcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdKXJldHVybiBlLnJlc3RvcmUoKSwhMDtlLnNhdmUoKTt2YXIgaT10LmJvcmRlclNoYWRvd1dpZHRoO3JldHVybiBpJiYoZS5zaGFkb3dCbHVyPWksZS5zaGFkb3dDb2xvcj10LmNvbG9yQm9yZGVyU2hhZG93KSwhMH1mdW5jdGlvbiBnKGUsdCl7dC5uZWVkbGVTaGFkb3cmJihlLnNoYWRvd09mZnNldFg9MixlLnNoYWRvd09mZnNldFk9MixlLnNoYWRvd0JsdXI9MTAsZS5zaGFkb3dDb2xvcj10LmNvbG9yTmVlZGxlU2hhZG93RG93bil9ZnVuY3Rpb24gcChlLHQsaSl7cmV0dXJuIGVbXFxcImZvbnRcXFwiK3QrXFxcIlN0eWxlXFxcIl0rXFxcIiBcXFwiK2VbXFxcImZvbnRcXFwiK3QrXFxcIldlaWdodFxcXCJdK1xcXCIgXFxcIitlW1xcXCJmb250XFxcIit0K1xcXCJTaXplXFxcIl0qaStcXFwicHggXFxcIitlW1xcXCJmb250XFxcIit0XX1mdW5jdGlvbiB3KGUpe2Uuc2hhZG93T2Zmc2V0WD1udWxsLGUuc2hhZG93T2Zmc2V0WT1udWxsLGUuc2hhZG93Qmx1cj1udWxsLGUuc2hhZG93Q29sb3I9XFxcIlxcXCIsZS5zdHJva2VTdHlsZT1udWxsLGUubGluZVdpZHRoPTAsZS5zYXZlKCl9ZnVuY3Rpb24geShlLHQsaSxyKXt0LnZhbHVlVGV4dFNoYWRvdyYmKGUuc2hhZG93T2Zmc2V0WD1pLGUuc2hhZG93T2Zmc2V0WT1pLGUuc2hhZG93Qmx1cj1yLGUuc2hhZG93Q29sb3I9dC5jb2xvclZhbHVlVGV4dFNoYWRvdyl9ZnVuY3Rpb24gayhlLHQsaSxyLG8sbil7aWYodC52YWx1ZUJveCl7dyhlKTt2YXIgYT10LnZhbHVlRGVjPzErdC52YWx1ZURlYzowLGw9XFxcIjlcXFwiLnJlcGVhdChNYXRoLm1heC5hcHBseShudWxsLFtTdHJpbmcocGFyc2VJbnQoaSkpLmxlbmd0aCthXS5jb25jYXQodC5tYWpvclRpY2tzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nKHBhcnNlSW50KGUsMTApKS5sZW5ndGgrYX0pKSkpLHM9dC52YWx1ZVRleHR8fGgoaSx0KSxkPW4vMjAwLHU9bi8xMDAsZj0uNCp1LG09MS4yKnU7ZS5mb250PXAodCxcXFwiVmFsdWVcXFwiLGQpLHkoZSx0LGYsbSk7dmFyIHY9ZS5tZWFzdXJlVGV4dCh0LnZhbHVlVGV4dD9zOlxcXCItXFxcIitoKE51bWJlcihsKSx0KSkud2lkdGg7dyhlKTt2YXIgYj1wYXJzZUZsb2F0KHQuZm9udFZhbHVlU2l6ZSkqZCtmK20sZz11KnBhcnNlRmxvYXQodC52YWx1ZUJveFN0cm9rZSksaz0yKm4tMipnLHg9disxMCp1LFQ9MS4xKmIrZittLFM9dSp0LnZhbHVlQm94Qm9yZGVyUmFkaXVzLFc9KHBhcnNlRmxvYXQodC52YWx1ZUJveFdpZHRoKXx8MCkvMTAwKms7Vz54JiYoeD1XKSx4PmsmJih4PWspO3ZhciBPPXIteC8yLFY9by1ULzIsUD1vLTUuNzUqdTtpZihlLmJlZ2luUGF0aCgpLFM/YyhlLE8sVix4LFQsUyk6ZS5yZWN0KE8sVix4LFQpLGcpe3ZhciBNPWUuY3JlYXRlUmFkaWFsR3JhZGllbnQocixQLDEwKnUscixQLDIwKnUpO00uYWRkQ29sb3JTdG9wKDAsdC5jb2xvclZhbHVlQm94UmVjdCksTS5hZGRDb2xvclN0b3AoMSx0LmNvbG9yVmFsdWVCb3hSZWN0RW5kKSxlLnN0cm9rZVN0eWxlPU0sZS5saW5lV2lkdGg9ZyxlLnN0cm9rZSgpfXQuY29sb3JWYWx1ZUJveFNoYWRvdyYmKGUuc2hhZG93Qmx1cj0xLjIqdSxlLnNoYWRvd0NvbG9yPXQuY29sb3JWYWx1ZUJveFNoYWRvdyksdC5jb2xvclZhbHVlQm94QmFja2dyb3VuZCYmKGUuZmlsbFN0eWxlPXQuY29sb3JWYWx1ZUJveEJhY2tncm91bmQsZS5maWxsKCkpLGUuY2xvc2VQYXRoKCksZS5yZXN0b3JlKCkseShlLHQsZixtKSxlLmZpbGxTdHlsZT10LmNvbG9yVmFsdWVUZXh0LGUudGV4dEFsaWduPVxcXCJjZW50ZXJcXFwiLGUudGV4dEJhc2VsaW5lPVxcXCJhbHBoYWJldGljXFxcIixlLmZpbGxUZXh0KHMsTyt4LzIsbytULzItYi8zKSxlLnJlc3RvcmUoKX19ZnVuY3Rpb24geChlKXt2YXIgdD1lLnZhbHVlLGk9ZS5taW5WYWx1ZSxyPWUubWF4VmFsdWUsbz0uMDEqKHItaSk7cmV0dXJue25vcm1hbDp0PGk/aTp0PnI/cjp0LGluZGVudGVkOnQ8aT9pLW86dD5yP3Irbzp0fX1mdW5jdGlvbiBUKGUsdCxpLHIsbyl7aS5iZWdpblBhdGgoKSxpLmFyYygwLDAseWUoZSksMCwyKlNlLCEwKSxpLmxpbmVXaWR0aD10LGkuc3Ryb2tlU3R5bGU9bz9UZS5saW5lYXJHcmFkaWVudChpLHIsbyxlKTpyLGkuc3Ryb2tlKCksaS5jbG9zZVBhdGgoKX1mdW5jdGlvbiBTKGUsdCl7dmFyIGk9YmUucGl4ZWxSYXRpbztyZXR1cm4gZS5tYXhSYWRpdXN8fChlLm1heFJhZGl1cz1lLm1heC10LmJvcmRlclNoYWRvd1dpZHRoLXQuYm9yZGVyT3V0ZXJXaWR0aCppLXQuYm9yZGVyTWlkZGxlV2lkdGgqaS10LmJvcmRlcklubmVyV2lkdGgqaSsodC5ib3JkZXJPdXRlcldpZHRoPy41OjApKyh0LmJvcmRlck1pZGRsZVdpZHRoPy41OjApKyh0LmJvcmRlcklubmVyV2lkdGg/LjU6MCkpLGUubWF4UmFkaXVzfWZ1bmN0aW9uIFcoZSx0KXt2YXIgaT1iZS5waXhlbFJhdGlvLHI9dC5ib3JkZXJTaGFkb3dXaWR0aCppLG89ZS5tYXgtci10LmJvcmRlck91dGVyV2lkdGgqaS8yLG49by10LmJvcmRlck91dGVyV2lkdGgqaS8yLXQuYm9yZGVyTWlkZGxlV2lkdGgqaS8yKy41LGE9bi10LmJvcmRlck1pZGRsZVdpZHRoKmkvMi10LmJvcmRlcklubmVyV2lkdGgqaS8yKy41LGw9UyhlLHQpLHM9dm9pZCAwLGQ9ITE7ZS5zYXZlKCksdC5ib3JkZXJPdXRlcldpZHRoJiYoZD1UZS5kcmF3U2hhZG93KGUsdCxkKSxUKG8sdC5ib3JkZXJPdXRlcldpZHRoKmksZSx0LmNvbG9yQm9yZGVyT3V0ZXIsdC5jb2xvckJvcmRlck91dGVyRW5kKSksdC5ib3JkZXJNaWRkbGVXaWR0aCYmKGQ9VGUuZHJhd1NoYWRvdyhlLHQsZCksVChuLHQuYm9yZGVyTWlkZGxlV2lkdGgqaSxlLHQuY29sb3JCb3JkZXJNaWRkbGUsdC5jb2xvckJvcmRlck1pZGRsZUVuZCkpLHQuYm9yZGVySW5uZXJXaWR0aCYmKGQ9VGUuZHJhd1NoYWRvdyhlLHQsZCksVChhLHQuYm9yZGVySW5uZXJXaWR0aCppLGUsdC5jb2xvckJvcmRlcklubmVyLHQuY29sb3JCb3JkZXJJbm5lckVuZCkpLFRlLmRyYXdTaGFkb3coZSx0LGQpLGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLHllKGwpLDAsMipTZSwhMCksdC5jb2xvclBsYXRlRW5kPyhzPWUuY3JlYXRlUmFkaWFsR3JhZGllbnQoMCwwLGwvMiwwLDAsbCkscy5hZGRDb2xvclN0b3AoMCx0LmNvbG9yUGxhdGUpLHMuYWRkQ29sb3JTdG9wKDEsdC5jb2xvclBsYXRlRW5kKSk6cz10LmNvbG9yUGxhdGUsZS5maWxsU3R5bGU9cyxlLmZpbGwoKSxlLmNsb3NlUGF0aCgpLGUucmVzdG9yZSgpfWZ1bmN0aW9uIE8oZSx0KXt2YXIgaT1lLm1heCoocGFyc2VGbG9hdCh0LmhpZ2hsaWdodHNXaWR0aCl8fDApLzEwMDtpZihpKXt2YXIgcj15ZShQKGUsdCktaS8yKSxvPTAsbj10LmhpZ2hsaWdodHMubGVuZ3RoLGE9KHQubWF4VmFsdWUtdC5taW5WYWx1ZSkvdC50aWNrc0FuZ2xlO2ZvcihlLnNhdmUoKTtvPG47bysrKXt2YXIgbD10LmhpZ2hsaWdodHNbb107ZS5iZWdpblBhdGgoKSxlLnJvdGF0ZShXZSksZS5hcmMoMCwwLHIsVGUucmFkaWFucyh0LnN0YXJ0QW5nbGUrKGwuZnJvbS10Lm1pblZhbHVlKS9hKSxUZS5yYWRpYW5zKHQuc3RhcnRBbmdsZSsobC50by10Lm1pblZhbHVlKS9hKSwhMSksZS5zdHJva2VTdHlsZT1sLmNvbG9yLGUubGluZVdpZHRoPWksZS5zdHJva2UoKSxlLmNsb3NlUGF0aCgpLGUucmVzdG9yZSgpLGUuc2F2ZSgpfX19ZnVuY3Rpb24gVihlLHQpe3ZhciBpPVAoZSx0KSxyPXZvaWQgMCxvPXZvaWQgMCxuPXZvaWQgMCxhPTAsbD0wLHM9TWF0aC5hYnModC5taW5vclRpY2tzKXx8MCxkPXQudGlja3NBbmdsZS8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKTtmb3IoZS5saW5lV2lkdGg9YmUucGl4ZWxSYXRpbyxlLnN0cm9rZVN0eWxlPXQuY29sb3JNaW5vclRpY2tzfHx0LmNvbG9yU3Ryb2tlVGlja3MsZS5zYXZlKCksdC5leGFjdFRpY2tzPyhvPXQubWF4VmFsdWUtdC5taW5WYWx1ZSxyPXM/by9zOjAsbD0oeGUubW9kKHQubWFqb3JUaWNrc1swXSxzKXx8MCkqZCk6cj1zKih0Lm1ham9yVGlja3MubGVuZ3RoLTEpO2E8cjsrK2EpKG49dC5zdGFydEFuZ2xlK2wrYSoodC50aWNrc0FuZ2xlL3IpKTw9dC50aWNrc0FuZ2xlK3Quc3RhcnRBbmdsZSYmKGUucm90YXRlKFRlLnJhZGlhbnMobikpLGUuYmVnaW5QYXRoKCksZS5tb3ZlVG8oMCxpKSxlLmxpbmVUbygwLGktLjA3NSplLm1heCksQihlKSl9ZnVuY3Rpb24gUChlLHQpe3ZhciBpPWUubWF4LzEwMDtyZXR1cm4gUyhlLHQpLTUqaS0odC5iYXJXaWR0aD8yKihwYXJzZUZsb2F0KHQuYmFyU3Ryb2tlV2lkdGgpfHwwKSsoKHBhcnNlRmxvYXQodC5iYXJXaWR0aCl8fDApKzUpKmk6MCl9ZnVuY3Rpb24gTShlLHQpe1RlLnByZXBhcmVUaWNrcyh0KTt2YXIgaT15ZShQKGUsdCkpLHI9dm9pZCAwLG89dm9pZCAwLG49dC5tYWpvclRpY2tzLmxlbmd0aCxhPWJlLnBpeGVsUmF0aW87Zm9yKGUubGluZVdpZHRoPTIqYSxlLnNhdmUoKSxvPXQuY29sb3JNYWpvclRpY2tzIGluc3RhbmNlb2YgQXJyYXk/dC5jb2xvck1ham9yVGlja3M6bmV3IEFycmF5KG4pLmZpbGwodC5jb2xvclN0cm9rZVRpY2tzfHx0LmNvbG9yTWFqb3JUaWNrcykscj0wO3I8bjsrK3IpZS5zdHJva2VTdHlsZT1vW3JdLGUucm90YXRlKFRlLnJhZGlhbnMoQSh0LHQuZXhhY3RUaWNrcz90Lm1ham9yVGlja3Nbcl06cixuKSkpLGUuYmVnaW5QYXRoKCksZS5tb3ZlVG8oMCxpKSxlLmxpbmVUbygwLGktLjE1KmUubWF4KSxCKGUpO3Quc3Ryb2tlVGlja3MmJihlLnN0cm9rZVN0eWxlPXQuY29sb3JTdHJva2VUaWNrc3x8b1swXSxlLnJvdGF0ZShXZSksZS5iZWdpblBhdGgoKSxlLmFyYygwLDAsaSxUZS5yYWRpYW5zKHQuc3RhcnRBbmdsZSksVGUucmFkaWFucyh0LnN0YXJ0QW5nbGUrdC50aWNrc0FuZ2xlKSwhMSksQihlKSl9ZnVuY3Rpb24gQShlLHQsaSl7aWYoZS5leGFjdFRpY2tzKXt2YXIgcj1lLnRpY2tzQW5nbGUvKGUubWF4VmFsdWUtZS5taW5WYWx1ZSk7cmV0dXJuIGUuc3RhcnRBbmdsZStyKih0LWUubWluVmFsdWUpfXJldHVybiBlLnN0YXJ0QW5nbGUrdCooZS50aWNrc0FuZ2xlLyhpLTEpKX1mdW5jdGlvbiBCKGUpe2Uuc3Ryb2tlKCksZS5yZXN0b3JlKCksZS5jbG9zZVBhdGgoKSxlLnNhdmUoKX1mdW5jdGlvbiBqKGUsdCl7dmFyIGk9UChlLHQpLS4xNSplLm1heCxyPXt9LG89MCxuPXQubWFqb3JUaWNrcy5sZW5ndGgsYT1cXFwibmVlZGxlXFxcIiE9PXQuYW5pbWF0aW9uVGFyZ2V0LGw9dC5jb2xvck51bWJlcnMgaW5zdGFuY2VvZiBBcnJheT90LmNvbG9yTnVtYmVyczpuZXcgQXJyYXkobikuZmlsbCh0LmNvbG9yTnVtYmVycykscz1hPy0odC52YWx1ZS10Lm1pblZhbHVlKS8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKSp0LnRpY2tzQW5nbGU6MDtmb3IoYSYmKGUuc2F2ZSgpLGUucm90YXRlKC1UZS5yYWRpYW5zKHMpKSksZS5mb250PVRlLmZvbnQodCxcXFwiTnVtYmVyc1xcXCIsZS5tYXgvMjAwKSxlLmxpbmVXaWR0aD0wLGUudGV4dEFsaWduPVxcXCJjZW50ZXJcXFwiLGUudGV4dEJhc2VsaW5lPVxcXCJtaWRkbGVcXFwiO288bjsrK28pe3ZhciBkPXMrQSh0LHQuZXhhY3RUaWNrcz90Lm1ham9yVGlja3Nbb106byxuKSxjPWUubWVhc3VyZVRleHQodC5tYWpvclRpY2tzW29dKS53aWR0aCxoPXQuZm9udE51bWJlcnNTaXplLHU9TWF0aC5zcXJ0KGMqYytoKmgpLzIsZj1UZS5yYWRpYWxQb2ludChpLXUtdC5udW1iZXJzTWFyZ2luLzEwMCplLm1heCxUZS5yYWRpYW5zKGQpKTszNjA9PT1kJiYoZD0wKSxyW2RdfHwocltkXT0hMCxlLmZpbGxTdHlsZT1sW29dLGUuZmlsbFRleHQodC5tYWpvclRpY2tzW29dLGYueCxmLnkpKX1hJiZlLnJlc3RvcmUoKX1mdW5jdGlvbiBDKGUsdCl7dC50aXRsZSYmKGUuc2F2ZSgpLGUuZm9udD1UZS5mb250KHQsXFxcIlRpdGxlXFxcIixlLm1heC8yMDApLGUuZmlsbFN0eWxlPXQuY29sb3JUaXRsZSxlLnRleHRBbGlnbj1cXFwiY2VudGVyXFxcIixlLmZpbGxUZXh0KHQudGl0bGUsMCwtZS5tYXgvNC4yNSwuOCplLm1heCksZS5yZXN0b3JlKCkpfWZ1bmN0aW9uIE4oZSx0KXt0LnVuaXRzJiYoZS5zYXZlKCksZS5mb250PVRlLmZvbnQodCxcXFwiVW5pdHNcXFwiLGUubWF4LzIwMCksZS5maWxsU3R5bGU9dC5jb2xvclVuaXRzLGUudGV4dEFsaWduPVxcXCJjZW50ZXJcXFwiLGUuZmlsbFRleHQodC51bml0cywwLGUubWF4LzMuMjUsLjgqZS5tYXgpLGUucmVzdG9yZSgpKX1mdW5jdGlvbiBFKGUsdCl7aWYodC5uZWVkbGUpe3ZhciBpPXQudGlja3NBbmdsZTwzNjA/VGUubm9ybWFsaXplZFZhbHVlKHQpLmluZGVudGVkOnQudmFsdWUscj1TKGUsdCksbz15ZShyLzEwMCp0Lm5lZWRsZUNpcmNsZVNpemUpLG49eWUoci8xMDAqdC5uZWVkbGVDaXJjbGVTaXplKi43NSksYT15ZShyLzEwMCp0Lm5lZWRsZUVuZCksbD15ZSh0Lm5lZWRsZVN0YXJ0P3IvMTAwKnQubmVlZGxlU3RhcnQ6MCkscz1yLzEwMCp0Lm5lZWRsZVdpZHRoLGQ9ci8xMDAqdC5uZWVkbGVXaWR0aC8yLGM9YmUucGl4ZWxSYXRpbyxoPVxcXCJuZWVkbGVcXFwiIT09dC5hbmltYXRpb25UYXJnZXQ7ZS5zYXZlKCksVGUuZHJhd05lZWRsZVNoYWRvdyhlLHQpLGUucm90YXRlKFRlLnJhZGlhbnMoaD90LnN0YXJ0QW5nbGU6dC5zdGFydEFuZ2xlKyhpLXQubWluVmFsdWUpLyh0Lm1heFZhbHVlLXQubWluVmFsdWUpKnQudGlja3NBbmdsZSkpLGUuZmlsbFN0eWxlPVRlLmxpbmVhckdyYWRpZW50KGUsdC5jb2xvck5lZWRsZSx0LmNvbG9yTmVlZGxlRW5kLGEtbCksXFxcImFycm93XFxcIj09PXQubmVlZGxlVHlwZT8oZS5iZWdpblBhdGgoKSxlLm1vdmVUbygtZCwtbCksZS5saW5lVG8oLXMsMCksZS5saW5lVG8oLTEqYyxhKSxlLmxpbmVUbyhjLGEpLGUubGluZVRvKHMsMCksZS5saW5lVG8oZCwtbCksZS5jbG9zZVBhdGgoKSxlLmZpbGwoKSxlLmJlZ2luUGF0aCgpLGUubGluZVRvKC0uNSpjLGEpLGUubGluZVRvKC0xKmMsYSksZS5saW5lVG8oLXMsMCksZS5saW5lVG8oLWQsLWwpLGUubGluZVRvKGQvMipjLTIqYywtbCksZS5jbG9zZVBhdGgoKSxlLmZpbGxTdHlsZT10LmNvbG9yTmVlZGxlU2hhZG93VXAsZS5maWxsKCkpOihlLmJlZ2luUGF0aCgpLGUubW92ZVRvKC1kLGEpLGUubGluZVRvKC1kLGwpLGUubGluZVRvKGQsbCksZS5saW5lVG8oZCxhKSxlLmNsb3NlUGF0aCgpLGUuZmlsbCgpKSx0Lm5lZWRsZUNpcmNsZVNpemUmJihlLnJlc3RvcmUoKSxUZS5kcmF3TmVlZGxlU2hhZG93KGUsdCksdC5uZWVkbGVDaXJjbGVPdXRlciYmKGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLG8sMCwyKlNlLCEwKSxlLmZpbGxTdHlsZT1UZS5saW5lYXJHcmFkaWVudChlLHQuY29sb3JOZWVkbGVDaXJjbGVPdXRlcix0LmNvbG9yTmVlZGxlQ2lyY2xlT3V0ZXJFbmQsbyksZS5maWxsKCksZS5jbG9zZVBhdGgoKSksdC5uZWVkbGVDaXJjbGVJbm5lciYmKGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLG4sMCwyKlNlLCEwKSxlLmZpbGxTdHlsZT1UZS5saW5lYXJHcmFkaWVudChlLHQuY29sb3JOZWVkbGVDaXJjbGVJbm5lcix0LmNvbG9yTmVlZGxlQ2lyY2xlSW5uZXJFbmQsbiksZS5maWxsKCksZS5jbG9zZVBhdGgoKSksZS5yZXN0b3JlKCkpfX1mdW5jdGlvbiBfKGUsdCxpKXtUZS5kcmF3VmFsdWVCb3goZSx0LGksMCxlLm1heC0uMzMqZS5tYXgsZS5tYXgpfWZ1bmN0aW9uIFIoZSx0KXt2YXIgaT1lLm1heC8xMDAscj1TKGUsdCktNSppLG89cGFyc2VGbG9hdCh0LmJhclN0cm9rZVdpZHRoKXx8MCxuPShwYXJzZUZsb2F0KHQuYmFyV2lkdGgpfHwwKSppLGE9ci0yKm8tbixsPShyLWEpLzIscz1hK2wsZD1vL3MsYz10LnN0YXJ0QW5nbGUsaD10LnN0YXJ0QW5nbGUrdC50aWNrc0FuZ2xlO2Uuc2F2ZSgpLGUucm90YXRlKFdlKSxvJiYoZS5iZWdpblBhdGgoKSxlLmFyYygwLDAscyxUZS5yYWRpYW5zKGMpLWQsVGUucmFkaWFucyhoKStkLCExKSxlLnN0cm9rZVN0eWxlPXQuY29sb3JCYXJTdHJva2UsZS5saW5lV2lkdGg9MipsLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKSksbiYmKGUuYmVnaW5QYXRoKCksZS5hcmMoMCwwLHMsVGUucmFkaWFucyhjKSxUZS5yYWRpYW5zKGgpLCExKSxlLnN0cm9rZVN0eWxlPXQuY29sb3JCYXIsZS5saW5lV2lkdGg9bixlLnN0cm9rZSgpLGUuY2xvc2VQYXRoKCksdC5iYXJTaGFkb3cmJihlLmJlZ2luUGF0aCgpLGUuYXJjKDAsMCxyLFRlLnJhZGlhbnMoYyksVGUucmFkaWFucyhoKSwhMSksZS5jbGlwKCksZS5iZWdpblBhdGgoKSxlLnN0cm9rZVN0eWxlPXQuY29sb3JCYXIsZS5saW5lV2lkdGg9MSxlLnNoYWRvd0JsdXI9dC5iYXJTaGFkb3csZS5zaGFkb3dDb2xvcj10LmNvbG9yQmFyU2hhZG93LGUuc2hhZG93T2Zmc2V0WD0wLGUuc2hhZG93T2Zmc2V0WT0wLGUuYXJjKDAsMCxyLFRlLnJhZGlhbnModC5zdGFydEFuZ2xlKSxUZS5yYWRpYW5zKHQuc3RhcnRBbmdsZSt0LnRpY2tzQW5nbGUpLCExKSxlLnN0cm9rZSgpLGUuY2xvc2VQYXRoKCksZS5yZXN0b3JlKCksZS5yb3RhdGUoV2UpKSx0LmJhclByb2dyZXNzJiYoZS5iZWdpblBhdGgoKSxlLmFyYygwLDAscyxUZS5yYWRpYW5zKGMpLFRlLnJhZGlhbnMoYysoVGUubm9ybWFsaXplZFZhbHVlKHQpLm5vcm1hbC10Lm1pblZhbHVlKS8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKSp0LnRpY2tzQW5nbGUpLCExKSxlLnN0cm9rZVN0eWxlPXQuY29sb3JCYXJQcm9ncmVzcyxlLmxpbmVXaWR0aD1uLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKSkpLGUucmVzdG9yZSgpfWZ1bmN0aW9uIEkoZSl7cmV0dXJuIGUub3B0aW9ucy5hbmltYXRlZFZhbHVlP2Uub3B0aW9ucy52YWx1ZTplLnZhbHVlfWZ1bmN0aW9uIEQoZSx0LGkscixvLG4sYSxsKXtlLmJlZ2luUGF0aCgpLGUuZmlsbFN0eWxlPWw/VGUubGluZWFyR3JhZGllbnQoZSxhLGwsbz5uP286bixuPm8sbz5uP2k6cik6YSx0PjA/VGUucm91bmRSZWN0KGUsaSxyLG8sbix0KTplLnJlY3QoaSxyLG8sbiksZS5maWxsKCksZS5jbG9zZVBhdGgoKX1mdW5jdGlvbiB6KGUsdCxpLHIsbyxuLGEsbCxzKXtlLmJlZ2luUGF0aCgpLGUubGluZVdpZHRoPXQsZS5zdHJva2VTdHlsZT1zP1RlLmxpbmVhckdyYWRpZW50KGUsbCxzLGEsITAsbyk6bCxpPjA/VGUucm91bmRSZWN0KGUscixvLG4sYSxpKTplLnJlY3QocixvLG4sYSksZS5zdHJva2UoKSxlLmNsb3NlUGF0aCgpfWZ1bmN0aW9uIEwoZSx0LGkscixvLG4pe3ZhciBhPWJlLnBpeGVsUmF0aW87ZS5zYXZlKCk7dmFyIGw9dC5ib3JkZXJSYWRpdXMqYSxzPW8tdC5ib3JkZXJTaGFkb3dXaWR0aC10LmJvcmRlck91dGVyV2lkdGgqYSxkPXMtdC5ib3JkZXJPdXRlcldpZHRoKmEtdC5ib3JkZXJNaWRkbGVXaWR0aCphLGM9ZC10LmJvcmRlck1pZGRsZVdpZHRoKmEtdC5ib3JkZXJJbm5lcldpZHRoKmEsaD1jLXQuYm9yZGVySW5uZXJXaWR0aCphLHU9bi10LmJvcmRlclNoYWRvd1dpZHRoLXQuYm9yZGVyT3V0ZXJXaWR0aCphLGY9dS10LmJvcmRlck91dGVyV2lkdGgqYS10LmJvcmRlck1pZGRsZVdpZHRoKmEsbT1mLXQuYm9yZGVyTWlkZGxlV2lkdGgqYS10LmJvcmRlcklubmVyV2lkdGgqYSx2PW0tdC5ib3JkZXJJbm5lcldpZHRoKmEsYj1pLShkLXMpLzIsZz1iLShjLWQpLzIscD1nLShoLWMpLzIsdz1yLShmLXUpLzIseT13LShtLWYpLzIsaz15LSh2LW0pLzIseD0wLFQ9ITE7cmV0dXJuIHQuYm9yZGVyT3V0ZXJXaWR0aCYmKFQ9VGUuZHJhd1NoYWRvdyhlLHQsVCkseihlLHQuYm9yZGVyT3V0ZXJXaWR0aCphLGwsaSt0LmJvcmRlck91dGVyV2lkdGgqYS8yLXgscit0LmJvcmRlck91dGVyV2lkdGgqYS8yLXgscyx1LHQuY29sb3JCb3JkZXJPdXRlcix0LmNvbG9yQm9yZGVyT3V0ZXJFbmQpLHgrPS41KmEpLHQuYm9yZGVyTWlkZGxlV2lkdGgmJihUPVRlLmRyYXdTaGFkb3coZSx0LFQpLHooZSx0LmJvcmRlck1pZGRsZVdpZHRoKmEsbC09MSsyKngsYit0LmJvcmRlck1pZGRsZVdpZHRoKmEvMi14LHcrdC5ib3JkZXJNaWRkbGVXaWR0aCphLzIteCxkKzIqeCxmKzIqeCx0LmNvbG9yQm9yZGVyTWlkZGxlLHQuY29sb3JCb3JkZXJNaWRkbGVFbmQpLHgrPS41KmEpLHQuYm9yZGVySW5uZXJXaWR0aCYmKFQ9VGUuZHJhd1NoYWRvdyhlLHQsVCkseihlLHQuYm9yZGVySW5uZXJXaWR0aCphLGwtPTErMip4LGcrdC5ib3JkZXJJbm5lcldpZHRoKmEvMi14LHkrdC5ib3JkZXJJbm5lcldpZHRoKmEvMi14LGMrMip4LG0rMip4LHQuY29sb3JCb3JkZXJJbm5lcix0LmNvbG9yQm9yZGVySW5uZXJFbmQpLHgrPS41KmEpLFRlLmRyYXdTaGFkb3coZSx0LFQpLEQoZSxsLHAsayxoKzIqeCx2KzIqeCx0LmNvbG9yUGxhdGUsdC5jb2xvclBsYXRlRW5kKSxlLnJlc3RvcmUoKSxbcCxrLGgsdl19ZnVuY3Rpb24gRyhlLHQsaSxyLG8sbil7dmFyIGE9YmUucGl4ZWxSYXRpbyxsPW4+PW8scz1sPy44NSpvOm4sZD1sP246bztpPWw/d2UoaSsoby1zKS8yKTppO3ZhciBjPSEhdC50aXRsZSxoPSEhdC51bml0cyx1PSEhdC52YWx1ZUJveCxmPXZvaWQgMCxtPXZvaWQgMCx2PXZvaWQgMDtsPyhtPXdlKC4wNSpkKSxmPXdlKC4wNzUqZCksdj13ZSguMTEqZCksYyYmKGQtPWYscis9ZiksaCYmKGQtPW0pLHUmJihkLT12KSk6KG09Zj13ZSguMTUqcyksYyYmKHMtPWYscis9ZiksaCYmKHMtPW0pKTt2YXIgYj0yKnQuYmFyU3Ryb2tlV2lkdGgsZz10LmJhckJlZ2luQ2lyY2xlP3dlKHMqdC5iYXJCZWdpbkNpcmNsZS8yMDAtYi8yKTowLHA9d2Uocyp0LmJhcldpZHRoLzEwMC1iKSx3PXdlKGQqdC5iYXJMZW5ndGgvMTAwLWIpLHk9d2UoKGQtdykvMiksaz13ZShpKyhsP3MvMjp5K2cpKSx4PXdlKHIrKGw/ZC15LWcrYi8yOnMvMikpLFQ9IWx8fHQuaGFzTGVmdCYmdC5oYXNSaWdodD8wOih0Lmhhc1JpZ2h0Py0xOjEpKnQudGlja3NXaWR0aC8xMDAqcyxTPWx8fHQuaGFzTGVmdCYmdC5oYXNSaWdodD8wOih0Lmhhc1JpZ2h0Py0xOjEpKnQudGlja3NXaWR0aC8xMDAqcztyZXR1cm4gZS5iYXJEaW1lbnNpb25zPXtpc1ZlcnRpY2FsOmwsd2lkdGg6cyxsZW5ndGg6ZCxiYXJXaWR0aDpwLGJhckxlbmd0aDp3LHN0cm9rZVdpZHRoOmIsYmFyTWFyZ2luOnkscmFkaXVzOmcscGl4ZWxSYXRpbzphLGJhck9mZnNldDpudWxsLHRpdGxlTWFyZ2luOmM/ZjowLHVuaXRzTWFyZ2luOmg/bTowLGdldCB0aWNrc0xlbmd0aCgpe3JldHVybiB0aGlzLmJhckxlbmd0aC10aGlzLmJhck9mZnNldC10aGlzLnN0cm9rZVdpZHRofSxYOmkrVCxZOnIrUyx4MDprK1QseTA6eCtTLGJhc2VYOmksYmFzZVk6cix0aWNrc1BhZGRpbmc6dC50aWNrc1BhZGRpbmcvMTAwfSxlLmJhckRpbWVuc2lvbnN9ZnVuY3Rpb24gRihlLHQsaSxyLG8sbixhKXt2YXIgbD1HKGUsdCxyLG8sbixhKSxzPWwuaXNWZXJ0aWNhbCxkPWwud2lkdGgsYz1sLmJhcldpZHRoLGg9bC5iYXJMZW5ndGgsdT1sLnN0cm9rZVdpZHRoLGY9bC5iYXJNYXJnaW4sbT1sLnJhZGl1cyx2PWwueDAsYj1sLnkwLGc9bC5YLHA9bC5ZLHc9aDtpZihlLnNhdmUoKSxlLmJlZ2luUGF0aCgpLHQuYmFyQmVnaW5DaXJjbGUpe3ZhciB5PVRlLnJhZGlhbnMocz8yNzA6MCksaz1NYXRoLmFzaW4oYy8yL20pLHg9TWF0aC5jb3MoayksVD1NYXRoLnNpbihrKSxTPXYrKHM/bSpUOm0qeC11LzIpLFc9cz9iLW0qeDpiK20qVCxPPXllKHM/Vy1iOlMtdik7ZS5iYXJEaW1lbnNpb25zLmJhck9mZnNldD13ZShPK20pO3ZhciBWPXM/d2Uodi1tKlQpOlMsUD1zP1c6d2UoYi1tKlQpO1xcXCJwcm9ncmVzc1xcXCI9PT1pJiYoaD1lLmJhckRpbWVuc2lvbnMuYmFyT2Zmc2V0KyhoLWUuYmFyRGltZW5zaW9ucy5iYXJPZmZzZXQpKihUZS5ub3JtYWxpemVkVmFsdWUodCkubm9ybWFsLXQubWluVmFsdWUpLyh0Lm1heFZhbHVlLXQubWluVmFsdWUpKTt2YXIgTT13ZShTK2gtZS5iYXJEaW1lbnNpb25zLmJhck9mZnNldCt1LzIpLEE9d2UoVy1oK2UuYmFyRGltZW5zaW9ucy5iYXJPZmZzZXQtdS8yKTtlLmFyYyh2LGIsbSx5K2sseS1rKSxzPyhlLm1vdmVUbyhTLFApLGUubGluZVRvKFMsQSksZS5saW5lVG8oVixBKSxlLmxpbmVUbyhWLFApKTooZS5tb3ZlVG8oUyxQKSxlLmxpbmVUbyhNLFApLGUubGluZVRvKE0sVyksZS5saW5lVG8oUyxXKSl9ZWxzZXt2YXIgQj13ZShzP2crKGQtYykvMjpnK2YpLGo9d2Uocz9wK2grZjpwKyhkLWMpLzIpO1xcXCJwcm9ncmVzc1xcXCI9PT1pJiYoaCo9KHQudmFsdWUtdC5taW5WYWx1ZSkvKHQubWF4VmFsdWUtdC5taW5WYWx1ZSkpLHM/ZS5yZWN0KEIsaixjLC1oKTplLnJlY3QoQixqLGgsYyl9XFxcInByb2dyZXNzXFxcIiE9PWkmJnQuYmFyU3Ryb2tlV2lkdGgmJihlLmxpbmVXaWR0aD11LGUuc3Ryb2tlU3R5bGU9dC5jb2xvckJhclN0cm9rZSxlLnN0cm9rZSgpKSxcXFwicHJvZ3Jlc3NcXFwiIT09aSYmdC5jb2xvckJhcj8oZS5maWxsU3R5bGU9dC5jb2xvckJhckVuZD9UZS5saW5lYXJHcmFkaWVudChlLHQuY29sb3JCYXIsdC5jb2xvckJhckVuZCxoLHMscz9wOmcpOnQuY29sb3JCYXIsZS5maWxsKCkpOlxcXCJwcm9ncmVzc1xcXCI9PT1pJiZ0LmNvbG9yQmFyUHJvZ3Jlc3MmJihlLmZpbGxTdHlsZT10LmNvbG9yQmFyUHJvZ3Jlc3NFbmQ/VGUubGluZWFyR3JhZGllbnQoZSx0LmNvbG9yQmFyUHJvZ3Jlc3MsdC5jb2xvckJhclByb2dyZXNzRW5kLHcscyxzP3A6Zyk6dC5jb2xvckJhclByb2dyZXNzLGUuZmlsbCgpKSxlLmNsb3NlUGF0aCgpLHQuYmFyQmVnaW5DaXJjbGUmJihlLmJhckRpbWVuc2lvbnMucmFkaXVzKz11KSxlLmJhckRpbWVuc2lvbnMuYmFyV2lkdGgrPXUsZS5iYXJEaW1lbnNpb25zLmJhckxlbmd0aCs9dX1mdW5jdGlvbiBYKGUsdCxpLHIsbyxuKXtGKGUsdCxcXFwiXFxcIixpLHIsbyxuKX1mdW5jdGlvbiBZKGUsdCl7cmV0dXJuIHQubmVlZGxlU2lkZSE9PWV8fHQudGlja1NpZGUhPT1lfHx0Lm51bWJlclNpZGUhPT1lfWZ1bmN0aW9uIFUoZSx0LGkscixvLG4pe3QuYmFyUHJvZ3Jlc3MmJkYoZSx0LFxcXCJwcm9ncmVzc1xcXCIsaSxyLG8sbil9ZnVuY3Rpb24gcShlLHQpe3ZhciBpPWUuYmFyRGltZW5zaW9ucyxyPWkuaXNWZXJ0aWNhbCxvPWkud2lkdGgsbj1pLmxlbmd0aCxhPWkuYmFyV2lkdGgsbD1pLmJhck9mZnNldCxzPWkuYmFyTWFyZ2luLGQ9aS5YLGM9aS5ZLGg9aS50aWNrc0xlbmd0aCx1PWkudGlja3NQYWRkaW5nLGY9byoocGFyc2VGbG9hdCh0LmhpZ2hsaWdodHNXaWR0aCl8fDApLzEwMDtpZih0LmhpZ2hsaWdodHMmJmYpe3ZhciBtPVxcXCJyaWdodFxcXCIhPT10LnRpY2tTaWRlLHY9XFxcImxlZnRcXFwiIT09dC50aWNrU2lkZSxiPTAsZz10LmhpZ2hsaWdodHMubGVuZ3RoLHA9KG8tYSkvMix3PXQubWF4VmFsdWUtdC5taW5WYWx1ZSx5PXdlKHI/ZCtwOmQrcytsKSxrPWYseD1yP2Mrbi1zLWw6YytwLFQ9d2UoKHQudGlja3NXaWR0aC8xMDArdSkqbykrKGYtdC50aWNrc1dpZHRoLzEwMCpvKSxTPXdlKGErdSpvKTtmb3IoZS5zYXZlKCk7YjxnO2IrKyl7dmFyIFc9dC5oaWdobGlnaHRzW2JdLE89aCp5ZSh0Lm1pblZhbHVlLVcuZnJvbSkvdyxWPWgqeWUoKFcudG8tVy5mcm9tKS93KTtlLmJlZ2luUGF0aCgpLGUuZmlsbFN0eWxlPVcuY29sb3Iscj8obSYmZS5yZWN0KHktVCx4LU8saywtViksdiYmZS5yZWN0KHkrUyx4LU8saywtVikpOihtJiZlLnJlY3QoeStPLHgtVCxWLGspLHYmJmUucmVjdCh5K08seCtTLFYsaykpLGUuZmlsbCgpLGUuY2xvc2VQYXRoKCl9fX1mdW5jdGlvbiBIKGUsdCxpLHIsbyl7ZS5iZWdpblBhdGgoKSxlLm1vdmVUbyh0LGkpLGUubGluZVRvKHIsbyksZS5zdHJva2UoKSxlLmNsb3NlUGF0aCgpLGUuc2F2ZSgpfWZ1bmN0aW9uIEooZSx0LGkscixvLG4sYSxsLHMpe3ZhciBkPWUuYmFyRGltZW5zaW9ucyxjPWQuaXNWZXJ0aWNhbCxoPWQubGVuZ3RoLHU9ZC5iYXJXaWR0aCxmPWQuYmFyT2Zmc2V0LG09ZC5iYXJNYXJnaW4sdj1kLnBpeGVsUmF0aW8sYj1kLndpZHRoLGc9ZC5YLHA9ZC5ZLHc9ZC50aWNrc0xlbmd0aCx5PWQudGlja3NQYWRkaW5nLGs9KGItdSkvMix4PXZvaWQgMCxUPXZvaWQgMCxTPTAsVz1pLmxlbmd0aCxPPXZvaWQgMCxWPXMqYixQPWsteSpiLE09ayt1K1YreSpiLEE9dCBpbnN0YW5jZW9mIEFycmF5P3Q6bmV3IEFycmF5KGkubGVuZ3RoKS5maWxsKHQpO2UubGluZVdpZHRoPWwqdixlLnNhdmUoKTtmb3IodmFyIEI9dy8oby1yKTtTPFc7UysrKU89aVtTXSxlLnN0cm9rZVN0eWxlPUFbU10sYz8oVD1wK2gtbS1mKyhyLU8pKkIsbiYmKHg9ZytQLEgoZSx4LFQsd2UoeC1WKSxUKSksYSYmKHg9ZytNLEgoZSx4LFQsd2UoeC1WKSxUKSkpOih4PWcrbStmLShyLU8pKkIsbiYmKFQ9cCtQLEgoZSx4LFQseCx3ZShULVYpKSksYSYmKFQ9cCtNLEgoZSx4LHdlKFQpLHgsVC1WKSkpfWZ1bmN0aW9uICQoZSx0KXt2YXIgaT1UZS5wcmVwYXJlVGlja3ModCkscj1sZShpLDIpLG89clswXSxuPXJbMV0sYT0yLGw9KHQubWF4VmFsdWUtdC5taW5WYWx1ZSkvKHQubWFqb3JUaWNrcy5sZW5ndGgtMSkscz10LmNvbG9yTWFqb3JUaWNrcyBpbnN0YW5jZW9mIEFycmF5P3QuY29sb3JNYWpvclRpY2tzOm5ldyBBcnJheSh0Lm1ham9yVGlja3MubGVuZ3RoKS5maWxsKHQuY29sb3JTdHJva2VUaWNrc3x8dC5jb2xvck1ham9yVGlja3MpO2lmKEooZSxzLHQuZXhhY3RUaWNrcz90Lm1ham9yVGlja3M6dC5tYWpvclRpY2tzLm1hcChmdW5jdGlvbihlLGkpe3JldHVybiB0Lm1pblZhbHVlK2wqaX0pLHQubWluVmFsdWUsdC5tYXhWYWx1ZSxvLG4sYSx0LnRpY2tzV2lkdGgvMTAwKSx0LnN0cm9rZVRpY2tzKXt2YXIgZD1lLmJhckRpbWVuc2lvbnMsYz1kLmlzVmVydGljYWwsaD1kLmxlbmd0aCx1PWQud2lkdGgsZj1kLmJhcldpZHRoLG09ZC5iYXJNYXJnaW4sdj1kLmJhck9mZnNldCxiPWQuWCxnPWQuWSxwPWQudGlja3NMZW5ndGgsdz1kLnBpeGVsUmF0aW8seT1kLnRpY2tzUGFkZGluZyxrPSh1LWYpLzIrZit5KnUseD0odS1mKS8yLXkqdSxUPXZvaWQgMCxTPXZvaWQgMCxXPXZvaWQgMCxPPXZvaWQgMDtlLnN0cm9rZVN0eWxlPXQuY29sb3JTdHJva2VUaWNrc3x8c1swXSxhKj13LGM/KFM9ZytoLW0tdithLzIsTz1TLXAtYSxvJiYoVz1UPXdlKGIreCksWihlLFQsUyxXLE8pKSxuJiYoVz1UPXdlKGIrayksWihlLFQsUyxXLE8pKSk6KFQ9YittK3YtYS8yLFc9VCtwK2EsbyYmKE89Uz13ZShnK3gpLFooZSxULFMsVyxPKSksbiYmKE89Uz13ZShnK2spLFooZSxULFMsVyxPKSkpfX1mdW5jdGlvbiBaKGUsdCxpLHIsbyl7ZS5iZWdpblBhdGgoKSxlLm1vdmVUbyh0LGkpLGUubGluZVRvKHIsbyksZS5zdHJva2UoKSxlLmNsb3NlUGF0aCgpfWZ1bmN0aW9uIEsoZSx0KXt2YXIgaT1UZS5wcmVwYXJlVGlja3ModCkscj1sZShpLDIpLG89clswXSxuPXJbMV0sYT1bXSxsPXQubWluVmFsdWUscz1NYXRoLmFicyh0Lm1pbm9yVGlja3MpfHwwLGQ9cz8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKS8ocyoodC5tYWpvclRpY2tzLmxlbmd0aC0xKSk6MDtpZihzKWlmKHQuZXhhY3RUaWNrcylmb3IodmFyIGM9eGUubW9kKHQubWFqb3JUaWNrc1swXSxzKXx8MDtsPHQubWF4VmFsdWU7bCs9cyljK2w8dC5tYXhWYWx1ZSYmYS5wdXNoKGMrbCk7ZWxzZSBmb3IoO2w8dC5tYXhWYWx1ZTtsKz1kKWEucHVzaChsKTtKKGUsdC5jb2xvck1pbm9yVGlja3N8fHQuY29sb3JTdHJva2VUaWNrcyxhLHQubWluVmFsdWUsdC5tYXhWYWx1ZSxvLG4sMSx0LnRpY2tzV2lkdGhNaW5vci8xMDApfWZ1bmN0aW9uIFEoZSx0KXt2YXIgaT1lLmJhckRpbWVuc2lvbnMscj1pLmlzVmVydGljYWwsbz1pLmxlbmd0aCxuPWkud2lkdGgsYT1pLmJhcldpZHRoLGw9aS5iYXJNYXJnaW4scz1pLmJhck9mZnNldCxkPWkuWCxjPWkuWSxoPWkudGlja3NMZW5ndGgsdT1pLnRpY2tzUGFkZGluZyxmPXQubWF4VmFsdWUtdC5taW5WYWx1ZSxtPWYvKHQubWFqb3JUaWNrcy5sZW5ndGgtMSksdj10LmV4YWN0VGlja3M/dC5tYWpvclRpY2tzOnQubWFqb3JUaWNrcy5tYXAoZnVuY3Rpb24oZSxpKXtyZXR1cm4gdC5taW5WYWx1ZSttKml9KSxiPXYubGVuZ3RoLGc9XFxcInJpZ2h0XFxcIiE9PXQubnVtYmVyU2lkZSxwPVxcXCJsZWZ0XFxcIiE9PXQubnVtYmVyU2lkZSx3PXQuZm9udE51bWJlcnNTaXplKm4vMjAwLHk9MCxrPSh0LnRpY2tzV2lkdGgvMTAwKzIqdSkqbix4PShuLWEpLzItayxUPShuLWEpLzIrYStrLFM9dm9pZCAwLFc9dm9pZCAwLE89dm9pZCAwLFY9dm9pZCAwLFA9dC5jb2xvck51bWJlcnMgaW5zdGFuY2VvZiBBcnJheT90LmNvbG9yTnVtYmVyczpuZXcgQXJyYXkoYikuZmlsbCh0LmNvbG9yTnVtYmVycyksTT10Lm51bWJlcnNNYXJnaW4vMTAwKm47Zm9yKGUuZm9udD1UZS5mb250KHQsXFxcIk51bWJlcnNcXFwiLG4vMjAwKSxlLmxpbmVXaWR0aD0wLGUudGV4dEFsaWduPVxcXCJjZW50ZXJcXFwiO3k8Yjt5KyspZS5maWxsU3R5bGU9UFt5XSxWPXQubWFqb3JUaWNrc1t5XSxPPXQuZXhhY3RUaWNrcz9oKigodlt5XS10Lm1pblZhbHVlKS9mKTp5KmgvKGItMSkscj8oVz1jK28tbC1zLU8rdy8zLGcmJihlLnRleHRBbGlnbj1cXFwicmlnaHRcXFwiLGUuZmlsbFRleHQoVixkK3gtTSxXKSkscCYmKGUudGV4dEFsaWduPVxcXCJsZWZ0XFxcIixlLmZpbGxUZXh0KFYsZCtUK00sVykpKTooZS5tZWFzdXJlVGV4dChWKS53aWR0aCxTPWQrbCtzK08sZyYmZS5maWxsVGV4dChWLFMsYyt4LU0pLHAmJmUuZmlsbFRleHQoVixTLGMrVCt3K00pKX1mdW5jdGlvbiBlZShlLHQpe2lmKHQudGl0bGUpe3ZhciBpPWUuYmFyRGltZW5zaW9ucyxyPWkuaXNWZXJ0aWNhbCxvPWkud2lkdGgsbj1pLmxlbmd0aCxhPWkuYmFzZVgsbD1pLmJhc2VZLHM9aS50aXRsZU1hcmdpbixkPXQuZm9udFRpdGxlU2l6ZSpvLzIwMCxjPXdlKGErKHI/bzpuKS8yKSxoPXdlKGwrcy8yLShyP2Q6ZC8yKS0uMDI1KihyP246bykpO2Uuc2F2ZSgpLGUudGV4dEFsaWduPVxcXCJjZW50ZXJcXFwiLGUuZmlsbFN0eWxlPXQuY29sb3JUaXRsZSxlLmZvbnQ9VGUuZm9udCh0LFxcXCJUaXRsZVxcXCIsby8yMDApLGUubGluZVdpZHRoPTAsZS5maWxsVGV4dCh0LnRpdGxlLGMsaCxyP286bil9fWZ1bmN0aW9uIHRlKGUsdCl7aWYodC51bml0cyl7dmFyIGk9ZS5iYXJEaW1lbnNpb25zLHI9aS5pc1ZlcnRpY2FsLG89aS53aWR0aCxuPWkubGVuZ3RoLGE9aS5iYXNlWCxsPWkuYmFzZVkscz1pLnVuaXRzTWFyZ2luLGQ9dC5mb250VW5pdHNTaXplKm8vMjAwLGM9d2UoYSsocj9vOm4pLzIpLGg9d2UobCsocj9uOm8pK3MvMi1kLzIpO2Uuc2F2ZSgpLGUudGV4dEFsaWduPVxcXCJjZW50ZXJcXFwiLGUuZmlsbFN0eWxlPXQuY29sb3JVbml0cyxlLmZvbnQ9VGUuZm9udCh0LFxcXCJVbml0c1xcXCIsby8yMDApLGUubGluZVdpZHRoPTAsZS5maWxsVGV4dCh0LnVuaXRzLGMsaCxyP286bil9fWZ1bmN0aW9uIGllKGUsdCl7aWYodC5uZWVkbGUpe3ZhciBpPWUuYmFyRGltZW5zaW9ucyxyPWkuaXNWZXJ0aWNhbCxvPWkud2lkdGgsbj1pLmxlbmd0aCxhPWkuYmFyV2lkdGgsbD1pLmJhck9mZnNldCxzPWkuYmFyTWFyZ2luLGQ9aS50aWNrc0xlbmd0aCxjPWkuWCxoPWkuWSx1PWkudGlja3NQYWRkaW5nLGY9XFxcInJpZ2h0XFxcIiE9PXQubmVlZGxlU2lkZSxtPVxcXCJsZWZ0XFxcIiE9PXQubmVlZGxlU2lkZSx2PWQqKFRlLm5vcm1hbGl6ZWRWYWx1ZSh0KS5pbmRlbnRlZC10Lm1pblZhbHVlKS8odC5tYXhWYWx1ZS10Lm1pblZhbHVlKSxiPSh0LnRpY2tzV2lkdGgvMTAwK3UpKm8sZz1hLzIrYixwPWcqKHQubmVlZGxlRW5kLzEwMCksdz12b2lkIDAseT12b2lkIDAsaz12b2lkIDAseD12b2lkIDAsVD1cXFwiYXJyb3dcXFwiPT09dC5uZWVkbGVUeXBlLnRvTG93ZXJDYXNlKCk/bmU6b2UsUz0oby1hKS8yLFc9ZyoodC5uZWVkbGVTdGFydC8xMDApLE89Uy1iLVcsVj1TK2ErYitXO2Uuc2F2ZSgpLFRlLmRyYXdOZWVkbGVTaGFkb3coZSx0KSxyPyhrPXdlKGgrbi1zLWwtdiksZiYmKHc9d2UoYytPKSx5PXcrcCxUKGUsdCx3LGsseSxrLHApKSxtJiYodz13ZShjK1YpLHk9dy1wLFQoZSx0LHcsayx5LGsscCwhMCkpKToodz13ZShjK3MrbCt2KSxmJiYoaz13ZShoK08pLHg9aytwLFQoZSx0LHcsayx3LHgscCkpLG0mJihrPXdlKGgrVikseD1rLXAsVChlLHQsdyxrLHcseCxwLCEwKSkpLGUucmVzdG9yZSgpfX1mdW5jdGlvbiByZShlLHQsaSxyKXtyZXR1cm4gdC5jb2xvck5lZWRsZUVuZD9UZS5saW5lYXJHcmFkaWVudChlLHI/dC5jb2xvck5lZWRsZUVuZDp0LmNvbG9yTmVlZGxlLHI/dC5jb2xvck5lZWRsZTp0LmNvbG9yTmVlZGxlRW5kLGksIWUuYmFyRGltZW5zaW9ucy5pc1ZlcnRpY2FsKTp0LmNvbG9yTmVlZGxlfWZ1bmN0aW9uIG9lKGUsdCxpLHIsbyxuLGEsbCl7ZS5saW5lV2lkdGg9dC5uZWVkbGVXaWR0aCxlLnN0cm9rZVN0eWxlPXJlKGUsdCxhLGwpLGUuYmVnaW5QYXRoKCksZS5tb3ZlVG8oaSxyKSxlLmxpbmVUbyhvLG4pLGUuc3Ryb2tlKCksZS5jbG9zZVBhdGgoKX1mdW5jdGlvbiBuZShlLHQsaSxyLG8sbixhLGwpe3ZhciBzPXdlKC40KmEpLGQ9YS1zLGM9aT09PW8saD10Lm5lZWRsZVdpZHRoLzI7ZS5maWxsU3R5bGU9cmUoZSx0LGEsbCksZS5iZWdpblBhdGgoKSxjPyhyPm4mJihkKj0tMSksZS5tb3ZlVG8oaS1oLHIpLGUubGluZVRvKGkraCxyKSxlLmxpbmVUbyhpK2gscitkKSxlLmxpbmVUbyhpLG4pLGUubGluZVRvKGktaCxyK2QpLGUubGluZVRvKGktaCxyKSk6KGk+byYmKGQqPS0xKSxlLm1vdmVUbyhpLHItaCksZS5saW5lVG8oaSxyK2gpLGUubGluZVRvKGkrZCxyK2gpLGUubGluZVRvKG8sciksZS5saW5lVG8oaStkLHItaCksZS5saW5lVG8oaSxyLWgpKSxlLmZpbGwoKSxlLmNsb3NlUGF0aCgpfWZ1bmN0aW9uIGFlKGUsdCxpLHIsbyxuLGEpe3ZhciBsPShwYXJzZUZsb2F0KHQuZm9udFZhbHVlU2l6ZSl8fDApKm4vMjAwLHM9KC4xMSphLWwpLzI7ZS5iYXJEaW1lbnNpb25zLmlzVmVydGljYWwmJlRlLmRyYXdWYWx1ZUJveChlLHQsaSxyK24vMixvK2EtbC1zLG4pfXZhciBsZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt2YXIgaT1bXSxyPSEwLG89ITEsbj12b2lkIDA7dHJ5e2Zvcih2YXIgYSxsPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEocj0oYT1sLm5leHQoKSkuZG9uZSkmJihpLnB1c2goYS52YWx1ZSksIXR8fGkubGVuZ3RoIT09dCk7cj0hMCk7fWNhdGNoKGUpe289ITAsbj1lfWZpbmFsbHl7dHJ5eyFyJiZsLnJldHVybiYmbC5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgbn19cmV0dXJuIGl9cmV0dXJuIGZ1bmN0aW9uKHQsaSl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdDtpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKXJldHVybiBlKHQsaSk7dGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVxcXCIpfX0oKSxzZT1mdW5jdGlvbiBlKHQsaSxyKXtudWxsPT09dCYmKHQ9RnVuY3Rpb24ucHJvdG90eXBlKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsaSk7aWYodm9pZCAwPT09byl7dmFyIG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBudWxsPT09bj92b2lkIDA6ZShuLGkscil9aWYoXFxcInZhbHVlXFxcImluIG8pcmV0dXJuIG8udmFsdWU7dmFyIGE9by5nZXQ7aWYodm9pZCAwIT09YSlyZXR1cm4gYS5jYWxsKHIpfSxkZT1mdW5jdGlvbiBlKHQsaSxyLG8pe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxpKTtpZih2b2lkIDA9PT1uKXt2YXIgYT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7bnVsbCE9PWEmJmUoYSxpLHIsbyl9ZWxzZSBpZihcXFwidmFsdWVcXFwiaW4gbiYmbi53cml0YWJsZSluLnZhbHVlPXI7ZWxzZXt2YXIgbD1uLnNldDt2b2lkIDAhPT1sJiZsLmNhbGwobyxyKX1yZXR1cm4gcn0sY2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXFxcInZhbHVlXFxcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsaSxyKXtyZXR1cm4gaSYmZSh0LnByb3RvdHlwZSxpKSxyJiZlKHQsciksdH19KCk7T2JqZWN0LmFzc2lnbnx8T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCxcXFwiYXNzaWduXFxcIix7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT1lfHxudWxsPT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY29udmVydCBmaXJzdCBhcmd1bWVudCB0byBvYmplY3RcXFwiKTtmb3IodmFyIGk9T2JqZWN0KGUpLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXt2YXIgbz1hcmd1bWVudHNbcl07aWYodm9pZCAwIT09byYmbnVsbCE9PW8pZm9yKHZhciBuPU9iamVjdC5rZXlzKE9iamVjdChvKSksYT0wLGw9bi5sZW5ndGg7YTxsO2ErKyl7dmFyIHM9blthXSxkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobyxzKTt2b2lkIDAhPT1kJiZkLmVudW1lcmFibGUmJihpW3NdPW9bc10pfX1yZXR1cm4gaX19KSxBcnJheS5wcm90b3R5cGUuaW5kZXhPZnx8T2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxcXFwiaW5kZXhPZlxcXCIse3ZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk7aWYobnVsbD09PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcignXFxcInRoaXNcXFwiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTt2YXIgcj1PYmplY3QodGhpcyksbz1yLmxlbmd0aD4+PjA7aWYoMD09PW8pcmV0dXJuLTE7dmFyIG49K3R8fDA7aWYoTWF0aC5hYnMobik9PT0xLzAmJihuPTApLG4+PW8pcmV0dXJuLTE7Zm9yKGk9TWF0aC5tYXgobj49MD9uOm8tTWF0aC5hYnMobiksMCk7aTxvOyl7aWYoaSBpbiByJiZyW2ldPT09ZSlyZXR1cm4gaTtpKyt9cmV0dXJuLTF9fSksQXJyYXkucHJvdG90eXBlLmZpbGx8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsXFxcImZpbGxcXFwiLHt2YWx1ZTpmdW5jdGlvbihlKXtpZihudWxsPT09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJ0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWRcXFwiKTtmb3IodmFyIHQ9T2JqZWN0KHRoaXMpLGk9dC5sZW5ndGg+Pj4wLHI9YXJndW1lbnRzWzFdLG89cj4+MCxuPW88MD9NYXRoLm1heChpK28sMCk6TWF0aC5taW4obyxpKSxhPWFyZ3VtZW50c1syXSxsPXZvaWQgMD09PWE/aTphPj4wLHM9bDwwP01hdGgubWF4KGkrbCwwKTpNYXRoLm1pbihsLGkpO248czspdFtuXT1lLG4rKztyZXR1cm4gdH19KSxcXFwidW5kZWZpbmVkXFxcIj09dHlwZW9mIHdpbmRvdyYmKHdpbmRvdz1cXFwidW5kZWZpbmVkXFxcIj09dHlwZW9mIGdsb2JhbD97fTpnbG9iYWwpO3ZhciBoZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtvKHRoaXMsZSksdGhpcy5fZXZlbnRzPXt9LHRoaXMuYWRkTGlzdGVuZXI9dGhpcy5vbix0aGlzLnJlbW92ZUxpc3RlbmVyPXRoaXMub2ZmfXJldHVybiBjZShlLFt7a2V5OlxcXCJlbWl0XFxcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLl9ldmVudHNbZV0pe2Zvcih2YXIgdD0wLGk9dGhpcy5fZXZlbnRzW2VdLmxlbmd0aCxyPWFyZ3VtZW50cy5sZW5ndGgsbz1BcnJheShyPjE/ci0xOjApLG49MTtuPHI7bisrKW9bbi0xXT1hcmd1bWVudHNbbl07Zm9yKDt0PGk7dCsrKXRoaXMuX2V2ZW50c1tlXVt0XSYmdGhpcy5fZXZlbnRzW2VdW3RdLmFwcGx5KHRoaXMsbyl9fX0se2tleTpcXFwib25jZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsaT1BcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKWlbci0xXT1hcmd1bWVudHNbcl07Zm9yKHZhciBvPTAsbj1pLmxlbmd0aCxhPXRoaXM7bzxuO28rKykhZnVuY3Rpb24oKXt2YXIgdD1pW29dLHI9ZnVuY3Rpb24gaSgpe2Eub2ZmKGUsaSksdC5hcHBseShhLGFyZ3VtZW50cyl9O2lbb109cn0oKTt0aGlzLm9uLmFwcGx5KHRoaXMsW2VdLmNvbmNhdChpKSl9fSx7a2V5OlxcXCJvblxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fZXZlbnRzW2VdfHwodGhpcy5fZXZlbnRzW2VdPVtdKTtmb3IodmFyIHQ9MCxpPWFyZ3VtZW50cy5sZW5ndGg8PTE/MDphcmd1bWVudHMubGVuZ3RoLTE7dDxpO3QrKyl0aGlzLl9ldmVudHNbZV0ucHVzaChhcmd1bWVudHMubGVuZ3RoPD10KzE/dm9pZCAwOmFyZ3VtZW50c1t0KzFdKX19LHtrZXk6XFxcIm9mZlxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5fZXZlbnRzW2VdKWZvcih2YXIgdD0wLGk9YXJndW1lbnRzLmxlbmd0aDw9MT8wOmFyZ3VtZW50cy5sZW5ndGgtMTt0PGk7dCsrKWZvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoPD10KzE/dm9pZCAwOmFyZ3VtZW50c1t0KzFdLG89dm9pZCAwO34obz10aGlzLl9ldmVudHNbZV0uaW5kZXhPZihyKSk7KXRoaXMuX2V2ZW50c1tlXS5zcGxpY2UobywxKX19LHtrZXk6XFxcInJlbW92ZUFsbExpc3RlbmVyc1xcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZGVsZXRlIHRoaXMuX2V2ZW50c1tlXX19LHtrZXk6XFxcImxpc3RlbmVyc1xcXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c319XSksZX0oKSx1ZT1uKFxcXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcXFwiKXx8ZnVuY3Rpb24oZSl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZSgobmV3IERhdGUpLmdldFRpbWUoKSl9LDFlMy82MCl9LGZlPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHF1YWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE1hdGgucG93KGUsMil9LGRlcXVhZDpmdW5jdGlvbihlKXtyZXR1cm4gMS1mZS5xdWFkKDEtZSl9LHF1aW50OmZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLnBvdyhlLDUpfSxkZXF1aW50OmZ1bmN0aW9uKGUpe3JldHVybiAxLU1hdGgucG93KDEtZSw1KX0sY3ljbGU6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtTWF0aC5zaW4oTWF0aC5hY29zKGUpKX0sZGVjeWNsZTpmdW5jdGlvbihlKXtyZXR1cm4gTWF0aC5zaW4oTWF0aC5hY29zKDEtZSkpfSxib3VuY2U6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtZmUuZGVib3VuY2UoMS1lKX0sZGVib3VuY2U6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsaT0xOzE7dCs9aSxpLz0yKWlmKGU+PSg3LTQqdCkvMTEpcmV0dXJuLU1hdGgucG93KCgxMS02KnQtMTEqZSkvNCwyKStNYXRoLnBvdyhpLDIpfSxlbGFzdGljOmZ1bmN0aW9uKGUpe3JldHVybiAxLWZlLmRlbGFzdGljKDEtZSl9LGRlbGFzdGljOmZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLnBvdygyLDEwKihlLTEpKSpNYXRoLmNvcygyMCpNYXRoLlBJKjEuNS8zKmUpfX0sbWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlxcXCJsaW5lYXJcXFwiLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjI1MCxyPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpmdW5jdGlvbigpe30sbj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106ZnVuY3Rpb24oKXt9O2lmKG8odGhpcyxlKSx0aGlzLmR1cmF0aW9uPWksdGhpcy5ydWxlPXQsdGhpcy5kcmF3PXIsdGhpcy5lbmQ9bixcXFwiZnVuY3Rpb25cXFwiIT10eXBlb2YgdGhpcy5kcmF3KXRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYW5pbWF0aW9uIGRyYXcgY2FsbGJhY2s6XFxcIixyKTtpZihcXFwiZnVuY3Rpb25cXFwiIT10eXBlb2YgdGhpcy5lbmQpdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhbmltYXRpb24gZW5kIGNhbGxiYWNrOlxcXCIsbil9cmV0dXJuIGNlKGUsW3trZXk6XFxcImFuaW1hdGVcXFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpczt0aGlzLmZyYW1lJiZ0aGlzLmNhbmNlbCgpO3ZhciByPXdpbmRvdy5wZXJmb3JtYW5jZSYmd2luZG93LnBlcmZvcm1hbmNlLm5vdz93aW5kb3cucGVyZm9ybWFuY2Uubm93KCk6bihcXFwiYW5pbWF0aW9uU3RhcnRUaW1lXFxcIil8fERhdGUubm93KCk7ZT1lfHx0aGlzLmRyYXcsdD10fHx0aGlzLmVuZCx0aGlzLmRyYXc9ZSx0aGlzLmVuZD10LHRoaXMuZnJhbWU9dWUoZnVuY3Rpb24obyl7cmV0dXJuIGEobyxlLHIsZmVbaS5ydWxlXXx8aS5ydWxlLGkuZHVyYXRpb24sdCxpKX0pfX0se2tleTpcXFwiY2FuY2VsXFxcIix2YWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMuZnJhbWUpeyhuKFxcXCJjYW5jZWxBbmltYXRpb25GcmFtZVxcXCIpfHxmdW5jdGlvbihlKXt9KSh0aGlzLmZyYW1lKSx0aGlzLmZyYW1lPW51bGx9fX0se2tleTpcXFwiZGVzdHJveVxcXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNhbmNlbCgpLHRoaXMuZHJhdz1udWxsLHRoaXMuZW5kPW51bGx9fV0pLGV9KCk7bWUucnVsZXM9ZmU7dmFyIHZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChpLHIsbil7byh0aGlzLHQpLHRoaXMub3B0aW9ucz1pLHRoaXMuZWxlbWVudD1yLnRvTG93ZXJDYXNlKCksdGhpcy50eXBlPXQudG9EYXNoZWQobiksdGhpcy5UeXBlPWVbbl0sdGhpcy5tdXRhdGlvbnNPYnNlcnZlZD0hMSx0aGlzLmlzT2JzZXJ2YWJsZT0hIXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyLHdpbmRvdy5HQVVHRVNfTk9fQVVUT19JTklUfHx0LmRvbVJlYWR5KHRoaXMudHJhdmVyc2UuYmluZCh0aGlzKSl9cmV0dXJuIGNlKHQsW3trZXk6XFxcImlzVmFsaWROb2RlXFxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4hKCFlLnRhZ05hbWV8fGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpIT09dGhpcy5lbGVtZW50fHxlLmdldEF0dHJpYnV0ZShcXFwiZGF0YS10eXBlXFxcIikhPT10aGlzLnR5cGUpfX0se2tleTpcXFwidHJhdmVyc2VcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRoaXMuZWxlbWVudCksdD0wLGk9ZS5sZW5ndGg7dDxpO3QrKyl0aGlzLnByb2Nlc3MoZVt0XSk7dGhpcy5pc09ic2VydmFibGUmJiF0aGlzLm11dGF0aW9uc09ic2VydmVkJiYobmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vYnNlcnZlLmJpbmQodGhpcykpLm9ic2VydmUoZG9jdW1lbnQuYm9keSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITAsYXR0cmlidXRlczohMCxjaGFyYWN0ZXJEYXRhOiEwLGF0dHJpYnV0ZU9sZFZhbHVlOiEwLGNoYXJhY3RlckRhdGFPbGRWYWx1ZTohMH0pLHRoaXMubXV0YXRpb25zT2JzZXJ2ZWQ9ITApfX0se2tleTpcXFwib2JzZXJ2ZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsaT1lLmxlbmd0aDt0PGk7dCsrKXt2YXIgcj1lW3RdO2lmKFxcXCJhdHRyaWJ1dGVzXFxcIj09PXIudHlwZSYmXFxcImRhdGEtdHlwZVxcXCI9PT1yLmF0dHJpYnV0ZU5hbWUmJnRoaXMuaXNWYWxpZE5vZGUoci50YXJnZXQpJiZyLm9sZFZhbHVlIT09dGhpcy50eXBlKXNldFRpbWVvdXQodGhpcy5wcm9jZXNzLmJpbmQodGhpcyxyLnRhcmdldCkpO2Vsc2UgaWYoci5hZGRlZE5vZGVzJiZyLmFkZGVkTm9kZXMubGVuZ3RoKWZvcih2YXIgbz0wLG49ci5hZGRlZE5vZGVzLmxlbmd0aDtvPG47bysrKXNldFRpbWVvdXQodGhpcy5wcm9jZXNzLmJpbmQodGhpcyxyLmFkZGVkTm9kZXNbb10pKX19fSx7a2V5OlxcXCJwcm9jZXNzXFxcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgaT10aGlzO2lmKCF0aGlzLmlzVmFsaWROb2RlKGUpKXJldHVybiBudWxsO3ZhciByPXZvaWQgMCxvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSksbj1udWxsO2ZvcihyIGluIG8paWYoby5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIGE9dC50b0F0dHJpYnV0ZU5hbWUociksbD10LnBhcnNlKGUuZ2V0QXR0cmlidXRlKGEpKTtudWxsIT09bCYmdm9pZCAwIT09bCYmKG9bcl09bCl9cmV0dXJuIG8ucmVuZGVyVG89ZSxuPW5ldyB0aGlzLlR5cGUobyksbi5kcmF3JiZuLmRyYXcoKSx0aGlzLmlzT2JzZXJ2YWJsZT8obi5vYnNlcnZlcj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihyKXtyLmZvckVhY2goZnVuY3Rpb24ocil7aWYoXFxcImF0dHJpYnV0ZXNcXFwiPT09ci50eXBlKXt2YXIgbz1yLmF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSxhPWUuZ2V0QXR0cmlidXRlKG8pLnRvTG93ZXJDYXNlKCk7aWYoXFxcImRhdGEtdHlwZVxcXCI9PT1vJiZhJiZhIT09aS50eXBlKW4ub2JzZXJ2ZXIuZGlzY29ubmVjdCgpLGRlbGV0ZSBuLm9ic2VydmVyLG4uZGVzdHJveSYmbi5kZXN0cm95KCk7ZWxzZSBpZihcXFwiZGF0YS1cXFwiPT09by5zdWJzdHIoMCw1KSl7dmFyIGw9by5zdWJzdHIoNSkuc3BsaXQoXFxcIi1cXFwiKS5tYXAoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpOmV9KS5qb2luKFxcXCJcXFwiKSxzPXt9O3NbbF09dC5wYXJzZShlLmdldEF0dHJpYnV0ZShyLmF0dHJpYnV0ZU5hbWUpKSxcXFwidmFsdWVcXFwiPT09bD9uJiYobi52YWx1ZT1zW2xdKTpuLnVwZGF0ZSYmbi51cGRhdGUocyl9fX0pfSksbi5vYnNlcnZlci5vYnNlcnZlKGUse2F0dHJpYnV0ZXM6ITB9KSxuKTpufX1dLFt7a2V5OlxcXCJwYXJzZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoXFxcInRydWVcXFwiPT09ZSlyZXR1cm4hMDtpZihcXFwiZmFsc2VcXFwiPT09ZSlyZXR1cm4hMTtpZihcXFwidW5kZWZpbmVkXFxcIiE9PWUpe2lmKFxcXCJudWxsXFxcIj09PWUpcmV0dXJuIG51bGw7aWYoL15bLSsjLlxcXFx3XFxcXGRcXFxcc10rKD86LFstKyMuXFxcXHdcXFxcZFxcXFxzXSopKyQvLnRlc3QoZSkpcmV0dXJuIGUuc3BsaXQoXFxcIixcXFwiKTt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2goZSl7fXJldHVybiBlfX19LHtrZXk6XFxcInRvRGFzaGVkXFxcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zcGxpdCgvKD89W0EtWl0pLyksaT0xLHI9dC5sZW5ndGgsbz10WzBdLnRvTG93ZXJDYXNlKCk7aTxyO2krKylvKz1cXFwiLVxcXCIrdFtpXS50b0xvd2VyQ2FzZSgpO3JldHVybiBvfX0se2tleTpcXFwidG9DYW1lbENhc2VcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdLGk9ZS5zcGxpdCgvLS8pLHI9MCxvPWkubGVuZ3RoLG49XFxcIlxcXCI7cjxvO3IrKyluKz1yfHx0P2lbcl1bMF0udG9VcHBlckNhc2UoKStpW3JdLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpOmlbcl0udG9Mb3dlckNhc2UoKTtyZXR1cm4gbn19LHtrZXk6XFxcInRvQXR0cmlidXRlTmFtZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuXFxcImRhdGEtXFxcIit0LnRvRGFzaGVkKGUpfX0se2tleTpcXFwiZG9tUmVhZHlcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKC9jb21wfGludGVyfGxvYWRlZC8udGVzdCgod2luZG93LmRvY3VtZW50fHx7fSkucmVhZHlTdGF0ZStcXFwiXFxcIikpcmV0dXJuIGUoKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcXFwiRE9NQ29udGVudExvYWRlZFxcXCIsZSwhMSk6d2luZG93LmF0dGFjaEV2ZW50JiZ3aW5kb3cuYXR0YWNoRXZlbnQoXFxcIm9ubG9hZFxcXCIsZSl9fV0pLHR9KCksYmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsaSxyKXtvKHRoaXMsZSksZS5jb2xsZWN0aW9uLnB1c2godGhpcyksdGhpcy53aWR0aD1pfHwwLHRoaXMuaGVpZ2h0PXJ8fDAsdGhpcy5lbGVtZW50PXQsdGhpcy5pbml0KCl9cmV0dXJuIGNlKGUsW3trZXk6XFxcImluaXRcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9ZS5waXhlbFJhdGlvO3RoaXMuZWxlbWVudC53aWR0aD10aGlzLndpZHRoKnQsdGhpcy5lbGVtZW50LmhlaWdodD10aGlzLmhlaWdodCp0LHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aD10aGlzLndpZHRoK1xcXCJweFxcXCIsdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodD10aGlzLmhlaWdodCtcXFwicHhcXFwiLHRoaXMuZWxlbWVudENsb25lPXRoaXMuZWxlbWVudC5jbG9uZU5vZGUoITApLHRoaXMuY29udGV4dD10aGlzLmVsZW1lbnQuZ2V0Q29udGV4dChcXFwiMmRcXFwiKSx0aGlzLmNvbnRleHRDbG9uZT10aGlzLmVsZW1lbnRDbG9uZS5nZXRDb250ZXh0KFxcXCIyZFxcXCIpLHRoaXMuZHJhd1dpZHRoPXRoaXMuZWxlbWVudC53aWR0aCx0aGlzLmRyYXdIZWlnaHQ9dGhpcy5lbGVtZW50LmhlaWdodCx0aGlzLmRyYXdYPXRoaXMuZHJhd1dpZHRoLzIsdGhpcy5kcmF3WT10aGlzLmRyYXdIZWlnaHQvMix0aGlzLm1pblNpZGU9dGhpcy5kcmF3WDx0aGlzLmRyYXdZP3RoaXMuZHJhd1g6dGhpcy5kcmF3WSx0aGlzLmVsZW1lbnRDbG9uZS5pbml0aWFsaXplZD0hMSx0aGlzLmNvbnRleHRDbG9uZS50cmFuc2xhdGUodGhpcy5kcmF3WCx0aGlzLmRyYXdZKSx0aGlzLmNvbnRleHRDbG9uZS5zYXZlKCksdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmRyYXdYLHRoaXMuZHJhd1kpLHRoaXMuY29udGV4dC5zYXZlKCksdGhpcy5jb250ZXh0Lm1heD10aGlzLmNvbnRleHRDbG9uZS5tYXg9dGhpcy5taW5TaWRlLHRoaXMuY29udGV4dC5tYXhSYWRpdXM9dGhpcy5jb250ZXh0Q2xvbmUubWF4UmFkaXVzPW51bGx9fSx7a2V5OlxcXCJkZXN0cm95XFxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWUuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMpO350JiZlLmNvbGxlY3Rpb24uc3BsaWNlKHQsMSksdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgtdGhpcy5kcmF3WCwtdGhpcy5kcmF3WSx0aGlzLmRyYXdXaWR0aCx0aGlzLmRyYXdIZWlnaHQpLHRoaXMuY29udGV4dC5tYXg9bnVsbCxkZWxldGUgdGhpcy5jb250ZXh0Lm1heCx0aGlzLmNvbnRleHQubWF4UmFkaXVzPW51bGwsZGVsZXRlIHRoaXMuY29udGV4dC5tYXhSYWRpdXMsdGhpcy5jb250ZXh0PW51bGwsdGhpcy5jb250ZXh0Q2xvbmU9bnVsbCx0aGlzLmVsZW1lbnRDbG9uZT1udWxsLHRoaXMuZWxlbWVudD1udWxsLHRoaXMub25SZWRyYXc9bnVsbH19LHtrZXk6XFxcImNvbW1pdFxcXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1lLnBpeGVsUmF0aW87cmV0dXJuIDEhPT10JiYodGhpcy5jb250ZXh0Q2xvbmUuc2NhbGUodCx0KSx0aGlzLmNvbnRleHRDbG9uZS5zYXZlKCkpLHRoaXN9fSx7a2V5OlxcXCJyZWRyYXdcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXMub25SZWRyYXcmJnRoaXMub25SZWRyYXcoKSx0aGlzfX1dLFt7a2V5OlxcXCJyZWRyYXdcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsaT1lLmNvbGxlY3Rpb24ubGVuZ3RoO3Q8aTt0KyspZS5jb2xsZWN0aW9uW3RdLnJlZHJhdygpfX0se2tleTpcXFwicGl4ZWxSYXRpb1xcXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxfX1dKSxlfSgpO2JlLmNvbGxlY3Rpb249W10sd2luZG93Lm1hdGNoTWVkaWEmJndpbmRvdy5tYXRjaE1lZGlhKFxcXCJzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpXFxcIikuYWRkTGlzdGVuZXIoYmUucmVkcmF3KTt2YXIgZ2U9e3JlbmRlclRvOm51bGwsd2lkdGg6MCxoZWlnaHQ6MCxtaW5WYWx1ZTowLG1heFZhbHVlOjEwMCx2YWx1ZTowLHVuaXRzOiExLGV4YWN0VGlja3M6ITEsbWFqb3JUaWNrczpbMCwyMCw0MCw2MCw4MCwxMDBdLG1pbm9yVGlja3M6MTAsc3Ryb2tlVGlja3M6ITAsYW5pbWF0ZWRWYWx1ZTohMSxhbmltYXRlT25Jbml0OiExLHRpdGxlOiExLGJvcmRlcnM6ITAsbnVtYmVyc01hcmdpbjoxLGxpc3RlbmVyczpudWxsLHZhbHVlSW50OjMsdmFsdWVEZWM6MixtYWpvclRpY2tzSW50OjEsbWFqb3JUaWNrc0RlYzowLGFuaW1hdGlvbjohMCxhbmltYXRpb25EdXJhdGlvbjo1MDAsYW5pbWF0aW9uUnVsZTpcXFwiY3ljbGVcXFwiLGNvbG9yUGxhdGU6XFxcIiNmZmZcXFwiLGNvbG9yUGxhdGVFbmQ6XFxcIlxcXCIsY29sb3JNYWpvclRpY2tzOlxcXCIjNDQ0XFxcIixcXG5jb2xvck1pbm9yVGlja3M6XFxcIiM2NjZcXFwiLGNvbG9yU3Ryb2tlVGlja3M6XFxcIlxcXCIsY29sb3JUaXRsZTpcXFwiIzg4OFxcXCIsY29sb3JVbml0czpcXFwiIzg4OFxcXCIsY29sb3JOdW1iZXJzOlxcXCIjNDQ0XFxcIixjb2xvck5lZWRsZTpcXFwicmdiYSgyNDAsMTI4LDEyOCwxKVxcXCIsY29sb3JOZWVkbGVFbmQ6XFxcInJnYmEoMjU1LDE2MCwxMjIsLjkpXFxcIixjb2xvclZhbHVlVGV4dDpcXFwiIzQ0NFxcXCIsY29sb3JWYWx1ZVRleHRTaGFkb3c6XFxcInJnYmEoMCwwLDAsMC4zKVxcXCIsY29sb3JCb3JkZXJTaGFkb3c6XFxcInJnYmEoMCwwLDAsMC41KVxcXCIsY29sb3JCb3JkZXJPdXRlcjpcXFwiI2RkZFxcXCIsY29sb3JCb3JkZXJPdXRlckVuZDpcXFwiI2FhYVxcXCIsY29sb3JCb3JkZXJNaWRkbGU6XFxcIiNlZWVcXFwiLGNvbG9yQm9yZGVyTWlkZGxlRW5kOlxcXCIjZjBmMGYwXFxcIixjb2xvckJvcmRlcklubmVyOlxcXCIjZmFmYWZhXFxcIixjb2xvckJvcmRlcklubmVyRW5kOlxcXCIjY2NjXFxcIixjb2xvclZhbHVlQm94UmVjdDpcXFwiIzg4OFxcXCIsY29sb3JWYWx1ZUJveFJlY3RFbmQ6XFxcIiM2NjZcXFwiLGNvbG9yVmFsdWVCb3hCYWNrZ3JvdW5kOlxcXCIjYmFiYWIyXFxcIixjb2xvclZhbHVlQm94U2hhZG93OlxcXCJyZ2JhKDAsMCwwLDEpXFxcIixjb2xvck5lZWRsZVNoYWRvd1VwOlxcXCJyZ2JhKDIsMjU1LDI1NSwwLjIpXFxcIixjb2xvck5lZWRsZVNoYWRvd0Rvd246XFxcInJnYmEoMTg4LDE0MywxNDMsMC40NSlcXFwiLGNvbG9yQmFyU3Ryb2tlOlxcXCIjMjIyXFxcIixjb2xvckJhcjpcXFwiI2NjY1xcXCIsY29sb3JCYXJQcm9ncmVzczpcXFwiIzg4OFxcXCIsY29sb3JCYXJTaGFkb3c6XFxcIiMwMDBcXFwiLGZvbnROdW1iZXJzOlxcXCJBcmlhbFxcXCIsZm9udFRpdGxlOlxcXCJBcmlhbFxcXCIsZm9udFVuaXRzOlxcXCJBcmlhbFxcXCIsZm9udFZhbHVlOlxcXCJBcmlhbFxcXCIsZm9udE51bWJlcnNTaXplOjIwLGZvbnRUaXRsZVNpemU6MjQsZm9udFVuaXRzU2l6ZToyMixmb250VmFsdWVTaXplOjI2LGZvbnROdW1iZXJzU3R5bGU6XFxcIm5vcm1hbFxcXCIsZm9udFRpdGxlU3R5bGU6XFxcIm5vcm1hbFxcXCIsZm9udFVuaXRzU3R5bGU6XFxcIm5vcm1hbFxcXCIsZm9udFZhbHVlU3R5bGU6XFxcIm5vcm1hbFxcXCIsZm9udE51bWJlcnNXZWlnaHQ6XFxcIm5vcm1hbFxcXCIsZm9udFRpdGxlV2VpZ2h0OlxcXCJub3JtYWxcXFwiLGZvbnRVbml0c1dlaWdodDpcXFwibm9ybWFsXFxcIixmb250VmFsdWVXZWlnaHQ6XFxcIm5vcm1hbFxcXCIsbmVlZGxlOiEwLG5lZWRsZVNoYWRvdzohMCxuZWVkbGVUeXBlOlxcXCJhcnJvd1xcXCIsbmVlZGxlU3RhcnQ6NSxuZWVkbGVFbmQ6ODUsbmVlZGxlV2lkdGg6NCxib3JkZXJPdXRlcldpZHRoOjMsYm9yZGVyTWlkZGxlV2lkdGg6Myxib3JkZXJJbm5lcldpZHRoOjMsYm9yZGVyU2hhZG93V2lkdGg6Myx2YWx1ZUJveDohMCx2YWx1ZUJveFN0cm9rZTo1LHZhbHVlQm94V2lkdGg6MCx2YWx1ZVRleHQ6XFxcIlxcXCIsdmFsdWVUZXh0U2hhZG93OiEwLHZhbHVlQm94Qm9yZGVyUmFkaXVzOjIuNSxoaWdobGlnaHRzOlt7ZnJvbToyMCx0bzo2MCxjb2xvcjpcXFwiI2VlZVxcXCJ9LHtmcm9tOjYwLHRvOjgwLGNvbG9yOlxcXCIjY2NjXFxcIn0se2Zyb206ODAsdG86MTAwLGNvbG9yOlxcXCIjOTk5XFxcIn1dLGhpZ2hsaWdodHNXaWR0aDoxNSxiYXJXaWR0aDoyMCxiYXJTdHJva2VXaWR0aDowLGJhclByb2dyZXNzOiEwLGJhclNoYWRvdzowfTtsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEFycmF5LnByb3RvdHlwZSksbC5wcm90b3R5cGUuY29uc3RydWN0b3I9bCxsLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7aWYoXFxcInN0cmluZ1xcXCI9PXR5cGVvZiBlKWZvcih2YXIgdD0wLGk9dGhpcy5sZW5ndGg7dDxpO3QrKyl7dmFyIHI9dGhpc1t0XS5vcHRpb25zLnJlbmRlclRvLnRhZ05hbWU/dGhpc1t0XS5vcHRpb25zLnJlbmRlclRvOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNbdF0ub3B0aW9ucy5yZW5kZXJUb3x8XFxcIlxcXCIpO2lmKHIuZ2V0QXR0cmlidXRlKFxcXCJpZFxcXCIpPT09ZSlyZXR1cm4gdGhpc1t0XX1lbHNlIGlmKFxcXCJudW1iZXJcXFwiPT10eXBlb2YgZSlyZXR1cm4gdGhpc1tlXTtyZXR1cm4gbnVsbH07dmFyIHBlPVxcXCIyLjEuNVxcXCIsd2U9TWF0aC5yb3VuZCx5ZT1NYXRoLmFicyxrZT1uZXcgbDtrZS52ZXJzaW9uPXBlO3ZhciB4ZT1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKHQpe28odGhpcyxuKTt2YXIgcj1pKHRoaXMsKG4uX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpLmNhbGwodGhpcykpLGE9ci5jb25zdHJ1Y3Rvci5uYW1lO2lmKFxcXCJCYXNlR2F1Z2VcXFwiPT09YSl0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJBdHRlbXB0IHRvIGluc3RhbnRpYXRlIGFic3RyYWN0IGNsYXNzIVxcXCIpO2lmKGtlLnB1c2gociksdC5saXN0ZW5lcnMmJk9iamVjdC5rZXlzKHQubGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpeyh0Lmxpc3RlbmVyc1tlXWluc3RhbmNlb2YgQXJyYXk/dC5saXN0ZW5lcnNbZV06W3QubGlzdGVuZXJzW2VdXSkuZm9yRWFjaChmdW5jdGlvbih0KXtyLm9uKGUsdCl9KX0pLHIudmVyc2lvbj1wZSxyLnR5cGU9ZVthXXx8bixyLmluaXRpYWxpemVkPSExLHQubWluVmFsdWU9cGFyc2VGbG9hdCh0Lm1pblZhbHVlKSx0Lm1heFZhbHVlPXBhcnNlRmxvYXQodC5tYXhWYWx1ZSksdC52YWx1ZT1wYXJzZUZsb2F0KHQudmFsdWUpfHwwLHQuYm9yZGVyc3x8KHQuYm9yZGVySW5uZXJXaWR0aD10LmJvcmRlck1pZGRsZVdpZHRoPXQuYm9yZGVyT3V0ZXJXaWR0aD0wKSwhdC5yZW5kZXJUbyl0aHJvdyBUeXBlRXJyb3IoXFxcIkNhbnZhcyBlbGVtZW50IHdhcyBub3Qgc3BlY2lmaWVkIHdoZW4gY3JlYXRpbmcgdGhlIEdhdWdlIG9iamVjdCFcXFwiKTt2YXIgbD10LnJlbmRlclRvLnRhZ05hbWU/dC5yZW5kZXJUbzpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0LnJlbmRlclRvKTtpZighKGwgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpdGhyb3cgVHlwZUVycm9yKFxcXCJHaXZlbiBnYXVnZSBjYW52YXMgZWxlbWVudCBpcyBpbnZhbGlkIVxcXCIpO3JldHVybiB0LndpZHRoPXBhcnNlRmxvYXQodC53aWR0aCl8fDAsdC5oZWlnaHQ9cGFyc2VGbG9hdCh0LmhlaWdodCl8fDAsdC53aWR0aCYmdC5oZWlnaHR8fCh0LndpZHRofHwodC53aWR0aD1sLnBhcmVudE5vZGU/bC5wYXJlbnROb2RlLm9mZnNldFdpZHRoOmwub2Zmc2V0V2lkdGgpLHQuaGVpZ2h0fHwodC5oZWlnaHQ9bC5wYXJlbnROb2RlP2wucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ6bC5vZmZzZXRIZWlnaHQpKSxyLm9wdGlvbnM9dHx8e30sci5vcHRpb25zLmFuaW1hdGVPbkluaXQmJihyLl92YWx1ZT1yLm9wdGlvbnMudmFsdWUsci5vcHRpb25zLnZhbHVlPXIub3B0aW9ucy5taW5WYWx1ZSksci5jYW52YXM9bmV3IGJlKGwsdC53aWR0aCx0LmhlaWdodCksci5jYW52YXMub25SZWRyYXc9ci5kcmF3LmJpbmQociksci5hbmltYXRpb249bmV3IG1lKHQuYW5pbWF0aW9uUnVsZSx0LmFuaW1hdGlvbkR1cmF0aW9uKSxyfXJldHVybiByKG4sdCksY2Uobixbe2tleTpcXFwidXBkYXRlXFxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsdGhpcy50eXBlLmNvbmZpZ3VyZShlfHx7fSkpLHRoaXMuY2FudmFzLndpZHRoPXRoaXMub3B0aW9ucy53aWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQ9dGhpcy5vcHRpb25zLmhlaWdodCx0aGlzLmFuaW1hdGlvbi5ydWxlPXRoaXMub3B0aW9ucy5hbmltYXRpb25SdWxlLHRoaXMuYW5pbWF0aW9uLmR1cmF0aW9uPXRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbix0aGlzLmNhbnZhcy5yZWRyYXcoKSx0aGlzfX0se2tleTpcXFwiZGVzdHJveVxcXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1rZS5pbmRleE9mKHRoaXMpO35lJiZrZS5zcGxpY2UoZSwxKSx0aGlzLmNhbnZhcy5kZXN0cm95KCksdGhpcy5jYW52YXM9bnVsbCx0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCksdGhpcy5hbmltYXRpb249bnVsbCx0aGlzLmVtaXQoXFxcImRlc3Ryb3lcXFwiKX19LHtrZXk6XFxcImRyYXdcXFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5hbmltYXRlT25Jbml0JiYhdGhpcy5pbml0aWFsaXplZCYmKHRoaXMudmFsdWU9dGhpcy5fdmFsdWUsdGhpcy5pbml0aWFsaXplZD0hMCx0aGlzLmVtaXQoXFxcImluaXRcXFwiKSksdGhpcy5lbWl0KFxcXCJyZW5kZXJcXFwiKSx0aGlzfX0se2tleTpcXFwidmFsdWVcXFwiLHNldDpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2U9bi5lbnN1cmVWYWx1ZShlLHRoaXMub3B0aW9ucy5taW5WYWx1ZSk7dmFyIGk9dGhpcy5vcHRpb25zLnZhbHVlO2lmKGUhPT1pKWlmKHRoaXMub3B0aW9ucy5hbmltYXRpb24pe2lmKHRoaXMuYW5pbWF0aW9uLmZyYW1lJiYodGhpcy5vcHRpb25zLnZhbHVlPXRoaXMuX3ZhbHVlLHRoaXMuX3ZhbHVlPT09ZSkpcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmNhbmNlbCgpLHZvaWQgZGVsZXRlIHRoaXMuX3ZhbHVlO3ZvaWQgMD09PXRoaXMuX3ZhbHVlJiYodGhpcy5fdmFsdWU9ZSksdGhpcy5lbWl0KFxcXCJhbmltYXRpb25TdGFydFxcXCIpLHRoaXMuYW5pbWF0aW9uLmFuaW1hdGUoZnVuY3Rpb24ocil7dmFyIG89aSsoZS1pKSpyO3Qub3B0aW9ucy5hbmltYXRlZFZhbHVlJiZ0LmVtaXQoXFxcInZhbHVlXFxcIixvLHQudmFsdWUpLHQub3B0aW9ucy52YWx1ZT1vLHQuZHJhdygpLHQuZW1pdChcXFwiYW5pbWF0ZVxcXCIscix0Lm9wdGlvbnMudmFsdWUpfSxmdW5jdGlvbigpe3ZvaWQgMCE9PXQuX3ZhbHVlJiYodC5lbWl0KFxcXCJ2YWx1ZVxcXCIsdC5fdmFsdWUsdC52YWx1ZSksdC5vcHRpb25zLnZhbHVlPXQuX3ZhbHVlLGRlbGV0ZSB0Ll92YWx1ZSksdC5kcmF3KCksdC5lbWl0KFxcXCJhbmltYXRpb25FbmRcXFwiKX0pfWVsc2UgdGhpcy5lbWl0KFxcXCJ2YWx1ZVxcXCIsZSx0aGlzLnZhbHVlKSx0aGlzLm9wdGlvbnMudmFsdWU9ZSx0aGlzLmRyYXcoKX0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXRoaXMuX3ZhbHVlP3RoaXMub3B0aW9ucy52YWx1ZTp0aGlzLl92YWx1ZX19XSxbe2tleTpcXFwiY29uZmlndXJlXFxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZX19LHtrZXk6XFxcImluaXRpYWxpemVcXFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyB2ZSh0LFxcXCJjYW52YXNcXFwiLGUpfX0se2tleTpcXFwiZnJvbUVsZW1lbnRcXFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXZlLnRvQ2FtZWxDYXNlKGUuZ2V0QXR0cmlidXRlKFxcXCJkYXRhLXR5cGVcXFwiKSksaT1lLmF0dHJpYnV0ZXMscj0wLG89aS5sZW5ndGgsbj17fTtpZih0KXtmb3IoL0dhdWdlJC8udGVzdCh0KXx8KHQrPVxcXCJHYXVnZVxcXCIpO3I8bztyKyspblt2ZS50b0NhbWVsQ2FzZShpW3JdLm5hbWUucmVwbGFjZSgvXmRhdGEtLyxcXFwiXFxcIiksITEpXT12ZS5wYXJzZShpW3JdLnZhbHVlKTtuZXcgdmUobixlLnRhZ05hbWUsdCkucHJvY2VzcyhlKX19fSx7a2V5OlxcXCJlbnN1cmVWYWx1ZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjA7cmV0dXJuIGU9cGFyc2VGbG9hdChlKSwhaXNOYU4oZSkmJmlzRmluaXRlKGUpfHwoZT1wYXJzZUZsb2F0KHQpfHwwKSxlfX0se2tleTpcXFwibW9kXFxcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybihlJXQrdCkldH19LHtrZXk6XFxcInZlcnNpb25cXFwiLGdldDpmdW5jdGlvbigpe3JldHVybiBwZX19XSksbn0oaGUpO3ZvaWQgMCE9PWUmJihlLkJhc2VHYXVnZT14ZSxlLmdhdWdlcz0od2luZG93LmRvY3VtZW50fHx7fSkuZ2F1Z2VzPWtlKTt2YXIgVGU9e3JvdW5kUmVjdDpjLHBhZFZhbHVlOmgsZm9ybWF0TWFqb3JUaWNrTnVtYmVyOnUscmFkaWFuczpmLHJhZGlhbFBvaW50Om0sbGluZWFyR3JhZGllbnQ6dixkcmF3TmVlZGxlU2hhZG93OmcsZHJhd1ZhbHVlQm94OmssdmVyaWZ5RXJyb3I6cyxwcmVwYXJlVGlja3M6ZCxkcmF3U2hhZG93OmIsZm9udDpwLG5vcm1hbGl6ZWRWYWx1ZTp4fSxTZT1NYXRoLlBJLFdlPVNlLzIsT2U9T2JqZWN0LmFzc2lnbih7fSxnZSx7dGlja3NBbmdsZToyNzAsc3RhcnRBbmdsZTo0NSxjb2xvck5lZWRsZUNpcmNsZU91dGVyOlxcXCIjZjBmMGYwXFxcIixjb2xvck5lZWRsZUNpcmNsZU91dGVyRW5kOlxcXCIjY2NjXFxcIixjb2xvck5lZWRsZUNpcmNsZUlubmVyOlxcXCIjZThlOGU4XFxcIixjb2xvck5lZWRsZUNpcmNsZUlubmVyRW5kOlxcXCIjZjVmNWY1XFxcIixuZWVkbGVDaXJjbGVTaXplOjEwLG5lZWRsZUNpcmNsZUlubmVyOiEwLG5lZWRsZUNpcmNsZU91dGVyOiEwLG5lZWRsZVN0YXJ0OjIwLGFuaW1hdGlvblRhcmdldDpcXFwibmVlZGxlXFxcIix1c2VNaW5QYXRoOiExLGJhcldpZHRoOjB9KSxWZT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBvKHRoaXMsdCksZT1PYmplY3QuYXNzaWduKHt9LE9lLGV8fHt9KSxpKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyx0LmNvbmZpZ3VyZShlKSkpfXJldHVybiByKHQsZSksY2UodCxbe2tleTpcXFwiZHJhd1xcXCIsdmFsdWU6ZnVuY3Rpb24oKXt0cnl7dmFyIGU9dGhpcy5jYW52YXMsaT1bLWUuZHJhd1gsLWUuZHJhd1ksZS5kcmF3V2lkdGgsZS5kcmF3SGVpZ2h0XSxyPWlbMF0sbz1pWzFdLG49aVsyXSxhPWlbM10sbD10aGlzLm9wdGlvbnM7aWYoXFxcIm5lZWRsZVxcXCI9PT1sLmFuaW1hdGlvblRhcmdldCl7aWYoIWUuZWxlbWVudENsb25lLmluaXRpYWxpemVkKXt2YXIgcz1lLmNvbnRleHRDbG9uZTtzLmNsZWFyUmVjdChyLG8sbixhKSxzLnNhdmUoKSx0aGlzLmVtaXQoXFxcImJlZm9yZVBsYXRlXFxcIiksVyhzLGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlSGlnaGxpZ2h0c1xcXCIpLE8ocyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZU1pbm9yVGlja3NcXFwiKSxWKHMsbCksdGhpcy5lbWl0KFxcXCJiZWZvcmVNYWpvclRpY2tzXFxcIiksTShzLGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlTnVtYmVyc1xcXCIpLGoocyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZVRpdGxlXFxcIiksQyhzLGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlVW5pdHNcXFwiKSxOKHMsbCksZS5lbGVtZW50Q2xvbmUuaW5pdGlhbGl6ZWQ9ITB9dGhpcy5jYW52YXMuY29tbWl0KCksZS5jb250ZXh0LmNsZWFyUmVjdChyLG8sbixhKSxlLmNvbnRleHQuc2F2ZSgpLGUuY29udGV4dC5kcmF3SW1hZ2UoZS5lbGVtZW50Q2xvbmUscixvLG4sYSksZS5jb250ZXh0LnNhdmUoKSx0aGlzLmVtaXQoXFxcImJlZm9yZVByb2dyZXNzQmFyXFxcIiksUihlLmNvbnRleHQsbCksdGhpcy5lbWl0KFxcXCJiZWZvcmVWYWx1ZUJveFxcXCIpLF8oZS5jb250ZXh0LGwsSSh0aGlzKSksdGhpcy5lbWl0KFxcXCJiZWZvcmVOZWVkbGVcXFwiKSxFKGUuY29udGV4dCxsKX1lbHNle3ZhciBkPS1UZS5yYWRpYW5zKChsLnZhbHVlLWwubWluVmFsdWUpLyhsLm1heFZhbHVlLWwubWluVmFsdWUpKmwudGlja3NBbmdsZSk7aWYoZS5jb250ZXh0LmNsZWFyUmVjdChyLG8sbixhKSxlLmNvbnRleHQuc2F2ZSgpLHRoaXMuZW1pdChcXFwiYmVmb3JlUGxhdGVcXFwiKSxXKGUuY29udGV4dCxsKSxlLmNvbnRleHQucm90YXRlKGQpLHRoaXMuZW1pdChcXFwiYmVmb3JlSGlnaGxpZ2h0c1xcXCIpLE8oZS5jb250ZXh0LGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlTWlub3JUaWNrc1xcXCIpLFYoZS5jb250ZXh0LGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlTWFqb3JUaWNrc1xcXCIpLE0oZS5jb250ZXh0LGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlTnVtYmVyc1xcXCIpLGooZS5jb250ZXh0LGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlUHJvZ3Jlc3NCYXJcXFwiKSxSKGUuY29udGV4dCxsKSxlLmNvbnRleHQucm90YXRlKC1kKSxlLmNvbnRleHQuc2F2ZSgpLCFlLmVsZW1lbnRDbG9uZS5pbml0aWFsaXplZCl7dmFyIGM9ZS5jb250ZXh0Q2xvbmU7Yy5jbGVhclJlY3QocixvLG4sYSksYy5zYXZlKCksdGhpcy5lbWl0KFxcXCJiZWZvcmVUaXRsZVxcXCIpLEMoYyxsKSx0aGlzLmVtaXQoXFxcImJlZm9yZVVuaXRzXFxcIiksTihjLGwpLHRoaXMuZW1pdChcXFwiYmVmb3JlTmVlZGxlXFxcIiksRShjLGwpLGUuZWxlbWVudENsb25lLmluaXRpYWxpemVkPSEwfWUuY29udGV4dC5kcmF3SW1hZ2UoZS5lbGVtZW50Q2xvbmUscixvLG4sYSl9dGhpcy5lbWl0KFxcXCJiZWZvcmVWYWx1ZUJveFxcXCIpLF8oZS5jb250ZXh0LGwsSSh0aGlzKSksc2UodC5wcm90b3R5cGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFxcXCJkcmF3XFxcIix0aGlzKS5jYWxsKHRoaXMpfWNhdGNoKGUpe1RlLnZlcmlmeUVycm9yKGUpfXJldHVybiB0aGlzfX0se2tleTpcXFwidmFsdWVcXFwiLHNldDpmdW5jdGlvbihlKXtlPXhlLmVuc3VyZVZhbHVlKGUsdGhpcy5vcHRpb25zLm1pblZhbHVlKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uJiYzNjA9PT10aGlzLm9wdGlvbnMudGlja3NBbmdsZSYmdGhpcy5vcHRpb25zLnVzZU1pblBhdGgmJih0aGlzLl92YWx1ZT1lLGU9dGhpcy5vcHRpb25zLnZhbHVlKygoZS10aGlzLm9wdGlvbnMudmFsdWUpJTM2MCs1NDApJTM2MC0xODApLGRlKHQucHJvdG90eXBlLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcXFwidmFsdWVcXFwiLGUsdGhpcyl9LGdldDpmdW5jdGlvbigpe3JldHVybiBzZSh0LnByb3RvdHlwZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0LnByb3RvdHlwZSksXFxcInZhbHVlXFxcIix0aGlzKX19XSxbe2tleTpcXFwiY29uZmlndXJlXFxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5iYXJXaWR0aD41MCYmKGUuYmFyV2lkdGg9NTApLGlzTmFOKGUuc3RhcnRBbmdsZSkmJihlLnN0YXJ0QW5nbGU9NDUpLGlzTmFOKGUudGlja3NBbmdsZSkmJihlLnRpY2tzQW5nbGU9MjcwKSxlLnRpY2tzQW5nbGU+MzYwJiYoZS50aWNrc0FuZ2xlPTM2MCksZS50aWNrc0FuZ2xlPDAmJihlLnRpY2tzQW5nbGU9MCksZS5zdGFydEFuZ2xlPDAmJihlLnN0YXJ0QW5nbGU9MCksZS5zdGFydEFuZ2xlPjM2MCYmKGUuc3RhcnRBbmdsZT0zNjApLGV9fV0pLHR9KHhlKTt2b2lkIDAhPT1lJiYoZS5SYWRpYWxHYXVnZT1WZSkseGUuaW5pdGlhbGl6ZShcXFwiUmFkaWFsR2F1Z2VcXFwiLE9lKTt2YXIgUGU9T2JqZWN0LmFzc2lnbih7fSxnZSx7Ym9yZGVyUmFkaXVzOjAsYmFyQmVnaW5DaXJjbGU6MzAsY29sb3JCYXJFbmQ6XFxcIlxcXCIsY29sb3JCYXJQcm9ncmVzc0VuZDpcXFwiXFxcIixuZWVkbGVXaWR0aDo2LHRpY2tTaWRlOlxcXCJib3RoXFxcIixuZWVkbGVTaWRlOlxcXCJib3RoXFxcIixudW1iZXJTaWRlOlxcXCJib3RoXFxcIix0aWNrc1dpZHRoOjEwLHRpY2tzV2lkdGhNaW5vcjo1LHRpY2tzUGFkZGluZzo1LGJhckxlbmd0aDo4NSxmb250VGl0bGVTaXplOjI2LGhpZ2hsaWdodHNXaWR0aDoxMH0pLE1lPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuIG8odGhpcyxuKSxlPU9iamVjdC5hc3NpZ24oe30sUGUsZXx8e30pLGkodGhpcywobi5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSkuY2FsbCh0aGlzLG4uY29uZmlndXJlKGUpKSl9cmV0dXJuIHIobixlKSxjZShuLFt7a2V5OlxcXCJkcmF3XFxcIix2YWx1ZTpmdW5jdGlvbigpe3RyeXt2YXIgZT10aGlzLmNhbnZhcyxpPVstZS5kcmF3WCwtZS5kcmF3WSxlLmRyYXdXaWR0aCxlLmRyYXdIZWlnaHRdLHI9aVswXSxvPWlbMV0sYT1pWzJdLGw9aVszXSxzPXRoaXMub3B0aW9ucztpZighZS5lbGVtZW50Q2xvbmUuaW5pdGlhbGl6ZWQpe3ZhciBkPWUuY29udGV4dENsb25lO2QuY2xlYXJSZWN0KHIsbyxhLGwpLGQuc2F2ZSgpLHRoaXMuZW1pdChcXFwiYmVmb3JlUGxhdGVcXFwiKSx0aGlzLmRyYXdCb3g9TChkLHMscixvLGEsbCksdGhpcy5lbWl0KFxcXCJiZWZvcmVCYXJcXFwiKSxYLmFwcGx5KHZvaWQgMCxbZCxzXS5jb25jYXQodCh0aGlzLmRyYXdCb3gpKSksZS5jb250ZXh0LmJhckRpbWVuc2lvbnM9ZC5iYXJEaW1lbnNpb25zLHRoaXMuZW1pdChcXFwiYmVmb3JlSGlnaGxpZ2h0c1xcXCIpLHEoZCxzKSx0aGlzLmVtaXQoXFxcImJlZm9yZU1pbm9yVGlja3NcXFwiKSxLKGQscyksdGhpcy5lbWl0KFxcXCJiZWZvcmVNYWpvclRpY2tzXFxcIiksJChkLHMpLHRoaXMuZW1pdChcXFwiYmVmb3JlTnVtYmVyc1xcXCIpLFEoZCxzKSx0aGlzLmVtaXQoXFxcImJlZm9yZVRpdGxlXFxcIiksZWUoZCxzKSx0aGlzLmVtaXQoXFxcImJlZm9yZVVuaXRzXFxcIiksdGUoZCxzKSxlLmVsZW1lbnRDbG9uZS5pbml0aWFsaXplZD0hMH10aGlzLmNhbnZhcy5jb21taXQoKSxlLmNvbnRleHQuY2xlYXJSZWN0KHIsbyxhLGwpLGUuY29udGV4dC5zYXZlKCksZS5jb250ZXh0LmRyYXdJbWFnZShlLmVsZW1lbnRDbG9uZSxyLG8sYSxsKSxlLmNvbnRleHQuc2F2ZSgpLHRoaXMuZW1pdChcXFwiYmVmb3JlUHJvZ3Jlc3NCYXJcXFwiKSxVLmFwcGx5KHZvaWQgMCxbZS5jb250ZXh0LHNdLmNvbmNhdCh0KHRoaXMuZHJhd0JveCkpKSx0aGlzLmVtaXQoXFxcImJlZm9yZU5lZWRsZVxcXCIpLGllKGUuY29udGV4dCxzKSx0aGlzLmVtaXQoXFxcImJlZm9yZVZhbHVlQm94XFxcIiksYWUuYXBwbHkodm9pZCAwLFtlLmNvbnRleHQscyxzLmFuaW1hdGVkVmFsdWU/dGhpcy5vcHRpb25zLnZhbHVlOnRoaXMudmFsdWVdLmNvbmNhdCh0KHRoaXMuZHJhd0JveCkpKSxzZShuLnByb3RvdHlwZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihuLnByb3RvdHlwZSksXFxcImRyYXdcXFwiLHRoaXMpLmNhbGwodGhpcyl9Y2F0Y2goZSl7VGUudmVyaWZ5RXJyb3IoZSl9cmV0dXJuIHRoaXN9fV0sW3trZXk6XFxcImNvbmZpZ3VyZVxcXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYmFyU3Ryb2tlV2lkdGg+PWUuYmFyV2lkdGgmJihlLmJhclN0cm9rZVdpZHRoPXdlKGUuYmFyV2lkdGgvMikpLGUuaGFzTGVmdD1ZKFxcXCJyaWdodFxcXCIsZSksZS5oYXNSaWdodD1ZKFxcXCJsZWZ0XFxcIixlKSxlLnZhbHVlPmUubWF4VmFsdWUmJihlLnZhbHVlPWUubWF4VmFsdWUpLGUudmFsdWU8ZS5taW5WYWx1ZSYmKGUudmFsdWU9ZS5taW5WYWx1ZSkseGUuY29uZmlndXJlKGUpfX1dKSxufSh4ZSk7dm9pZCAwIT09ZSYmKGUuTGluZWFyR2F1Z2U9TWUpLHhlLmluaXRpYWxpemUoXFxcIkxpbmVhckdhdWdlXFxcIixQZSksXFxcInVuZGVmaW5lZFxcXCIhPXR5cGVvZiBtb2R1bGUmJk9iamVjdC5hc3NpZ24oZSx7Q29sbGVjdGlvbjpsLEdlbmVyaWNPcHRpb25zOmdlLEFuaW1hdGlvbjptZSxCYXNlR2F1Z2U6eGUsZHJhd2luZ3M6VGUsU21hcnRDYW52YXM6YmUsRG9tT2JzZXJ2ZXI6dmUsdmVuZG9yaXplOm59KX0oXFxcInVuZGVmaW5lZFxcXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM6d2luZG93KTtcIiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNyYykge1xuXHRmdW5jdGlvbiBsb2coZXJyb3IpIHtcblx0XHQodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpXG5cdFx0JiYgKGNvbnNvbGUuZXJyb3IgfHwgY29uc29sZS5sb2cpKFwiW1NjcmlwdCBMb2FkZXJdXCIsIGVycm9yKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBJRSA9PCA4XG5cdGZ1bmN0aW9uIGlzSUUoKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhdHRhY2hFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJ1bmRlZmluZWRcIjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBleGVjU2NyaXB0ICE9PSBcInVuZGVmaW5lZFwiICYmIGlzSUUoKSkge1xuXHRcdFx0ZXhlY1NjcmlwdChzcmMpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGV2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGV2YWwuY2FsbChudWxsLCBzcmMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2coXCJFdmFsRXJyb3I6IE5vIGV2YWwgZnVuY3Rpb24gYXZhaWxhYmxlXCIpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRsb2coZXJyb3IpO1xuXHR9XG59XG4iLCIvKiFcclxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUb21hcyBIZWxsc3Ryw7ZtIChodHRwczovL2dpdGh1Yi5jb20vaGVsdG80cmVhbC9sb3ZlbGFjZS1jdXN0b20tY2FyZHMpXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gKiBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vL2ltcG9ydCBcIi4vZ2F1Z2UubWluLmpzXCI7XHJcblxyXG4vLyBVc2UgdGhpcyB3aGVuIGJ1aWxkaW5nIHRvIHByb2QgcGFja2FnZVxyXG5pbXBvcnQgXCJjYW52YXMtZ2F1Z2VzXCI7XHJcblxyXG4vKipcclxuICogYGNhbnZhcy1nYXVnZS1jYXJkYFxyXG4gKiBMb3ZlbGFjZSBlbGVtZW50IGZvciBkaXNwbGF5aW5nIHRoZSBjYW52YXMgZ2F1Z2VzIGF0IFxyXG4gKiBodHRwczovL2NhbnZhcy1nYXVnZXMuY29tL1xyXG4gKiBcclxuICogSWYgeW91IGxpa2UgdGhlIGdhdWdlcyBwbGVhc2Ugc3VwcG9ydCB0aGUgb3JpZ2luYWwgZ2F1Z2UgZGV2cy5cclxuICogXHJcbiAqIFVzYWdlIG9jaCBjYXJkOlxyXG4gKiAgLSBDb3B5IHRoaXMgZmlsZSAnY2FudmFzLWd1YWdlLWNhcmQuanMnIGFuZCAnZ2F1Z2UubWluLmpzJyB0byBzYW1lIGZvbGRlciBpbiBoYXNzLiBcclxuICogIC0gU2V0IHRoZSB1aS1sb3ZlbGFjZS55YW1sLCBJbmNsdWRlIHRoZSBjYW52YXMtZ3VhZ2UtY2FyZC5qcyBhbmQgY29maWd1cmUgYXQgbWluaW11bTpcclxuICAgICogY2FyZHM6XHJcbiAgICAgICAgLSB0eXBlOiBjdXN0b206Y2FudmFzLWdhdWdlLWNhcmRcclxuICAgICAgICAgICAgZW50aXR5OiBzZW5zb3IudGVtcF9vdXRzaWRlXHJcbiAgICAgICAgICAgIGdhdWdlOlxyXG4gICAgICAgICAgICB0eXBlOiBcImxpbmVhci1nYXVnZVwiXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBcclxuICAgIC0gVXNlIHRoZSBqYXZhc2NyaXB0IHByb3BlcnRpZXMgd2l0aG91dGggdGhlICcsJyB0byBjb25maWd1cmUgcHJvcGVydGllcyB1bmRlciAnZ2F1Z2UnXHJcbiAgICAtIFVzZSBuYW1lIHByb3BlcnR5IHRvIHNob3cgdGhlIG5hbWUgYXR0IGJvdHRvbSBvZiB0aGUgY2FyZFxyXG4gICAgLSBTZWUgaHR0cDovL3NzcyBmb3IgZG9jc1xyXG4gKi9cclxuY2xhc3MgQ2FudmFzR2F1Z2VDYXJkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ09OU1RSVUNUT1IhISFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIHRoaXMuX19pbml0VGVzdHMoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVycyB0aGUgY2FyZCBcclxuICAgICAqL1xyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRhaW5lciBlbGVtZW50IFxyXG4gICAgICAgIGNvbnN0IGVsZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbGVtQ29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgICAgZWxlbUNvbnRhaW5lci53aWR0aCA9IHRoaXMuY29uZmlnLmdhdWdlWyd3aWR0aCddO1xyXG4gICAgICAgIGVsZW1Db250YWluZXIuaGVpZ2h0ID0gdGhpcy5jb25maWcuZ2F1Z2VbJ2hlaWdodCddO1xyXG5cclxuICAgICAgICBjb25zdCBzaGFkb3dIZWlnaHQgPSAodGhpcy5jb25maWcuc2hhZG93X2hlaWdodCkgPyB0aGlzLmNvbmZpZy5zaGFkb3dfaGVpZ2h0IDogJzclJztcclxuICAgICAgICAvLyBUaGUgc3R5bGVzXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBgXHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke2VsZW1Db250YWluZXIud2lkdGh9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke2VsZW1Db250YWluZXIuaGVpZ2h0fXB4OyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNoYWRvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3NoYWRvd0hlaWdodH07XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjc3RhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmlubmVySFRNTCA9IHN0eWxlO1xyXG5cclxuICAgICAgICAvLyBjYW52YXMgZWxlbWVudCB0aGF0IHRoZSBnYXVnZSB3aWxsIGJlIGRyYXduIGJ5IHRoZSBjYW52YXMgZ2F1Z2UgTGliXHJcbiAgICAgICAgY29uc3QgZWxlbUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGVsZW1DYW52YXMud2lkdGggPSB0aGlzLmNvbmZpZy5nYXVnZVsnd2lkdGgnXTtcclxuICAgICAgICBlbGVtQ2FudmFzLmhlaWdodCA9IHRoaXMuY29uZmlnLmdhdWdlWydoZWlnaHQnXTtcclxuXHJcbiAgICAgICAgLy8gSGF2ZSB0byBkbyB0aGlzIGNhdXNlIHNvbWUgYnVnIGluIGxpYnJhcnkgZ2F1Z2UubWluLmpzIGRvbnQgZGlzcGxheSB0aGUgZ2F1Z2VcclxuICAgICAgICAvLyBrZWVwIHRoaXMgY29kZSBmb3IgYSB3aGlsZSBpbmNhc2UgSSBuZWVkIHRvIGFjdGl2YXRlIGl0IGFnYWluLi4uXHJcbiAgICAgICAgLy92YXIgY3R4ID0gZWxlbUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIC8vY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgLy9jdHguZmlsbFJlY3QoMCwgMCwgZWxlbUNhbnZhcy53aWR0aCwgZWxlbUNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHZhciBnYXVnZTtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZ2F1Z2UudHlwZSA9PSAnbGluZWFyLWdhdWdlJykge1xyXG4gICAgICAgICAgICBnYXVnZSA9IG5ldyBMaW5lYXJHYXVnZSh7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUbzogZWxlbUNhbnZhcyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbUNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZWxlbUNhbnZhcy53aWR0aFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcuZ2F1Z2UudHlwZSA9PSAncmFkaWFsLWdhdWdlJykge1xyXG4gICAgICAgICAgICBnYXVnZSA9IG5ldyBSYWRpYWxHYXVnZSh7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUbzogZWxlbUNhbnZhcyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbUNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZWxlbUNhbnZhcy53aWR0aFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLmdhdWdlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5nYXVnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBnYXVnZS5vcHRpb25zW2tleV0gPSB0aGlzLmNvbmZpZy5nYXVnZVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhdWdlLmRyYXcoKTtcclxuXHJcbiAgICAgICAgZWxlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtQ2FudmFzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1TaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbVNoYWRvdy5jbGFzc05hbWUgPSAnc2hhZG93JztcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbVN0YXRlLmlkID0gJ3N0YXRlJztcclxuICAgICAgICAgICAgLy8gQXV0b21hdGljIGZvbnQgcmVzaXplIG9yIHNldCBvbmVcclxuICAgICAgICAgICAgdmFyIGZvbnRfc2l6ZSA9IHRoaXMuY29uZmlnLmZvbnRfc2l6ZSA/IHRoaXMuY29uZmlnLmZvbnRfc2l6ZSA6IGBjYWxjKCR7dGhpcy5jb25maWcuZ2F1Z2VbJ2hlaWdodCddfXB4LzIyKWA7XHJcbiAgICAgICAgICAgIGVsZW1TdGF0ZS5zdHlsZS5mb250U2l6ZSA9IGZvbnRfc2l6ZTtcclxuICAgICAgICAgICAgZWxlbVN0YXRlLmlubmVyVGV4dCA9IHRoaXMuY29uZmlnLm5hbWU7XHJcblxyXG4gICAgICAgICAgICBlbGVtU2hhZG93LmFwcGVuZENoaWxkKGVsZW1TdGF0ZSk7XHJcbiAgICAgICAgICAgIGVsZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbVNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtQ29udGFpbmVyLm9uY2xpY2sgPSB0aGlzLl9jbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChlbGVtQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ2F1Z2UgPSBnYXVnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uY2xpY2sgZXZlbnQgZm9yIGNhcmQsIGdldHMgdGhlIGVuaXR5IGluZm9cclxuICAgICAqL1xyXG4gICAgX2NsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2ZpcmUoJ2hhc3MtbW9yZS1pbmZvJywgeyBlbnRpdHlJZDogdGhpcy5jb25maWcuZW50aXR5IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlyZXMgdGhlIGV2ZW50IHRoYXQgb3BlbnMgdGhlIGVuaXR5IGluZm9cclxuICAgICAqL1xyXG4gICAgX2ZpcmUodHlwZSwgZGV0YWlsKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhhc3MoaGFzcykge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eUlkID0gdGhpcy5jb25maWcuZW50aXR5O1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50aXR5SWRdLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2dhdWdlWyd2YWx1ZSddID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fZ2F1Z2UuZHJhdygpOyAvLyBIYXZlIHRvIGNhbGwgdG8gcmVkcmF3IGNhbnZhc1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmZpZyhjb25maWcpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgYW4gZW50aXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLmdhdWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gZGVmaW5lIGdhdWdlIGFuZCBkZWZhdWx0IGdhdWdlIHZhbHVlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZy5nYXVnZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgZ2F1Z2UgaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLmdhdWdlLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gZGVmaW5lIGdhdWdlIHdpZHRoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLmdhdWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgZ2F1Z2UgdHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIShjb25maWcuZ2F1Z2UudHlwZSA9PSAnbGluZWFyLWdhdWdlJyB8fCBjb25maWcuZ2F1Z2UudHlwZSA9PSAncmFkaWFsLWdhdWdlJykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBkZWZpbmUgZ2F1Z2UgdHlwZSBcImxpbmVhci1nYXVnZVwiIG9yIFwicmFkaWFsLWdhdWdlXCInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENhcmRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEluaXQgdGVzdGRhdGFcclxuICAgICAqIEkgdXNlIHRoaXMgaW4gbXkgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gbWFrZSBhIHZlcnkgc2ltcGxlIG1vY2sgb2YgY29uZmlnL2hhc3Mgb2JqZWN0cyBcclxuICAgICovXHJcbiAgICBfX2luaXRUZXN0cygpIHtcclxuICAgICAgICB2YXIgdGVzdF9jb25maWcgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW50aXR5OiAnc2Vuc29yLnRlbXAnLFxyXG4gICAgICAgICAgICBuYW1lOiAndGVtcCcsXHJcbiAgICAgICAgICAgIGdhdWdlOiB7fVxyXG4gICAgICAgIH07IC8vLCBmb250X3NpemU6ICcxZXYnXHJcblxyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyd0eXBlJ10gPSAnbGluZWFyLWdhdWdlJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnd2lkdGgnXSA9ICcxMjAnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydoZWlnaHQnXSA9ICc0MDAnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyd1bml0cyddID0gJ8KwQyc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ21pbi12YWx1ZSddID0gJzAnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydzdGFydC1hbmdsZSddID0gJzkwJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsndGlja3MtYW5nbGUnXSA9ICcxODAnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyd2YWx1ZS1ib3gnXSA9ICdmYWxzZSc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ21heC12YWx1ZSddID0gJzIyMCc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ21ham9yLXRpY2tzJ10gPSAnMCwyMCw0MCw2MCw4MCwxMDAsMTIwLDE0MCwxNjAsMTgwLDIwMCwyMjAnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydtaW5vci10aWNrcyddID0gJzInO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydzdHJva2UtdGlja3MnXSA9ICd0cnVlJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnaGlnaGxpZ2h0cyddID0gJ1xcJ1sge1xcXCJmcm9tXFxcIjogMTAwLCBcXFwidG9cXFwiOiAyMjAsIFxcXCJjb2xvclxcXCI6IFxcXCJyZ2JhKDIwMCwgNTAsIDUwLCAuNzUpXFxcIn0gXVxcJyc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ2NvbG9yLXBsYXRlJ10gPSAnI2ZmZic7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ2JvcmRlci1zaGFkb3ctd2lkdGgnXSA9ICcwJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnYm9yZGVycyddID0gJ2ZhbHNlJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnbmVlZGxlLXR5cGUnXSA9ICdhcnJvdyc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ25lZWRsZS13aWR0aCddID0gJzInO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyduZWVkbGUtY2lyY2xlLXNpemUnXSA9ICc3JztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnbmVlZGxlLWNpcmNsZS1vdXRlciddID0gJ3RydWUnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWyduZWVkbGUtY2lyY2xlLWlubmVyJ10gPSAnZmFsc2UnO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydhbmltYXRpb24tZHVyYXRpb24nXSA9ICcxNTAwJztcclxuICAgICAgICB0ZXN0X2NvbmZpZy5nYXVnZVsnYW5pbWF0aW9uLXJ1bGUnXSA9ICdsaW5lYXInO1xyXG4gICAgICAgIHRlc3RfY29uZmlnLmdhdWdlWydiYXItd2lkdGgnXSA9ICcxMCc7XHJcbiAgICAgICAgdGVzdF9jb25maWcuZ2F1Z2VbJ3ZhbHVlJ10gPSAnNTAnO1xyXG5cclxuICAgICAgICB2YXIgdGVzdF9oYXNzID0geyBzdGF0ZXM6IFtdIH07XHJcbiAgICAgICAgdGVzdF9oYXNzLnN0YXRlc1t0ZXN0X2NvbmZpZy5lbnRpdHldID0geyBzdGF0ZTogXCIxNVwiIH07XHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodGVzdF9jb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLmhhc3MgPSB0ZXN0X2hhc3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhbnZhcy1nYXVnZS1jYXJkJywgQ2FudmFzR2F1Z2VDYXJkKTsiLCIvKiFcclxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUb21hcyBIZWxsc3Ryw7ZtICAoaHR0cHM6Ly9naXRodWIuY29tL2hlbHRvNHJlYWwvbG92ZWxhY2UtY3VzdG9tLWNhcmRzKVxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICogU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuXHJcbi8vIFVzZSB3aGVuIGRldiBvdXRzaWRlIEhBU1MgYW5kIGJ1aWxkIHVzaW5nIG5wbVxyXG5pbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvbGl0LWVsZW1lbnQnO1xyXG4vLyBVc2Ugd2hlbiBkZXBsb3kgZGlyZWN0bHkgdG8gSEFTUyB3aXRob3V0IGNvbXBsaWUgYW5kIHN0dWZmLiBcclxuLy9pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vQHBvbHltZXIvbGl0LWVsZW1lbnRAbGF0ZXN0L2xpdC1lbGVtZW50LmpzP21vZHVsZSc7XHJcblxyXG4vKipcclxuICogYHBpY3R1cmUtc3RhdHVzLWVsZW1lbnRgXHJcbiAqIExvdmVsYWNlIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgc3RhdHVzIG9uIGEgcGljdHVyZSBib3R0b20gY2VudGVyZWQgb24gYSBzaGFkb3dcclxuICovXHJcbmNsYXNzIFBpY3R1cmVTdGF0dXNDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgX3JlbmRlcih7IGhhc3MsIGNvbmZpZyB9KSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaGFkb3cge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpOztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXRle1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIG9uLWNsaWNrPVwiJHsoKSA9PiB0aGlzLl9jbGljaygpfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd1wiPjxkaXYgaWQ9XCJzdGF0ZVwiPiR7dGhpcy5zdGF0ZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBgO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIENhbnQgc2V0IGJhY2tncm91bmQgaW1hZ2UgaW4gcmVuZGVyIG1ldGhvZCBmb3IgdGhlIHN0eWxlLCBzb21lIGJ1ZyBwcm9oaWJpdCB0aGF0LlxyXG4gICAgU28gd2UgbmVlZCB0byBzZXQgdGhlIGJhY2tncm91bmQgaW1hZ2UgYWZ0ZXIgdGhlIHBhZ2UgaGFzIHJlbmRlcmVkXHJcbiAgKi9cclxuICBfZGlkUmVuZGVyKF9wcm9wcywgX2NoYW5nZWRQcm9wcywgX3ByZXZQcm9wcykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcm9vdC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzdGF0ZV9kaXYgPSB0aGlzLl9yb290LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0ZScpO1xyXG5cclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fZ2V0U3RhdGVJbWFnZSgpfSlgO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuX2NhcmRfaGVpZ2h0O1xyXG5cclxuXHJcbiAgICB0aGlzLl9mb250X3NpemUgPSB0aGlzLl9jb25maWcuZm9udF9zaXplID8gdGhpcy5fY29uZmlnLmZvbnRfc2l6ZSA6IGBjYWxjKCR7dGhpcy5fY2FyZF9oZWlnaHR9LzYpYDtcclxuXHJcbiAgICBzdGF0ZV9kaXYuc3R5bGUuZm9udFNpemUgPSB0aGlzLl9mb250X3NpemU7XHJcbiAgICBzdGF0ZV9kaXYuc3R5bGUuY29sb3IgPSB0aGlzLl9mb250X2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgdGhpcy5fZmlyZSgnaGFzcy1tb3JlLWluZm8nLCB7IGVudGl0eUlkOiB0aGlzLl9jb25maWcuZW50aXR5IH0pO1xyXG4gIH1cclxuXHJcbiAgX2ZpcmUodHlwZSwgZGV0YWlsKSB7XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgY29tcG9zZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsIHx8IHt9O1xyXG4gICAgdGhpcy5fcm9vdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcbiAgLypcclxuICAgIFJldHVybnMgdGhlIHN0YXRlIGltYWdlIGZvciBzcGVjaWZpYyBzdGF0ZSBcclxuICAgIG9yIGRlZmF1bHQgaW1hZ2UgaWYgbm90IHNwZWNpZmljIHN0YXRlIGltYWdlIGZvdW5kXHJcbiAgKi9cclxuICBfZ2V0U3RhdGVJbWFnZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlIGluIHRoaXMuX2NvbmZpZy5zdGF0ZV9pbWFnZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnN0YXRlX2ltYWdlW3RoaXMuc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5pbWFnZTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyhjb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGVudGl0eSBkZWZpbmVkJylcclxuICAgIH1cclxuICAgIGlmICghY29uZmlnLmltYWdlKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBpbWFnZSBkZWZpbmVkJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jYXJkX2hlaWdodCA9IGNvbmZpZy5jYXJkX2hlaWdodCA/IGNvbmZpZy5jYXJkX2hlaWdodCA6ICcyMDBweCc7XHJcbiAgICB0aGlzLl9mb250X2NvbG9yID0gY29uZmlnLmZvbnRfY29sb3IgPyBjb25maWcuZm9udF9jb2xvciA6ICd3aGl0ZSc7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0IGhhc3MoaGFzcykge1xyXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XHJcblxyXG4gICAgdmFyIGVudGl0eVN0YXRlID0gdGhpcy5faGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV0uc3RhdGVcclxuICAgIGlmIChlbnRpdHlTdGF0ZSAhPSB0aGlzLnN0YXRlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBlbnRpdHlTdGF0ZTsgLy8gVGhpcyB0cmlnZ2VycyBfcmVuZGVyIHNpbmNlIExpdEVsZW1lbnQgc3VwcG9ydCB0d28gd2F5IGJpbmRpbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhhc3M6IE9iamVjdCxcclxuICAgICAgY29uZmlnOiBPYmplY3QsXHJcbiAgICAgIHN0YXRlOiBTdHJpbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENhcmRTaXplKCkge1xyXG4gICAgcmV0dXJuIDI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvLyBXZSBjaGVjayBpZiB3ZSBoYXZlIHNldCB0aGUgZW52aXJvbm1lbnQgdmFyIHRvIHByb2R1Y3Rpb24sIGlmIHNvIHdlIGRvbnQgbG9hZCB0ZXN0ZGF0YVxyXG4gICAgLy8gdGhpcyBlbnZpcm9ubWVudCBpcyBzZXQgaW4gd2VicGFjay5wcm9kLmpzXHJcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdGhpcy5fX2luaXRUZXN0cygpOyAvLyBJbml0IHRlc3RkYXRhIGlmIHdlIGFyZSBpIGRldlxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIEkgdXNlIHRoaXMgaW4gbXkgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gbWFrZSBhIHZlcnkgc2ltcGxlIG1vY2sgb2YgY29uZmlnL2hhc3Mgb2JqZWN0cyBcclxuICAqL1xyXG4gIF9faW5pdFRlc3RzKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdIb21lJztcclxuICAgIHZhciB0ZXN0X2NvbmZpZyA9IHsgZW50aXR5OiAnZGV2aWNlX3RyYWNrZXIuYW55JywgaW1hZ2U6ICcvZGlzdC9pbWcvcHJlc2VuY2UvdG9tYXNfcHJlc2VuY2VfYXdheS5qcGcnLCBzdGF0ZV9pbWFnZToge30gfTsgLy8sIGZvbnRfc2l6ZTogJzFldidcclxuICAgIHRlc3RfY29uZmlnLnN0YXRlX2ltYWdlWydIb21lJ10gPSAnL2Rpc3QvaW1nL3ByZXNlbmNlL3RvbWFzX3ByZXNlbmNlX2F3YXkuanBnJ1xyXG5cclxuICAgIHZhciB0ZXN0X2hhc3MgPSB7IHN0YXRlczogW10gfTtcclxuICAgIHRlc3RfaGFzcy5zdGF0ZXNbdGVzdF9jb25maWcuZW50aXR5XSA9IFwiSG9tZVwiO1xyXG4gICAgdGhpcy5zZXRDb25maWcodGVzdF9jb25maWcpO1xyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwaWN0dXJlLXN0YXR1cy1jYXJkJywgUGljdHVyZVN0YXR1c0NhcmQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9