export default function BackgroundGrid() {
	return (
		<div className="pointer-events-none absolute inset-0 z-0 select-none ">
			{/* Vertical lines */}
			<div className="absolute inset-0 flex justify-between">
				{[...Array(5)].map((_, i) => (
					<div key={i} className="h-full w-px bg-gradient-to-b from-foreground via-background to-background" />
				))}
			</ div>

			{/* Horizontal lines */}
			<div className="absolute inset-0 flex flex-col justify-between">
				{[...Array(10)].map((_, i) => (
					<div key={i} className="h-px w-full bg-gradient-to-r from-foreground via-background to-background" />
				))}
			</div>
		</div>
	)
}

