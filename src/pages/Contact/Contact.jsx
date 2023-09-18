import ContactForm from "../../components/ContactForm/ContactForm";
import email from "../../assets/images/email-icon2.svg";
import insta from "../../assets/images/insta-icon2.svg";

function Contact() {
    return (
    <div className="Contact font-body text-left space-y-12 m-16">
        <h1 className="text-6xl font-title pb-4 text-center text-emerald-700">Contact Me</h1>
        <div>
            <ContactForm />
        </div>
        <div className="font-bold">
            <div class="text-2xl space-x-8 flex">
                <div className="ring-emerald-700 rounded-full ring-2 h-28 w-28 flex place-content-center 
                items-center hover:bg-indigo-100 hover:bg-gradient-to-r hover:from-indigo-300/50 hover:to-pink-300/50">
                    <a
                        href="mailto: zmshay2@gmail.com" 
                        target="_blank" 
                        rel="noreferrer noopener">
                            <img 
                                src={email} 
                                alt="Email"
                                className={`h-36 w-36 p-4`}/>
                    </a>
                </div>
                <div className="ring-emerald-700 rounded-full ring-2 h-28 w-28 flex place-content-center items-center
                hover:bg-gradient-to-r hover:from-pink-300/50 hover:to-emerald-300/50">
                    <a
                        href="https://www.instagram.com/mophead.art/" 
                        target="_blank" 
                        rel="noreferrer noopener">
                            <img 
                                src={insta} 
                                alt="Instagram"  
                                className={`h-32 w-32 p-4`}/>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;