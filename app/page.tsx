import PageLayout from "./components/PageLayout"

export default function Home() {
  return (
    <PageLayout title={
        <div className="text-accent text-6xl font-light leading-none font-[family-name:var(--font-fraunces)]">
          <div>PO</div>
          <div>RT</div>
          <div>FO</div>
          <div>LIO</div>
        </div>
      }
    >
      <h2 className="mt-12">Kaia Hellem</h2>
      <p className="mt-4">Utvikler med sans for å bygge ting som funker og ser bra ut.</p>
    </PageLayout>
  )
}