# Админка интернет-магазина

Пэт проект панель администратора интернет-магазина на React, Redux-Toolkit, TypeScript. Проект в процессе. Добавил витрину

## Деплой

https://flourishing-tartufo-ae4f52.netlify.app/

## Функционал

### Страница товаров

- Кнопка Добавить товар не активна если нет ни одной категорий или ни одного бренда
- В форме создания нового товара обязательные поля отмечены звездочками. Поля валидируются на пустое значение. Поле Изображение валидируется по регулярному выражению на соответствие прямой ссылке
- По клику на кнопку Сохранить товар уходит POST запрос на сервер
- Уже созданные товары можно редактировать и удалять. На сервер уходят запросы PATCH и DELETE.
- Если при выполнении запроса с сервера возвращается ошибка, то рендерится всплывающее уведомление.
- В списке товаров есть два фильтра: по категориям и брендам. Фильтры связаны и работают в обе стороны: если в фильтре по категориям выбрать категорию, то в фильтре по брендам будут отображаться только те бренды, у которых есть соответствующие категории. И наоборот, если сначала выбрать бренд, то в фильтре по категориям будут только категории соответствующего бренда. Список товаров на странице отображается в соответствии с выбранными значениями фильтров

### Страница настроек

- Можно добавлять, изменять или удалять категории и бренды (запросы GET, POST, PATCH, DELETE)
- В карточках отображается количество товаров у категорий и брендов
- Категорию или бренд нельзя удалить если к ним привязаны товары. При попытке удалить рендерится уведомление
- При изменении названия бренда или категории, актуальные данные отображаются на странице товаров в фильтрах и в самих товарах, а так же при создании нового товара.
- Поля формы создания новой категорий или бренда валидируются на пустое значение
- Если при выполнении сервер вернул ошибку, то рендерится уведомление

## Стек

- React
- Redux-Toolkit
- TypeScript
- Firebase
- Адаптивная верстка

## Установка

Для запуска на локальной машине необходимо:</br>

1. Установить npm зависимости:</br>

```sh
npm install
```

2. Запустить в режиме разработки:</br>

```sh
npm run start
```

Если все прошло успешно, проект будет запущен на `http://localhost:3000`