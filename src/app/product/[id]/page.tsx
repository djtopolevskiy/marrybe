import ThreeDCardProduct from '@/components/3d-card-product'
import { Container } from '@/components/container'
import { notFound } from 'next/navigation'
import { prisma } from '../../../../prisma/prisma-client'

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
			items: true,
		},
	})

	if (!product) {
		return notFound()
	}
	return (
		<Container className='flex flex-col items-center justify-center my-auto h-full flex-1'>
			<ThreeDCardProduct product={product} />
		</Container>
	)
}
