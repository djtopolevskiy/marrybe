'use client'
import { motion } from 'motion/react'

export function TitleH1({ children }: { children: React.ReactNode }) {
	return (
		<motion.h1
			initial={{ scale: 0.7 }}
			whileInView={{ scale: 1, transition: { duration: 2 } }}
			className='absolute top-1/3 text-2xl md:text-4xl l:text-6xl xl:text-8xl text-center font-bold py-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x z-10'
		>
			{children}
		</motion.h1>
	)
}
