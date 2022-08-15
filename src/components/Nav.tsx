import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const baseUrl = '/crsr_hw25-spa';
  const [home, setHome] = useState('text-black');
  const [feed, setFeed] = useState('text-white');
  const [photos, setPhotos] = useState('text-white');
  const [contacts, setContacts] = useState('text-white');

  const homeHandler = () => {
    setHome('text-black');
    setFeed('text-white');
    setPhotos('text-white');
    setContacts('text-white');
  }

  const feedHandler = () => {
    setHome('text-white');
    setFeed('text-black');
    setPhotos('text-white');
    setContacts('text-white');
  }

  const photosHandler = () => {
    setHome('text-white');
    setFeed('text-white');
    setPhotos('text-black');
    setContacts('text-white');
  }

  const contactsHandler = () => {
    setHome('text-white');
    setFeed('text-white');
    setPhotos('text-white');
    setContacts('text-black');
  }

  return (
    <nav className="fixed left-0 top-0 right-0 px-[72px] py-[16px] bg-indigo-600 w-full z-10">
      <ul className="flex gap-[24px]">
        <li className={`${home} hover:text-black`}>
          <Link to={`${baseUrl}/`} onClick={() => homeHandler()}>Home</Link>
        </li>
        <li className={`${feed} hover:text-black`}>
          <Link to={`${baseUrl}/feed`} onClick={() => feedHandler()}>Feed</Link>
        </li>
        <li className={`${photos} hover:text-black`}>
          <Link to={`${baseUrl}/photos`} onClick={() => photosHandler()}>Photos</Link>
        </li>
        <li className={`${contacts} hover:text-black`}>
          <Link to={`${baseUrl}/contacts/`} onClick={() => contactsHandler()}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
