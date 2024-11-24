import { assets } from '../assets/assets';

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img
          src={assets.sample_img_1}
          className='w-80 xl:w-96 rounded-lg'
          alt='img pic'
        />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className='text-gray-600 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            modi reiciendis odio architecto laborum atque expedita nostrum vero
            dolorum commodi dolorem minus incidunt accusamus. Quasi soluta
            facere accusamus cum enim!
          </p>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            perferendis, voluptas distinctio veritatis similique officiis
            corrupti accusamus recusandae cum, magni cupiditate quod...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
