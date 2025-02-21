import { hashSync } from "bcrypt"
import { categories, ingredients, productsFresh } from './constants'
import { prisma } from './prisma-client'

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
		data: productsFresh
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE ;`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE ;`
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


