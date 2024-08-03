import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });
  const [isClicked, setIsClicked] = useState(false);
  const expand = () => {
    setIsClicked(true);
  };
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNote(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    })
  };
  const submitNote = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({title:"", content:""});
  };

  return (
    <div>
      <form onClick={expand} className="create-note">
       {isClicked && <input 
          onChange={handleChange} 
          value={note.title} 
          name="title" 
          placeholder="Title" 
          />}
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows= {isClicked ? 3 : 1}/>
        <Zoom in={isClicked}>
        <Fab onClick={submitNote} sx={{backgroundColor:'#f5ba13', '&:hover': {backgroundColor:'gray'}}}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
