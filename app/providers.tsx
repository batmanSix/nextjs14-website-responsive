"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter, usePathname } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { AnimatePresence, motion } from "framer-motion";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();
	const pathName = usePathname();
	return (
		<AnimatePresence mode="wait" >
			<div
				key={pathName}
				className="bg-gradient-to-b from-blue-100"
			>
				<motion.div
					className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
					animate={{ height: "0vh" }}
					exit={{ height: "140vh" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				/>
				<motion.div
					className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					{pathName == '/' ? 'Home' : pathName.substr(1)}
				</motion.div>
				<motion.div
					className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
					initial={{ height: "140vh" }}
					animate={{ height: "0vh", transition: { delay: 0.5 } }}
				/>


				<NextUIProvider navigate={router.push}>
					<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
				</NextUIProvider>

			</div>
		</AnimatePresence>
	);
}
