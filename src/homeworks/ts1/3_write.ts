/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

import {
  CategoriesForRandomGenerate,
  ProductForRandomGenerate,
  ProductsForRandomGenerate,
} from './helper/ProductRandomList';
import { Operation } from './types/Operation';
import { Product } from './types/Product';

// Создает случайный продукт (Product).
// Принимает дату создания (строка)
export const createRandomProduct = (createdAt: string): Product => {
  const productNameWithCategory: ProductForRandomGenerate =
    ProductsForRandomGenerate[Math.floor(Math.random() * ProductsForRandomGenerate.length)];
  const randomId = Math.random().toString(36).substring(2, 9);
  const randomPrice = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

  return {
    id: randomId,
    name: productNameWithCategory.name,
    photo: `путь до фото ${randomId}`,
    desc: Math.random() < 0.5 ? 'Описание товара' : undefined,
    createdAt: createdAt,
    oldPrice: Math.random() < 0.5 ? randomPrice / 1.2 : undefined,
    price: randomPrice,
    category: productNameWithCategory.category,
  };
};

// Создает случайную операцию (Operation).
// Принимает дату создания (строка)
export const createRandomOperation = (createdAt: string): Operation => {
  const randomOperationCategory =
    CategoriesForRandomGenerate[Math.floor(Math.random() * CategoriesForRandomGenerate.length)];
  const randomId = Math.random().toString(36).substring(2, 9);
  const randomAmount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
  const isCost = Math.random() < 0.5;

  return isCost
    ? {
        id: randomId,
        name: `Трата на категорию: ${randomOperationCategory.name}`,
        desc: Math.random() < 0.5 ? 'Описание траты' : undefined,
        createdAt: createdAt,
        amount: randomAmount,
        category: randomOperationCategory,
        type: 'Cost',
      }
    : {
        id: randomId,
        name: `Доход от категории: ${randomOperationCategory.name}`,
        desc: Math.random() < 0.5 ? 'Описание дохода' : undefined,
        createdAt: createdAt,
        amount: randomAmount,
        category: randomOperationCategory,
        type: 'Profit',
      };
};
