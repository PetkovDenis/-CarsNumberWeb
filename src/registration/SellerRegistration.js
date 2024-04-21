import React from "react";
import { useForm } from "react-hook-form";
import "../css/App.css";

function SellerRegistration () {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <p className="title">Регистрация</p>
        

            <form className="App" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Имя" type="text" {...register("name")} />
                <input placeholder="Отчество" type="text" {...register("middleName")} />
                <input placeholder="Фамилия" type="text" {...register("lastName")} />
                <input placeholder="Номер телефона" type="text" {...register("phoneNumber")} />
                <input placeholder="Рабочая почта" type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input placeholder="Пароль" type="password" {...register("password")} />
                <input  type={"submit"} style={{ backgroundColor: "#696969" }} />
            </form>
            <h2>
            <a href="http://localhost:3000/logOrReg">Вернуться назад</a>               </h2>
        </>
    );
}
export default SellerRegistration;
 