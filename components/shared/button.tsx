import './button.css';

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
		<a
			href={`${link}`}
			className={`body-one px-8 pt-2 pb-3 rounded-3xl btn btn-${style}`}
		>
			{label}
		</a>
	);
};

export default Button;
