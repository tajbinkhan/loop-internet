"use client"

import Information from "@/components/common-section";
import Speed from "@/components/options/Speed";
import Type from "@/components/options/Type";
import { useState } from "react";

export default function Home() {

	const [selectedSpeed, setSelectedSpeed] = useState("Speed Meter");
	const [selectedType, setSelectedType] = useState("Cable Type");

	const typeMenuItems = [
		{ id: 1, label: "Fiber" },
		{ id: 2, label: "Cable" },
	];

	const speedMenuItems = {
		"cable": {
			"speeds": [
				"100Mbps",
				"250Mbps",
				"1Gbps",
				"2Gbps",
				"10Gbps",
			]
		},
		"fiber": {
			"speeds": [
				"100Mbps",
				"250Mbps",
				"1Gbps",
				"2Gbps",
				"10Gbps",
			]
		}
	};

	// Function to handle Speed selection
	const handleSpeedSelect = (item) => {
		setSelectedSpeed(item);
	};

	// Function to handle Type selection
	const handleTypeSelect = (item) => {
		setSelectedType(item);
	};

	return (
		<>
			<div className="flex flex-row app-400:flex-col app-400:items-center justify-center gap-5">
				<Type
					typeMenuItems={typeMenuItems}
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					handleTypeSelect={handleTypeSelect}
				/>
				{selectedType !== "Cable Type" && (
					<Speed
						speedMenuItems={speedMenuItems}
						selectedType={selectedType}
						selectedSpeed={selectedSpeed}
						setSelectedSpeed={setSelectedSpeed}
						handleSpeedSelect={handleSpeedSelect}
					/>
				)}
			</div>
			<section className="hero-section my-6">
				<div className="flex flex-col container max-w-[50%] mx-auto items-center">
					{selectedSpeed !== "Speed Meter" && (
						<button className="border-2 rounded-[100%] duration-300 ease-in-out p-[50px] font-montserrat font-medium text-white text-4xl hover:bg-shadow-blue/50">
							GO
						</button>
					)}
					< Information />
				</div>
			</section>
		</>
	);
}
