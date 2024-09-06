import { logo } from "../constants/assets";

export default function Account() {
  return (
    <div>
      <nav className="w-[100vw] h-[95px] text-white bg-[#301212]/60 flex items-center absolute z-10">
        <div className="relative w-[115px] h-[74px] m-5 ml-12">
          <img src={logo} alt="logo" className="w-full h-full object-center" />
        </div>
      </nav>

      <div className="bg-bgNav w-full h-[328px] bg-cover bg-center opacity-60">
        {/* Keep this div empty to act as pseudo element with background image */}
      </div>
    </div>
  );
}
