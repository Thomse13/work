import { A, useLocation } from "@solidjs/router";



export default function Cardapplication() {
  const location = useLocation();
  return (
    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col border-2 mb-6 w-full mx-6">
    <div class="flex justify-between items-center mb-4">
        <a href="/application"><h2 class="text-black font-bold text-2xl">Создание интернет магазина</h2></a>
        <div class="space-x-2 items-center text-black">
            12.12.12
        </div>
    </div>
    <div class="text-black xs:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl">Менеджер: Зубенко М.П</div>
    <div class="mt-2 text-black xs:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl">Клиент: неизвестно</div>

    <div class="mt-4 flex flex-col items-left xl:flex-row sm:flex-row md:flex-row lg:flex-row">
  <button class="flex-grow bg-cyan-400 text-white py-2 mb-2 sm:mr-6 sm:mb-0 px-8 rounded hover:bg-blue-600 text-sm">Откликнуться</button>
  <button class="flex-grow bg-white text-black border-2 py-2 mb-2 sm:mr-6 sm:mb-0 rounded hover:bg-gray-400 text-sm">Посмотреть контакты</button>
  <A href="/statsapplication"><button class="flex-grow bg-cyan-400 w-full text-white py-2  px-8 rounded hover:bg-blue-600 text-sm">Статистика</button></A>
</div>


</div>

  );
}
