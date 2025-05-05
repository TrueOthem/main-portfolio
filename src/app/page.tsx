// This page will not be directly accessed due to middleware redirects
// It serves as a fallback in case middleware doesn't run
import { defaultLocale } from "../../navigation";

export default function RootPage() {
  // The middleware will handle the redirect
  return (
    <div data-oid="kb2wfy1">
      <p data-oid="h1u:ell">Redirecting to {defaultLocale}...</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "/${defaultLocale}";`,
        }}
        data-oid="u97lk6n"
      />
    </div>
  );
}
