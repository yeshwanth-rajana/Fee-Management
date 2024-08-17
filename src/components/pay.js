import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
// import './pay.css';
export default function Pay() {
return (
<div class="pay">
<Helmet><script src='pay1.js' 
type='text/javascript'></script></Helmet>
<div class="container py-5">
{/* <!-- For demo purpose --> */}.
<div class="row mb-4">
<div class="col-lg-8 mx-auto text-center">
<h1 class="display-6"> Payment Gateway</h1>
</div>
</div>
{/* <!-- End --> */}
<div class="row">
<div class="col-lg-6 mx-auto">
<div class="card ">
<div class="card-header">
<div class="bg-white shadow-sm pt-4 pl-2 pr-2 
pb-2">
{/* <!-- Credit card form tabs --> */}
68
<ul role="tablist" class="nav bg-light 
nav-pills rounded nav-fill mb-3">
<li class="nav-item"> <a datatoggle="pill" href="#credit-card" class="nav-link active "> <i class="fas facredit-card mr-2"></i> Pay Using QR </a> </li>
</ul>
</div>
{/* <!-- Credit card form content --> */}
<div class="tab-content">
{/* <!-- credit card info--> */}
<div id="credit-card" class="tab-pane fade 
show active pt-3">
<form role="form" 
onsubmit="event.preventDefault()">
<img class="img-fluid" src="qr 
pay.jpeg" alt="..." />
</form>
</div>
{/* <!-- Paypal info --> */}
<div class="form-group">
<center><p> <button type="button" 
class="btn btn-primary "><i class="fas fa-mobile-alt mr-2"></i> Proceed 
Payment</button> </p></center>
</div>
<p class="text-muted">Note: As you are 
aware we are only accepting payments through QR at the moment .After clicking 
on the button, you will be directed to a secure gateway for payment. After 
completing the payment process, you will be redirected back to the website to 
view details of your order. </p>
</div>
{/* <!-- End --> */}
</div>
</div>
</div>
</div>
</div>
</div>
)
}
