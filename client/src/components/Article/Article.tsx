interface Article {
	header?: string;
	content: string[] | string;
}
export default function Article({
	header,
	content,
}: Article) {
	return (
		<div className='p-5 pt-16'>
			<h1 className='text-color-primary font-Jetbrains font-bold md:text-[1.5rem] text-[.7rem]'>
				{header}
			</h1>
			{typeof content === 'object' ? (
				content.map((e) => (
					<p className='text-justify font-Inter md:text-[1rem] text-black  text-[.7rem]'>
						{e}
					</p>
				))
			) : (
				<p className='text-justify font-Inter  md:text-[1rem] text-black  text-[.7rem]'>
					{content}
				</p>
			)}
		</div>
	);
}
