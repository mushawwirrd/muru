
export default function OutLineButton({ lable, href, src, alt, icon, icon2 }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center gap-1 px-4 py-2.5 rounded-full border text-sm font-medium border-primary bg-transparent text-primary 
        hover:bg-primary/10 hover:shadow-xl">

        {icon}
        <img src={src} alt={alt} />
        {lable}
         {icon2}
      </a>
    </div>
  )
}

