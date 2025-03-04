'use client';
import { contactAction } from '@/lib/actions';
import { useActionState } from 'react';

interface InitialState {
	errors?: {
		name?: string[];
		email?: string[];
		company?: string[];
		title?: string[];
		message?: string[];
	};
	data?: {
		[k: string]: FormDataEntryValue;
	};
	name?: string;
}

const ContactForm = () => {
	const initialState: InitialState = {
		errors: {},
		data: { name: '', email: '', company: '', title: '', message: '' },
		name: '',
	};
	const [state, formAction] = useActionState(contactAction, initialState);
	return (
		<form
			className='flex flex-col justify-between items-start gap-6'
			action={formAction}
		>
			<input
				type='text'
				placeholder='Name'
				id='name'
				name='name'
				className={`${
					state?.errors?.name &&
					'border-b-lc placeholder:text-lc placeholder:opacity-60'
				} body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb`}
				defaultValue={state?.data?.name as string}
			/>
			{state?.errors?.name && (
				<p className='text-[10px] text-lc italic ml-[14px] -mt-4'>
					{state.errors.name}
				</p>
			)}
			<input
				placeholder='Email Address'
				type='email'
				id='email'
				name='email'
				className={`${
					state?.errors?.email &&
					'border-b-lc placeholder:text-lc placeholder:opacity-60'
				} body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb`}
				defaultValue={state?.data?.email as string}
			/>
			{state?.errors?.email && (
				<p className='text-[10px] text-lc italic ml-[14px] -mt-4'>
					{state.errors.email.join(', ')}
				</p>
			)}
			<input
				placeholder='Company Name'
				id='company'
				name='company'
				className={`${
					state?.errors?.company &&
					'border-b-lc placeholder:text-lc placeholder:opacity-60'
				} body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb`}
				defaultValue={state?.data?.company as string}
			/>
			{state?.errors?.company && (
				<p className='text-[10px] text-lc italic ml-[14px] -mt-4'>
					{state.errors.company}
				</p>
			)}
			<input
				placeholder='Title'
				id='title'
				name='title'
				className={`${
					state?.errors?.title &&
					'border-b-lc placeholder:text-lc placeholder:opacity-60'
				} body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb`}
				defaultValue={state?.data?.title as string}
			/>
			{state?.errors?.title && (
				<p className='text-[10px] text-lc italic ml-[14px] -mt-4'>
					{state.errors.title}
				</p>
			)}
			<textarea
				placeholder='Message'
				id='message'
				name='message'
				className={`${
					state?.errors?.message &&
					'border-b-lc placeholder:text-lc placeholder:opacity-60'
				} body-two -tracking-[0.12px] pl-[14px] pb-4 border-0 border-b-[1px] border-white text-white outline-0 placeholder:text-[hsla(0,0%,100%,60%)] w-full focus:border-rb`}
				defaultValue={state?.data?.message as string}
				rows={3}
			/>
			{state?.errors?.message && (
				<p className='text-[10px] text-lc italic ml-[14px] -mt-4'>
					{state.errors.message}
				</p>
			)}
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
