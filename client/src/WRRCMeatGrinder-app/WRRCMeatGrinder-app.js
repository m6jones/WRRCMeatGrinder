import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class WRRCMeatGrinderApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'WRRCMeatGrinder-app'
      }
    };
  }
}

window.customElements.define('WRRCMeatGrinder-app', WRRCMeatGrinderApp);
