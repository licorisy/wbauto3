// login.spec.js
const { test, expect } = require("@playwright/test");
const { email, password } = require("./user.js"); // Импорт данных

test.describe("Авторизация на netology.ru", () => {
  // Тест 1: Успешная авторизация
  test("Успешная авторизация", async ({ page }) => {
    // 1. Открываем форму авторизации
    await page.goto("https://netology.ru/?modal=sign_in");

    // 2. Заполняем поля
    await page.getByPlaceholder("Email").fill(email);
    await page.getByPlaceholder("Пароль").fill(password);

    // 3. Нажимаем кнопку "Войти"
    await page.getByTestId("login-submit-btn").click();

    // 4. Проверяем, что открылась страница профиля
    await expect(page).toHaveURL("https://netology.ru/profile");

    // 5. Удостоверяемся, что на странице есть заголовок h2
    // Используем toBeVisible() для проверки видимости
    const heading = page.locator("h2").first();
    await expect(heading).toBeVisible();
  });

  // Тест 2: Неуспешная авторизация
  test("Неуспешная авторизация", async ({ page }) => {
    // 1. Открываем форму авторизации
    await page.goto("https://netology.ru/?modal=sign_in");

    // 2. Заполняем поля невалидными данными
    await page.getByPlaceholder("Email").fill("invalid_email@example.com");
    await page.getByPlaceholder("Пароль").fill("wrong_password");

    // 3. Нажимаем кнопку "Войти"
    await page.getByTestId("login-submit-btn").click();

    // 4. Проверяем, что появился блок с ошибкой
    const errorBlock = page.locator("text=/Неверный логин или пароль/i");
    await expect(errorBlock).toBeVisible();
  });
});
