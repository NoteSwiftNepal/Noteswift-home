import { notFound } from "next/navigation";

// Unknown paths fall through to [lang]/not-found.tsx inside the site layout.
export default function CatchAll() {
  notFound();
}
