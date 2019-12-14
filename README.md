# Functional CSS framework

Atomic CSS class should apply one visual effect, and apply that every single time. So your CSS becomes made up of many small parts, that can be composed to give a specific visual effect.

## Install

```bash
npm install functional-css-framework
```

## Usage

### Webpack with JS ES6 / TypeScript
```ts
import 'functional-css-framework'
```

### Webpack with ES5
```js
require('functional-css-framework')
```

### With CSS/SCSS
```scss
@import '~functional-css-framework'
```

### Without Bundle

```html
 <link href="./node_modules/functional-css/dist/functional-css.min.css" rel="stylesheet" media="all" >
```

## Integrate with React

```ts
require('functional-css/dist/index.min.css')
...
export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { theme: 'dark' }
  }

  switchTheme() {
    this.setState(state => ({theme: state.theme === 'dark' ? 'light' : 'dark'}))
  }

  render() {
    return <div className={`${this.state.theme}`}>
      <i className="ion-ios-color-palette"
        onClick={this.switchTheme.bind(this)} />
    </div>
  }
}
```
