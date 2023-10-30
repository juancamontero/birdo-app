import Image from "next/image"
import { Parameters } from "../observations"

export function HeroHome() {
  return (
    <section className="lg:h-[20vh] h-[40vh] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-birdo-800 via-birdo-950 to-birdo-900 shadow-lg grid grid-cols-1 lg:grid-cols-3">
     
      <div className="p-4 flex flex-col justify-center items-start lg:col-span-2">
          <Image
            src="/logo-birdo1x2-blanco.webp"
            width={102}
            height={25}
            alt="Birdo logo"
          />
       
        <div>
          <h1 className="text-birdo-100 text-3xl font-extrabold  sm:text-5xl text-lef">
            BirdoApp
          </h1>
          <div className="max-w-xl">
            <h2 className="max-w-lg text-base font-light tracking-tight text-text-100 sm:text-2xl text-birdo-accent-500 text-left">
              Observations near your location
            </h2>
          </div>
        
        </div>
      </div>
      <Parameters />
    </section>
  )
}
