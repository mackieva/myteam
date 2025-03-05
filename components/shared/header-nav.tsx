import Link from 'next/link';

const HeaderNav = () => {
	return (
		<nav className='mr-auto'>
			<ul className='menu flex justify-start items-center gap-10 body-one'>
				<li>
					<Link
						href='/'
						className='transition-colors duration-300 hover:text-lc'
					>
						home
					</Link>
				</li>
				<li>
					<Link
						href='/about'
						className='transition-colors duration-300 hover:text-lc'
					>
						about
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNav;
