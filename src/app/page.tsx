import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
    return (
        <>
        <Navigation />
        <section className="display min-h-screen mx-12">
            <h1>Home</h1>
        </section>
        </>
    );
}
