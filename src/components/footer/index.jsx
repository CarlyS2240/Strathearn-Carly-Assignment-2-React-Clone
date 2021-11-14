import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter,  FaYoutube} from "react-icons/fa";
import {Language, KeyboardArrowDown} from '@material-ui/icons';

import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const Footer = () => {
    return (
        <>
            <div className="listWrapper">
                <ul className="firstList">
                    <h2 className="listHeading">IKEA Family</h2>
                    <p>Bring your ideas to life with rewards, inspiration, discounts and a few surprises along the way. Learn more.</p>
                    <button type="button" className="joinButton">Join now</button>
                </ul>
                <ul className="secondList">
                    <h3>Help</h3>
                    <li>Customer Service</li>
                    <li>FAQ</li>
                    <li>Track my order</li>
                    <li>Reschedule my order</li>
                    <li>Cancel my order</li>
                    <li>Contact us</li>
                    <li>Your safety concerns</li>
                    <li>Product recalls</li>
                    <li>Sell back program</li>
                    <li>Return policies</li>
                    <li>Warranties</li>
                    <li>Feedback</li>
                    <li>Order replacement parts</li>
                    <li>COVID-19 information</li>
                </ul>
                <ul className="thirdList">
                    <h3>Shop and Learn</h3>
                    <li>IKEA Apps</li>
                    <li>Find a location</li>
                    <li>IKEA Services</li>
                    <li>IKEA Catalogue</li>
                    <li>IKEA Family</li>
                    <li>IKEA for Business</li>
                    <li>IKEA Planners</li>
                    <li>IKEA Gift Registry</li>
                    <li>Buying guides</li>
                    <li>Gift cards and balance checker</li>
                    <li>Payment options</li>
                    <li>Gift cards and balance checker</li>
                    <li>Payment options</li>
                </ul>
                <ul className="fourthList">
                    <h3>About IKEA</h3>
                    <li>This is IKEA</li>
                    <li>Jobs</li>
                    <li>Newsroom</li>
                    <li>Life at home</li>
                    <li>A sustainable everyday</li>
                    <li>IKEA Foundation</li>
                </ul>
            </div>
            <div>
            <ul className="socialMediaList">
                    <FaFacebookF className="facebook"></FaFacebookF>
                    <FaInstagram className="instagram"></FaInstagram>
                    <FaPinterest className="pinterest"></FaPinterest>
                    <FaTwitter className="twitter"></FaTwitter>
                    <FaYoutube className="youtube"></FaYoutube>
                    <button type="button" className="countryButton"><Language></Language>Change country</button>
                    <button type="button" className="languageButton">Language<KeyboardArrowDown></KeyboardArrowDown></button>
                </ul>
            </div>
        </>
    )
}