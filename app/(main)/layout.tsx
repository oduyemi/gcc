import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}