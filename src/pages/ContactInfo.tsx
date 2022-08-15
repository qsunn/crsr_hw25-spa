import { Link } from "react-router-dom";
import { IContact } from "../models";

interface ContactInfoProps {
  contact: IContact;
}

function ContactInfo({ contact }: ContactInfoProps) {
  const maleGender =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";
  const femaleGender =
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";
  const noGender =
    "https://images.unsplash.com/photo-1644725886287-e364305780cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";

  return (
    <div className="pt-[72px] min-h-screen bg-slate-900 text-white grid place-items-center p-[32px]">
      <div className="grid auto-rows-min mx-auto absolute
       place-items-center gap-[8px] p-[16px] pb-[32px] text-center border-slate-700 w-[312px] relative">
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
        <p className="my-[32px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quisquam, omnis autem quos dignissimos cum provident quae natus vero laudantium commodi assumenda quo quam? Facere ipsa mollitia nam magnam molestias quis aspernatur accusantium reprehenderit alias explicabo tempora, exercitationem at itaque nisi, neque tempore iste maiores vitae deserunt assumenda ab dolore.
        </p>
        <Link to="/crsr_hw25-spa/contacts/">
            <button type="button" className="px-4 py-2 bg-indigo-600 hover:text-slate-900 rounded-[4px]">Back</button>
            </Link>
      </div>
    </div>
  );
}

export default ContactInfo;
