import { config } from 'dotenv'
import { server } from './bootstrap'
import './routes'
import './cron/generateStats';
config()

const { PORT } = process.env

server.listen(PORT, async () => {
  console.log(`Server raised in port: ${PORT}`)
})

export default server
