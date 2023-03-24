import React, { useState, useRef, FormHTMLAttributes } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

type Props = {};
type FormValues = {
  name: string;
  email: string;
  title: string;
  text: string;
};

function ContactMe({}: Props) {
  const form = useRef<HTMLFormElement>(null);
  const [sentForm, setSentForm] = useState(false);
  return (
    <div className="min-h-screen  flex justify-between flex-col">
      <div
        id="Contact"
        className="min-h-screen bg-[#fbae3c] snap-center relative"
      >
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
        <div className="pt-10 px-10 lg:px-20">
          <h2 className="leading-tight text-5xl font-[Montserrat] font-bold text-zinc-100 mb-12">
            Love to hear from you,
            <br />
            Get in touch ❤️
          </h2>
          <Formik
            initialValues={{ name: "", email: "", text: "", title: "" }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const result = await emailjs.send(
                    "service_7mvg1rk",
                    "template_uft29ye",
                    values ,
                    "2XmBsJNpd-97J62si"
                  )
                // const result = await setTimeout(() => "hola", 5000);
                setSentForm(true);
                setTimeout(() => {
                  resetForm();
                  setSentForm(false);
                  setSubmitting(false);
                }, 5000);
              } catch (error) {
                console.log(error);
              }
            }}
            validate={({ email, name, title, text }) => {
              let errors = {} as FormValues;
              if (!name) {
                errors.name = "Ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
                errors.name = "El nombre solo puede contener letras y espacios";
              }

              if (!email) {
                errors.email = "Ingresa un correo";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
              ) {
                errors.email =
                  "El correo solo puede contener letras, numeros, puntos y guiones";
              }

              if (!text) {
                errors.text = "Ingresa un texto";
              } else if (text.length < 3) {
                errors.text = "El mensaje debe tener al menos 3 caracteres";
              }

              return errors;
            }}
          >
            {({ errors }) => (
              <Form className="relative mx-auto bg-zinc-900 w-full lg:w-4/6  p-10 lg:p-20 lg:py-16 rounded-md text-white font-semibold font-Montserrat text-xl">
                <div className="mb-1 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
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
                        component={() => (
                          <span className=" block  text-sm text-red-600 ">{`${errors.text}`}</span>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="rounded-md  bg-orange-500  px-10 hover:shadow-md transition-all duration-300 py-3"
                  type="submit"
                >
                  Enviar
                </button>

                {sentForm && (
                  <div className="absolute w-full h-full bg-[#0000008c] top-0 left-0 rounded-md">
                    <div className="flex flex-col gap-4 absolute top-[17%] rounded-md w-2/4 ml-[25%] shadow-md  items-center justify-center bg-zinc-800 text-gray-200 h-2/3 text-3xl font-bold font-Montserrat">
                      <span>Formulario enviado</span>
                      <FaPaperPlane className="h-12 w-12 mb-8" />
                    </div>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactMe;
