"use client";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import {
  PROVIDER_ID,
  WalletProvider,
  reconnectProviders,
  useInitializeProviders,
  useWallet,
} from "@txnlab/use-wallet";
import { WalletConnectModalSign } from "@walletconnect/modal-sign-html";
import { useEffect, useState } from "react";
import Connect from "./components/Connect";
import { RSTPModal } from "./components/KeyModals/RSTPModal";
import OpenButton from "./components/OpenButton";

export default function Wallet() {
  const walletProviders = useInitializeProviders({
    providers: [
      { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
      { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
      { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
      { id: PROVIDER_ID.MYALGO, clientStatic: MyAlgoConnect },
      {
        id: PROVIDER_ID.WALLETCONNECT,
        clientStatic: WalletConnectModalSign,
        clientOptions: {
          projectId: "74761852c2f607c540bb116a1bc9f011",
          metadata: {
            name: "Fry Foundation",
            description: "Authenticate yourself",
            url: "https://weather.fryfoundation.com",
            icons: ["https://walletconnect.com/walletconnect-logo.png"],
          },
        },
      },
    ],
  });
  const [isRSTPModalOpen, setRSTPModalOpen] = useState(false);
  const { activeAddress } = useWallet();

  const showGmcMapModal = () => {
    setRSTPModalOpen(true);
  };
  useEffect(() => {
    if (walletProviders !== null) {
      console.log(walletProviders);
      reconnectProviders(walletProviders);
    }
  }, []);
  if (!activeAddress) {
    return (
      <div className="flex justify-center items-center text-center text-white w-[90vw] bg-[#201c1c] m-auto p-5">
        <WalletProvider value={walletProviders}>
          <div className="flex flex-col p-5 bg-[#84808a] rounded-[10px] w-[90vw] shadow-md">
            <Connect />
          </div>
        </WalletProvider>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center text-center text-white w-[90vw] bg-[#201c1c] m-auto p-5">
      <WalletProvider value={walletProviders}>
        <div className="flex flex-col p-5 bg-[#84808a] rounded-[10px] w-[100vw] shadow-md">
          <Connect />
          <div className="flex justify-center items-center gap-4">
            <OpenButton
              showModal={showGmcMapModal}
              text="Ecowitt Camera"
              logo="/ecowitt.jpg"
            />
            <RSTPModal
              isOpen={isRSTPModalOpen}
              setOpen={setRSTPModalOpen}
            />
          </div>
        </div>
      </WalletProvider>
    </div>
  );
}
