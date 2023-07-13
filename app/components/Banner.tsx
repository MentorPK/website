import banner from '../images/banner.png';
const bannerStyle = {
  background: `url(${banner})`,
};

const Banner = () => {
  return (
    <div className="h-[256px] flex" style={bannerStyle}>
      <p className="text-center text-7xl text-white m-auto">webpaw solutions</p>
    </div>
  );
};

export default Banner;
