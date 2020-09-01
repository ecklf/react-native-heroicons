## React Native Heroicons

[![npm version](https://img.shields.io/npm/v/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)
[![npm downloads](https://img.shields.io/npm/dm/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)

### Installation

**Requires react-native-svg v9 or higher**

```sh
yarn add react-native-heroicons react-native-svg
```

### Usage

```javascript
import React from "react";
import { Sparkles } from "react-native-heroicons";

const App = () => {
  return <Sparkles />;
};

export default App;
```

Icons can be sized - based on height (default: 24)

```javascript
<Sparkles size={42} />
```

You can also include the whole icon pack:

```javascript
import React from "react";
import * as Icons from "react-native-heroicons";

const App = () => {
  return <Icons.Sparkles />;
};

export default App;
```

### Available Icons

https://heroicons.com/
