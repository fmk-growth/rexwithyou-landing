---
layout: ../layouts/Markdown.astro
title: Privacy Policy — RexWithYou
description: How RexWithYou collects, uses, and protects your information.
eyebrow: Legal · Privacy
---

# Privacy Policy

**Effective Date:** June 3, 2026
**Last Updated:** June 3, 2026

> Subscription pricing is set per region by Apple and Google and shown on the App Store / Google Play paywall in the user's local currency.

This Privacy Policy explains how `Geo Track Technologies Inc` ("**we**", "**our**", "**us**", or "**RexWithYou**") collects, uses, and protects your information when you use the **RexWithYou** mobile application for iOS and Android (the "**App**", or the "**Service**"). The App centres on an AI fitness coach named *Rex* and is designed to help you track meals, weight, water, and progress.

By downloading, installing, or using the App, you agree to the practices described in this Policy and in our [Terms of Service](/terms). If you do not agree, please do not install or use the App.

For privacy questions or to exercise your rights, contact us at **`support@rexwithyou.com`**.

---

## 1. Summary in plain English

We built RexWithYou to be **local-first**: the App has no user account, no login, and no server backend operated by us. The information you enter — your profile, food logs, weight history, chat — lives on your device. When you choose to use an AI feature (snap a meal photo, record a voice meal, chat with Rex), the specific content of that request is sent to **OpenAI** for processing and a response is returned. That's it.

We do **not**:

- sell your personal information,
- show you advertising,
- use your health information for marketing or profiling,
- train AI models on your data,
- create accounts or profiles on our servers,
- transfer data to the Russian Federation or other sanctioned jurisdictions.

What follows is the long version, with the disclosures required by Apple App Review Guidelines (5.1.1, 5.1.2, 5.1.2(i), 5.1.3), Google Play health policies, the EU/UK GDPR, the California Consumer Privacy Act (CCPA/CPRA), and the Washington My Health My Data Act (MHMDA).

---

## 2. Who we are and how to contact us

The data controller (under GDPR) and business (under CCPA) responsible for this Policy is:

> **`Geo Track Technologies Inc`**
> `8 The Green, STE A, Dover, DE 19901`
> `United States`
> Email: **`support@rexwithyou.com`**

We do not currently appoint a Data Protection Officer because we do not engage in large-scale processing of special-category data as a core activity. If you are in the European Economic Area or the United Kingdom and require a designated EU/UK Representative, please contact us; we will provide details upon request.

---

## 3. Data we collect

We collect only what the App needs to work. Categories below are grouped by source.

### 3.1 Information you provide directly

| Category | Examples |
|---|---|
| **Profile** | Date of birth (year only is required), sex assigned at birth, height, weight, goal (lose / maintain / gain), activity level, dietary preferences and allergies |
| **Food and meal logs** | Text descriptions, portion sizes, meal categories, timestamps |
| **Voice recordings** | Audio you record using voice meal entry or voice chat with Rex |
| **Meal photos** | Images you capture or upload for AI food recognition |
| **Chat messages** | Text you send to the Rex AI coach |
| **Body and progress data** | Weight entries, waist circumference (optional), weekly weigh-ins, progress notes |
| **Support communications** | Anything you include when you email us |

### 3.2 Information from Apple HealthKit and Google Health Connect

With your explicit permission, the App reads the following from Apple HealthKit (iOS) or Google Health Connect (Android):

- Step count
- Active energy burned
- Body weight history
- Height (optional, one-time, to populate your profile)

With your explicit permission, the App may **write** the following back to HealthKit / Health Connect:

- Body weight entries that you log inside the App
- Hydration entries (water glasses you log)

You can revoke these permissions at any time:

- **iOS:** Settings → Privacy & Security → Health → RexWithYou
- **Android:** Settings → Apps → Health Connect → RexWithYou, or Settings → Apps → RexWithYou → Permissions

### 3.3 Information collected automatically

When you use the App, your device operating system makes the following available:

- Device type and operating system version (for compatibility)
- App version
- Device locale and language (so the App shows the correct UI)
- Crash diagnostics (collected by Apple and Google through standard OS-level developer reporting, in accordance with your device-level diagnostic-sharing settings)

We do **not** operate our own server-side logging. Your IP address is not stored by us. It is, however, visible to the third-party APIs the App calls on your behalf (see §6).

### 3.4 What we do NOT collect

- We do not require or collect a name, email address, phone number, password, or any account credentials. The App does not have a login.
- We do not collect precise GPS location, contacts, calendar, SMS, browsing history, or photos other than the meal photos you upload.
- We do not use advertising identifiers (IDFA on iOS, AAID on Android).
- We do not embed third-party advertising, marketing, or attribution SDKs.

---

## 4. How we use your data

We use the categories of data in §3 for the following purposes:

| Purpose | Categories used | GDPR legal basis |
|---|---|---|
| Provide the core App: calculate nutrition targets, log meals and water, display weight and step progress | Profile, food logs, HealthKit/Health Connect, body data | Contract performance — Art. 6(1)(b) |
| Power AI features: chat, voice transcription, meal photo analysis, meal planning | Chat text, voice files, meal photos, profile context | Consent — Art. 6(1)(a) and Art. 9(2)(a) for health-related elements |
| Respond to support requests | Support communications | Contract / legitimate interest — Art. 6(1)(f) |
| Diagnose crashes and maintain App stability | Device crash diagnostics (via Apple/Google OS) | Legitimate interest — Art. 6(1)(f) |
| Process subscription purchases | Apple/Google purchase confirmation tokens | Contract performance — Art. 6(1)(b) |
| Comply with legal obligations | All categories as required by law | Legal obligation — Art. 6(1)(c) |

We do **not** use your data to:

- show you advertising (the App contains none),
- sell or rent your personal information,
- train any AI model (ours or third-party — see §5),
- build marketing profiles,
- make decisions that produce legal or similarly significant effects about you (Rex's recommendations are informational, not medical).

---

## 5. AI processing — OpenAI

Some features of RexWithYou are powered by large language models, audio models, and vision models provided by **OpenAI, L.L.C.** ("**OpenAI**"), based in San Francisco, California, USA. This section discloses these uses in the detail required by Apple's App Review Guidelines, including **Guideline 5.1.2(i)** on third-party AI sharing.

### 5.1 Features that use OpenAI

- **AI chat with Rex**: when you send a message in the chat tab, the text of your message and a minimal slice of profile context (your goal, current calorie balance, today's macros) are sent to OpenAI to generate a coaching reply.
- **Voice meal entry (Whisper)**: when you record a voice meal entry, the audio file is sent to OpenAI's Whisper service for speech-to-text transcription.
- **Meal photo analysis (Vision)**: when you take a photo of a meal, the image is sent to OpenAI's vision model to estimate food items, portion sizes, and macronutrients.
- **Recipe and meal plan generation**: when you ask for a meal plan, your profile and dietary preferences are sent to OpenAI to generate suggestions.

### 5.2 What OpenAI does with this data

Under our API agreement with OpenAI:

- **OpenAI does not use your data to train its models.** We use the OpenAI API with the default data-usage opt-out that applies to all API customers as of March 1, 2023.
- **OpenAI retains API request data for up to 30 days** for abuse and misuse monitoring, after which it is deleted. We do not have a Zero Data Retention agreement at this time; if your jurisdiction requires shorter retention, please contact us.
- **OpenAI acts as our data processor.** We are the controller; OpenAI is the processor. The relationship is governed by OpenAI's [Data Processing Addendum](https://openai.com/policies/data-processing-addendum/), which incorporates the European Commission's Standard Contractual Clauses (SCCs) for international transfers.
- OpenAI's own privacy practices for API customers are summarised at [openai.com/enterprise-privacy](https://openai.com/enterprise-privacy/) and in their [API privacy policy](https://openai.com/policies/row-privacy-policy/).

### 5.3 Your consent

The first time you use any AI feature, the App shows a consent screen that names OpenAI explicitly and describes what is sent. AI features are disabled until you grant permission. This satisfies Apple App Review Guideline 5.1.2(i), which requires "explicit permission" before sharing personal data with third-party AI.

You can withdraw consent at any time in **Settings → Privacy → AI Features** inside the App. Withdrawing consent disables AI features but does not affect manual tracking, your profile, or your logged history.

### 5.4 Minimisation — what is NOT sent

Only the data needed for the specific AI request is sent. Examples:

- Opening the chat tab does not transmit anything. Tapping "Send" transmits the message you typed.
- Opening the photo scanner does not transmit anything. Confirming a photo transmits that image.
- The App does not send your full history, your full HealthKit data, or your weight log to OpenAI.

---

## 6. Other third-party services

Aside from OpenAI (§5), the App interacts with the following third parties:

| Recipient | What is transmitted | Purpose | Country | More info |
|---|---|---|---|---|
| **Spoonacular** (operated by spoonacular.com) | Recipe search queries (e.g. "chicken pasta"); your device IP address (visible to them as request originator) | Return recipe and ingredient data | USA / Germany | [Spoonacular Terms](https://spoonacular.com/food-api/terms) |
| **Apple Inc.** | App Store purchase tokens, OS crash diagnostics, HealthKit permission grants | Distribute the App; process payments; OS-level crash diagnostics | USA | [Apple Privacy](https://www.apple.com/legal/privacy/) |
| **Google LLC** | Google Play purchase tokens, OS crash diagnostics, Health Connect permission grants | Distribute on Android; process payments; OS-level crash diagnostics | USA | [Google Privacy](https://policies.google.com/privacy) |

We do **not** share information with:

- advertisers, ad networks, or attribution providers,
- data brokers or list builders,
- social-media platforms (the App has no social-login or share-to-network features),
- analytics SDK providers (we run no third-party analytics).

If we ever add a new processor or recipient, we will update this Policy and, where required by law or by Apple/Google guidelines, request fresh consent before activating it.

### 6.1 Business transfers

If the assets of RexWithYou are ever acquired by another company, your information may be transferred as part of that transaction. Any acquirer would be bound by the commitments in this Policy or required to provide you with notice of changes.

### 6.2 Legal requests

We may disclose information if we are required by law, court order, or other valid legal process, or if disclosure is necessary to protect the rights, property, or safety of users, the public, or us. Because we hold almost no information about you on our infrastructure, the practical scope of any such disclosure is limited.

---

## 7. Apple HealthKit and Google Health Connect

We treat data from Apple HealthKit and Google Health Connect with extra care, in line with Apple App Review Guideline 5.1.3 and Google Play's Health Data policy.

The unique information you choose to send from **Apple HealthKit** is not used by RexWithYou for marketing or advertising and is not transferred by RexWithYou to third parties for marketing or advertising. The information you provide to HealthKit is then governed by Apple's Terms and Conditions and Privacy Policy.

Similarly, the unique information you choose to send from **Google Health Connect** is not used by RexWithYou for marketing or advertising and is not transferred by RexWithYou to third parties for marketing or advertising. The information you provide to Health Connect is then governed by Google's Terms and Privacy Policy.

Additional commitments specific to health data:

- Health data is **never** sold, rented, or shared with insurers, employers, data brokers, or marketing networks.
- Health data from Apple HealthKit is **never stored in iCloud** by RexWithYou. It is stored on your device and is explicitly excluded from the iOS iCloud backup mechanism.
- Health data from Google Health Connect remains in Health Connect; the App caches a minimal on-device subset only to render history without re-reading every screen.
- When an AI feature requires it (§5), a specific item — for example a single weight entry or food description — may be transmitted to OpenAI solely to generate the requested output, subject to OpenAI's processor terms and the 30-day retention described in §5.2.
- We will never write false or inaccurate data to HealthKit / Health Connect on your behalf.

---

## 8. Local-first storage and security

RexWithYou is designed to minimise the data that ever leaves your device.

- **No backend.** We do not operate a server that stores your profile, food logs, weight history, or chat. There is no account database with your name in it because there is no account.
- **On-device storage.** Profile, food logs, weight, water, chat history, and cached recipe data are stored on your device using the platform-provided storage mechanisms (iOS Keychain and SharedPreferences for iOS, SharedPreferences for Android).
- **iCloud / Google Backup.** Data marked as health-sensitive is excluded from iOS iCloud backup. Other App preferences may be included in standard OS backups under your existing OS-level backup settings; you control those settings on your device.
- **Encryption in transit.** All communication with OpenAI, Spoonacular, Apple, and Google services is encrypted in transit using TLS (HTTPS).
- **Encryption at rest.** Your device's full-disk encryption (FileVault, BitLocker, iOS hardware encryption, Android encryption) applies to App data.
- **API credentials.** OpenAI and Spoonacular API credentials are embedded in the App with rate limiting and abuse monitoring on our third-party accounts.

No method of transmission or storage is 100% secure. If we become aware of a personal-data breach that meets the threshold for legal notification, we will notify affected users without undue delay and, where required, the relevant supervisory authority within the legally required timeframe.

---

## 9. International data transfers

RexWithYou is operated from `United States`. The third-party services we use (OpenAI, Spoonacular, Apple, Google) are based in or operate from the United States and other jurisdictions.

If you use the App from the European Economic Area, the United Kingdom, Switzerland, or another jurisdiction with data-export restrictions, you understand that your information will be transferred to and processed in countries that may not provide the same level of legal protection as your home country. Where required, we rely on:

- **Standard Contractual Clauses (SCCs)** with OpenAI for transfers of personal data to the United States, incorporated into OpenAI's Data Processing Addendum (linked in §5.2).
- Adequacy decisions, derogations, or transfer mechanisms published by the European Commission, the UK Information Commissioner's Office, and Apple / Google for the platform services.

**We do not knowingly transfer personal data to the Russian Federation or to other jurisdictions subject to comprehensive international sanctions.** The App is not offered for download in the Russian App Store or Google Play region.

---

## 10. Data retention

| Category | Retention |
|---|---|
| Profile, food logs, weight history, chat history on your device | Until you delete it inside the App or uninstall the App |
| AI request data transmitted to OpenAI | Up to 30 days, then deleted by OpenAI |
| Spoonacular recipe queries | Subject to Spoonacular's own retention policy |
| Crash diagnostics shared with Apple / Google | Subject to Apple / Google's standard retention |
| Support emails you send us | Up to 24 months after the issue is resolved, then deleted |
| Aggregated, anonymised usage counters | Indefinitely in fully anonymised form (no personal identifiers) |

You can delete all RexWithYou data at any time by:

1. Tapping **Settings → Privacy → Delete All My Data** inside the App, or
2. Uninstalling the App from your device.

Either action permanently removes the locally stored data. Data already transmitted to OpenAI or Spoonacular for past requests is subject to their retention policies and is automatically deleted on their side under their stated timelines.

---

## 11. Subscriptions and payments

The App offers a paid tier ("**RexWithYou Premium**", or simply "**RexWithYou**") that unlocks AI features and meal-plan generation. Pricing is set per region by Apple and Google and displayed on the App Store or Google Play paywall in your local currency before you complete the purchase. You are not charged anything until you confirm.

All payments are processed by **Apple** (App Store) on iOS and by **Google** (Google Play) on Android. We do not see or store your payment card details. We receive a purchase token and a subscription status; we use these only to unlock paid features in the App.

Subscription lifecycle, billing, refunds, and cancellation are handled by Apple and Google in accordance with their respective Media Services Terms. For details and the specific Apple-required auto-renewal disclosure, see our [Terms of Service](/terms) §5.

---

## 12. Your privacy rights

You have rights over your personal information. Some rights depend on where you live; we honour the strongest applicable set globally where practical.

### 12.1 Universal rights

- **Access**: review the personal data we hold about you (most of it is visible directly in the App; we have no server-side store).
- **Correction**: edit your profile, weight, and logs directly in the App.
- **Deletion**: delete your data via Settings → Privacy → Delete All My Data, or by uninstalling.
- **Withdraw AI consent**: disable AI features in Settings → Privacy → AI Features.

### 12.2 If you are in the European Economic Area, the United Kingdom, or Switzerland (GDPR / UK GDPR)

You also have the right to:

- **Object** to processing based on legitimate interests,
- **Restrict** processing in certain circumstances,
- **Data portability**: receive a copy of your data in a structured, machine-readable format,
- **Lodge a complaint** with the data protection supervisory authority in your country of residence.

The legal bases on which we rely are mapped in the table in §4. Where processing is based on consent, you can withdraw that consent at any time without affecting the lawfulness of processing before the withdrawal.

### 12.3 If you are in California (CCPA / CPRA)

You have the right to:

- **Know** what categories of personal information we collect, use, and disclose,
- **Delete** personal information we have collected from you,
- **Correct** inaccurate personal information,
- **Opt out of "sale" or "sharing"** of personal information — we do **not** sell or share personal information as those terms are defined under the CCPA,
- **Limit use of sensitive personal information** — health data is treated as sensitive and is used only for the purposes described in this Policy,
- **Non-discrimination** for exercising your rights.

### 12.4 How to exercise your rights

Email us at **`support@rexwithyou.com`**. We respond within 30 days (or sooner where required by law). Because we hold almost no identifying information about you, we typically verify a request by asking you to confirm it from the same device on which you use the App, or by other reasonable means.

---

## 13. Washington Consumer Health Data Notice (MHMDA)

This section applies to Washington State residents and is provided to comply with the Washington My Health My Data Act (RCW 19.373).

For purposes of MHMDA, "consumer health data" that we collect or process includes:

- Body weight, height, and BMI calculated from those values,
- Step count, activity level, and active-energy data from Apple HealthKit / Google Health Connect,
- Food logs (which can imply dietary, religious, or medical-condition information),
- Meal photos (which can include images of you or your body indirectly).

We collect this data **only** to provide the App's nutrition tracking, progress display, and AI coaching features. We do **not** sell consumer health data, and we have not authorised any third party to collect consumer health data over time and across different websites or online services for the purpose of cross-context behavioural advertising or any other secondary purpose.

The categories of recipients of consumer health data are limited to those listed in §5 and §6. We do not engage in the sale of consumer health data; we do not provide consumer health data to data brokers; we do not use consumer health data to target advertising.

Washington residents have the right to:

- Confirm whether we are collecting, sharing, or selling consumer health data about them,
- Access that data,
- Request deletion of that data,
- Withdraw consent for our collection or sharing of that data,
- Appeal a refusal by us to act on a request — please email us with the word "Appeal" in the subject line at **`support@rexwithyou.com`** within 60 days, and we will respond within 45 days.

To exercise these rights, email **`support@rexwithyou.com`**.

---

## 14. Children's privacy

The App is not intended for, and we do not knowingly collect information from, individuals under the age of **16**.

When you first open RexWithYou, we ask for your year of birth. If the value you provide indicates you are under 16, the App will not let you create a profile and will display guidance pointing to age-appropriate alternatives.

If you believe we have inadvertently collected information from a person under 16, please contact us at **`support@rexwithyou.com`** and we will delete the data promptly.

We choose 16 (rather than the COPPA threshold of 13) because: (a) under-16 youth health data carries heightened sensitivity under the EU GDPR and the WA MHMDA, (b) intentional calorie tracking by younger teens has been associated with disordered eating in clinical literature, and (c) doing so simplifies compliance across jurisdictions.

---

## 15. Eating-disorder safeguards

We recognise that calorie-tracking apps can contribute to disordered-eating behaviours in vulnerable users. To reduce this risk:

- The App is **not** intended for individuals with a current or past diagnosis of an eating disorder.
- The App will not display advice or coaching that promotes rapid weight loss in excess of medically recommended rates.
- If you ever feel that tracking is harming your relationship with food, please pause the App and seek help. International resources:
  - **United States:** National Eating Disorders Association — call **1-800-931-2237**, text **"NEDA" to 741741**, or visit [nationaleatingdisorders.org](https://www.nationaleatingdisorders.org/).
  - **United Kingdom:** Beat — call **0808 801 0677** or visit [beateatingdisorders.org.uk](https://www.beateatingdisorders.org.uk/).
  - **Australia:** Butterfly Foundation — call **1800 33 4673** or visit [butterfly.org.au](https://butterfly.org.au/).
  - **Canada:** NEDIC — call **1-866-633-4220** or visit [nedic.ca](https://nedic.ca/).

---

## 16. Changes to this Policy

We may update this Privacy Policy from time to time. When we do, we will:

- Change the "Last Updated" date at the top of the Policy,
- Post the updated Policy at `https://rexwithyou.com/privacy`,
- For material changes (for example, adding a new category of recipient, or changing how AI features process your data), display an in-App notice the next time you open the App, with at least 30 days' advance notice where required by law, and request renewed consent where required.

Continued use of the App after the updated Policy comes into effect indicates your acceptance of the updated terms, except where the law requires us to obtain fresh consent (in which case the App will request that consent before re-enabling the affected feature).

---

## 17. Contact

For privacy questions, complaints, or to exercise your rights:

- Email: **`support@rexwithyou.com`**
- Mailing address: `8 The Green, STE A, Dover, DE 19901`

The data controller responsible for your information is **`Geo Track Technologies Inc`**, located in **`United States`**.

---

## Appendix A — Apple App Store privacy disclosures

When you download RexWithYou from the App Store, Apple displays "App Privacy" labels summarising the categories of data collected. The following categories are declared:

- **Health & Fitness** (linked to you): weight, height, steps, fitness goals, dietary preferences — used for App Functionality and Product Personalisation.
- **User Content** (linked to you): chat messages, food photos, voice recordings — used for App Functionality (transmitted to OpenAI for processing as described in §5).
- **Identifiers** — *not collected*.
- **Usage Data** — *not collected*.
- **Diagnostics** (not linked to you): standard OS-level crash diagnostics — used for App Functionality.

RexWithYou does **not** collect data for Advertising, Third-Party Advertising, Tracking, or Marketing purposes.

---

## Appendix B — Google Play Data Safety disclosures

The Google Play Data Safety section for RexWithYou declares:

- **Personal info**: not collected.
- **Health and fitness**: collected and shared with the AI processor for AI features only, when you use them. Encrypted in transit via TLS. You can request deletion in-App.
- **App activity** (in-App search queries, e.g. recipe searches): sent to Spoonacular to provide recipe results.
- **Photos**: collected when you take a meal photo; shared with OpenAI for AI meal analysis only.
- **Audio**: collected when you record a voice meal entry; shared with OpenAI for transcription only.

We have completed Google Play's Health Apps Declaration form for the use of Apple HealthKit / Google Health Connect data and meet the criteria of the April 2026 Google Play health-content policy update.

---

*End of Policy.*
