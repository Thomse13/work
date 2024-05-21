import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/addmain.svg"
import Cardmain from "~/components/Cardmain";
import Paneladdreport from "~/components/Paneladdreport";
export default function Addreport() {
  return (
    <div>

    <div class="flex justify-between w-full h-screen">
        <Nav/>
        <div class="m-6 w-[80%]">
      <p class="text-4xl mb-4 flex items-center">Добавление отчёта <img src={add} class="pt-2 pl-2" alt="add" /></p>
          <Paneladdreport/>
        
      </div>
</div>






    </div>
  );
}
