const Contact = () => {
    return (
      <main className="bg-gray-800 text-white min-h-screen p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Контакти</h1>
          <p className="text-gray-300">Якщо у вас є питання або пропозиції, зв'яжіться з нами:</p>
  
          <div className="mt-6">
            <p className="text-lg"><strong>Email:</strong> info@site.com</p>
            <p className="text-lg"><strong>Телефон:</strong> +380 99 123 45 67</p>
          </div>
  
          <form className="mt-6 bg-gray-900 p-4 rounded-lg shadow-lg">
            <label className="block text-gray-300 mb-2">Ваше ім'я:</label>
            <input type="text" className="w-full p-2 rounded bg-black text-white border border-gray-700 focus:ring-2 focus:ring-red-400" />
  
            <label className="block text-gray-300 mt-4 mb-2">Email:</label>
            <input type="email" className="w-full p-2 rounded bg-black text-white border border-gray-700 focus:ring-2 focus:ring-red-400" />
  
            <label className="block text-gray-300 mt-4 mb-2">Повідомлення:</label>
            <textarea className="w-full p-2 rounded bg-black text-white border border-gray-700 focus:ring-2 focus:ring-red-400" rows="4"></textarea>
  
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded">Надіслати</button>
          </form>
        </div>
      </main>
    );
  };
  
  export default Contact;
  