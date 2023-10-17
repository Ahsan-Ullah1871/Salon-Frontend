"use client";
import { redirect } from "next/navigation";
import React from "react";

const AdminPage = () => {
	return redirect("/admin/dashboard");
};

export default AdminPage;

