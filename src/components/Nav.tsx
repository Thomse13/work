import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import profile from "../img/Vector.svg";
import zayv from "../img/Vector (2).svg";
import stats from "../img/dashboard.svg";
import uslug from "../img/Vector (1).svg";
import client from "../img/Group 57.svg";
import otchet from "../img/Group 58.svg";
import add from "../img/Group 59.svg";
import exit from "../img/logout.svg";

export default function Nav() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <div>
      <div class="flex justify-between items-center">
        <button
          onClick={toggleMenu}
          class="block lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      
      </div>

      <div
        class={`${
          isMenuOpen() ? "flex" : "hidden"
        } lg:flex lg:flex-col fixed justify-between items-center xs:w-full sm:w-[30%] md:w-[25%] lg:w-[16%] xl:w-[15%] 2xl:w-[15%] h-full bg-[#565CFE] px-8`}
      >
        <nav class="mt-40 h-full">
          <a href="/profile" class="flex items-center gap-1 self-stretch mb-6 px-4">
            <img src={profile} alt="profile" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Профиль
            </p>
          </a>
          <a href="/main" class="flex items-center gap-1 self-stretch mb-6 px-4">
            <img src={zayv} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Заявки
            </p>
          </a>
          <a
            href="/statistic"
            class="flex items-center gap-1 self-stretch mb-6 px-4"
          >
            <img src={stats} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Статистика
            </p>
          </a>
          <a href="/services" class="flex items-center gap-1 self-stretch mb-6 px-4">
            <img src={uslug} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Услуги
            </p>
          </a>
          <a href="/clients" class="flex items-center gap-1 self-stretch mb-6 px-4">
            <img src={client} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Клиенты
            </p>
          </a>
          <a
            href="/reportpage"
            class="flex items-center gap-1 self-stretch mb-6 px-4"
          >
            <img src={otchet} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Отчёты
            </p>
          </a>
          <a
            href="/addlist"
            class="flex items-center gap-1 self-stretch mb-6 px-4"
          >
            <img src={add} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Добавление
            </p>
          </a>
          <a href="/" class="flex items-center gap-1 self-stretch mb-6 px-4">
            <img src={exit} alt="zayv" />
            <p class="block py-2 text-white text-xl hover:text-[#00D1FF]">
              Выход
            </p>
          </a>
        </nav>
      </div>
    </div>
  );
}
