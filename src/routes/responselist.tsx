import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import Responselistpage from "~/components/Responselistpage";
export default function Responselist() {
  return (
    <div>

    <div class="flex justify-between w-full">
        <Nav/>
        <div class="m-6 w-[80%]">
        <Responselistpage/>
        </div>
     
</div>






    </div>
  );
}
