import Pino from 'pino'
import * as Env from '@modules/shared/env'

export default Pino({
  level: Env.logLevel,
  name: Env.name,
  serializers: Pino.stdSerializers,
}) as Pino.Logger
