import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InvoiceDataList.css';
import * as html2canvas from 'html2canvas';

const invoiceDataList = () => {
    const [invoice,setInvoice] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/data')
        .then(response => {
            console.log(response.data)
            setData(response.data)            
            const data = response.data;          
            let m=data.map(c=> {
                return {
                    ...c,
                    amount:c.quantity*c.price,
                    i_no:c.id
                        }
                    })
            let p = m.map(k => {
                axios.post('/api/store',k)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err)
                })
            })                                      
            })
            .catch(err => {
                console.log(err)
            })           
    },[]);   
        useEffect(() => {
            const timer = setTimeout(() => {
                axios.get('/api/invoiceList')
                .then(response => {            
                    setInvoice(response.data);
                  })
                  .catch(err => {
                    console.log(err)
                })
            }, 100);
            return () => clearTimeout(timer);
          }, [data]);    
          
          //function to download the invoice table
          const printDocument = () => {
            const input = document.getElementById('divToPrint');
            html2canvas(input)
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/JPEG');
                const pdf = new jsPDF('l', 'mm', 'a4');
                const width = pdf.internal.pageSize.getWidth();
                const height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 1, 1, width, height);
                // pdf.output('dataurlnewwindow');
                pdf.save("invoice_data.pdf");
              })
            ;
          }

    return(
        <div  className="InvoiceDataList container">           
            <div className="printer" id="divToPrint">
            <h1 className="grow" >Invoice data list</h1>
                <table   className="table table-striped table-bordered box-shadow box-sliding">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>invoice_no</th>
                            <th>product</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>amount</th>
                        </tr>
                        </thead>
                        <tbody>                   
                        {invoice.map(i => (
                            <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.i_no}</td>
                            <td>{i.p_name}</td>
                            <td>{i.order_qty}</td>
                            <td>{i.p_price}</td>
                            <td>{i.amount}</td>
                            </tr>                      
                        ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={printDocument} type="button" class="btn btn-outline-primary btn-rounded waves-effect pdf">Download</button>
            </div>                  
        );
}
export default invoiceDataList;