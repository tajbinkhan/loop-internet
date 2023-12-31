"use client";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Speed({ speedMenuItems, selectedType, selectedSpeed, setSelectedSpeed, handleSpeedSelect }) {
	// Check if selectedType exists and has a valid value
	const selectedTypeExists = selectedType && speedMenuItems[selectedType.toLowerCase()];

	// Extract speeds based on the selected type
	const speeds = selectedTypeExists ? speedMenuItems[selectedType.toLowerCase()].speeds : [];

	console.log(speedMenuItems[selectedType.toLowerCase()]);

	return (
		<Menu as="div" className="relative w-[10%] min-w-[150px] max-w-[135px]">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					{selectedSpeed}
					<ChevronDownIcon
						className="-mr-1 h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{speeds.map((item) => (
							<Menu.Item key={item} onClick={() => handleSpeedSelect(item)}>
								{({ active }) => (
									<p
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block px-4 py-2 text-sm cursor-pointer"
										)}
									>
										{item}
									</p>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
