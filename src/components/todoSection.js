import React from "react";
import { Collapse } from "antd";

const TodoSection = async () => {
  const todos = await (
    await fetch("http://localhost:3001", { cache: "no-cache" })
  ).json();
  const items = todos.todo.map((ele, index) => {
    return {
      key: ele._id,
      label: ele.title,
      children: <p>{ele.description}</p>,
      extra: <p>{ele.createdAt}</p>,
    };
  });

  return (
    <div className="w-full bg-slate-300 rounded-t-3xl p-10 flex flex-col items-center justify-center">
      <p className="text-xl font-semibold mb-4">My Todos</p>
      <div className="w-full">
        <Collapse className="bg-white" items={items} />
      </div>
    </div>
  );
};

export default TodoSection;
