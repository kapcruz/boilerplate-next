// eslint-disable-next-line @typescript-eslint/no-var-requires
// import * as withPWA from 'next-pwa';
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})