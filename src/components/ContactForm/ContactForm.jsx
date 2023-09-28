import React, {useRef, useState} from "react";
import emailjs from "emailjs-com"
import exitIcon from "../../assets/images/BlobClose.png"

const ContactForm = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function openModal() {
        setShowModal(showModal => !showModal);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var validForm = true;
        var missingFields = [];

        if(firstName.length===0){
            validForm = false;
            missingFields.push("first name")
        }

        if(lastName.length===0){
            validForm = false;
            missingFields.push("last name")
        }

        if(email.length===0){
            validForm = false;
            missingFields.push("email")
        }

        if(message.length===0){
            validForm = false;
            missingFields.push("message")
        }

        if(validForm) {
            openModal()
        
            // emailjs.sendForm(
            //     "service_hg5ih2w",
            //     "template_5lvex8b",
            //     form.current,
            //     "hcMn_NEkcvLZB5Yg2"
            // ).then(
            //     result => console.log(result.text),
            //     error => console.log(error.text)
            // )
        } else {
            var alertMsg = `INVALID FORM: Please fill out the following fields before submitting the form: ${missingFields.join(', ')}`
            alert(alertMsg)
        }
    }

    const inputStyle = `p-2.5 
                        bg-lime-50
                        border border-lime-400
                        text-gray-900 text-sm 
                        rounded-lg 
                        block w-full outline-none focus:ring-2 focus:ring-lime-700`

    return (
        <div>
            <form 
                ref={form}
                class={`font-body text-left text-lg space-y-4`}
                onSubmit={handleSubmit}>
                <div>
                    <h1>Name</h1>
                    <div class={`grid gap-6 md:grid-cols-2`}>
                        <div>
                            <label class="block mb-2 text-sm text-left">First Name
                            <input 
                                type="text" 
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                className={`${inputStyle}`}/>
                            </label>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm text-left">Last Name
                                <input 
                                    type="text" 
                                    name="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    class={`${inputStyle}`}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <label> Email
                        <input 
                            type="text" 
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            class={`${inputStyle}`}/>
                    </label>
                </div>
                <div>
                    <label> Subject
                        <input 
                            type="text" 
                            name="subject"
                            class={`${inputStyle}`}/>
                    </label>
                </div>
                <div>
                    <label for="large-input"> Message
                        <textarea 
                            rows="4"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            class={`${inputStyle}`}/>
                    </label>
                </div>
                <button 
                    type="submit"
                    class={`
                    shadow-lg shadow-lime-500/50
                    px-10 py-4 
                    text-lg text-center text-white 
                    bg-lime-600 rounded-lg hover:bg-hotpink
                    transition ease-in-out hover:scale-110`}>
                    Submit
                </button>
            </form>
            {showModal && (
                <div className="fixed top-0 left-0 z-[1000] 
                flex justify-center items-center
                w-screen h-screen 
                bg-black/70  ">
                    <div className={`p-4 m-4 lg:m-0 space-y-4 
                    bg-lime-100 
                    border-4 border-lime-600 rounded lg:w-1/3`}>
                        <div className="flex justify-between items-center">
                            <h1 className="font-title text-3xl"><b>Message Sent!</b></h1>
                            <button
                                onClick={openModal}
                                className="sticky z-90 top-6 right-8"
                            >
                                <img 
                                    src={exitIcon}
                                    alt="Close"
                                    className="w-12 hover:fill-black"
                                />
                            </button>
                        </div>
                        <p className="font-body text-xl">
                            Your message to Mophead art has been received! You will receive an email confirming your message.
                            The owner of Mophead art will get back to you shortly.
                        </p>
                    </div>
                </div>
            )}
        </div>

    );
}

export default ContactForm;