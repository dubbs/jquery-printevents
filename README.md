# jQuery Print Events

This plugin publishes jQuery events before and after print.  It normalizes [onbeforeprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint)/[onafterprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint) and [window.matchMedia](https://developer.mozilla.org/en/docs/Web/API/Window/matchMedia) using techniques described in this [article](https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/).

## Usage
Include dependencies:
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="jquery.printevents.js"></script>
```
Create subscribers for the published events:
```js
$(document).on('print:before', function () {
  // run code before print
});

$(document).on('print:after', function () {
  // run code after print
});
```
