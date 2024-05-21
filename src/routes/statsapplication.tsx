import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import Responselistpage from "~/components/Responselistpage";
import Statisticapplicationpage from "~/components/statisticapplicationpage";
export default function Statsapplication() {
  return (
    <div>

  <div class="flex justify-between w-full">
        <Nav/>
        <div class="m-10 w-[80%]">
        <Statisticapplicationpage/>
        </div>
</div>




    </div>
  );
}
