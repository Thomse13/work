import { createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import ready_icon from "../img/ready.svg";
import delete_icon from "../img/delete.svg";
import conf_icon from "../img/conf.svg";
import verf from "../img/verf.svg";
import exp from "../img/exp.svg";

interface CardData {
  title: string;
  price: string;
  company: string;
  manager: string;
  experience: string;
  responses: number;
}

export default function Cardmain(props: { data: CardData[] }) {
  const location = useLocation();
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
      {props.data.map((item, index) => (
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col w-full border-2 mb-6">
         <div class="flex justify-between items-center mb-4 transition duration-300 ease-in-out">
  <A href="/application">
    <h2 class="text-green-500 text-2xl md:w-full">{item.title}</h2>
  </A>
  <div class="flex justify-center md:justify-end items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
    <A href="/addresponse" class="text-center md:text-left mb-1 md:mb-0">
      <img src={ready_icon} alt="Icon 1" />
    </A>
    <A href="/editpage" class="text-center md:text-left mb-1 md:mb-0">
      <img src={conf_icon} alt="Icon 2" />
    </A>
    <button class="focus:outline-none" onClick={() => setShowModal(true)}>
      <img src={delete_icon} alt="Icon 3" />
    </button>
  </div>
</div>
<div class="text-black text-2xl font-medium transition duration-300 ease-in-out">{item.price}</div>
<div class="mt-2 lg:text-sm md:text-xs xs:text-xs text-gray-400 flex items-center transition duration-300 ease-in-out">
  {item.company}
  <img class="pl-1 w-5" src={verf} alt="Icon 1" />
</div>
<div class="lg:text-sm md:text-xs xs:text-xs text-gray-400 transition duration-300 ease-in-out">Менеджер: {item.manager}</div>
<div class="text-sm text-gray-400 flex items-center mt-4 transition duration-300 ease-in-out">
  <img class="pr-1 w-5" src={exp} alt="Icon 1" />
  Опыт работы: {item.experience}
</div>
<div class="mt-4 xs:flex-row 2xl:flex xl:flex sm:flex md:flex lg:flex justify-between items-center transition duration-300 ease-in-out">
  <A href="/addresponse"><button class="bg-cyan-400 lg:text-sm md:text-xs xs:text-[0.7rem] lg:px-8 md:px-4 xs:px-2 text-white py-2 rounded hover:bg-blue-600">
    Откликнуться
  </button></A>
  <div class="text-black">
    <A class="2xl:text-lg xl:text-lg lg:text-sm md:text-sm xs:text-sm" href="/responselist">Откликнулось: {item.responses}</A>
  </div>
</div>

          {showModal() && (
         <div class="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-20 transition-opacity duration-300">
         <div class="bg-[#565CFE] p-6 rounded-lg shadow-xl transform transition-transform duration-300">
           <div class="flex justify-between items-center mb-4">
             <h2 class="text-xl text-white font-semibold">Подтверждение</h2>
           </div>
           <p class="text-white">Вы действительно хотите удалить данную заявку?</p>
           <div class="flex justify-end mt-4">
             <button class="bg-[#00D1FF] text-white py-2 px-4 rounded mr-4" onClick={() => setShowModal(false)}>Удалить</button>
             <button class="bg-white text-black py-2 px-4 rounded" onClick={() => setShowModal(false)}>Отмена</button>
           </div>
         </div>
       </div>
       
          )}
        </div>
      ))}
    </>
  );
}
