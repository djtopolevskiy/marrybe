
import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import ThreeDCardItem from './3d-card-item'

export function CarouselCard() {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full 2xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-sm max-w-sm mx-2"
		>
			<h2 className="text-4xl text-center font-bold pt-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">Most popular products</h2>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
						<div className="p-1">
							<Card className='border-none bg-transparent shadow-none'>
								<CardContent className="flex aspect-square items-center justify-center p-6 bg-transparent">
									<ThreeDCardItem />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
