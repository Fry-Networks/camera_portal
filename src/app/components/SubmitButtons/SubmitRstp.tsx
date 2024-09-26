import { submitRtspUrl } from "@/app/server/Rtsp";
import { useWallet } from "@txnlab/use-wallet";

export function SubmitRstpButton({
  valid,
  rtspUrl,
  minerKey,
  updateMessage,
  disappearInput,
}: {
  valid?: boolean;
  rtspUrl: string;
  minerKey: string;
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void;
  disappearInput: Function;
}) {
  const { activeAddress } = useWallet();

  const isValidMiner = /^([A-Z]{2,6})-[A-Z0-9]{31,33}$/i.test(minerKey);

  const handleGmcSubmit = async (
    
    updateMessage: Function,
    disappearInput: Function,
    activeAddress: string
  ) => {
    disappearInput(true);
    updateMessage({ message: "Submitting Key...", color: "white" });

    try {
      const response = await submitRtspUrl(rtspUrl,minerKey,activeAddress);
      updateMessage(response?.data);
    } catch (error) {
      console.error("Error submitting Gmc key:", error);
      updateMessage({
        message: "Error submitting key.",
        color: "red",
      });
    } finally {
      disappearInput(false);
    }
  };

  return (
    <button
      onClick={() =>
        handleGmcSubmit( updateMessage,disappearInput,activeAddress!)
      }
      className={`py-4 px-6 text-base font-medium rounded-lg focus:outline-none ${
        isValidMiner ? "bg-[#00FFFF] cursor-pointer" : "bg-gray-400 cursor-not-allowed"
      }`}
      disabled={!isValidMiner}
    >
      Submit
    </button>
  );
}
