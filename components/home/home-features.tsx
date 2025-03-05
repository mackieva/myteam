import chart from '@/public/assets/images/icon-chart.svg';
import cog from '@/public/assets/images/icon-cog.svg';
import person from '@/public/assets/images/icon-person.svg';
import Image from 'next/image';

const HomeFeatures = () => {
	return (
		<section className='bg-ssg px-6 md:px-0 py-[64px] md:py-[100px] lg:py-[140px] relative'>
			<div className='max-w-[573px] lg:max-w-[1110px] mx-auto flex flex-col justify-between items-start gap-14 md:gap-16 lg:grid lg:grid-cols-[445px_540px] lg:gap-[125px]'>
				<div className='flex flex-col justify-start items-start max-w-[240px] md:max-w-[445px] lg:max-w-auto'>
					<span className='h-1 w-[50px] bg-lc' />
					<h2 className='text-[32px] leading-8 lg:text-[48px] lg:leading-12 mt-8 lg:mt-[54px]'>
						Build & manage distributed teams like no one else.
					</h2>
				</div>
				<div>
					<div className='flex flex-col md:flex-row justify-between items-center text-center gap-4 mb-12 md:items-start md:gap-[23px] md:text-left md:mb-8 max-w-[573px] lg:max-w-auto lg:mt-[54px]'>
						<Image
							src={person}
							alt='Person Icon With Circle Background'
							className='ml-[7px]'
						/>
						<div>
							<p className='body-one text-lc mb-2 md:mb-4'>
								Experienced Individuals
							</p>
							<p className='body-two opacity-80'>
								Our network is made up of highly experienced professionals who
								are passionate about what they do.
							</p>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between items-center text-center gap-4 mb-12 md:items-start md:gap-[23px] md:text-left md:mb-8 max-w-[573px] lg:max-w-auto lg:mt-[54px]'>
						<Image src={cog} alt='Cog Icon With Circle Background' />
						<div>
							<p className='body-one text-lc mb-2 md:mb-4'>Easy to Implement</p>
							<p className='body-two opacity-80'>
								Our processes have been refined over years of implementation
								meaning our teams always deliver.
							</p>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between items-center text-center gap-4 md:items-start md:gap-[23px] md:text-left max-w-[573px] lg:max-w-auto lg:mt-[54px]'>
						<Image
							src={chart}
							alt='Line and Bar Chart Icon With Circle Background'
						/>
						<div>
							<p className='body-one text-lc mb-2 md:mb-4'>
								Enhanced Productivity
							</p>
							<p className='body-two opacity-80'>
								Our customized platform with in-built analytics helps you manage
								your distributed teams.
							</p>
						</div>
					</div>
				</div>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='244'
				className='absolute top-0 bottom-auto lg:bottom-0 lg:top-auto -right-[100px]'
			>
				<g fill='none' fillRule='evenodd'>
					<path fill='#2C6269' d='M100 144H0V44h100z' />
					<path
						fill='#014E56'
						d='M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z'
					/>
					<path
						fill='#79C8C7'
						d='M100 184v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z'
					/>
				</g>
			</svg>
		</section>
	);
};

export default HomeFeatures;
