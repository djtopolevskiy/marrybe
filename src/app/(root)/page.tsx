import { BodyMain } from '@/components/bodymain'
import { CarouselCard } from '@/components/card-box'
import { CategoriesBlock } from '@/components/categories-block'
import { Fotoblock } from '@/components/fotoblock'

export default async function Home() {
	return (
		<main className='flex flex-col w-full h-full items-center justify-center bg-gradient-to-r from-primary to-primary-foreground relative'>
			<BodyMain />
			<CarouselCard />
			<CategoriesBlock />
			<Fotoblock />
		</main>
	)
}
