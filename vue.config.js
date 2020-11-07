module.exports = {
  devServer: {
    proxy: {
      '/dev-api': {
        target: 'http://localhost:20004',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  outputDir: 'dist',
};
