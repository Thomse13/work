import { A, useLocation } from "@solidjs/router";
import profile from "../img/profile.png";

export default function Profilepage() {
  const location = useLocation();
  return (
    <div class="w-full md:w-[80%]">
  <div class="flex flex-col md:flex-row m-6 md:m-12">
    <img src={profile} alt="" class="w-full md:w-auto md:mr-6 mb-6 md:mb-0" />
    <form action="#" class="w-full md:pl-6">
        <input type="text" id="text" name="text" class="border-b border-black w-full py-2 mb-4 md:mb-8" placeholder="Имя:" />
        <input type="text" id="text" name="text" class="border-b border-black w-full py-2 mb-4 md:mb-8" placeholder="Фамилия:" />
        <input type="text" id="text" name="text" class="border-b border-black w-full py-2 mb-4 md:mb-8" placeholder="Номер телефона:" />
        <input type="text" id="text" name="text" class="border-b border-black w-full py-2 mb-4 md:mb-8" placeholder="Email:" />
        <div class="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-8">
            <button type="button" class="w-full md:w-auto py-2 px-4 rounded-full shadow-sm text-black border-2 border-black bg-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl mb-2 md:mb-0 mr-0 md:mr-4">Изменить фото</button>
            <p class="w-full md:w-auto text-xl sm:text-xl md:text-xl lg:2xl text-center md:text-left">Файл не выбран</p>
        </div>
        <A href="/main">
            <button type="button" class="w-full md:w-[50%] py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl">Сохранить</button>
        </A>
    </form>
  </div>
</div>

  );
}
