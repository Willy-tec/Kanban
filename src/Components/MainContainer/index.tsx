import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import store, {addColumn, deleteColumn} from "../../Redux/store";
import {connect} from "react-redux";
import ColumnContainer from "../ColumnContainer";
import "./style.scss";
import {useRef} from "react";

// type MainContainerProps = {
//   children: React.ReactNode;
// };

function MainContainer(/*{children}: MainContainerProps*/): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.columnReducer);
  const inputName = useRef<HTMLTextAreaElement>(null);
  return (
    <div className="main">
      {state.columns.map((col, index) => (
        <ColumnContainer
          title={col.title}
          key={index}
          cards={col.cardArr}
          position={index}>
          <button onClick={() => dispatch(deleteColumn(index))}>
            Remove the column
          </button>
        </ColumnContainer>
      ))}
      <form onSubmit={(e) => e.preventDefault()} className="main-form">
        <textarea
          type="text"
          ref={inputName}
          className="main-form-inputname"
          placeholder="Name of the next column"
        />
        <input
          type="button"
          value="ok"
          onClick={() => {
            dispatch(
              addColumn(
                inputName.current !== null && inputName.current.value !== ""
                  ? inputName.current.value
                  : "To do"
              )
            );
          }}
        />
      </form>
    </div>
  );
}

export default MainContainer;
