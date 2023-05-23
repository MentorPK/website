import type { V2_MetaFunction } from '@remix-run/node';
import Banner from '~/components/Banner';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'My Website' }];
};

const gradientBackground = {
  height: '200px',
  backgroundImage:
    'linear-gradient(306deg,rgba(54,54,54,.01),hsla(0,0%,100%,.05) 99.999%),linear-gradient(353deg,rgba(81,81,81,.05),rgba(81,81,81,.05) 33.333%,hsla(0,0%,93%,.05) 0,hsla(0,0%,93%,.05) 66.666%,rgba(32,32,32,.05) 0,rgba(32,32,32,.05) 99.999%),linear-gradient(140deg,hsla(0,0%,75%,.05),hsla(0,0%,75%,.05) 33.333%,hsla(0,0%,43%,.05) 0,hsla(0,0%,43%,.05) 66.666%,rgba(30,30,30,.05) 0,rgba(30,30,30,.05) 99.999%),linear-gradient(189deg,rgba(77,77,77,.05),rgba(77,77,77,.05) 33.333%,rgba(55,55,55,.05) 0,rgba(55,55,55,.05) 66.666%,hsla(0,0%,57%,.05) 0,hsla(0,0%,57%,.05) 99.999%),linear-gradient(90deg,#09c9ba,#1283dd)',
};

export default function Index() {
  return (
    <div>
      <Banner />
      <div className="container md:mx-auto">
        <div style={gradientBackground}></div>
        <div>test</div>
      </div>
    </div>
  );
}
