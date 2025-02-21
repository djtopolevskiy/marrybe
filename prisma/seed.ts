import { Prisma } from '@prisma/client'
import { hashSync } from "bcrypt"
import { categories, ingredients, products } from './constants'
import { prisma } from './prisma-client'

const randomNumber = (min: number, max: number) =>{
	return Math.floor(Math.random() * (max - min)*10 + min*10)
}

const generateProductItem = ({productId, size}:{productId: number, size: number})=>{
	return {
		productId,
	  price: randomNumber(10, 30),
    size
  } as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({
		data:[
			{
			fullName: "User",
			email: "user@example.com",
			password: hashSync("12345678", 10),
			verified: new Date(),
			role: "USER"
			},
			{
			fullName: "Admin",
			email: "admin@example.com",
			password: hashSync("12345678", 10),
			verified: new Date(),
			role: "ADMIN"
			},
		]
	})

	await prisma.category.createMany({
		data: categories
	})

	await prisma.ingredient.createMany({
		data: ingredients
	})

	await prisma.product.createMany({
		data: products
	})
}

const appleFresh = await prisma.product.create({
	data:{
		name: "apple fresh",
		categoryId: 1,
		imageUrl: "/menu/freshapple.png",
		ingredients:{
			connect: [{ id: 1 }]
		}
	}
})

const carrotFresh = await prisma.product.create({
	data:{
		name: "carrot fresh",
		categoryId: 1,
		imageUrl: "/menu/freshcarrot.jpeg",
		ingredients:{
			connect: [{ id: 3 }]
		}
	}
})

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE ;`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE ;`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE ;`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE ;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
				console.log(e)
	}
}

main().then(async () => {
	await prisma.$disconnect()}).catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})


