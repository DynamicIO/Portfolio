import { CONTACT } from "../constants";
import { LuFileText } from "react-icons/lu";
import professionalResume from "../assets/Ben_Abraham_Professional_Resume.pdf";
import researchResume from "../assets/Ben_Abraham_Research_Resume.pdf";

const RESUMES = [
  { label: "Professional Resume", file: professionalResume, filename: "Ben_Abraham_Professional_Resume.pdf" },
  { label: "Research Resume", file: researchResume, filename: "Ben_Abraham_Research_Resume.pdf" },
];

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in touch!</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
        >
          {CONTACT.email}
        </a>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {RESUMES.map(({ label, file, filename }) => (
            <a
              key={label}
              href={file}
              download={filename}
              className="flex min-h-[44px] w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-neutral-800 px-5 text-sm tracking-normal text-neutral-300 transition-colors duration-200 hover:border-neutral-600 hover:text-white sm:w-auto"
            >
              <LuFileText className="text-base" strokeWidth={1.5} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
