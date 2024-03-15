// app\comp\UpdateData.tsx

import React, { useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

// 데이터를 수정하는 컴포넌트
const UpdateData: React.FC = () => {
  // 입력된 데이터를 저장하는 상태 변수
  const [input, setInput] = useState("");
  // CRUD 컨텍스트로부터 데이터 배열과 데이터 업데이트 함수를 가져오기
  const { datas, setDatas } = useContext(DatasContext);

  // 입력 양식 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 선택한 데이터의 내용을 변경하고 업데이트하는 함수
  const handleUpdate = (index: number) => {
    // 데이터 배열의 복사본 생성
    const updatedDatas = [...datas];
    // 선택한 인덱스의 데이터를 입력값으로 업데이트
    updatedDatas[index] = input;
    // 데이터 업데이트 함수를 사용하여 데이터 배열 업데이트
    setDatas(updatedDatas);
    setInput(""); // 입력 필드 초기화
  };

  return (
    <>
      {/* 데이터 배열을 매핑하여 각 데이터와 수정 양식을 출력 */}
      {datas.map((data, index) => (
        <div key={index}>
          {/* 수정 양식 */}
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          {/* 수정 버튼 */}
          <button onClick={() => handleUpdate(index)}>Update</button>
        </div>
      ))}
    </>
  );
};
export default UpdateData;