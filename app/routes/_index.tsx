import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'My Website' }];
};

export default function Index() {
  return (
    <div className="container md:mx-auto">
      <div>test</div>
    </div>
  );
}
