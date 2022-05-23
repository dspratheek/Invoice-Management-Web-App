import React from 'react';
// import './App.css';
import NavBar from './components/NavBar';
import Bodyheader from './components/Bodyheader';
import Maintable from './components/Maintable';
import Delete from './components/Delete';
import Edit from './components/Edit';
import AddData from './components/AddData';
import AdvSearch from './components/AdvSearch';
import Footer from './components/Footer';

import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openAdvSearch, setOpenAdvSearch] = useState(false);
  const [filteredRows, setFilteredRows] = useState([]);
  const [reLoad, setReLoad] = useState(false);
  const [arr, setArr] = useState([]);
  const [editEl, setEditEl] = useState([]);
  const [rows, setRows] = useState([]);
  const [vals, setVals] = useState([]);
  const [getSearchVals, setSearchVals] = useState("");


  useEffect(() => {
    let filteredRows = [];
    if(vals.length > 0){
      filteredRows = rows.filter((el) => {
        return el.doc_id === vals[0].doc_id && el.invoice_id === vals[0].invoice_id && el.cust_number === vals[0].cust_number && el.buisness_year == vals[0].buisness_year;
      })
      console.log(filteredRows);
    if(reLoad === true){
      setFilteredRows({});
      console.log(reLoad);
      setVals([]);
      return "";
    } 
    if(filteredRows.length>0){
      let obj = {id: filteredRows[0].sl_no,...filteredRows[0]};
      delete obj.sl_no;
      console.log(obj);
      setFilteredRows([obj]);
    }else{
      alert("No Data Found");
    }
  }
  
  if(getSearchVals.length>0){

    let searchedVals = rows.filter((el) => {
      // return el.cust_number === getSearchVals;
      return el.cust_number.includes(getSearchVals);
    })

    if(searchedVals.length>0){
      let newvals = [];
      for(let i = 0; i<searchedVals.length; i++){
        let obj = {id: searchedVals[i].sl_no,...searchedVals[i]};
        delete obj.sl_no;
        newvals.push(obj);
      }
      console.log(newvals);
      
      setFilteredRows(newvals);
      setReLoad(false);
    }
  }
  if(reLoad===true){
    setFilteredRows({});
    setSearchVals("");
  }

  },[vals,rows,reLoad,getSearchVals]);

  let setRowEls = (e) => {
    setRows(e);
  }

  let setEdit = (e) => {
    setEditEl(e);
  }

  let setArray = (e) => {
    setArr(e);
  }
  let setAdd = () => {
    setOpenAddDialog(!openAddDialog);
  }
  const handleDel = () => {
    setOpenDialog(!openDialog);
    console.log(arr);
  }
  const handleEdit = () => {
    setOpenEditDialog(!openEditDialog);
  }
  return (
   <div>
   <NavBar/>
   <Bodyheader setSearchVals={setSearchVals} getSearchVals={getSearchVals} delEls={arr} delFunc={handleDel} getEditDInfo={handleEdit} setAdd={setAdd} setOpenAdvSearch={setOpenAdvSearch} editEl={editEl} setReLoad={setReLoad} reLoad={reLoad} delArr={arr}/>
   <Maintable getRows={setArray} getEdit={setEdit} setRowEls={setRowEls} filteredRows = {filteredRows} reLoad={reLoad} setArr={setArr}/>
   {openDialog && <Delete delArr={arr} delFunc={handleDel} setReLoad={setReLoad} reLoad={reLoad}/>}
   {openEditDialog && <Edit editEl={editEl} handleEdit={handleEdit} setReLoad={setReLoad} reLoad={reLoad}/>}
   {openAddDialog && <AddData setAdd={setAdd} setReLoad={setReLoad} reLoad={reLoad}/>}
   {openAdvSearch && <AdvSearch setVals={setVals} setOpenAdvSearch={setOpenAdvSearch} setReLoad={setReLoad} reLoad={reLoad}/>}
   <Footer/>
   </div>
  );
}

export default App;

