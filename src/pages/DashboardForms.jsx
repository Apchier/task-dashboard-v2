import CheckoutForm from "../components/fragments/dashboard/CheckoutForm";
import ContactForm from "../components/fragments/dashboard/ContactForm";
import Footer from "../components/fragments/dashboard/Footer";

export default function DashboardForms() {
    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="w-full text-3xl text-black pb-6">Forms</h1>

                <div className="flex flex-wrap">
                    
                    <ContactForm />

                    <CheckoutForm />

                </div>
            </main>
            <Footer />
        </div>
    )
}