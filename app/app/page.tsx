// app\page.tsx
"use client"; // 최상위에서 선언한다 : 하위는 자동 적용됨

import React, { useEffect, useState } from "react";
import CreateData from './comp/CreateData';
import { DatasContext } from './context/CRUDContext';
import ReadData from "./comp/ReadData";
import UpdateData from "./comp/UpdateData";
import DeleteData from "./comp/DeleteData";
import AllCRUD from './comp/AllCRUD';

export default function Home() {
  const [datas, setDatas] = useState<string[]>([]);
  // API 서버로부터 데이터를 가져오는 함수
  return (
    <main>
      <DatasContext.Provider value={{datas, setDatas}}>
        <CreateData/>
        <ReadData/>
        <UpdateData/>
        <DeleteData />
        <AllCRUD/>
      </DatasContext.Provider>
    </main>
  );
}