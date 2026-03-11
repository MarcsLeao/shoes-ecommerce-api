import { FastifyInstance } from "fastify";
import { ProductController } from "../controllers/productController";

export function productRouter(app: FastifyInstance) {
    const Controller = new ProductController()

    app.get('/api/product', Controller.findAll)
    app.post('/api/category/create', Controller.createCategory)
    app.post('/api/product/create', Controller.createProduct)
    app.get('/api/product/:name', Controller.findProductByName)
}