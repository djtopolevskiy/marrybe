import { cn } from '@/lib/utils'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { CartButton } from './cartbutton'
import { SearchInput } from './search-input'
import { ModeToggle } from './themetoggle'
import { Yarovision } from './yarovision'

interface HeaderProps {
	className?: string
}

export function Header({ className }: HeaderProps) {
	return (
		<header
			className={cn(
				'flex items-center justify-between fixed gap-2 top-4 left-2 xl:left-40 right-2 xl:right-40 bg-white/50 rounded-2xl z-20 px-2 py-[2px] h-8',
				className
			)}
		>
			<Link
				href='/'
				className='flex gap-1 items-center justify-center md:min-w-[80px] '
			>
				<Yarovision />
				<h1 className='font-bold'>YV</h1>
			</Link>

			<div className='mx-5 flex-1'>
				<SearchInput />
			</div>

			<nav className='flex items-center justify-end gap-2 text-4'>
				<ModeToggle />
				{/* <Link href="/" className='block'>
					<CircleUserIcon />
				</Link> */}
				<Link href='/' className='flex'>
					<LogIn />
				</Link>
				<CartButton />
			</nav>
		</header>
	)
}
