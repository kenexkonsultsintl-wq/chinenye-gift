import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <h1 className="text-4xl sm:text-5xl">This page seems to have moved.</h1>
      <p className="mt-4 max-w-xl">Let’s get you back to something useful.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/">Go home</ButtonLink>
        <ButtonLink href="/work" variant="secondary">Explore my work</ButtonLink>
      </div>
    </section>
  );
}
