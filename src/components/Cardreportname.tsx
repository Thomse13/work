import { A, useLocation } from "@solidjs/router";
import verf from "../img/verf.svg"


export default function Cardreportname() {
  const location = useLocation();
  return (
    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col border-2 mb-6 mt-6 w-full mx-6">
          <p class="text-[#565CFE] text-xl mb-2">Статус: удачно</p>
    <div class="flex justify-between items-center mb-4">
        <a href="/reportifo"><h2 class="text-black font-bold text-2xl">Создание интернет магазина</h2></a>
        <div class="space-x-2 items-center text-black">
            12.12.12
        </div>
    </div>
    <div class="mt-2 text-sm text-gray-400 flex items-center">ООО Генератор рандомных слов <img class="pl-1 w-5" src={verf} alt="Icon 1"/></div>
      <div class="text-sm text-gray-400 mb-6">Клиент: Зубенко М.П</div>

   
</div>

  );
}
