import Image from "next/image"
export default function Logo(){
    return(
        <div className="flex w-full items-center justify-center gap-2">
          <Image 
          height={25}
          width={25}
          alt='logo'
          src="/logo.svg"
          />
          <p className="text-sky-600 text-sm">SkillsHorizon</p>
        </div>
    )
}