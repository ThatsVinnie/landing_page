import styles from './LandingPage.module.css'
import Input from '../form/Input'
import Button from '../form/Buttton'

function LandingPage(){
    const submit = (e) => {
      e.preventDefault()
    }

    return( 
      <section className={styles.landing_container}>
        <h2>Coming soon!</h2>
        <h1>Time to get in shape.</h1>
        <p>Be the first to get access to our newest gym tracker.
          Are you ready to be the best version of you?</p>
        <form onSubmit={submit}>
          <Input type="text" placeholder="Enter your e-mail"/>
          <Button BtnText="Get early access"></Button>
        </form>
      </section>
    )
}

export default LandingPage