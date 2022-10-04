import logo from './logo.svg';
import './App.css';


function TextSection({title, paragraph}){
  return(
    <section className="TextSection">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </section>
  )
}

function Button({text, className, onClick}){
  return(
    <button className={className} onClick={onClick}>{text}</button>
  )
}
function handleClick(e){
  e.preventDefault()
  document.querySelectorAll('input').forEach(el => {
    if(!el.validity.valid){
      el.classList.add('invalid')
    }
    else{
      el.classList.remove('invalid')
    }
    if(el.validity.valueMissing){
      el.nextSibling.innerHTML=`${el.placeholder} cannot be empty`
    }
    else if(el.name == "email" && !el.validity.valueMissing && !el.validity.valid){
      el.nextSibling.innerHTML='Invalid Email Address'
    }
    else{
      el.nextSibling.innerHTML=''
    }

    if(el.name == "password" && !el.validity.valid && !el.validity.valueMissing){
      document.querySelector('.passwordInvalid').classList.remove('hidden')
    }
    else{
      document.querySelector('.passwordInvalid').classList.add('hidden')
    }
  })
  const arr = [...document.querySelectorAll('input')]
  if(arr.filter(el => el.validity.valid == true).length == 4){
    resetForm()
  }
}

function resetForm(){
  document.querySelectorAll('input').forEach(el =>{
    el.value = ''
  })
  document.querySelector('.SuccessMessage').classList.remove('hidden')
}

function Form(){
  return(
    <form className="Form">
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        required
      /> 
      <span className='InputEmpty'></span>

      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        required
      />
      <span className='InputEmpty'></span>

      <input 
        type="email" 
        name="email" 
        placeholder="Email Address" 
        required
      />
      <span className='InputEmpty'></span>

      <input 
        type="text" 
        name="password" 
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
        placeholder="Password" 
        required
      />
      <span className='InputEmpty'></span>
      <span className="passwordInvalid hidden">Password must be at least 6 characters long and contain an uppercase letter, a lowercase letter, a number and a special symbol.</span>
      <Button className="PrimaryButton" text="CLAIM YOUR FREE TRIAL" onClick={handleClick} />
      <span className="SuccessMessage hidden">Submitted Successfully</span>
      <span className="TermsSpan">By clicking the button, you are agreeting to our <a href="#">Terms and Services.</a></span>
    </form>
  )
}


function App() {
  return (
    <div className="App">
      <TextSection 
        title="Learn to code by watching others" 
        paragraph="See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how developers think
        is invaluable."
        />
      <section className="FormSection">
        <Button className="AccentButton" text="Try it free 7 days"/>
        <Form />
      </section>

    </div>
  );
}

export default App;
