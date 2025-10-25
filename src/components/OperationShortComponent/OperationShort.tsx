import React from 'react';
import './opetationShort.scss';
interface OperationShortProps {
  title: string;
  category: string;
  description: string;
  amount: number;
}
export function OperationShort({ title, category, description, amount }: OperationShortProps) {
  return (
    <div className="operation-short">
      <div className="operation-short__left">
        <h3 className="operation-short__title">{title}</h3>
        <p className="operation-short__category">{category}</p>
      </div>
      <div className="operation-short__right">
        <h3 className={`operation-short__amount ${amount > 0 ? 'positive' : 'negative'}`}>{amount}</h3>
        <p className="operation-short__description">{description}</p>
      </div>
    </div>
  );
}
