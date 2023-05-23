import banner from '../images/banner.png';
const bannerStyle = {
  background: `url(${banner})`,
};

const Banner = () => {
  return (
    <div className="h-80 flex" style={bannerStyle}>
      <p className="text-center text-white m-auto">
        HERE WILL BE SOME GREAT BANNER TEXT AND BANNER{' '}
      </p>
    </div>
  );
};

export default Banner;
