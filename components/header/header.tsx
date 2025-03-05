import logo from '@/public/assets/images/logo.svg';
import Image from 'next/image';
import HeaderNav from '../shared/header-nav';
import Button from '../shared/button';

const Header = () => {
	return (
		<header className='max-w-[689px] lg:max-w-[1110px] mx-auto mt-[73px] flex justify-start items-center'>
			<Image
				src={logo}
				alt='MyTeam Text Logo'
				priority={true}
				className='w-[128px] md:mr-12 lg:mr-20 lg:w-auto'
			/>
			<HeaderNav />
			<Button style='primary-light' link='/contact' label='contact us' />
		</header>
	);
};

export default Header;
