import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useEffect } from "react";

export default function AdvSearch({setVals, setOpenAdvSearch, setReLoad, reLoad}) {

  const [run, setRun] = useState(false);

  const [searchValues, setSearchValues] = useState({
    doc_id : "",
    invoice_id : "",
    cust_number : "",
    buisness_year : ""
  });
const validate = (arr) => {
    let search = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ""){
            search = false;
            break;
        }
    }
    return search;
}
let arr = Object.values(searchValues);
  useEffect(() => {
    let res = validate(arr);
    if(run && res){
        setVals([searchValues]);
        setOpenAdvSearch(false);
    }
  },[searchValues,run]);


const handleSearch = () => {
    let res = validate(arr);

    setReLoad(false);
    if (res){
        setRun(true);
    }
}


  const handleChange = (e) => {
    let obj = {...searchValues};
    obj[e.target.name] = e.target.value;
    setSearchValues(obj);
  };

  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250",
            maxWidth: "700px",
          },
        }}
      >
        <DialogTitle style={{ color: "white" }}>Advance Search</DialogTitle>
        <DialogContent>
          
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Document Id"
            type="text"
            fullWidth
            variant="standard"
            value= {searchValues.doc_id}
            name = "doc_id"
            style={{ width: 280, margin: "10px" }}
            onChange = {(e) => handleChange(e)}
          />
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Invoice Id"
            type="text"
            fullWidth
            variant="standard"
            value= {searchValues.invoice_id}
            name = "invoice_id"
            style={{ width: 280, margin: "10px" }}
            onChange = {(e) => handleChange(e)}
          />
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Customer Number"
            type="text"
            fullWidth
            variant="standard"
            value= {searchValues.cust_number}
            name = "cust_number"
            style={{ width: 280, margin: "10px" }}
            onChange = {(e) => handleChange(e)}
          />
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Business Year"
            type="text"
            fullWidth
            variant="standard"
            value= {searchValues.buisness_year}
            name = "buisness_year"
            style={{ width: 280, margin: "10px" }}
            onChange = {(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSearch}>Search</Button>
          <Button onClick={() => setOpenAdvSearch(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
