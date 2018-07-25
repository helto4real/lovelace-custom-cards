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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/picture-status-card/picture-status-card.js":
/*!********************************************************!*\
  !*** ./src/picture-status-card/picture-status-card.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js");

// Use when dev outside HASS and build using npm

// Use when deploy directly to HASS without complie and stuff. 
//import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

/**
 * `picture-status-element`
 * Lovelace element for displaying status on a picture bottom centered on a shadow
 */
class PictureStatusElement extends _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
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
              font-size: 0.8em;
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

    this._font_size = config.font_size ? config.font_size : '1.5em';
    this._card_height = config.card_height ? config.card_height : '150px';
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

window.customElements.define('picture-status-card', PictureStatusElement);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/picture-status-card/picture-status-card.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/picture-status-card/picture-status-card.js */"./src/picture-status-card/picture-status-card.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1jaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2xpdC1leHRlbmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL21vZGlmeS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3NoYWR5LXJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS1zdGF0dXMtY2FyZC9waWN0dXJlLXN0YXR1cy1jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztB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QUFDbkY7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVyxVQUFVLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVcsVUFBVSxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7QUFDUjtBQUN0QjtBQUNwQztBQUNBLG9EQUFvRCxLQUFLLElBQUksVUFBVTtBQUN2RTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVcsVUFBVSxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLGtDQUFrQyxPQUFPLEdBQUcsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7OztBQ3pvQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMdEM7QUFDMkI7QUFDM0I7QUFDQSxVQUFVLG1CQUFtQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0JBQW9CO0FBQzVELGdEQUFnRCxXQUFXO0FBQzNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLHNCQUFzQjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUFxRixRQUFROztBQUU3Rix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtR0FBbUcsR0FBRztBQUM3SDs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjdXN0b20tY2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTWl4aW4gfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1taXhpbi5qcyc7XG5pbXBvcnQgeyBjYW1lbFRvRGFzaENhc2UgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9jYXNlLW1hcC5qcyc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdsaXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzJztcbmV4cG9ydCB7IGh0bWwsIHN2ZyB9IGZyb20gJ2xpdC1odG1sL2xpYi9saXQtZXh0ZW5kZWQuanMnO1xuLyoqXG4gKiBSZW5kZXJzIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYmFzZWQgb24gdGhlIGBhdHRySW5mb2Agb2JqZWN0IHdoZXJlXG4gKiBib29sZWFuIHZhbHVlcyBhcmUgYWRkZWQvcmVtb3ZlZCBhcyBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBvbiB3aGljaCB0byBzZXQgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSBhdHRySW5mbyBPYmplY3QgZGVzY3JpYmluZyBhdHRyaWJ1dGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQXR0cmlidXRlcyhlbGVtZW50LCBhdHRySW5mbykge1xuICAgIGZvciAoY29uc3QgYSBpbiBhdHRySW5mbykge1xuICAgICAgICBjb25zdCB2ID0gYXR0ckluZm9bYV0gPT09IHRydWUgPyAnJyA6IGF0dHJJbmZvW2FdO1xuICAgICAgICBpZiAodiB8fCB2ID09PSAnJyB8fCB2ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYSkgIT09IHYpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhLCBTdHJpbmcodikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKGEpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyBvZiBjc3MgY2xhc3MgbmFtZXMgZm9ybWVkIGJ5IHRha2luZyB0aGUgcHJvcGVydGllc1xuICogaW4gdGhlIGBjbGFzc0luZm9gIG9iamVjdCBhbmQgYXBwZW5kaW5nIHRoZSBwcm9wZXJ0eSBuYW1lIHRvIHRoZSBzdHJpbmcgb2ZcbiAqIGNsYXNzIG5hbWVzIGlmIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyB0cnV0aHkuXG4gKiBAcGFyYW0gY2xhc3NJbmZvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc1N0cmluZyhjbGFzc0luZm8pIHtcbiAgICBjb25zdCBvID0gW107XG4gICAgZm9yIChjb25zdCBuYW1lIGluIGNsYXNzSW5mbykge1xuICAgICAgICBjb25zdCB2ID0gY2xhc3NJbmZvW25hbWVdO1xuICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgby5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvLmpvaW4oJyAnKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGNzcyBzdHlsZSBzdHJpbmcgZm9ybWVkIGJ5IHRha2luZyB0aGUgcHJvcGVydGllcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYXBwZW5kaW5nIHRoZSBwcm9wZXJ0eSBuYW1lIChkYXNoLWNhc2VkKSBjb2xvbiB0aGVcbiAqIHByb3BlcnR5IHZhbHVlLiBQcm9wZXJ0aWVzIGFyZSBzZXBhcmF0ZWQgYnkgYSBzZW1pLWNvbG9uLlxuICogQHBhcmFtIHN0eWxlSW5mb1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVTdHJpbmcoc3R5bGVJbmZvKSB7XG4gICAgY29uc3QgbyA9IFtdO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgY29uc3QgdiA9IHN0eWxlSW5mb1tuYW1lXTtcbiAgICAgICAgaWYgKHYgfHwgdiA9PT0gMCkge1xuICAgICAgICAgICAgby5wdXNoKGAke2NhbWVsVG9EYXNoQ2FzZShuYW1lKX06ICR7dn1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gby5qb2luKCc7ICcpO1xufVxuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBQcm9wZXJ0aWVzTWl4aW4oSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fX3JlbmRlckNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX19pc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgd2hpY2ggc2V0cyB1cCBlbGVtZW50IHJlbmRlcmluZyBieSBjYWxsaW5nKiBgX2NyZWF0ZVJvb3RgXG4gICAgICogYW5kIGBfZmlyc3RSZW5kZXJlZGAuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl9jcmVhdGVSb290KCk7XG4gICAgICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgICAgIHRoaXMuX2ZpcnN0UmVuZGVyZWQoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MgJiYgdGhpcy5fcm9vdCkge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgRE9NIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICAgKiBJbXBsZW1lbnQgdG8gcGVyZm9ybSB0YXNrcyBhZnRlciBmaXJzdCByZW5kZXJpbmcgbGlrZSBjYXB0dXJpbmcgYVxuICAgICAqIHJlZmVyZW5jZSB0byBhIHN0YXRpYyBub2RlIHdoaWNoIG11c3QgYmUgZGlyZWN0bHkgbWFuaXB1bGF0ZWQuXG4gICAgICogVGhpcyBzaG91bGQgbm90IGJlIGNvbW1vbmx5IG5lZWRlZC4gRm9yIHRhc2tzIHdoaWNoIHNob3VsZCBiZSBwZXJmb3JtZWRcbiAgICAgKiBiZWZvcmUgZmlyc3QgcmVuZGVyLCB1c2UgdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgX2ZpcnN0UmVuZGVyZWQoKSB7IH1cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZSBlbGVtZW50J3MgdGVtcGxhdGUgaXMgcmVuZGVyZWQgYnlcbiAgICAgKiByZXR1cm5pbmcgYW4gZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlci4gQnkgZGVmYXVsdCB0aGlzIGNyZWF0ZXNcbiAgICAgKiBhIHNoYWRvd1Jvb3QgZm9yIHRoZSBlbGVtZW50LiBUbyByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzIGNoaWxkTm9kZXMsXG4gICAgICogcmV0dXJuIGB0aGlzYC5cbiAgICAgKiBAcmV0dXJucyB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICBfY3JlYXRlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB3aGljaCByZXR1cm5zIHRoZSB2YWx1ZSBvZiBgX3Nob3VsZFJlbmRlcmAgd2hpY2ggdXNlcnNcbiAgICAgKiBzaG91bGQgaW1wbGVtZW50IHRvIGNvbnRyb2wgcmVuZGVyaW5nLiBJZiB0aGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlLFxuICAgICAqIF9wcm9wZXJ0aWVzQ2hhbmdlZCB3aWxsIG5vdCBiZSBjYWxsZWQgYW5kIG5vIHJlbmRlcmluZyB3aWxsIG9jY3VyIGV2ZW5cbiAgICAgKiBpZiBwcm9wZXJ0eSB2YWx1ZXMgY2hhbmdlIG9yIGByZXF1ZXN0UmVuZGVyYCBpcyBjYWxsZWQuXG4gICAgICogQHBhcmFtIF9wcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BzIENoYW5naW5nIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBfcHJldlByb3BzIFByZXZpb3VzIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBEZWZhdWx0IGltcGxlbWVudGF0aW9uIGFsd2F5cyByZXR1cm5zIHRydWUuXG4gICAgICovXG4gICAgX3Nob3VsZFByb3BlcnRpZXNDaGFuZ2UoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbmRlciA9IHRoaXMuX3Nob3VsZFJlbmRlcihfcHJvcHMsIF9jaGFuZ2VkUHJvcHMsIF9wcmV2UHJvcHMpO1xuICAgICAgICBpZiAoIXNob3VsZFJlbmRlciAmJiB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hvdWxkUmVuZGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnQgdG8gY29udHJvbCBpZiByZW5kZXJpbmcgc2hvdWxkIG9jY3VyIHdoZW4gcHJvcGVydHkgdmFsdWVzXG4gICAgICogY2hhbmdlIG9yIGByZXF1ZXN0UmVuZGVyYCBpcyBjYWxsZWQuIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGFsd2F5c1xuICAgICAqIHJldHVybnMgdHJ1ZSwgYnV0IHRoaXMgY2FuIGJlIGN1c3RvbWl6ZWQgYXMgYW4gb3B0aW1pemF0aW9uIHRvIGF2b2lkXG4gICAgICogcmVuZGVyaW5nIHdvcmsgd2hlbiBjaGFuZ2VzIG9jY3VyIHdoaWNoIHNob3VsZCBub3QgYmUgcmVuZGVyZWQuXG4gICAgICogQHBhcmFtIF9wcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BzIENoYW5naW5nIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBfcHJldlByb3BzIFByZXZpb3VzIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBEZWZhdWx0IGltcGxlbWVudGF0aW9uIGFsd2F5cyByZXR1cm5zIHRydWUuXG4gICAgICovXG4gICAgX3Nob3VsZFJlbmRlcihfcHJvcHMsIF9jaGFuZ2VkUHJvcHMsIF9wcmV2UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHdoaWNoIHBlcmZvcm1zIGVsZW1lbnQgcmVuZGVyaW5nIGJ5IGNhbGxpbmdcbiAgICAgKiBgX3JlbmRlcmAsIGBfYXBwbHlSZW5kZXJgLCBhbmQgZmluYWxseSBgX2RpZFJlbmRlcmAuXG4gICAgICogQHBhcmFtIHByb3BzIEN1cnJlbnQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIGNoYW5nZWRQcm9wcyBDaGFuZ2luZyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0gcHJldlByb3BzIFByZXZpb3VzIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIF9wcm9wZXJ0aWVzQ2hhbmdlZChwcm9wcywgY2hhbmdlZFByb3BzLCBwcmV2UHJvcHMpIHtcbiAgICAgICAgc3VwZXIuX3Byb3BlcnRpZXNDaGFuZ2VkKHByb3BzLCBjaGFuZ2VkUHJvcHMsIHByZXZQcm9wcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3JlbmRlcihwcm9wcyk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgdGhpcy5fcm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBseVJlbmRlcihyZXN1bHQsIHRoaXMuX3Jvb3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RpZFJlbmRlcihwcm9wcywgY2hhbmdlZFByb3BzLCBwcmV2UHJvcHMpO1xuICAgICAgICBpZiAodGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZmx1c2hQcm9wZXJ0aWVzKCkge1xuICAgICAgICB0aGlzLl9faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX19pc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgc3VwZXIuX2ZsdXNoUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLl9faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB3aGljaCB3YXJucyB3aGVuIGEgdXNlciBhdHRlbXB0cyB0byBjaGFuZ2UgYSBwcm9wZXJ0eSBkdXJpbmdcbiAgICAgKiB0aGUgcmVuZGVyaW5nIGxpZmVjeWNsZS4gVGhpcyBpcyBhbiBhbnRpLXBhdHRlcm4gYW5kIHNob3VsZCBiZSBhdm9pZGVkLlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eSB7c3RyaW5nfVxuICAgICAqIEBwYXJhbSB2YWx1ZSB7YW55fVxuICAgICAqIEBwYXJhbSBvbGQge2FueX1cbiAgICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgX3Nob3VsZFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IHN1cGVyLl9zaG91bGRQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eSwgdmFsdWUsIG9sZCk7XG4gICAgICAgIGlmIChjaGFuZ2UgJiYgdGhpcy5fX2lzQ2hhbmdpbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoYFNldHRpbmcgcHJvcGVydGllcyBpbiByZXNwb25zZSB0byBvdGhlciBwcm9wZXJ0aWVzIGNoYW5naW5nIGAgK1xuICAgICAgICAgICAgICAgIGBjb25zaWRlcmVkIGhhcm1mdWwuIFNldHRpbmcgJyR7cHJvcGVydHl9JyBmcm9tIGAgK1xuICAgICAgICAgICAgICAgIGAnJHt0aGlzLl9nZXRQcm9wZXJ0eShwcm9wZXJ0eSl9JyB0byAnJHt2YWx1ZX0nLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudCB0byBkZXNjcmliZSB0aGUgRE9NIHdoaWNoIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgZWxlbWVudC5cbiAgICAgKiBJZGVhbGx5LCB0aGUgaW1wbGVtZW50YXRpb24gaXMgYSBwdXJlIGZ1bmN0aW9uIHVzaW5nIG9ubHkgcHJvcHMgdG8gZGVzY3JpYmVcbiAgICAgKiB0aGUgZWxlbWVudCB0ZW1wbGF0ZS4gVGhlIGltcGxlbWVudGF0aW9uIG11c3QgcmV0dXJuIGEgYGxpdC1odG1sYFxuICAgICAqIFRlbXBsYXRlUmVzdWx0LiBCeSBkZWZhdWx0IHRoaXMgdGVtcGxhdGUgaXMgcmVuZGVyZWQgaW50byB0aGUgZWxlbWVudCdzXG4gICAgICogc2hhZG93Um9vdC4gVGhpcyBjYW4gYmUgY3VzdG9taXplZCBieSBpbXBsZW1lbnRpbmcgYF9jcmVhdGVSb290YC4gVGhpc1xuICAgICAqIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLlxuICAgICAqIEBwYXJhbSB7Kn0gX3Byb3BzIEN1cnJlbnQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICogQHJldHVybnMge1RlbXBsYXRlUmVzdWx0fSBNdXN0IHJldHVybiBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LlxuICAgICAqL1xuICAgIF9yZW5kZXIoX3Byb3BzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignX3JlbmRlcigpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBnaXZlbiBsaXQtaHRtbCB0ZW1wbGF0ZSBgcmVzdWx0YCBpbnRvIHRoZSBnaXZlbiBgbm9kZWAuXG4gICAgICogSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHJlbmRlcmluZyBpcyBhcHBsaWVkLiBUaGlzIGlzIHNob3VsZCBub3RcbiAgICAgKiB0eXBpY2FsbHkgYmUgbmVlZGVkIGFuZCBpcyBwcm92aWRlZCBmb3IgYWR2YW5jZWQgdXNlIGNhc2VzLlxuICAgICAqIEBwYXJhbSByZXN1bHQge1RlbXBsYXRlUmVzdWx0fSBgbGl0LWh0bWxgIHRlbXBsYXRlIHJlc3VsdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0gbm9kZSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyXG4gICAgICovXG4gICAgX2FwcGx5UmVuZGVyKHJlc3VsdCwgbm9kZSkge1xuICAgICAgICByZW5kZXIocmVzdWx0LCBub2RlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCBhZnRlciBlbGVtZW50IERPTSBoYXMgYmVlbiByZW5kZXJlZC4gSW1wbGVtZW50IHRvXG4gICAgICogZGlyZWN0bHkgY29udHJvbCByZW5kZXJlZCBET00uIFR5cGljYWxseSB0aGlzIGlzIG5vdCBuZWVkZWQgYXMgYGxpdC1odG1sYFxuICAgICAqIGNhbiBiZSB1c2VkIGluIHRoZSBgX3JlbmRlcmAgbWV0aG9kIHRvIHNldCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmRcbiAgICAgKiBldmVudCBsaXN0ZW5lcnMuIEhvd2V2ZXIsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgZm9yIGNhbGxpbmcgbWV0aG9kcyBvblxuICAgICAqIHJlbmRlcmVkIGVsZW1lbnRzLCBsaWtlIGNhbGxpbmcgYGZvY3VzKClgIG9uIGFuIGVsZW1lbnQgdG8gZm9jdXMgaXQuXG4gICAgICogQHBhcmFtIF9wcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BzIENoYW5naW5nIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBfcHJldlByb3BzIFByZXZpb3VzIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIF9kaWRSZW5kZXIoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKSB7IH1cbiAgICAvKipcbiAgICAgKiBDYWxsIHRvIHJlcXVlc3QgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgcmUtcmVuZGVyIHJlZ2FyZGxlc3NcbiAgICAgKiBvZiB3aGV0aGVyIG9yIG5vdCBhbnkgcHJvcGVydHkgY2hhbmdlcyBhcmUgcGVuZGluZy5cbiAgICAgKi9cbiAgICByZXF1ZXN0UmVuZGVyKCkgeyB0aGlzLl9pbnZhbGlkYXRlUHJvcGVydGllcygpOyB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgd2hpY2ggcHJvdmlkZXMgdHJhY2tpbmcgb2YgaW52YWxpZGF0ZWQgc3RhdGUuXG4gICAgICovXG4gICAgX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCkge1xuICAgICAgICB0aGlzLl9faXNJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIGFmdGVyIHRoZSBlbGVtZW50IG5leHQgcmVuZGVycy5cbiAgICAgKiBUaGUgcHJvbWlzZSByZXNvbHZlcyB0byBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgcmVuZGVyZWQgYW5kIGBmYWxzZWAgaWYgdGhlXG4gICAgICogZWxlbWVudCBkaWQgbm90IHJlbmRlci5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzZXJzIChlLmcuIHRlc3RzKSBuZWVkIHRvIHJlYWN0IHRvIHRoZSByZW5kZXJlZCBzdGF0ZVxuICAgICAqIG9mIHRoZSBlbGVtZW50IGFmdGVyIGEgY2hhbmdlIGlzIG1hZGUuXG4gICAgICogVGhpcyBjYW4gYWxzbyBiZSB1c2VmdWwgaW4gZXZlbnQgaGFuZGxlcnMgaWYgaXQgaXMgZGVzaXJlYWJsZSB0byB3YWl0XG4gICAgICogdG8gc2VuZCBhbiBldmVudCB1bnRpbCBhZnRlciByZW5kZXJpbmcuIElmIHBvc3NpYmxlIGltcGxlbWVudCB0aGVcbiAgICAgKiBgX2RpZFJlbmRlcmAgbWV0aG9kIHRvIGRpcmVjdGx5IHJlc3BvbmQgdG8gcmVuZGVyaW5nIHdpdGhpbiB0aGVcbiAgICAgKiByZW5kZXJpbmcgbGlmZWN5Y2xlLlxuICAgICAqL1xuICAgIGdldCByZW5kZXJDb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fcmVuZGVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZW5kZXJDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlID0gdGhpcy5fX3JlbmRlckNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9faXNJbnZhbGlkICYmIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUoZmFsc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fX3JlbmRlckNvbXBsZXRlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4uL3V0aWxzL2Jvb3QuanMnO1xuXG5pbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSAnLi4vdXRpbHMvbWl4aW4uanMnO1xuaW1wb3J0IHsgbWljcm9UYXNrIH0gZnJvbSAnLi4vdXRpbHMvYXN5bmMuanMnO1xuXG4vKiogQGNvbnN0IHshQXN5bmNJbnRlcmZhY2V9ICovXG5jb25zdCBtaWNyb3Rhc2sgPSBtaWNyb1Rhc2s7XG5cbi8qKlxuICogRWxlbWVudCBjbGFzcyBtaXhpbiB0aGF0IHByb3ZpZGVzIGJhc2ljIG1ldGEtcHJvZ3JhbW1pbmcgZm9yIGNyZWF0aW5nIG9uZVxuICogb3IgbW9yZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgKGdldHRlci9zZXR0ZXIgcGFpcikgdGhhdCBlbnF1ZXVlIGFuIGFzeW5jXG4gKiAoYmF0Y2hlZCkgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gKlxuICogRm9yIGJhc2ljIHVzYWdlIG9mIHRoaXMgbWl4aW4sIGNhbGwgYE15Q2xhc3MuY3JlYXRlUHJvcGVydGllcyhwcm9wcylgXG4gKiBvbmNlIGF0IGNsYXNzIGRlZmluaXRpb24gdGltZSB0byBjcmVhdGUgcHJvcGVydHkgYWNjZXNzb3JzIGZvciBwcm9wZXJ0aWVzXG4gKiBuYW1lZCBpbiBwcm9wcywgaW1wbGVtZW50IGBfcHJvcGVydGllc0NoYW5nZWRgIHRvIHJlYWN0IGFzIGRlc2lyZWQgdG9cbiAqIHByb3BlcnR5IGNoYW5nZXMsIGFuZCBpbXBsZW1lbnQgYHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKClgIGFuZFxuICogaW5jbHVkZSBsb3dlcmNhc2UgdmVyc2lvbnMgb2YgYW55IHByb3BlcnR5IG5hbWVzIHRoYXQgc2hvdWxkIGJlIHNldCBmcm9tXG4gKiBhdHRyaWJ1dGVzLiBMYXN0LCBjYWxsIGB0aGlzLl9lbmFibGVQcm9wZXJ0aWVzKClgIGluIHRoZSBlbGVtZW50J3NcbiAqIGBjb25uZWN0ZWRDYWxsYmFja2AgdG8gZW5hYmxlIHRoZSBhY2Nlc3NvcnMuXG4gKlxuICogQG1peGluRnVuY3Rpb25cbiAqIEBwb2x5bWVyXG4gKiBAc3VtbWFyeSBFbGVtZW50IGNsYXNzIG1peGluIGZvciByZWFjdGluZyB0byBwcm9wZXJ0eSBjaGFuZ2VzIGZyb21cbiAqICAgZ2VuZXJhdGVkIHByb3BlcnR5IGFjY2Vzc29ycy5cbiAqL1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNDaGFuZ2VkID0gZGVkdXBpbmdNaXhpbihzdXBlckNsYXNzID0+IHtcblxuICAvKipcbiAgICogQHBvbHltZXJcbiAgICogQG1peGluQ2xhc3NcbiAgICogQGV4dGVuZHMge3N1cGVyQ2xhc3N9XG4gICAqIEBpbXBsZW1lbnRzIHtQb2x5bWVyX1Byb3BlcnRpZXNDaGFuZ2VkfVxuICAgKiBAdW5yZXN0cmljdGVkXG4gICAqL1xuICBjbGFzcyBQcm9wZXJ0aWVzQ2hhbmdlZCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lcy5cbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IHByb3BzIE9iamVjdCB3aG9zZSBrZXlzIGFyZSBuYW1lcyBvZiBhY2Nlc3NvcnMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnRpZXMocHJvcHMpIHtcbiAgICAgIGNvbnN0IHByb3RvID0gdGhpcy5wcm90b3R5cGU7XG4gICAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgIC8vIGRvbid0IHN0b21wIGFuIGV4aXN0aW5nIGFjY2Vzc29yXG4gICAgICAgIGlmICghKHByb3AgaW4gcHJvdG8pKSB7XG4gICAgICAgICAgcHJvdG8uX2NyZWF0ZVByb3BlcnR5QWNjZXNzb3IocHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGF0dHJpYnV0ZSBuYW1lIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZSBhdHRyaWJ1dGUgbmFtZSBpcyB0aGUgbG93ZXJjYXNlZCBwcm9wZXJ0eSBuYW1lLiBPdmVycmlkZSB0b1xuICAgICAqIGN1c3RvbWl6ZSB0aGlzIG1hcHBpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFByb3BlcnR5IHRvIGNvbnZlcnRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBhdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IHRvIHByb3ZpZGUgYSB0eXBlIHRvIHdoaWNoIHRvIGRlc2VyaWFsaXplIGEgdmFsdWUgdG9cbiAgICAgKiBhIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgdHlwZUZvclByb3BlcnR5KG5hbWUpIHsgfSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXR0ZXIvZ2V0dGVyIHBhaXIgZm9yIHRoZSBuYW1lZCBwcm9wZXJ0eSB3aXRoIGl0cyBvd25cbiAgICAgKiBsb2NhbCBzdG9yYWdlLiAgVGhlIGdldHRlciByZXR1cm5zIHRoZSB2YWx1ZSBpbiB0aGUgbG9jYWwgc3RvcmFnZSxcbiAgICAgKiBhbmQgdGhlIHNldHRlciBjYWxscyBgX3NldFByb3BlcnR5YCwgd2hpY2ggdXBkYXRlcyB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAqIGZvciB0aGUgcHJvcGVydHkgYW5kIGVucXVldWVzIGEgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgY2FsbGVkIG9uIGEgcHJvdG90eXBlIG9yIGFuIGluc3RhbmNlLiAgQ2FsbGluZ1xuICAgICAqIHRoaXMgbWV0aG9kIG1heSBvdmVyd3JpdGUgYSBwcm9wZXJ0eSB2YWx1ZSB0aGF0IGFscmVhZHkgZXhpc3RzIG9uXG4gICAgICogdGhlIHByb3RvdHlwZS9pbnN0YW5jZSBieSBjcmVhdGluZyB0aGUgYWNjZXNzb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSByZWFkT25seSBXaGVuIHRydWUsIG5vIHNldHRlciBpcyBjcmVhdGVkOyB0aGVcbiAgICAgKiAgIHByb3RlY3RlZCBgX3NldFByb3BlcnR5YCBmdW5jdGlvbiBtdXN0IGJlIHVzZWQgdG8gc2V0IHRoZSBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9jcmVhdGVQcm9wZXJ0eUFjY2Vzc29yKHByb3BlcnR5LCByZWFkT25seSkge1xuICAgICAgdGhpcy5fYWRkUHJvcGVydHlUb0F0dHJpYnV0ZU1hcChwcm9wZXJ0eSk7XG4gICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ19fZGF0YUhhc0FjY2Vzc29yJykpIHtcbiAgICAgICAgdGhpcy5fX2RhdGFIYXNBY2Nlc3NvciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX19kYXRhSGFzQWNjZXNzb3IpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9fZGF0YUhhc0FjY2Vzc29yW3Byb3BlcnR5XSkge1xuICAgICAgICB0aGlzLl9fZGF0YUhhc0FjY2Vzc29yW3Byb3BlcnR5XSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RlZmluZVByb3BlcnR5QWNjZXNzb3IocHJvcGVydHksIHJlYWRPbmx5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBgcHJvcGVydHlgIHRvIGEgbWFwIG1hdGNoaW5nIGF0dHJpYnV0ZSBuYW1lc1xuICAgICAqIHRvIHByb3BlcnR5IG5hbWVzLCB1c2luZyBgYXR0cmlidXRlTmFtZUZvclByb3BlcnR5YC4gVGhpcyBtYXAgaXNcbiAgICAgKiB1c2VkIHdoZW4gZGVzZXJpYWxpemluZyBhdHRyaWJ1dGUgdmFsdWVzIHRvIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgKi9cbiAgICBfYWRkUHJvcGVydHlUb0F0dHJpYnV0ZU1hcChwcm9wZXJ0eSkge1xuICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdfX2RhdGFBdHRyaWJ1dGVzJykpIHtcbiAgICAgICAgdGhpcy5fX2RhdGFBdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fX2RhdGFBdHRyaWJ1dGVzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fX2RhdGFBdHRyaWJ1dGVzW3Byb3BlcnR5XSkge1xuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocHJvcGVydHkpO1xuICAgICAgICB0aGlzLl9fZGF0YUF0dHJpYnV0ZXNbYXR0cl0gPSBwcm9wZXJ0eTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgcHJvcGVydHkgYWNjZXNzb3IgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSByZWFkT25seSBXaGVuIHRydWUsIG5vIHNldHRlciBpcyBjcmVhdGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICAgX2RlZmluZVByb3BlcnR5QWNjZXNzb3IocHJvcGVydHksIHJlYWRPbmx5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHksIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgdmFsaWQtanNkb2MgKi9cbiAgICAgICAgLyoqIEB0aGlzIHtQcm9wZXJ0aWVzQ2hhbmdlZH0gKi9cbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7UHJvcGVydGllc0NoYW5nZWR9ICovXG4gICAgICAgIHNldDogcmVhZE9ubHkgPyBmdW5jdGlvbiAoKSB7fSA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3NldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fX2RhdGFFbmFibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9fZGF0YVJlYWR5ID0gZmFsc2U7XG4gICAgICB0aGlzLl9fZGF0YUludmFsaWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19kYXRhID0ge307XG4gICAgICB0aGlzLl9fZGF0YVBlbmRpbmcgPSBudWxsO1xuICAgICAgdGhpcy5fX2RhdGFPbGQgPSBudWxsO1xuICAgICAgdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzID0gbnVsbDtcbiAgICAgIHRoaXMuX19zZXJpYWxpemluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaWZlY3ljbGUgY2FsbGJhY2sgY2FsbGVkIHdoZW4gcHJvcGVydGllcyBhcmUgZW5hYmxlZCB2aWFcbiAgICAgKiBgX2VuYWJsZVByb3BlcnRpZXNgLlxuICAgICAqXG4gICAgICogVXNlcnMgbWF5IG92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gdG8gaW1wbGVtZW50IGJlaGF2aW9yIHRoYXQgaXNcbiAgICAgKiBkZXBlbmRlbnQgb24gdGhlIGVsZW1lbnQgaGF2aW5nIGl0cyBwcm9wZXJ0eSBkYXRhIGluaXRpYWxpemVkLCBlLmcuXG4gICAgICogZnJvbSBkZWZhdWx0cyAoaW5pdGlhbGl6ZWQgZnJvbSBgY29uc3RydWN0b3JgLCBgX2luaXRpYWxpemVQcm9wZXJ0aWVzYCksXG4gICAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHZhbHVlcyBwcm9wYWdhdGVkIGZyb20gaG9zdCBlLmcuIHZpYVxuICAgICAqIGJpbmRpbmdzLiAgYHN1cGVyLnJlYWR5KClgIG11c3QgYmUgY2FsbGVkIHRvIGVuc3VyZSB0aGUgZGF0YSBzeXN0ZW1cbiAgICAgKiBiZWNvbWVzIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgIHRoaXMuX19kYXRhUmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcy5fZmx1c2hQcm9wZXJ0aWVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIHByb3BlcnR5IGFjY2Vzc29ycy5cbiAgICAgKlxuICAgICAqIFByb3ZpZGVkIGFzIGFuIG92ZXJyaWRlIHBvaW50IGZvciBwZXJmb3JtaW5nIGFueSBzZXR1cCB3b3JrIHByaW9yXG4gICAgICogdG8gaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eSBhY2Nlc3NvciBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfaW5pdGlhbGl6ZVByb3BlcnRpZXMoKSB7XG4gICAgICAvLyBDYXB0dXJlIGluc3RhbmNlIHByb3BlcnRpZXM7IHRoZXNlIHdpbGwgYmUgc2V0IGludG8gYWNjZXNzb3JzXG4gICAgICAvLyBkdXJpbmcgZmlyc3QgZmx1c2guIERvbid0IHNldCB0aGVtIGhlcmUsIHNpbmNlIHdlIHdhbnRcbiAgICAgIC8vIHRoZXNlIHRvIG92ZXJ3cml0ZSBkZWZhdWx0cy9jb25zdHJ1Y3RvciBhc3NpZ25tZW50c1xuICAgICAgZm9yIChsZXQgcCBpbiB0aGlzLl9fZGF0YUhhc0FjY2Vzc29yKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzID0gdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzIHx8IHt9O1xuICAgICAgICAgIHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wc1twXSA9IHRoaXNbcF07XG4gICAgICAgICAgZGVsZXRlIHRoaXNbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYXQgcmVhZHkgdGltZSB3aXRoIGJhZyBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzIHRoYXQgb3Zlcndyb3RlXG4gICAgICogYWNjZXNzb3JzIHdoZW4gdGhlIGVsZW1lbnQgdXBncmFkZWQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBzZXRzIHRoZXNlIHByb3BlcnRpZXMgYmFjayBpbnRvIHRoZVxuICAgICAqIHNldHRlciBhdCByZWFkeSB0aW1lLiAgVGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgYXMgYW4gb3ZlcnJpZGVcbiAgICAgKiBwb2ludCBmb3IgY3VzdG9taXppbmcgb3IgcHJvdmlkaW5nIG1vcmUgZWZmaWNpZW50IGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIEJhZyBvZiBwcm9wZXJ0eSB2YWx1ZXMgdGhhdCB3ZXJlIG92ZXJ3cml0dGVuXG4gICAgICogICB3aGVuIGNyZWF0aW5nIHByb3BlcnR5IGFjY2Vzc29ycy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfaW5pdGlhbGl6ZUluc3RhbmNlUHJvcGVydGllcyhwcm9wcykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgYSBwcm9wZXJ0eSAodmlhIGBfc2V0UGVuZGluZ1Byb3BlcnR5YClcbiAgICAgKiBhbmQgZW5xdWV1ZXMgYSBgX3Byb2VwcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gc2V0XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3NldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX3NldFBlbmRpbmdQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm4geyp9IFZhbHVlIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2dldFByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2RhdGFbcHJvcGVydHldO1xuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgYSBwcm9wZXJ0eSwgcmVjb3JkcyB0aGUgcHJldmlvdXMgdmFsdWUsXG4gICAgICogYW5kIGFkZHMgaXQgdG8gdGhlIHNldCBvZiBcInBlbmRpbmcgY2hhbmdlc1wiIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suICBUaGlzIG1ldGhvZCBkb2VzIG5vdCBlbnF1ZXVlIHRoZVxuICAgICAqIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBleHQgTm90IHVzZWQgaGVyZTsgYWZmb3JkYW5jZSBmb3IgY2xvc3VyZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfc2V0UGVuZGluZ1Byb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSwgZXh0KSB7XG4gICAgICBsZXQgb2xkID0gdGhpcy5fX2RhdGFbcHJvcGVydHldO1xuICAgICAgbGV0IGNoYW5nZWQgPSB0aGlzLl9zaG91bGRQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eSwgdmFsdWUsIG9sZCk7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBpZiAoIXRoaXMuX19kYXRhUGVuZGluZykge1xuICAgICAgICAgIHRoaXMuX19kYXRhUGVuZGluZyA9IHt9O1xuICAgICAgICAgIHRoaXMuX19kYXRhT2xkID0ge307XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5zdXJlIG9sZCBpcyBjYXB0dXJlZCBmcm9tIHRoZSBsYXN0IHR1cm5cbiAgICAgICAgaWYgKHRoaXMuX19kYXRhT2xkICYmICEocHJvcGVydHkgaW4gdGhpcy5fX2RhdGFPbGQpKSB7XG4gICAgICAgICAgdGhpcy5fX2RhdGFPbGRbcHJvcGVydHldID0gb2xkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19kYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGF0YVBlbmRpbmdbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIHByb3BlcnRpZXMgYXMgaW52YWxpZCwgYW5kIGVucXVldWVzIGFuIGFzeW5jXG4gICAgICogYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfaW52YWxpZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgICBpZiAoIXRoaXMuX19kYXRhSW52YWxpZCAmJiB0aGlzLl9fZGF0YVJlYWR5KSB7XG4gICAgICAgIHRoaXMuX19kYXRhSW52YWxpZCA9IHRydWU7XG4gICAgICAgIG1pY3JvdGFzay5ydW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9fZGF0YUludmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX19kYXRhSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZmx1c2hQcm9wZXJ0aWVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRvIGVuYWJsZSBwcm9wZXJ0eSBhY2Nlc3NvciBwcm9jZXNzaW5nLiBCZWZvcmUgdGhpcyBtZXRob2QgaXNcbiAgICAgKiBjYWxsZWQgYWNjZXNzb3IgdmFsdWVzIHdpbGwgYmUgc2V0IGJ1dCBzaWRlIGVmZmVjdHMgYXJlXG4gICAgICogcXVldWVkLiBXaGVuIGNhbGxlZCwgYW55IHBlbmRpbmcgc2lkZSBlZmZlY3RzIG9jY3VyIGltbWVkaWF0ZWx5LlxuICAgICAqIEZvciBlbGVtZW50cywgZ2VuZXJhbGx5IGBjb25uZWN0ZWRDYWxsYmFja2AgaXMgYSBub3JtYWwgc3BvdCB0byBkbyBzby5cbiAgICAgKiBJdCBpcyBzYWZlIHRvIGNhbGwgdGhpcyBtZXRob2QgbXVsdGlwbGUgdGltZXMgYXMgaXQgb25seSB0dXJucyBvblxuICAgICAqIHByb3BlcnR5IGFjY2Vzc29ycyBvbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2VuYWJsZVByb3BlcnRpZXMoKSB7XG4gICAgICBpZiAoIXRoaXMuX19kYXRhRW5hYmxlZCkge1xuICAgICAgICB0aGlzLl9fZGF0YUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzKSB7XG4gICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUluc3RhbmNlUHJvcGVydGllcyh0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMpO1xuICAgICAgICAgIHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFkeSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjayB3aXRoIHRoZSBjdXJyZW50IHNldCBvZlxuICAgICAqIHBlbmRpbmcgY2hhbmdlcyAoYW5kIG9sZCB2YWx1ZXMgcmVjb3JkZWQgd2hlbiBwZW5kaW5nIGNoYW5nZXMgd2VyZVxuICAgICAqIHNldCksIGFuZCByZXNldHMgdGhlIHBlbmRpbmcgc2V0IG9mIGNoYW5nZXMuIEdlbmVyYWxseSwgdGhpcyBtZXRob2RcbiAgICAgKiBzaG91bGQgbm90IGJlIGNhbGxlZCBpbiB1c2VyIGNvZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfZmx1c2hQcm9wZXJ0aWVzKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLl9fZGF0YTtcbiAgICAgIGNvbnN0IGNoYW5nZWRQcm9wcyA9IHRoaXMuX19kYXRhUGVuZGluZztcbiAgICAgIGNvbnN0IG9sZCA9IHRoaXMuX19kYXRhT2xkO1xuICAgICAgaWYgKHRoaXMuX3Nob3VsZFByb3BlcnRpZXNDaGFuZ2UocHJvcHMsIGNoYW5nZWRQcm9wcywgb2xkKSkge1xuICAgICAgICB0aGlzLl9fZGF0YVBlbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9fZGF0YU9sZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXNDaGFuZ2VkKHByb3BzLCBjaGFuZ2VkUHJvcHMsIG9sZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGluIGBfZmx1c2hQcm9wZXJ0aWVzYCB0byBkZXRlcm1pbmUgaWYgYF9wcm9wZXJ0aWVzQ2hhbmdlZGBcbiAgICAgKiBzaG91bGQgYmUgY2FsbGVkLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5zIHRydWUgaWZcbiAgICAgKiBwcm9wZXJ0aWVzIGFyZSBwZW5kaW5nLiBPdmVycmlkZSB0byBjdXN0b21pemUgd2hlblxuICAgICAqIGBfcHJvcGVydGllc0NoYW5nZWRgIGlzIGNhbGxlZC5cbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IGN1cnJlbnRQcm9wcyBCYWcgb2YgYWxsIGN1cnJlbnQgYWNjZXNzb3IgdmFsdWVzXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBjaGFuZ2VkUHJvcHMgQmFnIG9mIHByb3BlcnRpZXMgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdFxuICAgICAqICAgY2FsbCB0byBgX3Byb3BlcnRpZXNDaGFuZ2VkYFxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gb2xkUHJvcHMgQmFnIG9mIHByZXZpb3VzIHZhbHVlcyBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAqICAgaW4gYGNoYW5nZWRQcm9wc2BcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGNoYW5nZWRQcm9wcyBpcyB0cnV0aHlcbiAgICAgKi9cbiAgICBfc2hvdWxkUHJvcGVydGllc0NoYW5nZShjdXJyZW50UHJvcHMsIGNoYW5nZWRQcm9wcywgb2xkUHJvcHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIEJvb2xlYW4oY2hhbmdlZFByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiBhbnkgcHJvcGVydGllcyB3aXRoIGFjY2Vzc29ycyBjcmVhdGVkIHZpYVxuICAgICAqIGBfY3JlYXRlUHJvcGVydHlBY2Nlc3NvcmAgaGF2ZSBiZWVuIHNldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gY3VycmVudFByb3BzIEJhZyBvZiBhbGwgY3VycmVudCBhY2Nlc3NvciB2YWx1ZXNcbiAgICAgKiBAcGFyYW0geyFPYmplY3R9IGNoYW5nZWRQcm9wcyBCYWcgb2YgcHJvcGVydGllcyBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0XG4gICAgICogICBjYWxsIHRvIGBfcHJvcGVydGllc0NoYW5nZWRgXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBvbGRQcm9wcyBCYWcgb2YgcHJldmlvdXMgdmFsdWVzIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICogICBpbiBgY2hhbmdlZFByb3BzYFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9wcm9wZXJ0aWVzQ2hhbmdlZChjdXJyZW50UHJvcHMsIGNoYW5nZWRQcm9wcywgb2xkUHJvcHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBjYWxsZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBwcm9wZXJ0eSB2YWx1ZSBzaG91bGQgYmVcbiAgICAgKiBjb25zaWRlcmVkIGFzIGEgY2hhbmdlIGFuZCBjYXVzZSB0aGUgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2tcbiAgICAgKiB0byBiZSBlbnF1ZXVlZC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnMgYHRydWVgIGlmIGEgc3RyaWN0IGVxdWFsaXR5XG4gICAgICogY2hlY2sgZmFpbHMuIFRoZSBtZXRob2QgYWx3YXlzIHJldHVybnMgZmFsc2UgZm9yIGBOYU5gLlxuICAgICAqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gZS5nLiBwcm92aWRlIHN0cmljdGVyIGNoZWNraW5nIGZvclxuICAgICAqIE9iamVjdHMvQXJyYXlzIHdoZW4gdXNpbmcgaW1tdXRhYmxlIHBhdHRlcm5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFByb3BlcnR5IG5hbWVcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIE5ldyBwcm9wZXJ0eSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Kn0gb2xkIFByZXZpb3VzIHByb3BlcnR5IHZhbHVlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSBjaGFuZ2VcbiAgICAgKiAgIGFuZCBlbnF1ZXVlIGEgYF9wcm9lcHJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2tcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3Nob3VsZFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBTdHJpY3QgZXF1YWxpdHkgY2hlY2tcbiAgICAgICAgKG9sZCAhPT0gdmFsdWUgJiZcbiAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgICAgICAgIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRzIG5hdGl2ZSBDdXN0b20gRWxlbWVudHMgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdG9cbiAgICAgKiBzZXQgYW4gYXR0cmlidXRlIHZhbHVlIHRvIGEgcHJvcGVydHkgdmlhIGBfYXR0cmlidXRlVG9Qcm9wZXJ0eWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIGF0dHJpYnV0ZSB0aGF0IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IG9sZCBPbGQgYXR0cmlidXRlIHZhbHVlXG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSB2YWx1ZSBOZXcgYXR0cmlidXRlIHZhbHVlXG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2UgQXR0cmlidXRlIG5hbWVzcGFjZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9IFN1cGVyIG1heSBvciBtYXkgbm90IGltcGxlbWVudCB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkLCB2YWx1ZSwgbmFtZXNwYWNlKSB7XG4gICAgICBpZiAob2xkICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHtcbiAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIGFuIGF0dHJpYnV0ZSB0byBpdHMgYXNzb2NpYXRlZCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbGxzIHRoZSBgX2Rlc2VyaWFsaXplVmFsdWVgIG1ldGhvZCB0byBjb252ZXJ0IHRoZSBzdHJpbmcgdG9cbiAgICAgKiBhIHR5cGVkIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSBOYW1lIG9mIGF0dHJpYnV0ZSB0byBkZXNlcmlhbGl6ZS5cbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIHsqPX0gdHlwZSB0eXBlIHRvIGRlc2VyaWFsaXplIHRvLCBkZWZhdWx0cyB0byB0aGUgdmFsdWVcbiAgICAgKiByZXR1cm5lZCBmcm9tIGB0eXBlRm9yUHJvcGVydHlgXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBfYXR0cmlidXRlVG9Qcm9wZXJ0eShhdHRyaWJ1dGUsIHZhbHVlLCB0eXBlKSB7XG4gICAgICBpZiAoIXRoaXMuX19zZXJpYWxpemluZykge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLl9fZGF0YUF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gbWFwICYmIG1hcFthdHRyaWJ1dGVdIHx8IGF0dHJpYnV0ZTtcbiAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSB0aGlzLl9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlLCB0eXBlIHx8XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlRm9yUHJvcGVydHkocHJvcGVydHkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgcHJvcGVydHkgdG8gaXRzIGFzc29jaWF0ZWQgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHN1cHByZXNzIHtpbnZhbGlkQ2FzdHN9IENsb3N1cmUgY2FuJ3QgZmlndXJlIG91dCBgdGhpc2AgaXMgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBQcm9wZXJ0eSBuYW1lIHRvIHJlZmxlY3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhdHRyaWJ1dGUgQXR0cmlidXRlIG5hbWUgdG8gcmVmbGVjdCB0by5cbiAgICAgKiBAcGFyYW0geyo9fSB2YWx1ZSBQcm9wZXJ0eSB2YWx1ZSB0byByZWZlY3QuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBfcHJvcGVydHlUb0F0dHJpYnV0ZShwcm9wZXJ0eSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgdGhpcy5fX3NlcmlhbGl6aW5nID0gdHJ1ZTtcbiAgICAgIHZhbHVlID0gKGFyZ3VtZW50cy5sZW5ndGggPCAzKSA/IHRoaXNbcHJvcGVydHldIDogdmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZVRvTm9kZUF0dHJpYnV0ZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8odGhpcyksIHZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocHJvcGVydHkpKTtcbiAgICAgIHRoaXMuX19zZXJpYWxpemluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYSB0eXBlZCB2YWx1ZSB0byBhbiBIVE1MIGF0dHJpYnV0ZSBvbiBhIG5vZGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYWxscyB0aGUgYF9zZXJpYWxpemVWYWx1ZWAgbWV0aG9kIHRvIGNvbnZlcnQgdGhlIHR5cGVkXG4gICAgICogdmFsdWUgdG8gYSBzdHJpbmcuICBJZiB0aGUgYF9zZXJpYWxpemVWYWx1ZWAgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAsXG4gICAgICogdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQgKHRoaXMgaXMgdGhlIGRlZmF1bHQgZm9yIGJvb2xlYW5cbiAgICAgKiB0eXBlIGBmYWxzZWApLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlIEVsZW1lbnQgdG8gc2V0IGF0dHJpYnV0ZSB0by5cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHNlcmlhbGl6ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIEF0dHJpYnV0ZSBuYW1lIHRvIHNlcmlhbGl6ZSB0by5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIF92YWx1ZVRvTm9kZUF0dHJpYnV0ZShub2RlLCB2YWx1ZSwgYXR0cmlidXRlKSB7XG4gICAgICBjb25zdCBzdHIgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHR5cGVkIEphdmFTY3JpcHQgdmFsdWUgdG8gYSBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBzZXR0aW5nIEpTIHByb3BlcnR5IHZhbHVlcyB0b1xuICAgICAqIEhUTUwgYXR0cmlidXRlcy4gIFVzZXJzIG1heSBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlXG4gICAgICogc2VyaWFsaXphdGlvbiBmb3IgY3VzdG9tIHR5cGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBQcm9wZXJ0eSB2YWx1ZSB0byBzZXJpYWxpemUuXG4gICAgICogQHJldHVybiB7c3RyaW5nIHwgdW5kZWZpbmVkfSBTdHJpbmcgc2VyaWFsaXplZCBmcm9tIHRoZSBwcm92aWRlZFxuICAgICAqIHByb3BlcnR5ICB2YWx1ZS5cbiAgICAgKi9cbiAgICBfc2VyaWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIHJldHVybiB2YWx1ZSA/ICcnIDogdW5kZWZpbmVkO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gdmFsdWUudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0cmluZyB0byBhIHR5cGVkIEphdmFTY3JpcHQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiByZWFkaW5nIEhUTUwgYXR0cmlidXRlIHZhbHVlcyB0b1xuICAgICAqIEpTIHByb3BlcnRpZXMuICBVc2VycyBtYXkgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZVxuICAgICAqIGRlc2VyaWFsaXphdGlvbiBmb3IgY3VzdG9tIGB0eXBlYHMuIFR5cGVzIGZvciBgQm9vbGVhbmAsIGBTdHJpbmdgLFxuICAgICAqIGFuZCBgTnVtYmVyYCBjb252ZXJ0IGF0dHJpYnV0ZXMgdG8gdGhlIGV4cGVjdGVkIHR5cGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSB2YWx1ZSBWYWx1ZSB0byBkZXNlcmlhbGl6ZS5cbiAgICAgKiBAcGFyYW0geyo9fSB0eXBlIFR5cGUgdG8gZGVzZXJpYWxpemUgdGhlIHN0cmluZyB0by5cbiAgICAgKiBAcmV0dXJuIHsqfSBUeXBlZCB2YWx1ZSBkZXNlcmlhbGl6ZWQgZnJvbSB0aGUgcHJvdmlkZWQgc3RyaW5nLlxuICAgICAqL1xuICAgIF9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlLCB0eXBlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgIHJldHVybiAodmFsdWUgIT09IG51bGwpO1xuICAgICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gUHJvcGVydGllc0NoYW5nZWQ7XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4uL3V0aWxzL2Jvb3QuanMnO1xuXG5pbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSAnLi4vdXRpbHMvbWl4aW4uanMnO1xuaW1wb3J0IHsgUHJvcGVydGllc0NoYW5nZWQgfSBmcm9tICcuL3Byb3BlcnRpZXMtY2hhbmdlZC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvcHkgb2YgYHByb3BzYCB3aXRoIGVhY2ggcHJvcGVydHkgbm9ybWFsaXplZCBzdWNoIHRoYXRcbiAqIHVwZ3JhZGVkIGl0IGlzIGFuIG9iamVjdCB3aXRoIGF0IGxlYXN0IGEgdHlwZSBwcm9wZXJ0eSB7IHR5cGU6IFR5cGV9LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wZXJ0aWVzIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybiB7T2JqZWN0fSBDb3B5IG9mIGlucHV0IGBwcm9wc2Agd2l0aCBub3JtYWxpemVkIHByb3BlcnRpZXMgdGhhdFxuICogYXJlIGluIHRoZSBmb3JtIHt0eXBlOiBUeXBlfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydGllcyhwcm9wcykge1xuICBjb25zdCBvdXRwdXQgPSB7fTtcbiAgZm9yIChsZXQgcCBpbiBwcm9wcykge1xuICAgIGNvbnN0IG8gPSBwcm9wc1twXTtcbiAgICBvdXRwdXRbcF0gPSAodHlwZW9mIG8gPT09ICdmdW5jdGlvbicpID8ge3R5cGU6IG99IDogbztcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIE1peGluIHRoYXQgcHJvdmlkZXMgYSBtaW5pbWFsIHN0YXJ0aW5nIHBvaW50IHRvIHVzaW5nIHRoZSBQcm9wZXJ0aWVzQ2hhbmdlZFxuICogbWl4aW4gYnkgcHJvdmlkaW5nIGEgbWVjaGFuaXNtIHRvIGRlY2xhcmUgcHJvcGVydGllcyBpbiBhIHN0YXRpY1xuICogZ2V0dGVyIChlLmcuIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHsgcmV0dXJuIHsgZm9vOiBTdHJpbmcgfSB9KS4gQ2hhbmdlc1xuICogYXJlIHJlcG9ydGVkIHZpYSB0aGUgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgbWV0aG9kLlxuICpcbiAqIFRoaXMgbWl4aW4gcHJvdmlkZXMgbm8gc3BlY2lmaWMgc3VwcG9ydCBmb3IgcmVuZGVyaW5nLiBVc2VycyBhcmUgZXhwZWN0ZWRcbiAqIHRvIGNyZWF0ZSBhIFNoYWRvd1Jvb3QgYW5kIHB1dCBjb250ZW50IGludG8gaXQgYW5kIHVwZGF0ZSBpdCBpbiB3aGF0ZXZlclxuICogd2F5IG1ha2VzIHNlbnNlLiBUaGlzIGNhbiBiZSBkb25lIGluIHJlYWN0aW9uIHRvIHByb3BlcnRpZXMgY2hhbmdpbmcgYnlcbiAqIGltcGxlbWVudGluZyBgX3Byb3BlcnRpZXNDaGFuZ2VkYC5cbiAqXG4gKiBAbWl4aW5GdW5jdGlvblxuICogQHBvbHltZXJcbiAqIEBhcHBsaWVzTWl4aW4gUHJvcGVydGllc0NoYW5nZWRcbiAqIEBzdW1tYXJ5IE1peGluIHRoYXQgcHJvdmlkZXMgYSBtaW5pbWFsIHN0YXJ0aW5nIHBvaW50IGZvciB1c2luZ1xuICogdGhlIFByb3BlcnRpZXNDaGFuZ2VkIG1peGluIGJ5IHByb3ZpZGluZyBhIGRlY2xhcmF0aXZlIGBwcm9wZXJ0aWVzYCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzTWl4aW4gPSBkZWR1cGluZ01peGluKHN1cGVyQ2xhc3MgPT4ge1xuXG4gLyoqXG4gICogQGNvbnN0cnVjdG9yXG4gICogQGV4dGVuZHMge3N1cGVyQ2xhc3N9XG4gICogQGltcGxlbWVudHMge1BvbHltZXJfUHJvcGVydGllc0NoYW5nZWR9XG4gICovXG4gY29uc3QgYmFzZSA9IFByb3BlcnRpZXNDaGFuZ2VkKHN1cGVyQ2xhc3MpO1xuXG4gLyoqXG4gICogUmV0dXJucyB0aGUgc3VwZXIgY2xhc3MgY29uc3RydWN0b3IgZm9yIHRoZSBnaXZlbiBjbGFzcywgaWYgaXQgaXMgYW5cbiAgKiBpbnN0YW5jZSBvZiB0aGUgUHJvcGVydGllc01peGluLlxuICAqXG4gICogQHBhcmFtIHshUHJvcGVydGllc01peGluQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yIFByb3BlcnRpZXNNaXhpbiBjb25zdHJ1Y3RvclxuICAqIEByZXR1cm4ge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSBTdXBlciBjbGFzcyBjb25zdHJ1Y3RvclxuICAqL1xuIGZ1bmN0aW9uIHN1cGVyUHJvcGVydGllc0NsYXNzKGNvbnN0cnVjdG9yKSB7XG4gICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29uc3RydWN0b3IpO1xuXG4gICAvLyBOb3RlLCB0aGUgYFByb3BlcnRpZXNNaXhpbmAgY2xhc3MgYmVsb3cgb25seSByZWZlcnMgdG8gdGhlIGNsYXNzXG4gICAvLyBnZW5lcmF0ZWQgYnkgdGhpcyBjYWxsIHRvIHRoZSBtaXhpbjsgdGhlIGluc3RhbmNlb2YgdGVzdCBvbmx5IHdvcmtzXG4gICAvLyBiZWNhdXNlIHRoZSBtaXhpbiBpcyBkZWR1cGVkIGFuZCBndWFyYW50ZWVkIG9ubHkgdG8gYXBwbHkgb25jZSwgaGVuY2VcbiAgIC8vIGFsbCBjb25zdHJ1Y3RvcnMgaW4gYSBwcm90byBjaGFpbiB3aWxsIHNlZSB0aGUgc2FtZSBgUHJvcGVydGllc01peGluYFxuICAgcmV0dXJuIChzdXBlckN0b3IucHJvdG90eXBlIGluc3RhbmNlb2YgUHJvcGVydGllc01peGluKSA/XG4gICAgIC8qKiBAdHlwZSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9ICovIChzdXBlckN0b3IpIDogbnVsbDtcbiB9XG5cbiAvKipcbiAgKiBSZXR1cm5zIGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiB0aGUgYHByb3BlcnRpZXNgIG9iamVjdCBmb3IgdGhlXG4gICogZ2l2ZW4gY2xhc3MuIFByb3BlcnRpZXMgbm90IGluIG9iamVjdCBmb3JtYXQgYXJlIGNvbnZlcnRlZCB0byBhdFxuICAqIGxlYXN0IHt0eXBlfS5cbiAgKlxuICAqIEBwYXJhbSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yIFByb3BlcnRpZXNNaXhpbiBjb25zdHJ1Y3RvclxuICAqIEByZXR1cm4ge09iamVjdH0gTWVtb2l6ZWQgcHJvcGVydGllcyBvYmplY3RcbiAgKi9cbiBmdW5jdGlvbiBvd25Qcm9wZXJ0aWVzKGNvbnN0cnVjdG9yKSB7XG4gICBpZiAoIWNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ19fb3duUHJvcGVydGllcycsIGNvbnN0cnVjdG9yKSkpIHtcbiAgICAgbGV0IHByb3BzID0gbnVsbDtcblxuICAgICBpZiAoY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIGNvbnN0cnVjdG9yKSkgJiYgY29uc3RydWN0b3IucHJvcGVydGllcykge1xuICAgICAgIHByb3BzID0gbm9ybWFsaXplUHJvcGVydGllcyhjb25zdHJ1Y3Rvci5wcm9wZXJ0aWVzKTtcbiAgICAgfVxuXG4gICAgIGNvbnN0cnVjdG9yLl9fb3duUHJvcGVydGllcyA9IHByb3BzO1xuICAgfVxuICAgcmV0dXJuIGNvbnN0cnVjdG9yLl9fb3duUHJvcGVydGllcztcbiB9XG5cbiAvKipcbiAgKiBAcG9seW1lclxuICAqIEBtaXhpbkNsYXNzXG4gICogQGV4dGVuZHMge2Jhc2V9XG4gICogQGltcGxlbWVudHMge1BvbHltZXJfUHJvcGVydGllc01peGlufVxuICAqIEB1bnJlc3RyaWN0ZWRcbiAgKi9cbiBjbGFzcyBQcm9wZXJ0aWVzTWl4aW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgLyoqXG4gICAgKiBJbXBsZW1lbnRzIHN0YW5kYXJkIGN1c3RvbSBlbGVtZW50cyBnZXR0ZXIgdG8gb2JzZXJ2ZXMgdGhlIGF0dHJpYnV0ZXNcbiAgICAqIGxpc3RlZCBpbiBgcHJvcGVydGllc2AuXG4gICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfSBJbnRlcmZhY2VzIGluIGNsb3N1cmUgZG8gbm90IGluaGVyaXQgc3RhdGljcywgYnV0IGNsYXNzZXMgZG9cbiAgICAqL1xuICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgIGNvbnN0IHByb3BzID0gdGhpcy5fcHJvcGVydGllcztcbiAgICAgcmV0dXJuIHByb3BzID8gT2JqZWN0LmtleXMocHJvcHMpLm1hcChwID0+IHRoaXMuYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHApKSA6IFtdO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEZpbmFsaXplcyBhbiBlbGVtZW50IGRlZmluaXRpb24sIGluY2x1ZGluZyBlbnN1cmluZyBhbnkgc3VwZXIgY2xhc3Nlc1xuICAgICogYXJlIGFsc28gZmluYWxpemVkLiBUaGlzIGluY2x1ZGVzIGVuc3VyaW5nIHByb3BlcnR5XG4gICAgKiBhY2Nlc3NvcnMgZXhpc3Qgb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlLiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICogYF9maW5hbGl6ZUNsYXNzYCB0byBmaW5hbGl6ZSBlYWNoIGNvbnN0cnVjdG9yIGluIHRoZSBwcm90b3R5cGUgY2hhaW4uXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdfX2ZpbmFsaXplZCcsIHRoaXMpKSkge1xuICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IHN1cGVyUHJvcGVydGllc0NsYXNzKC8qKiBAdHlwZSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9ICovKHRoaXMpKTtcbiAgICAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICB9XG4gICAgICAgdGhpcy5fX2ZpbmFsaXplZCA9IHRydWU7XG4gICAgICAgdGhpcy5fZmluYWxpemVDbGFzcygpO1xuICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogRmluYWxpemUgYW4gZWxlbWVudCBjbGFzcy4gVGhpcyBpbmNsdWRlcyBlbnN1cmluZyBwcm9wZXJ0eVxuICAgICogYWNjZXNzb3JzIGV4aXN0IG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5XG4gICAgKiBgZmluYWxpemVgIGFuZCBmaW5hbGl6ZXMgdGhlIGNsYXNzIGNvbnN0cnVjdG9yLlxuICAgICpcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgc3RhdGljIF9maW5hbGl6ZUNsYXNzKCkge1xuICAgICBjb25zdCBwcm9wcyA9IG93blByb3BlcnRpZXMoLyoqIEB0eXBlIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gKi8odGhpcykpO1xuICAgICBpZiAocHJvcHMpIHtcbiAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMocHJvcHMpO1xuICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogUmV0dXJucyBhIG1lbW9pemVkIHZlcnNpb24gb2YgYWxsIHByb3BlcnRpZXMsIGluY2x1ZGluZyB0aG9zZSBpbmhlcml0ZWRcbiAgICAqIGZyb20gc3VwZXIgY2xhc3Nlcy4gUHJvcGVydGllcyBub3QgaW4gb2JqZWN0IGZvcm1hdCBhcmUgY29udmVydGVkIHRvXG4gICAgKiBhdCBsZWFzdCB7dHlwZX0uXG4gICAgKlxuICAgICogQHJldHVybiB7T2JqZWN0fSBPYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIGZvciB0aGlzIGNsYXNzXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgIHN0YXRpYyBnZXQgX3Byb3BlcnRpZXMoKSB7XG4gICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcbiAgICAgICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdfX3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICBjb25zdCBzdXBlckN0b3IgPSBzdXBlclByb3BlcnRpZXNDbGFzcygvKiogQHR5cGUge1Byb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSk7XG4gICAgICAgdGhpcy5fX3Byb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICAgc3VwZXJDdG9yICYmIHN1cGVyQ3Rvci5fcHJvcGVydGllcyxcbiAgICAgICAgIG93blByb3BlcnRpZXMoLyoqIEB0eXBlIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gKi8odGhpcykpKTtcbiAgICAgfVxuICAgICByZXR1cm4gdGhpcy5fX3Byb3BlcnRpZXM7XG4gICB9XG5cbiAgIC8qKlxuICAgICogT3ZlcnJpZGVzIGBQcm9wZXJ0aWVzQ2hhbmdlZGAgbWV0aG9kIHRvIHJldHVybiB0eXBlIHNwZWNpZmllZCBpbiB0aGVcbiAgICAqIHN0YXRpYyBgcHJvcGVydGllc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHByb3BlcnR5XG4gICAgKiBAcmV0dXJuIHsqfSBUeXBlIHRvIHdoaWNoIHRvIGRlc2VyaWFsaXplIGF0dHJpYnV0ZVxuICAgICpcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgc3RhdGljIHR5cGVGb3JQcm9wZXJ0eShuYW1lKSB7XG4gICAgIGNvbnN0IGluZm8gPSB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdO1xuICAgICByZXR1cm4gaW5mbyAmJiBpbmZvLnR5cGU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogT3ZlcnJpZGVzIGBQcm9wZXJ0aWVzQ2hhbmdlZGAgbWV0aG9kIGFuZCBhZGRzIGEgY2FsbCB0b1xuICAgICogYGZpbmFsaXplYCB3aGljaCBsYXppbHkgY29uZmlndXJlcyB0aGUgZWxlbWVudCdzIHByb3BlcnR5IGFjY2Vzc29ycy5cbiAgICAqIEBvdmVycmlkZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgX2luaXRpYWxpemVQcm9wZXJ0aWVzKCkge1xuICAgICB0aGlzLmNvbnN0cnVjdG9yLmZpbmFsaXplKCk7XG4gICAgIHN1cGVyLl9pbml0aWFsaXplUHJvcGVydGllcygpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGFkZGVkIHRvIGEgZG9jdW1lbnQuXG4gICAgKiBDYWxscyBgX2VuYWJsZVByb3BlcnRpZXNgIHRvIHR1cm4gb24gcHJvcGVydHkgc3lzdGVtIGZyb21cbiAgICAqIGBQcm9wZXJ0aWVzQ2hhbmdlZGAuXG4gICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfSBTdXBlciBtYXkgb3IgbWF5IG5vdCBpbXBsZW1lbnQgdGhlIGNhbGxiYWNrXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgfVxuICAgICB0aGlzLl9lbmFibGVQcm9wZXJ0aWVzKCk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIGEgZG9jdW1lbnRcbiAgICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9IFN1cGVyIG1heSBvciBtYXkgbm90IGltcGxlbWVudCB0aGUgY2FsbGJhY2tcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICBpZiAoc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICB9XG4gICB9XG5cbiB9XG5cbiByZXR1cm4gUHJvcGVydGllc01peGluO1xuXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHN0cmF0ZWdpZXMgZm9yIGVucXVldWluZyBhc3luY2hyb25vdXNcbiAqIHRhc2tzLiBFYWNoIHN1Yi1tb2R1bGUgcHJvdmlkZXMgYSBzdGFuZGFyZCBgcnVuKGZuKWAgaW50ZXJmYWNlIHRoYXQgcmV0dXJucyBhXG4gKiBoYW5kbGUsIGFuZCBhIGBjYW5jZWwoaGFuZGxlKWAgaW50ZXJmYWNlIGZvciBjYW5jZWxpbmcgYXN5bmMgdGFza3MgYmVmb3JlXG4gKiB0aGV5IHJ1bi5cbiAqXG4gKiBAc3VtbWFyeSBNb2R1bGUgdGhhdCBwcm92aWRlcyBhIG51bWJlciBvZiBzdHJhdGVnaWVzIGZvciBlbnF1ZXVpbmdcbiAqIGFzeW5jaHJvbm91cyB0YXNrcy5cbiAqL1xuXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8vIE1pY3JvdGFzayBpbXBsZW1lbnRlZCB1c2luZyBNdXRhdGlvbiBPYnNlcnZlclxubGV0IG1pY3JvdGFza0N1cnJIYW5kbGUgPSAwO1xubGV0IG1pY3JvdGFza0xhc3RIYW5kbGUgPSAwO1xubGV0IG1pY3JvdGFza0NhbGxiYWNrcyA9IFtdO1xubGV0IG1pY3JvdGFza05vZGVDb250ZW50ID0gMDtcbmxldCBtaWNyb3Rhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xubmV3IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKG1pY3JvdGFza0ZsdXNoKS5vYnNlcnZlKG1pY3JvdGFza05vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG5cbmZ1bmN0aW9uIG1pY3JvdGFza0ZsdXNoKCkge1xuICBjb25zdCBsZW4gPSBtaWNyb3Rhc2tDYWxsYmFja3MubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbGV0IGNiID0gbWljcm90YXNrQ2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRocm93IGU7IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBtaWNyb3Rhc2tDYWxsYmFja3Muc3BsaWNlKDAsIGxlbik7XG4gIG1pY3JvdGFza0xhc3RIYW5kbGUgKz0gbGVuO1xufVxuXG4vKipcbiAqIEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgc2V0VGltZW91dGAuXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHN1bW1hcnkgQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGBzZXRUaW1lb3V0YC5cbiAqL1xuY29uc3QgdGltZU91dCA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdWItbW9kdWxlIHdpdGggdGhlIGFzeW5jIGludGVyZmFjZSBwcm92aWRpbmcgdGhlIHByb3ZpZGVkXG4gICAqIGRlbGF5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgdGltZU91dFxuICAgKiBAcGFyYW0ge251bWJlcj19IGRlbGF5IFRpbWUgdG8gd2FpdCBiZWZvcmUgY2FsbGluZyBjYWxsYmFja3MgaW4gbXNcbiAgICogQHJldHVybiB7IUFzeW5jSW50ZXJmYWNlfSBBbiBhc3luYyB0aW1lb3V0IGludGVyZmFjZVxuICAgKi9cbiAgYWZ0ZXIoZGVsYXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcnVuKGZuKSB7IHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmbiwgZGVsYXkpOyB9LFxuICAgICAgY2FuY2VsKGhhbmRsZSkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIEVucXVldWVzIGEgZnVuY3Rpb24gY2FsbGVkIGluIHRoZSBuZXh0IHRhc2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiB0aW1lT3V0XG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBmbiBDYWxsYmFjayB0byBydW5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBkZWxheSBEZWxheSBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7bnVtYmVyfSBIYW5kbGUgdXNlZCBmb3IgY2FuY2VsaW5nIHRhc2tcbiAgICovXG4gIHJ1bihmbiwgZGVsYXkpIHtcbiAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZm4sIGRlbGF5KTtcbiAgfSxcbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IGVucXVldWVkIGB0aW1lT3V0YCBjYWxsYmFjay5cbiAgICpcbiAgICogQG1lbWJlcm9mIHRpbWVPdXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZSBIYW5kbGUgcmV0dXJuZWQgZnJvbSBgcnVuYCBvZiBjYWxsYmFjayB0byBjYW5jZWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNhbmNlbChoYW5kbGUpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gIH1cbn07XG5leHBvcnQge3RpbWVPdXR9O1xuXG4vKipcbiAqIEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYC5cbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAc3VtbWFyeSBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAuXG4gKi9cbmNvbnN0IGFuaW1hdGlvbkZyYW1lID0ge1xuICAvKipcbiAgICogRW5xdWV1ZXMgYSBmdW5jdGlvbiBjYWxsZWQgYXQgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgdGltaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgYW5pbWF0aW9uRnJhbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbihudW1iZXIpOnZvaWR9IGZuIENhbGxiYWNrIHRvIHJ1blxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhbmRsZSB1c2VkIGZvciBjYW5jZWxpbmcgdGFza1xuICAgKi9cbiAgcnVuKGZuKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xuICB9LFxuICAvKipcbiAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgZW5xdWV1ZWQgYGFuaW1hdGlvbkZyYW1lYCBjYWxsYmFjay5cbiAgICpcbiAgICogQG1lbWJlcm9mIGFuaW1hdGlvbkZyYW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGUgSGFuZGxlIHJldHVybmVkIGZyb20gYHJ1bmAgb2YgY2FsbGJhY2sgdG8gY2FuY2VsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjYW5jZWwoaGFuZGxlKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gIH1cbn07XG5leHBvcnQge2FuaW1hdGlvbkZyYW1lfTtcblxuLyoqXG4gKiBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHJlcXVlc3RJZGxlQ2FsbGJhY2tgLiAgRmFsbHMgYmFjayB0b1xuICogYHNldFRpbWVvdXRgIG9uIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYHJlcXVlc3RJZGxlQ2FsbGJhY2tgLlxuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBzdW1tYXJ5IEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgcmVxdWVzdElkbGVDYWxsYmFja2AuXG4gKi9cbmNvbnN0IGlkbGVQZXJpb2QgPSB7XG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIGZ1bmN0aW9uIGNhbGxlZCBhdCBgcmVxdWVzdElkbGVDYWxsYmFja2AgdGltaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgaWRsZVBlcmlvZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFJZGxlRGVhZGxpbmUpOnZvaWR9IGZuIENhbGxiYWNrIHRvIHJ1blxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhbmRsZSB1c2VkIGZvciBjYW5jZWxpbmcgdGFza1xuICAgKi9cbiAgcnVuKGZuKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrID9cbiAgICAgIHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGZuKSA6XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmbiwgMTYpO1xuICB9LFxuICAvKipcbiAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgZW5xdWV1ZWQgYGlkbGVQZXJpb2RgIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgaWRsZVBlcmlvZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlIEhhbmRsZSByZXR1cm5lZCBmcm9tIGBydW5gIG9mIGNhbGxiYWNrIHRvIGNhbmNlbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2FuY2VsKGhhbmRsZSkge1xuICAgIHdpbmRvdy5jYW5jZWxJZGxlQ2FsbGJhY2sgP1xuICAgICAgd2luZG93LmNhbmNlbElkbGVDYWxsYmFjayhoYW5kbGUpIDpcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgfVxufTtcbmV4cG9ydCB7aWRsZVBlcmlvZH07XG5cbi8qKlxuICogQXN5bmMgaW50ZXJmYWNlIGZvciBlbnF1ZXVpbmcgY2FsbGJhY2tzIHRoYXQgcnVuIGF0IG1pY3JvdGFzayB0aW1pbmcuXG4gKlxuICogTm90ZSB0aGF0IG1pY3JvdGFzayB0aW1pbmcgaXMgYWNoaWV2ZWQgdmlhIGEgc2luZ2xlIGBNdXRhdGlvbk9ic2VydmVyYCxcbiAqIGFuZCB0aHVzIGNhbGxiYWNrcyBlbnF1ZXVlZCB3aXRoIHRoaXMgQVBJIHdpbGwgYWxsIHJ1biBpbiBhIHNpbmdsZVxuICogYmF0Y2gsIGFuZCBub3QgaW50ZXJsZWF2ZWQgd2l0aCBvdGhlciBtaWNyb3Rhc2tzIHN1Y2ggYXMgcHJvbWlzZXMuXG4gKiBQcm9taXNlcyBhcmUgYXZvaWRlZCBhcyBhbiBpbXBsZW1lbnRhdGlvbiBjaG9pY2UgZm9yIHRoZSB0aW1lIGJlaW5nXG4gKiBkdWUgdG8gU2FmYXJpIGJ1Z3MgdGhhdCBjYXVzZSBQcm9taXNlcyB0byBsYWNrIG1pY3JvdGFzayBndWFyYW50ZWVzLlxuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBzdW1tYXJ5IEFzeW5jIGludGVyZmFjZSBmb3IgZW5xdWV1aW5nIGNhbGxiYWNrcyB0aGF0IHJ1biBhdCBtaWNyb3Rhc2tcbiAqICAgdGltaW5nLlxuICovXG5jb25zdCBtaWNyb1Rhc2sgPSB7XG5cbiAgLyoqXG4gICAqIEVucXVldWVzIGEgZnVuY3Rpb24gY2FsbGVkIGF0IG1pY3JvdGFzayB0aW1pbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtaWNyb1Rhc2tcbiAgICogQHBhcmFtIHshRnVuY3Rpb249fSBjYWxsYmFjayBDYWxsYmFjayB0byBydW5cbiAgICogQHJldHVybiB7bnVtYmVyfSBIYW5kbGUgdXNlZCBmb3IgY2FuY2VsaW5nIHRhc2tcbiAgICovXG4gIHJ1bihjYWxsYmFjaykge1xuICAgIG1pY3JvdGFza05vZGUudGV4dENvbnRlbnQgPSBtaWNyb3Rhc2tOb2RlQ29udGVudCsrO1xuICAgIG1pY3JvdGFza0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gbWljcm90YXNrQ3VyckhhbmRsZSsrO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgcHJldmlvdXNseSBlbnF1ZXVlZCBgbWljcm9UYXNrYCBjYWxsYmFjay5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1pY3JvVGFza1xuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlIEhhbmRsZSByZXR1cm5lZCBmcm9tIGBydW5gIG9mIGNhbGxiYWNrIHRvIGNhbmNlbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2FuY2VsKGhhbmRsZSkge1xuICAgIGNvbnN0IGlkeCA9IGhhbmRsZSAtIG1pY3JvdGFza0xhc3RIYW5kbGU7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBpZiAoIW1pY3JvdGFza0NhbGxiYWNrc1tpZHhdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhc3luYyBoYW5kbGU6ICcgKyBoYW5kbGUpO1xuICAgICAgfVxuICAgICAgbWljcm90YXNrQ2FsbGJhY2tzW2lkeF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG59O1xuZXhwb3J0IHttaWNyb1Rhc2t9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuY29uc3QgY2FzZU1hcCA9IHt9O1xuY29uc3QgREFTSF9UT19DQU1FTCA9IC8tW2Etel0vZztcbmNvbnN0IENBTUVMX1RPX0RBU0ggPSAvKFtBLVpdKS9nO1xuXG4vKipcbiAqIE1vZHVsZSB3aXRoIHV0aWxpdGllcyBmb3IgY29udmVydGluZyBiZXR3ZWVuIFwiZGFzaC1jYXNlXCIgYW5kIFwiY2FtZWxDYXNlXCJcbiAqIGlkZW50aWZpZXJzLlxuICpcbiAqIEBzdW1tYXJ5IE1vZHVsZSB0aGF0IHByb3ZpZGVzIHV0aWxpdGllcyBmb3IgY29udmVydGluZyBiZXR3ZWVuIFwiZGFzaC1jYXNlXCJcbiAqICAgYW5kIFwiY2FtZWxDYXNlXCIuXG4gKi9cbmBUT0RPKG1vZHVsaXplcik6IEEgbmFtZXNwYWNlIG5hbWVkIFBvbHltZXIuQ2FzZU1hcCB3YXNcbmRlY2xhcmVkIGhlcmUuIFRoZSBzdXJyb3VuZGluZyBjb21tZW50cyBzaG91bGQgYmUgcmV2aWV3ZWQsXG5hbmQgdGhpcyBzdHJpbmcgY2FuIHRoZW4gYmUgZGVsZXRlZGA7XG5cbi8qKlxuICogQ29udmVydHMgXCJkYXNoLWNhc2VcIiBpZGVudGlmaWVyIChlLmcuIGBmb28tYmFyLWJhemApIHRvIFwiY2FtZWxDYXNlXCJcbiAqIChlLmcuIGBmb29CYXJCYXpgKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFzaCBEYXNoLWNhc2UgaWRlbnRpZmllclxuICogQHJldHVybiB7c3RyaW5nfSBDYW1lbC1jYXNlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpZGVudGlmaWVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbENhc2UoZGFzaCkge1xuICByZXR1cm4gY2FzZU1hcFtkYXNoXSB8fCAoXG4gICAgY2FzZU1hcFtkYXNoXSA9IGRhc2guaW5kZXhPZignLScpIDwgMCA/IGRhc2ggOiBkYXNoLnJlcGxhY2UoREFTSF9UT19DQU1FTCxcbiAgICAgIChtKSA9PiBtWzFdLnRvVXBwZXJDYXNlKClcbiAgICApXG4gICk7XG59XG5cbi8qKlxuICogQ29udmVydHMgXCJjYW1lbENhc2VcIiBpZGVudGlmaWVyIChlLmcuIGBmb29CYXJCYXpgKSB0byBcImRhc2gtY2FzZVwiXG4gKiAoZS5nLiBgZm9vLWJhci1iYXpgKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FtZWwgQ2FtZWwtY2FzZSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IERhc2gtY2FzZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgaWRlbnRpZmllclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2hDYXNlKGNhbWVsKSB7XG4gIHJldHVybiBjYXNlTWFwW2NhbWVsXSB8fCAoXG4gICAgY2FzZU1hcFtjYW1lbF0gPSBjYW1lbC5yZXBsYWNlKENBTUVMX1RPX0RBU0gsICctJDEnKS50b0xvd2VyQ2FzZSgpXG4gICk7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vLyB1bmlxdWUgZ2xvYmFsIGlkIGZvciBkZWR1cGluZyBtaXhpbnMuXG5sZXQgZGVkdXBlSWQgPSAwO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBNaXhpbkZ1bmN0aW9uKCl7fVxuLyoqIEB0eXBlIHsoV2Vha01hcCB8IHVuZGVmaW5lZCl9ICovXG5NaXhpbkZ1bmN0aW9uLnByb3RvdHlwZS5fX21peGluQXBwbGljYXRpb25zO1xuLyoqIEB0eXBlIHsoT2JqZWN0IHwgdW5kZWZpbmVkKX0gKi9cbk1peGluRnVuY3Rpb24ucHJvdG90eXBlLl9fbWl4aW5TZXQ7XG5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jICovXG4vKipcbiAqIFdyYXBzIGFuIEVTNiBjbGFzcyBleHByZXNzaW9uIG1peGluIHN1Y2ggdGhhdCB0aGUgbWl4aW4gaXMgb25seSBhcHBsaWVkXG4gKiBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBhcHBsaWVkIGl0cyBiYXNlIGFyZ3VtZW50LiBBbHNvIG1lbW9pemVzIG1peGluXG4gKiBhcHBsaWNhdGlvbnMuXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gbWl4aW4gRVM2IGNsYXNzIGV4cHJlc3Npb24gbWl4aW4gdG8gd3JhcFxuICogQHJldHVybiB7VH1cbiAqIEBzdXBwcmVzcyB7aW52YWxpZENhc3RzfVxuICovXG5leHBvcnQgY29uc3QgZGVkdXBpbmdNaXhpbiA9IGZ1bmN0aW9uKG1peGluKSB7XG4gIGxldCBtaXhpbkFwcGxpY2F0aW9ucyA9IC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKG1peGluKS5fX21peGluQXBwbGljYXRpb25zO1xuICBpZiAoIW1peGluQXBwbGljYXRpb25zKSB7XG4gICAgbWl4aW5BcHBsaWNhdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgIC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKG1peGluKS5fX21peGluQXBwbGljYXRpb25zID0gbWl4aW5BcHBsaWNhdGlvbnM7XG4gIH1cbiAgLy8gbWFpbnRhaW4gYSB1bmlxdWUgaWQgZm9yIGVhY2ggbWl4aW5cbiAgbGV0IG1peGluRGVkdXBlSWQgPSBkZWR1cGVJZCsrO1xuICBmdW5jdGlvbiBkZWR1cGluZ01peGluKGJhc2UpIHtcbiAgICBsZXQgYmFzZVNldCA9IC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKGJhc2UpLl9fbWl4aW5TZXQ7XG4gICAgaWYgKGJhc2VTZXQgJiYgYmFzZVNldFttaXhpbkRlZHVwZUlkXSkge1xuICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxuICAgIGxldCBtYXAgPSBtaXhpbkFwcGxpY2F0aW9ucztcbiAgICBsZXQgZXh0ZW5kZWQgPSBtYXAuZ2V0KGJhc2UpO1xuICAgIGlmICghZXh0ZW5kZWQpIHtcbiAgICAgIGV4dGVuZGVkID0gLyoqIEB0eXBlIHshRnVuY3Rpb259ICovKG1peGluKShiYXNlKTtcbiAgICAgIG1hcC5zZXQoYmFzZSwgZXh0ZW5kZWQpO1xuICAgIH1cbiAgICAvLyBjb3B5IGluaGVyaXRlZCBtaXhpbiBzZXQgZnJvbSB0aGUgZXh0ZW5kZWQgY2xhc3MsIG9yIHRoZSBiYXNlIGNsYXNzXG4gICAgLy8gTk9URTogd2UgYXZvaWQgdXNlIG9mIFNldCBoZXJlIGJlY2F1c2Ugc29tZSBicm93c2VyIChJRTExKVxuICAgIC8vIGNhbm5vdCBleHRlbmQgYSBiYXNlIFNldCB2aWEgdGhlIGNvbnN0cnVjdG9yLlxuICAgIGxldCBtaXhpblNldCA9IE9iamVjdC5jcmVhdGUoLyoqIEB0eXBlIHshTWl4aW5GdW5jdGlvbn0gKi8oZXh0ZW5kZWQpLl9fbWl4aW5TZXQgfHwgYmFzZVNldCB8fCBudWxsKTtcbiAgICBtaXhpblNldFttaXhpbkRlZHVwZUlkXSA9IHRydWU7XG4gICAgLyoqIEB0eXBlIHshTWl4aW5GdW5jdGlvbn0gKi8oZXh0ZW5kZWQpLl9fbWl4aW5TZXQgPSBtaXhpblNldDtcbiAgICByZXR1cm4gZXh0ZW5kZWQ7XG4gIH1cblxuICByZXR1cm4gLyoqIEB0eXBlIHtUfSAqLyAoZGVkdXBpbmdNaXhpbik7XG59O1xuLyogZXNsaW50LWVuYWJsZSB2YWxpZC1qc2RvYyAqL1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgQXR0cmlidXRlUGFydCwgZGVmYXVsdFBhcnRDYWxsYmFjaywgbm9DaGFuZ2UsIGdldFZhbHVlLCBTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5leHBvcnQgeyByZW5kZXIgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGEgbGl0LWV4dGVuZGVkIEhUTUwgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBleHRlbmRlZFBhcnRDYWxsYmFjayk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGEgbGl0LWV4dGVuZGVkIFNWRyB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBleHRlbmRlZFBhcnRDYWxsYmFjayk7XG4vKipcbiAqIEEgUGFydENhbGxiYWNrIHdoaWNoIGFsbG93cyB0ZW1wbGF0ZXMgdG8gc2V0IHByb3BlcnRpZXMgYW5kIGRlY2xhcmF0aXZlXG4gKiBldmVudCBoYW5kbGVycy5cbiAqXG4gKiBQcm9wZXJ0aWVzIGFyZSBzZXQgYnkgZGVmYXVsdCwgaW5zdGVhZCBvZiBhdHRyaWJ1dGVzLiBBdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIGxpdC1odG1sIHRlbXBsYXRlcyBwcmVzZXJ2ZSBjYXNlLCBzbyBwcm9wZXJ0aWVzIGFyZSBjYXNlIHNlbnNpdGl2ZS4gSWYgYW5cbiAqIGV4cHJlc3Npb24gdGFrZXMgdXAgYW4gZW50aXJlIGF0dHJpYnV0ZSB2YWx1ZSwgdGhlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvXG4gKiB0aGF0IHZhbHVlLiBJZiBhbiBleHByZXNzaW9uIGlzIGludGVycG9sYXRlZCB3aXRoIGEgc3RyaW5nIG9yIG90aGVyXG4gKiBleHByZXNzaW9ucyB0aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gdGhlIHN0cmluZyByZXN1bHQgb2YgdGhlXG4gKiBpbnRlcnBvbGF0aW9uLlxuICpcbiAqIFRvIHNldCBhbiBhdHRyaWJ1dGUgaW5zdGVhZCBvZiBhIHByb3BlcnR5LCBhcHBlbmQgYSBgJGAgc3VmZml4IHRvIHRoZVxuICogYXR0cmlidXRlIG5hbWUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaHRtbGA8YnV0dG9uIGNsYXNzJD1cInByaW1hcnlcIj5CdXkgTm93PC9idXR0b24+YFxuICpcbiAqIFRvIHNldCBhbiBldmVudCBoYW5kbGVyLCBwcmVmaXggdGhlIGF0dHJpYnV0ZSBuYW1lIHdpdGggYG9uLWA6XG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaHRtbGA8YnV0dG9uIG9uLWNsaWNrPSR7KGUpPT4gdGhpcy5vbkNsaWNrSGFuZGxlcihlKX0+QnV5IE5vdzwvYnV0dG9uPmBcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRlZFBhcnRDYWxsYmFjayA9IChpbnN0YW5jZSwgdGVtcGxhdGVQYXJ0LCBub2RlKSA9PiB7XG4gICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnJhd05hbWUuc3Vic3RyKDAsIDMpID09PSAnb24tJykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gdGVtcGxhdGVQYXJ0LnJhd05hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV2ZW50UGFydChpbnN0YW5jZSwgbm9kZSwgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0Q2hhciA9IHRlbXBsYXRlUGFydC5uYW1lLnN1YnN0cih0ZW1wbGF0ZVBhcnQubmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxhc3RDaGFyID09PSAnJCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZVBhcnQubmFtZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoYXIgPT09ICc/Jykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRlbXBsYXRlUGFydC5uYW1lLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydChpbnN0YW5jZSwgbm9kZSwgdGVtcGxhdGVQYXJ0LnJhd05hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRQYXJ0Q2FsbGJhY2soaW5zdGFuY2UsIHRlbXBsYXRlUGFydCwgbm9kZSk7XG59O1xuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIHNldFZhbHVlKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBpZiAocy5sZW5ndGggPT09IDIgJiYgc1swXSA9PT0gJycgJiYgc1sxXSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXhdKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgc2V0VmFsdWUodmFsdWVzLCBzdGFydEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAyICYmIHNbMF0gPT09ICcnICYmIHNbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICAvLyBBbiBleHByZXNzaW9uIHRoYXQgb2NjdXBpZXMgdGhlIHdob2xlIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGxlYXZlXG4gICAgICAgICAgICAvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBlbXB0eSBzdHJpbmdzLlxuICAgICAgICAgICAgdmFsdWUgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZXNbc3RhcnRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGlvbiwgc28gaW50ZXJwb2xhdGVcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5faW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlLCBlbGVtZW50LCBldmVudE5hbWUpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lciA9PT0gdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2xpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2xpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lci5jYWxsKHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9saXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWV4dGVuZGVkLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzVGVtcGxhdGVQYXJ0QWN0aXZlIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuY29uc3Qgd2Fsa2VyTm9kZUZpbHRlciA9IE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfFxuICAgIE5vZGVGaWx0ZXIuU0hPV19URVhUO1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBsaXN0IG9mIG5vZGVzIGZyb20gYSBUZW1wbGF0ZSBzYWZlbHkuIEluIGFkZGl0aW9uIHRvIHJlbW92aW5nXG4gKiBub2RlcyBmcm9tIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaFxuICogdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICpcbiAqIEFzIHRoZSB0ZW1wbGF0ZSBpcyB3YWxrZWQgdGhlIHJlbW92YWwgc3RhdGUgaXMgdHJhY2tlZCBhbmRcbiAqIHBhcnQgaW5kaWNlcyBhcmUgYWRqdXN0ZWQgYXMgbmVlZGVkLlxuICpcbiAqIGRpdlxuICogICBkaXYjMSAocmVtb3ZlKSA8LS0gc3RhcnQgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgZGl2IzEpXG4gKiAgICAgZGl2XG4gKiAgICAgICBkaXYjMiAocmVtb3ZlKSAgPC0tIGNvbnRpbnVlIHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIHN0aWxsIGRpdiMxKVxuICogICAgICAgICBkaXZcbiAqIGRpdiA8LS0gc3RvcCByZW1vdmluZyBzaW5jZSBwcmV2aW91cyBzaWJsaW5nIGlzIHRoZSByZW1vdmluZyBub2RlIChkaXYjMSwgcmVtb3ZlZCA0IG5vZGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIG5vZGVzVG9SZW1vdmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9LCBwYXJ0cyB9ID0gdGVtcGxhdGU7XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IHBhcnQgPSBwYXJ0c1swXTtcbiAgICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gICAgbGV0IHJlbW92ZUNvdW50ID0gMDtcbiAgICBjb25zdCBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZSA9IFtdO1xuICAgIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG4gICAgICAgIC8vIEVuZCByZW1vdmFsIGlmIHN0ZXBwZWQgcGFzdCB0aGUgcmVtb3Zpbmcgbm9kZVxuICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGN1cnJlbnRSZW1vdmluZ05vZGUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgbm9kZSB0byByZW1vdmUgd2FzIGZvdW5kIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICBpZiAobm9kZXNUb1JlbW92ZS5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAvLyBUcmFjayBub2RlIHdlJ3JlIHJlbW92aW5nXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAgICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgICAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICAgICAgICBwYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLmZvckVhY2goKG4pID0+IG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSk7XG59XG5jb25zdCBjb3VudE5vZGVzID0gKG5vZGUpID0+IHtcbiAgICBsZXQgY291bnQgPSAxO1xuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG59O1xuY29uc3QgbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzID0gKHBhcnRzLCBzdGFydEluZGV4ID0gLTEpID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCArIDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIGlmIChpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcbi8qKlxuICogSW5zZXJ0cyB0aGUgZ2l2ZW4gbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgb3B0aW9uYWxseSBiZWZvcmUgdGhlIGdpdmVuXG4gKiByZWZOb2RlLiBJbiBhZGRpdGlvbiB0byBpbnNlcnRpbmcgdGhlIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZVxuICogcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE5vZGVJbnRvVGVtcGxhdGUodGVtcGxhdGUsIG5vZGUsIHJlZk5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSwgcGFydHMgfSA9IHRlbXBsYXRlO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcmVmTm9kZSwgdGhlbiBwdXQgbm9kZSBhdCBlbmQgb2YgdGVtcGxhdGUuXG4gICAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gICAgaWYgKHJlZk5vZGUgPT09IG51bGwgfHwgcmVmTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gICAgbGV0IGluc2VydENvdW50ID0gMDtcbiAgICBsZXQgd2Fsa2VySW5kZXggPSAtMTtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgd2Fsa2VySW5kZXgrKztcbiAgICAgICAgY29uc3Qgd2Fsa2VyTm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgaWYgKHdhbGtlck5vZGUgPT09IHJlZk5vZGUpIHtcbiAgICAgICAgICAgIHJlZk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgICAgICAgICBpbnNlcnRDb3VudCA9IGNvdW50Tm9kZXMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEgJiYgcGFydHNbcGFydEluZGV4XS5pbmRleCA9PT0gd2Fsa2VySW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGluc2VydGVkIHRoZSBub2RlLCBzaW1wbHkgYWRqdXN0IGFsbCBzdWJzZXF1ZW50IHBhcnRzXG4gICAgICAgICAgICBpZiAoaW5zZXJ0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHNbcGFydEluZGV4XS5pbmRleCArPSBpbnNlcnRDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RpZnktdGVtcGxhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMsIFRlbXBsYXRlLCB0ZW1wbGF0ZUNhY2hlcywgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IGluc2VydE5vZGVJbnRvVGVtcGxhdGUsIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlIH0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuZXhwb3J0IHsgaHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8vIEdldCBhIGtleSB0byBsb29rdXAgaW4gYHRlbXBsYXRlQ2FjaGVzYC5cbmNvbnN0IGdldFRlbXBsYXRlQ2FjaGVLZXkgPSAodHlwZSwgc2NvcGVOYW1lKSA9PiBgJHt0eXBlfS0tJHtzY29wZU5hbWV9YDtcbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWUpID0+IChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGdldFRlbXBsYXRlQ2FjaGVLZXkocmVzdWx0LnR5cGUsIHNjb3BlTmFtZSk7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KGNhY2hlS2V5LCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbShlbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgZWxlbWVudCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5jb25zdCBURU1QTEFURV9UWVBFUyA9IFsnaHRtbCcsICdzdmcnXTtcbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMoc2NvcGVOYW1lKSB7XG4gICAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoZ2V0VGVtcGxhdGVDYWNoZUtleSh0eXBlLCBzY29wZU5hbWUpKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9IH0gPSB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIG5ldyBTZXQoQXJyYXkuZnJvbShzdHlsZXMpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuY29uc3Qgc2hhZHlSZW5kZXJTZXQgPSBuZXcgU2V0KCk7XG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gc2NvcGUgbmFtZSwgZW5zdXJlcyB0aGF0IFNoYWR5Q1NTIHN0eWxlIHNjb3BpbmcgaXMgcGVyZm9ybWVkLlxuICogVGhpcyBpcyBkb25lIGp1c3Qgb25jZSBwZXIgc2NvcGUgbmFtZSBzbyB0aGUgZnJhZ21lbnQgYW5kIHRlbXBsYXRlIGNhbm5vdFxuICogYmUgbW9kaWZpZWQuXG4gKiAoMSkgZXh0cmFjdHMgc3R5bGVzIGZyb20gdGhlIHJlbmRlcmVkIGZyYWdtZW50IGFuZCBoYW5kcyB0aGVtIHRvIFNoYWR5Q1NTXG4gKiB0byBiZSBzY29wZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudFxuICogKDIpIHJlbW92ZXMgc3R5bGUgZWxlbWVudHMgZnJvbSBhbGwgbGl0LWh0bWwgVGVtcGxhdGVzIGZvciB0aGlzIHNjb3BlIG5hbWUuXG4gKlxuICogTm90ZSwgPHN0eWxlPiBlbGVtZW50cyBjYW4gb25seSBiZSBwbGFjZWQgaW50byB0ZW1wbGF0ZXMgZm9yIHRoZVxuICogaW5pdGlhbCByZW5kZXJpbmcgb2YgdGhlIHNjb3BlLiBJZiA8c3R5bGU+IGVsZW1lbnRzIGFyZSBpbmNsdWRlZCBpbiB0ZW1wbGF0ZXNcbiAqIGR5bmFtaWNhbGx5IHJlbmRlcmVkIHRvIHRoZSBzY29wZSAoYWZ0ZXIgdGhlIGZpcnN0IHNjb3BlIHJlbmRlciksIHRoZXkgd2lsbFxuICogbm90IGJlIHNjb3BlZCBhbmQgdGhlIDxzdHlsZT4gd2lsbCBiZSBsZWZ0IGluIHRoZSB0ZW1wbGF0ZSBhbmQgcmVuZGVyZWQgb3V0cHV0LlxuICovXG5jb25zdCBlbnN1cmVTdHlsZXNTY29wZWQgPSAoZnJhZ21lbnQsIHRlbXBsYXRlLCBzY29wZU5hbWUpID0+IHtcbiAgICAvLyBvbmx5IHNjb3BlIGVsZW1lbnQgdGVtcGxhdGUgb25jZSBwZXIgc2NvcGUgbmFtZVxuICAgIGlmICghc2hhZHlSZW5kZXJTZXQuaGFzKHNjb3BlTmFtZSkpIHtcbiAgICAgICAgc2hhZHlSZW5kZXJTZXQuYWRkKHNjb3BlTmFtZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBBcnJheS5mcm9tKGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIHN0eWxlVGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVTdHlsZXMoc3R5bGVUZW1wbGF0ZSwgc2NvcGVOYW1lKTtcbiAgICAgICAgLy8gRml4IHRlbXBsYXRlczogbm90ZSB0aGUgZXhwZWN0YXRpb24gaGVyZSBpcyB0aGF0IHRoZSBnaXZlbiBgZnJhZ21lbnRgXG4gICAgICAgIC8vIGhhcyBiZWVuIGdlbmVyYXRlZCBmcm9tIHRoZSBnaXZlbiBgdGVtcGxhdGVgIHdoaWNoIGNvbnRhaW5zXG4gICAgICAgIC8vIHRoZSBzZXQgb2YgdGVtcGxhdGVzIHJlbmRlcmVkIGludG8gdGhpcyBzY29wZS5cbiAgICAgICAgLy8gSXQgaXMgb25seSBmcm9tIHRoaXMgc2V0IG9mIGluaXRpYWwgdGVtcGxhdGVzIGZyb20gd2hpY2ggc3R5bGVzXG4gICAgICAgIC8vIHdpbGwgYmUgc2NvcGVkIGFuZCByZW1vdmVkLlxuICAgICAgICByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZSk7XG4gICAgICAgIC8vIEFwcGx5U2hpbSBjYXNlXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHN0eWxlIGludG8gcmVuZGVyZWQgZnJhZ21lbnRcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5pbnNlcnRCZWZvcmUoc3R5bGUsIGZyYWdtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIC8vIEluc2VydCBpbnRvIGxpdC10ZW1wbGF0ZSAoZm9yIHN1YnNlcXVlbnQgcmVuZGVycylcbiAgICAgICAgICAgICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZS5jbG9uZU5vZGUodHJ1ZSksIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBOT1RFOiBXZSdyZSBjb3B5aW5nIGNvZGUgZnJvbSBsaXQtaHRtbCdzIGByZW5kZXJgIG1ldGhvZCBoZXJlLlxuLy8gV2UncmUgZG9pbmcgdGhpcyBleHBsaWNpdGx5IGJlY2F1c2UgdGhlIEFQSSBmb3IgcmVuZGVyaW5nIHRlbXBsYXRlcyBpcyBsaWtlbHlcbi8vIHRvIGNoYW5nZSBpbiB0aGUgbmVhciB0ZXJtLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihyZXN1bHQsIGNvbnRhaW5lciwgc2NvcGVOYW1lKSB7XG4gICAgY29uc3QgdGVtcGxhdGVGYWN0b3J5ID0gc2hhZHlUZW1wbGF0ZUZhY3Rvcnkoc2NvcGVOYW1lKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpO1xuICAgIGxldCBpbnN0YW5jZSA9IGNvbnRhaW5lci5fX3RlbXBsYXRlSW5zdGFuY2U7XG4gICAgLy8gUmVwZWF0IHJlbmRlciwganVzdCBjYWxsIHVwZGF0ZSgpXG4gICAgaWYgKGluc3RhbmNlICE9PSB1bmRlZmluZWQgJiYgaW5zdGFuY2UudGVtcGxhdGUgPT09IHRlbXBsYXRlICYmXG4gICAgICAgIGluc3RhbmNlLl9wYXJ0Q2FsbGJhY2sgPT09IHJlc3VsdC5wYXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZpcnN0IHJlbmRlciwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlSW5zdGFuY2UgYW5kIGFwcGVuZCBpdFxuICAgIGluc3RhbmNlID1cbiAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHJlc3VsdC5wYXJ0Q2FsbGJhY2ssIHRlbXBsYXRlRmFjdG9yeSk7XG4gICAgY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgIGNvbnN0IGhvc3QgPSBjb250YWluZXIgaW5zdGFuY2VvZiBTaGFkb3dSb290ID9cbiAgICAgICAgY29udGFpbmVyLmhvc3QgOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgLy8gSWYgdGhlcmUncyBhIHNoYWRvdyBob3N0LCBkbyBTaGFkeUNTUyBzY29waW5nLi4uXG4gICAgaWYgKGhvc3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LlNoYWR5Q1NTID09PSAnb2JqZWN0Jykge1xuICAgICAgICBlbnN1cmVTdHlsZXNTY29wZWQoZnJhZ21lbnQsIHRlbXBsYXRlLCBzY29wZU5hbWUpO1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KGhvc3QpO1xuICAgIH1cbiAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhZHktcmVuZGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8vIFRoZSBmaXJzdCBhcmd1bWVudCB0byBKUyB0ZW1wbGF0ZSB0YWdzIHJldGFpbiBpZGVudGl0eSBhY3Jvc3MgbXVsdGlwbGVcbi8vIGNhbGxzIHRvIGEgdGFnIGZvciB0aGUgc2FtZSBsaXRlcmFsLCBzbyB3ZSBjYW4gY2FjaGUgd29yayBkb25lIHBlciBsaXRlcmFsXG4vLyBpbiBhIE1hcC5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnKTtcbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgdmFsdWVzLCB0eXBlLCBwYXJ0Q2FsbGJhY2sgPSBkZWZhdWx0UGFydENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnBhcnRDYWxsYmFjayA9IHBhcnRDYWxsYmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgPHRlbXBsYXRlPiBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGh0bWwgPSAnJztcbiAgICAgICAgbGV0IGlzVGV4dEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGh0bWwgKz0gcztcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGEgdGV4dCBwb3NpdGlvbiBpZiB0aGUgcHJldmlvdXMgc3RyaW5nIGNsb3NlZCBpdHMgdGFncy5cbiAgICAgICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgdGFncywgdGhlbiB3ZSB1c2UgdGhlIHByZXZpb3VzIHRleHQgcG9zaXRpb25cbiAgICAgICAgICAgIC8vIHN0YXRlLlxuICAgICAgICAgICAgY29uc3QgY2xvc2luZyA9IGZpbmRUYWdDbG9zZShzKTtcbiAgICAgICAgICAgIGlzVGV4dEJpbmRpbmcgPSBjbG9zaW5nID4gLTEgPyBjbG9zaW5nIDwgcy5sZW5ndGggOiBpc1RleHRCaW5kaW5nO1xuICAgICAgICAgICAgaHRtbCArPSBpc1RleHRCaW5kaW5nID8gbm9kZU1hcmtlciA6IG1hcmtlcjtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTWwgaW4gYW4gPHN2Zz4gdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgPHN2Zz4gdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFRlbXBsYXRlRmFjdG9yeShyZXN1bHQpIHtcbiAgICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgVGVtcGxhdGUgb3IgcmV0cmVpdmUgb25lIGZyb21cbiAqICAgICBjYWNoZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihyZXN1bHQsIGNvbnRhaW5lciwgdGVtcGxhdGVGYWN0b3J5ID0gZGVmYXVsdFRlbXBsYXRlRmFjdG9yeSkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCk7XG4gICAgbGV0IGluc3RhbmNlID0gY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZTtcbiAgICAvLyBSZXBlYXQgcmVuZGVyLCBqdXN0IGNhbGwgdXBkYXRlKClcbiAgICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCAmJiBpbnN0YW5jZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUgJiZcbiAgICAgICAgaW5zdGFuY2UuX3BhcnRDYWxsYmFjayA9PT0gcmVzdWx0LnBhcnRDYWxsYmFjaykge1xuICAgICAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRmlyc3QgcmVuZGVyLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVJbnN0YW5jZSBhbmQgYXBwZW5kIGl0XG4gICAgaW5zdGFuY2UgPVxuICAgICAgICBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgcmVzdWx0LnBhcnRDYWxsYmFjaywgdGVtcGxhdGVGYWN0b3J5KTtcbiAgICBjb250YWluZXIuX190ZW1wbGF0ZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbm90IGF0dHJpYnV0ZSBwb3NpdGlvbnMsXG4gKiBpbiB0ZW1wbGF0ZS5cbiAqL1xuY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcbmNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTBcbiAqXG4gKiBcIlxcMC1cXHgxRlxceDdGLVxceDlGXCIgYXJlIFVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9IC9bIFxceDA5XFx4MGFcXHgwY1xceDBkXShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFxceDA5XFx4MGFcXHgwY1xceDBkXCInPj0vXSspWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikkLztcbi8qKlxuICogRmluZHMgdGhlIGNsb3NpbmcgaW5kZXggb2YgdGhlIGxhc3QgY2xvc2VkIEhUTUwgdGFnLlxuICogVGhpcyBoYXMgMyBwb3NzaWJsZSByZXR1cm4gdmFsdWVzOlxuICogICAtIGAtMWAsIG1lYW5pbmcgdGhlcmUgaXMgbm8gdGFnIGluIHN0ci5cbiAqICAgLSBgc3RyaW5nLmxlbmd0aGAsIG1lYW5pbmcgdGhlIGxhc3Qgb3BlbmVkIHRhZyBpcyB1bmNsb3NlZC5cbiAqICAgLSBTb21lIHBvc2l0aXZlIG51bWJlciA8IHN0ci5sZW5ndGgsIG1lYW5pbmcgdGhlIGluZGV4IG9mIHRoZSBjbG9zaW5nICc+Jy5cbiAqL1xuZnVuY3Rpb24gZmluZFRhZ0Nsb3NlKHN0cikge1xuICAgIGNvbnN0IGNsb3NlID0gc3RyLmxhc3RJbmRleE9mKCc+Jyk7XG4gICAgY29uc3Qgb3BlbiA9IHN0ci5pbmRleE9mKCc8JywgY2xvc2UgKyAxKTtcbiAgICByZXR1cm4gb3BlbiA+IC0xID8gc3RyLmxlbmd0aCA6IGNsb3NlO1xufVxuLyoqXG4gKiBBIHBsYWNlaG9sZGVyIGZvciBhIGR5bmFtaWMgZXhwcmVzc2lvbiBpbiBhbiBIVE1MIHRlbXBsYXRlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYnVpbHQtaW4gcGFydCB0eXBlczogQXR0cmlidXRlUGFydCBhbmQgTm9kZVBhcnQuIE5vZGVQYXJ0c1xuICogYWx3YXlzIHJlcHJlc2VudCBhIHNpbmdsZSBkeW5hbWljIGV4cHJlc3Npb24sIHdoaWxlIEF0dHJpYnV0ZVBhcnRzIG1heVxuICogcmVwcmVzZW50IGFzIG1hbnkgZXhwcmVzc2lvbnMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEEgVGVtcGxhdGUncyBwYXJ0cyBhcmUgbXV0YWJsZSwgc28gcGFydHMgY2FuIGJlIHJlcGxhY2VkIG9yIG1vZGlmaWVkXG4gKiAocG9zc2libHkgdG8gaW1wbGVtZW50IGRpZmZlcmVudCB0ZW1wbGF0ZSBzZW1hbnRpY3MpLiBUaGUgY29udHJhY3QgaXMgdGhhdFxuICogcGFydHMgY2FuIG9ubHkgYmUgcmVwbGFjZWQsIG5vdCByZW1vdmVkLCBhZGRlZCBvciByZW9yZGVyZWQsIGFuZCBwYXJ0cyBtdXN0XG4gKiBhbHdheXMgY29uc3VtZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgdmFsdWVzIGluIHRoZWlyIGB1cGRhdGUoKWAgbWV0aG9kLlxuICpcbiAqIFRPRE8oanVzdGluZmFnbmFuaSk6IFRoYXQgcmVxdWlyZW1lbnQgaXMgYSBsaXR0bGUgZnJhZ2lsZS4gQVxuICogVGVtcGxhdGVJbnN0YW5jZSBjb3VsZCBpbnN0ZWFkIGJlIG1vcmUgY2FyZWZ1bCBhYm91dCB3aGljaCB2YWx1ZXMgaXQgZ2l2ZXNcbiAqIHRvIFBhcnQudXBkYXRlKCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGluZGV4LCBuYW1lLCByYXdOYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5yYXdOYW1lID0gcmF3TmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZWxlbWVudC5jb250ZW50O1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBwcmV2aW91cyBub2RlLCBhY2NvdW50aW5nIGZvciByZW1vdmFsczogaWYgYSBub2RlIGlzIHJlbW92ZWRcbiAgICAgICAgLy8gaXQgd2lsbCBuZXZlciBiZSB0aGUgcHJldmlvdXNOb2RlLlxuICAgICAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgICAgICAvLyBVc2VkIHRvIHNldCBwcmV2aW91c05vZGUgYXQgdGhlIHRvcCBvZiB0aGUgbG9vcC5cbiAgICAgICAgbGV0IGN1cnJlbnROb2RlO1xuICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAvLyBQZXIgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci4gSW5cbiAgICAgICAgICAgICAgICAvLyBwYXJ0aWN1bGFyLCBFZGdlL0lFIGNhbiByZXR1cm4gdGhlbSBvdXQgb2Ygb3JkZXIsIHNvIHdlIGNhbm5vdCBhc3N1bWVcbiAgICAgICAgICAgICAgICAvLyBhIGNvcnJlc3BvbmRhbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldLnZhbHVlLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lSW5QYXJ0ID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpWzFdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbm9uLW51bGwgYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKGF0dHJpYnV0ZU5hbWVJblBhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzRm9yQXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnYXR0cmlidXRlJywgaW5kZXgsIGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGVOYW1lSW5QYXJ0LCBzdHJpbmdzRm9yQXR0cmlidXRlVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RyaW5nc0ZvckF0dHJpYnV0ZVZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChub2RlVmFsdWUuaW5kZXhPZihtYXJrZXIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBub2RlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoKHN0cmluZ3NbaV0gPT09ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHJpbmdzW2ldKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycgP1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbbGFzdEluZGV4XSksIG5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8gJiZcbiAgICAgICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyBmb2xsb3dpbmcgYXJlIHRydWU6XG4gICAgICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBiZWluZyByZW1vdmVkICh0aHVzIGl0J3Mgbm90IHRoZVxuICAgICAgICAgICAgICAgIC8vICAgIGBwcmV2aW91c05vZGVgKVxuICAgICAgICAgICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBub3QgYSBUZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IFdlIHNob3VsZCBiZSBhYmxlIHRvIHVzZSB0aGUgcHJldmlvdXNOb2RlIGhlcmVcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgbWFya2VyIG5vZGUgYW5kIHJlZHVjZSB0aGUgbnVtYmVyIG9mIGV4dHJhIG5vZGVzIHdlIGFkZCB0byBhXG4gICAgICAgICAgICAgICAgLy8gdGVtcGxhdGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckxhYnMvbGl0LWh0bWwvaXNzdWVzLzE0N1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzU2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgcHJldmlvdXNTaWJsaW5nICE9PSBwcmV2aW91c05vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcgYWRkIGEgbWFya2VyIG5vZGUuXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayBpZiB0aGUgbmV4dCBub2RlIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQsXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IG5vZGUgd2lsbCBpbmR1Y2UgYSBuZXcgbWFya2VyIGlmIHNvLlxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyksIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBwcmV2aW91c05vZGU7XG4gICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgcmVhZHkgdG8gYmUgaW5zZXJ0ZWQgaW50byBhIFBhcnQgZnJvbSBhIHVzZXItcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogSWYgdGhlIHVzZXIgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIHRoaXMgaW52b2tlcyB0aGUgZGlyZWN0aXZlIHdpdGggdGhlIGdpdmVuXG4gKiBwYXJ0LiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgaXQncyBjb252ZXJ0ZWQgdG8gdW5kZWZpbmVkIHRvIHdvcmsgYmV0dGVyXG4gKiB3aXRoIGNlcnRhaW4gRE9NIEFQSXMsIGxpa2UgdGV4dENvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZSA9IChwYXJ0LCB2YWx1ZSkgPT4ge1xuICAgIC8vIGBudWxsYCBhcyB0aGUgdmFsdWUgb2YgYSBUZXh0IG5vZGUgd2lsbCByZW5kZXIgdGhlIHN0cmluZyAnbnVsbCdcbiAgICAvLyBzbyB3ZSBjb252ZXJ0IGl0IHRvIHVuZGVmaW5lZFxuICAgIGlmIChpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZShwYXJ0KTtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbn07XG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGYpID0+IHtcbiAgICBmLl9fbGl0RGlyZWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gZjtcbn07XG5jb25zdCBpc0RpcmVjdGl2ZSA9IChvKSA9PiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBvLl9fbGl0RGlyZWN0aXZlID09PSB0cnVlO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgbm9DaGFuZ2VgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCB7IG5vQ2hhbmdlIGFzIGRpcmVjdGl2ZVZhbHVlIH07XG5jb25zdCBpc1ByaW1pdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlLCBlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy5zaXplID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlcyA9IFtdO1xuICAgIH1cbiAgICBfaW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBjb25zdCB2ID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXggKyBpXSk7XG4gICAgICAgICAgICBpZiAodiAmJiB2ICE9PSBub0NoYW5nZSAmJlxuICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHYpIHx8IHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiB2W1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byByZWN1cnNpdmVseSBjYWxsIGdldFZhbHVlIGludG8gaXRlcmFibGVzLi4uXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQgKyBzdHJpbmdzW2xdO1xuICAgIH1cbiAgICBfZXF1YWxUb1ByZXZpb3VzVmFsdWVzKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHN0YXJ0SW5kZXggKyB0aGlzLnNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWVzW2ldICE9PSB2YWx1ZXNbaV0gfHxcbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmVWYWx1ZSh2YWx1ZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAocy5sZW5ndGggPT09IDIgJiYgc1swXSA9PT0gJycgJiYgc1sxXSA9PT0gJycpIHtcbiAgICAgICAgICAgIC8vIEFuIGV4cHJlc3Npb24gdGhhdCBvY2N1cGllcyB0aGUgd2hvbGUgYXR0cmlidXRlIHZhbHVlIHdpbGwgbGVhdmVcbiAgICAgICAgICAgIC8vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGVtcHR5IHN0cmluZ3MuXG4gICAgICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHRoaXMsIHZhbHVlc1tzdGFydEluZGV4XSk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9pbnRlcnBvbGF0ZSh2YWx1ZXMsIHN0YXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgc3RhcnROb2RlLCBlbmROb2RlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgcHJpbWl0aXZlIHZhbHVlc1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGRpZG4ndCBjaGFuZ2UsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS50aGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFByb21pc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX3NldE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9zZXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiBfcHJldmlvdXNWYWx1ZSBpc1xuICAgICAgICAgICAgLy8gcHJpbWl0aXZlP1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5pbnN0YW5jZS5fZ2V0VGVtcGxhdGUodmFsdWUpO1xuICAgICAgICBsZXQgaW5zdGFuY2U7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlICYmIHRoaXMuX3ByZXZpb3VzVmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuX3ByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzLmluc3RhbmNlLl9wYXJ0Q2FsbGJhY2ssIHRoaXMuaW5zdGFuY2UuX2dldFRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGUoaW5zdGFuY2UuX2Nsb25lKCkpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH1cbiAgICBfc2V0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgX3ByZXZpb3VzVmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF9wcmV2aW91c1ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgX3ByZXZpb3VzVmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuX3ByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgIGxldCBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBjcmVhdGluZyB0aGUgZmlyc3QgaXRlbSBwYXJ0LCBpdCdzIHN0YXJ0Tm9kZSBzaG91bGQgYmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gY29udGFpbmVyJ3Mgc3RhcnROb2RlXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1TdGFydCA9IHRoaXMuc3RhcnROb2RlO1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBjcmVhdGluZyB0aGUgZmlyc3QgcGFydCwgY3JlYXRlIGEgbmV3IHNlcGFyYXRvciBtYXJrZXJcbiAgICAgICAgICAgICAgICAvLyBub2RlLCBhbmQgZml4IHVwIHRoZSBwcmV2aW91cyBwYXJ0J3MgZW5kTm9kZSB0byBwb2ludCB0byBpdFxuICAgICAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVN0YXJ0ID0gcHJldmlvdXNQYXJ0LmVuZE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydChpdGVtU3RhcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLmluc3RhbmNlLCBpdGVtU3RhcnQsIHRoaXMuZW5kTm9kZSk7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF9wcmV2aW91c1ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihsYXN0UGFydC5lbmROb2RlLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICBsYXN0UGFydC5lbmROb2RlID0gdGhpcy5lbmROb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9zZXRQcm9taXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUudGhlbigodikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyKHN0YXJ0Tm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUsIHN0YXJ0Tm9kZS5uZXh0U2libGluZywgdGhpcy5lbmROb2RlKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFBhcnRDYWxsYmFjayA9IChpbnN0YW5jZSwgdGVtcGxhdGVQYXJ0LCBub2RlKSA9PiB7XG4gICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlUGFydChpbnN0YW5jZSwgbm9kZSwgbm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJ0IHR5cGUgJHt0ZW1wbGF0ZVBhcnQudHlwZX1gKTtcbn07XG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFydENhbGxiYWNrLCBnZXRUZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuX3BhcnRDYWxsYmFjayA9IHBhcnRDYWxsYmFjaztcbiAgICAgICAgdGhpcy5fZ2V0VGVtcGxhdGUgPSBnZXRUZW1wbGF0ZTtcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgdmFsdWVJbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFydC5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1t2YWx1ZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXMsIHZhbHVlSW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhbHVlSW5kZXggKz0gcGFydC5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9uZSgpIHtcbiAgICAgICAgLy8gQ2xvbmUgdGhlIG5vZGUsIHJhdGhlciB0aGFuIGltcG9ydGluZyBpdCwgdG8ga2VlcCB0aGUgZnJhZ21lbnQgaW4gdGhlXG4gICAgICAgIC8vIHRlbXBsYXRlJ3MgZG9jdW1lbnQuIFRoaXMgbGVhdmVzIHRoZSBmcmFnbWVudCBpbmVydCBzbyBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgLy8gd29uJ3QgdXBncmFkZSB1bnRpbCBhZnRlciB0aGUgbWFpbiBkb2N1bWVudCBhZG9wdHMgdGhlIG5vZGUuXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlXG4gICAgICAgICAgICAvLyBudWxsXG4gICAgICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGZyYWdtZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQgKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0QWN0aXZlID0gaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCk7XG4gICAgICAgICAgICAgICAgLy8gQW4gaW5hY3RpdmUgcGFydCBoYXMgbm8gY29yZXNwb25kaW5nIFRlbXBsYXRlIG5vZGUuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydEFjdGl2ZSA/IHRoaXMuX3BhcnRDYWxsYmFjayh0aGlzLCBwYXJ0LCB3YWxrZXIuY3VycmVudE5vZGUpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufVxuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlXG4gKiBgYmVmb3JlTm9kZWAuIElmIGBiZWZvcmVOb2RlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGVcbiAqIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPSAoY29udGFpbmVyLCBzdGFydCwgZW5kID0gbnVsbCwgYmVmb3JlID0gbnVsbCkgPT4ge1xuICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlLCBiZWZvcmUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICB9XG59O1xuLyoqXG4gKiBSZW1vdmVzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydE5vZGVgIChpbmNsdXNpdmUpIHRvIGBlbmROb2RlYFxuICogKGV4Y2x1c2l2ZSksIGZyb20gYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9IChjb250YWluZXIsIHN0YXJ0Tm9kZSwgZW5kTm9kZSA9IG51bGwpID0+IHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICBjb25zdCBuID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlxyXG4vLyBVc2Ugd2hlbiBkZXYgb3V0c2lkZSBIQVNTIGFuZCBidWlsZCB1c2luZyBucG1cclxuaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL2xpdC1lbGVtZW50JztcclxuLy8gVXNlIHdoZW4gZGVwbG95IGRpcmVjdGx5IHRvIEhBU1Mgd2l0aG91dCBjb21wbGllIGFuZCBzdHVmZi4gXHJcbi8vaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2h0dHBzOi8vdW5wa2cuY29tL0Bwb2x5bWVyL2xpdC1lbGVtZW50QGxhdGVzdC9saXQtZWxlbWVudC5qcz9tb2R1bGUnO1xyXG5cclxuLyoqXHJcbiAqIGBwaWN0dXJlLXN0YXR1cy1lbGVtZW50YFxyXG4gKiBMb3ZlbGFjZSBlbGVtZW50IGZvciBkaXNwbGF5aW5nIHN0YXR1cyBvbiBhIHBpY3R1cmUgYm90dG9tIGNlbnRlcmVkIG9uIGEgc2hhZG93XHJcbiAqL1xyXG5jbGFzcyBQaWN0dXJlU3RhdHVzRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gIF9yZW5kZXIoeyBoYXNzLCBjb25maWcgfSkge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hhZG93IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTs7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGF0ZXtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgb24tY2xpY2s9XCIkeygpID0+IHRoaXMuX2NsaWNrKCl9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93XCI+PGRpdiBpZD1cInN0YXRlXCI+JHt0aGlzLnN0YXRlfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgQ2FudCBzZXQgYmFja2dyb3VuZCBpbWFnZSBpbiByZW5kZXIgbWV0aG9kIGZvciB0aGUgc3R5bGUsIHNvbWUgYnVnIHByb2hpYml0IHRoYXQuXHJcbiAgICBTbyB3ZSBuZWVkIHRvIHNldCB0aGUgYmFja2dyb3VuZCBpbWFnZSBhZnRlciB0aGUgcGFnZSBoYXMgcmVuZGVyZWRcclxuICAqL1xyXG4gIF9kaWRSZW5kZXIoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yb290LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcclxuICAgIGNvbnN0IHN0YXRlX2RpdiA9IHRoaXMuX3Jvb3QucXVlcnlTZWxlY3RvcignI3N0YXRlJyk7XHJcblxyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9nZXRTdGF0ZUltYWdlKCl9KWA7XHJcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fY2FyZF9oZWlnaHQ7XHJcblxyXG4gICAgc3RhdGVfZGl2LnN0eWxlLmZvbnRTaXplID0gdGhpcy5fZm9udF9zaXplO1xyXG4gICAgc3RhdGVfZGl2LnN0eWxlLmNvbG9yID0gdGhpcy5fZm9udF9jb2xvcjtcclxuICB9XHJcblxyXG4gIF9jbGljaygpIHtcclxuICAgIHRoaXMuX2ZpcmUoJ2hhc3MtbW9yZS1pbmZvJywgeyBlbnRpdHlJZDogdGhpcy5fY29uZmlnLmVudGl0eSB9KTtcclxuICB9XHJcblxyXG4gIF9maXJlKHR5cGUsIGRldGFpbCkge1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcclxuICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgIGNvbXBvc2VkOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbCB8fCB7fTtcclxuICAgIHRoaXMuX3Jvb3QuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICBSZXR1cm5zIHRoZSBzdGF0ZSBpbWFnZSBmb3Igc3BlY2lmaWMgc3RhdGUgXHJcbiAgICBvciBkZWZhdWx0IGltYWdlIGlmIG5vdCBzcGVjaWZpYyBzdGF0ZSBpbWFnZSBmb3VuZFxyXG4gICovXHJcbiAgX2dldFN0YXRlSW1hZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSBpbiB0aGlzLl9jb25maWcuc3RhdGVfaW1hZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zdGF0ZV9pbWFnZVt0aGlzLnN0YXRlXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9jb25maWcuaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWcoY29uZmlnKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgaWYgKCFjb25maWcuZW50aXR5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBlbnRpdHkgZGVmaW5lZCcpXHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbmZpZy5pbWFnZSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignTm8gaW1hZ2UgZGVmaW5lZCcpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZm9udF9zaXplID0gY29uZmlnLmZvbnRfc2l6ZSA/IGNvbmZpZy5mb250X3NpemUgOiAnMS41ZW0nO1xyXG4gICAgdGhpcy5fY2FyZF9oZWlnaHQgPSBjb25maWcuY2FyZF9oZWlnaHQgPyBjb25maWcuY2FyZF9oZWlnaHQgOiAnMTUwcHgnO1xyXG4gICAgdGhpcy5fZm9udF9jb2xvciA9IGNvbmZpZy5mb250X2NvbG9yID8gY29uZmlnLmZvbnRfY29sb3IgOiAnd2hpdGUnO1xyXG5cclxuICB9XHJcblxyXG4gIHNldCBoYXNzKGhhc3MpIHtcclxuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xyXG5cclxuICAgIHZhciBlbnRpdHlTdGF0ZSA9IHRoaXMuX2hhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldLnN0YXRlXHJcbiAgICBpZiAoZW50aXR5U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gZW50aXR5U3RhdGU7IC8vIFRoaXMgdHJpZ2dlcnMgX3JlbmRlciBzaW5jZSBMaXRFbGVtZW50IHN1cHBvcnQgdHdvIHdheSBiaW5kaW5nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoYXNzOiBPYmplY3QsXHJcbiAgICAgIGNvbmZpZzogT2JqZWN0LFxyXG4gICAgICBzdGF0ZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDYXJkU2l6ZSgpIHtcclxuICAgIHJldHVybiAyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLy8gV2UgY2hlY2sgaWYgd2UgaGF2ZSBzZXQgdGhlIGVudmlyb25tZW50IHZhciB0byBwcm9kdWN0aW9uLCBpZiBzbyB3ZSBkb250IGxvYWQgdGVzdGRhdGFcclxuICAgIC8vIHRoaXMgZW52aXJvbm1lbnQgaXMgc2V0IGluIHdlYnBhY2sucHJvZC5qc1xyXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9IHR5cGVvZiB1bmRlZmluZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7IHJldHVybjsgfVxyXG5cclxuICAgIHRoaXMuX19pbml0VGVzdHMoKTsgLy8gSW5pdCB0ZXN0ZGF0YSBpZiB3ZSBhcmUgaSBkZXZcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBJIHVzZSB0aGlzIGluIG15IGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIG1ha2UgYSB2ZXJ5IHNpbXBsZSBtb2NrIG9mIGNvbmZpZy9oYXNzIG9iamVjdHMgXHJcbiAgKi9cclxuICBfX2luaXRUZXN0cygpIHtcclxuICAgIHRoaXMuc3RhdGUgPSAnSG9tZSc7XHJcbiAgICB2YXIgdGVzdF9jb25maWcgPSB7IGVudGl0eTogJ2RldmljZV90cmFja2VyLmFueScsIGltYWdlOiAnL2Rpc3QvaW1nL3ByZXNlbmNlL3RvbWFzX3ByZXNlbmNlX2F3YXkuanBnJywgc3RhdGVfaW1hZ2U6IHt9IH07IC8vLCBmb250X3NpemU6ICcxZXYnXHJcbiAgICB0ZXN0X2NvbmZpZy5zdGF0ZV9pbWFnZVsnSG9tZSddID0gJy9kaXN0L2ltZy9wcmVzZW5jZS90b21hc19wcmVzZW5jZV9hd2F5LmpwZydcclxuXHJcbiAgICB2YXIgdGVzdF9oYXNzID0geyBzdGF0ZXM6IFtdIH07XHJcbiAgICB0ZXN0X2hhc3Muc3RhdGVzW3Rlc3RfY29uZmlnLmVudGl0eV0gPSBcIkhvbWVcIjtcclxuICAgIHRoaXMuc2V0Q29uZmlnKHRlc3RfY29uZmlnKTtcclxuXHJcblxyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGljdHVyZS1zdGF0dXMtY2FyZCcsIFBpY3R1cmVTdGF0dXNFbGVtZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==