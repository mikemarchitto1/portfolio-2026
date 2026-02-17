export default function NotFound() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "unknown";

  console.error(`[404] Route not found: ${pathname}`);
  console.log(
    "[404] Available routes should be: /, /glorifi, /eddie-bauer, /microsoft-hits, /silverback-mma, /connect, /experience, /projects/*",
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        <strong>Requested path:</strong> <code>{pathname}</code>
      </p>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        Check the console for more debugging information.
      </p>
      <nav>
        <ul style={{ marginTop: "1rem" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/glorifi">GloriFi</a>
          </li>
          <li>
            <a href="/eddie-bauer">Eddie Bauer</a>
          </li>
          <li>
            <a href="/microsoft-hits">Microsoft HITS</a>
          </li>
          <li>
            <a href="/silverback-mma">Silverback MMA</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
