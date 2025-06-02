import Section from "../componentes/section.js" 

const Hero = () => {
	return (
		<div className={"bg-black"}>
			<Section className={"flex flex-col items-center justify-center h-screen text-white"}>
				<h1 className={"text-4xl md:text-6xl font-bold mb-4"}>Welcome to Our Website</h1>
				<p className={"text-lg md:text-xl mb-8 text-center max-w-2xl"}>
					Discover amazing content and connect with our community.
				</p>
				<a href="#explore" className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
					Explore Now
				</a>
			</Section>
		</div>
	)
}
export default Hero;
