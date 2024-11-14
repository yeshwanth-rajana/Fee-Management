import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Formupdation() {
  const { id } = useParams();
  const [data, setData] = useState({
    username: '',
    email: '',
    totalfee: '',
    discount: '',
    balance: '',
    duedate: '',
    clearedfee: ''
  });
  const [show, setShow] = useState(false);

  const handler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    console.log("Data", data);
  };

  const submitHandler = () => {
    setShow(true);
    const details = {
      username: data.username,
      email: data.email,
      totalfee: data.totalfee,
      discount: data.discount,
      balance: data.balance,
      duedate: data.duedate,
      clearedfee: data.clearedfee
    };
    axios.post(`http://localhost:8000/Formupdation/${id}`, details)
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
        data.details = '';
      })
      .catch((err) => console.log(err)); // Added error handling
  };

  return (
    <div style={{ backgroundImage: `url("https://static2.tripoto.com/media/filter/nl/img/950250/TripDocument/1542527715_psx_20181118_131605.jpg")` }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="row mb-1 pb-2 pb-md-0 mb-md-5">
              <div className="col-md-6">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Username</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="username"
                    value={data?.username || ""}
                    placeholder="Username"
                    onChange={handler}
                    required
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Email</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="email"
                    value={data?.email || ""}
                    placeholder="Email"
                    onChange={handler}
                    required
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Total Fee</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="totalfee"
                    value={data?.totalfee || ""}
                    placeholder="Total Fee"
                    onChange={handler}
                    required
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Discount</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="discount"
                    value={data?.discount || ""}
                    placeholder="Discount"
                    onChange={handler}
                    required
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Balance</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="balance"
                    value={data?.balance || ""}
                    placeholder="Balance"
                    onChange={handler}
                    required
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Due Date</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="duedate"
                    value={data?.duedate || ""}
                    placeholder="Due Date"
                    onChange={handler}
                    required
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1w">Cleared Fee</label>
                  <input
                    type="text"
                    className="form-control-er"
                    name="clearedfee"
                    value={data?.clearedfee || ""}
                    placeholder="Cleared Fee"
                    onChange={handler}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb1" onClick={submitHandler}>Submit</button><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
