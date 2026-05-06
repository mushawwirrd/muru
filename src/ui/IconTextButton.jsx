
export default function IconTextButton({ lable, href, icon, icon2 }) {
  return (
    <div>
      <a
        href={href}
        className="flex items-center justify-center gap-1 px-4 py-2.5 rounded-full bg-primary text-sm font-medium text-white hover:shadow-2xl hover:bg-blue-800 duration-200">
        
        {icon}
        {lable}
        {icon2}
        
      </a>
    </div>
  )
}
