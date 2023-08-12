import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../reduxStore/TodoSlice';

const TodoList = ({todo,_id}) => {
  const dispatch = useDispatch()
    const [mark, setMark] = useState(false);
  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      onClick={() => setMark(!mark)}
      className={`${
        mark
          ? "border-l-orange-500 border-orange-900"
          : "border-l-green-500 border-green-900"
      } w-full font-tiitleFont font-medium text-base border-[1px] border-l-[6px]  px-2 py-1 cursor-pointer flex items-center justify-between`}
    >
      {todo}
      <span onClick={()=>dispatch(deleteTodos(_id))} className="text-xl text-gray-300 hover:text-red-500 duration-300 cursor-pointer">
        <MdDelete />
      </span>
    </motion.li>
  );
}

export default TodoList