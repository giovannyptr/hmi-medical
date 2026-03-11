# HMI Medical — Website

A modern, responsive healthcare website for HMI Medical, built with Next.js 16, Tailwind CSS, and Sanity CMS.

**Live:** https://hmi-medical-ta9c.vercel.app/
**Sanity Studio:** https://hmi-medical-ta9c.vercel.app/studio/structure

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS |
| CMS | Sanity v3 |
| Language | TypeScript |
| Deployment | Vercel |
| i18n | Custom React Context (EN / ID) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — wraps with LanguageProvider
│   └── (site)/
│       ├── layout.tsx              # Site layout — AnnouncementBar, TopBar, Navbar, Footer
│       ├── page.tsx                # Landing page
│       ├── doctors/                # Find a Doctor page
│       ├── clinics/                # Find a Clinic page
│       ├── services/               # Services page
│       ├── specialty-care/         # Specialty Care page
│       ├── health-screening/       # Health Screening page
│       ├── medical-travel/         # Medical Travel page
│       └── contact/                # Contact page
├── components/
│   ├── header/
│   │   ├── AnnouncementBar.tsx     # Top announcement strip
│   │   ├── TopBar.tsx              # Desktop top bar (language switcher, links)
│   │   └── Navbar.tsx              # Main navigation + mobile menu overlay
│   ├── footer/
│   │   └── Footer.tsx              # Footer (desktop grid + mobile accordion)
│   ├── hero/
│   │   └── HeroSection.tsx         # Auto-sliding hero carousel
│   ├── specialists/
│   │   └── SpecialistCareSection.tsx  # Horizontal carousel (desktop)
│   ├── specialties/
│   │   └── MedicalSpecialtiesSection.tsx  # Grid with mobile load-more
│   ├── insights/
│   │   └── InsightsSection.tsx     # News cards (mobile stack / desktop grid)
│   ├── corporate/
│   │   └── CorporateEnquirySection.tsx
│   ├── medical-travel/
│   │   ├── MedicalTravelHeroSection.tsx
│   │   ├── MedicalTravelIntroSection.tsx
│   │   ├── MedicalTravelTabsSection.tsx
│   │   ├── MedicalTravelPackagesSection.tsx
│   │   └── MedicalTravelDiscoverSection.tsx
│   ├── health-screening/
│   │   ├── HealthScreeningFacilitiesSection.tsx
│   │   └── HealthScreeningFAQSection.tsx
│   └── ui/
│       └── Container.tsx
├── contexts/
│   └── LanguageContext.tsx         # EN/ID language context + localStorage persistence
├── lib/
│   ├── translations.ts             # Full EN/ID translation dictionary
│   └── utils.ts
└── sanity/
    ├── client.ts                   # Sanity client
    ├── image.ts                    # Image URL builder
    ├── queries.ts                  # GROQ queries
    └── schemas/
        ├── doctor.ts
        ├── clinic.ts
        └── healthScreeningPackage.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Sanity project (free at [sanity.io](https://sanity.io))

### 1. Clone and install

```bash
git clone https://github.com/giovannyptr/hmi-medical.git
cd hmi-medical
npm install
```

### 2. Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Open Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

---

## Sanity Studio

The embedded Sanity Studio is available at `/studio`. It manages:

| Collection | Description |
|-----------|-------------|
| **Doctors** | Doctor profiles with photo, specialisation, clinic |
| **Clinics** | Clinic locations and details |
| **Health Screening Packages** | Screening package tiers (Simple, Signature, etc.) |

---

## Internationalisation (i18n)

Language switching is implemented with React Context and `localStorage` (no URL routing change required).

- Supported locales: **English (EN)** and **Bahasa Indonesia (ID)**
- All translations live in `src/lib/translations.ts`
- Toggle via the language selector in the TopBar (desktop) or mobile menu (bottom section)

To add a new translation key:

```ts
// src/lib/translations.ts
const en = {
  mySection: {
    heading: "My Heading",
  },
} as const;

const id = {
  mySection: {
    heading: "Judul Saya",
  },
} as const;
```

Then use it in any component:

```tsx
const { t } = useTranslation();
return <h1>{t.mySection.heading}</h1>;
```

---

## Deployment

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

### Deploy manually

```bash
npm run build   # verify build passes locally first
vercel --prod
```

### Required environment variables on Vercel

Go to **Vercel → Project → Settings → Environment Variables** and add:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `s8kr3bxe` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

---

## Key Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/doctors` | Find a Doctor |
| `/doctors/[slug]` | Doctor profile |
| `/clinics` | Find a Clinic |
| `/services` | Our Services |
| `/specialty-care` | Specialty Care |
| `/health-screening` | Health Screening packages |
| `/medical-travel` | Medical Travel for international patients |
| `/contact` | Contact / Make Appointment |
| `/studio` | Sanity CMS Studio (password protected) |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
