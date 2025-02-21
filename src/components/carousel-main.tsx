"use client"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const mainboard: string[] = [
	"mainboard_1.png",
	"mainboard_2.png",
	"mainboard_3.png",
	"mainboard_4.png",
	"mainboard_5.png",
]

export function CarouselMain() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	)

	return (
		<Carousel
			plugins={[plugin.current]}
			className='w-full max-w-2xl'
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{mainboard.map((image, index) => (
					<CarouselItem key={index}>
						<div className='p-1'>
							<Card className='border-none bg-transparent shadow-none'>
								<CardContent className='flex aspect-square items-center justify-center p-6'>
									<Image
										src={`/mainboard/${image}`}
										alt={image}
										className='rounded-2xl mb-4 border-[3px] border-foreground w-full h-full object-cover object-center'
										width={1000}
										height={1000}
									/>
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
