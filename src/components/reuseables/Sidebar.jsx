import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const links = [
  { name: "Home", to: "/a", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Services", to: "/services", id: 3 },
  { name: "Contact", to: "#", id: 4 }
];
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
export default function Sidebar() {
  const [open, cycleOpen] = useCycle(false, true);
  const sidebarDiv = document.getElementById("sidebar")

  return (
    <main>
        <div className="btn-container">
       
       <GrMenu onClick={cycleOpen}/>

  
 </div>
      <AnimatePresence>
      
        {open && (
            
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,

              transition: { delay: 0.7, duration: 0.3 }
            }}
            className=" bg-[#3956f0] h-screen py-[40px] fixed right-0 top-0 z-[50] "
          >
            <motion.div
              className="container  text-white flex flex-col h-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
                       {open && <GrClose onClick={cycleOpen} className="mb-[30px]"/>}

              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="p-[10px] hover:text-yellow-600"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      
    </main>
  );
}