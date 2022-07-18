import { useState } from "react";
import "./App.css";
import { ReChartsFoods } from "./components/reChartsFoods";
import { ReChartsShop } from "./components/reChartsShop";

function App() {
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);

  const toggleChecked1 = () => {
    setIsChecked1(!isChecked1);
  };

  const toggleChecked2 = () => {
    setIsChecked2(!isChecked2);
  };

  const toggleChecked3 = () => {
    setIsChecked3(!isChecked3);
  };

  const toggleChecked4 = () => {
    setIsChecked4(!isChecked4);
  };

  return (
    <div className="App">
      <div className="restaurants">
        <h1>店舗名一覧</h1>
        <input type="checkbox" id="0" value="0" onClick={toggleChecked1} />
        本湖月
        <input type="checkbox" id="1" value="1" onClick={toggleChecked2} />
        鮨 おおが
        <input type="checkbox" id="2" value="2" onClick={toggleChecked3} />
        蓮心
        <input type="checkbox" id="3" onClick={toggleChecked4} />
        米増
      </div>
      <div className="SRechartsBlock">
        <div className="SRechartsFood">
          <h2>料理の評価(サンプル値)</h2>
          <ReChartsFoods isChecked1={isChecked1} isChecked2={isChecked2} isChecked3={isChecked3} isChecked4={isChecked4}/>
        </div>
        <div className="SRechartsShop">
          <h2>料理以外の評価</h2>
          <ReChartsShop isChecked1={isChecked1} isChecked2={isChecked2} isChecked3={isChecked3} isChecked4={isChecked4}/>
        </div>
      </div>
    </div>
  );
}

export default App;
