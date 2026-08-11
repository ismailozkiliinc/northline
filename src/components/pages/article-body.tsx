function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(body: string): { id: string; title: string }[] {
  return body
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace(/^## /, "").trim();
      return { id: slugify(title), title };
    });
}

function renderInlineList(lines: string[]) {
  return (
    <ul className="my-4 list-disc space-y-1 pl-5 text-muted">
      {lines.map((line) => (
        <li key={line}>{line.replace(/^-\s*/, "")}</li>
      ))}
    </ul>
  );
}

export function ArticleBody({ body }: { body: string }) {
  const rawSections = body.split(/^## /m).filter(Boolean);

  return (
    <div className="prose-northline space-y-10">
      {rawSections.map((section) => {
        const lines = section.split("\n");
        const title = lines[0]?.trim() ?? "";
        const rest = lines.slice(1).join("\n").trim();
        const blocks = rest.split(/\n\n+/).filter(Boolean);

        return (
          <section key={title} id={slugify(title)}>
            <h2 className="font-display text-xl font-semibold text-fg md:text-2xl">
              {title}
            </h2>
            <div className="mt-4 space-y-4">
              {blocks.map((block) => {
                if (block.split("\n").every((l) => l.startsWith("- "))) {
                  return (
                    <div key={block.slice(0, 40)}>
                      {renderInlineList(block.split("\n"))}
                    </div>
                  );
                }
                return (
                  <p key={block.slice(0, 40)} className="text-sm leading-relaxed text-muted md:text-base">
                    {block}
                  </p>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
