import { Avatar } from '@mui/material';
import Heading3 from './ui/typography/Heading3';
import Heading1 from './ui/typography/Heading1';

function RightNav() {
  const contacts = [
    { name: 'John Doe', imgUrl: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', imgUrl: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Mike Johnson', imgUrl: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', imgUrl: 'https://i.pravatar.cc/150?img=4' },
    { name: 'David Brown', imgUrl: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Emma Davis', imgUrl: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Chris Martin', imgUrl: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Sarah Wilson', imgUrl: 'https://i.pravatar.cc/150?img=8' },
    { name: 'James Taylor', imgUrl: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Olivia Miller', imgUrl: 'https://i.pravatar.cc/150?img=10' }
  ];

  return (
    <div className="w-1/5 h-screen p-4 rounded-lg">
      <Heading1 className="mb-4">Contacts</Heading1>
      <div className="space-y-3 overflow-auto max-h-full">
        {contacts.map(contact => (
          <div
            className="flex items-center space-x-4 hover:bg-gray-200 p-2 rounded-md cursor-pointer transition ease-in-out duration-150"
          >
            <Avatar alt={contact.name} src={contact.imgUrl} />
            <Heading3>{contact.name}</Heading3>
            <span className="ml-auto text-green-500">&#x2022;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightNav;