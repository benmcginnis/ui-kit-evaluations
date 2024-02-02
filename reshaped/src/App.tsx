import {Reshaped, } from "reshaped";
import {RevisionHistoryPage} from "./RevisionHistoryPage.tsx";
import './App.css'
import "reshaped/themes/reshaped/theme.css";

function App() {
  return (
    <Reshaped theme={"reshaped"}>
      <RevisionHistoryPage />
    </Reshaped>
  )
}

export default App
