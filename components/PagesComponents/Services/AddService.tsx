import AddNewService from "@/components/Blocks/Services/AddNewService";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";

const AddService = () => {
	// Get categories query
	const {
		data: categories,
		isLoading,
		isError,
		error,
	} = useGetCategoriesQuery({
		page: 1,
		size: 50,
	});

	const categories_list = categories?.data;
	return (
		<div>
			<AddNewService categories_list={categories_list?.data} />
		</div>
	);
};

export default AddService;

