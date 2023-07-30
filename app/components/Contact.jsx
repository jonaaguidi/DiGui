import { useRef, useState } from "react";
import { styles } from "../styles"
import emailjs from "@emailjs/browser"

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
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <>

      <div id="contact" className="w-full overflow-hidden flex justify-center items-center flex-col mt-20 mb-24 px-10">
        <p className={styles.sectionSubText}>¿Tenés una idea de negocio?</p>
        <h2 className={`${styles.sectionHeadText} border-b-2 border-[#DD1D43]`}>Trabajemos!</h2>
      </div>


      <div className="w-full bg-hero-pattern bg-cover bg-no-repeat bg-center z-10 flex gap-40 items-center justify-center overflow-hidden px-12 py-6 mx-auto">
        <div className='w-fit bg-[#DD1D43] rounded-2xl boxsh-cards p-8 mb-12'>
          <h3 className={styles.sectionHeadText}>Hablemos!</h3>
          <p className={`${styles.sectionSubText} ml-2`}> ¿Cómo puedo ayudarte?</p>

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
                placeholder="What's your good name?"
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
                placeholder="What's your web address?"
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
                placeholder='¿Como puedo ayudarte?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary w-[320px] mx-auto py-3 px-8 rounded-xl outline-none  text-white font-bold shadow-md shadow-primary'>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div>HOLA</div>
      </div>
    </>
  )
}

export default Contact