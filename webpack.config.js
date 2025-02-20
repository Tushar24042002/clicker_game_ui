module.exports = {
    // other webpack config...
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
      },
    },
  };
  