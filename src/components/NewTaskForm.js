import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText]=useState("")
  const [category, setCategory]=useState("Code")
  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText("");
    setCategory("Code");
  }
  const eachCategory = categories.map((each)=>{
    return <option key={each}>{each}</option>
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} name="text" />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
          {eachCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
