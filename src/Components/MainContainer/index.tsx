import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {addColumn, deleteColumn} from "../../Redux/store";
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
          ref={inputName}
          className="main-form-inputname"
          placeholder="Name of the next column"
        />
        <input
          type="button"
          value="ok"
          onClick={() => {
            if (inputName.current) {
              dispatch(
                addColumn(
                  inputName.current.value !== ""
                    ? inputName.current.value
                    : "To do"
                )
              );
              inputName.current.value = "";
            }
          }}
        />
      </form>
    </div>
  );
}

export default MainContainer;
