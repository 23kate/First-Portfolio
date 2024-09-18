import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import backgroundImg from '../assets/background.jpg'; // Replace with your background image

const About = () => {
  return (
    <section className='relative bg-[#8d1e1ed7] py-20' id='about'>
      {/* Faded Background Image */}
      <div className='absolute inset-0 z-[-1]'>
        <img
          src={backgroundImg}
          alt='Background'
          className='w-full h-full object-cover opacity-50'
        />
      </div>
      
      <div className='align-element grid md:grid-cols-2 items-center gap-16 relative z-10'>
        <img src={aboutSvg} className='w-full h-64' alt='About Illustration' />
        <article>
          <SectionTitle text='Professional Profile' />
          <p className='text-[#FFD700] mt-8 leading-loose'>
            I’m an IT professional with experience in project management 
            and technical documentation. I excel at organizing and executing 
            IT projects with a keen attention to detail. My skills in planning, 
            documentation, and teamwork help drive project success and innovation. 
            Eager to grow my expertise and tackle new IT challenges, I’m committed 
            to delivering impactful technology solutions.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
