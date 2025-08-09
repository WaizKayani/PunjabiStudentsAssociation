import { ReactNode } from "react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Announcement } from "@/components/site/announcement";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Announcement />
      <Header />
      {children}
      <Footer />
    </>
  );
}


