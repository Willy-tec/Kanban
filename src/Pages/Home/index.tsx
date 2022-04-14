import {useRef, useState} from "react";
import MainContainer from "../../Components/MainContainer";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {setProjectName} from "../../Redux/action";
import "./style.scss";

export function Home() {
  const state = useAppSelector((state) => state.columnReducer);
  const dispatch = useAppDispatch();
  const [edit, setEditable] = useState(false);
  const inputTitle = useRef<HTMLInputElement>(null);
  return (
    <>
      <div
        className="header"
        onClick={({target}) => {
          if (target !== inputTitle.current) setEditable((state) => !state);
        }}>
        {edit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditable(false);
            }}>
            <input
              className="header-inputName"
              type={"text"}
              value={state.projectName}
              ref={inputTitle}
              onChange={() => {
                if (inputTitle.current)
                  dispatch(setProjectName(inputTitle.current.value));
              }}></input>
          </form>
        ) : (
          <h1>{state.projectName}</h1>
        )}

        <p>Last update : {state.lastUpdate}</p>
      </div>
      <MainContainer />
    </>
  );
}
