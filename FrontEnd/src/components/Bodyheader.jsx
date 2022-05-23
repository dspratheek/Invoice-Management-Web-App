import React from "react";
import './Bodyheader.css';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { StylesProvider } from "@material-ui/core/styles";
import ButtonGroup from '@mui/material/ButtonGroup';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { useState } from "react";
import { useEffect } from "react";


const Bodyheader = ({delEls, delFunc, getEditDInfo, setAdd, setOpenAdvSearch, editEl, setReLoad, reLoad, setSearchVals, delArr}) => {
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    setSearchVals(inputVal);
  },[inputVal]);

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  }
  
  let value;
  return (
    <>
      <div className="tabbody">
        <div className="left">
          <div className="buttons">
            <Button >PREDICT</Button>
            <Button >ANALATIC VIEW</Button>
            <Button id="but" onClick={() => setOpenAdvSearch(true)}>ADVANCE SEARCH</Button>
          </div>
          <div className="reload"><RefreshOutlinedIcon className="icon" onClick={() => {setReLoad(!reLoad)}}/></div>
          <div className="text">
          <StylesProvider injectFirst>
          <TextField

                    margin="none"
            fullWidth
            style={{ width: 200, margin: "10px 0px 0px 10px",background:"white",borderRadius:"10px",height:"45px"}}
            id="demo-helper-text-aligned-no-helper"
                    label="Search Customer Id"
                    variant="filled"
                    value = {inputVal}
                    onChange={(e) => changeHandler(e)}
                  />
          </StylesProvider>
                  </div>
        </div>
        <div className="right">
        <ButtonGroup variant="outlined" aria-label="outlined button group">

          <Button sx={{ width: 200, color: "white" }} onClick={setAdd}>ADD</Button>
          <Button sx={{ width: 200, color: "white" }} onClick={() => getEditDInfo(true)} disabled={!editEl.length>0}>Edit</Button>             
          <Button sx={{ width: 200, color: "white" }} onClick={() => delFunc()} disabled={!delArr.length>0}>DELETE</Button> 
          </ButtonGroup>            
        </div>             
      </div>             
    </>             
  );             
};             

export default Bodyheader;
