import React, {useRef} from "react";
import emailjs from "emailjs-com"

const ContactForm = () => {
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_hg5ih2w",
            "template_5lvex8b",
            form.current,
            "hcMn_NEkcvLZB5Yg2"
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )
    }

    var bgColor = "bg-lime-50"
    var buttonColor = "bg-lime-600"
    var buttonHover = "hover:bg-lime-700"
    var borderColor = "border-lime-400" 
    var buttonShadow = "shadow-lime-500/50"

    return (
        <form 
            ref={form}
            class="font-body text-left text-lg space-y-4"
            onSubmit={handleSubmit}>
            <div>
                <h1>Name</h1>
                <div class="grid gap-6 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm text-left">First Name
                        <input 
                            type="text" 
                            name="firstName"
                            className={`${bgColor} border ${borderColor} text-gray-900 text-sm rounded-lg block w-full p-2.5`}/>
                        </label>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm text-left">Last Name
                            <input 
                                type="text" 
                                name="lastName"
                                class={`${bgColor} border ${borderColor} text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                                focus:border-emerald-700 block w-full p-2.5`}/>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label> Email
                    <input 
                        type="text" 
                        name="email"
                        class={`${bgColor} border ${borderColor} text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                        focus:border-emerald-700 block w-full p-2.5`}/>
                </label>
            </div>
            <div>
                <label> Subject
                    <input 
                        type="text" 
                        name="subject"
                        class={`${bgColor} border ${borderColor} text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                        focus:border-emerald-700 block w-full p-2.5`}/>
                </label>
            </div>
            <div>
                <label for="large-input"> Message
                    <textarea 
                        rows="4"
                        name="message"
                        class={`${bgColor} border ${borderColor} text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                        focus:border-emerald-700 block w-full p-2.5`}/>
                </label>
            </div>
            <button 
                type="submit" 
                class={`shadow-lg ${buttonShadow} px-10 py-4 text-lg text-center text-white 
                ${buttonColor} rounded-lg ${buttonHover}
                transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110`}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;