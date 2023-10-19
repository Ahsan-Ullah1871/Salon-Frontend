import AddNewService from "@/components/Blocks/Services/AddNewService";
import AddNewWorker from "@/components/Blocks/Workers/AddNewWorker";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetUsersQuery } from "@/redux/features/users/userApi";

const AddWorker = () => {
	const {
		data: users,
		isLoading,
		isError,
		error,
	} = useGetUsersQuery({
		page: 1,
		size: 500,
	});

	return (
		<div>
			<AddNewWorker users_list={users?.data?.data} />
		</div>
	);
};

export default AddWorker;

