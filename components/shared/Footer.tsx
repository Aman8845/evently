import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex justify-center items-center max-w-7xl lg:mx-auto md:px-10 xl:px-0 w-full flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2026 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer