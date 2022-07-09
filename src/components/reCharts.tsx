import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export const ReCharts = () => {
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

  // A -> 本湖月, B -> 鮨 おおが, C -> 蓮心, D -> 米増
  const data = [
    {
      restaurant: "内観",
      A: 6.57,
      B: 7,
      C: 7,
      D: 7,
      fullMark: 7,
    },
    {
      restaurant: "接客",
      A: 7,
      B: 6.57,
      C: 7,
      D: 7,
      fullMark: 7,
    },
    {
      restaurant: "待ち時間",
      A: 6,
      B: 5.5,
      C: 0,
      D: 0,
      fullMark: 7,
    },
    {
      restaurant: "リピート率",
      A: 2,
      B: 6.33,
      C: 6.33,
      D: 4,
      fullMark: 7,
    },
    {
      restaurant: "価格帯",
      A: 4.25,
      B: 2.66,
      C: 7,
      D: 7,
      fullMark: 7,
    },
  ];

  return (
    <>
      <div>
        <input type="checkbox" id="0" value="0" onClick={toggleChecked1} />
        本湖月
        <input type="checkbox" id="1" value="1" onClick={toggleChecked2} />
        鮨 おおが
        <input type="checkbox" id="2" value="2" onClick={toggleChecked3} />
        蓮心
        <input type="checkbox" id="3" onClick={toggleChecked4} />
        米増
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="restaurant" />
          <PolarRadiusAxis angle={30} domain={[0, 7]} />
          {isChecked1 ? (
            <Radar
              name="本湖月"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          ) : (
            <></>
          )}

          {isChecked2 ? (
            <Radar
              name="鮨 おおが"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          ) : (
            <></>
          )}
          {isChecked3 ? (
            <Radar
              name="蓮心"
              dataKey="C"
              stroke="#00bfff"
              fill="#00bfff"
              fillOpacity={0.6}
            />
          ) : (
            <></>
          )}
          {isChecked4 ? (
            <Radar
              name="米増"
              dataKey="D"
              stroke="#ff8c00"
              fill="#ff8c00"
              fillOpacity={0.6}
            />
          ) : (
            <></>
          )}

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
