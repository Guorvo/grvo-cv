import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xyyqjvqr");
  const [invalid, setInvalid] = useState(true);


  if (state.succeeded) {
    return <div className='flex flex-col items-center bg-secondary font-bold p-3 gap-3 rounded-md text-center grow w-full md:w-fit'>
      Your message was delivered!
    </div>;
  }

  return (
    <form onSubmit={handleSubmit} className='w-full md:w-3/5 flex flex-col items-center md:items-start gap-3 font-semibold'>
      <div className='w-full md:min-w-fit md:w-3/5 flex flex-col gap-3 bg-secondary p-3 rounded-md'>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          placeholder='example@gmail.com'
          className='font-normal text-secondary px-2 py-1 rounded-md'
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className='w-full flex flex-col gap-3 bg-secondary p-3 rounded-md'>
        <label htmlFor="message">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          placeholder='Write your message...'
          className='h-52 font-normal text-secondary px-2 py-1 rounded-md'
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
        <button type="submit" disabled={state.submitting} className='bg-secondary disabled:opacity-80 disabled:hover:scale-100 hover:scale-110 rounded-full w-1/2 p-3 transition'>
          Send
        </button>
        <span className='text-secondary'>Or use <a href="mailto:lmcuchero@gmail.com" className='underline'>this</a>.</span>
      </div>
    </form>
  );
}

export default ContactForm;