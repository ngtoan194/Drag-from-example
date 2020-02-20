const PROXY_CONFIG = [
  {
      context: [
        '/api',
      ],
      target: "http://kongproxy-egp-test.apps.egp.local:80",
      secure: false,
      logLevel: "debug",
      changeOrigin: true
  }
  /*
  ,
  {
    context: [
      '/api',
    ],
    target: "http://localhost:5000",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }
  */
]
module.exports = PROXY_CONFIG;
