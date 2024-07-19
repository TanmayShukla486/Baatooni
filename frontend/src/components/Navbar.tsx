import { Avatar, Button } from '@nextui-org/react';
import { Archive, MessageCircleMore, Search, Users } from 'lucide-react';
import GradientBorder from './GradientBorder';

const Navbar = () => {
  return (
    <div className="bg-slate-800/40 my-8 mx-8 rounded-lg h-20 flex justify-between border border-purple-950 p-2">
      <div className="flex justify-between mt-[12px]">
        <GradientBorder
          className="w-14 h-14 pt-1 pl-1 -mt-2 ml-2 rounded-full hover:scale-125 ease-linear duration-200 hover:mr-2 transition-all"
          startColor="from-start"
          endColor="to-end"
        >
          <Avatar
            src="https://res.cloudinary.com/dcxb97jn7/image/upload/v1721230000/default-pfp.png"
            className="w-12 h-12"
          />
        </GradientBorder>
        <div className="flex justify-between">
          <div className="transition-all hover:ml-2 hover:mr-2">
            <Button
              variant="bordered"
              className="ml-2 bg-gradient-to-br from-start to-end transition-all hover:scale-110 ease-linear duration-200"
            >
              <Users /> <strong>Groups</strong>
            </Button>
          </div>
          <div className="transition-all hover:ml-2 hover:mr-2">
            <Button
              variant="bordered"
              className="ml-2 bg-gradient-to-br from-start to-end transition-all hover:scale-110 ease-linear duration-250"
            >
              <MessageCircleMore /> <strong>Chats</strong>
            </Button>
          </div>
          <div className="transition-all hover:ml-2 hover:mr-2">
            <Button
              variant="bordered"
              className="ml-2 bg-gradient-to-br from-start to-end transition-all hover:scale-110 ease-linear duration-250 "
            >
              <Archive /> <strong>Archived</strong>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button
          variant="bordered"
          className="mr-4 transition hover:bg-gradient-to-br from-end to-start hover:scale-110 ease-soft-spring duration-200"
        >
          <Search /> <strong> Search</strong>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
