import AboutHero from '@/components/about/about-hero';
import AboutDirectors from '@/components/about/about-directors';
import AboutClients from '@/components/about/about-clients';
import PreFooter from '@/components/shared/pre-footer';
const AboutPage = () => {
	return (
		<>
			<AboutHero />
			<AboutDirectors />
			<AboutClients />
			<PreFooter />
		</>
	);
};

export default AboutPage;
