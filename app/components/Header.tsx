import banner from '../images/banner.png';
const bannerStyle = {
  background: `url(${banner})`,
};

const Header = () => {
  return (
    <div className="h-80 flex" style={bannerStyle}>
      <p className="text-center text-7xl text-white m-auto">
        webpaw solutions{' '}
      </p>
    </div>
  );
};

export default Header;
