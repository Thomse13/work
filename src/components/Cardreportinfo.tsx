import { A, useLocation } from "@solidjs/router";
import ready_icon from "../img/ready.svg";
import delete_icon from "../img/delete.svg";
import conf_icon from "../img/conf.svg";
import verf from "../img/verf.svg";
import exp from "../img/exp.svg";

export default function Cardreportinfo() {
  const location = useLocation();
  return (
    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col border-2 mb-6 w-full mx-6">
      <p class="text-2xl font-semibold mb-4 text-[#565CFE]">Примечание</p>
      <p class="mb-6">
        Идейные соображения высшего порядка, а также высокотехнологичная концепция
        общественного уклада позволяет выполнить важные задания по разработке
        инновационных методов управления процессами. Идейные соображения высшего
        порядка, а также понимание сути ресурсосберегающих технологий в значительной
        степени обусловливает важность направлений прогрессивного развития. Каждый
        из нас понимает очевидную вещь: дальнейшее развитие различных форм деятельности
        говорит о возможностях новых принципов формирования материально-технической
        и кадровой базы.
      </p>
      <p class="mb-12">
        Наше дело не так однозначно, как может показаться: начало повседневной работы
        по формированию позиции играет определяющее значение для системы обучения
        кадров, соответствующей насущным потребностям! Таким образом, консультация с
        широким активом однозначно определяет каждого участника как способного
        принимать собственные решения касаемо экономической целесообразности
        принимаемых решений. Учитывая ключевые сценарии поведения, консультация с
        широким активом способствует повышению качества прогресса профессионального
        сообщества.
      </p>
      <div class="flex flex-col mb-6">
        <h1 class="text-xl mb-2 font-bold">Контакты</h1>
        <p><span class="font-semibold">Имя:</span> Владимир</p>
        <p><span class="font-semibold">Номер:</span> 89756365726</p>
        <p><span class="font-semibold">Email:</span> hhruegeneto@gmail.com</p>
      </div>
      <p class="text-2xl text-[#565CFE] mb-6">Ссылка: <a href="https://fish-text.ru/" class="text-[#565CFE] hover:underline">https://fish-text.ru/</a></p>
    </div>
  );
}
