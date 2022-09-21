import Env from 'getenv'

export const logLevel = Env.string('LOG_LEVEL', 'trace')
export const name = Env.string('APP_NAME', '__UNKNOWN_APPLICATION__')

export const env = Env.string('ENVIRONMENT', 'dev')

export const envIs = {
  dev: env === 'dev',
  stg: env === 'stg',
  prod: env === 'prod',
  test: env === 'test',
}

export const port = Env.int('PORT', 5000)
