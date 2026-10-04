import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return <section className="contact">
    <a href="#" className="contact__icon contact__icon--facebook"><FaFacebookF /></a>
    <a href="#" className="contact__icon contact__icon--twitter"><FaTwitter /></a>
    <a href="#" className="contact__icon contact__icon--instagram"><FaInstagram /></a>
  </section>;
};

export default Contact;
