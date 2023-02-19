import { useState, useCallback } from "react";
import { VscAdd } from "react-icons/vsc";
import "./TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => { setValue(e.target.value); }, []);
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
      <button type="submit"><VscAdd /></button>
    </form>
  );
};

export default TodoInsert;
