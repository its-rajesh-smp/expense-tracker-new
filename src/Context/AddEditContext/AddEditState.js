import React from 'react';

import AddEditContext from './AddEditContext';

const AddEditState=(props)=>{
    const myAddEditState={
        "BOOL":false
    }

    return (
        <AddEditContext.Provider value={myAddEditState}>
            {props.children}
        </AddEditContext.Provider>
    )
}


export default AddEditState;