import { A } from "@solidjs/router";
import Nav from "~/components/Nav";
import add from "../img/add.svg"
import Cardmain from "~/components/Cardmain";
import Profilepage from "~/components/Profilepage"
export default function Profile() {
  return (
    <div>

    <div class="flex justify-between h-screen">
        <Nav/>
        <div class="m-6 w-[80%]">
        <Profilepage/>
      </div>
</div>






    </div>
  );
}
