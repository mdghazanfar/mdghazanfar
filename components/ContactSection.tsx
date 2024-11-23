// components/ContactSection.tsx
const ContactSection = () => (
  <section
    id='contact'
    className='py-20 bg-gray-200 dark:bg-gray-800 text-center'
  >
    <h2 className='text-4xl font-bold'>Get in Touch</h2>
    <form className='mt-8 max-w-md mx-auto'>
      <input
        type='text'
        placeholder='Your Name'
        className='w-full mb-4 p-2 rounded'
      />
      <input
        type='email'
        placeholder='Your Email'
        className='w-full mb-4 p-2 rounded'
      />
      <textarea
        placeholder='Your Message'
        className='w-full mb-4 p-2 rounded'
      ></textarea>
      <button className='bg-green-500 text-white px-6 py-2 rounded-lg'>
        Send Message
      </button>
    </form>
  </section>
);

export default ContactSection;
