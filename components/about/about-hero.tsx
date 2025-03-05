const AboutHero = () => {
	return (
		<section className='py-[112px] lg:py-[120px] relative'>
			<div className='max-w-[683px] lg:max-w-[1110px] mx-auto flex flex-col justify-between items-center gap-[24px] lg:grid lg:grid-cols-[350px_730px] lg:gap-[30px] relative'>
				<div>
					<h1 className='text-[64px] leading-[100px] max-w-[10ch]'>About</h1>
				</div>
				<div className='flex flex-col items-start justify-between'>
					<span className='h-1 w-[50px] bg-lc hidden lg:block' />
					<p className='text-[15px] leading-[28px] max-w-[457px] lg:max-w-full mt-0 lg:mt-[44px] text-center lg:text-left lg:text-[18px]'>
						We help companies build dynamic teams made up of top global talent.
						Using our network of passionate professionals we drive innovation
						and deliver incredible outcomes. Talented, diverse teams shape the
						best products and experiences. We’ll bring those teams to you.
					</p>
				</div>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='200'
				className='absolute bottom-0 -right-[100px]'
			>
				<g fill='none' fillRule='evenodd'>
					<path fill='#2C6269' d='M100 100H0V0h100z' />
					<path
						fill='#F67E7E'
						d='M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z'
					/>
					<path
						fill='#79C8C7'
						d='M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z'
					/>
				</g>
			</svg>
		</section>
	);
};

export default AboutHero;
