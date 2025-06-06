# Шляпный Магазин - Next.js + Supabase + Stripe

Это веб-приложение для продажи шляп, построенное на Next.js с использованием Supabase и Stripe для обработки платежей.

## Функциональность

### Для администраторов:
- 🔐 Аутентификация через Supabase Auth
- ➕ Добавление новых шляп в каталог
- ❌ Удаление шляп из каталога

### Для пользователей:
- 👀 Просмотр каталога шляп
- 💳 Оформление заказа через Stripe

## Технологический стек

- **Frontend**: Next.js (React), TypeScript
- **Backend**: Supabase (База данных, Auth)
- **Платежи**: Stripe
- **Стили**: Tailwind CSS
- **Деплой**: Vercel

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
NEXT_PUBLIC_HOST
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY
EMAIL_USERNAME
EMAIL_PASSWORD
EMAIL_SERVER
EMAIL_PORT
   ```

4. Запустите приложение:
   ```bash
   npm run dev
   ```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере.
