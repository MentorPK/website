import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Highlighter from '~/components/rubberDucking/Highlighter';
import HighlighterTabs from '~/components/rubberDucking/HighlighterTabs';

const priceFunction = `const prices = (kWh) => {  
  const generateRandomNumber = () => Math.round((Math.random() + 0.1) * kWh)
  return [{person: "Pawel", price: generateRandomNumber()}, 
          {person: "Peter", price: generateRandomNumber()}, 
          {person: "Chris", price: generateRandomNumber()}]
}`;

const kwhArray = `const kWh = [1000, 2000, 3000, 4000, 5000];`;

const calculateLowestForEach = `const calculateLowest = (kWhArr) => {
  let calculatePrices = [];
  kWhArr.forEach((item) => {
    const price = prices(item);
    calculatePrices = [...calculatePrices, price];
  });
  return calculatePrices;
};`;

const calculateLowestForEachComments = `const calculateLowest = (kWhArr) => {
  //declare a variable and initialise it with an empty array
  let calculatePrices = [];
  kWhArr.forEach((item) => {
    const price = prices(item);
    //overwrite it and spread the items of the array into it and add the current looped item to it
    //after each loop you will have somehting like [item1], [item1, item2] etc.
    //forEach returns undefined so we need to save it in a variable outside the loop
    calculatePrices = [...calculatePrices, price];
  });
  return calculatePrices;
};`;

const calculateLowestMap = `const calculateLowest = (kWhArr) => {
  return kWhArr.map((item) => {
    return prices(item);
  });
};`;

const returnCalcualteLowest1 = `[
  [
    { person: 'Pawel', price: 463 },
    { person: 'Peter', price: 133 },
    { person: 'Chris', price: 993 }
  ],
  [
    { person: 'Pawel', price: 1569 },
    { person: 'Peter', price: 2156 },
    { person: 'Chris', price: 1272 }
  ],
  [
    { person: 'Pawel', price: 2957 },
    { person: 'Peter', price: 1943 },
    { person: 'Chris', price: 459 }
  ],
  [
    { person: 'Pawel', price: 3488 },
    { person: 'Peter', price: 1083 },
    { person: 'Chris', price: 1439 }
  ],
  [
    { person: 'Pawel', price: 3864 },
    { person: 'Peter', price: 1769 },
    { person: 'Chris', price: 3989 }
  ]
]`;

const calculateLowest3 = `const calculateLowest = (kwhArr) => {
  let lowestItem = {};
  let lowestItemList = []
  
 kwhArr.forEach((outerItem, outerIdx) => {

    const newCalculation = prices(outerItem);
    newCalculation.forEach((innerItem, innerIdx) => {
      if(innerIdx === 0){
        lowestItem = innerItem

      } else if (innerItem.price < lowestItem.price){
        lowestItem = innerItem
      }
   })
      lowestItemList = [...lowestItemList, lowestItem]
  })
  return lowestItemList
}`;

const prices = (kWh) => {
  const generateRandomNumber = () => Math.round((Math.random() + 0.1) * kWh);
  return [
    { person: 'Pawel', price: generateRandomNumber() },
    { person: 'Peter', price: generateRandomNumber() },
    { person: 'Chris', price: generateRandomNumber() },
  ];
};
const kWh = [1000, 2000, 3000, 4000, 5000];

const CodingInterview = () => {
  const calculateLowest = (kWhArr) => {
    let calculatePrices = [];
    kWhArr.forEach((item) => {
      const price = prices(item);
      calculatePrices = [...calculatePrices, price];
    });
    console.log(calculatePrices);
    return calculatePrices;
  };
  console.log(calculateLowest(kWh));
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div>
          First Question: You are provided with a function called 'prices' that
          takes a parameter 'kWh', and it returns a list of objects. Each object
          has two key-value pairs: 'person' and 'price'. The price is determined
          by the input received by the function. Your task is to calculate the
          prices for 1000, 2000, 3000, 4000, and 5000 kwh, and then return only
          the item with the lowest price calculation.
        </div>
        <br /> <br />
        <div>
          The function 'prices' accepts a numeric input and generates a list of
          objects. Due to an undisclosed working mechanism and non-linear
          scaling, we emulate the price calculation using
          'Math.round(Math.random() + 0.1) * kwh' solely for educational
          purposes. The addition of 0.1 to 'Math.random()' is applied to prevent
          obtaining a result of 0. Of course, an alternative number could be
          used instead of 0.1.
        </div>
        <div className="flex 2xl:flex-row flex-col gap-4 my-12 mx-2">
          <Highlighter>{priceFunction}</Highlighter>
        </div>
        <div>To get the caluclations we need to put all kWh into an array.</div>
        <Highlighter>{kwhArray}</Highlighter>
        <div>
          So the first take is to get the calculation for every kWh. We need to
          loop through the kWh Array and pass each item to the price function.
          For this I took the forEach method, but we could use any other loop
          method. Outside the loop we create a variable to save the calculated
          result for each passed kWh item.
        </div>
        <HighlighterTabs
          tabs={[
            calculateLowestForEach,
            calculateLowestForEachComments,
            calculateLowestMap,
          ]}
          names={['forEach()', 'forEach() + c', 'map()']}
        />{' '}
        <div>The result will look like this:</div>
        <Highlighter>{returnCalcualteLowest1}</Highlighter>
        <div>
          So far so good. Now we have the value we want and we can iterate
          through it to get a new list which includes only the lowest price item
          of the inner list. So what do we have here. A function calculateLowest
          that takes one argument kWhArr
        </div>
        <Highlighter>{calculateLowest3}</Highlighter>
      </Container>
      <Footer />
    </div>
  );
};

export default CodingInterview;
