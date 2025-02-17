import { CarouselMain } from './carousel-main'
export function BodyMain() {
	return (
		<div className="flex flex-col items-center justify-center px-4 w-full z-10 mt-[4rem]">
			<h1 className="text-4xl text-center font-bold pt-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">Твоє улюблене кафе!</h1>
			<CarouselMain />

		</div>
	)
}                                                                                    