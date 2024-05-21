import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreportname from "~/components/Cardreportname";
import Cardreportinfo from "~/components/Cardreportinfo";
export default function Reportinfo() {
  return (
    <div>

    <div class="flex justify-between">
        <Nav/>
        <div class="m-10 w-[80%]">
        <Cardreportname/>
        <Cardreportinfo/>
        </div>
</div>






    </div>
  );
}
