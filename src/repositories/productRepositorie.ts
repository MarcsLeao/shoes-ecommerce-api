import { prisma } from "../lib/prisma"
import { CreateProductData } from "../@types/productTypes";

export class ProductRepository {

    async findProducts() {
        try {
            const products = await prisma.product.findMany({
                include: { images: true, sizes: true, category: true }
            })

            return products
        } catch (error) {
            console.log(error)
            throw new Error("Database failed to find products.")
        }
    }

    async FindByName(name: string) {
        try {
            const product = await prisma.product.findFirst({ 
                where: { name }, 
                include: { images: true, sizes: true, category: true }
            })

            return product
        } catch (error) {
            console.log(error)
            throw new Error("Database failed to find product by name.")
        }
    }
    
    async findCategory() {
        try {
            const categories = await prisma.category.findMany()

            return categories
        } catch (error) {
            console.log(error)
            throw new Error("Database failed to find categories.")
        }
    }
    
    async createCategory(name: string) {
        try {
            const insertCategory = await prisma.category.create({ data: { name } })

            return insertCategory
        } catch (error) {
            console.log(error)
            throw new Error("Database failed to insert category.")
        }
    }
    
    async createProduct(data: CreateProductData) {
        try {
            const insertProduct = await prisma.product.create({
                data: {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    stock: data.stock,
                    categoryId: data.categoryId
                }
            })

            const insertProductImageUrl = await prisma.image.createMany({
                data: data.imagesUrl.map((url) => ({ url, productId: insertProduct.id }))
            })

            const insertSizes = await prisma.productSize.createMany({
                data: data.sizes.map((sizes) => ({ size: sizes.size, productId: insertProduct.id, stock: sizes.stock}))
            })
            
            return { ...insertSizes, ...insertProductImageUrl, ...insertProduct }
        } catch (error) {
            console.log(error)
            throw new Error("Database failed to insert product.")
        }
    }
}