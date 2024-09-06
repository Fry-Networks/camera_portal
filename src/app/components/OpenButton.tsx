
export default function OpenButton({ showModal, text, logo }: { showModal: Function, text: string, logo: string }) {
  return (
    <button onClick={() => showModal(true)}
    className="w-[200px] h-[200px] border-none flex items-center justify-center cursor-pointer rounded-[5px] bg-none my-1 mx-[2px]">
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={logo} alt="logo" className="w-4/5 a-auto mb-[5px]" />
        <span className="text-[12px] text-white text-center">{text}</span>
      </div>
    </button>
  );
}
