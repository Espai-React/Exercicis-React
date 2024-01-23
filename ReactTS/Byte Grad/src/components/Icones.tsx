import { FaAddressBook } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaAccessibleIcon } from 'react-icons/fa';

const icona1 = (
  <div className='flex gap-2 items-center'>
    <span>Botó blau</span>
    <FaAddressBook />
  </div>
);

const icona2 = (
  <div className='flex gap-2 items-center'>
    <span>Botó vermell</span>
    <FaArchive />
  </div>
);

const icona3 = (
  <div className='flex gap-2 items-center'>
    <span>Botó vermell</span>
    <FaAccessibleIcon />
  </div>
);

export { icona1, icona2, icona3 };
