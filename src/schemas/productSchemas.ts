import z from "zod"

export const categoryCreateSchema = z.object({
    name: z.string().max(100)
})

export const productCreateSchema = z.object({
    name: z.string().max(100),
    description: z.string().max(254),
    price: z.number(),
    stock: z.number(),
    imagesUrl: z.array(z.string()),
    sizes: z.array(z.object({size: z.number(), stock: z.number()})),
    categoryId: z.string(),
})

export const productFindByNameSchema = z.object({
    name: z.string().max(100)
})