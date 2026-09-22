import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = "https://obliquetemp.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/studio", "/contact"];

  return [
    ...pages.map((path, index) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [`${siteUrl}${project.cover.src}`],
    })),
  ];
}
