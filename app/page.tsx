import HomeHero from '@/components/home/home-hero';
import HomeFeatures from '@/components/home/home-features';
import HomeSuccess from '@/components/home/home-success';
import PreFooter from '@/components/shared/pre-footer';

export default function Home() {
	return (
		<>
			<HomeHero />
			<HomeFeatures />
			<HomeSuccess />
			<PreFooter />
		</>
	);
}
