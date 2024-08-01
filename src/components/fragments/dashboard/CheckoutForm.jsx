import BtnForm from "../../elements/dashboard/ButtonForm";
import InputField from "../../elements/dashboard/FormBadge";

export default function CheckoutForm() {
    return (
        <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
            <p className="text-xl pb-6 flex items-center">
                <i className="fas fa-list mr-3"></i> Checkout Form
            </p>
            <div className="leading-loose">
                <form className="p-10 bg-white rounded shadow-xl">
                    <p className="text-lg text-gray-800 font-medium pb-4">Customer information</p>
                    <InputField id="cus_name" name="cus_name" type="text" placeholder="Your Name" />
                    <InputField id="cus_email" name="cus_email" type="text" placeholder="Your Email" />
                    <InputField id="cus_address" name="cus_address" type="text" placeholder="Street" />
                    <InputField id="cus_city" name="cus_city" type="text" placeholder="City" />
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <InputField id="cus_country" name="cus_country" type="text" placeholder="Country" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <InputField id="cus_zip" name="cus_zip" type="text" placeholder="Zip" />
                    </div>
                    <p className="text-lg text-gray-800 font-medium py-4">Payment information</p>
                    <InputField id="cus_card" name="cus_card" type="text" placeholder="Card Number MM/YY CVC" />
                    <BtnForm text="$3.00" />
                </form>
            </div>
        </div>
    )
}