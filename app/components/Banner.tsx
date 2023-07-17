import webpawLogo from '../images/webpawLogo.png';
import webpawFont from '../images/webpawFont.png';
import solutionsFont from '../images/solutionsFont.png';

//Font design from https://www.fontspace.com/4-brain-font-f52281
const Banner = () => {
  return (
    <div className="h-[340px] md:h-[350px] flex md:flex-row flex-col md:gap-8 gap-2 justify-center items-center bg-richBlack">
      <img
        src={webpawLogo}
        alt="webpaw logo"
        className="md:h-[250px] h-[200px]"
      />
      <div className="flex md:flex-row flex-col gap-2 md:gap-6">
        <img src={webpawFont} alt="webpaw font" className="h-[42px]" />
        <img src={solutionsFont} alt="solutions font" className="h-[42px]" />
      </div>
    </div>
  );
};

export default Banner;
