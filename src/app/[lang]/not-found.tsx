import Button from "@/components/ui/Button";

// Rendered inside the [lang] layout. Bilingual because not-found has no params.
export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70dvh] flex-col items-start justify-center py-24">
      <p className="font-mono text-[13px] text-brand">404</p>
      <h1 className="t-display mt-4 max-w-2xl">This page could not be found.</h1>
      <p className="t-lead mt-4" lang="ne">यो पृष्ठ फेला परेन।</p>
      <p className="t-lead mt-2 max-w-[52ch]">The page you are looking for does not exist or has moved.</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/ne" variant="secondary" arrow={false}>
          <span lang="ne">गृहपृष्ठमा फर्कनुहोस्</span>
        </Button>
      </div>
    </section>
  );
}
