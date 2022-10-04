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

function Button({text, className}){
  return(
    <button className={className} onClick={handleClick}>{text}</button>
  )
}
function handleClick(e){
  console.log(document.querySelector('.Form').password.validity)
}

function Form(){
  return(
    <form className="Form">
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        required
          
      >
        {/* <img src=""></img> */}
      </input>
      <input type="text" name="lastName" placeholder="Last Name" required/>
      <input type="email" name="email" placeholder="Email Address" required/>
      <input type="text" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" placeholder="Password" required/>
      <Button className="PrimaryButton" text="CLAIM YOUR FREE TRIAL" onClick={handleClick} />
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
