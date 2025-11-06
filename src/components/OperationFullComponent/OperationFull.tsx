import React from 'react';
import './operationFull.scss';
interface OperationFullProps {
  title: string;
  category: string;
  description: string;
  amount: number;
  dateTime: string;
  categoryColor: string;
}
export function OperationFull({ title, category, description, amount, dateTime, categoryColor }: OperationFullProps) {
  const parsedDate = new Date(dateTime);

  // Дата: 16 октября 2025
  const datePart = parsedDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Время: 14:38
  const timePart = parsedDate.toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
  });
  const formattedDateTime = `${datePart} в ${timePart}`;
  return (
    <div className="operation-full">
      <div className="operation-full__header" style={{ backgroundColor: categoryColor }}>
        <p className="operation-full__date-time">{formattedDateTime}</p>
        <button className="operation-full__edit-button">✏️</button>
      </div>
      <div className="operation-full__main">
        <div className="operation-full__title">{title}</div>
        <div className="operation-full__category">{category}</div>
        <h3 className={`operation-full__amount ${amount > 0 ? 'positive' : 'negative'}`}>{amount}</h3>
      </div>
      <div className="operation-full__footer">
        <p className="operation-full__description">{description}</p>
      </div>
    </div>
  );
}
