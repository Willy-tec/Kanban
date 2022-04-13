import React from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {deleteCard} from "../../Redux/action";
import "./style.scss";

interface Props {
  visible: boolean;
  handleVisible: Function;
  columnId: number;
  cardId: number;
}

export default function ContextMenu({
  visible,
  handleVisible,
  columnId,
  cardId,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      {visible ? (
        <div className="overlay">
          <div className="contextMenu">
            <ul className="contextMenu-list">
              <li
                className="contextMenu-item close"
                onClick={() => handleVisible(false)}>
                X
              </li>
              <li className="contextMenu-item">Edit</li>
              <li className="contextMenu-item">Archive</li>
              <li
                className="contextMenu-item"
                onClick={() => {
                  handleVisible(false);
                  dispatch(deleteCard(columnId, cardId));
                }}>
                Delete
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className="contextMenu-3dot"
          onClick={() => {
            handleVisible(true);
          }}>
          ...
        </div>
      )}
    </>
  );
}
