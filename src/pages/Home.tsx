import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
//import githubIcon from '../assets/icons/github.svg';
// import { GithubIcon } from '../assets/icons/github.svg';

const Home = () => {
  return (
    <>
      <div className='flex h-full w-full justify-center pb-[2%]'>
        <div className='flex w-[90%] gap-10 bg-[--var(--color-black-bg)] p-2 pt-8'>
          <header className='flex h-full flex-col'>
            <h3 className='flex whitespace-nowrap pb-0 pt-2 text-2xl font-semibold text-gray-800'>
              Felipe Magalhães
            </h3>
            <span className='pt-0 text-base text-gray-600'>
              Software Engineer
            </span>
            <div className='mt-[7px]'>
              <span className='border-b-[1px] border-dashed border-gray-400 text-[13px] text-gray-800'>
                ffelipemagallhaes@gmail.com
              </span>
            </div>
          </header>

          <div className='flex items-start justify-start pl-[5%] text-black'>
            <div className='w-[71%] pt-6'>
              <label className='p-0.2 border-b-2 border-b-gray-950 px-1 pb-[3px] text-sm font-extrabold text-black'>
                ABOUT
              </label>
              <p className='text-1xl mb-6 mt-3 pl-4'>
                My name is Felipe Magalhães, a full-stack software engineer and
                technology enthusiast. My passion for software lies with
                dreaming up ideas and making them come true with intelligent and
                elegant systems. I take great care in the experience,
                architecture, and code quality of the things I build.
              </p>
              <p className='text-1xl mb-6 mt-3 pl-4'>
                I am also a founder(
                <strong>
                  <a href='https://mangazineprotocol.netlify.app'>Mangazine</a>
                </strong>
                ) and maintainer. I like to bring vision into reality and I'm
                happy to see what I do can impact communities and the industry.
              </p>

              <label className='p-0.2 border-b-2 border-b-gray-950 px-1 pb-[3px] text-sm font-extrabold text-black'>
                PROJECTS
              </label>

              <div className='mb-5 mt-5 grid grid-cols-2 grid-rows-2 gap-2 gap-x-36'>
                <div className='flex flex-col p-3'>
                  <span className=''>Mangazine (frontend)</span>
                  <span className='text-[14px] text-gray-600'>
                    The reading platform
                  </span>
                  <span className='text-[14px] text-gray-800'>03</span>
                </div>

                <div className='flex flex-col p-3'>
                  <span className=''>Mangazine (backend)</span>
                  <span className='text-[14px] text-gray-600'>
                    The reading platform
                  </span>
                  <span className='text-[14px] text-gray-800'>1</span>
                </div>

                <div className='flex flex-col p-3'>
                  <span className=''>
                    <a href='https://github.com/magalhaesfelipe/blog'>
                      This Website
                    </a>
                  </span>
                  <span className='text-[14px] text-gray-600'>
                    My personal website
                  </span>
                  <span className='text-[14px] text-gray-800'>0</span>
                </div>
              </div>

              <label className='p-0.2 border-b-2 border-b-gray-950 px-1 pb-[3px] text-sm font-extrabold text-black'>
                WORK EXPERIENCE
              </label>

              <div className='mt-5'>
                <div className='flex gap-2'>
                  <span className='cursor-pointer border-b border-dashed border-b-gray-600 pr-1'>
                    Pax Primavera
                  </span>
                  <span className='font-normal text-gray-700'>
                    Full Stack Developer
                  </span>
                </div>
                <span className='text-[12px] text-gray-700'>
                  March 2025 - Present | Hybrid
                </span>
              </div>

              <div className='mt-3 flex flex-col gap-2 font-normal'>
                <span className='text-[15px]'>
                  ◢ Developing web interfaces, API integration, Database
                  management
                </span>
              </div>

              <div className='mt-7'>
                <label className='p-0.2 mt-4 border-b-2 border-b-gray-950 px-1 pb-[3px] text-sm font-extrabold text-black'>
                  STACKS
                </label>

                <div className='mt-4 flex flex-col gap-4 pl-6'>
                  <span className='flex gap-2'>
                    <p className='w-24 font-bold'>Frontend</p>
                    <p className='text-[15px]'>
                      TypeScript, JavaScript, React, Svelt, Vite, Webpack
                    </p>
                  </span>

                  <span className='flex gap-2'>
                    <p className='w-24 font-bold'>Backend</p>
                    <p className='text-[15px]'>
                      Node, Postgres, MongoDB, MySQL, Serveerless, Nginx, Docker
                    </p>
                  </span>

                  <span className='flex gap-2'>
                    <p className='w-24 font-bold'>Mobile</p>
                    <p className='text-[15px]'>
                      Android, Kotlin, PWA, React Native
                    </p>
                  </span>

                  <span className='flex gap-2'>
                    <p className='w-24 font-bold'>DevOps</p>
                    <p className='text-[15px]'>
                      Azure, AWS, Firebase, AliCloud
                    </p>
                  </span>

                  <span className='flex gap-2'>
                    <p className='w-24 font-bold'>Languages</p>
                    <p className='text-[15px]'>Go, C/C++, Rust, Python, Java</p>
                  </span>
                </div>
              </div>

              <div className='mt-7'>
                <label className='p-0.2 mt-4 border-b-2 border-b-gray-950 px-1 pb-[3px] text-sm font-extrabold text-black'>
                  EDUCATION / CERTIFICATES
                </label>

                <div className='mt-4 flex flex-col gap-4 pl-6'>
                  <span className='flex gap-2'>
                    <p className='font-bold'>Financial Management,</p>
                    <p className='text-[15px]'>Unicesumar, Dourados MS</p>
                  </span>
                </div>
                <p className='mt-[2px] pl-6 text-[12px]'>Feb 2021 - Mar 2023</p>

                <div className='mt-4 flex flex-col gap-4 pl-6'>
                  <span className='flex gap-2'>
                    <p className='font-bold'>ANBIMA Investment Specialist,</p>
                    <p className='text-[15px]'>ANBIMA, Campo Grande MS</p>
                  </span>
                </div>

                <div className='mt-4 flex flex-col gap-4 pl-6'>
                  <span className='flex gap-2'>
                    <p className='font-bold'>ANBIMA CPA-20 Professional,</p>
                    <p className='text-[15px]'>ANBIMA, Dourados MS</p>
                  </span>
                </div>
              </div>

              <div className='mt-7'>
                <label className='p-0.2 mt-10 border-b-2 border-b-gray-950 px-2 pb-[3px] text-sm font-extrabold text-black'>
                  LANGUAGES
                </label>
              </div>

              <div className='mt-4 flex flex-col gap-4 pl-6'>
                <span className='flex gap-2'>
                  <p>
                    <span className='font-bold'>English</span>
                    <span>(Fluent),</span>
                  </p>

                  <p>
                    <span className='font-bold'>French</span>
                    <span>(Basic),</span>
                  </p>

                  <p>
                    <span className='font-bold'>Japanese</span>
                    <span>(Basic),</span>
                  </p>

                  <p>
                    <span className='font-bold'>Spanish</span>
                    <span>(Advanced),</span>
                  </p>

                  <p>
                    <span className='font-bold'>Portuguese</span>
                    <span>(Fluent),</span>
                  </p>
                </span>
              </div>
              <div className='mt-10 text-center text-xs'>
                Last updated at March 19, 12:21:57 am
              </div>
              <div className='mt-1 w-full text-center text-[14px] font-bold'>
                V2.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
