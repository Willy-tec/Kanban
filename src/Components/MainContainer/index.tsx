import store from "../../Redux/store";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {addColumn, deleteColumn} from "../../Redux/store";
import {connect} from "react-redux";
import ColumnContainer from "../ColumnContainer";
import "./style.scss";

type MainContainerProps = {
  children: React.ReactNode;
};

function MainContainer({children}: MainContainerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.columnReducer);

  console.log("contain", store.getState());
  return (
    <div className="main-container">
      {state.columns.map((col, index) => (
        <ColumnContainer title={col} key={index}>
          <button onClick={() => dispatch(deleteColumn(index))}>delMe</button>
        </ColumnContainer>
      ))}

      <button
        onClick={() => {
          dispatch(addColumn("test"));
          console.log(state);
        }}>
        Ok
      </button>

      {children}
    </div>
  );
}

export default connect()(MainContainer);
