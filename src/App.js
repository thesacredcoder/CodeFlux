import "./App.css";
import Logo from "./assets/logo.png";
// import Joi from "joi";
import { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

import { createUser } from "./api";
import leftbg1 from "./assets/leftbg1.svg";

// const userSchema = Yup.object().shape({
//   name: Yup.string().min(3, "Too Short").max(30, "Too long").required(),
//   email: Yup.string().email().required(),
// });

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  // const [errors, setErrors] = useState({});

  // const schema = Joi.object({
  //   name: Joi.string().alphanum().min(3).max(30).required().label("Name"),
  //   email: Joi.string()
  //     .email({
  //       minDomainSegments: 2,
  //       tlds: { allow: ["com", "net"] },
  //     })
  //     .label("Email"),
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const result = schema.validate(formData, { abortEarly: false });
    // if (!result.error) return null;

    // // for (let item of result.error.details) {
    // //   setErrors((errors[item.path[0]] = item.message));
    // // }
    // result.error.details.map((item) => {
    //   setErrors(item);
    // });
    // console.log(errors);
    const result = await createUser(formData);

    console.log(result);
    clear();
  };

  const clear = () => {
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="left w-0 hover:bg-second h-screen md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center">
        <img src={Logo} alt="" />
        <p className="text-white font-accent text-lg">
          We got something for everybody
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-4/5 sm:w-3/5 md:w-1/2 lg:w-3/5">
        <div className="flex flex-col justify-center items-center mb-16">
          {/* <h5 className='fixed top-5 right-5 title text-black font-brand text-3xl font-medium mb-2 uppercase'>
            codeflux
          </h5> */}
          <img
            className="fixed top-5 right-5 h-16 md:hidden"
            src={Logo}
            alt=""
          />

          <div className="mb-0 h-[250px] w-[300px] lg:h-[250px] lg:w-[300px] md:h-[200px] md:w-[250px]">
            {/* <img src={Logo} alt="" /> */}
            <img src={leftbg1} alt="" />
          </div>
        </div>
        <p className="regis mb-8 font-lg text-main font-brand uppercase font-bold">
          Come join us!
        </p>
        <form
          className="flex flex-col w-full justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 rounded-lg outline-main"
          />

          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 rounded-lg outline-main"
          />
          <button
            type="submit"
            className=" button bg-second p-4 rounded-lg text-white font-brand uppercase font-bold tracking-wider w-full md:w-4/5 lg:w-3/5 ease-out transition-all"
          >
            <div className="button-text sm:ml-8 md:ml-8">Register Now</div>
          </button>
        </form>
        {/* <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={userSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col w-full justify-center items-center">
              <Field
                name="name"
                placeholder="Name"
                className="mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 rounded-lg outline-main"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 rounded-lg outline-main"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button
                type="submit"
                className=" button bg-second p-4 rounded-lg text-white font-brand uppercase font-bold tracking-wider w-full md:w-4/5 lg:w-3/5 ease-out transition-all"
              >
                <div className="button-text sm:ml-8 md:ml-8">Register Now</div>
              </button>
            </Form>
          )}
        </Formik> */}
      </div>
    </div>
  );
}

export default App;
