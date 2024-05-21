import { createSignal } from "solid-js";

interface ClientPageData {
  avatar: string;
  company: string;
  nameclient: string;
  inn: string;
  post: string;
  number: number;
  email: string;
  address: string;
}

export default function Clientpage(props: { data: ClientPageData[] }) {
  const [sortedData, setSortedData] = createSignal<ClientPageData[]>(props.data);
  
  const sortByName = () => {
    const sorted = [...sortedData()].sort((a, b) => a.nameclient.localeCompare(b.nameclient));
    setSortedData(sorted);
  };

  const sortByCompany = () => {
    const sorted = [...sortedData()].sort((a, b) => a.company.localeCompare(b.company));
    setSortedData(sorted);
  };

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div class="col-span-full flex justify-center space-x-4 mb-4">
        <button onClick={sortByName} class="px-4 py-2 bg-cyan-400  text-white rounded-md hover:bg-blue-600 focus:outline-none">Сортировать по имени</button>
        <button onClick={sortByCompany} class="px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-blue-600 focus:outline-none">Сортировать по компании</button>
        {/* Другие кнопки сортировки */}
      </div>
      {sortedData().map((item: ClientPageData, index: number) => (
        <div class="max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{item.nameclient}</div>
            <p class="text-gray-700 text-base mb-2">Компания: {item.company}</p>
            <p class="text-gray-700 text-base mb-2">Должность: {item.post}</p>
            <p class="text-gray-700 text-base mb-2">ИНН: {item.inn}</p>
            <p class="text-gray-700 text-base mb-2">Номер телефона: {item.number}</p>
            <p class="text-gray-700 text-base mb-2">Email: {item.email}</p>
            <p class="text-gray-700 text-base mb-2">Адрес: {item.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
