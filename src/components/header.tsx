import { LogIn, Search } from 'lucide-react'
import Link from 'next/link'
import { CartButton } from './cartbutton'
import { ModeToggle } from './themetoggle'
import { Yarovision } from './yarovision'

export function Header() {
	return (
		<header className="flex items-center justify-between gap-2 fixed top-4 left-2 xl:left-40 right-2 xl:right-40 bg-transparent md:rounded-2xl backdrop-blur z-50 md:px-4 py-[2px] h-8">
			<Link href="/" className='flex gap-1 items-center justify-center md:min-w-[80px] '>
				<Yarovision />
				<h1 className='font-bold'>YV</h1>
			</Link>
			<nav className='flex rounded-2xl flex-1 justify-between relative z-30'>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-4 text-gray-400' />
				<input className='rounded-2xl outline-none w-full bg-foreground text-background pl-11' />


			</nav>
			<nav className='flex items-center justify-end gap-2 text-4'>
				<ModeToggle />
				{/* <Link href="/" className='block'>
					<CircleUserIcon />
				</Link> */}
				<Link href="/" className='flex'>
					<LogIn />
				</Link>
				<CartButton />
			</nav>

		</header>
	)
}