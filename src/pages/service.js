import * as React from "react"
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Service = (query) => {
const location = useLocation();
const serviceParam = queryString.parse(location.search);
const service = serviceParam.service;
console.log(service)
return (
    <Layout>
        <Seo title="Service" />
        <section className="serviceForm max-w-[40rem] mx-auto mb-40">
            {service === 'plugin' &&
                <>
                    <img 
                        alt="logo"
                        className="block h-[40px] mx-auto mb-5"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5zm9.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM13 2v5h3l-4 4-4-4h3V2h2z' fill='rgba(255,255,255,1)'/%3E%3C/svg%3E"
                    />
                    <h1 className="text-4xl font-bold mb-2 text-center mb-10">
                        Install a plugin
                    </h1>
                    <form 
                        name="plugin"
                        action="/thank-you"
                        method="post"
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="plugin" />
                        <div className="pluginForm--details mb-10">
                            <div className="border-b border-b-white border-opacity-40 pb-3 mb-5">
                                <h3 className="text-md font-bold">
                                    <span className="formSection--number inline-block bg-white rounded-full w-[20px] h-[20px] text-black text-sm text-center mr-3">
                                        1
                                    </span>
                                    Plugin details
                                </h3>
                            </div>
                            <div class="mb-6">
                                <label for="service" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Plugin name
                                    <input type="text" name="service" id="service" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the plugin name" required />
                                </label>
                            </div>

                            <div class="mb-6">
                                <label for="serviceUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Plugin URL
                                    <input type="text" name="serviceUrl" id="serviceUrl" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the plugin URL" required />
                                </label>
                            </div>

                            <div class="mb-6">
                                <label for="servicePurpose" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is the purpose of the plugin?
                                    <textarea rows="4" name="servicePurpose" id="servicePurpose" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know the purpose" />
                                </label>
                            </div>
                            
                            <div class="mb-6">
                                <label for="urgency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">When do you need it done by?
                                    <select id="urgency" name="urgency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="today">Today</option>
                                    <option value="next_week">Next week</option>
                                </select>
                                </label>
                            </div>
                        </div>

                        <div className="pluginForm--website mb-10">
                            <div className="border-b border-b-white border-opacity-40 pb-3 mb-5">
                                <h3 className="text-md font-bold">
                                    <span className="formSection--number inline-block bg-white rounded-full w-[20px] h-[20px] text-black text-sm text-center mr-3">
                                        2
                                    </span>
                                    Website details
                                </h3>
                            </div>
                            <div class="mb-6">
                                <label for="websiteUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Website URL
                                    <input type="text" name="websiteUrl" id="websiteUrl" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your website URL" required />
                                </label>
                            </div>
                        </div>

                        <div className="pluginForm--contact mb-10">
                            <div className="border-b border-b-white border-opacity-40 pb-3 mb-5">
                                <h3 className="text-md font-bold">
                                    <span className="formSection--number inline-block bg-white rounded-full w-[20px] h-[20px] text-black text-sm text-center mr-3">
                                        3
                                    </span>
                                    Contact details
                                </h3>
                            </div>
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Full Name
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your full name" required />
                                </label>
                            </div>

                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                                </label>
                            </div>
                        </div>
                        
                        <button type="submit" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold">Send your task</button>
                    </form>
                </>
            }
            {service === 'theme' &&
                <form name="contact" netlify>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                    <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                    <label>Email <input type="email" name="email" /></label>
                    </p>
                    <p>
                    <button type="submit">Send</button>
                    </p>
                </form>
            }
        </section>
    </Layout>
)
}

export default Service