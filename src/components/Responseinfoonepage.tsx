import { useLocation } from "@solidjs/router";
import verf from "../img/verf.svg";

export default function Responseinfoonepage() {
  const location = useLocation();

  return (
    <div class="ml-4 md:ml-12">
  <div class="mt-8 mb-16 flex flex-col md:flex-row items-left justify-center md:justify-start md:gap-4">
  <button class="bg-cyan-400 text-white py-2 px-6 md:px-12 rounded hover:bg-blue-600 mb-2 md:mb-0">Принять</button>
  <button class="bg-red-600 text-white py-2 px-6 md:px-12 rounded hover:bg-red-400 mb-2 md:mb-0">Отказать</button>
  <button class="bg-white border-2 border-black text-black py-2 px-6 md:px-12 rounded hover:bg-gray-400">Отложить</button>
</div>



      <div class="flex flex-col md:flex-row justify-between">
        <div class="w-full md:w-auto">
          <p class="text-3xl font-medium pb-2">Иванов Иван Иванович</p>
          <p class="text-xl text-gray-500 pb-6">Пол: Мужской</p>
          <p class="text-3xl font-medium pb-2">Контакты</p>
          <p class="text-xl text-gray-500 pb-2">+7(963) 53 (424) 53</p>
          <p class="text-xl text-gray-500 pb-6">mizantrop2@mail.ru</p>
          <p class="text-3xl font-medium pb-2">Специализация</p>
          <p class="text-xl text-gray-500 pb-2">Тестировщик</p>
          <p class="text-xl text-gray-500 pb-6">Опыт работы: 5 лет</p>
          <p class="text-3xl font-medium pb-2">Ссылка на портфолио</p>
          <p class="text-xl text-gray-500">https://fish-text.ru/</p>
        </div>
        <div class="w-full md:w-7/12 mt-8 md:mt-0 md:ml-12">
          <p class="text-3xl font-medium pb-2">Комментарий пользователя</p>
          <p class="text-xl w-full text-gray-500 pb-6">
            Имеется спорная точка зрения, 
            гласящая примерно следующее: 
            непосредственные участники 
            технического прогресса лишь добавляют
            фракционных разногласий и в равной 
            степени предоставлены сами себе. Как 
            уже неоднократно упомянуто, действия 
            представителей оппозиции, превозмогая
            сложившуюся непростую экономическую 
            ситуацию, объективно рассмотрены
            соответствующими инстанциями.
          </p>
          <p class="text-xl w-full text-gray-500 pb-6">
            Банальные, но неопровержимые выводы,
            а также акционеры крупнейших 
            компаний освещают чрезвычайно 
            интересные особенности картины в 
            целом, однако конкретные выводы, 
            разумеется, объективно рассмотрены 
            соответствующими инстанциями.
          </p>
        </div>
      </div>
    </div>
  );
}
