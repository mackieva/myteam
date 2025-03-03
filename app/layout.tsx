import type { Metadata } from 'next';
import { Livvic } from 'next/font/google';
import Header from '@/components/header/header';
import './globals.css';

const livvic = Livvic({
	variable: '--font-livvic',
	subsets: ['latin'],
	weight: ['600', '700'],
});

export const metadata: Metadata = {
	title: 'myteam website',
	description: 'Next.js based website based on design from FrontendMentor',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${livvic.variable} `}>
				<Header />
				{children}
			</body>
		</html>
	);
}
