interface Divider {
  addStyles?: string;
  horizontal?: boolean;
}

//<div className="inline-block min-h-[2px] min-w-full bg-primary my-2 rounded-full" />;
//       className={`inline-block xl:min-h-[16px] xl:min-w-[2px] min-w-[16px] min-h-[2px] bg-primary my-4 rounded-full ${addStyles}`}

const Divider = ({ addStyles, horizontal }: Divider) => {
  return (
    <div
      className={`inline-block min-h-[2px] min-w-full bg-primary my-4 rounded-full ${addStyles}`}
    />
  );
};
export default Divider;
