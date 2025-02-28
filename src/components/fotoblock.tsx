'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

export function Fotoblock() {
	const fotoArray = Array(5).fill('') as [
		'/mainboard/mainboard_1.png',
		'mainboard/mainboard_2.png',
		'mainboard/mainboard_3.png',
		'mainboard/mainboard_4.png',
		'mainboard/mainboard_5.png'
	]
	return (
		<section className='flex-grid columns-1 md:columns-2 xl:columns-3 w-[95%] h-full my-4'>
			{fotoArray.map((image, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 0.7 }}
					whileInView={{ opacity: 1, scale: 1, transition: { duration: 3 } }}
				>
					<Image
						key={index}
						src={`/mainboard/mainboard_${index + 1}.png`}
						alt={image}
						className='rounded-2xl mb-4 border-[3px] border-foreground w-full h-full object-cover object-center'
						priority={false}
						width={1000}
						height={1000}
					/>
				</motion.div>
			))}
		</section>
	)
}
