interface IMenuProps {
    menuActive: boolean;
    setMenuActive: any
}

export  function Menu({ menuActive,setMenuActive }:IMenuProps) {

    function activeMenu() {
        setMenuActive(menuActive == false ? true : false)
    }
    
    return menuActive == false ? (
        <menu className="w-12 h-4 mb-4 md:hidden" onClick={activeMenu}>
            <div className="h-2/6 w-full bg-white rounded my-2"></div>
            <div className="h-2/6 w-1/2 bg-white rounded my-2"></div>
            <div className="h-2/6 w-3/4 bg-white rounded my-2"></div>
        </menu>
    ) : (
        <menu className="w-12 h-3 absolute top-12 right-10" onClick={activeMenu}>
            <div className="h-1/2 bg-white rounded translate-y-1 rotate-45"></div>
            <div className="h-1/2 bg-white rounded translate-y-0 rotate-[-45deg]"></div>
        </menu>
    )
}