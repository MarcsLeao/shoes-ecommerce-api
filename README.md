# Shoes Ecommerce API

![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

API for the Shoes Ecommerce Next.js Website, developed with Fastify, TypeScript, and Prisma.

## How to use

1. Clone the repository:

```bash
git clone https://github.com/MarcsLeao/candy-website-api.git
```

2. Run the following command:

```bash
npm install
```

3. Set up an PostgreSQL server and copy the database connection URL.

4. Create a .env file in the root directory.

5. Add the following variable to the .env file:

```bash
DATABASE_URL="your_database_connection_url"
```

7. Run the Prisma migrations:

```bash
npx prisma migrate dev
```

7. Start the development server:
```bash
npm run dev
```

8. The API will be available at: http://localhost:3333

## API Endpoints
The API provides the following endpoints:

```markdown

GET /api/product - Retrieve a list of all products.

GET /api/product/:name - Find a specific product in the database.

POST /api/category/create - Create a new product category.

POST /api/product/create - Create a new product.


```

## Database
The project utilizes PostgreSQL as the database management system, leveraging Prisma as an ORM (Object-Relational Mapping) tool to interact with the database.
