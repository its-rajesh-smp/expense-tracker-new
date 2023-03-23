import React, { useState } from "react";
import InputField from "./InputField/InputField";
import Container from "./Container/Container";
import List from "./List/List";
import { AddHoverBtn } from "./SillyComponents/SillyComponents";
import ExpenseFilter from "./Filter/ExpenseFilter";
import Chart from "./Charts/Chart";

function App() {
  //! Get Data From LocalStorage
  let key = Object.keys(localStorage);
  let STORAGEDATA = key.map((value) => {
    return JSON.parse(localStorage.getItem(value));
  });

  //! Updating DOM with data form localStorage
  const [DATASET, DATASET_FUNC] = useState(STORAGEDATA);

  //! Setting Year For Search on the basis of that particular year 📅
  const [yearForSearch, setyearForSearch] = useState("ALL");

  //! Filter
  // Filter By Year 🤲🤲🤲🤲🤲🤲🤲
  function getFilterInput(e) {
    setyearForSearch(e); //Seting Year 📅 for search 🔍 in the basis of year📅

    let FilteredYearData = STORAGEDATA.filter((value) => {
      if (e === "ALL" || e === value.date.split("-")[0]) {
        return value;
      }
    });
    DATASET_FUNC(FilteredYearData);
  }

  // Filter By Search on that particular Year 🤲🤲🤲🤲🤲🤲🤲 📅+🔍
  function getSearchFilterData(e) {
    let FilteredSearchData = STORAGEDATA.filter((value) => {
      if (
        (yearForSearch === "ALL" || value.date.split("-")[0] === yearForSearch) &&
        (e === "" ||
          e === value.date.split("-")[1] ||
          e === value.date.split("-")[2] ||
          value.name.toLowerCase().includes(e.toLowerCase()) ||
          value.price.includes(e))
      ) {
        return value;
      }
    });
    DATASET_FUNC(FilteredSearchData);
  }

  //! ON BUTTON SUBMIT function With Changing State Function Link With InputField
  function onButtonSubmitGetData(newCreatedExpense) {
    // Generating Key 🔑
    let generateKey = Math.random();

    // Also passing the key as value to the localStorage Object
    newCreatedExpense.key = generateKey;
    // Setting Value in localStorage 🔀🔀🔀
    localStorage.setItem(generateKey, JSON.stringify(newCreatedExpense));

    // Updating DOM 🛢️
    DATASET_FUNC((prev) => {
      return [newCreatedExpense, ...prev];
    });
  }

  //! InputField trigger
  // AddHoverBtn-Button Click InputField trigger
  const [triggerInputField, triggerInputFieldFunc] = useState(false);

  // Close InputField Child ➡️ Parent flow Usign Function
  const closeInputFieldFunc = () => {
    triggerInputFieldFunc(false);
  };

  //! Delete on Btn Click
  // Getting Key From List to delete from localstorage Child ➡️ Parent flow Usign Function
  function deleteListItemHandeler(e) {
    // Delete Item From LocalStorage
    localStorage.removeItem(e);

    // Creating New Array to update dom without deleted item 🛢️
    let newArrayAfterDelete = DATASET.filter((value) => {
      if (value.key !== e) {
        return value;
      }
    });

    // Pass New Data After Delete to DATASET_FUNC
    DATASET_FUNC(newArrayAfterDelete);
  }

  //! Edit on Btn Click
  //set Value in item fields
  const [editableData, setEditableData] = useState({
    name: "",
    date: "",
    price: "",
  });

  // Run When Edit Button click
  function editListItemHandeler(e) {
    // When edit button clicked setting the key ass well seting the work to do to handle the normal submit and edit
    setEditableData({
      listKey: e,
      work: "___EDIT___",
      ...JSON.parse(localStorage.getItem(e)),
    });
  }

  //! Run When Submit Button click on edit we will get value after edit
  function onButtonSubmitEditData(editValue) {
    // Replace Data in localstorage
    localStorage.setItem(editValue.key, JSON.stringify(editValue));

    // Generating New Data Array after filter without previous raw un-edited data
    let newUpdatedArray = DATASET.filter((value) => {
      if (value.key !== editValue.key) {
        return value;
      }
    });

    // Update the dom with new updated data array + Finished Edited Data
    DATASET_FUNC([editValue, ...newUpdatedArray]);
  }

  return (
    <div>
      <AddHoverBtn
        onHoverBtnClick={() => {
          triggerInputFieldFunc(true);
        }}
      />

      {triggerInputField && (
        <InputField
          dataForEdit={editableData}
          onButtonEdit={onButtonSubmitEditData}
          onButtonSubmit={onButtonSubmitGetData}
          onCloseInput={closeInputFieldFunc}
        />
      )}

      <ExpenseFilter
        onYearFilter={getFilterInput}
        onSearchFilter={getSearchFilterData}
      />
      {/* 👍👍👍👍👍👍👍 RenderEvertime Whenever App Component reload */}
      <Chart data={DATASET}/>

      <Container>
        {DATASET.map((value, i) => (
          <List
            onDelete={deleteListItemHandeler}
            date={value.date}
            name={value.name}
            price={value.price}
            key={value.key}
            id={value.key}
            onEdit={() => {
              triggerInputFieldFunc(true);
            }}
            getEditableData={editListItemHandeler}
          />
        ))}
      </Container>



    </div>
  );
}

export default App;
