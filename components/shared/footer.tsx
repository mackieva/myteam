import logo from '@/public/assets/images/logo.svg';
import Nav from './nav';
import Image from 'next/image';
import Social from './social';

const Footer = () => {
	return (
		<footer className='bg-dg py-12'>
			<div className='max-w-[1110px] mx-auto grid grid-cols-[1fr_445px_1fr]'>
				<div>
					<Image
						src={logo}
						alt='MyTeam Text Logo'
						priority={true}
						className='mb-[25px]'
					/>
					<Nav />
				</div>
				<p className='body-two opacity-60'>
					987 Hillcrest Lane
					<br />
					Irvine, CA
					<br />
					California 92714
					<br />
					Call Us: 949-833-7432
				</p>
				<div className='flex flex-col justify-between items-end'>
					<Social />
					<p className='body-two opacity-60'>
						Copyright 2020. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
