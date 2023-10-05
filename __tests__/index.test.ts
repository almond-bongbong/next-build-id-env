import nextBuildIdConfig from '../src';
import { NextConfig } from 'next';

type NextConfigWithBuildId = NextConfig & { webpack: (config: unknown, context: any) => any };

describe('withBuildId', () => {
  it('should withBuildId return a webpack function', () => {
    const nextConfig: NextConfig = {
      reactStrictMode: true,
    };
    const withBuildId = nextBuildIdConfig();
    const result: NextConfigWithBuildId = withBuildId(nextConfig);

    expect(result.reactStrictMode).toBe(true);
    expect(typeof result.webpack).toBe('function');

    const config = result.webpack({}, { buildId: 'test' });
    expect(config.plugins).toHaveLength(1);
    expect(config.plugins[0].definitions).toEqual({ 'process.env.NEXT_PUBLIC_BUILD_ID': '"test"' });
  });

  it('should withBuildId return a webpack function with custom name', () => {
    const nextConfig: NextConfig = {
      reactStrictMode: true,
    };
    const withBuildId = nextBuildIdConfig({ name: 'TEST_BUILD_ID' });
    const result: NextConfigWithBuildId = withBuildId(nextConfig);

    expect(result.reactStrictMode).toBe(true);
    expect(typeof result.webpack).toBe('function');

    const config = result.webpack({}, { buildId: 'test' });
    expect(config.plugins).toHaveLength(1);
    expect(config.plugins[0].definitions).toEqual({ 'process.env.TEST_BUILD_ID': '"test"' });
  });

  it('should withBuildId return a webpack function with previous plugin', () => {
    const nextConfig: NextConfig = {
      reactStrictMode: true,
      webpack: (config) => {
        config.plugins.push({
          definitions: {
            'process.env.TEST': '"test"',
          },
        });
        return config;
      },
    };
    const withBuildId = nextBuildIdConfig();
    const result: NextConfigWithBuildId = withBuildId(nextConfig);

    expect(result.reactStrictMode).toBe(true);
    expect(typeof result.webpack).toBe('function');

    const config = result.webpack({}, { buildId: 'test' });
    expect(config.plugins).toHaveLength(2);
    expect(config.plugins[0].definitions).toEqual({ 'process.env.NEXT_PUBLIC_BUILD_ID': '"test"' });
    expect(config.plugins[1].definitions).toEqual({ 'process.env.TEST': '"test"' });
  });
});

export {};
