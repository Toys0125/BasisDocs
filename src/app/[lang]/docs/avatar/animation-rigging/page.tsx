import { i18n } from '@/lib/i18n';

export default async function LegacyConstraintsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const destination = `/${lang}/docs/avatar/constraints`;

  return (
    <main>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(destination)});`,
        }}
      />
      <p>
        This documentation page has moved to{' '}
        <a href={destination}>{destination}</a>.
      </p>
    </main>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
