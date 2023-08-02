import { useRef, useState } from "react";
import { styles } from "../styles"
import emailjs from "@emailjs/browser"
import { BsFillChatLeftDotsFill } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_k9vslec",
        "template_ysaf1dm",
        {
          from_name: form.name,
          to_name: "Jonathan Guidi",
          from_email: form.email,
          to_email: "jguidi.info@gmail.com",
          message: form.message,
        },
        "7Zsvg85MJ1CsRVjVr"
      )
      .then(
        () => {
          setLoading(false);
          alert("¡Gracias! Intentare comunicarme lo antes posible 🤝");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ocurrio un Error, intentalo denuevo porfavor!");
        }
      );
  };
  return (
    <>

      <div className="w-full overflow-hidden flex justify-center items-center flex-col mt-20 mb-24 px-10">
        <p className={styles.sectionSubText}>¿Tenés una idea de negocio?</p>
        <h2 className={`${styles.sectionHeadText} border-b-2 border-[#DD1D43]`}>Trabajemos!</h2>
      </div>


      <div className="w-full bg-hero-pattern bg-cover bg-no-repeat bg-center z-10 flex items-center justify-center overflow-hidden px-16 py-6 mx-auto">
        <div className='xl:w-2/4 sm:w-fit bg-[#DD1D43] rounded-2xl boxsh-cards p-12 mb-12'>
          <h3 className={`${styles.sectionHeadText} flex gap-4`}>
            Hablemos
            <BsFillChatLeftDotsFill className="text-xxl" />
          </h3>
          <p className={`${styles.sectionSubText} ml-2 text-black font-bold`}>¿Cómo puedo ayudarte?</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Tú Nombre</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="¿Cúal es tu Nombre?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Tú Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="¿Cúal es tu Email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Tú Mensaje</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='¿Cómo puedo ayudarte?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary w-[320px] mx-auto py-3 px-8 rounded-xl outline-none  text-white font-bold shadow-md shadow-primary hover:btn-hover_scale'>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact