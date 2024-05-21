import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import report from "../data/report.json";
export default function Reportpage() {
  return (
    <div>

    <div class="flex justify-between">
        <Nav/>
        <div class="m-6 w-[80%]">
          <div class="flex justify-between mb-6">
        <p class="text-5xl flex items-center">Отчёты</p>
        <A href="/addreport"><img src={add} alt="profile"/></A>
        </div>
        <Cardreport data={report}/>
        
      </div>
</div>






    </div>
  );
}
