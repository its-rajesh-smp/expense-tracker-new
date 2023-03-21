import React, { useState } from "react";
import InputField from "./InputField/InputField";
import Container from "./Container/Container";
import List from "./List/List";
import ARRAY_OF_DATA from "./ArrayOfData";
import { AddHoverBtn } from "./SillyComponents/SillyComponents";
import ExpenseFilter from "./Filter/ExpenseFilter"


function App() {
  // Data With Changing State Function Link With ARRAY_OF_DATA
  let [DATA, setARRAY_OF_DATA] = useState(ARRAY_OF_DATA);



  //Data Flow-->   ARRAY-OF-DATA >>>>>> DATA-STATE >>>>> NEW-VALUE-AFTER-FILTER >>>>>> container_newvalue.map()
  //! Due to this delete function is not working
  const[getFilterValue,setFilterValue]=useState("ALL")
  function FilterData(e){
    setFilterValue(e)
  }
  let newArrayAfterFilter=DATA.filter((value)=>{
    if(value.date.split("-")[0]===getFilterValue){return value}
  })


  //Function With Changing State Function Link With InputField
  function onButtonSubmitGetData(newCreatedExpense) {
    setARRAY_OF_DATA((prevArray) => {
      return [newCreatedExpense, ...prevArray];
    });
  }

  // AddHoverBtn-Button Click InputField trigger
  const[triggerInputField,triggerInputFieldFunc]=useState(false)

  //Close InputField Child-top flow Usign Function
  const closeInputFieldFunc=()=>{triggerInputFieldFunc(false)}


  //Btn Click On Delete
  function deleteListItem(e){
    //Creating New Array Of New Data
    console.log(e);

    let newDataAfterDelete=DATA.filter((value,i)=>{
      if(i!=e){return value}
    })
    //Sending Data to useState hook of DATA
    setARRAY_OF_DATA(newDataAfterDelete)
  }


  //! A State That mannage the inputfield📃📃📃
  /**
   * 📃📃📃📃
   * As We cannot pass getEditData from editListItem to the InputField
   * Just Beacuse of it getEditData is a parameter of a function and we can't access it outside
   * We Can create a state and we can pass it to the InputField
   * Whenever someone Click on the edit button we can call that state's setgetEditData funtion to update/pass the value to the InputField component
   */
  const[setEditInputField_DATA,setEditInputFieldData_FUNC]=useState("")

  // Btn Click On Edit
  //getEditData <== Geting Id of list when someone Click on Edit Btn
  function editListItem(getEditData){
    triggerInputFieldFunc(true) // Trigger That InputFild AddInputField
    setEditInputFieldData_FUNC(DATA[getEditData]) //Pass Data to Input Field via state variable
  }
  
  



  return (
    <div>
      <AddHoverBtn onTriggerInput={()=>{triggerInputFieldFunc(true)}} />

      {triggerInputField  && <InputField onButtonEdit={setEditInputField_DATA}  onButtonSubmit={onButtonSubmitGetData}  onCloseInput={closeInputFieldFunc} />}

      <ExpenseFilter onFilter={FilterData}/>

      <Container>
        {newArrayAfterFilter.map((value, i) => (
          <List
            onDelete={deleteListItem}
            onEdit={editListItem}
            date={value.date}
            name={value.name}
            price={value.price}
            key={i}
            id={i /*Id For Delete Data */}
          />
        ))}

        {newArrayAfterFilter.length===0 ? <h1>No Expense Found</h1> : <></>}
        {newArrayAfterFilter.length===1 ? <h1>Add More Only One Present</h1> : <></>}


      </Container>
    </div>
  );
}

export default App;
