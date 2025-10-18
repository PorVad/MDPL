// document.getElementById("cange-btn").addEventListener("click", function () {
//     alert("Ти справді думав що це спрацює");
// })

async function fetchUsers() {
      const res = await fetch("https://raw.githubusercontent.com/MDPLofficial/TestDataBase/refs/heads/main/users.json");
      return res.json();
    }

    document.getElementById("show-users").addEventListener("click", async () => {
      try {
        const users = await fetchUsers(); // Отримуємо результат функції
        console.log("Масив користувачів:", users);

        // Перевірка кількості
        if (users.length > 0) {
          console.log(`Знайдено ${users.length} користувачів`);
        } else {
          console.log("Користувачів не знайдено");
        }

      } catch (err) {
        console.error("Помилка завантаження:", err);
      }
    });