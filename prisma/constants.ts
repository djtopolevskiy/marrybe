export const categories = [
	{
		name: "freshdrinks",
	},
	{ name: "cakes"},
	{ name: "cafes"},
	{ name: "desserts"},
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
	}
].map((obj, index) =>({id: index + 1, ...obj}))

export const productsFresh = [
	{
		name: "apple fresh",
		category: 1,
		imageUrl: "/menu/freshapple.png",
	},
	{
		name: "carrot fresh",
		category: 1,
		imageUrl: "/menu/freshcarrot.jpeg",
	},
	{
		name: "orange fresh",
		category: 1,
		imageUrl: "/menu/freshorange.jpeg",
	},
	{
		name: "grapefruit fresh",
		category: 1,
		imageUrl: "/menu/freshgrapefruit.jpeg",
	},
	{
		name: "pineapple fresh",
		category: 1,
		imageUrl: "/menu/freshpineapple.jpeg",
	},


	{
		name: "apple carrot mix",
		category: 1,
		imageUrl: "/menu/mixapplecarrot.png",
	},
	{
		name: "apple kiwi mix",
		category: 1,
		imageUrl: "/menu/mixapplekiwi.png",
	},	
]