# `next-build-id-env`

A Next.js configuration enhancer to effortlessly inject your build ID into your environment variables.

## Installation

```bash
npm install next-build-id-env
# or
yarn add next-build-id-env
```

## Usage


```js
// next.config.js

const withBuildId = require('next-build-id-env')({
  name: 'NEXT_PUBLIC_BUILD_ID', // optional (default: 'NEXT_PUBLIC_BUILD_ID')
});

const nextConfig = {};

module.exports = withBuildId(nextConfig);
```

## Options

| Option | Type   | Default               | Description                                        |
|--------|--------|-----------------------|----------------------------------------------------|
| name   | string | `'NEXT_PUBLIC_BUILD_ID'` | The name of the environment variable to hold the build ID. |



## License
MIT
