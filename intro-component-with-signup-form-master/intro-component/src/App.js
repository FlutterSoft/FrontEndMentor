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
    <button className={className}>{text}</button>
  )
}

function Form(){
  return(
    <form className="Form">
      <input type="text" placeholder="First Name"/>
      <input type="text" placeholder="Last Name"/>
      <input type="email" placeholder="Email Address"/>
      <input type="text" placeholder="Password"/>
      <Button className="PrimaryButton" text="CLAIM YOUR FREE TRIAL" />
      <span class="TermsSpan">By clicking the button, you are agreeting to our <a href="#">Terms and Services.</a></span>
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
