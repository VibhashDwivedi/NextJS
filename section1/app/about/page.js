import Link from "next/link";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between text-2xl font-bold  p-24">
        About page
        <br />
        <Link href="/">To home page</Link>
        </main>
    );
    }