import React, { useState } from "react";

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

/* カスタムフック */
// import useStorage from "../hooks/storage";
import useFbStorage from "../hooks/fbStorage";
/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [items, addItem, updateItem, clearItems] = useFbStorage();

  const [filter, setFilter] = React.useState("ALL");

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
  });
  const handleCheck = (checked) => {
    // const newItems = items.map((item) => {
    //   if (item.key === checked.key) {
    //     item.done = !item.done;
    //   }
    //   return item;
    // });
    updateItem(checked);
  };
  const handleAdd = (text) => {
  };
  const handleFilterChange = (value) => setFilter(value);
  return (
    <div className="panel">
      <div className="panel-heading has-background-danger has-text-white">
        ITSS ToDoアプリ
      </div>
      <Input onAdd={addItem} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayItems.map((item) => (
        <TodoItem key={item.id} item={item} onCheck={handleCheck}></TodoItem>
      ))}
      <div className="panel-block">{items.length} items</div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;
