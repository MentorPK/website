const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Projects / Jobs</h1>
      <div className="border-2">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-4xl">XRPL.Agency LLC</h2>
          <div className="text-xl">2022</div>
        </div>
        <p className="text-xl">
          Cryptocurrencies and blockhain piqued my interesets to join XRPL.Agency to work on https://xrplcoins.com/. 
          It was my first project and even job outside of Austria. The 9 hours time difference were sometimes tough but managable ;)
        </p>
      </div>
      <div className="border-2 back bg-teal-500/75">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-4xl">ecosio GmbH</h2>
          <div className="text-xl">2017 - 2022</div>
        </div>
        <p className="text-xl">
          ecosio GmbH provides EDI software solutions as a service. Tasks at ecosio started 2017 very simply by adding content 
          and changing the look and feel for their website. I could express myself very freely because 
          at this time no designer was involed and it was always fun to give the website my personal touch. 
          After a while I was part at the frontend team and I started to work on their first supplier relation management tool. 
          The most fun project was the EDI monitor tool which included a lot of fancy animated graphs, which I was very proud to create. 
          It is a tool to visualize all EDI traffic for their customers.
          From time to time tasks were extended even further and included maintaining internal react component libraries, 
          a theme switch tool for their customers and a localization tool. ecosio provided me with my first job as a developer and I am very glad
          that I could spend all these years there that made me into a one!
        </p>
      </div>
    </div>
  );
};

export default Projects;
