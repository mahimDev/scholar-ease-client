import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const { user, createUser } = useAuth()
    console.log(user)
    const handleRegisterBtn = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const userInfo = Object.fromEntries(form.entries())
        createUser(userInfo.email, userInfo.password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/0nWCqXg/employees-using-laptop-800x450.jpg')]  bg-cover ">
                <div className="backdrop-blur-md bg-black/25 h-[100vh] flex justify-center">
                    <div className="mt-40 border h-fit p-10 rounded-md shadow-2xl  bg-white/20">
                        <h1 className="font-bold text-6xl text-white  text-center mb-9">Register</h1>
                        <form
                            onSubmit={handleRegisterBtn}
                            className="flex flex-col">
                            <input
                                type="text"
                                name="name"
                                className="py-3 pl-4 pr-7   rounded-full mt-5 bg-transparent border-2 text-white"
                                placeholder="Username" />
                            <input
                                type="text"
                                name="photo"
                                className="py-3 pl-4 pr-7   rounded-full mt-5 bg-transparent border-2 text-white"
                                placeholder="PhotoURL" />
                            <input
                                type="email"
                                name="email"
                                className="py-3 pl-4 pr-7   rounded-full mt-5 bg-transparent border-2 text-white"
                                placeholder="Email" />
                            <input
                                type="text"
                                name="password"
                                className="py-3 pl-4 pr-7  rounded-full mt-5 bg-transparent border-2 text-white"
                                placeholder="Password" />
                            <button className="py-2 px-10  font-medium text-lg rounded-full mt-9 text-white bg-secondary hover:shadow-2xl hover:scale-110 duration-500">register</button>
                        </form>
                        <hr className="mt-5" />
                        <div className="flex justify-evenly gap-5 mt-5">
                            <button
                            // onClick={handleGoogleBtn}
                            ><img className="w-12 hover:shadow-2xl hover:scale-110 duration-500 rounded-full" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></button>
                            <button

                            ><img className="w-12 hover:shadow-2xl hover:scale-110 duration-500 rounded-full" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" /></button>

                        </div>
                        <p className="text-white  w-fit mt-4">You have an account Go To <Link to={'/login'}><span className="border-b"> Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;