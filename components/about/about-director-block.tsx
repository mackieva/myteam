'use client';

import cross from '@/public/assets/images/icon-cross.svg';
import Image from 'next/image';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Director {
	avatar: string;
	quote: string;
	name: string;
	title: string;
}

export const variants = {
	show: {
		opacity: 1,
		height: 'auto',
		scale: 1,
	},
	hide: {
		opacity: 0,
		height: 0,
		scale: 0,
	},
};

const AboutDirectorBlock = ({ director }: { director: Director }) => {
	const [selected, setSelected] = useState(false);
	return (
		<div
			className={`py-8 px-6 flex flex-col items-center relative ${
				selected ? 'bg-dg' : 'bg-ssg'
			}`}
		>
			<AnimatePresence initial={false}>
				<div className='flex flex-col justify-center items-center overflow-hidden'>
					<motion.img
						src={director.avatar}
						width={96}
						height={96}
						className='border-2 border-[#c4fffe] rounded-full mb-4'
						alt={director.name}
						variants={variants}
						animate={selected ? 'hide' : 'show'}
					/>
					<p className='body-one text-rb'>{director.name}</p>
					<motion.p
						className='body-two italic'
						variants={variants}
						animate={selected ? 'hide' : 'show'}
					>
						{director.title}
					</motion.p>
					<motion.p
						className='body-two mt-2 mb-6 px-6 text-center'
						variants={variants}
						animate={selected ? 'show' : 'hide'}
					>
						"{director.quote}"
					</motion.p>
					<motion.div
						className='flex justify-between items-center gap-3 mb-2'
						variants={variants}
						animate={selected ? 'show' : 'hide'}
					>
						<a href='#' className='group'>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='20'>
								<path
									fill='#FFF'
									className='transition-all duration-300 group-hover:fill-lc'
									d='M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z'
								/>
							</svg>
						</a>
						<a href='#' className='group'>
							<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
								<path
									fill='#FFF'
									className='transition-all duration-300 group-hover:fill-lc'
									d='M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z'
								/>
							</svg>
						</a>
					</motion.div>
				</div>
			</AnimatePresence>
			<button
				className={`absolute -bottom-[32px] left-[50%] -ml-[35px] rounded-full p-[26px] transition-all duration-300 hover:cursor-pointer z-10 ${
					selected
						? 'transform-[rotate(45deg)] bg-rb hover:bg-lc'
						: 'bg-lc hover:bg-rb'
				}`}
				onClick={() => setSelected(!selected)}
			>
				<Image src={cross} alt='Cross Icon' />
			</button>
		</div>
	);
};

export default AboutDirectorBlock;
