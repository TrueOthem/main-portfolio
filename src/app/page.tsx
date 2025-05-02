// This page will not be directly accessed due to middleware redirects
// It serves as a fallback in case middleware doesn't run
import { defaultLocale } from "../../navigation";

export default function RootPage() {
  // The middleware will handle the redirect
  return (
    <div data-oid=".cncov1">
      <p data-oid="_vuy-s5">Redirecting to {defaultLocale}...</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "/${defaultLocale}";`,
        }}
        data-oid="w8yqjrk"
      />
    </div>
  );
}
