import { A, useLocation } from "@solidjs/router";
import addmain from "../img/addmain.svg";

export default function Addmain() {
  const location = useLocation();
  
  return (
    <div class="bg-white rounded-lg shadow-md p-6 border-blue-500 flex flex-col border-2 w-full mb-6">
<div class="xs:flex-row sm:flex-row md:flex-row lg:flex xl:flex justify-between">
      <div class="w-full">
 <label for="text" class="block text-xl font-medium text-gray-700 mb-4">Данные об работе</label>
              <input type="text" id="text" name="text" class="mt-1 mb-12 block w-full border-2
               border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 
               placeholder-center" placeholder="Впишите статус:" />
               <label for="text" class="block text-xl font-medium text-gray-700 mb-4">Примечание/Информация</label>
              <textarea id="text" name="text" class="mt-1 block h-96 w-full border-2 border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Если всё хорошо, пишем что всё хорошо, если всё 
плохо, пишем недостатки и почему так случилось:" />
</div>

<div  class="w-full">
<label for="text" class="block text-xl mb-[18%] ml-4 font-medium text-gray-700">Данные клиента</label>
<div class="xs:flex-row sm:flex-row md:flex lg:flex xl:flex w-full">



 <div class="w-full xs:mx-0 sm:mx-0 md:mx-4 lg:mx-4 xl:mx-4">
<label for="area" class="block text-xl font-medium text-gray-700 mb-4">Фамилия</label>
<input type="text" id="text" name="text" class="mt-1 mb-8 block w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваша Фамилия:" />
 <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Имя</label>
<input type="text" id="text" name="text" class="mt-1 block w-full mb-8 border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваше Имя:" />
 <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Отчество</label>
<input type="text" id="text" name="text" class="mt-1 block w-full mb-8 border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Ваше Отчество:" />
 <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Оклад</label>
<input type="text" id="text" name="text" class="mt-1 block w-full mb-8 border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Напишите сюда, сумму:" />

</div>



<div class="w-full">
<label for="area" class="block text-xl font-medium text-gray-700 mb-4">Пол</label>
<input type="text" id="text" name="text" class="mt-1 mb-8 block w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Название пола:" />
 <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Номер телефона</label>
<input type="text" id="text" name="text" class="mt-1 mb-8 block w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Номер телефона:" />
 <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Email</label>
<input type="text" id="text" name="text" class="mt-1 block w-full mb-8 border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Email:" />
 <label for="area" class="block text-xl font-medium text-gray-700 mb-4">Крайней срок</label>
<input type="date" id="date" name="date" class="mt-1 block w-full mb-8 border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Email:" />
</div>

</div>
<A href="/main">
            <button type="button" class="mt-12 w-full mx-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl">Добавить</button>
          </A>
</div>
</div>

</div>
  );
}
