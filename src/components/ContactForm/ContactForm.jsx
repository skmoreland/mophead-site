const ContactForm = () => {
    return (
        <form class="font-marker text-left text-lg space-y-4">
            <div>
                <h1>Name</h1>
                <div class="grid gap-6 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm text-left">First Name
                        <input type="text" class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/></label>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm text-left">Last Name
                            <input type="text" class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5"/>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label> Email
                    <input type="text" class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5"/>
                </label>
            </div>
            <div>
                <label> Subject
                    <input type="text" class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5"/>
                </label>
            </div>
            <div>
                <label for="large-input"> Message</label>
                    <textarea rows="4" class="bg-emerald-50 border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5"/>
                
            </div>
            <button type="submit" class="shadow-lg shadow-emerald-500/50 px-10 py-2.5 text-lg text-center text-white bg-emerald-700 rounded-lg focus:ring-4 focus:ring-emerald-800 hover:bg-emerald-600">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;