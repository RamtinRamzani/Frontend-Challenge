import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [isNowbOpen, setIsNowbOpen] = useState(false);

  const projects = [{ name: "Nowb Project", path: "/nowb" }];
  const nowb = [
    { name: "Base Apparel", path: "/nowb/base-apparel" },
    { name: "FAQ Accordion", path: "/nowb/faq-accordion" },
    { name: "Age Calculator", path: "/nowb/age-calculator" },
    { name: "Contact Form", path: "/nowb/contact-form" },
  ];

  // Animation variants for the sidebar
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  // Animation variants for list items
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  // Animation variants for sub-menu
  const subMenuVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 z-40 shadow-lg md:block"
          >
            <h2 className="text-xl font-bold mb-4 mt-14 text-center">
              Projects
            </h2>
            <ul>
              {projects.map((project, index) => (
                <motion.li
                  key={project.path}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: index * 0.1 }}
                  className="mb-2"
                >
                  <div
                    className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => setIsNowbOpen(!isNowbOpen)}
                  >
                    <span>{project.name}</span>
                    <ChevronDown
                      size={16}
                      className={`ml-auto transform transition-transform ${
                        isNowbOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {isNowbOpen && (
                      <motion.ul
                        variants={subMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.2 }}
                        className="ml-4 overflow-hidden"
                      >
                        {nowb.map((subProject, subIndex) => (
                          <motion.li
                            key={subProject.path}
                            variants={itemVariants}
                            transition={{ delay: subIndex * 0.05 }}
                            className="mb-1"
                          >
                            <NavLink
                              to={subProject.path}
                              className={({ isActive }) =>
                                `block p-2 rounded text-sm ${
                                  isActive ? "bg-gray-700" : "hover:bg-gray-800"
                                } transition-colors`
                              }
                              onClick={() => setIsOpen(false)}
                            >
                              {subProject.name}
                            </NavLink>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
