import React from 'react'
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <section>
        <div className='container'>
            <div className='ContectMe'>
                <div className='addressSection'>
                    <div className='FormHadding'>
                        <h2 className='FormHaddingText'>Contact Us</h2>
                        <p>Let's make someting creative! Amazing design just for you.</p>
                    </div>
                    <div className='formInfo'>
                        <div className='formItem'>
                            <h5>EMAIL</h5>
                            <p>nazmulrdo@gmail.com</p>
                        </div>
                        <div className='formItem'>
                            <h5>Phone</h5>
                            <p>01636852859</p>
                        </div>
                    </div>
                </div>
                <div className='formSecion'>
                    <h5>I craft awesome design solutions for you. Let’s message me and make <span>something together!</span></h5>
                    <form className='contactFrom'>
                        <input type="text" placeholder='Full Name' name='user_name' required /><br/>
                        <input type="email" placeholder='Email' name='user_email' required /><br/>
                        <input type="text" placeholder='Subject' name='subject' required /><br/>
                        <textarea name='massage' id='' cols="30" rows="10"></textarea><br/>
                        <button type='submit' className='formBtn'><span>Send Massage</span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe