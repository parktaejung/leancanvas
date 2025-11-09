import { useState } from 'react';
import CanvasList from '../CanvasList';
import Searchbar from '../Searchbar';
import ViewToggle from '../ViewToggle';
import { createCanvas, deleteCanvas, getCanvases } from '../../api/canvas';
import Loading from '../Loading';
import Error from '../Error';
import Button from '../Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CategoryFilter from '../CategoryFilter';
function Home() {
  const [gridChecked, setGridChecked] = useState(true);
  const [filter, setFilter] = useState({
    searchText: undefined,
    category: undefined,
  });
  const handleFilter = (key, value) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };
  const queryClient = useQueryClient();
  // const [list, setList] = useState([]);

  //데이터 조회

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['canvases', filter.searchText, filter.category],
    queryFn: () => {
      console.log('fetchingData');
      return getCanvases({
        title_like: filter.searchText,
        category: filter.category,
      });
    },

    staleTime: 1000 * 60 * 5, //5분간 fresh 유지
  });
  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: createCanvas,
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
    onError: err => alert(err),
  });

  //삭제
  const { mutate: deleteCanvasMutation } = useMutation({
    mutationFn: deleteCanvas,
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
    onError: err => alert(err),
  });
  const handleDeleteItem = async id => {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }

    deleteCanvasMutation(id);
  };
  const handleSearchText = text => {
    handleFilter('searchText', text);
  };

  const handleCreateCanvas = async () => {
    createNewCanvas();
  };
  return (
    <>
      <div className=" mb-6 flex flex-col sm:flex-row items-center justify-between">
        <Searchbar
          searchText={filter.searchText}
          handleSearchText={handleSearchText}
        />
        <div className="flex gap-2 flex-col w-full sm:flex-row mb-4 sm:mb-0">
          <CategoryFilter
            category={filter.category}
            onChange={val => {
              handleFilter('category', val);
            }}
          />
          <ViewToggle
            gridChecked={gridChecked}
            setGridChecked={setGridChecked}
          />
        </div>
      </div>
      <div className="flex justify-end mb-6">
        <Button onClick={handleCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>

      {isLoading && <Loading />}
      {error && <Error message={error.message} onRetry={refetch} />}
      {!isLoading && !error && (
        <CanvasList
          handleDeleteItem={handleDeleteItem}
          gridChecked={gridChecked}
          filteredList={data}
          searchText={filter.searchText}
        />
      )}
    </>
  );
}

export default Home;
