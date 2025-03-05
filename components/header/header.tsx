import logo from '@/public/assets/images/logo.svg';
import Image from 'next/image';
import HeaderNav from '../shared/header-nav';
import MobileNav from '../shared/mobile-nav';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='px-6 md:px-0 max-w-[689px] lg:max-w-[1110px] mx-auto mt-[48px] md:mt-[73px] flex justify-between md:justify-start items-center relative'>
			<Image
				src={logo}
				alt='MyTeam Text Logo'
				priority={true}
				className='w-[128px] md:mr-12 lg:mr-20 lg:w-auto'
			/>
			<HeaderNav />
			<Link
				href='/contact'
				className='body-one px-8 pt-2 pb-3 rounded-3xl btn btn-primary-light hidden md:block'
			>
				contact us
			</Link>
			<MobileNav />
		</header>
	);
};

export default Header;
