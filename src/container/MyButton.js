import { useSnackbar } from "notistack";
import { Button } from "reactstrap";

const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    return <Button onClick={() => enqueueSnackbar('I love hooks')}>Show snackbar</Button>;
};

export default MyButton