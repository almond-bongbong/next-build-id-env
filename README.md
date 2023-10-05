# `next-build-id-env`

[![npm version](https://badge.fury.io/js/next-build-id-env.svg)](https://badge.fury.io/js/next-build-id-env)
[![Build Status](https://travis-ci.org/andrewscwei/next-build-id-env.svg?branch=main)](https://travis-ci.org/andrewscwei/next-build-id-env)
[![Coverage Status](https://coveralls.io/repos/github/andrewscwei/next-build-id-env/badge.svg?branch=main)](https://coveralls.io/github/andrewscwei/next-build-id-env?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
