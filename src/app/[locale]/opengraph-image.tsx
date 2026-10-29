import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params;
  const isId = locale === "id";

  const badgeText = isId
    ? "Tersedia untuk proyek & kolaborasi"
    : "Available for work & collaboration";

  const tagline = isId
    ? "Merancang dan membangun sistem web modern dari frontend hingga backend dengan presisi."
    : "Designing and building modern end-to-end web systems from frontend to backend with precision.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0B0F10",
          color: "#EDEDED",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                backgroundColor: "#00F5A0",
              }}
            />
            <span>fadhil</span>
            <span style={{ color: "#10B981", marginLeft: -8 }}>.dev</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: 9999,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.45)",
              color: "#00F5A0",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: "#00F5A0",
              }}
            />
            <span>{badgeText}</span>
          </div>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#10B981",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {profile.role}
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#EDEDED",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#A1A1A1",
              lineHeight: 1.45,
              maxWidth: "880px",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom stack bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1F2A2E",
            paddingTop: "28px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            {[
              "Next.js",
              "TypeScript",
              "Laravel",
              "Node.js",
              "PostgreSQL",
              "Tailwind CSS",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: 10,
                  backgroundColor: "#11171A",
                  border: "1px solid #1F2A2E",
                  color: "#EDEDED",
                  fontSize: 18,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: 20,
              color: "#00F5A0",
              fontWeight: 600,
            }}
          >
            {locale.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

