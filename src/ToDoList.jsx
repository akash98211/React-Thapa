import React from 'react';
import Button from '@material-ui/core/Button';
const ToDoList =()=>
{
  return(
      <>
          <div className="main_div">
              <div className="center_div">
                  <br/>ToDoList<br/>
                  <input type="text" placeholder="add test"/>
                  <Button variant="contained" color="primary">
                   </Button>        
              </div>
          </div>
      </>
  )
};
export default ToDoList;
