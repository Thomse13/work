import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/addmain.svg"
import Cardmain from "~/components/Cardmain";
import Addresponsepage from "~/components/addresponsepage";
export default function Addresponse() {
  return (
    <div>

    <div class="flex w-full justify-between h-screen">
        <Nav/>
        <div class="m-6 w-[80%]">
      <p class="text-4xl mb-4 flex items-center">Добавление отклика <img src={add} class="pt-2 pl-2" alt="add" /></p>
          <Addresponsepage/>
        
      </div>
</div>






    </div>
  );
}
