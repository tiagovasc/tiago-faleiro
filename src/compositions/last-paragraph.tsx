import { signUpLink } from 'components/nav'
import About from 'compositions/about'

export default function LastParagraph(): JSX.Element {
  return (
    <section
      id="last-paragraph"
      className="flex flex-col items-center pb-20 gap-10"
    >
      <div className="max-w-xl lg:max-w-4xl mx-10 ">
        <About.P className="!inline !mx-0">
          Embarking on your fitness journey with a knowledgeable and dedicated
          coach can make all the difference.
        </About.P>{' '}
        <About.P className="!inline !mx-0">
          Together, we can create a personalized plan that aligns with your
          lifestyle and goals, ensuring that you make sustainable, long-term
          progress.
        </About.P>{' '}
        <About.P className="!inline !mx-0">
          If you're ready to take the next step, I'm here to guide and support
          you every step of the way.
        </About.P>{' '}
      </div>
      <a href={signUpLink}>
        <button className="text-lg lg:text-3xl text-gray-100 bg-blue-400 px-9 py-3 rounded-full font-bold shadow w-fit hover:opacity-75">
          Sign Up
        </button>
      </a>
    </section>
  )
}
