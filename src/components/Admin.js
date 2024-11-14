import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Adminpage(){
   const[data,setData]=useState([])
   const [isLoading, setIsLoading] = useState(true);
   const { id } = useParams();
  useEffect(()=>{
    console.log('this is useeffect')
    axios.get(`http://localhost:8000/Adminpage/${id}`).then((res)=>{
      setData(res.data);
      setIsLoading(false);
    })
},[id])
 return(
 <React.Fragment>
    {isLoading ? (
      <p style={{ textAlign: 'center' }}>
        <div className="spinner-border text-danger"></div>Loading...
      </p>
    ) : (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">totalfee</th>
            <th scope="col">discount</th>
            <th scope="col">balance</th>
            <th scope="col">duedate</th>
            <th scope="col">clearedfee</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.totalfee}</td>
              <td>{item.discount}</td>
              <td>{item.balance}</td>
              <td>{item.duedate}</td>
              <td>{item.clearedfee}</td>
              <td>
                <button type="button" className="btn btn-outline-warning">
                  <Link to={`/Formupdation/${item.id}`}>Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </React.Fragment>
);
}
