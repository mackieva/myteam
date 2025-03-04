'use client';

import cross from '@/public/assets/images/icon-cross.svg';
import li from '@/public/assets/images/icon-linkedin.svg';
import twitter from '@/public/assets/images/icon-twitter.svg';
import Image from 'next/image';
import { useState } from 'react';

interface Director {
	avatar: string;
	quote: string;
	name: string;
	title: string;
}

const AboutDirectorBlock = ({ director }: { director: Director }) => {
	const [selected, setSelected] = useState(false);
	console.log(selected);
	return (
		<div
			className={`py-8 px-6 flex flex-col items-center relative ${
				selected ? 'bg-dg' : 'bg-ssg'
			}`}
		>
			{selected ? (
				<div className='flex flex-col justify-center items-center mb-7 text-center'>
					<p className='body-one text-rb mb-2'>{director.name}</p>
					<p className='body-two mb-6 px-6'>{director.quote}</p>
					<div className='flex justify-between items-center gap-3'>
						<a href='#'>
							<Image src={twitter} alt='Twitter Logo' />
						</a>
						<a href='#'>
							<Image src={li} alt='LinkedIn Logo' />
						</a>
					</div>
				</div>
			) : (
				<div className='flex flex-col justify-center items-center mb-7'>
					<Image
						src={director.avatar}
						width={96}
						height={96}
						className='border-2 border-[#c4fffe] rounded-full mb-4'
						alt={director.name}
					/>
					<p className='body-one text-rb'>{director.name}</p>
					<p className='body-two italic'>{director.title}</p>
				</div>
			)}

			<button
				className={`absolute -bottom-[32px] left-[50%] -ml-[35px] rounded-full p-[26px] transition-transform duration-[0.3s] hover:cursor-pointer ${
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
