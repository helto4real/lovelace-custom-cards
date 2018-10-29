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
import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

/**
 * `picture-status-card`
 * Lovelace element for displaying status on a picture bottom centered on a shadow
 */
class PictureStatusCard extends LitElement {
  _render({ hass, config }) {
    return html`
        
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
    if (!hass)
      return
      
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
  }

}

window.customElements.define('picture-status-card', PictureStatusCard);
