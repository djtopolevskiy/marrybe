'use client'
import { Carousel } from '@ark-ui/react/carousel'
import Image from 'next/image'

const images = Array.from(
	{ length: 5 },
	(_, i) => `/carousel/carousel_${i + 1}.jpg`
)

export const Autoplay = () => {
	return (
		<Carousel.Root autoplay loop>
			<Carousel.IndicatorGroup>
				{images.map((_, index) => (
					<Carousel.Indicator key={index} index={index} />
				))}
			</Carousel.IndicatorGroup>
			<Carousel.ItemGroup>
				{images.map((image, index) => (
					<Carousel.Item key={index} index={index}>
						<Image
							src={image}
							alt={`Slide ${index}`}
							className='w-full h-full object-cover object-center'
							priority={false}
							width={1000}
							height={1000}
						/>
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>
		</Carousel.Root>
	)
}
