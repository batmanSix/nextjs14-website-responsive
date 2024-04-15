"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { title } from "@/components/primitives";
const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const text = "Say Hello";

	const form = useRef();

	const sendEmail = (e: any) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);


	};

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div>
				<h1 className={title()}>Blog</h1>
			</div>
		</motion.div>
	);
};

export default ContactPage;
