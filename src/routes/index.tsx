import { createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";

export default function Home() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [errors, setErrors] = createSignal({ email: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!email()) newErrors.email = "Логин не может быть пустым";
    if (!password()) newErrors.password = "Пароль не может быть пустым";
    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (validateForm()) {
      navigate("/main");
    }
  };

  return (
    <div class="bg-[#565CFE] min-h-screen flex justify-center items-center">
      <div class="bg-white pt-12 pl-6 pr-6 pb-10 rounded-lg shadow-md max-w-md w-full">
        <h2 class="text-3xl md:text-5xl font-normal mb-4 text-center">Вход</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Логин</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              class="mt-1 block w-full border-2 border-blue-500 rounded pb-1.5 pt-1 pl-1 focus:ring-blue-500 focus:border-blue-500 placeholder-center"
              placeholder="Введите ваш логин:"
            />
            {errors().email && <p class="text-red-500 text-xs mt-1">{errors().email}</p>}
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
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <input type="checkbox" id="remember_me" name="remember_me" class="h-4 w-4 border-gray-300 rounded mr-2" />
              <label for="remember_me" class="text-sm text-gray-900">Запомнить меня</label>
            </div>
            <a href="#" class="text-sm font-medium text-black hover:text-blue-600">Забыли пароль?</a>
          </div>
          <div class="mb-4">
            <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xl">Войти</button>
          </div>
          <div class="text-center">
            <A href="/reg" class="text-cyan-400 hover:text-blue-600">Регистрация</A>
          </div>
        </form>
      </div>
    </div>
  );
}
