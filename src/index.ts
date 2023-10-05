import { NextConfig } from 'next';
import { DefinePlugin } from 'webpack';
import { WebpackConfigContext } from 'next/dist/server/config-shared';

interface Options {
  name?: string;
}

const withBuildId = ((options?: Options) => (nextConfig: NextConfig) => Object.assign({}, nextConfig, {
  /* eslint-disable-next-line */
  webpack: (config: any, context: WebpackConfigContext) => {
    const envName = options?.name || 'NEXT_PUBLIC_BUILD_ID';
    const defineBuildIdPlugin = new DefinePlugin({
      [`process.env.${envName}`]: JSON.stringify(context.buildId),
    });

    if (!config.plugins) config.plugins = [];
    config.plugins.push(defineBuildIdPlugin);

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, context);
    }
    return config;
  },
}));

export default withBuildId;
