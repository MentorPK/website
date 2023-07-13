interface PSBox {
  company: string;
  year: string;
  logo: string;
  text: string;
}
const PSBOX = ({ company, year, logo, text }: PSBox) => {
  return (
    <div className="my-4 px-4 shadow-box flex flex-col py-4 overflow-hidden text-ellipsis">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-4xl">{company}</h2>
        <div className="text-xl">{year}</div>
      </div>
      <div className="grid flex-row py-4 2xl:grid-cols-2">
        <img src={logo} className="rounded-lg" alt="ecosioPicture" />
        <p className="text-xl pl-4 ">{text}</p>
      </div>
    </div>
  );
};

export default PSBOX;
