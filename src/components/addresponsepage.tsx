import { A, useLocation } from "@solidjs/router";
import addmain from "../img/addmain.svg";

export default function Addresponsepage() {
  const location = useLocation();
  return (
    <div class="bg-white rounded-lg shadow-md p-6 border-blue-500 flex flex-col border-2 w-full mb-6">
    <div class="xs:flex-row sm:flex-row md:flex-row lg:flex xl:flex justify-between">
          <div class="w-full">
     <label for="text" class="block text-xl font-medium text-gray-700 mb-4">Желаемая цена?</label>
                  <input type="text" id="text" name="text" class="mt-1 mb-12 block w-full border-2
                   border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 
                   placeholder-center" placeholder="Впишите желаемую цену:" />
                   <label for="text" class="block text-xl font-medium text-gray-700 mb-4">Примечание/Информация</label>
                  <textarea id="text" name="text" class="mt-1 block h-96 w-full border-2 border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Если всё хорошо, пишем что всё хорошо, если всё  плохо, пишем недостатки и почему так случилось:" />
    </div>
    
    <div  class="w-full">
    <label for="text" class="block text-xl mb-[18%] ml-4 font-medium text-gray-700">Данные о вас</label>
    <div class="xs:flex-row sm:flex-row md:flex lg:flex xl:flex w-full">
    
    
    
     <div class="w-full xs:mx-0 sm:mx-0 md:mx-4 lg:mx-4 xl:mx-4">
    <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Специализация</label>
    <input type="text" id="text" name="text" class="mt-1 mb-6 block w-full border-2 pb-1.5 border-blue-500 rounded pt-1
     pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваша специализация:" />
     <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Ссылка на портфолио</label>
    <input type="text" id="text" name="text" class="mt-1 block w-full mb-6 border-2 pb-1.5 border-blue-500 rounded pt-1
     pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ссылка на ваше портфолио:" />
     <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Ваш опыт работы</label>
    <input type="text" id="text" name="text" class="mt-1 block w-full mb-6 border-2 pb-1.5 border-blue-500 rounded pt-1
     pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваш опыт работы:" />
    </div>
    
    
    
    <div class="w-full">
    <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Пол</label>
    <input type="text" id="text" name="text" class="mt-1 mb-6 block w-full border-2 pb-1.5 border-blue-500 rounded pt-1
     pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваш пол:" />
     <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Номер телефона</label>
    <input type="text" id="text" name="text" class="mt-1 mb-6 block w-full border-2 pb-1.5 border-blue-500 rounded pt-1
     pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваш номер телефона:" />
     <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Email</label>
    <input type="text" id="text" name="text" class="mt-1 block w-full mb-6 border-2 pb-1.5 border-blue-500 rounded pt-1
     pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваша почта:" />
    </div>
    
    </div>
    <A href="/main">
                <button type="button" class="mt-16 w-full xs:mx-0 sm:mx-0 md:mx-4 lg:mx-4 xl:mx-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl">Добавить отклик</button>
              </A>
    </div>
    </div>
    
    </div>
  );
}
