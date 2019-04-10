const backend = {
  target: 'http://sports-meeting.test',
  ws: false,
  changeOrigin: true
}

module.exports = {
  devServer: {
    proxy: {
      '/games': backend
    }
  }
}
