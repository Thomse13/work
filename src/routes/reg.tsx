import { createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";

export default function Reg() {
  const [email, setEmail] = createSignal("");
  const [login, setLogin] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [consent, setConsent] = createSignal(false);
  const [errors, setErrors] = createSignal({ email: "", login: "", password: "", consent: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { email: "", login: "", password: "", consent: "" };
    if (!email()) newErrors.email = "Почта не может быть пустой";
    if (!login()) newErrors.login = "Логин не может быть пустым";
    if (!password()) newErrors.password = "Пароль не может быть пустым";
    if (!consent()) newErrors.consent = "Вы должны согласиться на обработку персональных данных";
    setErrors(newErrors);

    return !newErrors.email && !newErrors.login && !newErrors.password && !newErrors.consent;
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (validateForm()) {
      navigate("/main");
    }
  };

  return (
    <div class="bg-[#565CFE] min-h-screen flex justify-center items-center p-4">
      <div class="bg-white pt-12 pl-6 pr-6 pb-10 rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 class="text-3xl md:text-5xl font-normal mb-6 text-center">Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Почта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              class="mt-1 block w-full border-2 border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center"
              placeholder="Введите вашу почту:"
            />
            {errors().email && <p class="text-red-500 text-xs mt-1">{errors().email}</p>}
          </div>
          <div class="mb-4">
            <label for="login" class="block text-sm font-medium text-gray-700">Логин</label>
            <input
              type="text"
              id="login"
              name="login"
              value={login()}
              onInput={(e) => setLogin(e.currentTarget.value)}
              class="mt-1 block w-full border-2 border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center"
              placeholder="Введите ваш логин:"
            />
            {errors().login && <p class="text-red-500 text-xs mt-1">{errors().login}</p>}
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
              class="mt-4 block w-full border-2 border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center"
              placeholder="Введите ваш пароль:"
            />
            {errors().password && <p class="text-red-500 text-xs mt-1">{errors().password}</p>}
          </div>
          <div class="mb-4">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={consent()}
                onChange={(e) => setConsent(e.currentTarget.checked)}
                class="h-4 w-4 border-gray-300 rounded mr-2"
              />
              <label for="consent" class="text-sm text-gray-900">Согласие на обработку персональных данных</label>
            </div>
            {errors().consent && <p class="text-red-500 text-xs mt-1">{errors().consent}</p>}
          </div>
          <div class="mb-4">
            <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl">Регистрация</button>
          </div>
          <div class="text-center">
            <A href="/" class="text-cyan-400 hover:text-blue-600">Вход</A>
          </div>
        </form>
      </div>
    </div>
  );
}
