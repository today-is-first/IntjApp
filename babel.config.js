module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@store': './src/store',
            '@constants': './src/constants',
            '@pages': './src/pages',
            '@svg': './src/assets/svg',
            '@fonts': './src/assets/fonts',
          },
        },
      ],
    ],
  };
};
