import HTTP from '@modules/http'
import Log from '@modules/shared/log'
import * as Env from '@modules/shared/env'

const main = async () => {
  Log.trace('Starting')

  HTTP.get('/', (req, res) => {
    res.end('HELLO!')
  }).listen(Env.port, () => {
    Log.debug(`Server Listening at http://localhost:${Env.port}`)
  })
}

main()
