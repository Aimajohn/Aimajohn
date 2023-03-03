import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {};
type FormValues = {
  name: string;
  email: string;
  title: string;
  text: string;
};

function ContactMe({}: Props) {
  const [sentForm, setSentForm] = useState(false);
  return (
    <div className="pb-20 bg-[#fbae3c] snap-center relative min-h-screen">
      <div className="hidden md:block custom-shape-divider-top-1677819225">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="relative shape-fill"
          ></path>
        </svg>
      </div>
      <div className="pt-20 px-10 lg:px-20">
      <h2 className="leading-tight text-5xl font-[Montserrat] font-bold text-zinc-100 mb-12">
                Love to hear from you,
                <br />
                Get in touch ❤️
              </h2>
        <Formik
          initialValues={{ name: "", email: "", text: "", title: "" }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setSentForm(true);
            console.log("solicitud enviada");
            setTimeout(() => setSentForm(false), 5000);
          }}
          validate={({ email, name, title, text }) => {
            let errors = {} as FormValues;
            if (!name) errors.name = "Ingresa un nombre";
            else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name))
              errors.name = "El nombre solo puede contener letras y espacios";

            if (!email) errors.email = "Ingresa un correo";
            else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
            )
              errors.email =
                "El correo solo puede contener letras, numeros, puntos y guiones";

            if (!text) errors.text = "Ingresa un texto";
            else if (text.length < 3)
              errors.text = "El mensaje debe tener al menos 3 caracteres";
            
              if (!title) errors.title = "Ingresa un titulo";
            else if (title.length < 3)
              errors.title = "El mensaje debe tener al menos 3 caracteres";
            return errors;
          }}
        >
          {({ errors }) => (
            <Form className="mx-auto bg-zinc-900 w-full lg:w-4/5  p-10 lg:p-20 rounded-md text-white font-semibold font-Montserrat text-xl">
              
              <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                <div className=" lg:col-start-1  flex flex-col gap-2">
                  <label htmlFor="name">Nombre</label>
                  <Field
                    className="focus:outline-orange-500 focus:outline-2 outline-none rounded-md text-zinc-800  placeholder:text-base w-full lg:w-5/6 placeholder:text-gray-400 px-4 py-3"
                    id="name"
                    name="name"
                    placeholder="Tu nombre aqui"
                    type="text"
                  />
                  <div className="h-5">
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <span className=" block  text-sm text-red-600 mb-2">{`${errors.name}`}</span>
                    )}
                  />
                  </div>
                </div>
                <div className="w-full lg:row-start-2 flex flex-col gap-y-1 gap-x-2 ">
                  <label htmlFor="email">Email</label>
                  <Field
                    className=" focus:outline-orange-500 focus:outline-2 outline-none  rounded-md text-zinc-800  placeholder:text-base w-full lg:w-5/6 placeholder:text-gray-400 px-4 py-3"
                    id="email"
                    name="email"
                    placeholder="Escribe un correo"
                    type="email"
                  />
                  <div className="h-10 lg:h-5 ">
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <span className=" block  text-sm text-red-600 ">{`${errors.email}`}</span>
                        )}
                      />
                  </div>
                </div>
                {/* <div className="w-full row-start-3 col-start-1 flex flex-col gap-y-1 gap-x-2 ">
                  <label htmlFor="title">Titulo</label>
                  <Field
                    className=" focus:outline-orange-500 focus:outline-2 outline-none rounded-md text-zinc-800  placeholder:text-base w-5/6 placeholder:text-gray-400 px-4 py-3"
                    id="title"
                    name="title"
                    placeholder="Escribe el título"
                    type="title"
                  />
                  <div className="h-5 ">
                      <ErrorMessage
                        name="title"
                        component={() => (
                          <span className=" block  text-sm text-red-600 ">{`${errors.title}`}</span>
                        )}
                      />
                  </div>
                </div> */}
                <div className=" lg:col-start-2 lg:row-start-1 row-end-4 flex flex-col gap-2">
                  <label htmlFor="text">Mensaje</label>
                  <Field
                    className=" focus:outline-orange-500 focus:outline-2 outline-none h-full resize-none  rounded-md text-zinc-800  placeholder:text-base w-full placeholder:text-gray-400 p-4"
                    as="textarea"
                    name="text"
                    id="text"
                    placeholder="Tu mensaje personalizado"
                    rows="5"
                  />
                  <div className="h-5">
                    <ErrorMessage
                      name="text"
                      component={() => <span className=" block  text-sm text-red-600 ">{`${errors.text}`}</span>}
                    />
                  </div>
                </div>
              </div>

              <button className="bg-orange-500  px-10 rounded-md py-3" type="submit"> Enviar </button>
              {sentForm && (
                <div>
                  <span>Formulario enviado</span>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactMe;
