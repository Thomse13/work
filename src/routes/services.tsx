import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import Responselistpage from "~/components/Responselistpage";
import Servicespage from "~/components/servicespage";
export default function Services() {
  return (
    <div>

  <div class="flex justify-between w-full">
        <Nav/>
        <div class="m-10 w-[80%]">
        <Servicespage/>
        </div>
</div>




    </div>
  );
}
