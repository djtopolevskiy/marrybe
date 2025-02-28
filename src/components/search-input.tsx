'use client'

import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDebounce } from 'react-use'
import { Api } from '../../services/api-client'
interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [focused, setFocused] = React.useState(false)
	const [products, setProducts] = React.useState<Product[]>([])

	useDebounce(
		async () => {
			try {
				const response = await Api.product.search(searchQuery)
				setProducts(response)
			} catch (error) {
				console.log(error)
			}
		},
		250,
		[searchQuery]
	)

	const onClickItem = () => {
		setSearchQuery('')
		setProducts([])
	}

	return (
		<>
			{focused && (
				<div
					className={cn(
						'fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-full bg-black/50 ',
						className
					)}
				></div>
			)}
			<nav
				className={cn(
					'flex rounded-2xl flex-1 justify-between relative w-full z-30',
					className
				)}
			>
				<Search className='absolute top-1/2 translate-y-[-50%] left-2 h-4 text-gray-400' />
				<input
					className='rounded-2xl outline-none w-full bg-foreground text-background pl-9'
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-foreground rounded-xl py-1 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-7'
						)}
					>
						{products.map(product => (
							<Link
								onClick={onClickItem}
								key={product.id}
								href={`/product/${product.id}`}
								className='flex items-center gap-3 w-full px-3 py-1 hover:bg-background text-background hover:text-foreground hover:rounded-xl'
							>
								<Image
									className='rounded-sm'
									src={product.imageUrl}
									width={16}
									height={16}
									// style={{ width: 'auto', height: 'auto' }}
									alt={product.name}
								/>

								<span>{product.name}</span>
							</Link>
						))}
					</div>
				)}
			</nav>
		</>
	)
}
