import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-site_black max-w-[1920px] pt-8 flex flex-col items-center  w-full" >
    <Hero/>
    <div className="flex  gap-14 px-6 sm:flex-row flex-col max-w-[700px] lg:max-w-[1050px] xl:max-w-[1200px] 2xl:max-w-[1383px]  flex-wrap justify-center xl:justify-between  w-full">
    <img  src="/assets/images/landing/forbes.svg" alt="logos" />
    <img  src="/assets/images/landing/shopify.svg" alt="logos" />
    <img  src="/assets/images/landing/geek.svg" alt="logos" />
    <img  src="/assets/images/landing/tech.svg" alt="logos" />
    <img  src="/assets/images/landing/betakit.svg" alt="logos" />

    
    </div>
    </div>
  )
}
