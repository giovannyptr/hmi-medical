import { client } from "./client";

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

export async function getNewsArticle(slug: string) {
  return client.fetch(`*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "imageUrl": image.asset->url,
    body
  }`, { slug });
}

export async function getMedicalSpecialties() {
  return client.fetch(`*[_type == "medicalSpecialty"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "iconUrl": icon.asset->url
  }`);
}

export async function getMedicalSpecialty(slug: string) {
  return client.fetch(`*[_type == "medicalSpecialty" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "iconUrl": icon.asset->url,
    body
  }`, { slug });
}

export async function getSpecialists() {
  return client.fetch(`*[_type == "specialist"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url
  }`);
}

export async function getSpecialist(slug: string) {
  return client.fetch(`*[_type == "specialist" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    body
  }`, { slug });
}
