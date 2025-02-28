'use client'

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import { ProductWithRelations } from '../../@types/prisma'

interface Props {
	product: ProductWithRelations
}

export default function ThreeDCardProduct<T extends Props>(props: T) {
	return (
		<CardContainer className='inter-var mb-8 max-h-full'>
			<CardBody className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-background to-foreground relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border w-auto sm:w-[30rem] h-full rounded-xl p-4 border'>
				<CardItem
					translateZ='100'
					className='w-full px-4 md:px-0 md:w-1/2 mt-4'
				>
					<Image
						src={props.product.imageUrl}
						height='1000'
						width='1000'
						className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
						alt={props.product.name}
					/>
				</CardItem>
				<div className='flex flex-col items-left justify-start gap-4 h-full pt-4 md:pt-0 px-6'>
					<CardItem translateZ='50' className='text-md font-bold '>
						{props.product.name}
					</CardItem>
					<CardItem as='p' translateZ='60' className=' text-sm max-w-sm mt-2 '>
						{props.product.ingredients.map(ingredient => (
							<span key={ingredient.id}>{ingredient.name} </span>
						))}
					</CardItem>

					<div className='flex justify-center items-center mt-4'>
						<CardItem
							translateZ={20}
							as={Link}
							href={'/'}
							className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
						>
							Order
						</CardItem>
					</div>
				</div>
			</CardBody>
		</CardContainer>
	)
}
