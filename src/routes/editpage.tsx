import { A } from "@solidjs/router";
import Editorpage from "~/components/Editorpage";
import Nav from "~/components/Nav";
import editpage from "../img/editpage.svg";
export default function EditPage() {
    return(
        <div class="flex  justify-between w-full h-screen">
            <Nav/>
            <div class="m-6 w-[80%]">
      <p class="text-4xl mb-4 flex items-center">Редактирование заявки <img src={editpage} class="pt-2 pl-2" alt="add" /></p>
          <Editorpage/>
        
      </div>
        </div>

        
    );


}