# `next-build-id-env`

![NPM](https://img.shields.io/npm/v/next-build-id-env.svg)
![License](https://img.shields.io/npm/l/next-build-id-env)
![Size](https://img.shields.io/bundlephobia/min/next-build-id-env)

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

```js
// pages/index.js

export default function Home() {
  const buildId = process.env.NEXT_PUBLIC_BUILD_ID;

  return (
    <div>
      <h1>My Next.js App</h1>
      <p>Build ID: {buildId}</p>
    </div>
  );
}
```

## Options

| Option | Type   | Default               | Description                                        |
|--------|--------|-----------------------|----------------------------------------------------|
| name   | string | `'NEXT_PUBLIC_BUILD_ID'` | The name of the environment variable to hold the build ID. |



## License
MIT
