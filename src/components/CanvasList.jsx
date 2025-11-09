import CanvasItem from './CanvasItem';

function CanvasList({
  filteredList,
  searchText,
  gridChecked,
  handleDeleteItem,
}) {
  if (filteredList.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600">
          {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
        </p>
      </div>
    );
  }
  return (
    <div
      className={`grid gap-6${gridChecked ? 'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} `}
    >
      {filteredList.map(item => (
        <CanvasItem
          key={item.id}
          category={item.category}
          id={item.id}
          lastModified={item.lastModified}
          title={item.title}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default CanvasList;
