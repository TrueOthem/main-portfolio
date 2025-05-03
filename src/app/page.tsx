// This page will not be directly accessed due to middleware redirects
// It serves as a fallback in case middleware doesn't run
import { defaultLocale } from "../../navigation";

export default function RootPage() {
  // The middleware will handle the redirect
  return (
    <div data-oid="168g0dr">
      <p data-oid="dsygqf:">Redirecting to {defaultLocale}...</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "/${defaultLocale}";`,
        }}
        data-oid="rxuc4wj"
      />
    </div>
  );
}
