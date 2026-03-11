import fastify from "fastify";
import { productRouter } from "./routes/productRouter";
import fastifyCors from "@fastify/cors";

const port = 3333
const app = fastify()

app.register(fastifyCors)
app.register(productRouter)

app.listen({host: '0.0.0.0', port}, (err) => {
    if(err)
        return console.log(err)
    
    return console.log(`Server running on port:${port}`)
})