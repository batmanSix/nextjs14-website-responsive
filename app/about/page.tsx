"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { title } from "@/components/primitives";
const ContactPage = () => {
	return (
		<motion.div
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<h1 className={title()}>about</h1>
		</motion.div>
	);
};

export default ContactPage;
