import {server} from "./config/server"

server.listen({ port: 3000, host: "0.0.0.0"}, (err, address) => {
  if(err){
    console.log(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})