import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { prisma } from '../../prisma/prisma-client'
import ThreeDCardItem from './3d-card-item'
import { TitleH2 } from './title-motion/title-h2'

export async function CategoriesBlock() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	})

	return (
		<section className='flex flex-col w-full max-w-4xl h-full px-2 items-center justify-center mb-4 bg-transparent relative'>
			<TitleH2>Categories</TitleH2>
			<Tabs defaultValue='account' className='w-full mx-auto '>
				<TabsList className='flex w-full flex-wrap items-center justify-start gap-2'>
					{categories.map(category => (
						<TabsTrigger key={category.id} value={category.name}>
							{category.name}
						</TabsTrigger>
					))}
				</TabsList>
				{categories.map(category => (
					<TabsContent key={category.id} value={category.name}>
						<Card>
							<CardHeader>
								<CardTitle>{category.name}</CardTitle>
								<CardDescription>
									Bon appetit with ours {category.name}
								</CardDescription>
							</CardHeader>
							<CardContent className='flex flex-wrap items-center justify-between w-full gap-2'>
								{category.products.map(product => (
									<div key={product.id} className=''>
										<ThreeDCardItem
											title={product.name}
											description={product.ingredients
												.map(ing => ing.name)
												.join(', ')}
											imageUrl={product.imageUrl}
											productId={product.id}
										/>
									</div>
								))}
							</CardContent>
							<CardFooter>
								<Button>Save changes</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
}
