import React from "react";

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen `}>
      <div className="bg-off-white dark:bg-navy-blue text-navy-blue dark:text-off-white transition-colors duration-300">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
