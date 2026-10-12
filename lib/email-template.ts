/**
 * Shared email layout for AYO LLC.
 *
 * Design rules applied from SKILL.md (apple-design), adapted to email:
 *  - §15 Typography: system font first; size-specific tracking (tight on the
 *    headline, near 0 on body); tight leading on large text, looser on body.
 *  - §16 Simplicity / hierarchy: one headline, one primary action, plain
 *    language, direct specific labels. Every element earns its place.
 *  - §16 Craft: consistent 8px spacing rhythm, no emoji used as icons.
 *  - §14 Accessibility: strong contrast, dark-mode support, real text only.
 *
 * Email clients ignore animation, backdrop-filter and most modern CSS, so
 * motion/material rules are intentionally not used. Layout is table-based with
 * inline styles for Outlook and Gmail compatibility.
 */

export const EMAIL_COLORS = {
  brand: "#000061",
  brandDark: "#000045",
  ink: "#0F172A",
  body: "#475569",
  muted: "#64748B",
  line: "#E2E8F0",
  surface: "#F8FAFC",
  white: "#FFFFFF",
} as const;

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/** Escape user-provided text before interpolating into HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escape and keep line breaks from multi-line user input. */
export function escapeHtmlWithBreaks(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

export function emailHeading(text: string): string {
  return `<h1 style="margin:0 0 12px 0;font-family:${FONT_STACK};font-size:28px;line-height:1.15;letter-spacing:-0.02em;font-weight:700;color:${EMAIL_COLORS.ink};" class="em-ink">${text}</h1>`;
}

export function emailParagraph(text: string): string {
  return `<p style="margin:0 0 16px 0;font-family:${FONT_STACK};font-size:16px;line-height:1.55;letter-spacing:0;color:${EMAIL_COLORS.body};" class="em-body">${text}</p>`;
}

/** Label/value rows separated by hairlines, no boxes or icons. */
export function emailDetails(rows: { label: string; value: string }[]): string {
  const body = rows
    .map(
      (row, index) => `
        <tr>
          <td valign="top" width="96" style="padding:14px 0;${index > 0 ? `border-top:1px solid ${EMAIL_COLORS.line};` : ""}font-family:${FONT_STACK};font-size:12px;line-height:1.5;letter-spacing:0.04em;text-transform:uppercase;font-weight:600;color:${EMAIL_COLORS.muted};" class="em-muted em-line">${row.label}</td>
          <td valign="top" style="padding:14px 0;${index > 0 ? `border-top:1px solid ${EMAIL_COLORS.line};` : ""}font-family:${FONT_STACK};font-size:16px;line-height:1.45;font-weight:500;color:${EMAIL_COLORS.ink};" class="em-ink em-line">${row.value}</td>
        </tr>`,
    )
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 24px 0;border-top:1px solid ${EMAIL_COLORS.line};border-bottom:1px solid ${EMAIL_COLORS.line};" class="em-line">
      ${body}
    </table>`;
}

/** Single primary action. Bulletproof button (works in Outlook). */
export function emailButton(label: string, href: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 16px 0;">
      <tr>
        <td bgcolor="${EMAIL_COLORS.brand}" style="border-radius:10px;">
          <a href="${href}" target="_blank" style="display:inline-block;padding:14px 28px;font-family:${FONT_STACK};font-size:16px;line-height:1;letter-spacing:0;font-weight:600;color:${EMAIL_COLORS.white};text-decoration:none;border-radius:10px;">${label}</a>
        </td>
      </tr>
    </table>`;
}

export function emailFinePrint(text: string): string {
  return `<p style="margin:0 0 24px 0;font-family:${FONT_STACK};font-size:13px;line-height:1.5;letter-spacing:0.01em;color:${EMAIL_COLORS.muted};word-break:break-all;overflow-wrap:anywhere;" class="em-muted">${text}</p>`;
}

export function emailLink(label: string, href: string): string {
  return `<a href="${href}" style="color:${EMAIL_COLORS.brand};font-weight:600;text-decoration:underline;" class="em-link">${label}</a>`;
}

interface EmailLayoutOptions {
  title: string;
  /** Short inbox preview text. */
  preheader: string;
  content: string;
  footerNote?: string;
}

export function renderEmailLayout({
  title,
  preheader,
  content,
  footerNote,
}: EmailLayoutOptions): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${title}</title>
  <style>
    @media only screen and (max-width: 620px) {
      .em-card { padding: 28px 20px !important; }
    }
    @media (prefers-color-scheme: dark) {
      .em-bg { background-color: #0B1020 !important; }
      .em-card { background-color: #111827 !important; }
      .em-ink { color: #F8FAFC !important; }
      .em-body { color: #CBD5E1 !important; }
      .em-muted { color: #94A3B8 !important; }
      .em-line { border-color: #1F2937 !important; }
      .em-link { color: #A5B4FC !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${EMAIL_COLORS.surface};-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;" class="em-bg">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preheader}&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${EMAIL_COLORS.surface}" class="em-bg">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
          <tr>
            <td style="padding:0 4px 20px 4px;font-family:${FONT_STACK};font-size:18px;line-height:1;letter-spacing:-0.01em;font-weight:700;color:${EMAIL_COLORS.brand};" class="em-link">AYO LLC</td>
          </tr>
          <tr>
            <td bgcolor="${EMAIL_COLORS.white}" class="em-card" style="padding:40px;border-radius:16px;border:1px solid ${EMAIL_COLORS.line};background-color:${EMAIL_COLORS.white};">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 4px 0 4px;font-family:${FONT_STACK};font-size:12px;line-height:1.6;letter-spacing:0.01em;color:${EMAIL_COLORS.muted};" class="em-muted">
              ${footerNote ? `${footerNote}<br/>` : ""}
              &copy; ${year} AYO LLC &middot; Riverside, California, USA
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
