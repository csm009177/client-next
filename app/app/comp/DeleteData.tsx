// app\comp\DeleteData.tsx

import React, { useContext } from "react";
import { DatasContext } from "../context/CRUDContext";

// 데이터를 삭제하는 컴포넌트
const DeleteData: React.FC = () => {
  // CRUD 컨텍스트로부터 데이터 배열과 데이터 업데이트 함수를 가져오기
  const { datas, setDatas } = useContext(DatasContext);

  // 선택한 데이터를 삭제하는 함수
  const handleDelete = (index: number) => {
    // 데이터 배열에서 선택한 인덱스를 제외하고 새로운 배열 생성
    const updatedDatas = datas.filter((_, i) => i !== index);
    // 데이터 업데이트 함수를 사용하여 데이터 배열 업데이트
    setDatas(updatedDatas);
  };

  return (
    <>
      {/* 데이터 배열을 매핑하여 각 데이터와 삭제 버튼을 출력 */}
      {datas.map((data, index) => (
        <div key={index}>
          {/* 데이터 출력 */}
          <span>{data}</span>
          {/* 삭제 버튼 */}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default DeleteData;
