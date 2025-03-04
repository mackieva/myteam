const HomeHero = () => {
	return (
		<section className='pt-[112px] lg:pt-[129px] relative'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='200'
				className='hidden lg:block absolute left-[-100px] top-[129px]'
			>
				<g fill='none' fillRule='evenodd'>
					<path fill='#79C8C7' d='M100 200h100V100H100z' />
					<path
						fill='#012F34'
						d='M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z'
					/>
					<path
						fill='#F67E7E'
						d='M196 196v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z'
					/>
				</g>
			</svg>
			<div className='max-w-[683px] mx-auto flex flex-col justify-center items-center gap-6 relative  pb-[256px] lg:pb-[250px] lg:grid lg:max-w-[1110px] lg:grid-cols-[635px_445px] lg:gap-[30px]'>
				<div>
					<h1 className='text-center lg:text-left text-[64px] leading-[56px] max-w-[10ch] lg:text-[100px] lg:leading-[100px]'>
						Find the best <span className='text-lc'>talent</span>
					</h1>
				</div>
				<div className='flex flex-col items-start justify-between h-full'>
					<span className='hidden lg:block h-1 w-[50px] bg-rb' />
					<p className='text-[15px] leading-[28px] text-center max-w-[457px] lg:text-left lg:max-w-auto lg:text-[18px]'>
						Finding the right people and building high performing teams can be
						hard. Most companies aren't tapping into the abundance of global
						talent. We're about to change that.
					</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='358'
					height='100'
					className='absolute bottom-0 right-[50%] transform-[translateX(50%)] lg:right-[0]'
				>
					<g fill='none' fillRule='evenodd'>
						<circle cx='100' cy='100' r='100' fill='#2C6269' />
						<path
							fill='#012F34'
							d='M258 0c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100S202.772 0 258 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z'
						/>
						<path fill='#79C8C7' d='M358 43h-43V0h43z' />
						<path
							fill='#F67E7E'
							d='M233.514 0c55.228 0 100 44.772 100 100s-44.772 100-100 100c-55.229 0-100-44.772-100-100s44.771-100 100-100zm0 67c-18.226 0-33 14.775-33 33s14.774 33 33 33c18.225 0 33-14.775 33-33s-14.775-33-33-33z'
						/>
						<path
							fill='#79C8C7'
							d='M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z'
						/>
					</g>
				</svg>
			</div>
		</section>
	);
};

export default HomeHero;
