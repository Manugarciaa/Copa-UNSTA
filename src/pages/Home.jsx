import styles from '../style'
import { discount, logo_torneo} from '../assets' 

const Home = () => (
    <section id="home" className={' flex md:flex-row flex-col ${styles.paddingY}'}>
      <div className={'flex md:flex-row flex-col ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6'}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradiant rounded-[10px] mb-2'></div>
          <div className='flex flex-row justify-between items center w-full'>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Los Mejores Torneos en <br className="sm:block hidden" />{" "}
              <span className="text-gradient">UNSTA</span>{" "}
            </h1>
          </div>
      </div>
      <div>
        <img src={logo_torneo} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className="absolute z-[0] w-[20%] h-[20%] top-0 left-[58%] orange__gradient" />
      </div>

    </section>
  )

export default Home