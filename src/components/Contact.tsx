import { IContact } from "../models";

interface ContactProps {
  contact: IContact;
}

function Contact({ contact }: ContactProps) {
  const maleGender =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";
  const femaleGender =
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";
  const noGender =
    "https://images.unsplash.com/photo-1644725886287-e364305780cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";

  return (
    <div className="grid auto-rows-min mx-auto place-items-center gap-[8px] p-[24px] border-t text-center border-slate-700 relative">
      <img
        src={
          contact.gender
            ? contact.gender === "male"
              ? maleGender
              : femaleGender
            : noGender
        }
        alt="gender"
        className="h-[80px] p-[3px] rounded-full border border-slate-700"
      />
      <h1 className="text-xl font-medium">
        {contact.firstName} {contact.lastName}
      </h1>
      <p>{contact.phone}</p>
    </div>
  );
}

export default Contact;
