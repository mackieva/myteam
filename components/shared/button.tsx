import './button.css';
import Link from 'next/link';

const Button = ({
	style,
	link,
	label,
}: {
	style: 'primary-light' | 'primary-dark' | 'secondary';
	link: string;
	label: string;
}) => {
	return (
		<Link
			href={`${link}`}
			className={`body-one px-8 pt-2 pb-3 rounded-3xl btn btn-${style}`}
		>
			{label}
		</Link>
	);
};

export default Button;
