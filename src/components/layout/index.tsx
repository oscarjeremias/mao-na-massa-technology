export function Layout(props:any) {
    return (
        <div className="layout min-h-screen min-w-full  bg-blue-900 text-white overflow-hidden">
            {props.children}
        </div>
    )
}