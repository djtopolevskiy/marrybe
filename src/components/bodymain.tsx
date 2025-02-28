import { Autoplay } from './carousel'
import { TitleH1 } from './title-motion/title-h1'

export function BodyMain() {
	return (
		<div className='overflow-hidden flex flex-col items-center justify-center  w-full h-auto z-10 relative'>
			<TitleH1>Твоє улюблене кафе!</TitleH1>
			<section className='overflow-hidden scroll-smooth pointer-events-none flex w-full h-auto relative top-[-24px]'>
				<Autoplay />
			</section>
		</div>
	)
}
