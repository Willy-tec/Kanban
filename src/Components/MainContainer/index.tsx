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
  const inputName = useRef<HTMLInputElement>(null);
  console.log(state);
  return (
    <div className="main-container">
      {state.columns.map((col, index) => (
        <ColumnContainer
          title={col.title}
          key={index}
          cards={col.cardArr}
          position={index}>
          <button onClick={() => dispatch(deleteColumn(index))}>delMe</button>
        </ColumnContainer>
      ))}
      <input type="text" name="columnName" id="columnName" ref={inputName} />
      <button
        onClick={() => {
          dispatch(
            addColumn(
              inputName.current !== null && inputName.current.value !== ""
                ? inputName.current.value
                : "To do"
            )
          );
        }}>
        Ok
      </button>
    </div>
  );
}

export default connect()(MainContainer);
