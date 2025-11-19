import { CONTACT } from "../constants";
import resumeFile from "../assets/B-A Resume.pdf"; // Adjust the path if needed

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in touch!</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="border-b hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
        >
          {CONTACT.email}
        </a>
        <div className="my-4">
          <a
            href={resumeFile}
            download
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
