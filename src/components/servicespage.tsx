import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import design from "../img/graphic-design.png";
import frontend from "../img/frontend-50.png";
import backend from "../img/backend-programming-64.png";
import seo from "../img/seo.png";
import analytics from "../img/analytics.png";

export default function ServicesPage() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = createSignal<boolean>(false);
  const [selectedService, setSelectedService] = createSignal<string | null>(null);

  

 const contactInfo = {
  "Для Дизайнера": {
    lang: "Adobe Photoshop, Adobe Illustrator, Sketch, Figma, Adobe XD",
    info: "Дизайнер отвечает за создание пользовательского интерфейса (UI) и пользовательского опыта (UX). Если у вас есть запросы на дизайн интерфейса или требуется консультация по дизайну, обращайтесь к нам.",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890"
  },
  "Для Frontend": {
    lang: "HTML, CSS, JavaScript, React.js, Solid.js, Vue.js",
    info: "Фронтенд-разработчик отвечает за создание пользовательского интерфейса (UI) и его взаимодействие с бэкендом. Если у вас возникли вопросы или трудности связанные с клиентской частью приложения, обращайтесь к нам.",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+0987654321"
  },
  "Для Backend": {
    lang: "Java, Python, Node.js, Ruby, .NET, SQL, NoSQL",
    info: "Бэкенд-разработчик отвечает за серверную часть приложения и базу данных. Если у вас возникли вопросы или сложности связанные с серверным взаимодействием, обращайтесь к нам.",
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+9876543210"
  },
  "Для SEO": {
    lang: "SEMrush, Ahrefs, Moz, Google My Business, Direct.Yandex",
    info: "Наши специалисты по SEO помогут вашему веб-сайту достичь высоких позиций в поисковых системах, привлекая больше органического трафика и потенциальных клиентов. Мы проведем аудит вашего сайта, оптимизируем контент, технические аспекты и внешние ссылки, чтобы повысить его видимость в поисковых запросах. Обращайтесь к нам, если вам нужно улучшить видимость вашего веб-проекта в интернете и увеличить его эффективность в онлайн-среде.",
    name: "Anna Ivanovna",
    email: "anna@example.com",
    phone: "+5463567890"
  },
  "Для Аналитики": {
    lang: "Google Analytics, Яндекс.Метрика, Google Data Studio, Tableau, Power BI",
    info: "Наши аналитики помогут вам лучше понять поведение ваших пользователей и принимать обоснованные решения на основе данных. Мы соберем и проанализируем информацию о посещаемости, взаимодействии с контентом, конверсиях и других метриках, чтобы выявить сильные и слабые стороны вашего веб-проекта. Обращайтесь к нам, если вам нужна экспертная аналитика для улучшения производительности и результатов вашего веб-проекта.",
    name: "Maxim Petrov",
    email: "maxim@example.com",
    phone: "+0987654321"
  }
};

type ServiceType = "Для Дизайнера" | "Для Frontend" | "Для Backend" | "Для SEO" | "Для Аналитики";
const selectedServiceValue = selectedService() as ServiceType;
const selectedContact = contactInfo[selectedServiceValue];



  
  function openModal(service: string) {
    setSelectedService(service);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedService(null);
    setModalOpen(false);
  }
  
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
   
     <div class="bg-white rounded-lg shadow-md border border-gray-300 p-6 flex flex-col justify-center items-center">
  <img src={design} alt="Для Дизайнера" class="w-24 h-24 mb-4" />
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Для Дизайнера</h2>
  <p class="text-gray-800 text-center mb-6">Воплощаем вашу уникальную идею в визуальные концепции, придавая им стиль, элегантность и функциональность. Наша задача - создать дизайн, который захватывает внимание и оставляет яркое впечатление, помогая вашему продукту выделиться на рынке. Только с нами, вы сможете прокачаться как дизайнер на высшей уровень</p>
  <button onClick={() => openModal("Для Дизайнера")} class="px-4 py-2 bg-[#00BCD4] text-white rounded-lg hover:bg-blue-800 focus:outline-none ease-in-out">Подробнее</button>
</div>


<div class="bg-white rounded-lg shadow-md border border-gray-300 p-6 flex flex-col justify-center items-center ">
  <img src={frontend} alt="Для Frontend" class="w-24 h-24 mb-4" />
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Для Frontend</h2>
  <p class="text-gray-600 text-center mb-6">Создаем визуально привлекательные и интерактивные пользовательские интерфейсы, используя передовые технологии веб-разработки. Наша задача - обеспечить пользователей удобным и интуитивно понятным интерфейсом, который делает работу с вашим веб-приложением приятным и эффективным.</p>
  <button onClick={() => openModal("Для Frontend")} class="px-4 py-2 bg-[#00BCD4] text-white rounded hover:bg-blue-600 focus:outline-none ease-in-out">Подробнее</button>
</div>

<div class="bg-white rounded-lg shadow-md border border-gray-300 p-6 flex flex-col justify-center items-center ">
  <img src={backend} alt="Для Backend" class="w-24 h-24 mb-4" />
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Для Backend</h2>
  <p class="text-gray-600 text-center mb-6">Создаем надежные и мощные серверные приложения, обеспечивая вашему веб-проекту высокую производительность и безопасность. Мы работаем с базами данных, разрабатываем API и обеспечиваем взаимодействие с фронтендом, чтобы ваше приложение функционировало плавно и эффективно.</p>
  <button onClick={() => openModal("Для Backend")} class="px-4 py-2 bg-[#00BCD4] text-white rounded hover:bg-blue-600 focus:outline-none ease-in-out">Подробнее</button>
</div>

<div class="bg-white rounded-lg shadow-md border border-gray-300 p-6 flex flex-col justify-center items-center ">
  <img src={seo} alt="Для SEO" class="w-24 h-24 mb-4" />
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Для SEO</h2>
  <p class="text-gray-600 text-center mb-6">Оптимизируем ваш веб-сайт для поисковых систем, увеличивая его видимость и привлекая больше целевой аудитории. Наши SEO-специалисты помогут вам достичь лучших результатов в органических поисковых запросах.</p>
  <button onClick={() => openModal("Для SEO")} class="px-4 py-2 bg-[#00BCD4] text-white rounded-lg hover:bg-blue-800 focus:outline-none ease-in-out">Подробнее</button>
</div>


<div class="bg-white rounded-lg shadow-md border border-gray-300 p-6 flex flex-col justify-center items-center ">
  <img src={analytics} alt="Для Аналитики" class="w-24 h-24 mb-4" />
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Для Аналитики</h2>
  <p class="text-gray-600 text-center mb-6">Анализируем данные вашего веб-сайта и предоставляем ценную информацию о поведении пользователей. Наши аналитики помогут вам принимать обоснованные решения и улучшать эффективность вашего веб-проекта.</p>
  <button onClick={() => openModal("Для Аналитики")} class="px-4 py-2 bg-[#00BCD4] text-white rounded-lg hover:bg-blue-800 focus:outline-none ease-in-out">Подробнее</button>
</div>




      {modalOpen() && (
     <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
   <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
  <h2 class="text-2xl font-bold mb-4">{selectedService()}</h2>
  <div class="border-t border-gray-200"></div>
  <div class="mt-4">
    
    <div class="flex flex-col space-y-2">
    <p class="text-gray-600">
        <span class="font-bold">Технологии:</span> {contactInfo[selectedService()].lang}
      </p>
      <p class="text-gray-600">
        <span class="font-bold">Описание:</span> {contactInfo[selectedService()].info}
      </p>
      <p class="text-gray-600 font-bold mb-2">Контактная информация:</p>
      <p class="text-gray-600">
        <span class="font-bold">Имя:</span> {contactInfo[selectedService()].name}
      </p>
      <p class="text-gray-600">
        <span class="font-bold">Email:</span> {contactInfo[selectedService()].email}
      </p>
      <p class="text-gray-600">
        <span class="font-bold">Телефон:</span> {contactInfo[selectedService()].phone}
      </p>
    </div>
  </div>
  <div class="mt-6 flex justify-end">
    <button onClick={() => setModalOpen(false)} class="px-4 py-2 bg-[#00BCD4] text-white rounded hover:bg-blue-600 focus:outline-none">Закрыть</button>
  </div>
</div>

   </div>
   
      )}
    </div>
  );
}
