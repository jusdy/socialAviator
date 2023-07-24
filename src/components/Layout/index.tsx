import Header from "./header";
import Footer from "./footer";

interface PropsType {
    children: React.ReactNode;
}

const Layout = ({
    children
}: PropsType) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
      </>
    )
}

export default Layout;