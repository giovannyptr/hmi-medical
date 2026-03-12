# Sanity Content Guide

Go to `/studio` to manage all landing page content. Below is a reference for every content type and what to fill in.

---

## Table of Contents

1. [Hero Carousel](#1-hero-carousel)
2. [Clinics (Find Us)](#2-clinics-find-us)
3. [Medical Specialties](#3-medical-specialties)
4. [Specialist Cards](#4-specialist-cards)
5. [Landing Page Settings](#5-landing-page-settings)
6. [News & Insights](#6-news--insights)

---

## 1. Hero Carousel

**Studio path:** Content → Hero Carousel

This controls the full-screen slideshow at the top of the landing page. You can add, remove, or reorder slides.

Each slide has:

| Field | Description | Example |
|---|---|---|
| **Tag** | Small label shown above the heading | `Community Outreach` |
| **Heading** | Large bold text. Use `\n` for a line break | `HMI Cares for All\nSingaporeans` |
| **Description** | Short paragraph below the heading | `The event marks the official launch of HMI Cares...` |
| **Slide Navigation Label** | Short label shown in the bottom tab bar | `HMI Cares for all Singaporeans` |
| **CTA Button Label** | Text on the button | `Find out more` |
| **CTA Link** | Where the button goes | `/health-screening` |
| **Background Image** | Full-screen background photo | Upload a high-resolution landscape image |

> **Tips:**
> - Recommended image size: **1920 × 1080px** minimum
> - Keep headings short — they render very large on screen
> - The slide order in Sanity matches the order shown on the site

---

## 2. Clinics (Find Us)

**Studio path:** Content → Clinics

This controls the "Find Us" section. The **first clinic by Display Order** is shown as the main clinic with full contact details. All others appear below as satellite clinics (address only).

Each clinic has:

| Field | Description | Example |
|---|---|---|
| **Clinic Type** | Select from dropdown | `Specialist Centre` |
| **Clinic Name** | Displayed as the heading | `HMI Medical Centre` |
| **Address** | Full address | `12 Farrer Park Station Road, #05-01, Singapore 217565` |
| **Phone Number** | Clickable phone link | `+65 6322 6333` |
| **WhatsApp Number** | Links to WhatsApp chat | `+65 9655 2101` |
| **General Enquiries Email** | Shown under "General enquiries" | `info.hmimedicalcentre@hmimedical.com` |
| **Feedback Email** | Shown under "Feedback" | `concierge.hmimedicalcentre@hmimedical.com` |
| **Google Maps Embed URL** | The `src` URL from a Google Maps embed iframe | See below |
| **Display Order** | `1` = main clinic, `2` = first satellite, etc. | `1` |

> **How to get a Google Maps Embed URL:**
> 1. Go to [maps.google.com](https://maps.google.com) and search for the clinic
> 2. Click **Share** → **Embed a map**
> 3. Copy only the URL inside `src="..."` from the iframe code

> **Note:** WhatsApp, emails, and Maps embed URL only need to be filled for the **main clinic** (Display Order = 1). Satellite clinics only need Name, Address, and Display Order.

---

## 3. Medical Specialties

**Studio path:** Content → Medical Specialties

These are the cards in the "Medical Specialties" grid section. Add one document per specialty.

Each specialty has:

| Field | Description | Example |
|---|---|---|
| **Title** | Name of the specialty | `Colon Health` |
| **Description** | One-sentence description shown on the card | `Offering minimally-invasive procedures for colorectal issues.` |
| **Icon Image** | Square icon shown in the circular thumbnail | Upload a PNG icon (recommended: **160 × 160px**) |
| **Link** | Where the card links to | `/specialty-care` |
| **Display Order** | Controls the order of cards left-to-right, top-to-bottom | `1`, `2`, `3`... |

> **Tips:**
> - Use consistent icon style across all specialties
> - The section heading and description are managed in [Landing Page Settings](#5-landing-page-settings)

---

## 4. Specialist Cards

**Studio path:** Content → Specialist Cards

These are the large portrait cards in the "Find specialist care" carousel section.

Each card has:

| Field | Description | Example |
|---|---|---|
| **Title** | Specialty name | `Colon Health` |
| **Description** | Short paragraph shown below the card title | `Maintaining a healthy colon involves balanced nutrition...` |
| **Image** | Tall portrait photo (will fill a 390 × 450px frame) | Upload a high-quality portrait photo |
| **Link** | Where the card links to | `/specialty-care` |
| **Display Order** | Order in the carousel | `1`, `2`, `3` |

> **Tips:**
> - Recommended image size: **800 × 1000px** portrait
> - The section heading, label, body text, and CTA are managed in [Landing Page Settings](#5-landing-page-settings)

---

## 5. Landing Page Settings

**Studio path:** Content → Landing Page Settings

This is a single document (singleton) that controls section-level text across the landing page. There is only one — just edit it directly.

### Medical Specialties Section

| Field | Description | Example |
|---|---|---|
| **Heading** | Section title | `Medical Specialties` |
| **Description** | Subtitle below the heading | `We prioritise reducing healthcare hassles – from department transitions to staff knowing your name.` |

### Specialist Care Section

| Field | Description | Example |
|---|---|---|
| **Label** | Small uppercase label above the heading | `OUR SPECIALISTS` |
| **Heading** | Large section heading. Use `\n` for a line break | `Find specialist care\nto your needs` |
| **Body Text** | Paragraph on the right side of the header | `From heart-care to aging gracefully, HMI Medical has a diverse...` |
| **CTA Link Text** | Text of the link below the body | `Our network of specialists` |

### Insights Section

| Field | Description | Example |
|---|---|---|
| **Heading** | Section title | `Sharing more insights` |
| **View More URL** | Where the "View more" button links | `https://www.hmimedical.com/news-resources/health-tips` |

### Corporate Enquiry Section

| Field | Description | Example |
|---|---|---|
| **Heading** | Bold text inside the banner | `For corporate enquiries` |
| **Email Address** | Clickable email link | `askus@hmimedical.com.sg` |

---

## 6. News & Insights

**Studio path:** Content → News & Insights

The Insights section on the landing page automatically shows the **3 most recent** news articles ordered by Published Date.

Each article has:

| Field | Description |
|---|---|
| **Title** | Article headline |
| **Slug** | URL-friendly identifier (e.g. `healthiersg-for-pioneers` → `/news/healthiersg-for-pioneers`) |
| **Excerpt** | Short summary shown on the featured card |
| **Published Date** | Controls sort order — most recent appears first |
| **Cover Image** | Photo shown on the card |

> **Note:** The Insights section will not render if there are no news articles. Add at least 1 article to make the section visible.

---

## Content Priority Order

If you're setting up from scratch, fill in content in this order:

1. **Landing Page Settings** — section text appears immediately
2. **Hero Carousel** — add at least 1 slide
3. **Clinics** — add main clinic (order = 1) and satellite clinic (order = 2)
4. **Medical Specialties** — add all 12 specialties
5. **Specialist Cards** — add at least 3 cards
6. **News & Insights** — add at least 1 article for the Insights section to appear
