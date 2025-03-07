import Button from './button';

const PreFooter = () => {
	return (
		<section className='bg-lc px-6 md:px-0 py-[83px] md:py-[76px] relative overflow-hidden'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='144'
				className='absolute -bottom-[22px] lg:bottom-0 left-0'
			>
				<g fill='none' fillRule='evenodd'>
					<path fill='#2C6269' d='M100 144H0V44h100z' />
					<path
						fill='#004047'
						d='M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z'
					/>
					<path
						fill='#F67E7E'
						d='M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100z'
					/>
					<path
						fill='#79C8C7'
						d='M4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z'
					/>
				</g>
			</svg>
			<div className='max-w-[573px] lg:max-w-[917px] mx-auto flex flex-col text-center md:text-left md:flex-row justify-between items-center'>
				<h2 className='text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] text-ssg mb-6 md:mb-0'>
					Ready to get started?
				</h2>
				<Button style='primary-dark' link='/contact' label='contact us' />
			</div>
		</section>
	);
};

export default PreFooter;
