import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <header className='mt-10 flex justify-end'>
        <a href='https://github.com/magalhaesfelipe' target='_blank'>
          <FontAwesomeIcon
            icon={faGithub}
            className='mr-6 text-4xl text-white transition-colors'
          />
        </a>
      </header>
      <div className='mt-10 flex h-screen items-start justify-center font-mate text-white'>
        <div className='text-left'>
          <h1 className='mb-4 flex text-3xl'>Felipe Magalhaes</h1>
          <div className='bg--500 max-w-fit'>
            <p className='mb-32 font-mate text-lg'>
              Hey, I am Felipe, a full stack web developer. Check out some cool projects.
            </p>

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
