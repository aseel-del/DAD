/* 
 * Comprehensive Trilingual Localization Dictionary (English, Arabic, French)
 * Arabic typography uses 'Cairo'
 * Covers Full Navigation Mega Menu, Homepage, Portfolio, 404, and Footer
 * Dar Aldawa (DAD Group)
 */

const I18N_DATA = {
  en: {
    // Navigation & Mega Menu
    nav_home: "Home",
    nav_about: "About Us",
    nav_leadership: "Leadership",
    nav_portfolio: "Portfolio",
    nav_capabilities: "Capabilities",
    nav_reach: "Presence",
    nav_investors: "Investors",
    nav_media: "Media",
    nav_careers: "Careers",
    nav_contact: "Contact Us",
    btn_pharmacovigilance: "Pharmacovigilance",

    // Mega Menu About Us
    mm_about_overview: "Company Overview",
    mm_about_history: "50-Year Milestones",
    mm_about_chairman: "Chairman's Message",
    mm_about_board: "Board of Directors",
    mm_about_ceo: "CEO Message",
    mm_about_exec: "Executive Management",
    mm_about_mvv: "Mission, Vision & Values",

    // Mega Menu Portfolio (11 Therapeutic Categories)
    mm_cat_anti: "Anti-Infectives",
    mm_cat_cardio: "Cardiovascular & Diabetes",
    mm_cat_cns: "Central Nervous System (CNS)",
    mm_cat_gastro: "Gastrointestinal",
    mm_cat_resp: "Respiratory",
    mm_cat_analgesic: "Analgesic & Musculoskeletal",
    mm_cat_uro: "Urology",
    mm_cat_derm: "Dermatology",
    mm_cat_opht: "Ophthalmology",
    mm_cat_gyn: "Gynecology & Women's Health",
    mm_cat_onc: "Oncology",
    mm_cat_view_all: "View Full 200+ Products Catalog →",

    // Mega Menu Capabilities
    mm_cap_plants: "7 Manufacturing Plants",
    mm_cap_rnd: "Research & Development Center",
    mm_cap_qa: "Quality Assurance & CGMP",
    mm_cap_reg: "Regulatory Affairs & Dossiers",

    // Mega Menu Presence
    mm_reach_jordan: "Jordan HQ & 4 Plants",
    mm_reach_algeria: "Algeria Hub & 3 Plants",
    mm_reach_mena: "MENA Commercial Offices",
    mm_reach_global: "40+ Export Markets",

    // Mega Menu Investors
    mm_inv_reports: "Financial Statements & Annual Reports",
    mm_inv_assembly: "General Assembly Disclosures",
    mm_inv_board: "Board Resolutions",
    mm_inv_gov: "Corporate Governance",

    // Mega Menu Media & Careers
    mm_media_press: "Press Releases & News",
    mm_media_announcements: "Corporate Announcements",
    mm_careers_why: "Why Join Dar Aldawa",
    mm_careers_openings: "Current Job Openings",
    mm_careers_life: "Life at Dar Aldawa",

    // 404 Error Page
    err_title: "Page Under Development",
    err_desc: "This section is currently being updated as part of Dar Aldawa's 50th Anniversary portal launch. The <strong>Homepage</strong> and <strong>Product Portfolio</strong> are fully active.",
    err_btn_home: "Return to Homepage",
    err_btn_portfolio: "Explore Product Catalog",

    // Hero
    hero_badge: "CELEBRATING 50 YEARS OF PHARMACEUTICAL EXCELLENCE",
    hero_title: "Advancing Health.<br>Delivering Trust.",
    hero_sub: "For five decades, Dar Aldawa has been a pioneering force in the MENA pharmaceutical industry, producing high-quality, trusted medicine designed to improve human life across 40+ global markets.",
    hero_cta_portfolio: "Explore Our Portfolio",
    hero_cta_about: "About Dar Aldawa",

    // Metrics
    metric_1_num: "50+",
    metric_1_label: "Years of Trust",
    metric_2_num: "7",
    metric_2_label: "Production Plants",
    metric_3_num: "200+",
    metric_3_label: "Premium Products",
    metric_4_num: "40+",
    metric_4_label: "Global Markets",

    // About Section
    about_label: "OUR HERITAGE",
    about_heading: "Providing Healthcare with Uncompromising Quality",
    about_p1: "Founded in Jordan in 1975, Dar Aldawa has grown from a regional pioneer to a trusted global pharmaceutical manufacturer. Guided by our corporate tagline \"Trusted Quality\", we commit our extensive scientific capabilities to the development and delivery of world-class therapeutic solutions.",
    about_quote: "\"Our mission isn't just about manufacturing medicine; it is about creating a healthier world through accessible science.\"",
    about_author: "— Board of Directors, Dar Aldawa",
    about_link: "Learn more about our 50-year journey",

    // Foundations
    foundations_label: "FOUNDATIONS",
    foundations_heading: "Purpose-Driven Science",
    mission_title: "Our Mission",
    mission_text: "Dedicated to serving patients, healthcare professionals and payers worldwide by consistently manufacturing and delivering top-tier therapeutic treatments that improve daily life.",
    vision_title: "Our Vision",
    vision_text: "To become the foremost pharmaceutical partner improving health outcomes and well-being, recognized globally for innovation, robust manufacturing, and trusted clinical reliability.",
    values_title: "Our Values",
    values_text: "Quality, Accountability, Transparency, Ethics, Integrity. These pillars form the framework of every scientific and corporate decision we make across global operations.",

    // Capabilities
    cap_label: "OPERATIONAL POWER",
    cap_heading: "Pioneering Capabilities and Quality Assurance",
    cap_desc: "Operating seven state-of-the-art facilities compliant with absolute global quality criteria, we guarantee a secure supply chain from raw synthesis to final clinical distribution.",
    cap1_badge: "7 High-Tech Plants",
    cap1_title: "Manufacturing Excellence",
    cap1_desc: "Formulations engineered within cleanrooms operating strict HEPA filtration, automated filling lines, and real-time environment monitoring.",
    cap2_badge: "MENA Pioneer Center",
    cap2_title: "R&D Innovation",
    cap2_desc: "Leveraging robust chemical formulation and stability testing to craft next-generation bioequivalent generic alternatives.",
    cap3_badge: "100% CGMP Compliance",
    cap3_title: "Quality Assurance",
    cap3_desc: "Rigorous quality controls monitoring every synthesis, dissolution, and batch release parameter to ensure patient safety.",
    cap4_badge: "Global Certifications",
    cap4_title: "Regulatory Compliance",
    cap4_desc: "Aligning with WHO guidelines, regional health commissions, and EMEA quality benchmarks to permit rapid international distribution.",
    cap_specs_link: "Technical Specifications",

    // Reach & Globe
    reach_label: "REACH",
    reach_heading: "A Trusted Network Spanning 40+ Markets",
    reach_desc: "Headquartered in Amman, Jordan, our manufacturing networks and offices stretch throughout North Africa, the Levant, and international territories.",
    globe_drag_hint: "Drag to rotate the 3D globe",
    globe_legend_hq: "HQ / Office",
    globe_legend_market: "Market Presence",
    globe_legend_count: "40+ Markets",

    // Portfolio
    port_label: "PRODUCT PORTFOLIO",
    port_heading: "Diversified Therapeutic Solutions",
    port_desc: "Encompassing hundreds of highly bioequivalent treatments spanning critical physiological sectors.",
    port_card1_title: "Cardiovascular",
    port_card1_desc: "Advancing treatment paradigms for coronary health, arterial regulation, and lipid balancing therapies.",
    port_card1_tag: "Leading MENA Brand Prescriptions",
    port_card2_title: "Anti-infectives",
    port_card2_desc: "Highly potent anti-bacterial and antiviral regimens formulated under rigorous clinical containment.",
    port_card2_tag: "Pristine Stability Parameters",
    port_card3_title: "Gastroenterology",
    port_card3_desc: "Reliable, fast-acting treatments addressing digestive ailments, mucosal lining repair, and reflux disorders.",
    port_card3_tag: "Extensively Prescribed Globally",
    port_card4_title: "CNS (Neurology)",
    port_card4_desc: "Pioneering neurological therapeutic releases developed for stable neurotransmitter support.",
    port_card4_tag: "Precision Dosed Solid Oral",
    port_cta_all: "View Full Therapeutic Catalog",

    // News
    news_label: "MEDIA CENTER",
    news_heading: "Corporate & Industrial News",
    news_view_all: "View All Corporate Announcements",
    news1_tag: "Financial Release",
    news1_date: "February 24, 2026",
    news1_title: "Dar Aldawa Board Recommends Dividend Distributions to Shareholders",
    news1_desc: "Following exceptional growth in regional markets during fiscal year 2025, the board outlines dividend structures.",
    news2_tag: "Operational Milestone",
    news2_date: "January 15, 2026",
    news2_title: "Announcement of the General Assembly Meeting Date for 2026",
    news2_desc: "Shareholders are invited to register votes online as the company finalizes plans for its 50th-anniversary strategic shifts.",
    news3_tag: "Regional Expansion",
    news3_date: "December 08, 2025",
    news3_title: "Dar Aldawa Acquires New Industrial Licenses for Production Expansion",
    news3_desc: "Securing key regional regulatory approvals in Saudi Arabia to launch a dedicated solid oral therapeutic unit in late 2026.",
    news_read_more: "Read Full Announcement",

    // Careers
    careers_tag: "JOIN THE LEADER IN PHARMACEUTICAL CARE",
    careers_heading: "Shape the Future of Healthcare",
    careers_desc: "At Dar Aldawa, our family of over 1,000+ passionate employees spans laboratories, clean production floors, and regulatory boards worldwide. Join a culture committed to ongoing scientific growth and patient trust.",
    careers_cta: "Explore Professional Careers",

    // Investors
    investors_label: "INVESTOR RELATIONS",
    investors_heading: "Fostering Long-Term Shareholder Value",
    investors_desc: "Backed by high-capacity operations, we maintain transparent financial reporting, secure asset management, and a legacy of resilient financial positions as leaders in MENA generics.",
    investor_link1: "Annual Report & Financial Disclosures 2025",
    investor_link2: "Disclosures of Major Assembly Meetings",
    investor_link3: "Investor Fact Sheet & Portfolio Performance",
    investor_cta: "Access Investor Center",
    investor_card_title: "Key Financial Indicators",
    investor_stat1_label: "Consolidated Revenue (FY 2025)",
    investor_stat1_val: "Resilient Growth Trend",
    investor_stat2_label: "Active Regional Market Operations",
    investor_stat2_val: "40+ Countries",
    investor_stat3_label: "Ongoing Plant Expansion Pipelines",
    investor_stat3_val: "2 Major Sites in Progress",

    // Footer
    footer_desc: "Celebrating 50 years of Trusted Quality. Leading regional medicine manufacturing networks to safeguard patient well-being.",
    footer_col_company: "Company",
    footer_link_about: "About Our Firm",
    footer_link_board: "Our Board of Directors",
    footer_link_cap: "Capabilities",
    footer_link_integrity: "Corporate Integrity",
    footer_link_careers: "Careers",
    footer_col_therapeutics: "Therapeutics",
    footer_link_cardio: "Cardiovascular Care",
    footer_link_anti: "Potent Anti-Infectives",
    footer_link_gastro: "Gastroenterology",
    footer_link_cns: "Central Nervous System",
    footer_col_contacts: "Corporate Contacts",
    footer_hq_title: "Jordan Headquarters",
    footer_hq_addr: "Amman, Jordan | P.O. Box 930185",
    footer_algeria_title: "Algeria Regional Office",
    footer_inquiries_title: "Direct Inquiries",
    footer_rights: "© 2026 Dar Al Dawa. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_regulatory: "Regulatory Statement"
  },

  ar: {
    // Navigation & Mega Menu
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_leadership: "القيادة",
    nav_portfolio: "المنتجات",
    nav_capabilities: "القدرات الصناعية",
    nav_reach: "التواجد العالمي",
    nav_investors: "المستثمرون",
    nav_media: "الإعلام",
    nav_careers: "الوظائف",
    nav_contact: "اتصل بنا",
    btn_pharmacovigilance: "اليقظة الدوائية",

    // Mega Menu About Us
    mm_about_overview: "نبذة عن الشركة",
    mm_about_history: "مسيرة 50 عاماً من الريادة",
    mm_about_chairman: "رسالة رئيس مجلس الإدارة",
    mm_about_board: "مجلس الإدارة",
    mm_about_ceo: "رسالة الرئيس التنفيذي",
    mm_about_exec: "الإدارة التنفيذية",
    mm_about_mvv: "الرسالة والرؤية والقيم",

    // Mega Menu Portfolio (11 Therapeutic Categories)
    mm_cat_anti: "مضادات العدوى والالتهابات",
    mm_cat_cardio: "أمراض القلب والشرايين والسكري",
    mm_cat_cns: "الجهاز العصبي المركزي (CNS)",
    mm_cat_gastro: "أمراض الجهاز الهضمي",
    mm_cat_resp: "أمراض الجهاز التنفسي",
    mm_cat_analgesic: "المسكنات والجهاز الهيكلي",
    mm_cat_uro: "أمراض المسالك البولية",
    mm_cat_derm: "الأمراض الجلدية",
    mm_cat_opht: "طب وجراحة العيون",
    mm_cat_gyn: "صحة المرأة وأمراض النساء",
    mm_cat_onc: "علاجات الأورام المتخصصة",
    mm_cat_view_all: "عرض الكتالوج العلاجي الشامل (200+ منتج) ←",

    // Mega Menu Capabilities
    mm_cap_plants: "7 مصانع إنتاجية متطورة",
    mm_cap_rnd: "مركز البحث والتطوير (R&D)",
    mm_cap_qa: "ضمان الجودة والتصنيع الجيد (CGMP)",
    mm_cap_reg: "الشؤون التنظيمية والتسجيل الدولي",

    // Mega Menu Presence
    mm_reach_jordan: "المقر الرئيسي و4 مصانع في الأردن",
    mm_reach_algeria: "مجمع الإنتاج و3 مصانع في الجزائر",
    mm_reach_mena: "المكاتب التجارية الإقليمية",
    mm_reach_global: "أكثر من 40 سوق تصدير عالمي",

    // Mega Menu Investors
    mm_inv_reports: "البيانات المالية والتقارير السنوية",
    mm_inv_assembly: "إفصاحات وقرارات الهيئة العامة",
    mm_inv_board: "قرارات وتوصيات مجلس الإدارة",
    mm_inv_gov: "الحوكمة المؤسسية وحقوق المساهمين",

    // Mega Menu Media & Careers
    mm_media_press: "البيانات الصحفية والأخبار",
    mm_media_announcements: "الإعلانات المؤسسية",
    mm_careers_why: "لماذا تختار دار الدواء",
    mm_careers_openings: "فرص العمل المتاحة حالياً",
    mm_careers_life: "بيئة العمل والتطوير المهني",

    // 404 Error Page
    err_title: "الصفحة قيد التطوير والتحديث",
    err_desc: "يتم تحديث هذا القسم حالياً ضمن إطلاق بوابة اليوبيل الذهبي لدار الدواء. <strong>الصفحة الرئيسية</strong> و<strong>الكتالوج الدوائي</strong> متاحان بالكامل.",
    err_btn_home: "العودة إلى الصفحة الرئيسية",
    err_btn_portfolio: "استكشف المنتجات الدوائية",

    // Hero
    hero_badge: "نحتفل بخمسين عاماً من التميز الصيدلاني (1975 - 2025)",
    hero_title: "نطور الرعاية الصحية.<br>نرسخ الثقة.",
    hero_sub: "على مدى خمسة عقود، تواصل دار الدواء ريادتها في الصناعات الدوائية بمنطقة الشرق الأوسط وشمال أفريقيا، لإنتاج أدوية عالية الجودة وموثوقة لتحسين صحة الإنسان في أكثر من 40 سوقاً عالمياً.",
    hero_cta_portfolio: "استكشف محفظتنا الدوائية",
    hero_cta_about: "عن شركة دار الدواء",

    // Metrics
    metric_1_num: "+50",
    metric_1_label: "عاماً من الثقة",
    metric_2_num: "7",
    metric_2_label: "مصانع إنتاجية",
    metric_3_num: "+200",
    metric_3_label: "مستحضر دوائي متميز",
    metric_4_num: "+40",
    metric_4_label: "سوق عالمي للتصدير",

    // About Section
    about_label: "إرثنا العريق",
    about_heading: "تقديم الرعاية الصحية بجودة لا مساومة عليها",
    about_p1: "تأسست دار الدواء في الأردن عام 1975، وتطورت من شركة رائدة محلياً إلى مصنع دوائي عالمي موثوق. انطلاقاً من شعارنا المؤسسي \"جودة موثوقة\"، نسخر إمكاناتنا العلمية المتقدمة لتطوير وتوفير أرقى الحلول العلاجية.",
    about_quote: "\"رسالتنا لا تقتصر على تصنيع الدواء فحسب، بل تتجاوز ذلك نحو بناء عالم أكثر صحة من خلال علم متاح وموثوق.\"",
    about_author: "— مجلس الإدارة، دار الدواء",
    about_link: "تعرف على مسيرة 50 عاماً من النجاح",

    // Foundations
    foundations_label: "ركائزنا الراسخة",
    foundations_heading: "علم هادف ومسؤولية مستدامة",
    mission_title: "رسالتنا",
    mission_text: "الالتزام بخدمة المرضى ومقدمي الرعاية الصحية عالمياً من خلال تصنيع وتوفير علاجات دوائية عالية الجودة تحسن حياة الإنسان اليومية.",
    vision_title: "رؤيتنا",
    vision_text: "أن نكون الشريك الدوائي الرائد في تحسين النتائج الصحية، والاعتراف بنا عالمياً بفضل الابتكار، والقدرات التصنيعية المتقدمة، والموثوقية السريرية.",
    values_title: "قيمنا الجوهرية",
    values_text: "الجودة، المسؤولية، الشفافية، الأخلاق، والنزاهة. تشكل هذه الركائز الإطار الأساسي لكل قرار علمي وتشغيلي نتخذه في جميع عملياتنا.",

    // Capabilities
    cap_label: "القوة التشغيلية",
    cap_heading: "قدرات رائدة وضمان جودة متكامل",
    cap_desc: "عبر تشغيل سبعة مصانع حديثة متوافقة مع معايير الجودة العالمية الصارمة، نضمن استدامة سلسلة التوريد من التركيب الأولي حتى التوزيع السريري.",
    cap1_badge: "7 مصانع متقدمة",
    cap1_title: "التميز التصنيعي",
    cap1_desc: "تركيبات دوائية تُصنع داخل غرف معقمة تطبق ترشيح HEPA الصارم، مع خطوط تعبئة آلية ورصد بيئي فوري.",
    cap2_badge: "مركز ريادي في المنطقة",
    cap2_title: "البحث والتطوير (R&D)",
    cap2_desc: "تسخير خبرات التركيبات الكيميائية واختبارات الثباتية لابتكار بدائل جنيسة مكافئة حيوياً من الجيل القادم.",
    cap3_badge: "امتثال تام للمعايير الدولية",
    cap3_title: "ضمان ومراقبة الجودة",
    cap3_desc: "إجراءات رقابة صارمة تتابع كل معايير التخليق والذوبان والإفراج الدفعي لضمان سلامة المرضى التامة.",
    cap4_badge: "اعتمادات وتسجيل دولي",
    cap4_title: "الشؤون التنظيمية والامتثال",
    cap4_desc: "الالتزام بتوجيهات منظمة الصحة العالمية (WHO) والهيئات الصحية الإقليمية والأوروبية لتمكين التوزيع الدولي السريع.",
    cap_specs_link: "المواصفات الفنية",

    // Reach & Globe
    reach_label: "التواجد والانتشار",
    reach_heading: "شبكة موثوقة تمتد عبر أكثر من 40 دولة",
    reach_desc: "انطلاقاً من مقرنا الرئيسي في عمّان - الأردن، تمتد مصانعنا ومكاتبنا الإقليمية عبر شمال أفريقيا والمشرق العربي والأسواق الدولية.",
    globe_drag_hint: "اسحب لتدوير المجسم ثلاثي الأبعاد",
    globe_legend_hq: "المقر الرئيسي والمصانع",
    globe_legend_market: "الأسواق النشطة",
    globe_legend_count: "+40 دولة",

    // Portfolio
    port_label: "المحفظة العلاجية",
    port_heading: "حلول علاجية متنوعة وشاملة",
    port_desc: "تضم مئات العلاجات المكافئة حيوياً التي تغطي القطاعات الطبية والعلاجية الحيوية.",
    port_card1_title: "أمراض القلب والأوعية الدموية",
    port_card1_desc: "تطوير علاجات صحة الشرايين وتنظيم الضغط الشرياني وإدارة مستويات الدهون في الدم.",
    port_card1_tag: "العلامات الأكثر وصفاً في المنطقة",
    port_card2_title: "مضادات العدوى",
    port_card2_desc: "علاجات مضادة للبكتيريا والفيروسات عالية الفعالية تُصنع تحت رقابة سريرية محكمة.",
    port_card2_tag: "معايير ثباتية فائقة الدقة",
    port_card3_title: "الجهاز الهضمي",
    port_card3_desc: "أدوية موثوقة وسريعة المفعول لعلاج اضطرابات الجهاز الهضمي وترميم بطانة المعدة وارتجاع المريء.",
    port_card3_tag: "موثوقة وموصوفة عالمياً",
    port_card4_title: "الجهاز العصبي المركزي (CNS)",
    port_card4_desc: "إطلاقات علاجية عصبية رائدة مطورة لدعم توازن النواقل العصبية وتخفيف الآلام العصبية.",
    port_card4_tag: "جرعات صلبة فموية دقيقة",
    port_cta_all: "عرض الكتالوج العلاجي الكامل",

    // News
    news_label: "المركز الإعلامي",
    news_heading: "أحدث الأخبار والإعلانات المؤسسية",
    news_view_all: "عرض كافة البيانات الصحفية",
    news1_tag: "إفصاح مالي",
    news1_date: "24 فبراير 2026",
    news1_title: "مجلس إدارة دار الدواء يوصي بتوزيع أرباح نقدية على المساهمين",
    news1_desc: "في أعقاب النمو الاستثنائي في الأسواق الإقليمية خلال السنة المالية 2025، يحدد المجلس هيكل توزيع الأرباح.",
    news2_tag: "محطة تشغيلية",
    news2_date: "15 يناير 2026",
    news2_title: "الإعلان عن موعد اجتماع الهيئة العامة لعام 2026",
    news2_desc: "دعوة المساهمين لتسجيل التصويت إلكترونياً مع استكمال الشركة لخطط التحول الاستراتيجي بمناسبة يوبيلها الذهبي.",
    news3_tag: "توسع إقليمي",
    news3_date: "08 ديسمبر 2025",
    news3_title: "دار الدواء تحصل على تراخيص صناعية جديدة لتوسعة الإنتاج",
    news3_desc: "الحصول على موافقات تنظيمية رئيسية في المملكة العربية السعودية لإطلاق وحدة علاجية متخصصة أواخر عام 2026.",
    news_read_more: "قراءة البيان الصحفي بالكامل",

    // Careers
    careers_tag: "انضم إلى رواد صناعة الدواء",
    careers_heading: "اصنع مستقبل الرعاية الصحية معنا",
    careers_desc: "في دار الدواء، تضم عائلتنا أكثر من 1,000 موظف وموظفة من العلماء والخبراء عبر المختبرات وخطوط الإنتاج في مختلف الدول. انضم لبيئة تعزز التطور المستمر والثقة الإنسانية.",
    careers_cta: "استكشف الفرص الوظيفية",

    // Investors
    investors_label: "علاقات المستثمرين",
    investors_heading: "تعظيم القيمة المستدامة للمساهمين",
    investors_desc: "مدعومين بطاقات إنتاجية عالية، نلتزم بأعلى معايير الإفصاح المالي الشفاف، وإدارة الأصول الحصيفة، وترسيخ موقعنا الريادي في صناعة الدواء.",
    investor_link1: "التقرير السنوي والإفصاحات المالية لعام 2025",
    investor_link2: "إفصاحات وقرارات اجتماعات الهيئة العامة",
    investor_link3: "ورقة حقائق المستثمرين وأداء المحفظة الاستثمارية",
    investor_cta: "دخول بوابة المستثمرين",
    investor_card_title: "المؤشرات المالية الرئيسية",
    investor_stat1_label: "الإيرادات المجمعة (السنة المالية 2025)",
    investor_stat1_val: "مسار نمو قوي ومرن",
    investor_stat2_label: "العمليات في الأسواق الإقليمية النشطة",
    investor_stat2_val: "+40 دولة",
    investor_stat3_label: "خطط التوسعة الصناعية قيد التنفيذ",
    investor_stat3_val: "موقعان صناعيان رئيسيان قيد الإنشاء",

    // Footer
    footer_desc: "نحتفل بخمسين عاماً من الجودة الموثوقة. نقود شبكات التصنيع الدوائي الإقليمية للارتقاء بصحة المرضى وسلامتهم.",
    footer_col_company: "الشركة",
    footer_link_about: "عن شركتنا",
    footer_link_board: "مجلس الإدارة",
    footer_link_cap: "القدرات الصناعية",
    footer_link_integrity: "النزاهة المؤسسية",
    footer_link_careers: "الوظائف",
    footer_col_therapeutics: "المجموعات العلاجية",
    footer_link_cardio: "أمراض القلب والأوعية الدموية",
    footer_link_anti: "مضادات العدوى والالتهابات",
    footer_link_gastro: "أمراض الجهاز الهضمي",
    footer_link_cns: "الجهاز العصبي المركزي",
    footer_col_contacts: "العناوين والاتصال",
    footer_hq_title: "المقر الرئيسي في الأردن",
    footer_hq_addr: "عمّان، الأردن | ص.ب 930185",
    footer_algeria_title: "المكتب الإقليمي في الجزائر",
    footer_inquiries_title: "الاستفسارات المباشرة",
    footer_rights: "© 2026 دار الدواء. جميع الحقوق محفوظة.",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الاستخدام",
    footer_regulatory: "البيان التنظيمي"
  },

  fr: {
    // Navigation & Mega Menu
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_leadership: "Direction",
    nav_portfolio: "Portefeuille",
    nav_capabilities: "Capacités",
    nav_reach: "Présence",
    nav_investors: "Investisseurs",
    nav_media: "Médias",
    nav_careers: "Carrières",
    nav_contact: "Contact",
    btn_pharmacovigilance: "Pharmacovigilance",

    // Mega Menu About Us
    mm_about_overview: "Présentation de la Société",
    mm_about_history: "50 Ans d'Histoire",
    mm_about_chairman: "Message du Président",
    mm_about_board: "Conseil d'Administration",
    mm_about_ceo: "Message du Directeur Général",
    mm_about_exec: "Direction Exécutive",
    mm_about_mvv: "Mission, Vision & Valeurs",

    // Mega Menu Portfolio
    mm_cat_anti: "Anti-infectieux",
    mm_cat_cardio: "Cardiovasculaire & Diabète",
    mm_cat_cns: "Système Nerveux Central",
    mm_cat_gastro: "Gastro-entérologie",
    mm_cat_resp: "Respiratoire",
    mm_cat_analgesic: "Analgésiques & Musculo-squelettique",
    mm_cat_uro: "Urologie",
    mm_cat_derm: "Dermatologie",
    mm_cat_opht: "Ophtalmologie",
    mm_cat_gyn: "Gynécologie & Santé Féminine",
    mm_cat_onc: "Oncologie",
    mm_cat_view_all: "Voir le catalogue complet (200+ produits) →",

    // Mega Menu Capabilities
    mm_cap_plants: "7 Sites de Production",
    mm_cap_rnd: "Centre de Recherche & Développement",
    mm_cap_qa: "Assurance Qualité & CGMP",
    mm_cap_reg: "Affaires Réglementaires",

    // Mega Menu Presence
    mm_reach_jordan: "Siège et 4 Usines en Jordanie",
    mm_reach_algeria: "Pôle et 3 Usines en Algérie",
    mm_reach_mena: "Bureaux Régionaux MENA",
    mm_reach_global: "Plus de 40 Marchés Mondiaux",

    // Mega Menu Investors
    mm_inv_reports: "Rapports Financiers & Annuels",
    mm_inv_assembly: "Assemblées Générales",
    mm_inv_board: "Résolutions du Conseil",
    mm_inv_gov: "Gouvernance d'Entreprise",

    // Mega Menu Media & Careers
    mm_media_press: "Communiqués de Presse",
    mm_media_announcements: "Annonces d'Entreprise",
    mm_careers_why: "Pourquoi Nous Rejoindre",
    mm_careers_openings: "Offres d'Emploi",
    mm_careers_life: "La Vie chez Dar Aldawa",

    // 404 Error Page
    err_title: "Page en cours de développement",
    err_desc: "Cette section est en cours de mise à jour pour le lancement du portail du 50e anniversaire de Dar Aldawa. La <strong>page d'accueil</strong> et le <strong>portefeuille de produits</strong> sont pleinement actifs.",
    err_btn_home: "Retour à l'Accueil",
    err_btn_portfolio: "Explorer le Catalogue",

    // Hero
    hero_badge: "50 ANS D'EXCELLENCE PHARMACEUTIQUE (1975 - 2025)",
    hero_title: "Faire progresser la santé.<br>Inspirer la confiance.",
    hero_sub: "Depuis cinq décennies, Dar Aldawa est un pionnier de l'industrie pharmaceutique MENA, fabriquant des médicaments fiables et de premier ordre dans plus de 40 marchés mondiaux.",
    hero_cta_portfolio: "Découvrir notre portefeuille",
    hero_cta_about: "À propos de Dar Aldawa",

    // Metrics
    metric_1_num: "50+",
    metric_1_label: "Années de Confiance",
    metric_2_num: "7",
    metric_2_label: "Sites de Production",
    metric_3_num: "200+",
    metric_3_label: "Formulations Premium",
    metric_4_num: "40+",
    metric_4_label: "Marchés Mondiaux",

    // About Section
    about_label: "NOTRE HÉRITAGE",
    about_heading: "Des soins de santé d'une qualité sans compromis",
    about_p1: "Fondée en 1975 en Jordanie, Dar Aldawa est devenue un fabricant pharmaceutique mondial reconnu. Guidés par notre devise \"Trusted Quality\", nous mettons nos capacités scientifiques au service du bien-être des patients.",
    about_quote: "\"Notre mission ne consiste pas seulement à fabriquer des médicaments, mais à bâtir un monde plus sain grâce à une science accessible.\"",
    about_author: "— Conseil d'Administration, Dar Aldawa",
    about_link: "Découvrir notre parcours de 50 ans",

    // Foundations
    foundations_label: "FONDEMENTS",
    foundations_heading: "Une Science Guidée par nos Valeurs",
    mission_title: "Notre Mission",
    mission_text: "Servir les patients et les professionnels de santé dans le monde entier en fabriquant des traitements thérapeutiques de premier ordre qui améliorent le quotidien.",
    vision_title: "Notre Vision",
    vision_text: "Être le partenaire pharmaceutique privilégié pour l'amélioration des soins de santé, reconnu mondialement pour son innovation et sa fiabilité clinique.",
    values_title: "Nos Valeurs",
    values_text: "Qualité, Responsabilité, Transparence, Éthique et Intégrité régissent toutes nos décisions opérationnelles et scientifiques.",

    // Capabilities
    cap_label: "PUISSANCE OPÉRATIONNELLE",
    cap_heading: "Capacités Pionnières et Assurance Qualité",
    cap_desc: "Avec sept usines conformes aux standards internationaux, nous assurons une chaîne logistique sécurisée de la synthèse au produit fini.",
    cap1_badge: "7 Sites de Production",
    cap1_title: "Excellence Industrielle",
    cap1_desc: "Formulations développées en salles blanches équipées de filtres HEPA stricts et de lignes de conditionnement automatisées.",
    cap2_badge: "Centre Pionnier MENA",
    cap2_title: "Innovation R&D",
    cap2_desc: "Formulation galénique avancée et études de bioéquivalence pour concevoir des alternatives génériques de nouvelle génération.",
    cap3_badge: "Conformité 100% CGMP",
    cap3_title: "Assurance Qualité",
    cap3_desc: "Contrôles qualité rigoureux surveillant chaque étape de synthèse et de libération des lots pour garantir la sécurité du patient.",
    cap4_badge: "Certifications Globales",
    cap4_title: "Conformité Réglementaire",
    cap4_desc: "Conformité aux directives de l'OMS et des agences de santé internationales pour autoriser une distribution mondiale rapide.",
    cap_specs_link: "Spécifications Techniques",

    // Reach & Globe
    reach_label: "RAYONNEMENT",
    reach_heading: "Un Réseau de Confiance dans 40+ Marchés",
    reach_desc: "Depuis notre siège à Amman en Jordanie, nos réseaux de production et bureaux s'étendent en Afrique du Nord et à l'international.",
    globe_drag_hint: "Glissez pour faire pivoter le globe 3D",
    globe_legend_hq: "Siège / Usines",
    globe_legend_market: "Présence Commerciale",
    globe_legend_count: "40+ Marchés",

    // Portfolio
    port_label: "PORTEFEUILLE THÉRAPEUTIQUE",
    port_heading: "Solutions Thérapeutiques Diversifiées",
    port_desc: "Comprenant des centaines de traitements hautement bioéquivalents couvrant des domaines physiologiques essentiels.",
    port_card1_title: "Cardiovasculaire",
    port_card1_desc: "Avancées thérapeutiques pour la santé coronarienne, la régulation artérielle et l'équilibre lipidique.",
    port_card1_tag: "Prescriptions Leaders dans la Région",
    port_card2_title: "Anti-infectieux",
    port_card2_desc: "Traitements antibactériens et antiviraux hautement performants sous confinement clinique strict.",
    port_card2_tag: "Paramètres de Stabilité Optimaux",
    port_card3_title: "Gastro-entérologie",
    port_card3_desc: "Traitements fiables pour les troubles digestifs, la régénération muqueuse et les reflux gastriques.",
    port_card3_tag: "Prescrit Mondialement",
    port_card4_title: "SNC (Neurologie)",
    port_card4_desc: "Formulations neurologiques développées pour le soutien stable des neurotransmetteurs.",
    port_card4_tag: "Formes Orales de Haute Précision",
    port_cta_all: "Voir le catalogue thérapeutique complet",

    // News
    news_label: "CENTRE MÉDIA",
    news_heading: "Actualités & Communiqués d'Entreprise",
    news_view_all: "Tous les communiqués de presse",
    news1_tag: "Communiqué Financier",
    news1_date: "24 Février 2026",
    news1_title: "Le Conseil d'Administration recommande la distribution de dividendes",
    news1_desc: "Suite à une croissance remarquable sur les marchés régionaux en 2025, le conseil structure les dividendes.",
    news2_tag: "Étape Opérationnelle",
    news2_date: "15 Janvier 2026",
    news2_title: "Annonce de la date de l'Assemblée Générale pour 2026",
    news2_desc: "Les actionnaires sont invités à voter en ligne à l'occasion des 50 ans d'existence de l'entreprise.",
    news3_tag: "Expansion Régionale",
    news3_date: "08 Décembre 2025",
    news3_title: "Dar Aldawa obtient de nouvelles licences industrielles de production",
    news3_desc: "Obtention d'autorisations clés en Arabie Saoudite pour une unité thérapeutique dédiée fin 2026.",
    news_read_more: "Lire le communiqué complet",

    // Careers
    careers_tag: "REJOIGNEZ LE LEADER PHARMACEUTIQUE",
    careers_heading: "Façonnez l'Avenir des Soins de Santé",
    careers_desc: "Chez Dar Aldawa, plus de 1 000 collaborateurs passionnés œuvrent dans nos laboratoires et sites industriels. Rejoignez une culture d'excellence scientifique.",
    careers_cta: "Explorer les Carrières",

    // Investors
    investors_label: "RELATIONS INVESTISSEURS",
    investors_heading: "Créer une Valeur Durable pour les Actionnaires",
    investors_desc: "Appuyés par une solide capacité industrielle, nous garantissons des rapports financiers transparents et une position financière résiliente.",
    investor_link1: "Rapport Annuel & Déclarations Financières 2025",
    investor_link2: "Déclarations des Assemblées Générales",
    investor_link3: "Fiche d'Information Investisseurs & Performance",
    investor_cta: "Accéder au Centre Investisseurs",
    investor_card_title: "Indicateurs Financiers Clés",
    investor_stat1_label: "Chiffre d'Affaires Consolidé (2025)",
    investor_stat1_val: "Tendance de Croissance Résiliente",
    investor_stat2_label: "Opérations sur les Marchés Régionaux",
    investor_stat2_val: "40+ Pays",
    investor_stat3_label: "Projets d'Expansion des Usines",
    investor_stat3_val: "2 Sites Majeurs en Cours",

    // Footer
    footer_desc: "50 ans de qualité éprouvée. À la tête des réseaux de fabrication pour préserver la santé des patients.",
    footer_col_company: "Société",
    footer_link_about: "À propos de notre entreprise",
    footer_link_board: "Conseil d'Administration",
    footer_link_cap: "Capacités",
    footer_link_integrity: "Intégrité de l'entreprise",
    footer_link_careers: "Carrières",
    footer_col_therapeutics: "Portefeuille Thérapeutique",
    footer_link_cardio: "Soins Cardiovasculaires",
    footer_link_anti: "Anti-infectieux puissants",
    footer_link_gastro: "Gastro-entérologie",
    footer_link_cns: "Système Nerveux Central",
    footer_col_contacts: "Contacts Entreprise",
    footer_hq_title: "Siège en Jordanie",
    footer_hq_addr: "Amman, Jordanie | B.P. 930185",
    footer_algeria_title: "Bureau Régional Algérie",
    footer_inquiries_title: "Demandes Directes",
    footer_rights: "© 2026 Dar Al Dawa. Tous droits réservés.",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Utilisation",
    footer_regulatory: "Déclaration Réglementaire"
  }
};
