import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import "./Maintable.css";

const Maintable = ({getRows, getEdit, setRowEls, filteredRows,reLoad, setArr}) => {
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState([]);
    useEffect(() => {
      getEdit(editData);
    },[editData]);
    useEffect(() => {
      setRowEls(data);
    },[data]);


    let slnums = [];
    
    useEffect(async () => {       
        const response =  await axios.get("http://localhost:8080/HRCBackend/GetData");
        setData([...response.data]);
    },[reLoad])
  
    let rows = data.map((el) => {
        let obj = {id: el.sl_no,...el};
        delete obj.sl_no;
        return (obj)
    })

    let arr = Object.keys({...data[0]});
  
    const columns = [
        { field: 'id', headerName: 'Sl No', width: 50 },
        { field: 'business_code', headerName: 'Business Code', width: 130, editable: true },
        { field: 'buisness_year', headerName: 'Business year', width: 110, editable: true },
        { field: 'clear_date', headerName: 'Clear Date', width: 110, editable: true },
        { field: 'cust_number', headerName: 'Customer Number', width: 140, editable: true },
        { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 190, editable: true },
        { field: 'doc_id', headerName: 'Document ID', width: 130, editable: true },
        { field: 'document_create_date', headerName: 'Document Create Date', width: 170, editable: true },
        { field: 'document_type',headerName: 'Document Type',width: 120,editable: true },
        { field: 'due_in_date', headerName: 'Due Date', width: 120,editable: true },
        { field: 'invoice_currency', headerName: 'Invoice Currency', width: 130, editable: true },
        { field: 'invoice_id', headerName: 'Invoice ID', width: 150, editable: true },
        { field: 'posting_date', headerName: 'Posting Date', width: 130, editable: true },
        { field: 'posting_id', headerName: 'Posting ID', width: 100, editable: true },
        { field: 'total_open_amount', headerName: 'Total Open Amount', width: 150, editable: true }
    ]
  
  return (
    <>
    <div style={{ height: 525, width: '100%' }}>

      <DataGrid      
        className="griddata"
        // getRowId={(row) => row.sl_no}
        rows={filteredRows.length > 0 ? filteredRows : rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5,10]}
        checkboxSelection
        disableSelectionOnClick
        sx={{ color: "white", bgcolor: '#2d4250'}}
        rowHeight={38}
        headerHeight={60}
   
        onSelectionModelChange = {(e) => {
          slnums.push(e);  
          if(e.length === 0){
            // return setEditData([]);
            setEditData([]);
            return setArr([]);
          }
          getRows([...slnums[slnums.length-1]]);
          let arr = [];
          if(e.length === 1){
            arr[0] = e[0];
            arr[1] = rows.find((el) => {
              return el.id === e[0];
            }).cust_payment_terms;
            arr[2] = rows.find((el) => {
              return el.id === e[0];
              
            }).invoice_currency;
          }
          setEditData(arr);
        }}
      />
    </div>
        </>
  );

}

export default Maintable;










