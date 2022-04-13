import {useState} from "react";
import ContextMenu from "../ContextMenu";
import "./style.scss";

interface CardProps {
  children: React.ReactNode;
  columnId: number;
  cardId: number;
}

export default function Card({
  children,
  columnId,
  cardId,
}: CardProps): JSX.Element {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [action, setAction] = useState(null);
  return (
    <div className="card">
      <ContextMenu
        visible={isMenuVisible}
        handleVisible={setMenuVisible}
        columnId={columnId}
        cardId={cardId}
      />
      <p>{children}</p>
    </div>
  );
}
