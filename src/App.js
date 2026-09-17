
import React, { useEffect, useState } from "react";

/* ---------------------------------------------------------
   Small inline icon set
--------------------------------------------------------- */
const Icon = {
  grid: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  ),

  plus: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8.5v7M8.5 12h7" />
    </svg>
  ),

  list: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 6.5h12M8 12h12M8 17.5h12" />
      <path d="M4 6.5h.01M4 12h.01M4 17.5h.01" strokeLinecap="round" strokeWidth="2.6" />
    </svg>
  ),

  network: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="5" cy="12" r="2.4" />
      <circle cx="19" cy="6" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M7.2 12h6.5M13 12l4-4.6M13 12l4 4.6" />
    </svg>
  ),

  info: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.2" strokeLinecap="round" />
      <path d="M12 8.3h.01" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  ),

  menu: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6.5h16M4 12h16M4 17.5h16" strokeLinecap="round" />
    </svg>
  ),

  close: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  ),
};

const NAV_ITEMS = [
  ["dashboard", "Overview", Icon.grid],
  ["add", "Add data", Icon.plus],
  ["records", "Records", Icon.list],
  ["architecture", "Topology", Icon.network],
  ["about", "About", Icon.info],
];

/* ---------------------------------------------------------
   AWS Network Topology
--------------------------------------------------------- */
function TopologyDiagram() {
  return (
    <svg
      viewBox="0 0 920 280"
      width="100%"
      role="img"
      aria-label="AWS VPC network topology diagram"
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="var(--line)" />
        </marker>
      </defs>

      {/* Internet */}
      <circle
        cx="45"
        cy="170"
        r="24"
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="1.4"
      />

      <path
        d="M45 146a24 24 0 010 48M33 158h24M33 182h24"
        stroke="var(--border-strong)"
        strokeWidth="1"
        fill="none"
      />

      <text
        x="45"
        y="207"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fill="var(--text-muted)"
      >
        internet
      </text>

      {/* Internet Gateway */}
      <rect
        x="100"
        y="148"
        width="86"
        height="44"
        rx="5"
        fill="var(--panel-alt)"
        stroke="var(--border-strong)"
        strokeWidth="1.2"
      />

      <text
        x="143"
        y="166"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="10.5"
        fill="var(--text)"
      >
        Internet
      </text>

      <text
        x="143"
        y="180"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="10.5"
        fill="var(--text)"
      >
        Gateway
      </text>

      <line
        x1="69"
        y1="170"
        x2="98"
        y2="170"
        stroke="var(--line)"
        strokeWidth="1.4"
        markerEnd="url(#arrow)"
      />

      {/* VPC boundary */}
      <rect
        x="230"
        y="40"
        width="670"
        height="220"
        rx="10"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1.2"
        strokeDasharray="5 4"
      />

      <text
        x="246"
        y="60"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fill="var(--text-muted)"
      >
        VPC (10.0.0.0/16)
      </text>

      {/* NAT Gateway */}
      <rect
        x="438"
        y="52"
        width="112"
        height="28"
        rx="5"
        fill="var(--panel-alt)"
        stroke="var(--border-strong)"
        strokeWidth="1.1"
      />

      <text
        x="494"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="9.5"
        fill="var(--text)"
      >
        NAT Gateway
      </text>

      <line
        x1="494"
        y1="80"
        x2="494"
        y2="95"
        stroke="var(--border-strong)"
        strokeWidth="1.1"
        strokeDasharray="3 3"
      />

      {/* Public subnet */}
      <rect
        x="250"
        y="95"
        width="200"
        height="150"
        rx="8"
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="1.2"
        strokeDasharray="4 3"
      />

      <text
        x="262"
        y="113"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="11"
        fill="var(--text)"
      >
        Public subnet
      </text>

      <text
        x="262"
        y="127"
        fontFamily="var(--font-mono)"
        fontSize="9.5"
        fill="var(--text-muted)"
      >
        10.0.1.0/24
      </text>

      {/* Frontend EC2 */}
      <rect
        x="270"
        y="188"
        width="160"
        height="46"
        rx="5"
        fill="var(--panel)"
        stroke="var(--accent)"
        strokeWidth="1.3"
      />

      <text
        x="350"
        y="203"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="10.5"
        fill="var(--text)"
      >
        Frontend EC2
      </text>

      <text
        x="350"
        y="216"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="9.5"
        fill="var(--text-muted)"
      >
        React + Nginx
      </text>

      <text
        x="350"
        y="228"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--text-muted)"
      >
        port 80
      </text>

      {/* Private subnet */}
      <rect
        x="470"
        y="95"
        width="400"
        height="150"
        rx="8"
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="1.2"
        strokeDasharray="4 3"
      />

      <text
        x="482"
        y="113"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="11"
        fill="var(--text)"
      >
        Private subnet
      </text>

      <text
        x="482"
        y="127"
        fontFamily="var(--font-mono)"
        fontSize="9.5"
        fill="var(--text-muted)"
      >
        10.0.2.0/24
      </text>

      {/* Backend EC2 */}
      <rect
        x="490"
        y="150"
        width="160"
        height="46"
        rx="5"
        fill="var(--panel)"
        stroke="var(--border-strong)"
        strokeWidth="1.3"
      />

      <text
        x="570"
        y="165"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="10.5"
        fill="var(--text)"
      >
        Backend EC2
      </text>

      <text
        x="570"
        y="178"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="9.5"
        fill="var(--text-muted)"
      >
        Flask API
      </text>

      <text
        x="570"
        y="190"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--text-muted)"
      >
        port 5000
      </text>

      {/* Database EC2 */}
      <rect
        x="690"
        y="150"
        width="160"
        height="46"
        rx="5"
        fill="var(--panel)"
        stroke="var(--border-strong)"
        strokeWidth="1.3"
      />

      <text
        x="770"
        y="165"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize="10.5"
        fill="var(--text)"
      >
        Database EC2
      </text>

      <text
        x="770"
        y="178"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="9.5"
        fill="var(--text-muted)"
      >
        PostgreSQL
      </text>

      <text
        x="770"
        y="190"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--text-muted)"
      >
        port 5432
      </text>

      {/* Frontend → Backend */}
      <line
        x1="430"
        y1="205"
        x2="488"
        y2="176"
        stroke="var(--line)"
        strokeWidth="1.4"
        markerEnd="url(#arrow)"
      />

      <rect
        x="440"
        y="182"
        width="34"
        height="15"
        rx="3"
        fill="var(--bg)"
      />

      <text
        x="457"
        y="193"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--text-muted)"
      >
        5000
      </text>

      {/* Backend → Database */}
      <line
        x1="650"
        y1="173"
        x2="708"
        y2="173"
        stroke="var(--line)"
        strokeWidth="1.4"
        markerEnd="url(#arrow)"
      />

      <rect
        x="661"
        y="163"
        width="34"
        height="15"
        rx="3"
        fill="var(--bg)"
      />

      <text
        x="678"
        y="174"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--text-muted)"
      >
        5432
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------
   Add Data
--------------------------------------------------------- */
const AddData = ({
  text1,
  setText1,
  text2,
  setText2,
  loading,
  handleSubmit,
}) => (
    <>
      <div style={styles.pageHeading}>
        <h1 style={styles.pageHeadingTitle}>Add data</h1>
        <p style={styles.pageHeadingText}>
          Send a record from the frontend to the Flask API, which writes it to PostgreSQL.
        </p>
      </div>

      <div style={styles.section}>
        <form
          onSubmit={handleSubmit}
          style={styles.form}
        >
          <label
            style={styles.label}
            htmlFor="text1"
          >
            Text 1
          </label>

          <input
            id="text1"
            style={styles.input}
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter first value"
          />

          <label
            style={styles.label}
            htmlFor="text2"
          >
            Text 2
          </label>

          <input
            id="text2"
            style={styles.input}
            type="text"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter second value"
          />

          <div style={{ marginTop: "24px" }}>
            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: loading ? 0.7 : 1,
              }}
              disabled={loading}
            >
              {loading ? "Submitting…" : "Insert data"}
            </button>
          </div>
        </form>
      </div>
    </>
  );


function App() {
  const [page, setPage] = useState("dashboard");
  const [messages, setMessages] = useState([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState("Checking");
  const [navOpen, setNavOpen] = useState(false);

  /* ---------------------------------------------------------
     Load fonts
  --------------------------------------------------------- */
  useEffect(() => {
    const id = "app-fonts";

    if (!document.getElementById(id)) {
      const link = document.createElement("link");

      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap";

      document.head.appendChild(link);
    }
  }, []);

  /* ---------------------------------------------------------
     Fetch records from Flask API
  --------------------------------------------------------- */
  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/messages");

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      setMessages(data);
      setApiStatus("Online");
    } catch (error) {
      console.error(error);
      setApiStatus("Offline");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  /* ---------------------------------------------------------
     Submit data
  --------------------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text1.trim() || !text2.trim()) {
      alert("Please fill both fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text1,
          text2,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to insert data");
      }

      setText1("");
      setText2("");

      await fetchMessages();

      goTo("records");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while inserting data.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------------------
     Format database timestamp into Pakistan time
  --------------------------------------------------------- */
  const formatDate = (dateString) => {
    if (!dateString) return "—";

    return new Date(dateString + "Z").toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  /* ---------------------------------------------------------
     Navigation
  --------------------------------------------------------- */
  const goTo = (destination) => {
    setPage(destination);
    setNavOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ---------------------------------------------------------
     Page Heading
  --------------------------------------------------------- */
  const PageHeading = ({ title, text }) => (
    <div style={styles.pageHeading}>
      <h1 style={styles.pageHeadingTitle}>{title}</h1>
      <p style={styles.pageHeadingText}>{text}</p>
    </div>
  );

  /* ---------------------------------------------------------
     Statistic Card
  --------------------------------------------------------- */
  const StatCard = ({ label, value, tone }) => (
    <div
      style={{
        ...styles.statCard,
        borderLeftColor:
          tone === "good"
            ? "var(--good)"
            : tone === "bad"
            ? "var(--bad)"
            : "var(--accent)",
      }}
    >
      <div style={styles.statLabel}>{label}</div>

      <div style={styles.statValue}>{value}</div>
    </div>
  );

  /* ---------------------------------------------------------
     Dashboard
  --------------------------------------------------------- */
  const Dashboard = () => (
    <>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>DevOps Data Hub</h1>

        <p style={styles.heroText}>
          A three-tier application spread across a public subnet and a
          private subnet: a React frontend behind Nginx, a Flask API,
          and PostgreSQL, wired together on a hand-built AWS network.
        </p>

        <div style={styles.heroActions}>
          <button
            style={styles.button}
            onClick={() => goTo("add")}
          >
            Add new data
          </button>

          <button
            style={styles.secondaryButton}
            onClick={() => goTo("architecture")}
          >
            View topology
          </button>
        </div>
      </div>

      <div style={styles.statsGrid}>
        <StatCard
          label="Total records"
          value={messages.length}
        />

        <StatCard
          label="Backend API"
          value={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  ...styles.statusDot,
                  background:
                    apiStatus === "Online"
                      ? "var(--good)"
                      : apiStatus === "Offline"
                      ? "var(--bad)"
                      : "var(--text-muted)",
                }}
              />

              {apiStatus}
            </span>
          }
          tone={
            apiStatus === "Online"
              ? "good"
              : apiStatus === "Offline"
              ? "bad"
              : "neutral"
          }
        />

        <StatCard
          label="Database"
          value={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  ...styles.statusDot,
                  background: "var(--good)",
                }}
              />

              Connected
            </span>
          }
          tone="good"
        />

        <StatCard
          label="AWS region"
          value="eu-north-1"
        />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Network topology
        </h2>

        <p style={styles.sectionText}>
          Traffic enters through the Internet Gateway, reaches the
          frontend in the public subnet, then the frontend communicates
          with the Flask backend in the private subnet. The backend
          communicates with PostgreSQL inside the same private subnet.
        </p>

        <div style={styles.diagramFrame}>
          <TopologyDiagram />
        </div>
      </div>
    </>
  );

  /* ---------------------------------------------------------
     Records
  --------------------------------------------------------- */
  const Records = () => (
    <>
      <PageHeading
        title="Records"
        text="Every row currently stored in the PostgreSQL database."
      />

      <div style={styles.section}>
        {messages.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.sectionText}>
              No records yet. Add one from the "Add data" page.
            </p>
          </div>
        ) : (
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Text 1</th>
                  <th style={styles.th}>Text 2</th>
                  <th style={styles.th}>Created at</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((message) => (
                  <tr key={message.id}>
                    <td
                      style={{
                        ...styles.td,
                        ...styles.tdMono,
                      }}
                    >
                      {message.id}
                    </td>

                    <td style={styles.td}>
                      {message.text1}
                    </td>

                    <td style={styles.td}>
                      {message.text2}
                    </td>

                    <td
                      style={{
                        ...styles.td,
                        ...styles.tdMono,
                      }}
                    >
                      {formatDate(message.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );

  /* ---------------------------------------------------------
     Architecture
  --------------------------------------------------------- */
  const Architecture = () => (
    <>
      <PageHeading
        title="Network topology"
        text="How the frontend, backend and database communicate inside the AWS VPC."
      />

      <div style={styles.section}>
        <div style={styles.diagramFrame}>
          <TopologyDiagram />
        </div>
      </div>

      <div style={styles.twoCol}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Traffic path
          </h2>

          <ul style={styles.plainList}>
            <li style={styles.plainListItem}>
              A request reaches the frontend EC2 on port 80 through
              the Internet Gateway.
            </li>

            <li style={styles.plainListItem}>
              Nginx forwards API calls to the Flask backend on
              port 5000.
            </li>

            <li style={styles.plainListItem}>
              Flask reads and writes to PostgreSQL on port 5432.
            </li>

            <li style={styles.plainListItem}>
              Outbound internet access from the private subnet
              uses the NAT Gateway.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Security groups
          </h2>

          <ul style={styles.plainList}>
            <li style={styles.plainListItem}>
              Frontend: inbound HTTP port 80 is open to the internet.
            </li>

            <li style={styles.plainListItem}>
              Backend: inbound port 5000 is restricted to the
              frontend security group.
            </li>

            <li style={styles.plainListItem}>
              Database: inbound PostgreSQL port 5432 is restricted
              to the backend security group.
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  /* ---------------------------------------------------------
     About
  --------------------------------------------------------- */
  const About = () => (
    <>
      <PageHeading
        title="About this project"
        text="An AWS networking exercise turned into a small, working application."
      />

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Why it was built
        </h2>

        <p style={styles.sectionText}>
          The goal was to understand how a real application behaves
          when the frontend, backend and database run on separate
          cloud servers with controlled communication between them.
        </p>

        <h2 style={styles.sectionTitle}>
          Stack
        </h2>

        <div style={styles.tagRow}>
          {[
            "React",
            "Nginx",
            "Flask",
            "PostgreSQL",
            "Amazon EC2",
            "Amazon VPC",
            "Internet Gateway",
            "NAT Gateway",
            "Security Groups",
          ].map((t) => (
            <span
              key={t}
              style={styles.tag}
            >
              {t}
            </span>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>
          Region
        </h2>

        <p style={styles.sectionTextMono}>
          eu-north-1
        </p>
      </div>
    </>
  );

  /* ---------------------------------------------------------
     Main UI
  --------------------------------------------------------- */
  return (
    <div style={styles.app}>
      <style>{GLOBAL_CSS}</style>

      <div
        className="app-topbar"
        style={styles.topbar}
      >
        <button
          style={styles.menuButton}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          {navOpen ? Icon.close : Icon.menu}
        </button>

        <div style={styles.topbarTitle}>
          DevOps Data Hub
        </div>
      </div>

      <div style={styles.shell}>
        <aside
          className={`app-sidebar${navOpen ? " open" : ""}`}
          style={{
            ...styles.sidebar,

            ...(navOpen
              ? {
                  position: "fixed",
                  zIndex: 30,
                  boxShadow:
                    "0 0 0 100vmax rgba(0,0,0,0.5)",
                }
              : {}),
          }}
        >
          <div style={styles.brand}>
            <div style={styles.brandMark}>
              DH
            </div>

            <div>
              <div style={styles.brandName}>
                DevOps Data Hub
              </div>

              <div style={styles.brandSub}>
                AWS cloud project
              </div>
            </div>
          </div>

          <nav style={styles.navList}>
            {NAV_ITEMS.map(([key, label, icon]) => (
              <button
                key={key}
                onClick={() => goTo(key)}
                style={{
                  ...styles.navItem,
                  ...(page === key
                    ? styles.navItemActive
                    : {}),
                }}
              >
                <span style={styles.navIcon}>
                  {icon}
                </span>

                {label}
              </button>
            ))}
          </nav>

          <div style={styles.sidebarFooter}>
            <div style={styles.sidebarFooterRow}>
              <span>region</span>

              <span style={styles.mono}>
                eu-north-1
              </span>
            </div>

            <div style={styles.sidebarFooterRow}>
              <span>status</span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    ...styles.statusDot,
                    background:
                      apiStatus === "Online"
                        ? "var(--good)"
                        : apiStatus === "Offline"
                        ? "var(--bad)"
                        : "var(--text-muted)",
                  }}
                />

                <span style={styles.mono}>
                  {apiStatus.toLowerCase()}
                </span>
              </span>
            </div>
          </div>
        </aside>

        <main style={styles.container}>
          {page === "dashboard" && <Dashboard />}

          {page === "add" && (
            <AddData
              text1={text1}
              setText1={setText1}
              text2={text2}
              setText2={setText2}
              loading={loading}
              handleSubmit={handleSubmit}
            />
          )}

          {page === "records" && <Records />}

          {page === "architecture" && <Architecture />}

          {page === "about" && <About />}
        </main>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Global CSS
--------------------------------------------------------- */
const GLOBAL_CSS = `
  :root {
    --bg: #0e141b;
    --panel: #141c25;
    --panel-alt: #1a2430;
    --border: #26323e;
    --border-strong: #34424f;
    --line: #4a5a68;
    --text: #e7edf3;
    --text-muted: #8ea0b3;
    --accent: #e2a33d;
    --accent-strong: #f0b757;
    --good: #55c690;
    --bad: #e0685c;

    --font-sans: 'Manrope',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;

    --font-mono: 'JetBrains Mono',
      ui-monospace,
      SFMono-Regular,
      Menlo,
      monospace;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  button:focus-visible,
  input:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }

    50% {
      opacity: 0.35;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }

  @media (max-width: 860px) {
    .app-sidebar {
      display: none !important;
    }

    .app-sidebar.open {
      display: flex !important;
    }

    .app-topbar {
      display: flex !important;
    }
  }
`;

/* ---------------------------------------------------------
   Styles
--------------------------------------------------------- */
const styles = {
  app: {
    minHeight: "100vh",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily: "var(--font-sans)",
  },

  topbar: {
    display: "none",
    alignItems: "center",
    gap: "14px",
    padding: "14px 20px",
    borderBottom: "1px solid var(--border)",
    position: "sticky",
    top: 0,
    background: "var(--bg)",
    zIndex: 20,
  },

  menuButton: {
    background: "transparent",
    border: "1px solid var(--border-strong)",
    borderRadius: "6px",
    color: "var(--text)",
    padding: "6px",
    cursor: "pointer",
    display: "flex",
  },

  topbarTitle: {
    fontWeight: 700,
    fontSize: "15px",
  },

  shell: {
    display: "flex",
    alignItems: "stretch",
    minHeight: "100vh",
  },

  sidebar: {
    width: "246px",
    flexShrink: 0,
    background: "var(--panel)",
    borderRight: "1px solid var(--border)",
    padding: "26px 18px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    position: "sticky",
    top: 0,
    height: "100vh",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  brandMark: {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    background: "var(--panel-alt)",
    border: "1px solid var(--border-strong)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    fontSize: "13px",
    color: "var(--accent-strong)",
  },

  brandName: {
    fontWeight: 700,
    fontSize: "14.5px",
    lineHeight: 1.3,
  },

  brandSub: {
    color: "var(--text-muted)",
    fontSize: "12px",
  },

  navList: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    flex: 1,
  },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    background: "transparent",
    border: "none",
    color: "var(--text-muted)",
    padding: "10px 12px",
    borderRadius: "7px",
    cursor: "pointer",
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
    textAlign: "left",
  },

  navItemActive: {
    background: "var(--panel-alt)",
    color: "var(--text)",
    boxShadow: "inset 2px 0 0 var(--accent)",
  },

  navIcon: {
    display: "flex",
    flexShrink: 0,
  },

  sidebarFooter: {
    borderTop: "1px solid var(--border)",
    paddingTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  sidebarFooterRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "var(--text-muted)",
  },

  mono: {
    fontFamily: "var(--font-mono)",
    color: "var(--text)",
  },

  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    display: "inline-block",
    animation: "pulse 2.2s ease-in-out infinite",
  },

  container: {
    flex: 1,
    maxWidth: "980px",
    width: "100%",
    margin: "0 auto",
    padding: "48px 40px 70px",
  },

  pageHeading: {
    marginBottom: "32px",
  },

  pageHeadingTitle: {
    fontSize: "28px",
    margin: "0 0 8px",
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },

  pageHeadingText: {
    color: "var(--text-muted)",
    margin: 0,
    lineHeight: "1.65",
    maxWidth: "60ch",
  },

  hero: {
    background: "var(--panel)",
    border: "1px solid var(--border)",
    borderRadius: "14px",
    padding: "40px",
    marginBottom: "28px",
  },

  heroTitle: {
    fontSize: "34px",
    lineHeight: "1.15",
    margin: "0 0 14px",
    fontWeight: 800,
    letterSpacing: "-0.015em",
  },

  heroText: {
    maxWidth: "62ch",
    color: "var(--text-muted)",
    lineHeight: "1.7",
    fontSize: "15.5px",
    margin: "0 0 26px",
  },

  heroActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  button: {
    border: "1px solid var(--accent)",
    background: "var(--accent)",
    color: "#1a1305",
    padding: "11px 18px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
  },

  secondaryButton: {
    border: "1px solid var(--border-strong)",
    background: "transparent",
    color: "var(--text)",
    padding: "11px 18px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
    marginBottom: "28px",
  },

  statCard: {
    background: "var(--panel)",
    borderRadius: "8px",
    padding: "18px 20px",
    border: "1px solid var(--border)",
    borderLeft: "3px solid var(--accent)",
  },

  statLabel: {
    color: "var(--text-muted)",
    fontSize: "12.5px",
    marginBottom: "10px",
  },

  statValue: {
    fontSize: "20px",
    fontWeight: 700,
    fontFamily: "var(--font-mono)",
  },

  section: {
    background: "var(--panel)",
    borderRadius: "12px",
    padding: "28px",
    border: "1px solid var(--border)",
    marginBottom: "22px",
  },

  sectionTitle: {
    marginTop: 0,
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 700,
  },

  sectionText: {
    color: "var(--text-muted)",
    lineHeight: "1.7",
    fontSize: "14.5px",
    margin: 0,
  },

  sectionTextMono: {
    color: "var(--text)",
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    margin: 0,
  },

  diagramFrame: {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "16px",
    marginTop: "18px",
    overflowX: "auto",
  },

  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "22px",
  },

  plainList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  plainListItem: {
    color: "var(--text-muted)",
    fontSize: "14.5px",
    lineHeight: "1.6",
    paddingLeft: "16px",
    borderLeft: "2px solid var(--border-strong)",
  },

  form: {
    maxWidth: "480px",
  },

  label: {
    display: "block",
    fontWeight: 600,
    marginBottom: "8px",
    marginTop: "20px",
    fontSize: "13.5px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 13px",
    border: "1px solid var(--border-strong)",
    borderRadius: "7px",
    fontSize: "14.5px",
    outline: "none",
    background: "var(--panel-alt)",
    color: "var(--text)",
    fontFamily: "var(--font-sans)",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "600px",
  },

  th: {
    textAlign: "left",
    padding: "12px 14px",
    borderBottom: "1px solid var(--border-strong)",
    fontSize: "12px",
    color: "var(--text-muted)",
    fontWeight: 600,
  },

  td: {
    padding: "12px 14px",
    borderBottom: "1px solid var(--border)",
    fontSize: "14px",
  },

  tdMono: {
    fontFamily: "var(--font-mono)",
    color: "var(--text-muted)",
    fontSize: "13px",
  },

  emptyState: {
    padding: "20px 4px",
  },

  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "8px",
  },

  tag: {
    border: "1px solid var(--border-strong)",
    borderRadius: "6px",
    padding: "6px 11px",
    fontSize: "12.5px",
    color: "var(--text-muted)",
    fontFamily: "var(--font-mono)",
  },
};

export default App;

