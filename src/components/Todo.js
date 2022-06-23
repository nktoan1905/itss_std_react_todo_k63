import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import useStorage from "../hooks/storage";

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage();

  const [filter, setFilter] = React.useState("ALL");

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
  });
  const handleCheck = (checked) => {
    const newItems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };
  const handleAdd = (text) => {
    putItems([...items, { key: getKey(), text, done: false }]);
  };
  const handleFilterChange = value => setFilter(value);
  return (
    <div className="panel">
      <div className="panel-heading has-background-danger has-text-white"><FontAwesomeIcon icon="fa-solid fa-calendar-check" /> ITSS ToDoアプリ</div>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map((item) => (
        <TodoItem key={item.key} item={item} onCheck={handleCheck}></TodoItem>
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
