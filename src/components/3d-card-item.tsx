"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Image from "next/image"
import Link from "next/link"

export default function ThreeDCardItem() {
	return (
		<CardContainer className="inter-var mb-8">
			<CardBody className="bg-gradient-to-r from-background to-foreground relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border w-auto sm:w-[15rem] h-auto rounded-xl p-4 border  ">
				<CardItem translateZ="50" className="text-md font-bold ">
					Make things float in air
				</CardItem>
				<CardItem as="p" translateZ="60" className=" text-sm max-w-sm mt-2 ">
					Hover over this card to unleash the power of CSS perspective
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src="/shopping-cart.avif"
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="flex justify-between items-center mt-4">
					<CardItem
						translateZ={20}
						as={Link}
						href="https://twitter.com/mannupaaji"
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						Sign up
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	)
}

