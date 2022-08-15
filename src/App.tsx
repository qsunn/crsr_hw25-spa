import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./pages/Main";
import Feed from "./pages/Feed";
import Photos from "./pages/Photos";
import Contacts from "./pages/Contacts";
import ContactInfo from "./pages/ContactInfo";
import { contacts } from "./data/contacts";

function App() {
  const baseUrl = "/crsr_hw25-spa";
  return (
    <div className="relative mx-auto min-h-screen bg-black">
      <Nav />
      <Routes>
        <Route path={`${baseUrl}/`} element={<Main />} />
        <Route path={`${baseUrl}/feed`} element={<Feed />} />
        <Route path={`${baseUrl}/photos`} element={<Photos />} />
        <Route path={`${baseUrl}/contacts`} element={<Contacts />} />
        {contacts.map((contact, i) => <Route path={`${baseUrl}/contacts/id=${i}`} element={<ContactInfo contact={contact} />} key={i}/>)}
      </Routes>
    </div>
  );
}

export default App;
