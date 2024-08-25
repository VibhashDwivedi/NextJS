import DataFetch from "./DataFetch";
import Home2 from "./Home2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-2xl font-bold  p-24">
      <DataFetch />
    </main>
  );
}
