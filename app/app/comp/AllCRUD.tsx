// app\comp\AllCRUD.tsx

import React, { useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

// 모든 CRUD 기능이 포함된 컴포넌트
const AllCRUD: React.FC = () => {
  // 입력된 데이터를 저장하는 상태 변수
  const [input, setInput] = useState("");
  // CRUD 컨텍스트로부터 데이터 배열과 데이터 업데이트 함수를 가져오기
  const { datas, setDatas } = useContext(DatasContext);

  // 입력 양식 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 이전 데이터 배열에 현재 입력값을 추가하여 업데이트
    setDatas((prevDatas) => {
      console.log("이전 데이터", prevDatas);
      return [input, ...prevDatas];
    });
    setInput(""); // 입력 필드 초기화
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

  // 선택한 데이터를 삭제하는 함수
  const handleDelete = (index: number) => {
    // 데이터 배열에서 선택한 인덱스를 제외하고 새로운 배열 생성
    const updatedDatas = datas.filter((_, i) => i !== index);
    // 데이터 업데이트 함수를 사용하여 데이터 배열 업데이트
    setDatas(updatedDatas);
  };

  return (
    <main>
      {/* 입력 양식 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type here"
          value={input}
          onChange={handleInputChange}
        />
        {/* 데이터 생성 버튼 */}
        <button type="submit">submit</button>
      </form>
      {/* 데이터 배열을 매핑하여 각 데이터와 수정/삭제 버튼을 출력 */}
      {datas.map((data, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "row" }}>
          {/* 데이터 출력 */}
          <div style={{ width: "20vw" }}>{data}</div>
          {/* 수정 양식 */}
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          {/* 수정 버튼 */}
          <button onClick={() => handleUpdate(index)}>Update</button>
          {/* 삭제 버튼 */}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </main>
  );
};
export default AllCRUD;