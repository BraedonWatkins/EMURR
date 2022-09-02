import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Logo } from '../components/Logo'

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full h-full bg-amber-50">
        <Navbar 
          page="home"
        />

        <div className="flex flex-col w-full px-28 mt-10 text-green-800">
          <div className="text-5xl font-light">
            Welcome to EMURR
          </div>
          <div className="flex justify-between w-full mt-5">
            <div className="w-3/5 text-xl font-light text-justify">
              EMURR? I don’t even know her! Ok, ok. I’ll put some lorem ipsum here or whatever. Cupcake ipsum dolor sit amet muffin donut bonbon cake. Cheesecake tiramisu dragée cotton candy wafer icing gingerbread. Jujubes jelly I love ice cream I love croissant pudding. Dragée I love jelly beans I love macaroon marzipan candy dragée.
            </div>
            <div className="flex justify-center w-2/5 items-center">
              <Logo />
            </div>
          </div>
          <div className="text-5xl mt-40 font-light">
            Meet the team
          </div>
          <div className="flex flex-col justify-between w-full mt-5">
            <div className="text-2xl text-center font-light">
              Royal Court of House CHDR
            </div>
            <div className="flex justify-between my-10">
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
            </div>
            <div className="text-2xl text-center font-light">
              Knights of House CHDR
            </div>
            <div className="flex justify-center my-10">
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40 mr-20" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40 mr-20" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40 mr-20" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
              <div>
                <img src="/images/logo_vert_5.png" className="w-40 h-40" />
                <div className="text-center font-semibold">EMURR EMURR</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home
