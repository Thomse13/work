import { A, useLocation } from "@solidjs/router";
import green from "../img/greencube.png";
import red from "../img/redcube.png";
import blue from "../img/bluecube.png";
import redstat from "../img/redstat.png";
import greenstat from "../img/greenstat.png";
import bluestat from "../img/bluestat.png";


export default function statisticapplicationpage() {
  const location = useLocation();
  return (
    <div>
    <div class="w-full m-6">
    <p class="text-3xl sm:text-4xl md:text-5xl mb-6">Статистика Заявки</p>
    <div class="flex flex-col sm:flex-row justify-between gap-4">
        <div class="border-2 border-[#565CFE] p-6 text-lg sm:text-xl font-semibold mb-6 sm:mb-0">
            <div class="flex items-center mb-4">
                <img src={green} alt="" class="w-8 h-8 mr-2" />
                <div>
                    <p>Выполненно по плану: 58</p>
                    <div class="w-24 h-2 bg-green-500 mt-1"></div> 
                </div>
            </div>
            <div class="flex items-center mb-4">
                <img src={red} alt="" class="w-8 h-8 mr-2" />
                <div>
                    <p>Согласовывается: 2</p>
                    <div class="w-2 h-2 bg-red-500 mt-1"></div> 
                </div>
            </div>
            <div class="flex items-center mb-4">
                <img src={blue} alt="" class="w-8 h-8 mr-2" />
                <div>
                    <p>В процессе: 14</p>
                    <div class="w-12 h-2 bg-blue-500 mt-1"></div> 
                </div>
            </div>
            <p class="text-[#565CFE] pt-8">Информация</p>
            <p class="pt-4">На данный момент обрабатывается: 12</p>
            <p class="pt-4">На данный момент Открыто: 9</p>
            <p class="pt-4">На данный момент обработано: 7</p>
        </div>
        <div class="border-b border-l border-1 border-[#565CFE] hidden sm:flex justify-between w-full items-end mt-6 sm:mt-0">
    <div class="w-[20%] h-full mx-4 bg-red-500 align-self-end"></div>
    <div class="w-[20%] h-[68%] mx-4 bg-green-500 align-self-end"></div>
    <div class="w-[20%] h-[50%] mx-4 bg-blue-500 align-self-end"></div>
</div>



    </div>
</div>
</div>
  );
}
