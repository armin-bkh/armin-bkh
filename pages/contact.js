import EmailForm from "components/EmailForm/EmailForm";

const ContactPage = () => {
  return (
    <main className="main min-h-smHeight md:min-h-mdHeight p-5 grid grid-cols-1 lg:grid-cols-2">
      <EmailForm />
    </main>
  );
};

export default ContactPage;
