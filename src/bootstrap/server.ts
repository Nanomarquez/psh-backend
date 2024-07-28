import express from 'express'
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../public/swagger.json";
const server = express()

server.use(cors())
server.use(express.json())

server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello PSH API!' })
})

export default server
