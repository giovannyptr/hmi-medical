import { client } from "./client";

export async function getHero() {
  return client.fetch(`*[_type == "hero"][0]`);
}

export async function getDoctors() {
  return client.fetch(`*[_type == "doctor"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    specialty,
    bio,
    clinic,
    availability,
    "imageUrl": image.asset->url
  }`);
}

export async function getDoctor(slug: string) {
  return client.fetch(`*[_type == "doctor" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    specialty,
    bio,
    clinic,
    availability,
    services,
    languages,
    qualifications,
    email,
    "imageUrl": image.asset->url
  }`, { slug });
}

export async function getClinics() {
  return client.fetch(`*[_type == "clinic"] | order(order asc, name asc) {
    _id,
    type,
    name,
    address,
    phone,
    openingHours
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

export async function getHealthScreeningPackages() {
  return client.fetch(`*[_type == "healthScreeningPackage"] | order(order asc) {
    _id,
    title,
    description,
    price,
    bookingUrl
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
