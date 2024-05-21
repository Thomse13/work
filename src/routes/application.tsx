import Cardapplication from "~/components/Cardapplication";
import Cardapplicationinfo from "~/components/Cardapplicationinfo";
import Nav from "~/components/Nav";

export default function application() {
    return (
      <div>
        <div class="flex justify-between">

<Nav/>
<div class="m-10 w-[80%]">

<Cardapplication/>
<Cardapplicationinfo/>
</div>
</div>
      </div>
    );
  }