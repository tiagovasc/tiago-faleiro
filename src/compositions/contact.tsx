import TiagoLogo2 from 'assets/images/tiagologo_01.png'
import TiagoLogo from 'assets/images/tiagologo.png'

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="flex flex-col gap-20 items-center justify-center min-h-screen py-20 px-10"
    >
      <div className="flex flex-col gap-5">
        <div className="h-16">
          <img
            src={TiagoLogo}
            className="hidden dark:block object-cover h-full mx-auto"
            alt="tiago"
          />
          <img
            src={TiagoLogo2}
            className="block dark:hidden object-cover h-full mx-auto"
            alt="tiago"
          />
        </div>
        <button className="mx-auto block text-gray-100 bg-blue-400 px-6 py-2 rounded-full font-bold shadow w-fit h-fit hover:opacity-75">
          Sign Up
        </button>
      </div>
      <form
        className="w-full max-w-md flex flex-col gap-4 text-gray-800 dark:text-gray-100"
        action="https://formspree.io/f/xpzkllby"
        method="POST"
      >
        <p className="text-center text-4xl mb-8">Contact Me</p>
        <label className="hidden" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required={true}
          placeholder="Your name"
          className="px-4 py-2 rounded-full border-2 border-gray-800 dark:border-gray-100 bg-gray-100 dark:bg-gray-800 shadow"
        />
        <label className="hidden" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required={true}
          placeholder="Your E-mail"
          className="px-4 py-2 rounded-full border-2 border-gray-800 dark:border-gray-100 bg-gray-100 dark:bg-gray-800 shadow"
        />
        <label className="hidden" htmlFor="message">
          Message:
        </label>
        <textarea
          cols={30}
          rows={10}
          id="message"
          name="message"
          spellCheck="false"
          placeholder="Additional information"
          className="resize-none px-4 py-2 rounded-[1.5rem] border-2 border-gray-800 dark:border-gray-100 bg-gray-100 dark:bg-gray-800 shadow"
        />

        <button
          name="submit"
          value="submit"
          type="submit"
          className="block text-gray-100 bg-blue-400 px-6 py-2 rounded-full font-bold shadow w-fit h-fit hover:opacity-75 mt-8 mx-auto"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
