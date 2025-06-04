

const section = ({id,className, children }) => {
	const clase = className ? className  + " flex w-full h-screen bg-gradient-to-r from-blue-900 to-blue-700 items-center justify-center relative "  : " flex w-full h-screen bg-gradient-to-r from-blue-900 to-blue-700 items-center  relative " ;
	return (
		<div id={id?id:"none"} className={clase}>
			{children}
		</div>
	)
}
export default section;
