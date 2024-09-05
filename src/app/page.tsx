"use client";
import { useEffect } from "react";
import Modal from "react-modal";
import Navbar from "./components/Navbar";
import Footer from "./footer";
import Wallet from "./wallet";
export default function Home() {
  useEffect(() => {
    Modal.setAppElement("#home");
  }, []);
  return (
    <main className="relative w-[100vw] text-black bg-[#201c1c]" id="home">
      <Navbar />
      <div className="absolute top-48 left-5">
        <h1 className="text-4xl text-left text-white align-middle">
          Camera Portal
        </h1>
      </div>
      <Wallet />
      <Footer />
    </main>
  );
}
