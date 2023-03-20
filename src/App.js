import React, { useState } from "react";
import InputField from "./InputField/InputField";
import Container from "./Container/Container";
import List from "./List/List";
import ARRAY_OF_DATA from "./ArrayOfData";

function App() {
  
  // Data With Changing State Function Link With ARRAY_OF_DATA
  let [DATA, setARRAY_OF_DATA] = useState(ARRAY_OF_DATA);

  //Function With Changing State Function Link With InputField
  function onButtonSubmitGetData(newCreatedExpense){
    setARRAY_OF_DATA(
      (prevArray)=>{
        return [newCreatedExpense , ...prevArray]
      }

    )
  }


  return (
    <div>
      <InputField onBtnSubmitHandler={onButtonSubmitGetData} />
      <Container>
        {DATA.map((value, i) => (
          <List
            date={value.date}
            name={value.name}
            price={value.price}
            key={i}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
