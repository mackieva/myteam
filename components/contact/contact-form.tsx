'use client';
import { contactAction } from '@/lib/actions';
import { useActionState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
	success?: boolean;
}

const ContactForm = () => {
	const initialState: InitialState = {
		errors: {},
		data: { name: '', email: '', company: '', title: '', message: '' },
		name: '',
		success: false,
	};

	const [state, formAction] = useActionState(contactAction, initialState);

	if (state.success === true) {
		toast(
			`Thank you for getting in touch ${state.name}!  We've received your message and will be in touch.`,
			{
				position: 'top-center',
			}
		);
	}

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
				<p className='-mt-4 ml-[14px] text-[10px] text-lc italic'>
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
				<p className='-mt-4 ml-[14px] text-[10px] text-lc italic'>
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
				<p className='-mt-4 ml-[14px] text-[10px] text-lc italic'>
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
				<p className='-mt-4 ml-[14px] text-[10px] text-lc italic'>
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
				<p className='-mt-4 ml-[14px] text-[10px] text-lc italic'>
					{state.errors.message}
				</p>
			)}
			<button
				type='submit'
				className='bg-white hover:bg-rb focus:bg-rb px-8 pt-[9px] pb-[11px] border-2 border-white hover:border-rb focus:border-rb rounded-3xl outline-0 text-djg transition-all duration-300 hover:cursor-pointer'
			>
				submit
			</button>
			<ToastContainer />
		</form>
	);
};

export default ContactForm;
