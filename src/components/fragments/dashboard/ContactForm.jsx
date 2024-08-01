import BtnForm from "../../elements/dashboard/ButtonForm";
import InputField from "../../elements/dashboard/FormBadge";

export default function ContactForm() {
    return (
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
            <p className="text-xl pb-6 flex items-center">
                <i className="fas fa-list mr-3"></i> Contact Form
            </p>
            <div className="leading-loose">
                <form className="p-10 bg-white rounded shadow-xl">
                    <InputField id="name" name="name" type="text" placeholder="Your Name" />
                    <InputField id="email" name="email" type="text" placeholder="Your Email" />
                    <InputField id="message" name="message" type="text" placeholder="Message" />
                    <BtnForm text="Submit" />
                </form>
            </div>
        </div>
    )
}