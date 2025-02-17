import { Facebook, GitlabIcon as GitHub, Instagram, Twitter } from "lucide-react"
import Link from 'next/link'
import { Yarovision } from './yarovision'

const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-background to-foreground">
			<div className="flex flex-col item-center justify-between w-full max-w-5xl mx-auto px-4">
				<div className="flex items-center justify-between pt-2 gap-8">
					<Link href="/" className='flex gap-1 items-center justify-center md:min-w-[80px] '>
						<Yarovision />
						<h1 className='font-bold'>YV</h1>
					</Link>
					<div className='hidden md:flex'>
						<p className="text-sm">123 Main St, City, Country</p>
						<p className="text-sm">Phone: (123) 456-7890</p>
						<p className="text-sm">Email: info@example.com</p>
					</div>
					<div>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-900 transition-colors"
							>
								<Facebook size={16} />
								<span className="sr-only">Facebook</span>
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-900 transition-colors"
							>
								<Twitter size={16} />
								<span className="sr-only">Twitter</span>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-900 transition-colors"
							>
								<Instagram size={16} />
								<span className="sr-only">Instagram</span>
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-900 transition-colors"
							>
								<GitHub size={16} />
								<span className="sr-only">GitHub</span>
							</a>
						</div>
					</div>
				</div>
				<div className="h-px my-2 w-full bg-gradient-to-r from-foreground via-background to-background" />
				<div className="pb-2 text-center">
					<p className="text-sm">&copy; {new Date().getFullYear()} YAROVISION. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

