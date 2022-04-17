import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useRouter } from 'next/router';
const Search = (search) => {
  const router = useRouter();
  const items = search.items;
  const handleOnSelect = (item) => {
    router.push('/post/' + item.slug);
    console.log(item.slug);
  };
  const handleOnFocus = () => {
    console.log(items);
  };
  const formatResult = (item) => {
    console.log(item);
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>
          {item.title}
        </span>
      </>
    );
  };
  return (
    <div style={{ width: 400 }}>
      <ReactSearchAutocomplete
        items={items}
        fuseOptions={{ keys: ['title'] }}
        resultStringKeyName='title'
        onSelect={handleOnSelect}
        placeholder='Arama Yap'
        formatResult={formatResult}
      />
    </div>
  );
};

export default Search;
