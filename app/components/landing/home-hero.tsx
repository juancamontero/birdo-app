import Image from "next/image";

export function HeroHome() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-birdo-300 via-birdo-400 to-birdo-400 shadow-lg md:h-[15] h-[10v]">
      <div className="p-4 flex flex-col justify-center items-start">
       <div>
        <Image src="/logo-birdo1x2.webp"  width={75} height={75} alt="Birdo logo"/>
       </div>
        <div>
          <h1 className="bg-gradient-to-r from-birdo-800 via-birdo-700 to-birdo-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-lef">
            BirdoApp
          </h1>
          <div className="max-w-xl">
            <h2 className="max-w-lg text-lg font-light tracking-tight text-text-100 sm:text-3xl text-birdo-accent-700 text-left">
              Check near your location
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
