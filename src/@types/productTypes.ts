import z from "zod";
import { categoryCreateSchema, productCreateSchema, productFindByNameSchema } from "../schemas/productSchemas";

export type CreateProductData = z.infer<typeof productCreateSchema>

export type CreateCategoryData = z.infer<typeof categoryCreateSchema>

export type FindProductByName = z.infer<typeof productFindByNameSchema>