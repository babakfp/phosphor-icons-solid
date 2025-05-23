# Phosphor Icons Solid

<img src="https://github.com/phosphor-icons/homepage/raw/master/.github/logo.png" width="128" align="right" />

**Phosphor Icons Solid** is a collection of components designed to integrate
[**Phosphor Icons**](https://phosphoricons.com) into the
[**Solid**](https://github.com/solidjs/solid) framework.

- **{{{iconsPerWeight}}}** icons per weight, and **{{{iconsTotal}}}** icons in
  total.
- **{{{weightsCount}}}** weights: {{{weightNames}}}

> [!NOTE]
> The latest release is based on
> [`@phosphor-icons/core@{{{coreVersion}}}`](https://github.com/phosphor-icons/core).
> If the versions don't match, feel free to open an issue.

## Installation

```
npm i phosphor-icons-solid
```

## Usage

```jsx
<script>
    import IconHeartRegular from "phosphor-icons-solid/IconHeartRegular"
    import IconHeartBreakBold from "phosphor-icons-solid/IconHeartBreakBold"
</script>

<IconHeartRegular />
<IconHeartBreakBold />
```

### Props

Only the `class` prop is available for styling.

#### `class`

```jsx
<IconHeartRegular class="icon-heart-regular" />
```

### Default Styles

Here are the default attributes applied to all SVG elements.

```
width="1em"
height="1em"
fill="currentColor"
pointer-events="none"
display="inline-block"
```

#### `width="1em"` and `height="1em"`

The `em` unit in CSS is relative to the element's `font-size` (e.g., `2em` is
twice the size of the current font size).

#### `fill="currentColor"`

Setting the
[`fill`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
property to
[`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)
inherits its value from the
[`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) property.

#### `pointer-events="none"`

Since icons are purely visual, there's no need to make them interactive. The
[`pointer-events: none`](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events#none)
property prevents any pointer interactions.

#### `display="inline-block"`

This helps in various styling scenarios.

### Default Attributes

Here are the default attributes applied to all SVG elements.

#### `data-phosphor-icon="icon-name"`

This attribute is used to flip/mirror icons when their default orientation isn't
suitable for RTL languages.

```css
[dir="rtl"] [data-phosphor-icon="heart"] {
    transform: scaleX(-1);
}
```

#### [`aria-hidden="true"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

Icons are visual elements, so they don't need to be visible to screen readers.

## FAQ

### Why was this built?

- TypeScript support.
- Accessibility considerations.
- Improved performance and developer experience.

### Why is the syntax considered ugly?

Consider the following two syntaxes:

**Pretty syntax** (invalid):

```jsx
<script>
    import { Heart, HeartBreak } from "phosphor-icons-solid"
</script>

<Heart />
<HeartBreak weight="bold" />
```

**Ugly syntax**:

```jsx
<script>
    import IconHeartRegular from "phosphor-icons-solid/IconHeartRegular"
    import IconHeartBreakBold from "phosphor-icons-solid/IconHeartBreakBold"
</script>

<IconHeartRegular />
<IconHeartBreakBold />
```

The first syntax may seem appealing, but it causes issues!
[**Phosphor Icons**](https://phosphoricons.com) includes a total of
{{{iconsTotal}}} icons; importing just one icon (using the first syntax) results
in all icons being imported. This can significantly slow down your site's
performance and loading time during development. To address this, this library
restricts you to importing icons individually.

What about combining all weights into a single component? This can cause a
similar issue, affecting both development and production environments!
Sometimes, tooling can remove unnecessary parts at build time, but this is not
always guaranteed.

What about the `Icon` prefix? The `Icon` prefix helps avoid naming collisions
with other components.

## CHANGELOG

[/kit/CHANGELOG.md](/kit/CHANGELOG.md).
