
// Use when dev outside HASS and build using npm
import { html, LitElement } from '@polymer/lit-element';
// Use when deploy directly to HASS without complie and stuff. 
//import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

/**
 * `picture-status-element`
 * Lovelace element for displaying status on a picture bottom centered on a shadow
 */
class PictureStatusElement extends LitElement {

  /*
    Change the height of the container to change card height
  */
  _render({ hass, config }) {
    return html`
        
        <style>
            #container {
                max-width: 50%;
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
        <div id="container">
          <div class="shadow"><div id="state">${this.state}</div></div>
        </div>
        
        `;
  }
  
  /*
    Cant set background image in render method for the style, some bug prohibit that.
    So we need to set the background image after the page has rendered
  */
  _didRender(_props, _changedProps, _prevProps) {
  this._root.querySelector('#container').style.backgroundImage = `url(${this._getStateImage()})`;
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
    if ( typeof process != typeof undefined && process.env.NODE_ENV == 'production'){return;}
    
    this.__initTests(); // Init testdata if we are i dev
  }

  /*
    I use this in my development environment to make a very simple mock of config/hass objects 
  */
  __initTests() {
    this.state = 'Some state';
    var test_config = { entity: 'device_tracker.any', image: '/dist/img/presence/tomas_presence_away.jpg', state_image: {} };
    test_config.state_image['Home'] = '/dist/img/presence/tomas_presence_away.jpg'
    var test_hass = { states: [] };
    test_hass.states[test_config.entity] = "Home";
    this.setConfig(test_config);
  }
}

window.customElements.define('picture-status-element', PictureStatusElement);
