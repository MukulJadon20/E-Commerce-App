import toast from "react-hot-toast";

const AxiosTostError = async (error) => {
  toast.error(error?.response?.data?.message);
};

export default AxiosTostError
