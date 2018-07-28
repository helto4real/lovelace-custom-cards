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

import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

/**
 * `picture-status-card`
 * Lovelace element for displaying status on a picture bottom centered on a shadow
 */
class MediaPlayerCard extends LitElement {
  
  _render({ hass, config }) {
    return html`
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
    // We check if we have set the environment var to 'development', if so we load testdata
    // this environment is set in webpack.dev.js
    if (typeof process != typeof undefined && process.env.NODE_ENV == 'development') {
      this.__initTests();
    } 

  }

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
}

window.customElements.define('media-player-card', MediaPlayerCard);
