import facebook from '@/public/assets/images/icon-facebook.svg';
import pinterest from '@/public/assets/images/icon-pinterest.svg';
import twitter from '@/public/assets/images/icon-twitter.svg';
import Image from 'next/image';

const Social = () => {
	return (
		<ul className='flex justify-end items-center gap-4'>
			<li>
				<a href='#'>
					<Image src={facebook} alt='Facebook Logo Icon' />
				</a>
			</li>
			<li>
				<a href='#'>
					<Image src={pinterest} alt='Pinterest Logo Icon' />
				</a>
			</li>
			<li>
				<a href='#'>
					<Image src={twitter} alt='Twitter Logo Icon' />
				</a>
			</li>
		</ul>
	);
};

export default Social;
