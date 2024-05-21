import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import Responselistpage from "~/components/Responselistpage";
import Statisticpage from "~/components/statisticpage";
export default function Statistic() {
  return (
    <div>

  <div class="flex justify-between w-full">
        <Nav/>
        <div class="m-10 w-[80%]">
        <Statisticpage/>
        </div>
</div>




    </div>
  );
}
