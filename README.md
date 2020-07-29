# 🦢 vue-feather-icon-set <a href="https://npm.im/vue-feather-icon-set"><img src="https://badgen.net/npm/v/vue-feather-icon-set"></a> <a href="https://npm.im/vue-feather-icon-set"><img src="https://badgen.net/npm/dm/vue-feather-icon-set"></a> <a href="https://packagephobia.now.sh/result?p=vue-feather-icon-set"><img src="https://packagephobia.now.sh/badge?p=vue-feather-icon-set"></a> <a href="https://bundlephobia.com/result?p=vue-feather-icon-set"><img src="https://badgen.net/bundlephobia/minzip/vue-feather-icon-set"></a>

Optimized [Feather](https://feathericons.com) icon set for Vue

## :raising_hand: How is this optimized?
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


## :rocket: Install
```sh
npm i vue-feather-icon-set
```

