
function Button({ lable, href }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center px-4 py-2.5 rounded-full bg-primary text-sm font-medium text-white hover:shadow-2xl hover:bg-blue-800 duration-200">
       
        {lable}
       
      </a>
    </div>
  )
}

export default Button