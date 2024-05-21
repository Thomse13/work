import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import Nav from "~/components/Nav";
import Maincomponent from "~/components/Maincomponent";
import Cardmain from "~/components/Cardmain";
import data from "../data/data.json"; 

export default function Main() {
  return (
    <div class="flex justify-between">
      <Nav />
      <div class="m-10 w-[80%]">
        <Maincomponent />
        <Cardmain data={data} />
      </div>
    </div>
  );
}
