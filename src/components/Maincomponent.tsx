import { A, useLocation } from "@solidjs/router";
import email_icon from "../img/email_1.svg";
import fire_icon from "../img/fire_1.svg";
import clock_icon from "../img/clock_1.svg";
import add from "../img/add.svg";

export default function Maincomponent() {
  const location = useLocation();
  return (
    <div class="xl:flex 2xl:flex lg:flex md:flex-row sm:flex-row xs:flex-row">

      <p class="text-5xl mb-2">Заявки</p>
<div class="2xl:flex xl:flex lg:flex md:flex xs:flex-row sm:flex-row 2xl:m-12 xl:m-12 lg:m-12 md:m-12 xs:mb-1 sm:mb-1 items-center gap-6">
<div class="w-full xl:flex 2xl:flex lg:flex md:flex sm:flex-row xs:flex-row gap-6 ">
      <div class="bg-green-500  p-3 rounded flex items-center justify-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-2 xs:mb-2 sm:mb-2">
  <img src={email_icon} class="w-full xl:pl-0 2xl:pl-0 lg:pl-2 md:pl-6 sm:pl-12 xs:pl-12" alt="profile"/>
  <div class="flex-col pl-2 pr-12">
  <div class="text-white text-2xl font-bold mb-1">4 Заявки</div>
  <div class="text-white text-lg">Новые</div>
  </div>
</div>

<div class="bg-red-500 p-3 rounded flex items-center justify-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-2 xs:mb-2 sm:mb-2">
  <img src={fire_icon} class="w-full xl:pl-0 2xl:pl-0 lg:pl-2 md:pl-6 sm:pl-12 xs:pl-12" alt="profile"/>
  <div class="flex-col pl-2 pr-16">
  <div class="text-white text-2xl font-bold mb-1">4 Заявки</div>
  <div class="text-white text-lg">Срочные</div>
  </div>
</div>

<div class="bg-blue-500 p-0.5 rounded flex items-center justify-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-2 xs:mb-2 sm:mb-2">
  <img src={clock_icon} class="w-full xl:pl-0 2xl:pl-0 lg:pl-2 md:pl-6 sm:pl-12 xs:pl-12" alt="profile"/>
  <div class="flex-col pl-2 pr-16">
  <div class="text-white text-2xl font-bold mb-1">4 Заявки</div>
  <div class="text-white text-lg">Активные</div>
  </div>
</div>
    </div>
<A href="/addlist"><img src={add} alt="profile"/></A>
</div>





    </div>
  );
}
