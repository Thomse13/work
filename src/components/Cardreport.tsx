import ready_icon from "../img/ready.svg";
import delete_icon from "../img/delete.svg";
import conf_icon from "../img/conf.svg";
import verf from "../img/verf.svg";
import exp from "../img/exp.svg";
import { A } from "@solidjs/router";

interface CardReportData {
  title: string;
  status: string;
  company: string;
  manager: string;
}

export default function Cardreport(props: { data: CardReportData[] }) {
  return (
    <>
      {props.data.map((item, index) => (
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col border-2 w-full mb-6">
          <p class="text-[#565CFE] text-xl mb-2">Статус: {item.status}</p>
          <A href="/reportifo">
            <h2 class="text-black font-medium text-2xl mb-6">{item.title}</h2>
          </A>

          <div class="mt-2 text-sm text-gray-400 flex items-center">
            {item.company} <img class="pl-1 w-5" src={verf} alt="Icon 1" />
          </div>
          <div class="text-sm text-gray-400 ">Менеджер: {item.manager}</div>

          <div class="mt-4 flex justify-between items-center">
          <A href="/reportifo"> <button class="bg-cyan-400 text-white py-2 px-12 rounded hover:bg-blue-600">
              Подробнее
            </button></A>
          </div>
        </div>
      ))}
    </>
  );
}
