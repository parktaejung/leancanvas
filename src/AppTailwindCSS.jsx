import Button from './components/TailwindCss/TailwindButton';

const handleClick = () => {};
function AppTailwindCSS() {
  return (
    <>
      <h1 className="text-3xl text-sky-300 font-bold underline">Hello world</h1>
      <Button onClick={handleClick}> TailwindButton</Button>
    </>
  );
}

export default AppTailwindCSS;
