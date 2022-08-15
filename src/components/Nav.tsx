import { Link } from 'react-router-dom';

function Nav() {
  const baseUrl = '/crsr_hw25-spa';
 
  return (
    <nav className="fixed left-0 top-0 right-0 px-[72px] py-[16px] bg-indigo-600 w-full z-10">
      <ul className="flex gap-[24px]">
        <li className="text-white hover:text-black">
          <Link to={`${baseUrl}/`}>Home</Link>
        </li>
        <li className="text-white hover:text-black">
          <Link to={`${baseUrl}/feed`}>Feed</Link>
        </li>
        <li className="text-white hover:text-black">
          <Link to={`${baseUrl}/photos`}>Photos</Link>
        </li>
        <li className="text-white hover:text-black">
          <Link to={`${baseUrl}/contacts/`}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
