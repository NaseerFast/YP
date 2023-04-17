
import { useRouter } from "next/router";
import NextLink from 'next/link';


export default function Pricing(){

    // const router = useRouter();

  return(
    
    <div className="bg-neutral-900 ">
    <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
            <div className="flex flex-col items-center xl:items-start xl:mx-8">
                <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl dark:text-white">Our Pricing Plan</h1>

                <div className="mt-4">
                    <span className="inline-block w-40 h-1 bg-yellow-400 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-yellow-400 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-yellow-400 rounded-full"></span>
                </div>

                <p className="mt-4 font-medium text-gray-300">
                    You can get All Access by selecting your plan!
                </p>

                <a href="#" className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize dark:text-gray-400 hover:underline hover:text-gray-600 dark:hover:text-yellow-300">
                    <span className="mx-1 ">read more</span>
                    <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>

            <div className="flex-1 xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-3xl text-white">Essential</h1>

                            <p className="mt-4 text-gray-300">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-medium  sm:text-4xl text-gray-300">N2,500 <span className="text-base font-medium">/Month</span></h2>

                            <p className="mt-1 text-gray-300">
                                Yearly payment
                            </p>

                            <NextLink href="https://paystack.com/pay/bnv9iko1wl" passHref>
                             <p className="cursor-pointer text-center w-full px-4 py-2 mt-6 tracking-wide text-slate-800 font-medium capitalize transition-colors duration-200 transform bg-yellow-400 rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-80">Subscribe</p>   
                            </NextLink>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Mobile app</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                        <div className="p-6">
                            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl dark:text-white">Premium</h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl dark:text-gray-300">N25,000 <span className="text-base font-medium">/life time</span></h2>

                            <p className="mt-1 text-gray-500 dark:text-gray-300">
                                One time payment
                            </p>

                            <NextLink href="https://paystack.com/pay/ptjv0jzo1j" passHref>
                             <p className="cursor-pointer text-center w-full px-4 py-2 mt-6 tracking-wide text-slate-800 font-medium capitalize transition-colors duration-200 transform bg-yellow-400 rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-80">Subscribe</p>   
                            </NextLink>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Mobile app</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )



}


