import chart from '@/public/assets/images/icon-chart.svg';
import cog from '@/public/assets/images/icon-cog.svg';
import person from '@/public/assets/images/icon-person.svg';
import Image from 'next/image';
import ContactForm from './contact-form';

const ContactMain = () => {
	return (
		<section className='relative px-6 md:px-0 py-[120px] overflow-hidden'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='200'
				className='hidden md:block absolute top-[120px] -left-[100px]'
			>
				<g fill='none' fillRule='evenodd'>
					<path fill='#2C6269' d='M100 100h100V0H100z' />
					<path
						fill='#012F34'
						d='M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z'
					/>
					<path
						fill='#79C8C7'
						d='M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z'
					/>
					<path
						fill='#F67E7E'
						d='M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z'
					/>
				</g>
			</svg>
			<div className='max-w-[542px] lg:max-w-[1110px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[56px] md:gap-[64px] lg:gap-[30px]'>
				<div className='max-w-[515px] lg:max-w-auto mx-auto lg:mx-0'>
					<h1 className='text-center lg:text-left text-[40px] leading-[40px] md:text-[64px] md:leading-[56px] lg:leading-[100px] lg:max-w-[10ch] mb-4 md:mb-6 lg:mb-4'>
						Contact
					</h1>
					<h2 className='text-lc text-center lg:text-left text-[32px] leading-[48px] mb-8'>
						Ask us about
					</h2>
					<div className='flex justify-start items-center gap-[23px] mb-2'>
						<Image
							src={person}
							alt='Person Icon With Circle Background'
							className='ml-[7px]'
						/>
						<div>
							<p className='body-one'>The quality of our talent network</p>
						</div>
					</div>
					<div className='flex justify-start items-center gap-[23px] mb-2'>
						<Image src={cog} alt='Cog Icon With Circle Background' />
						<div>
							<p className='body-one'>Usage & implementation of our software</p>
						</div>
					</div>
					<div className='flex justify-start items-center gap-[23px] mb-2'>
						<Image
							src={chart}
							alt='Line and Bar Chart Icon With Circle Background'
						/>
						<div>
							<p className='body-one'>How we help drive innovation</p>
						</div>
					</div>
				</div>
				<div>
					<ContactForm />
				</div>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='201'
				height='225'
				className='absolute -bottom-[100px] md:bottom-0 -right-[100px]'
			>
				<g fill='none' fillRule='evenodd'>
					<path
						fill='#012F34'
						d='M.5 100.5C.5 45.272 45.272.5 100.5.5s100 44.772 100 100-44.772 100-100 100-100-44.772-100-100zm67 0c0 18.225 14.775 33 33 33s33-14.775 33-33-14.775-33-33-33-33 14.775-33 33z'
					/>
					<path fill='#79C8C7' d='M43.5.5v43H.5V.5z' />
					<path
						fill='#F67E7E'
						d='M.5 124.986c0-55.228 44.772-100 100-100s100 44.772 100 100c0 55.229-44.772 100-100 100s-100-44.771-100-100zm67 0c0 18.226 14.775 33 33 33s33-14.774 33-33c0-18.225-14.775-33-33-33s-33 14.775-33 33z'
					/>
				</g>
			</svg>
		</section>
	);
};

export default ContactMain;
