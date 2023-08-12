import React from "react";
import { motion } from "framer-motion";
import { ImSpinner9 } from "react-icons/im";

const SuccessMsg = ({ successMsg }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      className={`border-b-green-500 text-green-500 absolute shadow-todoShodow font-titleFont tracking-wide font-medium text-lg bottom-10 left-[40%] bg-bodyColor px-10 py-4 rounded-sm border-b-[6px]`}
    >
      <p className="flex items-center gap-4">
        <span className="text-xl animate-spin">
          <ImSpinner9 />
        </span>
        {successMsg}
      </p>
    </motion.div>
  );
};

export default SuccessMsg;
