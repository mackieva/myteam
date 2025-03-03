const directors = [
	{
		avatar: '/public/assets/images/avatar-nikita.jpg',
		quote:
			'It always amazes me how much talent there is in every corner of the globe.',
		name: 'Nikita Marks',
		title: 'Founder & CEO',
	},
	{
		avatar: '/public/assets/images/avatar-cristian.jpg',
		quote:
			'Distributed teams required unique processes. You need to approach work in a new way.',
		name: 'Cristian Duncan',
		title: 'Co-founder & COO',
	},
	{
		avatar: '/public/assets/images/avatar-cruz.jpg',
		quote:
			"Technology is at the forefront of enabling distributed teams. That's where we come in.",
		name: 'Cruz Hamer',
		title: 'Co-founder & CTO',
	},
	{
		avatar: '/public/assets/images/avatar-drake.jpg',
		quote:
			'Hiring similar people from similar backgrounds is a surefire way to stunt innovation.',
		name: 'Drake Heaton',
		title: 'Business Development Lead',
	},
	{
		avatar: '/public/assets/images/avatar-griffin.jpg',
		quote:
			'Unique perspectives shape unique products, which is what you need to survive these days.',
		name: 'Griffin Wise',
		title: 'Lead Marketing',
	},
	{
		avatar: '/public/assets/images/avatar-aden.jpg',
		quote:
			'Empowered teams create truly amazing products. Set the north star and let them follow it.',
		name: 'Aden Allan',
		title: 'Head of Talent',
	},
];

const AboutDirectors = () => {
	return (
		<section className='bg-djg py-[140px] relative'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='200'
				height='200'
				className='absolute top-0 -left-[100px]'
			>
				<g fill='none' fill-rule='evenodd'>
					<path fill='#2C6269' d='M100 100h100V0H100z' />
					<path
						fill='#012F34'
						d='M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z'
					/>
					<path
						fill='#79C8C7'
						d='M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z'
					/>
					<path
						fill='#F67E7E'
						d='M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z'
					/>
				</g>
			</svg>
			<h2 className='h2 text-center mb-14'>Meet the directors</h2>
		</section>
	);
};

export default AboutDirectors;
