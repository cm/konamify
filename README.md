# Konamify
A utility function for observing Konami code input in a web browser.

**Installation:**
```bash
npm install konamify
```
Or include the following script in your webpage:
```html
<script src="https://unpkg.com/konamify/konamify.min.js"></script>
```
Or it may be easier to just add the required code to your project manually. Simply paste the following:
```js
function konamify (cb) {
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13], i = 0;
    window.addEventListener('keydown', function (e) {
        i = (e.keyCode === k[i]) ? i + 1 : 0;
        if (i === k.length) cb();
    });
};
```

**Example usage:**
```js
konamify(function () {
    console.log('Konami code successfully entered!')
})
```
**How to:**
In order to activate the konami code enter the following in a browser.
```
UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A ENTER
```
