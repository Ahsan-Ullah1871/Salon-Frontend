import AddNewCategory from "@/components/Blocks/Catgory/AddNewCatgory";
import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
} from "@/redux/features/catgeories/categoryApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const AddCategory = () => {
	return (
		<div>
			<AddNewCategory />
		</div>
	);
};

export default AddCategory;

