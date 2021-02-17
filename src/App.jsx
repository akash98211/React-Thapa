import React,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () =>
{  
  const [addItem, setaddItem] = useState([]);

  const addNote=(note)=>{
  //  alert("i am clicked");
  setaddItem((prevData) =>{
    return [...prevData,note];
  })
  console.log(note);
  };
  
  const onDelete =(id) =>{
     setaddItem((olddata)=>
     olddata.filter((currdata,indx) =>{
       return indx !== id;
     })
     )   
  };
    return(
        <>
          <Header/>
          <CreateNote passNote={addNote}/>
          
          {addItem.map((val,index)=>{
            return (<Note  
            key={index} 
            id ={index} 
            title={val.title} 
            content={val.content} 
            deleteItem={onDelete}
            /> 
            );
          })}

          <Footer />
        </>
    )
};
export default App;