import { format } from 'date-fns';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import SearchFilters from './SearchFilters';
import ListingCards from './ListingCards';
import { ListingCardData } from '../types/app';
import { getListingData } from '../utils/api';
import Map from '../components/Map/Map';


type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const ListingCardItems: ListingCardData = await getListingData();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests == '1' ? numOfGuests + ' ' + 'guest' : numOfGuests + ' ' + 'guests'}`} />
        <main>
          <section className='pt-14'>
            <div className='container flex'>
              <div>
              <h1 className='text-2xl font-semibold'>
              Over 500 places in {location}
              </h1>
              <p className='text-sm'>
                {range} - for {numOfGuests} guests
              </p>
              <SearchFilters />
              <div>
                {ListingCardItems.map((card) => (
                  <ListingCards 
                  key={card.title}
                  img={card.img}
                  location={card.location}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  total={card.total}
                  star={card.star}
                  />
                ))}
              </div>
              </div>
              <div className='hidden xl:inline-flex xl:min-w-[600px]'>
                <Map ListingCardItems={ListingCardItems} />
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
};

export default SearchResult;