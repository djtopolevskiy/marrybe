import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThreeDCardItem from "./3d-card-item"

export function CategoriesBlock() {
	return (
		<section className='flex flex-col w-full max-w-4xl h-full px-2 items-center justify-center mb-4 bg-transparent relative'>
			<h2 className='text-4xl text-center font-bold py-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x'>
				Categories
			</h2>
			<Tabs defaultValue='account' className='w-full mx-auto '>
				<TabsList className='flex w-full flex-wrap items-center justify-start gap-2'>
					<TabsTrigger value='category_1'>Category 1</TabsTrigger>
					<TabsTrigger value='category_2'>Category 2</TabsTrigger>
					<TabsTrigger value='category_3'>Category 3</TabsTrigger>
				</TabsList>
				<TabsContent value='category_1'>
					<Card>
						<CardHeader>
							<CardTitle>Category 1</CardTitle>
							<CardDescription>
								Make changes to your account here. Click save when you are done.
							</CardDescription>
						</CardHeader>
						<CardContent className='flex flex-wrap items-center justify-between w-full gap-2'>
							<div className=''>
								<ThreeDCardItem />
							</div>
							<div className=''>
								<ThreeDCardItem />
							</div>
							<div className=''>
								<ThreeDCardItem />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save changes</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value='category_2'>
					<Card>
						<CardHeader>
							<CardTitle>Category 2</CardTitle>
							<CardDescription>
								Change your password here. After saving, you will be logged out.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<div className='space-y-1'>
								<Label htmlFor='current'>Current password</Label>
								<Input id='current' type='password' />
							</div>
							<div className='space-y-1'>
								<Label htmlFor='new'>New password</Label>
								<Input id='new' type='password' />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save password</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value='category_3'>
					<Card>
						<CardHeader>
							<CardTitle>Category 3</CardTitle>
							<CardDescription>
								Change your password here. After saving, you will be logged out.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<div className='space-y-1'>
								<Label htmlFor='current'>Current password</Label>
								<Input id='current' type='password' />
							</div>
							<div className='space-y-1'>
								<Label htmlFor='new'>New password</Label>
								<Input id='new' type='password' />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save password</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</section>
	)
}
