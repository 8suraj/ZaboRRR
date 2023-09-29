enum cardType {
	main,
	sub,
}
interface Card {
	image: string;
	header: string;
	content?: string[] | string;
	cardType?: cardType;
}
interface CardRow {
	header: string;
	cards: Card[];
}
export function Card({
	image,
	header,
	content,
	cardType = 0,
}: Card) {
	return (
		<div
			className={`${
				cardType ? 'bg-color-tertiary' : 'bg-primary-light'
			}  rounded-lg w-fit md:h-[15rem] h-[12rem] flex flex-col   gap-8 justify-center items-center shadow-xl `}>
			<div className='w-full flex justify-center 	md:px-8 px-4'>
				<img src={image} alt='' />
			</div>
			<div className='w-full flex justify-center border-t-2 border-dashed	flex-col items-center	 '>
				<h1 className='font-bold text-black'>{header}</h1>
				{typeof content === 'object' ? (
					content.map((e) => <p>{e}</p>)
				) : (
					<p
						className={`${
							cardType ? 'text-color-primary' : ''
						}`}>
						{content}
					</p>
				)}
			</div>
		</div>
	);
}

export function CardRow({ header, cards }: CardRow) {
	return (
		<div className='flex flex-col items-center py-16 '>
			<h1 className='font-Jetbrains font-bold text-black text-base md:text-xl'>
				{header}
			</h1>
			<div className='w-full md:w-10/12 lg:w-8/12  m-auto grid sm:grid-cols-3 md:grid-cols-4 gap-4 grid-cols-2 justify-items-center	'>
				{cards.map((e) => (
					<Card
						image={e.image}
						header={e.header}
						content={e.content}
						cardType={1}
					/>
				))}
			</div>
		</div>
	);
}
