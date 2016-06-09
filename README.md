# React SVG Sprite Component
A basic react component that will create an svg sprite based on an array of svg files.

`npm install react-svg-sprite --save`

## Example Output

Given your component's data looks like this...
```javascript
<SvgSprite
    className="weather-icons"
    symbols=[{
        className: 'weather-icon',
        name: 'cloud',
        svg: '<svg viewBox="0 0 32 32">...</svg>'
    }, {
        className: 'weather-icon',
        name: 'rain',
        svg: '<svg viewBox="0 0 32 32">...</svg>'
    }]
/>
```

Your output would look like something like this...
```html
<svg class="weather-icons" style="display:none;">
    <symbol id="cloud" viewBox="0 0 32 32" class="weather-icon">
        <path>...</path>
    </symbol>
    <symbol id="rain" viewBox="0 0 32 32" class="weather-icon">
        <path>...</path>
    </symbol>
</svg>
```
