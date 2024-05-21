import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import clients from "../data/clients.json";
import Clientpage from "~/components/Clientpage";
export default function Clients() {
  return (
    <div>

    <div class="flex justify-between">
        <Nav/>
        <div class="m-6 w-[80%]">
          <div class="flex justify-between mb-6">
        <p class="text-5xl flex items-center">Клиенты</p>
        <A href="/clientadd"><img src={add} alt="profile"/></A>
        </div>
        <Clientpage data={clients}/>
        
      </div>
</div>






    </div>
  );
}
