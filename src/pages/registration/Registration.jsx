import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ImWarning } from "react-icons/im"
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { saveUser } from "../../api/auth";
import { Helmet } from "react-helmet-async";
const Registration = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile, googleSignIn, logOut } = useContext(AuthContext);
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setError("password dose not match")

        }
        else {
            setError("")
            createUser(data?.email, data?.password)
                .then(() => {
                    updateUserProfile(data?.name, data?.photoURL)
                        .then(() => {
                            logOut();
                            setError('')
                            Swal.fire({
                                icon: 'success',
                                title: 'Your Register Successfully',
                                showConfirmButton: false,
                                timer: 2500
                            })

                            navigate("/login")
                        })
                        .catch(error => {
                            setError(error.message)
                        })
                })
                .catch(error => {
                    setError(error.message)
                })
        }

    };


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    saveUser(result.user);
                    setError('')
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Google LogIn Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }





    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
                <Helmet>
                    <title>Sign Up | Learn Language</title>
                </Helmet>
                <div className="w-full p-12" data-aos="fade-up" data-aos-duration="2000">
                    <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1686147636~exp=1686148236~hmac=f9d5e9e5cccc6273306dd2e8d3e4ca6f76e0dedd3e9534849c18c5d80153bf30" alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                    <div className="card w-full p-12">
                        <h1 className="text-5xl font-semibold text-purple-600 text-center">Sign Up !!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span >Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required {...register("name")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span >Photo URL</span>
                                </label>
                                <input type="url"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span >Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span >Password</span>
                                </label>
                                <div className="join">
                                    <input type={showPassword ? 'text' : 'password'}  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered join-item w-full" />
                                    <button
                                        type="button"
                                        onClick={handleTogglePassword}
                                        className=" bg-purple-400 p-2 rounded join-item"
                                    >{showPassword ? (<AiFillEye></AiFillEye>) : (<AiFillEyeInvisible></AiFillEyeInvisible>)}</button>
                                    {errors.password?.type === 'required' && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span >Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirmPassword" className="input input-bordered" {...register("confirmPassword", { required: true })} />
                                {error && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> {error}</p>}
                                {errors.confirmPassword && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Confirm password is required</p>}

                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline btn-secondary">Register</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary"><FaGoogle className='mr-4'></FaGoogle>Google Sign In</button>
                            </div>
                            <label className="label">
                                <p>Already Have An Account ?<Link to="/login" className='underline text-red-400'> Login</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;