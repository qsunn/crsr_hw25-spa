import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { contacts } from "../data/contacts";

function Contacts() {
  const [searchValue, setSearchValue] = useState("");
  const [filterMale, setFilterMale] = useState(false);
  const [filterFemale, setFilterFemale] = useState(false);
  const [filterAnon, setFilterAnon] = useState(false);

  return (
    <div className="pt-[72px] min-h-screen bg-slate-900 text-white grid auto-rows-min gap-[16px]">
      <form className="text-black mx-auto">
        <div className="flex justify-between text-white">
          <span>
            <input
              type="checkbox"
              id="male"
              defaultChecked
              className="mr-[8px]"
              onClick={() => setFilterMale((prev) => !prev)}
            />
            <label htmlFor="male">Male</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="female"
              defaultChecked
              className="mr-[8px]"
              onClick={() => setFilterFemale((prev) => !prev)}
            />
            <label htmlFor="female">Female</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="anon"
              defaultChecked
              className="mr-[8px]"
              onClick={() => setFilterAnon((prev) => !prev)}
            />
            <label htmlFor="anon">Anon</label>
          </span>
        </div>

        <input
          type="text"
          className="w-[312px] py-[8px] px-[16px] outline-none rounded-[4px] my-[8px]"
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
        />
      </form>
      {contacts
        .filter((contact) =>
          filterMale ? contact.gender !== "male" : contact.gender !== "all"
        )
        .filter((contact) =>
          filterFemale ? contact.gender !== "female" : contact.gender !== "all"
        )
        .filter((contact) =>
          filterAnon ? contact.gender : contact.gender !== "all"
        )
        .filter(
          (contact) =>
            contact.firstName.toLowerCase().includes(searchValue) ||
            contact.lastName.toLowerCase().includes(searchValue) ||
            contact.phone.toLowerCase().includes(searchValue)
        )
        .map((contact, i) => 
          <Link to={`/crsr_hw25-spa/contacts/id=${i}`} key={i}>
            <Contact contact={contact} />
          </Link>
        )}
    </div>
  );
}

export default Contacts;
