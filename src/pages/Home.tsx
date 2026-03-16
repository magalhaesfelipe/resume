import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
//import githubIcon from '../assets/icons/github.svg';
// import { GithubIcon } from '../assets/icons/github.svg';

const Home = () => {
  return (
    <div className='flex h-full w-full justify-center'>
      <div className='flex h-screen w-[90%] gap-10 bg-[--var(--color-black-bg)] p-2 pt-8'>
        <header className='flex h-full flex-col'>
          <h3 className='flex whitespace-nowrap pb-0 pt-2 text-2xl font-semibold text-gray-200'>
            Felipe Magalhães
          </h3>
          <span className='pt-0 text-gray-400'>Software Engineer</span>
          <div className='mt-[7px]'>
            <span className='border-dashed border-gray-200 text-[13px] text-gray-200'>
              ffelipemagallhaes@gmail.com
            </span>
          </div>
        </header>

        <div className='flex h-screen items-start justify-center text-white'>
          <div className='px-[6%] pr-[22%] pt-6'>
            <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              ABOUT
            </label>
            <p className='text-1xl mb-6 mt-3 pl-4'>
              My name is Felipe Magalhães, a full-stack software engineer. My
              passion for software lies with dreaming up ideas and making them
              come true with elegant interfaces. I take great care in the
              experience, architecture, and code quality of the things I build.
            </p>
            <p className='text-1xl mb-6 mt-3 pl-4'>
              I am also a founder(<strong>Mangazine</strong>) and maintainer. I
              like to bring vision into reality and I'm happy to see what I do
              can impact communities and the industry.
            </p>

            <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              PROJECTS
            </label>

            <div className='mb-5 mt-5 grid grid-cols-2 grid-rows-2 gap-2 gap-x-36'>
              <div className='flex flex-col p-3'>
                <span className=''>Mangazine (frontend)</span>
                <span className='text-[14px] text-gray-400'>
                  The reading platform UI
                </span>
                <span className='text-[14px] text-gray-200'>16130</span>
              </div>

              <div className='flex flex-col p-3'>
                <span className=''>Mangazine (backend)</span>
                <span className='text-[14px] text-gray-400'>
                  The reading platform back-end
                </span>
                <span className='text-[14px] text-gray-200'>16130</span>
              </div>

              <div className='flex flex-col p-3'>
                <span className=''>This Website</span>
                <span className='text-[14px] text-gray-400'>
                  My personal website
                </span>
                <span className='text-[14px] text-gray-200'>16130</span>
              </div>
            </div>

            <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              WORK EXPERIENCE
            </label>

            <div className='mt-5'>
              <div className='flex gap-2'>
                <span className='cursor-pointer border-b border-dashed border-b-gray-400 px-1'>
                  Pax Primavera
                </span>
                <span className='font-normal text-gray-300'>
                  Full Stack Developer
                </span>
              </div>
              <span className='text-[12px] text-gray-300'>
                March 2025 - Present | Hybrid
              </span>
            </div>

            {/* 
            <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              WORK EXPERIENCE
            </label> */}

            {/* <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              STACKS
            </label>

            <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              EDUCATION/CERTIFICATES
            </label>

            <label className='p-0.2 border-b-2 border-b-gray-50 px-2 text-sm font-extrabold text-white'>
              LANGUAGES
            </label> */}

            {/* <div>
              <div className='mb-12 flex flex-col justify-center rounded-lg border-2 border-slate-700 p-5 align-middle'>
                <div className='mb-10'>
                  <div className='flex flex-col justify-center text-center'>
                    <h3 className='mb-5 text-xl'>Projects</h3>
                    <a
                      href='https://mangazineprotocol.netlify.app'
                      className='text-xl font-bold'
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className='mr-2 text-2xl'
                      />
                      mangazineprotocol.netlify.app
                    </a>
                    <p className='text-slate-400'>
                      A website to keep track of your reads
                    </p>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='flex flex-col justify-center text-center align-top'>
                    <a
                      href='https://github.com/magalhaesfelipe/blog'
                      className='text-xl font-bold'
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className='mr-2 text-2xl'
                      />
                      This website
                    </a>
                    <p className='text-slate-400'>
                      My website portfolio code on GitHub
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col rounded-lg border-2 border-slate-700 p-5'>
                <div className='flex flex-col text-center'>
                  <h3 className='mb-5 text-xl'>Tech Stack</h3>
                  <div className='flex justify-center align-top text-slate-400'>
                    Full Stack Developer / Engineer
                  </div>
                  <div className='mt-5 grid grid-cols-6'>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Node.js
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Express.js
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      MongoDB
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Mongoose
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      SQL
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      React
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      TypeScript
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      JavaScript
                    </p>
                    <p className='mb-4 mr-4 text-nowrap rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Tailwind CSS
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      NPM
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Render
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Netflify
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Golang
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      HTML
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      CSS
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Postman
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Git
                    </p>
                    <p className='mb-4 mr-4 rounded-md bg-gray-700 p-1.5 hover:cursor-default hover:bg-gray-900'>
                      Github
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
