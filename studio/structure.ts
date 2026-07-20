import type { StructureResolver } from "sanity/structure";

const singleton = (S: Parameters<StructureResolver>[0], title: string, schemaType: string, documentId: string) =>
  S.listItem().title(title).child(S.document().schemaType(schemaType).documentId(documentId));

const filteredList = (S: Parameters<StructureResolver>[0], title: string, schemaType: string) =>
  S.listItem().title(title).child(S.documentTypeList(schemaType).title(title));

export const chemciderStructure: StructureResolver = (S) =>
  S.list()
    .title("Chemcider content")
    .items([
      singleton(S, "Site settings", "siteSettings", "siteSettings"),
      singleton(S, "Primary navigation", "navigation", "navigation.primary"),
      S.divider(),
      S.listItem()
        .title("Corporate & governance")
        .child(
          S.list()
            .title("Corporate & governance")
            .items([
              filteredList(S, "Corporate pages", "page"),
              singleton(S, "CEO message", "ceoMessage", "ceoMessage.primary"),
              filteredList(S, "People", "person"),
              filteredList(S, "Teams, committees & boards", "governanceGroup"),
            ]),
        ),
      S.listItem()
        .title("Research & solutions")
        .child(
          S.list()
            .title("Research & solutions")
            .items([
              filteredList(S, "Research programmes", "researchProgramme"),
              filteredList(S, "Projects", "project"),
              filteredList(S, "Products", "product"),
              filteredList(S, "Services", "service"),
              filteredList(S, "Impact metrics", "impactMetric"),
            ]),
        ),
      S.listItem()
        .title("News & events")
        .child(
          S.list()
            .title("News & events")
            .items([
              filteredList(S, "News", "newsArticle"),
              filteredList(S, "Events", "event"),
            ]),
        ),
    ]);
