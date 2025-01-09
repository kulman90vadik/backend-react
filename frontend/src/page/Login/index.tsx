import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import { FormValueslogin, Registerprops } from "../../propstype";
import axios from '../../axios';

const Login = () => {
  const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm({
    defaultValues: { email: "jan@outlook.com", password: "12345" },
    mode: "onChange", // при либом изменении формы
  });

  const onSubmit = async (values:FormValueslogin) => {
    // const data = await dispatch(fetchAuth(values));
    // if(!data.payload) {
    //   return alert('Не удалось авторизоваться')
    // }
    // let {data} = await axios.post<Registerprops>('./auth/login', values)
    
    // console.log(data);
    
    // if('token' in data.payload) {
      //   // любой запрос на сервер проверяет токен а это проверка авторизованости
      //   window.localStorage.setItem('token', data.payload.token);
      // }


      // reset();
  }

  return (
    <section className={styles.login}>
      <div className="container">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.block}>
          <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              {...register("email", { required: "Укажите почту",
                // у нас на сервере валидация на кол-во символов
                // minLength: {
                //   value: 5,
                //   message: 'Минимум 5 символов'
                // }
               })}
              />
            <div className={styles.error}>{errors?.email && <p>Не должно быть пустым</p>}</div>
          </div>
          <div className={styles.block}>
          <label className={styles.label}>Password</label>
          <input 
            className={styles.input} 
            type="text" 
            {...register('password', {required: "Укажите пароль"})}
          />
           <div className={styles.error}>{errors?.password && <p>Не должно быть пустым</p>}</div>
        </div>
          <button disabled={!isValid} className={styles.submit} type="submit">
            Login
          </button>

        </form>
      </div>
    </section>
  );
};

export default Login;


