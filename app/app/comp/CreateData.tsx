// app\comp\CreateData.tsx

import React, { useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

// CreateData 컴포넌트 정의
const CreateData: React.FC = () => {
  // input 상태와 setDatas 함수를 가져오기 위해 context 사용
  const [input, setInput] = useState(""); // input 상태
  const { setDatas } = useContext(DatasContext); // setDatas 함수를 가져옴

  // 입력 양식 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // input 상태 업데이트
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 제출 동작 방지
    setDatas((prevDatas) => {
      console.log("이전 데이터", prevDatas); // 이전 데이터 로그 출력
      return [input, ...prevDatas]; // 새 데이터를 배열의 맨 앞에 추가하여 반환
    });
    setInput(""); // 입력 필드 초기화
  };

  // JSX를 반환하여 화면에 표시
  return (
    <form onSubmit={handleSubmit}>C:
      {/* 입력 양식과 변경 핸들러 설정 */}
      <input
        type="text"
        placeholder="type here"
        value={input}
        onChange={handleInputChange}
      />
      {/* 제출 버튼 */}
      <button type="submit">submit</button>
    </form>
  );
};
{/* CreateData 컴포넌트를 외부에서 사용할 수 있도록 내보내기*/}
export default CreateData;