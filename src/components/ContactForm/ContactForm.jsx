import React from "react";

const ContactForm = () => {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: ""
      })

      function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form 
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
                            onChange={handleChange}
                            class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        </label>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm text-left">Last Name
                            <input 
                                type="text" 
                                name="lastName"
                                onChange={handleChange}
                                class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                                focus:border-emerald-700 block w-full p-2.5"/>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label> Email
                    <input 
                        type="text" 
                        name="email"
                        onChange={handleChange}
                        class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                        focus:border-emerald-700 block w-full p-2.5"/>
                </label>
            </div>
            <div>
                <label> Subject
                    <input 
                        type="text" 
                        name="subject"
                        onChange={handleChange}
                        class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                        focus:border-emerald-700 block w-full p-2.5"/>
                </label>
            </div>
            <div>
                <label for="large-input"> Message
                    <textarea 
                        rows="4"
                        name="message"
                        onChange={handleChange} 
                        class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 
                        focus:border-emerald-700 block w-full p-2.5 caret-emerald-900"/>
                </label>
            </div>
            <button 
                type="submit" 
                class="shadow-lg shadow-emerald-500/50 px-10 py-4 text-lg text-center text-white 
                bg-emerald-700 rounded-lg hover:bg-emerald-600
                transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;