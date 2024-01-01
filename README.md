[![npm version](https://img.shields.io/npm/v/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)
[![npm downloads](https://img.shields.io/npm/dm/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)

# React Native Heroicons

Heroicons are designed by [Steve Schoger](https://twitter.com/steveschoger) and published by [Tailwind Labs](https://github.com/tailwindlabs/heroicons).

A full directory of all available icons can be found here:

https://heroicons.com/

## Installation

**react-native-heroicons requires react-native-svg v9 or higher**

### yarn

```sh
yarn add react-native-heroicons react-native-svg
```

### npm

```sh
npm i react-native-heroicons react-native-svg
```

## Usage

Specific icons:

```tsx
import React from "react";
import { View } from "react-native";
import { SparklesIcon as SparklesIconMicro } from "react-native-heroicons/micro";
// Old solid style from heroicons v1
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

const App = () => {
  return (
    <View>
      <SparklesIconMicro />
      <SparklesIconMini />
      <SparklesIcon />
      <SparklesIconOutline />
    </View>
  );
};

export default App;
```

Entire icon pack:

```tsx
import React from "react";
import * as Icons from "react-native-heroicons/solid";

const App = () => {
  return <Icons.SparklesIcon />;
};

export default App;
```

## Customization

Icons can be adjusted with the `size` prop.
Defaults are `16` for `micro`, `20` for `mini` and `24` for `solid`/`outline`: 24):

```tsx
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
// ...
<SparklesIconOutline color="red" fill="black" size={42} />;
```
