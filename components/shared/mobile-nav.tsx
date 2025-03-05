'use client';
import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				className='block hover:cursor-pointer md:hidden'
				onClick={() => setOpen(true)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='17'
					className='block md:hidden'
				>
					<g fill='#FFF' fill-rule='evenodd'>
						<path d='M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z' />
					</g>
				</svg>
			</button>
			<div
				className={`h-full w-[255px] bg-pb fixed top-0 block z-20 md:hidden trasition-all duration-500 ${
					open ? 'right-0' : '-right-[300px]'
				}`}
			>
				<div className='h-full w-full relative pt-14 pr-[25px] pl-12 flex items-end flex-col'>
					<button
						onClick={() => setOpen(false)}
						className='hover:cursor-pointer mb-[39px]'
					>
						<svg xmlns='http://www.w3.org/2000/svg' width='18' height='17'>
							<path
								fill='#FFF'
								fill-rule='evenodd'
								d='M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z'
							/>
						</svg>
					</button>
					<nav className='w-full mb-9'>
						<ul className='flex flex-col justify-start items-start gap-6 body-one'>
							<li>
								<Link
									href='/'
									className='transition-colors duration-300 hover:text-lc'
									onClick={() => setOpen(false)}
								>
									home
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='transition-colors duration-300 hover:text-lc'
									onClick={() => setOpen(false)}
								>
									about
								</Link>
							</li>
						</ul>
					</nav>
					<Link
						href='/contact'
						className='body-one px-8 pt-2 pb-3 rounded-3xl btn btn-primary-light place-self-start'
						onClick={() => setOpen(false)}
					>
						contact us
					</Link>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='200'
						height='200'
						className='absolute bottom-0 -right-[100px]'
					>
						<g fill='none' fill-rule='evenodd'>
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
				</div>
			</div>
		</>
	);
};

export default MobileNav;
