import React, { ReactNode, useEffect, useRef, useState } from "react";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <main>{children}</main>
    </div>
  );
}

export default Layout;
