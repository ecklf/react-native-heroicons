[![npm version](https://img.shields.io/npm/v/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)
[![npm downloads](https://img.shields.io/npm/dm/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)

# React Native Heroicons

The awesome icon pack Heroicons designed by [Steve Schoger](https://twitter.com/steveschoger) and published by the makers of [Tailwind CSS](https://tailwindcss.com/), as react-native components. 

A full directory of all available icons can be found here: 

https://heroicons.com/


## Installation

**react-native-heroicons requires react-native-svg v9 or higher**

### yarn
```sh
yarn add react-native-heroicons react-native-svg
```

### NPM

```sh
npm install react-native-heroicons react-native-svg --save
```

## Usage

react-native-heroicons can be used simply by importing the icon you want:

```tsx
import React from "react";
import { Sparkles } from "react-native-heroicons";

const App = () => {
  return <Sparkles />;
};

export default App;
```

or by including the entire icon pack

```tsx
import React from "react";
import * as Icons from "react-native-heroicons";

const App = () => {
  return <Icons.Sparkles />;
};

export default App;
```

## Customization

Icons can be sized - based on height

Default size: 24

```tsx
<Sparkles size={42} />
```

## Outlined icons
Available with the `Outline` suffix

```tsx
<SparklesOutline />
```
