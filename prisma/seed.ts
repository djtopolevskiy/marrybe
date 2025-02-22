import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'
import { prisma } from './prisma-client'

export type ProductItemProps = {
	id?: number
	price: number
	size?: number | null
	productId?: number | null
	createdAt?: Date | string
	updatedAt?: Date | string
	CartItem?: unknown
}

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10)
}

const generateProductItem = ({
	productId,
	size,
}: {
	productId: number
	size: 500 | 700
}) => {
	return {
		productId,
		price: randomNumber(10, 30),
		size,
	} as ProductItemProps
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User',
				email: 'user@example.com',
				password: hashSync('12345678', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin',
				email: 'admin@example.com',
				password: hashSync('12345678', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.ingredient.createMany({
		data: ingredients,
	})

	await prisma.product.createMany({
		data: products,
	})

	const appleFresh = await prisma.product.create({
		data: {
			name: 'apple fresh',
			categoryId: 1,
			imageUrl: '/menu/freshapple.png',
			ingredients: {
				connect: [{ id: 1 }],
			},
		},
	})

	const carrotFresh = await prisma.product.create({
		data: {
			name: 'carrot fresh',
			categoryId: 1,
			imageUrl: '/menu/freshcarrot.jpeg',
			ingredients: {
				connect: [{ id: 3 }],
			},
		},
	})

	const orangeFresh = await prisma.product.create({
		data: {
			name: 'orange fresh',
			categoryId: 1,
			imageUrl: '/menu/freshorange.jpeg',
			ingredients: {
				connect: [{ id: 5 }],
			},
		},
	})

	const grapefruitFresh = await prisma.product.create({
		data: {
			name: 'grapefruit fresh',
			categoryId: 1,
			imageUrl: '/menu/freshgrapefruit.jpeg',
			ingredients: {
				connect: [{ id: 2 }],
			},
		},
	})

	const appleCarrotMix = await prisma.product.create({
		data: {
			name: 'apple carrot mix',
			categoryId: 1,
			imageUrl: '/menu/mixapplecarrot.png',
			ingredients: {
				connect: [{ id: 1 }, { id: 3 }],
			},
		},
	})

	const appleKiwiMix = await prisma.product.create({
		data: {
			name: 'apple kiwi mix',
			categoryId: 1,
			imageUrl: '/menu/mixapplekiwi.png',
			ingredients: {
				connect: [{ id: 1 }, { id: 3 }],
			},
		},
	})

	await prisma.productItem.createMany({
		data: [
			generateProductItem({ productId: appleFresh.id, size: 500 }),
			generateProductItem({ productId: appleFresh.id, size: 700 }),
			generateProductItem({ productId: carrotFresh.id, size: 500 }),
			generateProductItem({ productId: carrotFresh.id, size: 700 }),
			generateProductItem({ productId: orangeFresh.id, size: 500 }),
			generateProductItem({ productId: orangeFresh.id, size: 700 }),
			generateProductItem({ productId: grapefruitFresh.id, size: 500 }),
			generateProductItem({ productId: grapefruitFresh.id, size: 700 }),
			generateProductItem({ productId: appleCarrotMix.id, size: 500 }),
			generateProductItem({ productId: appleCarrotMix.id, size: 700 }),
			generateProductItem({ productId: appleKiwiMix.id, size: 500 }),
			generateProductItem({ productId: appleKiwiMix.id, size: 700 }),
		],
	})
}

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

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
