const env = process.env.NODE_ENV || 'dev'

const globalConfig = {
  development: {
    api: 'http://localhost:8080',
    dcmPath: 'http://localhost:8080/public/dcm',
  },
  stage: {
    api: 'https://breastwecan.app',
    dcmPath: 'https://breastwecan.app/public/dcm',
  },
  production: {
    api: 'https://breastwecan.app',
    dcmPath: 'https://breastwecan.app/public/dcm',
  },
}
export default globalConfig[env]