import React from "react";
import { useForm } from "react-hook-form";
import "../css/App.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <>
            <p className="title">Вход в аккаунт</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Рабочая почта" type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input placeholder="Пароль" type="password" {...register("password")} />
                <input oc type={"submit"} style={{ backgroundColor: "#696969" }} />
            </form>
            <a href="http://localhost:3000/logOrReg">Вернуться назад</a>   

        </>
    );
}
export default Login;