'use client'

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'

export interface ThreeDCardItemProps {
	title: string
	description: string
	imageUrl: string
	productId: number
}

export default function ThreeDCardItem<T extends ThreeDCardItemProps>(
	props: T
) {
	return (
		<CardContainer className='inter-var h-auto my-1'>
			<CardBody className='bg-gradient-to-r from-background to-foreground relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border w-auto sm:w-[15rem] h-auto rounded-xl p-4 border  '>
				<CardItem translateZ='50' className='text-md font-bold '>
					{props.title}
				</CardItem>
				<CardItem as='p' translateZ='60' className=' text-sm max-w-sm mt-2 '>
					{props.description}
				</CardItem>
				<CardItem translateZ='100' className='w-full mt-4'>
					<Link href={`/product/${props.productId}`}>
						<Image
							src={props.imageUrl}
							height='1000'
							width='1000'
							className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
							alt={props.title}
						/>
					</Link>
				</CardItem>
				<div className='flex justify-between items-center mt-4'>
					<CardItem
						translateZ={20}
						as={Link}
						href={`/product/${props.productId}`}
						target='__blank'
						className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
					>
						Want! →
					</CardItem>
					<CardItem
						translateZ={20}
						as={Link}
						href={`/product/${props.productId}`}
						className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
					>
						Order
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	)
}
