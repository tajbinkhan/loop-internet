import Information from "@/components/common-section";

export default function page() {
	return (
		<div className="flex flex-col container max-w-[50%] mx-auto items-center">
			<div className="flex flex-row justify-evenly gap-10 sm:flex-col">
				<div className="flex flex-col items-center">
					<div className="flex flex-row gap-3">
						<div className="rounded-full border-2 border-[#fff] p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
							</svg>
						</div>
						<h2 className="font-montserrat text-white text-xl">Download <span className="text-slate-300 text-base">Mbps</span></h2>
					</div>
					<p className="text-4xl text-white font-montserrat">14.93</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex flex-row gap-3">
						<div className="rounded-full border-2 border-[#fff] p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
							</svg>
						</div>
						<h2 className="font-montserrat text-white text-xl">Upload <span className="text-slate-300 text-base">Mbps</span></h2>
					</div>
					<p className="text-4xl text-white font-montserrat">14.93</p>
				</div>
			</div>
			<div className="flex flex-row mx-auto gap-6 justify-evenly mt-10 w-[40%]">
				<div className="flex flex-row gap-1 items-center">
					<p className="font-montserrat text-white">Ping</p>
					<p className="font-montserrat text-slate-300">ms</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="rounded-full border-2 border-[#fff] p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
						</svg>
					</div>
					<p className="font-montserrat text-white">8</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="rounded-full border-2 border-[#fff] p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
						</svg>
					</div>
					<p className="font-montserrat text-white">8</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="rounded-full border-2 border-[#fff] p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
						</svg>
					</div>
					<p className="font-montserrat text-white">8</p>
				</div>
			</div>
			<Information />
		</div>
	)
}
