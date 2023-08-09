export default function Result() {
	return (
		<div className='w-[50%] md:w-[85%] bg-transparent-white mx-auto p-4 py-10 rounded'>
			<div className="flex flex-row sm:flex-col sm:gap-8 justify-evenly">
				<div className="flex flex-col items-center">
					<div className="flex flex-row gap-3">
						<div className="rounded-full border-2 border-[#9D40AF] p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#9D40AF" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
							</svg>
						</div>
						<h2 className="font-montserrat text-xl">Download <span className="text-slate-600 text-base">Mbps</span></h2>
					</div>
					<p className="text-4xl font-montserrat">14.93</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex flex-row gap-3">
						<div className="rounded-full border-2 border-[#5A6ECC] p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5A6ECC" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
							</svg>
						</div>
						<h2 className="font-montserrat text-xl">Upload <span className="text-slate-600 text-base">Mbps</span></h2>
					</div>
					<p className="text-4xl font-montserrat">14.93</p>
				</div>
			</div>
			<div className="flex flex-row mx-auto gap-6 justify-evenly mt-10 w-[40%] app-355:flex-col">
				<div className="flex flex-row gap-1 items-center">
					<p className="font-montserrat">Ping</p>
					<p className="font-montserrat text-slate-600">ms</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="rounded-full border-2 border-[#FFF38E] p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFF38E" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
						</svg>
					</div>
					<p className="font-montserrat">8</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="rounded-full border-2 border-[#9D40AF] p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9D40AF" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
						</svg>
					</div>
					<p className="font-montserrat">8</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="rounded-full border-2 border-[#5A6ECC] p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5A6ECC" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
						</svg>
					</div>
					<p className="font-montserrat">8</p>
				</div>
			</div>
			<div className="flex flex-col gap-4 mt-10 mx-auto w-[65%] md:flex-wrap md:content-center">
				<div className="flex flex-row gap-3">
					<div className="rounded-full border-2 border-[#9D40AF] p-1 h-fit">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
						</svg>
					</div>
					<div className="flex flex-col">
						<p className="font-montserrat">Connections</p>
						<p className="font-montserrat text-slate-600">Multi</p>
					</div>
				</div>
				<div className="flex flex-row gap-3">
					<div className="rounded-full border-2 border-[#9D40AF] p-1 h-fit">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
						</svg>

					</div>
					<div className="flex flex-col">
						<p className="font-montserrat">Loop Internet</p>
						<p className="font-montserrat text-slate-600">Wilkes-Barre</p>
					</div>
				</div>
				<div className="flex flex-row gap-3">
					<div className="rounded-full border-2 border-[#9D40AF] p-1 h-fit">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
						</svg>
					</div>
					<div className="flex flex-col">
						<p className="font-montserrat">Loop Internet</p>
						<p className="font-montserrat text-slate-600">127.0.0.1</p>
					</div>
				</div>
			</div>
		</div>
	)
}
