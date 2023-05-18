import React from "react";
import Styles from "@/styles/pages/contact.module.scss";
import ContactForm from "@/components/contact/ContactForm";

function Page() {
  return (
    <div className={Styles.contact}>
      The Contact Page Component
      <ContactForm />
    </div>
  );
}

export default Page;
