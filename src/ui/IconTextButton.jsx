
export default function IconTextButton({ lable, href, icon, icon2 }) {
  return (
    <div>
      <a
        href={href}
        className="flex items-center justify-center gap-x-2 px-5 py-3 rounded-full bg-primary text-white hover:shadow-2xl hover:bg-blue-800 duration-200">
        
        {icon}
        {lable}
        {icon2}
        
      </a>
    </div>
  )
}
