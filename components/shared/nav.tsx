const Nav = () => {
	return (
		<nav className='mr-auto'>
			<ul className='menu flex justify-start items-center gap-10 body-one'>
				<li>
					<a href='/' className='transition-colors hover:text-lc'>
						home
					</a>
				</li>
				<li>
					<a href='/about' className='transition-colors hover:text-lc'>
						about
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
