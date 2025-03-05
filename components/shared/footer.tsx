import logo from '@/public/assets/images/logo.svg';
import FooterNav from './footer-nav';
import Image from 'next/image';
import Social from './social';

const Footer = () => {
	return (
		<footer className='bg-dg py-14 lg:py-12'>
			<div className='max-w-[689px] lg:max-w-[1110px] mx-auto grid grid-cols-2 gap-8 lg:gap-0 lg:grid-cols-[1fr_445px_1fr] text-[15px] lg:text-[18px]'>
				<div className='flex flex-col justify-between'>
					<Image
						src={logo}
						alt='MyTeam Text Logo'
						priority={true}
						className='w-[96px] lg:w-[160px]'
					/>
					<FooterNav />
				</div>
				<p className='body-two opacity-60 text-right lg:text-left'>
					987 Hillcrest Lane
					<br />
					Irvine, CA
					<br />
					California 92714
					<br />
					Call Us: 949-833-7432
				</p>
				<div className='flex col-span-2 lg:col-span-1 lg:flex-col justify-between items-center lg:items-end'>
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
