const PrivacyPolicy = () => {
    return (
      <main className="bg-gray-800 text-white min-h-screen p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Політика конфіденційності</h1>
          <p className="text-gray-300">
            Ця Політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо вашу
            особисту інформацію під час використання нашого сайту.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">1. Яку інформацію ми збираємо?</h2>
          <p className="text-gray-300">Ми можемо збирати такі дані:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Ваше ім'я та email, якщо ви заповнюєте контактні форми.</li>
            <li>IP-адресу, файли cookie, дані про браузер.</li>
            <li>Дані про ваші дії на сайті для аналітики.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6">2. Як ми використовуємо вашу інформацію?</h2>
          <p className="text-gray-300">Ми використовуємо зібрану інформацію для:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Поліпшення нашого сайту та контенту.</li>
            <li>Відправки оновлень або відповідей на ваші запити.</li>
            <li>Аналітики відвідуваності.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6">3. Файли cookie</h2>
          <p className="text-gray-300">
            Ми використовуємо файли cookie для персоналізації контенту та аналізу трафіку. Детальніше
            можна прочитати у нашій <a href="/cookies" className="text-red-400">Політиці щодо Cookies</a>.
          </p>
  
          <h2 className="text-xl font-semibold mt-6">4. Ваші права</h2>
          <p className="text-gray-300">
            Ви маєте право вимагати видалення ваших даних або зміну інформації. Для цього зв'яжіться з
            нами через <a href="/contact" className="text-red-400">контактну форму</a>.
          </p>
  
          <p className="text-gray-400 mt-6">Дата останнього оновлення: 8 березня 2025</p>
        </div>
      </main>
    );
  };
  
  export default PrivacyPolicy;
  