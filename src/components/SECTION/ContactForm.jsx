const contactForm = () => {
    return (
        <div className="flex p-5 justify-center align-middle">
            <div className="sm:grid sm:w-2/3 w-96 gap-2 tabs tabs-boxed justify-center cursor-pointer shadow-inner shadow-yellow-700 ">
                <a className="pt-5 hover-nav uppercase text-center text-xl">GET IN TOUCH WITH US</a>
                <form action="#" class="mx-auto max-w-xl mt-10 pb-5">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div class="sm:col-span-2">
                            <div>
                                <input placeholder="Full Name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="mt-2.5">
                                <input placeholder="Your Email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="mt-2.5">
                                <textarea placeholder="Write Your Custom Message Here!" name="message" id="message" rows="4" class="uppercase block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div class="flex gap-x-4 sm:col-span-2">
                            <div class="flex h-6 items-center">
                                {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
                                <button type="button" class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                    <span class="sr-only">Agree to policies</span>
                                    {/* <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" --> */}
                                    <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                </button>
                            </div>
                            <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
                                By selecting this, you agree to our
                                <a href="#" class="font-semibold text-indigo-600"> privacy&nbsp;policy</a>.
                            </label>
                        </div>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="block w-full rounded-md px-3.5 py-2.5 font-semibold text-white shadow-sm pt-5 hover-nav uppercase text-center text-xl ">Let's Chat!</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default contactForm;