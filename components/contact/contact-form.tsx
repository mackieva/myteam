const ContactForm = () => {
	return (
		<form className='flex flex-col justify-between items-start gap-6'>
			<input
				placeholder='Name'
				id='name'
				name='name'
				className='body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb'
			/>
			<input
				placeholder='Email Address'
				type='email'
				id='email'
				name='email'
				className='body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb'
			/>
			<input
				placeholder='Company Name'
				id='company'
				name='company'
				className='body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb'
			/>
			<input
				placeholder='Title'
				id='title'
				name='title'
				className='body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb'
			/>
			<textarea
				placeholder='Message'
				id='message'
				name='message'
				className='body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb'
				rows={3}
			/>
			<button
				type='submit'
				className='border-2 border-white bg-white text-djg px-8 pt-[9px] pb-[11px] rounded-3xl transition-all duration-300 hover:bg-rb hover:border-rb hover:cursor-pointer focus:bg-rb focus:border-rb outline-0'
			>
				submit
			</button>
		</form>
	);
};

export default ContactForm;
