# React SVG Sprite Component
A basic react component that will create an `svg` sprite based on an `svg` `array`.

`npm install react-svg-sprite --save`

## How to Use
This component only requires an `array` of your given symbols with `name`, and `svg` string.

### Minimum Example

```javascript
import React from 'react'
import SvgSprite from 'react-svg-sprite'

export default class BuildingBlock extends React.Component {
    render () {
        return (
            <SvgSprite
                symbols=[{
                    name: 'cloud',
                    svg: '<svg></svg>'
                }, {
                    name: 'rain',
                    svg: '<svg></svg>'
                }]
            />
        );
    }
}
```

To then use your `svg` icons anywhere on your page you'll want to use the following markup.
```html
<svg>
    <use xlink:href="#cloud"></use>
</svg>
```
You can use an `npm` package like [react-svg-use](https://www.npmjs.com/package/react-svg-use) to help speed up development, and decrease maintainability.


## Example Output

Given your component looks like this...
```javascript
import React from 'react'
import SvgSprite from 'react-svg-sprite'

export default class BuildingBlock extends React.Component {
    render () {
        return (
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
        );
    }
}
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
