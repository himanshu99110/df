"use client"

import { motion } from "framer-motion"
import {
    ChevronRight,
    Globe,
    Mail,
    MapPin,
    Phone,
    Sparkle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../components/contact-from"

export default function PrivacyPolicy() {

    return (
        <>
            {/* SECTION 1: Standardized Hero/Banner Section */}
            <div className="bg-[url('/images/bg4.avif')] bg-cover bg-no-repeat py-12">
                <div className="container">
                    <motion.div
                        className="grid grid-cols-1 gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        <div className="flex h-full flex-col items-center justify-center gap-4 md:gap-6 text-center">
                            <motion.span
                                className="flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] text-white ring-1 ring-[#fff3]"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                <Sparkle
                                    size={18}
                                    className="fill-orange-600 stroke-orange-600"
                                />
                                Digital Fueled IT Pvt Ltd
                            </motion.span>

                            <motion.h1
                                className="font-geist text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-none font-semibold text-white capitalize"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                Privacy{" "}
                                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                                    Policy
                                </span>
                            </motion.h1>

                            <motion.p
                                className="max-w-5xl md:text-lg font-medium text-white"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use our Service, and tells you about your privacy rights.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="pt-16 pb-14 lg:pt-24 lg:pb-20">
                <div className="mx-auto w-full max-w-6xl px-3.5 lg:px-0">
                    <article className="min-w-0">
                        <div>
                            <Prose>
                                <p className="md:text-lg">
                                    We use your personal data to provide and improve our Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                                </p>

                                <H2 id="interpretation">1. Interpretation and Definitions</H2>
                                <H3>Interpretation</H3>
                                <p>
                                    Words whose first letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in the singular or plural.
                                </p>

                                <H3>Definitions</H3>
                                <p>For the purposes of this Privacy Policy:</p>
                                <DefList
                                    items={[
                                        ["You", 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.'],
                                        ["Company", '(referred to as "the Company", "We", "Us" or "Our") refers to Digital Fueled IT Pvt Ltd., L2A-4 Mohan Garden, Delhi-59.'],
                                        ["Affiliate", 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities.'],
                                        ["Account", "means a unique account created for You to access our Service or parts of our Service."],
                                        ["Website", "refers to Digital Fueled, accessible from https://www.digitalfueled.com/"],
                                        ["Service", "refers to the Website."],
                                        ["Country", "refers to: Delhi, India."],
                                        ["Service Provider", "means any natural or legal person who processes data on behalf of the Company."],
                                        ["Third-party Social Media Service", "refers to any website or social network through which a User can log in or create an account to use the Service."],
                                        ["Personal Data", "is any information that relates to an identified or identifiable individual."],
                                        ["Cookies", "are small files placed on Your device by a website, containing details of Your browsing history."],
                                        ["Usage Data", "refers to data collected automatically, either generated by use of the Service or from the Service infrastructure."],
                                    ]}
                                />

                                <H2 id="collecting">2. Collecting and Using Your Personal Data</H2>
                                <H3>Personal Data</H3>
                                <p>While using our Service, we may ask you to provide us with certain personally identifiable information, which may include:</p>
                                <ul>
                                    <li>Email address</li>
                                    <li>First name and last name</li>
                                    <li>Phone number</li>
                                    <li>Address, State, Province, ZIP/Postal code, City</li>
                                    <li>Usage data</li>
                                </ul>

                                <H3>Usage Data</H3>
                                <p>
                                    Usage Data is automatically collected when you use the Service. It may include your device's IP address, browser type and version, the pages you visit, the time and date of your visit, time spent on pages, unique device identifiers and other diagnostic data. When accessing via a mobile device, we may additionally collect the device type, ID, mobile OS, mobile browser, and similar identifiers.
                                </p>

                                <H3>Tracking Technologies and Cookies</H3>
                                <p>
                                    We use Cookies and similar tracking technologies to track activity on our Service. Beacons, tags, and scripts are used to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse Cookies, but some features may not function.
                                </p>
                                <CookieCard
                                    title="Necessary / Essential Cookies"
                                    type="Session cookies"
                                    admin="Us"
                                    purpose="Essential to provide services and features, authenticate users and prevent fraudulent use of accounts."
                                />
                                <CookieCard
                                    title="Cookies Policy / Notice of Acceptance"
                                    type="Persistent cookies"
                                    admin="Us"
                                    purpose="Identify whether users have accepted the use of cookies on the Website."
                                />
                                <CookieCard
                                    title="Functional Cookies"
                                    type="Persistent cookies"
                                    admin="Us"
                                    purpose="Remember choices you make (login details, language) to provide a more personal experience."
                                />

                                <H2 id="use">3. Use of Your Personal Data</H2>
                                <p>The Company may use Personal Data for the following purposes:</p>
                                <ul>
                                    <li><b>To provide and maintain</b> our Service, including monitoring usage.</li>
                                    <li><b>To manage your Account</b> and give you access to registered-user features.</li>
                                    <li><b>For the performance of a contract</b> — purchase contracts and services you engage with us.</li>
                                    <li><b>To contact you</b> via email, phone, SMS or push notifications about functionality, products or contracted services.</li>
                                    <li><b>To provide news and offers</b> about goods and services similar to those you have already purchased or enquired about, unless you opt out.</li>
                                    <li><b>To manage your requests</b> and attend to your queries.</li>
                                </ul>
                                <p>We may share your personal information in the following situations:</p>
                                <ul>
                                    <li><b>With Service Providers</b> to monitor, analyze, advertise or process payments.</li>
                                    <li><b>For Business Transfers</b> in connection with any merger, sale of assets, financing or acquisition.</li>
                                    <li><b>With Affiliates</b>, who will be required to honor this Privacy Policy.</li>
                                    <li><b>With Business Partners</b> to offer certain products, services or promotions.</li>
                                    <li><b>With Other Users</b> when you share information in public areas or via Third-Party Social Media Services.</li>
                                </ul>

                                <H2 id="retention">4. Retention of Your Personal Data</H2>
                                <p>
                                    The Company will retain your Personal Data only as long as necessary for the purposes set out in this Privacy Policy, including to comply with legal obligations, resolve disputes and enforce our agreements. Usage Data is generally retained for a shorter period, except when used to strengthen security or improve functionality, or when required by law.
                                </p>

                                <H2 id="transfer">5. Transfer of Your Personal Data</H2>
                                <p>
                                    Your information, including Personal Data, is processed at the Company's operating offices and in any other place where the parties involved are located. This means it may be transferred to — and maintained on — computers located outside of your jurisdiction. Your consent to this Privacy Policy followed by your submission of information represents your agreement to that transfer. We take all steps reasonably necessary to ensure your data is treated securely.
                                </p>

                                <H2 id="disclosure">6. Disclosure of Your Personal Data</H2>
                                <H3>Business Transactions</H3>
                                <p>If the Company is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before it becomes subject to a different Privacy Policy.</p>
                                <H3>Law Enforcement</H3>
                                <p>The Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
                                <H3>Other Legal Requirements</H3>
                                <p>We may disclose your Personal Data in good faith when necessary to:</p>
                                <ul>
                                    <li>Comply with a legal obligation</li>
                                    <li>Protect and defend the rights or property of the Company</li>
                                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                    <li>Protect the personal safety of Users of the Service or the public</li>
                                    <li>Protect against legal liability</li>
                                </ul>

                                <H2 id="security">7. Security of Your Personal Data</H2>
                                <p>
                                    The security of your Personal Data is a priority, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                                </p>

                                <H2 id="children">8. Children's Privacy</H2>
                                <p>
                                    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and are aware that your child has provided us with Personal Data, please contact us. If we need to rely on consent as a legal basis for processing, we may require your parent's consent.
                                </p>

                                <H2 id="links">9. Links to Other Websites</H2>
                                <p>
                                    Our Service may contain links to other websites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content or practices of any third-party sites.
                                </p>

                                <H2 id="changes">10. Changes to This Privacy Policy</H2>
                                <p>
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                                </p>

                                <H2 id="contact">11. Contact Us</H2>
                                <p>If you have questions about this Privacy Policy, you can contact us:</p>
                            </Prose>

                            <div id="contact-cards" className="mt-6 grid gap-3 sm:grid-cols-2">
                                <ContactCard icon={Mail} label="Email" value="info@digitalfueled.com" href="mailto:info@digitalfueled.com" />
                                <ContactCard icon={Globe} label="Website" value="digitalfueled.com" href="https://www.digitalfueled.com/" />
                                <ContactCard icon={Phone} label="Phone" value="+91-7838152753" href="tel:+917838152753" />
                                <ContactCard icon={MapPin} label="Address" value="L2A-4 Mohan Garden, Delhi-59" />
                            </div>
                        </div>
                    </article>
                </div>
            </section>


            <ContactForm className="bg-gray-100" />
        </>
    )
}

function Prose({ children }: { children: React.ReactNode }) {
    return (
        <div className="prose-custom max-w-none space-y-4 text-[15px] leading-relaxed text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:leading-relaxed [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_b]:font-semibold [&_b]:text-gray-900">
            {children}
        </div>
    );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id}>
            <span className="text-slate-900">{children}</span>
        </h2>
    );
}

function H3({ children }: { children: React.ReactNode }) {
    return <h3>{children}</h3>;
}

function DefList({ items }: { items: [string, string][] }) {
    return (
        <dl className="my-4 gap-3 grid lg:grid-cols-2">
            {items.map(([term, def]) => (
                <div key={term} className="rounded-lg ring ring-gray-200 bg-gray-50 p-4">
                    <dt className="text-sm font-semibold text-gray-900">{term}</dt>
                    <dd className="mt-1 text-sm text-gray-700">{def}</dd>
                </div>
            ))}
        </dl>
    );
}

function CookieCard({ title, type, admin, purpose }: { title: string; type: string; admin: string; purpose: string }) {
    return (
        <div className="my-4 overflow-hidden rounded-xl ring ring-gray-300 bg-white">
            <div className="custom-border-b-gray bg-gray-50 px-5 py-3">
                <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-2 text-sm">
                <span className="font-medium text-gray-800">Type:-</span><span className="text-gray-900">{type}</span>
                <span className="font-medium text-gray-800">Administered by:-</span><span className="text-gray-900">{admin}</span>
                <span className="font-medium text-gray-800">Purpose:-</span><span className="text-gray-900">{purpose}</span>
            </div>
        </div>
    );
}

function ContactCard({
    icon: Icon,
    label,
    value,
    href,
}: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    href?: string;
}) {
    const Body = (
        <div className="group flex items-center gap-4 rounded-xl ring ring-gray-200 bg-white p-4 transition-all hover:ring-blue-400 hover:shadow-md">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-accent">
                <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
                <div className="truncate text-sm font-medium text-gray-900">{value}</div>
            </div>
        </div>
    );
    return href ? (
        <a href={href} className="block">{Body}</a>
    ) : Body;
}