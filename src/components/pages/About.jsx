import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import Error from '../Error';
import Button from '../Button';

function About() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases').then(res => res.data),
    initialData: [],
  });
  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: newCanvas =>
      axios.post('http://localhost:8000/canvases/', newCanvas),
    queryClient: () => {
      queryClient.invalidateQueries(['canvases']);
    },
  });
  const handleCreate = () => {
    createNewCanvas({ title: 'new canvas' });
  };
  return (
    <div>
      <h2 className="text-3xl">useQuery</h2>
      {isLoading && <Loading />}
      {error && <Error />}
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
      {isLoadingCreate && <Loading />}
      <h2 className="text-3xl">useMutation</h2>
      <Button onClick={handleCreate}>dd</Button>
    </div>
  );
}

export default About;
