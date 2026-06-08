---
layout: ../layouts/Markdown.astro
title: Privacy Policy — RexWithYou
description: How RexWithYou collects, uses, and protects your information.
eyebrow: Legal · Privacy
---

# Privacy Policy

**Effective Date:** June 8, 2026
**Last Updated:** June 8, 2026

Geo Track Technologies Inc ("**we**", "**our**", "**us**") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the **RexWithYou** mobile application for iOS and Android (the "**App**").

By downloading, installing, or using the App, you agree to the collection and use of your information as described in this Privacy Policy and our [Terms of Use](/terms).

If you have any questions, contact us at **support@rexwithyou.com**.

---

## 1. Introduction

RexWithYou is an AI-powered nutrition and wellness app. It helps you log meals, track calories and macros, monitor weight, water, and steps, and chat with an AI coaching character named Rex. You can create an account to sync your data across devices, and certain features use AI processing (OpenAI) and third-party services described below.

---

## 2. Information We Collect

We collect the following categories of information:

- **Account information**: when you sign in with Apple or Google, we receive your name and email address (or Apple's private relay email if you choose to hide it) and a unique account identifier. We do not receive or store your Apple/Google password.
- **Profile data**: year of birth, sex assigned at birth, height, weight, activity level, goal, dietary preferences and allergies.
- **Meal and nutrition logs**: food descriptions, portion sizes, meal categories, timestamps, calorie and macro values.
- **Body and progress data**: weight entries, optional waist measurement, weigh-ins, progress notes.
- **Meal photos, voice recordings, and chat messages**: content you create when using the App's logging and AI features.
- **Apple Health / Google Health Connect data**: with your explicit permission — step count, active energy burned, body weight, and (optionally) height. See Section 4.
- **Usage and analytics data**: how you interact with the App — screens viewed, features used, session length, events — collected via Firebase Analytics and our own analytics.
- **Marketing attribution data**: which campaign or source led you to install the App, collected via AppsFlyer. See Section 6.
- **Device and technical data**: device type, OS version, app version, language, advertising identifiers (IDFA / AAID, subject to your consent), a push notification token, IP address, and crash diagnostics (via Firebase Crashlytics and OS-level reporting).
- **Support communications**: anything you include when you email us.

---

## 3. How We Use Your Information

We use the information we collect to:

- Provide and operate the App's core features (calorie tracking, meal logging, progress, coaching);
- Authenticate you and sync your data across your devices via your account;
- Power AI features (chat, voice transcription, photo analysis, meal plans) — see Section 5;
- Send push notifications such as reminders and streak nudges (with your permission);
- Measure and analyse how the App is used so we can improve it (analytics);
- Measure the effectiveness of our marketing and understand how users find the App (attribution);
- Diagnose crashes and maintain stability;
- Process subscriptions and respond to support requests.

**We do not:**

- Sell your personal information;
- Use your health data for advertising or marketing (see Section 4);
- Access your contacts, calendar, SMS, or precise GPS location;
- Show third-party advertising inside the App.

---

## 4. Health Data (Apple HealthKit & Google Health Connect)

With your explicit permission, the App reads from Apple HealthKit (iOS) or Google Health Connect (Android): step count, active energy burned, body weight, and (optionally, one-time) height. With your permission it may **write** back weight and water entries you log in the App.

We treat this data with special care:

- The unique information you choose to share from **HealthKit** is **not** used by RexWithYou for marketing or advertising, and is **not** transferred to third parties (including our analytics and attribution providers) for marketing or advertising. Information you share with HealthKit is then governed by Apple's Terms and Privacy Policy.
- Information from **Google Health Connect** is likewise **not** used for marketing or advertising and is **not** sold or shared with third parties for those purposes.
- We never share HealthKit or Health Connect data with AppsFlyer, Firebase Analytics, or any advertising network.
- We never write false or inaccurate data into HealthKit or Health Connect.

You can revoke these permissions any time in iOS Settings → Privacy & Security → Health → RexWithYou, or in Android's Health Connect settings.

---

## 5. AI Features & Data Sharing with OpenAI

Several features rely on **OpenAI, L.L.C.** (San Francisco, USA) to provide AI processing. This section is provided to comply with Apple App Review Guideline 5.1.2(i) on third-party AI sharing.

**When you use an AI feature, the following is sent to OpenAI:**

- **AI chat with Rex** — your message text plus minimal profile context (your goal and today's calorie balance).
- **Voice meal entry** — the audio recording, sent to OpenAI's Whisper service for transcription.
- **Meal photo analysis** — the photo, sent to OpenAI's vision model to estimate ingredients and macros.
- **Meal plan and recipe generation** — your profile and dietary preferences.

**How your data is handled by OpenAI:**

- You initiate all AI processing by actively using a feature. **No data is sent to OpenAI without your direct action.**
- **OpenAI does not use your data to train its models** — we use the OpenAI API with the default data-usage opt-out.
- OpenAI retains API request data for up to 30 days for abuse monitoring, then deletes it.
- Data is transmitted over encrypted connections (HTTPS/TLS).

The first time you use any AI feature, the App shows a consent screen naming OpenAI. AI features stay disabled until you accept, and you can withdraw consent any time in Settings → Privacy → AI Features. For more information, review OpenAI's privacy policy at [openai.com/policies](https://openai.com/policies/row-privacy-policy/).

---

## 6. Analytics & Advertising Identifiers

To improve the App and understand how people find and use it, we use:

- **Firebase Analytics** (Google) — in-app usage events and aggregate metrics.
- **Our own analytics** — product events sent to our analytics endpoint.
- **AppsFlyer** — marketing attribution: which ad, campaign, or referral led to your install. AppsFlyer may process device identifiers (IDFA on iOS, AAID on Android) and your IP address.

**App Tracking Transparency (iOS).** On iOS, before we use the IDFA or link your data with third parties for attribution, we show Apple's App Tracking Transparency prompt. **If you decline, we do not use the IDFA and do not track you across other apps or websites.** You can change this any time in iOS Settings → Privacy & Security → Tracking.

**Consent (EU/UK).** In the EU and UK, analytics and attribution that are not strictly necessary run only after you give consent, which you can withdraw in Settings → Privacy.

We never use health, meal, photo, voice, or chat content for advertising or attribution.

---

## 7. Account Data & Cloud Sync

When you create an account (Apple or Google sign-in), your profile and logs are synced to and stored in **Firebase** (Google Cloud) so they are available across your devices and restored if you reinstall the App. This data is associated with your account identifier, transmitted over TLS, and protected by Firebase's security infrastructure.

You can use core tracking on a single device, and you can delete your account and all associated cloud data at any time (Section 9).

---

## 8. Third-Party Services

| Service | What is shared | Purpose |
|---|---|---|
| **Apple / Google Sign-In** | Name, email, account identifier | Authentication |
| **Firebase (Google)** | Account data, synced profile/logs, usage events, crash data, push token | Auth, cloud sync, analytics, crash reporting, push notifications |
| **AppsFlyer** | Device identifiers (IDFA/AAID, with consent), IP address, install data | Marketing attribution |
| **OpenAI** | Chat text, voice, photos, profile context (see §5) | AI features |
| **Spoonacular** | Recipe search queries, IP address | Recipe and ingredient data |
| **Apple / Google (stores)** | Subscription purchase tokens | Payments, app distribution |

Each service has its own privacy policy; we encourage you to review them. We do **not** sell your data or share it with parties other than those listed here.

---

## 9. Data Storage, Security & Retention

- Account data and synced logs are stored in Firebase (Google Cloud), encrypted in transit (HTTPS/TLS) and at rest.
- On-device data is stored using the platform's secure storage (iOS Keychain, Android Keystore).
- HealthKit / Health Connect data is excluded from device backups handled outside our control where the OS permits, and is never stored for advertising.
- We retain your account and synced data while your account is active. If you delete your account — via **Settings → Account → Delete Account** or by emailing us — we delete your personal data within 30 days, except where we must retain it to comply with law.
- Data sent to OpenAI is retained by OpenAI for up to 30 days, then deleted.
- Aggregated, anonymised analytics may be retained indefinitely.

---

## 10. Your Rights

**If you are in the European Economic Area, the UK, or Switzerland (GDPR):**
You have the right to access, rectify, erase, restrict, object to processing, and data portability, and to lodge a complaint with your local supervisory authority. Health-related data (weight, body measurements, dietary data) is a special category under GDPR Article 9 — we process it only with your explicit consent, which you can withdraw at any time. Analytics and attribution run only with your consent.

**If you are in California (CCPA/CPRA):**
You have the right to know, delete, and correct your personal information, to limit the use of sensitive personal information, and to opt out of the sale or sharing of personal information. **We do not sell your personal information.** We honor Global Privacy Control (GPC) signals.

**If you are a Washington, Nevada, or Connecticut resident:**
You have additional rights over "consumer health data" under state health-privacy laws, including the right to access, delete, and withdraw consent.

To exercise any right, use the in-App controls or email **support@rexwithyou.com**. We respond within 30 days.

---

## 11. Children's Privacy

The App is not intended for anyone under **16**. We do not knowingly collect information from children under 16. On first launch we ask for your year of birth; if it indicates you are under 16, you cannot create a profile. If you believe a child under 16 has provided us data, contact us and we will delete it.

---

## 12. International Data Transfers

We and our service providers (Firebase, AppsFlyer, OpenAI, Spoonacular, Apple, Google) are based in or operate from the United States and other countries. If you use the App from outside your home country, your information may be processed in the US. Where required, transfers rely on Standard Contractual Clauses (SCCs).

We do not knowingly offer the App in, or transfer data to, the Russian Federation or other comprehensively sanctioned jurisdictions.

---

## 13. Medical & Eating-Disorder Notice

RexWithYou is a tracking and coaching tool, **not** a medical device, and does not provide medical advice. AI-generated calorie and macro estimates are approximations and may be inaccurate; do not rely on them for clinical decisions.

If you are pregnant or nursing, or have a medical condition (including diabetes), consult your healthcare provider before following calorie targets or meal plans. **If you have or are recovering from an eating disorder, please consult your treatment provider before using a calorie-tracking app.** See our [Terms of Use](/terms) for full health disclaimers and support resources.

---

## 14. Changes to This Policy

We may update this Privacy Policy from time to time. We will change the "Last Updated" date above and, for material changes, show an in-App notice the next time you open the App. Continued use after changes take effect constitutes acceptance.

---

## 15. Contact Us

If you have questions about this Privacy Policy or your data:

> **Geo Track Technologies Inc**
> 8 The Green, STE A, Dover, DE 19901
> United States
> Email: **support@rexwithyou.com**

---

*End of Policy.*
