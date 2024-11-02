import { FC } from "react";

interface IconItem {
  icon: JSX.Element;
  color: string;
}

interface Props {
  items: IconItem[];
}

const IconList: FC<Props> = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item, i) => (
        <li key={i} style={{ color: item.color }}>
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default IconList;
