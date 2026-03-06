import { client } from "./client";

export async function getHero() {
  return client.fetch(`*[_type == "hero"][0]`);
}

export async function getDoctors() {
  return client.fetch(`*[_type == "doctor"] | order(name asc) {
    _id,
    name,
    specialty,
    bio,
    clinic,
    availability,
    "imageUrl": image.asset->url
  }`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(title asc) {
    _id,
    title,
    description,
    icon
  }`);
}

export async function getNews() {
  return client.fetch(`*[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "imageUrl": image.asset->url
  }`);
}
