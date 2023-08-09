import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const Notistack = () => {
  return (
    <div>
      <SnackbarProvider />
      <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
    </div>
  );
};

export default Notistack