"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../../components/common/navbar";  // adjust if path differs
import Footer from "../../components/common/FooterSection";

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFooterRoutes = ["/projects"];

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </>
  );
}