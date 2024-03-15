// app\comp\ReadData.tsx

import React, { useContext } from "react";
import { DatasContext } from "../context/CRUDContext";

// 데이터를 읽고 출력하는 컴포넌트
const ReadData: React.FC = () => {
  // CRUD 컨텍스트로부터 데이터 배열을 가져오기
  const { datas } = useContext(DatasContext);

  return (
    <>
      {/* 데이터 배열을 매핑하여 각 데이터를 출력 */}
      {datas.map((data, index) => {
        return <div key={index}>{data}</div>; // 각 데이터를 div로 렌더링
      })}
    </>
  );
};
export default ReadData;
