import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ImWarning } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let from = location.state?.from?.pathname || "/";

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                if (result.user) {
                    saveUser(result.user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Your LogIn Successfully',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
                setError('')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })

    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    saveUser(result.user)
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
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20" >
            <Helmet>
                <title>Sign In  | Learn Language</title>
            </Helmet>
            <div className="w-full p-12" data-aos="fade-left" data-aos-duration="2000">
                <img src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=robertav1_2_sidr" alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className="card w-full p-12">
                    <h1 className="text-5xl font-semibold text-purple-600 text-center">Sign In !!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="join">
                                <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input input-bordered join-item w-full" {...register("password", { required: true })} />
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    className=" bg-purple-400 p-2 rounded join-item"
                                >{showPassword ? (<AiFillEye></AiFillEye>) : (<AiFillEyeInvisible></AiFillEyeInvisible>)}</button>
                            </div>
                            {errors.password && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> password is required</p>}
                        </div>
                        <label className="label">
                            {error && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> {error}</p>}
                        </label>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">LogIn</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary btn-outline"><FaGoogle className='mr-4'></FaGoogle>Google Sign In</button>
                        </div>
                        <label className="label">
                            <p><span>Don&apos;t Have An Account ?</span> <Link to="/register" className='underline text-red-400'>Register</Link></p>
                        </label>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;