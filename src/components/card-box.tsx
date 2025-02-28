import { Card, CardContent } from '@/components/ui/card'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { prisma } from '../../prisma/prisma-client'
import ThreeDCardItem from './3d-card-item'
import { TitleH2 } from './title-motion/title-h2'

export async function CarouselCard() {
	const productItemPrice = await prisma.product.findMany({
		include: {
			items: true,
			ingredients: true,
		},
	})

	return (
		<section className='flex flex-col w-full h-full px-2 items-center justify-center mb-4 bg-transparent '>
			<TitleH2>Most popular products</TitleH2>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='flex w-full mx-2 h-full'
			>
				<CarouselContent className='h-full flex py-4'>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full py-2 px-auto'
						>
							<div className='p-1'>
								<Card className='border-none bg-transparent shadow-none'>
									<CardContent className='flex aspect-square items-center justify-center p-6 bg-transparent gap-2'>
										<ThreeDCardItem
											title={productItemPrice[index].name}
											description={productItemPrice[index].ingredients
												.map(ing => ing.name)
												.join(', ')}
											imageUrl={productItemPrice[index].imageUrl}
											productId={productItemPrice[index].id}
										/>
										{/* {productItemPrice.map((__, index) => (
											<ThreeDCardItem
												title={productItemPrice[index].name}
												description={productItemPrice[index].ingredients
													.map(ing => ing.name)
													.join(', ')}
												imageUrl={productItemPrice[index].imageUrl}
												productId={productItemPrice[index].id}
											/>
										))} */}
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}
