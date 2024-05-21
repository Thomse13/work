import { A, useLocation } from "@solidjs/router";
import addmain from "../img/addmain.svg";

export default function Clientaddpage() {
  const location = useLocation();
  return (
    <div class="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500 w-full mb-6">
      <label for="text" class="block text-xl mb-4 font-medium text-gray-700">Данные клиента</label>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label for="surname" class="block text-xl font-medium text-gray-700 mb-2">Фамилия</label>
          <input type="text" id="surname" name="surname" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите фамилию" />
        </div>
        <div>
          <label for="name" class="block text-xl font-medium text-gray-700 mb-2">Имя</label>
          <input type="text" id="name" name="name" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите имя" />
        </div>
        <div>
          <label for="patronymic" class="block text-xl font-medium text-gray-700 mb-2">Отчество</label>
          <input type="text" id="patronymic" name="patronymic" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите отчество" />
        </div>
        <div>
          <label for="company" class="block text-xl font-medium text-gray-700 mb-2">Название Компании</label>
          <input type="text" id="company" name="company" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите название компании" />
        </div>
        <div>
          <label for="position" class="block text-xl font-medium text-gray-700 mb-2">Должность</label>
          <input type="text" id="position" name="position" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите должность" />
        </div>
        <div>
          <label for="inn" class="block text-xl font-medium text-gray-700 mb-2">ИНН</label>
          <input type="text" id="inn" name="inn" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите ИНН" />
        </div>
        <div>
          <label for="phone" class="block text-xl font-medium text-gray-700 mb-2">Номер телефона</label>
          <input type="text" id="phone" name="phone" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите номер телефона" />
        </div>
        <div>
          <label for="email" class="block text-xl font-medium text-gray-700 mb-2">Email</label>
          <input type="text" id="email" name="email" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите email" />
        </div>
        <div>
          <label for="address" class="block text-xl font-medium text-gray-700 mb-2">Адрес</label>
          <input type="text" id="address" name="address" class="input-field w-full border-2 pb-1.5 border-blue-500 rounded pt-1
 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center" placeholder="Введите адрес" />
        </div>
      </div>
      <div class="flex justify-end mt-6 mr-4">
        <A href="/main">
          <button type="button" class="mt-16 w-full mx-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl">Добавить</button>
        </A>
      </div>
    </div>
  );
}
