import React, {useRef} from "react";
import {useAppDispatch} from "../../Redux/hooks";
import {addCard} from "../../Redux/store";
import Card from "../Card";
import "./style.scss";

type ColumnContainerProps = {
  children: React.ReactNode;
  title: string;
  cards: [];
  position: number;
};

export default function ColumnContainer({
  children,
  title,
  cards,
  position,
}: ColumnContainerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const textAreaInput = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="column-container">
      <h2>{title}</h2>
      <textarea ref={textAreaInput}></textarea>
      <button
        onClick={() => {
          if (textAreaInput.current) {
            const value = textAreaInput.current.value;
            if (value !== "") {
              dispatch(addCard(position, value));
              textAreaInput.current.value = "";
            }
          }
        }}>
        add card
      </button>
      {cards.map((card, index) => (
        <Card key={index} columnId={position} cardId={index}>
          {card}
        </Card>
      ))}
      {children}
    </div>
  );
}
