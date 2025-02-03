// import React from 'react'
// import { Outlet,Link } from 'react-router-dom'

// const Info = () => {
//     return (
//         <div className="mx-[10%]">
//             <div className=' bg-blue-300'>
//                 <h1 className='text-[50px] font-bold text-center m-5'>Risc V is The Future!</h1>
//                 <div className='scroll-smooth focus:sroll-auto'>
//                     <p>RISC-V is an open-source and free architecture standard. Just as we see many software companies thriving because the software stack is free and open-source, RISC-V has made hardware architecture free and open-source, allowing anyone to develop hardware. This innovation positions RISC-V as the future of computing.</p>
//                 </div>

//             </div>
//             <div>
//                 <h1 className='text-[50px] font-bold text-center m-5'>
//                     Why Risc-V?
//                 </h1>
//                 <p>
//                     CPU design requires design expertise in several specialties: electronic digital logic, compilers, and operating systems. To cover the costs of such a team, commercial vendors of processor intellectual property (IP), such as Arm Ltd. and MIPS Technologies, charge royalties for the use of their designs and patents. They also often require non-disclosure agreements before releasing documents that describe their designs' detailed advantages. In many cases, they never describe the reasons for their design choices. RISC-V was begun with a goal to make a practical ISA that was open-sourced, usable academically, and deployable in any hardware or software design without royalties.
//                 </p>

//                 <h1 className='text-[50px] font-bold text-center m-5'>Power of RISC-V Architecture for Next-generation</h1>
//                 <p>The PRAN CPU Series is a cutting-edge RISC-V processor line designed for versatility, ranging from single-cycle to out-of-order execution CPUs, within a high-performance heterogeneous SoC. By leveraging the latest RISC-V RVA23 profile, PRAN integrates advanced features like vector operations, atomic instructions, and floating-point support, optimizing it for AI, machine learning, and data center applications. It includes enhanced virtualization and safety protocols suitable for automotive and industrial standards. As an open-hardware initiative, PRAN fosters innovation through industry partnerships and global contributions, pushing the boundaries of shared knowledge in high-performance computing.</p>
//             </div>
//         </div>
//     )
// }

// export default Info
// ====================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Info = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <div>
      {/* Header Section with Learn Button */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <motion.button
            className="text-blue-500 font-semibold text-lg hover:text-blue-700"
            onMouseEnter={() => setIsSidePanelOpen(true)}
            onMouseLeave={() => setIsSidePanelOpen(false)}
            whileHover={{ scale: 1.1 }}
          >
            Learn
          </motion.button>
          {/* Add other header elements here */}
        </div>
      </header>

      {/* Side Panel */}
      <motion.div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 ${isSidePanelOpen ? 'block' : 'hidden'}`}
        onMouseEnter={() => setIsSidePanelOpen(true)}
        onMouseLeave={() => setIsSidePanelOpen(false)}
        initial={{ x: '-100%' }}
        animate={{ x: isSidePanelOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="w-64 p-6">
          <h2 className="text-xl font-bold mb-4">Learn</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">By Goal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Take a Course</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Earn a Certificate</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Earn a Degree</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">By Topic</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Artificial Intelligence</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Data Science</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Finance</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Business Administration</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Cybersecurity</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Computer Science</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">View All Topics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Career Resources</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Schools & Partners</a></li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="mx-[10%] py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Your existing content here */}
        <motion.div
          className="bg-blue-500 text-white rounded-lg shadow-lg p-8 mb-10 text-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-[50px] font-bold mb-5"
            whileHover={{ scale: 1.05 }}
          >
            Building a RISC-V CPU Core
          </motion.h1>
          <motion.p className="text-lg leading-relaxed mb-5" variants={itemVariants}>
            Create a RISC-V CPU with modern open-source circuit design tools, methodologies, and microarchitecture, all from your browser.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Info;