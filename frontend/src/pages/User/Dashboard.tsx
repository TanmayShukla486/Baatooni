import { Image } from '@nextui-org/react';
import BackgroundCard from '../../components/BackgroundCard';

const Dashboard = () => {
  return (
    <div className="w-full h-screen overflow-y-auto py-12 flex justify-center items-center scrollbar-hide">
      <BackgroundCard className="w-ninety min-h-screen h-fit overflow-y-auto mt-60 pb-12 scrollbar-hide">
        <div className="flex justify-between items-center">
          <div className="flex mt-12 -mb-8 pb-4 mx-12 w-fit">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
              Hello{' '}
              <span className="bg-gradient-to-br from-textStart to-textEnd inline-block text-transparent bg-clip-text">
                Caroline
              </span>
            </h1>
          </div>
          <div className="transition hover:scale-110 ease-linear duration-200">
            <Image
              src="./logo.png"
              className="w-[75px] h-[75px] mr-12 mt-8 -mb-8 rounded-full"
            />
          </div>
        </div>

        <div className="flex-col w-full h-full items-center mt-12 overflow-y-auto scrollbar-hide">
          <div className="flex justify-between mx-8 mt-12 w-auto h-[300px]">
            <BackgroundCard className="w-3/5 mx-4 bg-slate-800/40 border border-white">
              <div>Daily Usage</div>
            </BackgroundCard>
            <BackgroundCard className="w-2/5 mx-4 bg-slate-800/40 border border-white">
              <div>Pie Chart</div>
            </BackgroundCard>
          </div>
          <div className="flex justify-between mx-8 mt-12 w-auto h-72">
            <BackgroundCard className="w-2/5 mx-4 bg-slate-800/40 border border-white">
              <div>Groups</div>
            </BackgroundCard>
            <BackgroundCard className="w-2/5 mx-4 bg-slate-800/40 border border-white">
              <div>Contacts</div>
            </BackgroundCard>
            <BackgroundCard className="w-2/5 mx-4 bg-slate-800/40 border border-white">
              <div>Blocked People</div>
            </BackgroundCard>
          </div>
        </div>
      </BackgroundCard>
    </div>
  );
};

export default Dashboard;
