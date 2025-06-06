# Шляпный Магазин - Next.js + Supabase + Stripe

Это веб-приложение для продажи шляп, построенное на Next.js с использованием Supabase и Stripe для обработки платежей.

## Функциональность

### Для администраторов:

-   🔐 Аутентификация через Supabase Auth
-   ➕ Добавление новых шляп в каталог
-   ❌ Удаление шляп из каталога

### Для пользователей:

-   👀 Просмотр каталога шляп
-   💳 Оформление заказа через Stripe

## Технологический стек

-   **Frontend**: Next.js (React), TypeScript
-   **Backend**: Supabase (База данных, Auth)
-   **Платежи**: Stripe
-   **Стили**: Tailwind CSS
-   **Деплой**: Vercel

## Установка и запуск

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/yourusername/hat-shop.git
    cd hat-shop
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Создайте файл `.env.local` на основе `.env.example` и заполните переменные окружения:

    ```env
     NEXT_PUBLIC_HOST=value
     NEXT_PUBLIC_SUPABASE_URL=value
     NEXT_PUBLIC_SUPABASE_ANON_KEY=value
     NEXT_PUBLIC_STRIPE_PUBLIC_KEY=value
     STRIPE_SECRET_KEY=value
     EMAIL_USERNAME=value
     EMAIL_PASSWORD=value
     EMAIL_SERVER=value
     EMAIL_PORT=value
    ```

4. Запустите приложение:

    ```bash
    npm run dev
    ```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере.
