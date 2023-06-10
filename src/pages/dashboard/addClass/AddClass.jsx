import { useContext } from 'react';
import { useForm } from "react-hook-form";
// import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../contexts/AuthProvider';

const img_hosting_token = import.meta.env.VITE_Upload_Image_Token;
import useAxiosSecure from './../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';



const AddToys = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(Response => {
                if (Response.success) {
                    const imgURL = Response.data.display_url;
                    const { total_set, instructor_image, instructor_name, language, topic, price } = data;
                    const newItem = { status: "pending", total_set: parseInt(total_set), available_seats: parseInt(total_set), instructor_image, instructor_name, language, topic, price: parseFloat(price), image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

        console.log(data)
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         if (response?.insertedId) {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Your Toy has been saved',
        //                 showConfirmButton: false,
        //                 timer: 2000
        //             })
        //             reset()

        //         }
        //     })
        //     .catch(err => console.error(err));
        // console.log(data)
    };

    // "image"
    // "topic" -------
    // "language"-------
    // "instructor_name"--------
    // "instructor_email"---------
    // "instructor_image"-----
    // "available_seats"
    // "price"--------
    // "total_set"------
    // "status"

    return (
        <div className=''>
            <Helmet>
                <title>Add Class -Learn Language</title>
            </Helmet>
            <h3 className="text-xl mt-4 mx-8 text-blue-400">Add Class</h3>
            <form className="card-body rounded-lg w-full mx-auto" data-aos="zoom-in" data-aos-duration="3000" onSubmit={handleSubmit(onSubmit)}>
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-slate-600">Class Name</span>
                        </label>
                        <input className="input text-black input-bordered" type='text' {...register("topic", { required: true })} />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-slate-600">Class Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full" {...register("image", { required: true })} />
                    </div>

                </div>
                <div className='md:flex gap-4'>

                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text text-slate-600">Language</span>
                        </label>
                        <select className='input text-black input-bordered' {...register("language", { required: true })}>
                            <option value="Chinese">Chinese</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Japanese">Japanese</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text text-slate-600">Price</span>
                        </label>
                        <input className="input text-black input-bordered" type='number' {...register("price", { required: true })} />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text text-slate-600">Total set</span>
                        </label>
                        <input className="input text-black input-bordered" type='number' {...register("total_set", { required: true })} />
                    </div>
                </div>
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text text-slate-600">Instructor Email</span>
                        </label>
                        <input className="input text-black input-bordered" readOnly type='text' defaultValue={user?.email} {...register("instructor_email")} />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text text-slate-600">Instructor Name</span>
                        </label>
                        <input className="input text-black input-bordered" readOnly type='text' defaultValue={user?.displayName}  {...register("instructor_name")} />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text text-slate-600">Instructor Image</span>
                        </label>
                        <input className="input text-black input-bordered" readOnly type='url' defaultValue={user?.photoURL}  {...register("instructor_image")} />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-600">Detail Description(optional)</span>
                    </label>
                    <textarea className="textarea textarea-success text-black" type='text' placeholder="Detail Description" {...register("detailDescription")}></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" />
                </div>

            </form>
        </div>

    );
};

export default AddToys;