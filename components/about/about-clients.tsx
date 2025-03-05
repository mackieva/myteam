import verge from '@/public/assets/images/logo-the-verge.png';
import jakarta from '@/public/assets/images/logo-jakarta-post.png';
import guardian from '@/public/assets/images/logo-the-guardian.png';
import techradar from '@/public/assets/images/logo-tech-radar.png';
import gadgets from '@/public/assets/images/logo-gadgets-now.png';
import Image from 'next/image';

const AboutClients = () => {
	return (
		<section className='bg-ssg py-[88px] md:py-[100px] lg:py-[140px] relative overflow-hidden'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='200'
				className='absolute -top-[100px] lg:top-0 -left-[100px] md:left-0'
			>
				<g fill='none' fillRule='evenodd'>
					<path fill='#2C6269' d='M100 100H0V0h100z' />
					<path
						fill='#014E56'
						d='M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z'
					/>
					<path
						fill='#79C8C7'
						d='M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z'
					/>
				</g>
			</svg>
			<div className='max-w-[689px] lg:max-w-[1110px] mx-auto'>
				<h2 className='text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] text-center mb-14'>
					Some of our clients
				</h2>
				<div className='flex flex-col md:flex-row justify-between items-center gap-[55px] md:gap-[50px] lg:gap-[80px]'>
					<Image
						src={verge}
						alt='The Verge Text Logo'
						className='w-auto md:w-[75%] h-auto lg:w-auto'
					/>
					<Image
						src={jakarta}
						alt='The Jakarta Post Text Logo'
						className='w-auto md:w-[75%] h-auto lg:w-auto'
					/>
					<Image
						src={guardian}
						alt='The Guardian Text Logo'
						className='w-auto md:w-[75%] h-auto lg:w-auto'
					/>
					<Image
						src={techradar}
						alt='techradar Text Logo'
						className='w-auto md:w-[75%] h-auto lg:w-auto'
					/>
					<Image
						src={gadgets}
						alt='Gadgets Now Text Logo'
						className='w-auto md:w-[75%] lg:w-auto'
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutClients;
