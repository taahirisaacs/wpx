import * as React from "react"
import { Link } from "gatsby"

const ServiceItem = ({image, title, price, query}) => (
    <div className="services--item basis-1/3 border border-white border-opacity-50 hover:border-opacity-100  rounded-md p-5">
        <img
        className="mb-2"
        src={image}
        />
        <h4 className="text-md md:text-lg font-bold leading-tight mb-1">
        {title}
        </h4>
        <p className="text-xs mb-4">
        {price}
        </p>
        <Link
        to={`/service?${query}`}
        >
            <button className="text-sm text-opacity-70 bg-white bg-opacity-20 hover:bg-opacity-100 hover:text-black py-1 px-4 rounded-md">
            Select
            </button>
        </Link>
    </div>
)

export default ServiceItem