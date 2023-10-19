import AddNewBlog from "@/components/Blocks/Blogs/AddNewBlog";
import AddNewService from "@/components/Blocks/Services/AddNewService";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";

const AddBlog = () => {
	// Get categories query
	const {
		data: services,
		isLoading,
		isError,
		error,
	} = useGetServicesQuery({
		page: 1,
		size: 100,
	});

	const services_list = services?.data;
	return (
		<div>
			<AddNewBlog services_list={services_list?.data} />
		</div>
	);
};

export default AddBlog;

