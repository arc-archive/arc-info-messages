/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
import '../../@advanced-rest-client/date-time/date-time.js';
/**
 * A message item for the messages list.
 *
 * ### Example
 *
 * ```html
 * <arc-info-message
 *  title="Hello world!"
 *  message="This is a message"
 *  timestamp="1507842822597"
 *  link-label="Read more about this"
 *  link-action="https://domain.com"></arc-info-message>
 * ```
 *
 * ### Styling
 *
 * `<arc-info-messages>` provides the following custom properties and mixins
 * for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--arc-info-message` | Mixin applied to the message item | `{}`
 * `--arc-info-message-title-weight` | Message title width | `400`
 * `--arc-info-message-unread-title-weight` | Message title width when unread. | `500`
 * `--arc-info-message-title` | Mixin applied to the title of the message | `{}`
 * `--arc-info-message-date-color` | Color of the date label | `rgba(0, 0, 0, 0.64)`
 * `--arc-info-message-date` | Mixin applied to the date label | `{}`
 * `--arc-info-message-content-color` | Color of the message | `rgba(0, 0, 0, 0.74)`
 * `--arc-info-message-content` | Mixin applied to the mesage container. | `{}`
 * `--arc-info-message-action-color` | Color of the action link | `--primary-color`
 * `--arc-info-message-action` | Mixin applied to the action link | `{}`
 * `--arc-info-message-action-container` | Mixin applied to message's action container | `{}`
 * `--arc-font-body1` | Theme font | `{}`
 * `--arc-font-subhead` | Theme font title | `{}`
 *
 * @polymer
 * @customElement
 * @memberof UiElements
 * @demo demo/index.html
 */
class ArcInfoMessage extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      @apply --arc-info-message;
    }

    h3 {
      @apply --arc-font-subhead;
      font-weight: var(--arc-info-message-title-weight, 400);
      @apply --arc-info-message-title;
    }

    :host[read="0"] h3 {
      font-weight: var(--arc-info-message-unread-title-weight, 500);
    }

    .time {
      @apply --arc-font-body1;
      margin: 0 0 12px 0;
      padding: 0;
      color: var(--arc-info-message-date-color, rgba(0, 0, 0, 0.64));
      @apply --arc-info-message-date;
    }

    .message {
      @apply --arc-font-body1;
      margin: 0;
      padding: 0;
      color: var(--arc-info-message-content-color, rgba(0, 0, 0, 0.74));
      @apply --arc-info-message-content;
    }

    a {
      color: var(--arc-info-message-action-color, var(--primary-color));
      @apply --arc-info-message-action;
    }

    .action {
      margin: 12px 0;
      @apply --arc-info-message-action-container;
    }
    </style>
    <h3>[[title]]</h3>
    <p class="time">
      <date-time date="[[timestamp]]" year="numeric" month="long" day="numeric" hour="numeric" minute="numeric"></date-time>
    </p>
    <p class="message">[[message]]</p>
    <template is="dom-if" if="[[hasAction]]">
      <div class="action">
        <a target="_blank" href="[[linkAction]]" on-click="_openMessage">[[linkLabel]]</a>
      </div>
    </template>
`;
  }

  static get is() { return 'arc-info-message'; }
  static get properties() {
    return {
      // Title of the message
      title: String,
      // Message to display
      message: String,
      // Label for the action
      linkLabel: String,
      // Action link.
      linkAction: String,
      // Message timestamp
      timestamp: String,
      // `0` means that the message is unread.
      read: {
        type: Number,
        reflectToAttribute: true
      },
      // Computed value. True to display actions container.
      hasAction: {
        type: Boolean,
        computed: '_computeHasAction(linkAction, linkLabel)'
      }
    };
  }

  _computeHasAction(linkAction, linkLabel) {
    return !!(linkAction && linkLabel);
  }
  /**
   * Handles click on the action item.
   * It dispatches `open-external-url` for the app to open the window
   * in a native way for the platform or it uses `window.open` if the event
   * is not handled.
   *
   * @param {MouseEvent} e
   */
  _openMessage(e) {
    e.preventDefault();
    const url = this.linkAction;
    const ev = new CustomEvent('open-external-url', {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        url: url
      }
    });
    this.dispatchEvent(ev);
    this._reportMessageOpen();
    if (ev.defaultPrevented) {
      return;
    }
    window.open(url);
  }

  // Reports GA action.
  _reportMessageOpen() {
    const ev = new CustomEvent('send-analytics', {
      detail: {
        type: 'event',
        category: 'arc-info-messages',
        action: 'Opened',
        label: this.title
      },
      cancelable: true,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(ev);
  }
}
window.customElements.define(ArcInfoMessage.is, ArcInfoMessage);
