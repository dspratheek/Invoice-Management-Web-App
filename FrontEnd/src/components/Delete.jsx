import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";


export default function Delete({delArr, delFunc, setReLoad, reLoad}) {

const handleDel = async() => {

    const parseAsStr = (arr=[]) => {
      let str = "";
      arr.forEach((el) => {
        str += `sl_no_arr=${el}&`;
      });
    
      return str.slice(0,-1);
    };
    const delQry = parseAsStr(delArr);
    delFunc();
    let response = await axios.get(`http://localhost:8080/HRCBackend/DeleteRow?${delQry}`);
    setReLoad(!reLoad);
}
const handleCancel = () => {
    delFunc();
}
  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250",
            maxWidth: "800px",
          },
        }}
      >
        <DialogTitle style={{ color: "white" }}>Delete Records ?</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "white" }}>
            Are you sure you want to delete these record[s] ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleDel}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
