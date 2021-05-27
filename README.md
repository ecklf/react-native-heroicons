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

### npm

```sh
npm i react-native-heroicons react-native-svg
```

## Usage

Specific icons:

```tsx
import React from "react";
import { View } from "react-native";
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

const App = () => {
  return (
    <View>
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

Icons can be adjusted with the `size` prop (default: 24):

```tsx
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
// ...
<SparklesIconOutline color="red" fill="black" size={42} />;
```
