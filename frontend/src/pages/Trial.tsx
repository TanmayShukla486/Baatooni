import BackgroundCard from '../components/BackgroundCard';
import Navbar from '../components/Navbar';

const Trial = () => {
  return (
    <div className="w-full h-screen overflow-y-auto py-12 flex justify-center items-center scrollbar-hide">
      <BackgroundCard className="w-ninety min-h-screen h-fit overflow-y-auto mt-14">
        <Navbar />
      </BackgroundCard>
    </div>
  );
};

export default Trial;
