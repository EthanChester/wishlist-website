import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header className="App-header">
                <Link href={"/"}>Home</Link>
                <Link href={"/login"}>Sign in</Link>
                <Link href={"/list"}>Your Lists</Link>
                <Link href={"/list/1"}>View List</Link>
            </header>
            {children}
        </div>
    );
}
