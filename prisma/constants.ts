export const categories = [
	{ name: 'freshdrinks' },
	{ name: 'cakes' },
	{ name: 'cafes' },
	{ name: 'desserts' },
]

export const ingredients = [
	{
		name: 'apple',
		price: 10,
		imageUrl: '/menu/fruitapple.jpeg',
	},
	{
		name: 'grapefruit',
		price: 15,
		imageUrl: '/menu/fruitgrape.jpeg',
	},
	{
		name: 'carrot',
		price: 10,
		imageUrl: '/menu/fruitcarrot.jpeg',
	},
	{
		name: 'pineapple',
		price: 15,
		imageUrl: '/menu/fruitpineapple.jpeg',
	},
	{
		name: 'orange',
		price: 15,
		imageUrl: '/menu/fruitorange.jpeg',
	},
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
	{
		name: 'cakebluebarry',
		categoryId: 2,
		imageUrl: '/menu/cakebluebarry.png',
	},
	{
		name: 'cakecheese',
		categoryId: 2,
		imageUrl: '/menu/cakecheese.png',
	},
	{
		name: 'cakechoco',
		categoryId: 2,
		imageUrl: '/menu/cakechoco.png',
	},
	{
		name: 'cakechocobanan',
		categoryId: 2,
		imageUrl: '/menu/cakechocobanan.png',
	},
	{
		name: 'cakechocomilk',
		categoryId: 2,
		imageUrl: '/menu/cakechocomilk.png',
	},
	{
		name: 'cakefruite',
		categoryId: 2,
		imageUrl: '/menu/cakefruite.png',
	},
	{
		name: 'cakepich',
		categoryId: 2,
		imageUrl: '/menu/cakepich.png',
	},
	{
		name: 'cakepotato',
		categoryId: 2,
		imageUrl: '/menu/cakepotato.png',
	},
	{
		name: 'cakepudra',
		categoryId: 2,
		imageUrl: '/menu/cakepudra.png',
	},
	{
		name: 'cakeraspberry',
		categoryId: 2,
		imageUrl: '/menu/cakeraspberry.png',
	},
	{
		name: 'cakewarmmilk',
		categoryId: 2,
		imageUrl: '/menu/cakewarmmilk.png',
	},
	{
		name: 'dessertcandy',
		categoryId: 2,
		imageUrl: '/menu/dessertcandy.png',
	},
	{
		name: 'dessertcruasunt',
		categoryId: 2,
		imageUrl: '/menu/dessertcruasunt.png',
	},
	{
		name: 'dessertmussfruite',
		categoryId: 2,
		imageUrl: '/menu/dessertmussfruite.png',
	},
	{
		name: 'dessertmussfruite',
		categoryId: 2,
		imageUrl: '/menu/dessertmussfruite.png',
	},
	{
		name: 'cafecapuchino',
		categoryId: 3,
		imageUrl: '/menu/cafecapuchino.png',
	},
	{
		name: 'cafeespresso',
		categoryId: 3,
		imageUrl: '/menu/cafeespresso.png',
	},
]
