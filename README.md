<p>Для корректной установки на вашем сервере должны быть установлены PHP 7.4, Composer</p>

<ul dir="auto">
<li>Склонировать проект на локальную машину, войти в папку проекта</li>
</ul>
<p> git clone https://github.com/poltorashe4ka/test_project.git </p>

<ul dir="auto">
<li>Установить все зависимости приложения через <a href="https://getcomposer.org/" rel="nofollow">Composer</a></li>
</ul>
<p> composer install </p>

<ul dir="auto">
<li>Скопировать файл .env.example в файл .env. Настроить подключение к MySQL базе данных в файле .env</li>
<li>Создать базу данных приложения MySQL и запустить скрипт генерации таблиц БД</li>
</ul>
<p>php artisan migrate</p>

<ul dir="auto">
<li>Создать пользователя</li>
</ul>
<p>php artisan make:seeder UserSeeder</p>

<ul dir="auto">
<li>Запустить веб-сервер</li>
</ul>
<p>php artisan serve</p>

<ul dir="auto">
<li>Открыть страницу в браузере: <a href="http://localhost:8000/" rel="nofollow">http://localhost:8000/</a></li>
</ul>
