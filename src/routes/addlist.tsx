import { A } from "@solidjs/router";
import Addmain from "~/components/Addmain";
import Counter from "~/components/Counter";
import Nav from "~/components/Nav";
import editpage from "../img/addmain.svg"
export default function Addlist() {
  return (
    <div class="flex justify-between w-full h-screen">
      <Nav/>
      <div class="m-6 w-[80%]">
      <p class="text-4xl mb-4 flex items-center">Добавление заявки <img src={editpage} class="pt-2 pl-2" alt="add" /></p>
          <Addmain/>
        
      </div>
     
    </div>
  );
}
