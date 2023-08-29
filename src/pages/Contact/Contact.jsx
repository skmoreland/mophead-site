import ContactForm from "../../components/ContactForm/ContactForm";
import email from "../../assets/images/email-icon.webp";
import insta from "../../assets/images/insta-icon.svg";

const icon_size = "h-60 lg:h-20 lg:w-20"

function Contact() {
    return (
    <div className="Contact m-16 font-marker text-left space-y-8">
        <div>
            <h1 className="text-3xl pb-4">Message Me</h1>
            <ContactForm />
        </div>
        <div>
            <h1 className="text-3xl">Contact</h1>
            <div class="grid gap-6 md:grid-cols-2 text-2xl">
                <div className="flex items-center">
                    <img src={email} alt="Email" className={icon_size}/>
                    <h1 className="pl-4">zmshay2@gmail.com</h1>
                </div>
                <div className="flex items-center">
                    <img src={insta} alt="Instagram" className={icon_size}/>
                    <h1 className="pl-4">@mophead.art</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;