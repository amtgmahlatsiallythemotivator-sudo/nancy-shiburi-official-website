import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nancy Shiburi | Official Gospel Music Website",
  description: "Discover the music and ministry of Nancy Katrina Shiburi, a gospel artist from Mookgophong, Limpopo, South Africa. Listen, connect, or enquire about bookings.",
  keywords: ["Nancy Shiburi", "Nancy Katrina Shiburi", "South African Gospel Artist", "Limpopo Gospel Singer", "Mookgophong Gospel Artist", "Gospel Music South Africa"],
  openGraph: { title: "Nancy Shiburi | A Voice of Faith, Hope and Inspiration", description: "Singing with Purpose, Spreading Faith, and Touching Lives Through Gospel Music.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
