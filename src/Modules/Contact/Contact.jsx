import { memo } from 'react';
import ContactImg from "../../assets/images/Contact.png"

const Contact = () => {
    return (
        <div className='py-[40px]'>
            <div className='container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2.5'>
                {/* Image */}
                <div>
                    <img className='rounded-2xl' src={ContactImg} alt="" />
                </div>
                {/* Form */}
                <div className='bg-stone-50 p-2 sm:p-10 lg:p-14 rounded-3xl shadow-xl flex flex-col justify-center'>

                    {/* Title and Description */}
                    <div className='text-center mb-10'>
                        <h2 className='text-5xl font-extrabold text-slate-800 mb-3 font-serif'>
                            Contact Us
                        </h2>
                        <p className='text-base text-gray-600 max-w-md mx-auto'>
                            We offer a complimentary consultation and will respond to your inquiry within 24 hours.
                        </p>
                    </div>

                    {/* Form Fields */}
                    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className='block text-sm font-semibold text-gray-700 mb-1'>
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Jane Smith"
                                className='w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-slate-500 focus:border-slate-500 bg-white placeholder-gray-400 transition duration-150 ease-in-out text-base'
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-1'>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="jane@example.com"
                                className='w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-slate-500 focus:border-slate-500 bg-white placeholder-gray-400 transition duration-150 ease-in-out text-base'
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className='block text-sm font-semibold text-gray-700 mb-1'>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Write your message"
                                className='w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-slate-500 focus:border-slate-500 bg-white placeholder-gray-400 transition duration-150 ease-in-out resize-none text-base'
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='pt-6'>
                            <button
                                type="submit"
                                className='w-full py-4 bg-slate-800 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:scale-[1.01]'
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default memo(Contact);