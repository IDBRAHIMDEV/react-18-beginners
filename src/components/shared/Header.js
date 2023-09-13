

function Header({title, children}) {
  return (
    <>
        <div className="col-sm-6"><h1>{title}</h1></div>
        <div className="col-sm-6 text-end mt-2">
            {children}
        </div>
    </>
  )
}

export default Header