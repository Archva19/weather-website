import { motion } from "framer-motion";

export default function Logo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          className="w-9.75 h-auto md:w-15 xl:w-[89.89px]"
          src="icons/logo.svg"
          alt="weather app"
        />
      </motion.div>
    </>
  );
}
