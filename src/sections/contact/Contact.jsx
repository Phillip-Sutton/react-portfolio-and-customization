import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2> Want to reach Me ?</h2>
      <p>
        Connect With Me via Social Media  </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact