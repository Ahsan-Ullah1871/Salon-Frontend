// Import the necessary data export types from Prisma Client

import AppointmentStatus from "./ServiceStatus";
import UserRole from "./UserRole";

// User
export type User = {
	id: string;
	email: string;
	name: string;
	phone_number: string;
	address: string;
	profile_image: string | null;
	password: string;
	role: UserRole;
	workers?: Worker[];
	files?: UserFile[];
	appointments?: Appointment[];
	reviews?: Review[];
	created_at?: Date;
	updated_at?: Date;
	blog_posts?: BlogPost[];
	feedbacks?: Feedback[];
};

// Worker
export type Worker = {
	id: string;
	is_authorized: boolean;
	user_id: string;
	user?: User;
	email: string;
	name: string;
	father_name: string;
	mother_name: string;
	is_married: boolean;
	phone_number: string;
	permanent_address: string;
	current_address: string;
	national_id: string;
	birth_date: string;
	worker_history?: CV[];
	schedules?: Schedule[];
	created_at: Date;
	updated_at: Date;
};

// CV
export type CV = {
	id: string;
	worker_id: string;
	age: number;
	exp: number;
	last_job_info: string;
	last_job_salary: number | null;
	last_job_review: string | null;
	last_job_leaving_reason: string | null;
	created_at: Date;
	updated_at: Date;
};

// Category
export type Category = {
	id: string;
	name: string;
	image_url: string;
	image_id: string;
	image_desc: UserFile;
	description: string | null;
	services?: Service[];
	created_at: Date;
	updated_at: Date;
};

// Service
export type Service = {
	id: string;
	name: string;
	image_url: string;
	image_id: string;
	image_desc: UserFile;
	description: string;
	price: number;
	duration: string;
	category_id: string;
	category: Category;
	is_available: boolean;
	schedules?: Schedule[];
	appointments?: Appointment[];
	reviews?: Review[];
	created_at: Date;
	updated_at: Date;
	blog_posts?: BlogPost[];
};

// Schedule
export type Schedule = {
	id: string;
	date: Date;
	start_time: Date;
	end_time: Date;
	available: boolean;
	service_id: string;
	service: Service;
	provider_id: string;
	worker: Worker;
	appointments: Appointment[];
	created_at: Date;
	updated_at: Date;
};

// Appointment
export type Appointment = {
	id: string;
	user_id: string;
	user: User;
	service_id: string;
	service: Service;
	schedule_id: string;
	schedule: Schedule;
	is_paid: boolean;
	is_reviewed?: boolean;
	status: AppointmentStatus;
	date: Date;
	start_time: Date;
	end_time: Date;
	created_at: Date;
	updated_at: Date;
};

// Review
export type Review = {
	id: string;
	user_id: string;
	user: User;
	appointment_id: string;
	appointment: User;
	service_id: string;
	service: Service;
	rating: number;
	comment: string | null;
	created_at: Date;
	updated_at: Date;
};

// BlogPost
export type BlogPost = {
	id: string;
	title: string;
	content: string;
	tags: string;
	author_id: string;
	author: User;
	service_id?: string;
	service?: Service | null;
	image_url: string;
	image_id: string;
	published: boolean;
	publishedAt?: Date | null;
	created_at: Date;
	updatedAt: Date;
};

// Feedback
export type Feedback = {
	id: number;
	user_id: string;
	user: User | null;
	feedback: string;
	rating: number;
	created_at: Date;
	updated_at: Date;
};

// UserFile
export type UserFile = {
	id: string;
	title: string;
	url: string;
	asset_id: string;
	format: string;
	width: number;
	height: number;
	bytes: number;
	description: string | null;
	user_id: string;
	user: User;
	services?: Service[];
	categories?: Category[];
	created_at: Date;
	updated_at: Date;
};

