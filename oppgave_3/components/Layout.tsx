
type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main data-testid="main-content">{children}</main>
        </>

    )
}


export default Layout;