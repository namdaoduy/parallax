# XALLARAP

My new Web Experiment using [Parallax.js](https://matthew.wagerfield.com/parallax/).

![webexp](https://img.shields.io/badge/web-exp-red.svg)
![namdaoduy](https://img.shields.io/badge/namdaoduy-dev-green.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACplBMVEUAAAAaGhojIyMnJycyMjI2NjY4ODg7Ozs8PDw/Pz9AQEBDQ0NFRUVGRkZHR0dJSUlLS0tOTk5gYGBnZ2doaGhsbGxtbW1ycnJ1dXU0NDQ5OTk7Ozs6OjpDQ0NGRkY8PDxDQ0NEREQ/Pz9DQ0MhISEiIiIfHx8gICAhISEjIyMgICAhISEdHR4eHh4gICAhISEdHR0fHx8iIiIgICAWFhYUFBQVFRUXFxcXFxYXFxcTExMVFRUODQ4PDw8QEBAPDw8REREODg8RERERERELCwsMDAwNDQ0LCwsMDAwMDAwLCwsNDQ0KCgoLCwsMDAwEBAQEBAQDAwMEBAQCAgICAgMDAwMCAgICAgICAgIAAAAAAQABAQABAgABAgECAwEDBAEDBQIEBQIEBgIFBwIFCAMGCQMGCgMHCgMHCwQICwQIDQQJDQQJDQUKDwULEAUMEgYQGAgQGQgTHQoUHgoVHgoVHwoWIAsaJg0hMREhMhEiMxEjNBIkNhIkNxImOBMmORMmOhMnOhQnOxQoPBQpPRQuRBcuRRcwRxgwSBgxSRgxShkySxk0TRo0Tho1Txo4Uxw5VRw5Vhw6Vh07WR48Wh48Wx49Wx8/Xh8/XiBAYSBBYSBBYSFCYiFCYyFDZCFEZiJFZyJHaiRNciZNcydOdSdOdidQdyhReihSeilTfCpXgStXgSxXgixahy1bhy5diy9ejC9fjS9hkDBhkTFikzFjkzFjlDJklDJklTJkljJlljJllzNlmDNnmTNnmjNnmjRnmzRomzRpnjVqnjVtojdtozdupDdupTd3sjx3szx4szx4tDx5tT15tj16tz16uD1+vT9/v0CAwECBwUCBwkGCwkGCw0GDxEGFyEOGyEOGyUOHy0SIzESJzkSJzkWK0EWL0EX///++5IqVAAAAWXRSTlMAAAAAAAAAAAAAAAAAAAAAAAAJCQkJCQkJDg4ODyAgISEhIiJiYmNjY2RlZXFxcXJzc3N0jo+Pj5CQkZK7vLy9vb6+v8/Pz9DQ0ebn6Ojp9/j5+fr6+vv9/uVb2lkAAAF1SURBVBhXBcE9b9NAAAbg13c+xx/1OW6TJkiJieMMXZCQgIWJDYmNv8vKgKoywFS1atNGOE0rK/FnXMe58/E8GmDrxZz7DoMoinzJRQ0NlDmjqccbCUAWq6QQHXUwjIL5xfs6B4wzxXXZmNS2o6D38R3Hvw7Bd5F52ivoIZyyT5+rxkoL9uViJp7Yfk2jubv4ZqvabmPSO3Mmu8w40vnY+zqqLjmsbbl5Cd3T+25P+nQ46f78znQ+AR6v5PmY+sRBaO5v2uujCM6B+5IFcEgPJtmX2O40fwyUJTFhEAUNSqFaQoanAFEKIC0One0CSQ5vAO6oBi2psGzcBbC9IySyFrx9QEl9v3vrD59TYMSMkw92fFXH1HTJa2TPRFI6b2ToNz/Wu5hmej8XQf9wK7sxO5Cff+vbR9o/Mm+TDi6fUZ1M6fUvGSeM6rWQvfThRQCwbu6SVbwlGgh1BzPXAKBZWb5KM6kolKE2smqV6qqn9WZJtSP+A7A+rebnJJT6AAAAAElFTkSuQmCC)
## Installation

```bash
echo "just a pure HTML/CSS/JS webpage"
```

## Usage


```html
<div id="scene">
  <div data-depth="0.2">My first Layer!</div>
  <div data-depth="0.6">My second Layer!</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
```

```javascript
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
```

## License
[MIT](https://choosealicense.com/licenses/mit/)