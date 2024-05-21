import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardreport from "~/components/Cardreport";
import Responseinfoonepage from "~/components/Responseinfoonepage";
import Responseinfotwopage from "~/components/Responseinfotwopage";
export default function Responseinfo() {
  return (
    <div>

    <div class="flex justify-between w-full">
        <Nav/>
        <div class="m-6 w-[80%]">
        <Responseinfoonepage/>
</div>
</div>
    </div>
  );
}
