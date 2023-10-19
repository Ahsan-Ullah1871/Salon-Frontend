import AddNewSchedule from "@/components/Blocks/Schedule/AddNewSchedule";
import AddNewService from "@/components/Blocks/Services/AddNewService";
import AddNewWorker from "@/components/Blocks/Workers/AddNewWorker";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";
import { useGetWorkersQuery } from "@/redux/features/workers/workerApi";

const AddSchedule = () => {
	const {
		data: workers,
		isLoading,
		isError,
		error,
	} = useGetWorkersQuery({
		page: 1,
		size: 500,
	});

	//
	const { data: services } = useGetServicesQuery({
		page: 1,
		size: 500,
	});

	return (
		<div>
			<AddNewSchedule
				workers={workers?.data?.data}
				services={services?.data?.data}
			/>
		</div>
	);
};

export default AddSchedule;

