import { Category } from '../types/Category';

export type ProductForRandomGenerate = {
  name: string;
  category: Category;
};
export let CategoriesForRandomGenerate: Category[] = [
  {
    id: Math.random().toString(36).substring(2, 9),
    name: 'Еда',
    photo: 'тут фото',
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: 'Электроника',
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: 'Одежда',
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: 'Книги',
  },
];
export let ProductsForRandomGenerate: ProductForRandomGenerate[] = [
  {
    name: 'Хлеб',
    category: CategoriesForRandomGenerate[0],
  },
  {
    name: 'Молоко',
    category: CategoriesForRandomGenerate[0],
  },
  {
    name: 'Сыр',
    category: CategoriesForRandomGenerate[0],
  },
  {
    name: 'Яблоки',
    category: CategoriesForRandomGenerate[0],
  },
  {
    name: 'Бананы',
    category: CategoriesForRandomGenerate[0],
  },
  {
    name: 'Телефон',
    category: CategoriesForRandomGenerate[1],
  },
  {
    name: 'Ноутбук',
    category: CategoriesForRandomGenerate[1],
  },
  {
    name: 'Наушники',
    category: CategoriesForRandomGenerate[1],
  },
  {
    name: 'Монитор',
    category: CategoriesForRandomGenerate[1],
  },
  {
    name: 'Пальто',
    category: CategoriesForRandomGenerate[2],
  },
  {
    name: 'Джинсы',
    category: CategoriesForRandomGenerate[2],
  },
  {
    name: 'Футболка',
    category: CategoriesForRandomGenerate[2],
  },
  {
    name: 'Куртка',
    category: CategoriesForRandomGenerate[2],
  },
  {
    name: 'Мастер и Маргарита',
    category: CategoriesForRandomGenerate[3],
  },
  {
    name: 'Война и мир',
    category: CategoriesForRandomGenerate[3],
  },
  {
    name: '1984',
    category: CategoriesForRandomGenerate[3],
  },
  {
    name: 'Преступление и наказание',
    category: CategoriesForRandomGenerate[3],
  },
];
