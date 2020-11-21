import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



function FormPage() {
  return (
<form class="text-center border border-light p-5" action="#!">

<p class="h4 mb-4">Sign in to learn</p>

<p>Join our plateform to learn REACT JS .</p>

<p>
    <a href="" target="_blank">See the last newsletter</a>
</p>

<input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name"/>

<input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail"/>

<button class="btn btn-info btn-block" type="submit">Sign in</button>


</form>
  
    
      
    
  );
}

export default  FormPage;
