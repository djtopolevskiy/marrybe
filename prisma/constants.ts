export const categories = [
	{ name: "freshdrinks" },
	{ name: "cakes" },
	{ name: "cafes" },
	{ name: "desserts" },
]

export const ingredients = [
	{
		name: "apple",
		price: 10,
		imageUrl: "/menu/fruitapple.jpeg",
	},
	{
		name: "grapefruit",
		price: 15,
		imageUrl: "/menu/fruitgrape.jpeg",
	},
	{
		name: "carrot",
		price: 10,
		imageUrl: "/menu/fruitcarrot.jpeg",
	},
	{
		name: "pineapple",
		price: 15,
		imageUrl: "/menu/fruitpineapple.jpeg",
	},
	{
		name: "orange",
		price: 15,
		imageUrl: "/menu/fruitorange.jpeg",
	},
].map((obj, index) => ({ id: index + 1, ...obj }))


export const products = [
	{
		name: "orange fresh",
		categoryId: 1,
		imageUrl: "/menu/freshorange.jpeg",
	},
	{
		name: "grapefruit fresh",
		categoryId: 1,
		imageUrl: "/menu/freshgrapefruit.jpeg",
	},
	{
		name: "pineapple fresh",
		categoryId: 1,
		imageUrl: "/menu/freshpineapple.jpeg",
	},
	{
		name: "apple carrot mix",
		categoryId: 1,
		imageUrl: "/menu/mixapplecarrot.png",
	},
	{
		name: "apple kiwi mix",
		categoryId: 1,
		imageUrl: "/menu/mixapplekiwi.png",
	},
]
