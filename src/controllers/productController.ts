import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { categoryCreateSchema, productCreateSchema, productFindByNameSchema } from "../schemas/productSchemas";
import { ProductRepository } from "../repositories/productRepositorie";

export class ProductController {
    async findAll(request: FastifyRequest, reply: FastifyReply) {
        try {
            const Product = new ProductRepository()
            const products = await Product.findProducts()

            return reply.send(products)
        } catch (error) {
            console.log(error)
            return reply.code(500).send({message: 'Internal Server Error.'})
        }
    }

    async findProductByName(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { name } = request.params as { name: string }
            const Product = new ProductRepository()

            const findProductByName = await Product.FindByName(name)

            return reply.send(findProductByName)
        } catch (error) {
            console.log(error)
            return reply.code(500).send({message: 'Internal Server Error.'})
        }
    }

    async createCategory(request:FastifyRequest, reply: FastifyReply) {
        try {
            const Product = new ProductRepository()
            const {data, success} = categoryCreateSchema.safeParse(request.body)

            if(!success)
                reply.code(422).send({message: 'Invalid request body.'})

            await Product.createCategory(data?.name!)
            
            return reply.code(201).send('New category created.')
        } catch (error) {
            console.log(error)
            return reply.code(500).send({message: 'Internal Server Error.'})
        }
    }

    async createProduct(request:FastifyRequest, reply: FastifyReply) {
        try {
            const Product = new ProductRepository()
            const {data, success, error} = productCreateSchema.safeParse(request.body)

            if(!success) {
                console.log(error)
                return reply.code(422).send({message: 'Invalid request body.'})
            }

            await Product.createProduct(data)

            return reply.code(201).send('New product created.')
        } catch (error) {
            console.log(error)
            return reply.code(500).send({message: 'Internal Server Error.'})
        }
    }
}