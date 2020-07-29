# 🦢 vue-feather-icon-set <a href="https://npm.im/vue-feather-icon-set"><img src="https://badgen.net/npm/v/vue-feather-icon-set"></a> <a href="https://npm.im/vue-feather-icon-set"><img src="https://badgen.net/npm/dm/vue-feather-icon-set"></a> <a href="https://packagephobia.now.sh/result?p=vue-feather-icon-set"><img src="https://packagephobia.now.sh/badge?p=vue-feather-icon-set"></a> <a href="https://bundlephobia.com/result?p=vue-feather-icon-set"><img src="https://badgen.net/bundlephobia/minzip/vue-feather-icon-set"></a>

Optimized [Feather](https://feathericons.com) icon set for Vue


## :rocket: Install
```sh
npm i vue-feather-icon-set
```

## 👩‍🏫 Usage
1. **Put the _IconLayer_ at the top of your app.**

    The IconLayer needs to be top-level, above any icon usage. It's okay to put it in the app too as long as it's before any icons are used.

    ```vue
    <template>
      <icon-layer>
        <app />
      </icon-layer>
    </template>

    <script>
    import IconLayer from 'vue-feather-icon-set';
    import App from './app';

    export default {
      components: {
        IconLayer,
        App,
      }
    };
    </script>
    ```
2. **Import the icon and use it!**


    ```vue
    <template>
      <div>
        <alert-triangle-icon />
      </div>
    </template>

    <script>
    import AlertTriangleIcon from 'vue-feather-icon-set/icons/alert-triangle';

    export default {
      components: {
        AlertTriangleIcon
      }
    };
    </script>
    ```

## :raising_hand: FAQ

### How is this optimized?
SVGs can be referenced and reused like variables with the [`<use>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use). This icon-set leverages this feature to define referencable SVGs so that repeated usage of an icon isn't duplicated in the DOM.

Demo on [JSFiddle](https://jsfiddle.net/hirokiosame/94vbm5pr/)

```html
<!-- Defined SVGs -->
<svg style="display: none">
  <defs>
    <svg id="plus">
      <path d="M8 2V14M2 8H14" stroke="black" stroke-width="2" />
    </svg>

    <svg id="circle">
      <circle cx="8" cy="8" r="8" fill="black" />
    </svg>
  </defs>
</svg>


<!-- Use "plus" icon -->
<svg class="icon" width="16" height="16">
  <use href="#plus" />
</svg>

<!-- Use "circle" icon -->
<svg class="icon" width="16" height="16">
  <use href="#circle" />
</svg>
```

### Does this work with SSR?
Yes! However, the SVG will not be inlined in the server-rendered document. It's actually a technical limitation because each icon usages hoists up the SVG rendering to happen in the parent _IconLayer_, and SSR only renders once. This could work to an advantage as it keeps the server-rendered doc from including SVGs that may be large or repeated. [Here's a working demo](https://github.com/privatenumber/vue-svg-icon-set-ssr-demo).

