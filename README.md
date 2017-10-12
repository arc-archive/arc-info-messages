[![Build Status](https://travis-ci.org/advanced-rest-client/arc-info-messages.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/arc-info-messages)  

# arc-info-messages

`<arc-info-messages>` A list of app messages to be displayed to the user

This element is to be used with `<arc-messages-service>` element or any other
logic that downloads messages from ARC datastore.

### Example

```
<arc-info-messages messages="[[messages]]"></arc-info-messages>
<arc-messages-service platform="chrome" messages="{{messages}}" auto-messages></arc-messages-service>
```

### Styling
`<arc-info-messages>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--arc-info-messages` | Mixin applied to the element | `{}`
`--arc-info-messages-title` | Mixin applied to the title of the list | `{}`
`--arc-info-messages-title-container` | Mixin applied to the list title container | `{}`
`--arc-info-messages-list` | Mixin applied to the list container. | `{}`
`--arc-info-message-separator-color` | Color of the messages separator. | `#C9C9C9`
`--arc-info-message` | Mixin applied to the message item | `{}`
`--arc-info-message-title-weight` | Message title width | `400`
`--arc-info-message-unread-title-weight` | Message title width when unread. | `500`
`--arc-info-message-title` | Mixin applied to the title of the message | `{}`
`--arc-info-message-date-color` | Color of the date label | `rgba(0, 0, 0, 0.64)`
`--arc-info-message-date` | Mixin applied to the date label | `{}`
`--arc-info-message-content-color` | Color of the message | `rgba(0, 0, 0, 0.74)`
`--arc-info-message-content` | Mixin applied to the mesage container. | `{}`
`--arc-info-message-action-color` | Color of the action link | `--primary-color`
`--arc-info-message-action` | Mixin applied to the action link | `{}`
`--arc-info-message-action-container` | Mixin applied to message's action container | `{}`
`--arc-font-body1` | Theme font | `{}`
`--arc-font-subhead` | Theme font sub-title | `{}`
`--arc-font-headline` | Theme font headline | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| close | Non-bubbling event fired when the user request to close the view. | __none__ |
# arc-info-message

A message item for the messages list.

### Example
```
<arc-info-message title="Hello world!" message="This is a message" timestamp="1507842822597" link-label="Read more about this" link-action="https://domain.com"></arc-info-message>
```

### Styling
`<arc-info-messages>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--arc-info-message` | Mixin applied to the message item | `{}`
`--arc-info-message-title-weight` | Message title width | `400`
`--arc-info-message-unread-title-weight` | Message title width when unread. | `500`
`--arc-info-message-title` | Mixin applied to the title of the message | `{}`
`--arc-info-message-date-color` | Color of the date label | `rgba(0, 0, 0, 0.64)`
`--arc-info-message-date` | Mixin applied to the date label | `{}`
`--arc-info-message-content-color` | Color of the message | `rgba(0, 0, 0, 0.74)`
`--arc-info-message-content` | Mixin applied to the mesage container. | `{}`
`--arc-info-message-action-color` | Color of the action link | `--primary-color`
`--arc-info-message-action` | Mixin applied to the action link | `{}`
`--arc-info-message-action-container` | Mixin applied to message's action container | `{}`
`--arc-font-body1` | Theme font | `{}`
`--arc-font-subhead` | Theme font title | `{}`

