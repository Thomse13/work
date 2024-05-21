import { A, useLocation } from "@solidjs/router";

export default function Responselistpage() {
  const location = useLocation();
  return (
    <div class="w-full overflow-x-auto">
      <p class="text-3xl mb-6 mt-6 ml-6 md:ml-0 text-black font-medium">Просмотр Откликов</p>
      <table class="w-full table-auto">
        <thead>
          <tr class="border-b border-black">
            <th class="px-4 md:px-8 py-2">ФИО</th>
            <th class="px-4 md:px-8 py-2">Должность</th>
            <th class="px-4 md:px-8 py-2">Опыт</th>
            <th class="px-4 md:px-8 py-2">Email</th>
            <th class="px-4 md:px-8 py-2">Номер</th>
            <th class="px-4 md:px-8 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr>
              <td class="w-full py-2 border-b border-black text-center">Иванов Иван Иванович</td>
              <td class="w-full py-2 border-b border-black text-center">Дизайнер</td>
              <td class="w-full py-2 border-b border-black text-center">2 Года</td>
              <td class="w-full py-2 border-b border-black text-center">mizantrop@gmail.com</td>
              <td class="w-full py-2 border-b border-black text-center">+79566581758</td>
              <td class="w-full py-2 border-b border-black text-center">
                <a href="/responseinfo">
                  <button class="bg-cyan-400 text-white py-2 px-8 rounded hover:bg-blue-600">Посмотреть</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="flex justify-center my-4">
        <nav class="inline-flex">
          <a href="#" class="px-3 py-1 rounded-l-md bg-cyan-400 text-white">&laquo;</a>
          {[...Array(5)].map((_, index) => (
            <a href="#" class="px-3 py-1 bg-cyan-400 text-white">{index + 1}</a>
          ))}
          <a href="#" class="px-3 py-1 rounded-r-md bg-cyan-400 text-white">&raquo;</a>
        </nav>
      </div>
    </div>
  );
}
