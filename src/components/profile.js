import React, {useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Profile() {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
setTimeout(() => {
setIsLoading(false);
}, 100);
}, []);
const useparam = useParams();
const { id } = useparam
useEffect(() => {
console.log('this is useeffect')
axios.get(`http://localhost:8000/Profile/${id}`).then((res) => {
setData(res.data);
})
}, [id])
return (
<section class="vh-100" >
<div class="container py-5 h-100">
<div class="row d-flex justify-content-center align-items-center h-100">
<div class="col col-lg-6 mb-4 mb-lg-0">
<div class="card mb-3">
<div class="row g-0">
<div class="col-md-4 gradient-custom text-center text-white">
<img src="https://mdbcdn.b-cdn.net/img/Photos/newtemplates/bootstrap-chat/ava1-bg.webp"alt="Avatar" class="img-fluid my-5" />
<h2>Anirudh Addagalla</h2>
<p>Web Designer</p>
<i class="far fa-edit mb-5"></i>
</div>
<div class="col-md-8">
<div class="card-body p-4">
<h6>Information</h6>
<hr class="mt-0 mb-4"></hr>
<div class="row pt-1">
<div class="col-6 mb-3">
<h6>Email</h6>
<p class="text-muted">abhi@gmail.com</p>
</div>
<div class="col-6 mb-3">
<h6>Phone</h6>
<p class="text-muted">123 456 789</p>
</div>
</div>
<h6>Projects</h6>
<hr class="mt-0 mb-4"></hr>
<div class="row pt-1">
<div class="col-6 mb-3">
<h6>Recent</h6>
<p class="text-muted">Lorem ipsum</p>
</div>
<div class="col-6 mb-3">
<h6>Most Viewed</h6>
<p class="text-muted">Dolor sit amet</p>
</div>
</div>
<div class="d-flex justify-content-start">
<a href="#!"><i class="fab fa-facebook-f fa-lg me3"></i></a>
<a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
<a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
)
}
