import { useForm } from "react-hook-form";

const Registration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch("example"));

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
                <div className="w-full p-12">
                    <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1686147636~exp=1686148236~hmac=f9d5e9e5cccc6273306dd2e8d3e4ca6f76e0dedd3e9534849c18c5d80153bf30" alt="" />
                </div>
                <div>
                    <div className="card w-full p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" {...register("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
                                <label className="label">
                                    {errors.password && <span>This field is required</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form> */}
        </>
    );
};

export default Registration;