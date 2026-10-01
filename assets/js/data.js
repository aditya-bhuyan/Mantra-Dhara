/**
 * Mantra Dhara — Content Catalog
 *
 * SECTIONS: the 20 navigable sections, each with an ordered list of stotra stubs.
 * MANTRAS:  the individual entries referenced by stub.id — trilingual content lives here.
 *
 * Stub fields:  { id, title }  — human-readable fallback title (English)
 * Entry fields: { id, section, deity, tags, repetitions, timing,
 *                 odia:{title,text}, sanskrit:{title,text}, english:{title,text},
 *                 meaning:{odia,sanskrit,english}, benefits,
 *                 featured?, morning?, evening?, verses? }
 *
 * Content status:
 *   "stub"    — placeholder, content to be filled in
 *   "partial" — some language versions present
 *   "full"    — all three language versions complete
 */

/* ─────────────────────────────────────────────────────
   SECTION CATALOG
   Each section: { id, icon, label, deity?, stubs:[ {id,title} ] }
───────────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "morning",
    icon: "🌅",
    label: "Morning / Pratah Smarana",
    stubs: [
      { id: "kara-darshana",          title: "Kara Darshana Mantra" },
      { id: "samudra-vasane",         title: "Samudra Vasane Devi" },
      { id: "brahma-murari",          title: "Brahma Murari Tripurantakari" },
      { id: "pratah-smarana-stotram", title: "Pratah Smarana Stotram" },
      { id: "vakratunda-mahakaya",    title: "Vakratunda Mahakaya" },
      { id: "navagraha-smarana",      title: "Navagraha Smarana" },
      { id: "rama-nama-smarana",      title: "Rama Nama Smarana" },
      { id: "krishna-smarana",        title: "Krishna Smarana" },
    ]
  },
  {
    id: "ganesha",
    icon: "🐘",
    label: "Ganesha",
    deity: "Ganesha",
    stubs: [
      { id: "vakratunda-mahakaya",        title: "Vakratunda Mahakaya" },
      { id: "gajananam-bhutaganadi",      title: "Gajananam Bhutaganadi Sevitam" },
      { id: "ajam-nirvikalpam",           title: "Ajam Nirvikalpam" },
      { id: "ganapati-atharvashirsha",    title: "Ganapati Atharvashirsha" },
      { id: "ganesha-pancharatnam",       title: "Ganesha Pancharatnam" },
      { id: "ganesha-ashtottara",         title: "Ganesha Ashtottara Shatanamavali" },
    ]
  },
  {
    id: "shiva",
    icon: "🕉️",
    label: "Shiva",
    deity: "Shiva",
    stubs: [
      { id: "shiva-panchakshara-stotram",     title: "Shiva Panchakshara Stotram" },
      { id: "mahamrityunjaya",                title: "Mahamrityunjaya Mantra" },
      { id: "lingashtakam",                   title: "Lingashtakam" },
      { id: "shiva-manasa-puja",              title: "Shiva Manasa Puja" },
      { id: "bilvashtakam",                   title: "Bilvashtakam" },
      { id: "shiva-tandava-stotram",          title: "Shiva Tandava Stotram" },
      { id: "rudrashtakam",                   title: "Rudrashtakam" },
      { id: "shivaparadha-kshamapana",        title: "Shivaparadhakshamapana Stotram" },
      { id: "daridrya-dahana-shiva",          title: "Daridrya Dahana Shiva Stotram" },
      { id: "shiva-ashtakam",                 title: "Shiva Ashtakam" },
      { id: "shiva-mahimna-stotram",          title: "Shiva Mahimna Stotram" },
    ]
  },
  {
    id: "vishnu",
    icon: "🪷",
    label: "Vishnu / Narayana",
    deity: "Vishnu",
    stubs: [
      { id: "shantakaram",            title: "Shantakaram Bhujagashayanam" },
      { id: "vishnu-sahasranama",     title: "Vishnu Sahasranama" },
      { id: "achyutam-keshavam",      title: "Achyutam Keshavam" },
      { id: "om-namo-narayanaya",     title: "Om Namo Narayanaya" },
      { id: "vishnu-shatpadi",        title: "Vishnu Shatpadi" },
      { id: "mukunda-mala",           title: "Mukunda Mala" },
      { id: "krishna-ashtakam",       title: "Krishna Ashtakam" },
      { id: "madhurashtakam",         title: "Madhurashtakam" },
      { id: "damodarashtakam",        title: "Damodarashtakam" },
      { id: "vishnu-panjaram",        title: "Vishnu Panjaram" },
    ]
  },
  {
    id: "krishna",
    icon: "🦚",
    label: "Krishna",
    deity: "Krishna",
    stubs: [
      { id: "krishna-smarana",        title: "Krishna Smarana" },
      { id: "vasudeva-sutam-devam",   title: "Vasudeva Sutam Devam" },
      { id: "kasturi-tilakam",        title: "Kasturi Tilakam" },
      { id: "madhurashtakam",         title: "Madhurashtakam" },
      { id: "govindashtakam",         title: "Govindashtakam" },
      { id: "achyutam-keshavam",      title: "Achyutam Keshavam" },
      { id: "hare-krishna-mahamantra",title: "Hare Krishna Mahamantra" },
      { id: "bhagavad-gita-dhyanam",  title: "Bhagavad Gita Dhyanam" },
    ]
  },
  {
    id: "rama",
    icon: "🏹",
    label: "Rama",
    deity: "Rama",
    stubs: [
      { id: "rama-rameti",            title: "Rama Rameti" },
      { id: "rama-raksha-stotram",    title: "Rama Raksha Stotram" },
      { id: "ramashtakam",            title: "Ramashtakam" },
      { id: "shri-rama-jaya-rama",    title: "Shri Rama Jaya Rama Jaya Jaya Rama" },
      { id: "sita-rama-nama",         title: "Sita Rama Nama" },
      { id: "rama-mangalashasanam",   title: "Rama Mangalashasanam" },
      { id: "ramachandra-ashtakam",   title: "Ramachandra Ashtakam" },
      { id: "ramachandra-kripalu",    title: "Ramachandra Kripalu" },
    ]
  },
  {
    id: "hanuman",
    icon: "🚩",
    label: "Hanuman",
    deity: "Hanuman",
    stubs: [
      { id: "manojavam",                       title: "Manojavam Marutatulyavegam" },
      { id: "buddhir-balam",                   title: "Buddhir Balam Yasho Dhairyam" },
      { id: "om-hanumate-namah",               title: "Om Hanumate Namah" },
      { id: "om-ham-hanumate-namah",           title: "Om Ham Hanumate Namah" },
      { id: "hanuman-gayatri",                 title: "Hanuman Gayatri" },
      { id: "anjaneya-dhyana",                 title: "Anjaneya Dhyana" },
      { id: "yatra-yatra-raghunatha",          title: "Yatra Yatra Raghunatha Kirtanam" },
      { id: "sankatamochana-ashtakam",         title: "Sankatamochana Hanuman Ashtakam" },
      { id: "hanuman-chalisa",                 title: "Hanuman Chalisa" },
      { id: "hanumad-raksha-stotram",          title: "Hanumad Raksha Stotram" },
      { id: "anjaneya-bhujangaprayata",        title: "Anjaneya Bhujangaprayata Stotram" },
      { id: "hanuman-suktam",                  title: "Hanuman Suktam" },
    ]
  },
  {
    id: "devi",
    icon: "🌺",
    label: "Devi / Shakti",
    deity: "Devi / Durga",
    stubs: [
      { id: "sarva-mangala-mangalye",       title: "Sarva Mangala Mangalye" },
      { id: "devi-kavacham",                title: "Devi Kavacham" },
      { id: "argala-stotram",               title: "Argala Stotram" },
      { id: "mahishasura-mardini",          title: "Mahishasura Mardini Stotram" },
      { id: "devi-aparadha-kshamapana",     title: "Devi Aparadha Kshamapana Stotram" },
      { id: "lalita-pancharatnam",          title: "Lalita Pancharatnam" },
      { id: "ya-devi-sarvabhuteshu",        title: "Ya Devi Sarvabhuteshu" },
      { id: "devi-suktam",                  title: "Devi Suktam" },
      { id: "narayani-stuti",               title: "Narayani Stuti" },
      { id: "durga-32-names",               title: "Durga 32 Names" },
      { id: "devi-mahatmyam",               title: "Devi Mahatmyam / Durga Saptashati" },
      { id: "lalita-sahasranama",           title: "Lalita Sahasranama" },
    ]
  },
  {
    id: "saraswati",
    icon: "📚",
    label: "Saraswati / Vidya",
    deity: "Saraswati",
    stubs: [
      { id: "ya-kundendu",                  title: "Ya Kundendu Tusharahara" },
      { id: "saraswati-namastubhyam",       title: "Saraswati Namastubhyam" },
      { id: "om-aim-sarasvatyai",           title: "Om Aim Sarasvatyai Namah" },
      { id: "saraswati-mahabhage",          title: "Saraswati Mahabhage" },
      { id: "shuklam-brahmavicharasaram",   title: "Shuklam Brahmavicharasaram" },
      { id: "saraswati-stotram",            title: "Saraswati Stotram" },
      { id: "saraswati-ashtakam",           title: "Saraswati Ashtakam" },
      { id: "saraswati-bhujangaprayata",    title: "Saraswati Bhujangaprayata" },
      { id: "saraswati-kavacham",           title: "Saraswati Kavacham" },
      { id: "saraswati-suktam",             title: "Saraswati Suktam" },
      { id: "saraswati-suprabhatam",        title: "Saraswati Suprabhatam" },
      { id: "saraswati-sahasranama",        title: "Saraswati Sahasranama" },
    ]
  },
  {
    id: "lakshmi",
    icon: "💰",
    label: "Lakshmi / Prosperity",
    deity: "Lakshmi",
    stubs: [
      { id: "mahalakshmi-mantra",           title: "Mahalakshmi Mantra" },
      { id: "mahalakshmi-ashtakam",         title: "Mahalakshmi Ashtakam" },
      { id: "kanakadhara-stotram",          title: "Kanakadhara Stotram" },
      { id: "ashta-lakshmi-stotram",        title: "Ashta Lakshmi Stotram" },
      { id: "dhanya-lakshmi",               title: "Dhanya Lakshmi" },
      { id: "gaja-lakshmi",                 title: "Gaja Lakshmi" },
      { id: "lakshmi-dvadashanama",         title: "Lakshmi Dvadashanama" },
      { id: "sri-suktam",                   title: "Sri Suktam" },
      { id: "sri-stotram",                  title: "Sri Stotram" },
      { id: "mahalakshmi-kavacham",         title: "Mahalakshmi Kavacham" },
      { id: "lakshmi-ashtottara",           title: "Lakshmi Ashtottara Shatanamavali" },
    ]
  },
  {
    id: "before-food",
    icon: "🍚",
    label: "Before Food",
    stubs: [
      { id: "brahmarpanam",                 title: "Brahmarpanam" },
      { id: "aham-vaishvanaro",             title: "Aham Vaishvanaro Bhutva" },
      { id: "annapurne-sadapurne",          title: "Annapurne Sadapurne" },
      { id: "anna-brahma",                  title: "Anna Brahma" },
      { id: "yat-karoshi",                  title: "Yat Karoshi Yad Ashnasi" },
      { id: "om-saha-navavatu",             title: "Om Saha Navavatu" },
    ]
  },
  {
    id: "before-study",
    icon: "📖",
    label: "Before Study / Learning",
    stubs: [
      { id: "saraswati-namastubhyam",       title: "Saraswati Namastubhyam" },
      { id: "ya-kundendu",                  title: "Ya Kundendu" },
      { id: "hayagriva-dhyana",             title: "Hayagriva Dhyana" },
      { id: "hayagriva-stotram",            title: "Hayagriva Stotram" },
      { id: "vakratunda-mahakaya",          title: "Vakratunda Mahakaya" },
      { id: "om-aim-sarasvatyai",           title: "Om Aim Sarasvatyai Namah" },
      { id: "ya-devi-vidyarupena",          title: "Ya Devi Sarvabhuteshu Vidyarupena" },
      { id: "gurur-brahma",                 title: "Gurur Brahma" },
      { id: "medha-sukta",                  title: "Medha Sukta" },
      { id: "gayatri",                      title: "Gayatri Mantra" },
    ]
  },
  {
    id: "guru",
    icon: "🪔",
    label: "Guru",
    stubs: [
      { id: "gurur-brahma",                 title: "Gurur Brahma" },
      { id: "akhanda-mandalakaram",         title: "Akhanda Mandalakaram" },
      { id: "ajnana-timirandhasya",         title: "Ajnana Timirandhasya" },
      { id: "tvameva-mata",                 title: "Tvameva Mata" },
      { id: "guru-paduka-stotram",          title: "Guru Paduka Stotram" },
      { id: "guru-paduka-panchakam",        title: "Guru Paduka Panchakam" },
      { id: "guru-gita",                    title: "Guru Gita" },
      { id: "dakshinamurti-stotram",        title: "Dakshinamurti Stotram" },
      { id: "dakshinamurti-dhyana",         title: "Dakshinamurti Dhyana" },
      { id: "guru-ashtakam",                title: "Guru Ashtakam" },
      { id: "bhaja-govindam",               title: "Bhaja Govindam" },
    ]
  },
  {
    id: "protection",
    icon: "🛡️",
    label: "Protection / Raksha",
    stubs: [
      { id: "narayana-kavacham",            title: "Narayana Kavacham" },
      { id: "narasimha-kavacham",           title: "Narasimha Kavacham" },
      { id: "devi-kavacham",                title: "Devi Kavacham" },
      { id: "hanumad-raksha-stotram",       title: "Hanumad Raksha Stotram" },
      { id: "shiva-raksha-stotram",         title: "Shiva Raksha Stotram" },
      { id: "shiva-kavacham",               title: "Shiva Kavacham" },
      { id: "durga-kavacham",               title: "Durga Kavacham" },
      { id: "navagraha-kavacham",           title: "Navagraha Kavacham" },
      { id: "aditya-kavacham",              title: "Aditya Kavacham" },
      { id: "apadam-apahartaram",           title: "Apadam Apahartaram" },
      { id: "sarva-mangala-mangalye",       title: "Sarva Mangala Mangalye" },
      { id: "mahamrityunjaya",              title: "Mahamrityunjaya Mantra" },
      { id: "sudarshanashtakam",            title: "Sudarshanashtakam" },
    ]
  },
  {
    id: "surya",
    icon: "☀️",
    label: "Surya",
    deity: "Surya",
    stubs: [
      { id: "aditya-hridayam",              title: "Aditya Hridayam" },
      { id: "surya-namaskara-mantras",      title: "Surya Namaskara 12 Mantras" },
      { id: "om-adityaya-namah",            title: "Om Adityaya Namah" },
      { id: "om-suryaya-namah",             title: "Om Suryaya Namah" },
      { id: "japakusuma-sankasham",         title: "Japakusuma Sankasham" },
      { id: "surya-ashtakam",               title: "Surya Ashtakam" },
      { id: "surya-ashtottara",             title: "Surya Ashtottara Shatanama" },
      { id: "surya-sahasranama",            title: "Surya Sahasranama" },
      { id: "aditya-kavacham",              title: "Aditya Kavacham" },
      { id: "surya-gayatri",                title: "Surya Gayatri" },
      { id: "namah-savitre",                title: "Namah Savitre Jagadeka Chakshushe" },
    ]
  },
  {
    id: "navagraha",
    icon: "🪐",
    label: "Navagraha",
    stubs: [
      { id: "navagraha-dhyana-stotram",     title: "Navagraha Dhyana Stotram" },
      { id: "navagraha-japa-mantras",       title: "Navagraha Japa Mantras" },
      { id: "navagraha-namaskara",          title: "Navagraha Namaskara" },
      { id: "navagraha-stotram",            title: "Navagraha Stotram" },
      { id: "navagraha-kavacham",           title: "Navagraha Kavacham" },
      { id: "navagraha-gayatri",            title: "Navagraha Gayatri" },
      { id: "chandra-mantras",              title: "Chandra Mantras" },
      { id: "mangala-mantras",              title: "Mangala Mantras" },
      { id: "budha-mantras",                title: "Budha Mantras" },
      { id: "guru-brihaspati-mantras",      title: "Guru / Brihaspati Mantras" },
      { id: "shukra-mantras",               title: "Shukra Mantras" },
      { id: "shani-mantras",                title: "Shani Mantras" },
      { id: "rahu-mantras",                 title: "Rahu Mantras" },
      { id: "ketu-mantras",                 title: "Ketu Mantras" },
    ]
  },
  {
    id: "evening",
    icon: "🌙",
    label: "Evening / Sandhya",
    stubs: [
      { id: "shubham-karoti",               title: "Shubham Karoti Kalyanam" },
      { id: "deepa-jyoti-parabrahma",       title: "Deepa Jyoti Parabrahma" },
      { id: "karpura-gauram",               title: "Karpura Gauram" },
      { id: "sarva-mangala-mangalye",       title: "Sarva Mangala Mangalye" },
      { id: "apadam-apahartaram",           title: "Apadam Apahartaram" },
      { id: "krishna-smarana",              title: "Krishna Smarana" },
      { id: "gayatri",                      title: "Gayatri Mantra" },
      { id: "om-saha-navavatu",             title: "Om Saha Navavatu" },
      { id: "om-shanti-shanti",             title: "Om Shanti Shanti Shanti" },
      { id: "evening-aarti",                title: "Evening Aarti Collection" },
    ]
  },
  {
    id: "sleep",
    icon: "🌙",
    label: "Before Sleep",
    stubs: [
      { id: "karacharana-kritam",           title: "Karacharana Kritam" },
      { id: "rama-skanda-hanuman-bedtime",  title: "Rama–Skanda–Hanuman Bedtime Prayer" },
      { id: "krishna-smarana",              title: "Krishna Smarana" },
      { id: "rama-nama-smarana",            title: "Rama Nama Smarana" },
      { id: "hanuman-smarana",              title: "Hanuman Smarana" },
      { id: "deepa-jyoti-parabrahma",       title: "Deepa Jyoti" },
      { id: "shanti-mantra",                title: "Shanti Mantra" },
      { id: "one-minute-bedtime",           title: "One-Minute Bedtime Prayer" },
    ]
  },
  {
    id: "universal",
    icon: "🙏",
    label: "Universal / Shanti",
    stubs: [
      { id: "gayatri",                      title: "Gayatri Mantra" },
      { id: "asato-ma-sadgamaya",           title: "Asato Ma Sadgamaya" },
      { id: "sarve-bhavantu-sukhinah",      title: "Sarve Bhavantu Sukhinah" },
      { id: "sarvesham-svastir",            title: "Sarvesham Svastir Bhavatu" },
      { id: "lokah-samastah",               title: "Lokah Samastah Sukhino Bhavantu" },
      { id: "purnamadah",                   title: "Purnamadah Purnamidam" },
      { id: "om-saha-navavatu",             title: "Om Saha Navavatu" },
      { id: "om-dyauh-shantih",             title: "Om Dyauh Shantih" },
      { id: "mahamrityunjaya",              title: "Mahamrityunjaya Mantra" },
      { id: "om-shanti-shanti",             title: "Om Shanti Shanti Shanti" },
    ]
  },
  {
    id: "major-stotras",
    icon: "📜",
    label: "Major Stotras",
    stubs: [
      { id: "ganapati-atharvashirsha",      title: "Ganapati Atharvashirsha" },
      { id: "ganesha-pancharatnam",         title: "Ganesha Pancharatnam" },
      { id: "shiva-panchakshara-stotram",   title: "Shiva Panchakshara Stotram" },
      { id: "lingashtakam",                 title: "Lingashtakam" },
      { id: "bilvashtakam",                 title: "Bilvashtakam" },
      { id: "shiva-manasa-puja",            title: "Shiva Manasa Puja" },
      { id: "rudrashtakam",                 title: "Rudrashtakam" },
      { id: "shiva-tandava-stotram",        title: "Shiva Tandava Stotram" },
      { id: "shiva-mahimna-stotram",        title: "Shiva Mahimna Stotram" },
      { id: "vishnu-sahasranama",           title: "Vishnu Sahasranama" },
      { id: "vishnu-shatpadi",              title: "Vishnu Shatpadi" },
      { id: "achyutam-keshavam",            title: "Achyutashtakam" },
      { id: "mukunda-mala",                 title: "Mukunda Mala" },
      { id: "madhurashtakam",               title: "Madhurashtakam" },
      { id: "damodarashtakam",              title: "Damodarashtakam" },
      { id: "rama-raksha-stotram",          title: "Rama Raksha Stotram" },
      { id: "ramashtakam",                  title: "Ramashtakam" },
      { id: "ramachandra-ashtakam",         title: "Ramachandra Ashtakam" },
      { id: "hanuman-chalisa",              title: "Hanuman Chalisa" },
      { id: "sankatamochana-ashtakam",      title: "Sankatamochana Hanuman Ashtakam" },
      { id: "anjaneya-bhujangaprayata",     title: "Hanuman Bhujangaprayata Stotram" },
      { id: "devi-mahatmyam",               title: "Devi Mahatmyam / Durga Saptashati" },
      { id: "lalita-sahasranama",           title: "Lalita Sahasranama" },
      { id: "mahishasura-mardini",          title: "Mahishasura Mardini Stotram" },
      { id: "devi-aparadha-kshamapana",     title: "Devi Aparadha Kshamapana Stotram" },
      { id: "kanakadhara-stotram",          title: "Kanakadhara Stotram" },
      { id: "ashta-lakshmi-stotram",        title: "Ashta Lakshmi Stotram" },
      { id: "sri-suktam",                   title: "Sri Suktam" },
      { id: "saraswati-ashtakam",           title: "Saraswati Ashtakam" },
      { id: "saraswati-sahasranama",        title: "Saraswati Sahasranama" },
      { id: "hayagriva-stotram",            title: "Hayagriva Stotram" },
      { id: "guru-gita",                    title: "Guru Gita" },
      { id: "guru-paduka-stotram",          title: "Guru Paduka Stotram" },
      { id: "dakshinamurti-stotram",        title: "Dakshinamurti Stotram" },
      { id: "bhaja-govindam",               title: "Bhaja Govindam" },
      { id: "aditya-hridayam",              title: "Aditya Hridayam" },
      { id: "surya-ashtakam",               title: "Surya Ashtakam" },
      { id: "surya-sahasranama",            title: "Surya Sahasranama" },
      { id: "navagraha-stotram",            title: "Navagraha Stotram" },
    ]
  },
];

/* ─────────────────────────────────────────────────────
   PLACEHOLDER helper — returns a "content pending" stub entry
───────────────────────────────────────────────────── */
function _stub(id, englishTitle, deity, tags) {
  return {
    id, deity: deity || "Universal", tags: tags || [],
    repetitions: "—", timing: "—", status: "stub",
    odia:    { title: englishTitle, text: "— ବିଷୟବସ୍ତୁ ଶୀଘ୍ର ଆସୁଛି —" },
    sanskrit: { title: englishTitle, text: "— सामग्री शीघ्र आ रही है —" },
    english: { title: englishTitle, text: "— Content coming soon —" },
    meaning: { odia: "", sanskrit: "", english: "" },
    benefits: ""
  };
}

/* ─────────────────────────────────────────────────────
   MANTRAS ARRAY  — full entries + auto-generated stubs
   Full entries appear first; stubs are generated from the
   SECTIONS catalog for any id not already present.
───────────────────────────────────────────────────── */
const MANTRAS_FULL = [

  /* ═══════════ FULL ENTRIES (trilingual content present) ═══════════ */

  /* ── 1. Gayatri ── */
  {
    id: "gayatri",
    deity: "Surya / Brahman",
    tags: ["morning", "daily", "universal", "sadhana"],
    repetitions: "108 / 1008",
    timing: "Sunrise, Noon, Sunset (Sandhya)",
    status: "full",
    odia: {
      title: "ଗାୟତ୍ରୀ ମନ୍ତ୍ର",
      text: "ଓଁ ଭୂର୍ଭୁବଃ ସ୍ୱଃ\nତତ୍ ସବିତୁର୍ ବରେଣ୍ୟଂ\nଭର୍ଗୋ ଦେବସ୍ୟ ଧୀମହି\nଧିୟୋ ୟୋ ନଃ ପ୍ରଚୋଦୟାତ୍ ॥"
    },
    sanskrit: {
      title: "गायत्री मंत्र",
      text: "ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यम्\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात् ॥"
    },
    english: {
      title: "Gayatri Mantra",
      text: "Om Bhur Bhuvah Svah\nTat Savitur Varenyam\nBhargo Devasya Dhimahi\nDhiyo Yo Nah Prachodayat ||"
    },
    meaning: {
      odia: "ଆମେ ସେହି ଦିବ୍ୟ ଆଲୋକ ଉପରେ ଧ୍ୟାନ ଦେଉ ଯାହା ଭୂ, ଭୁବ ଏବଂ ସ୍ୱ — ତ୍ରିଲୋକ ଆଲୋକ ଦେଉଛି। ଆମ ବୁଦ୍ଧିକୁ ସଠିକ ପଥ ପ୍ରଦର୍ଶନ କରୁ।",
      sanskrit: "हम उस दिव्य प्रकाश का ध्यान करते हैं जो तीनों लोकों में व्याप्त है और जो हमारी बुद्धि को सन्मार्ग पर प्रेरित करे।",
      english: "We meditate on the divine light of the Sun that pervades the three worlds. May that divine light illuminate and guide our intellect."
    },
    benefits: "Illumines intellect, removes ignorance, bestows wisdom, purifies mind.",
    featured: true, morning: true, evening: true
  },

  {
    id: "mahamrityunjaya",
    deity: "Shiva / Rudra",
    tags: ["healing", "protection", "moksha", "shiva"],
    repetitions: "108",
    timing: "Morning or Evening",
    status: "full",
    odia: {
      title: "ମହାମୃତ୍ୟୁଞ୍ଜୟ ମନ୍ତ୍ର",
      text: "ଓଁ ତ୍ର୍ୟମ୍ବକଂ ଯଜାମହେ\nସୁଗନ୍ଧିଂ ପୁଷ୍ଟିବର୍ଦ୍ଧନମ୍।\nଉର୍ବାରୁକମିବ ବନ୍ଧନାନ୍\nମୃତ୍ୟୋର୍ମୁକ୍ଷୀୟ ମାମୃତାତ୍॥"
    },
    sanskrit: {
      title: "महामृत्युञ्जय मंत्र (ऋग्वेद ७.५९.१२)",
      text: "ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्\nमृत्योर्मुक्षीय मामृतात्॥"
    },
    english: {
      title: "Maha Mrityunjaya Mantra (Ṛgveda 7.59.12)",
      text: "Oṁ Tryambakaṁ Yajāmahe\nSugandhiṁ Puṣṭi-vardhanam।\nUrvārukam Iva Bandhanān\nMṛtyor Mukṣīya Māmṛtāt॥"
    },
    meaning: {
      odia: "ଆମେ ତ୍ରିନୟନ ଭଗବାନ ଶିବଙ୍କ ପୂଜା କରୁ। ଶଶା ଯେପରି ଲତାରୁ ଛୁଟୁଯାଏ, ସେହିପରି ଆମକୁ ମୃତ୍ୟୁ ବନ୍ଧନରୁ ମୁକ୍ତ କର।",
      sanskrit: "हम तीन नेत्रों वाले भगवान शिव की पूजा करते हैं। जैसे ककड़ी अपनी बेल से मुक्त होती है, वैसे हमें मृत्यु से मुक्त करो।",
      english: "We worship three-eyed Shiva (Tryambaka/Rudra — Ṛgveda 7.59.12). Just as a ripe cucumber is freed from its vine, may He liberate us from death, granting immortality."
    },
    benefits: "Heals illness, removes fear of death, bestows long life, protection, liberation.",
    featured: true, morning: true, evening: true
  },

  {
    id: "kara-darshana",
    deity: "Lakshmi / Saraswati / Vishnu",
    tags: ["morning", "awakening", "daily"],
    repetitions: "1",
    timing: "Upon waking, before rising from bed",
    status: "full",
    odia: {
      title: "କର ଦର୍ଶନ ମନ୍ତ୍ର",
      text: "କରାଗ୍ରେ ବସତେ ଲକ୍ଷ୍ମୀଃ\nକରମଧ୍ୟେ ସରସ୍ୱତୀ।\nକରମୂଲେ ତୁ ଗୋବିନ୍ଦଃ\nପ୍ରଭାତେ କରଦର୍ଶନମ୍॥"
    },
    sanskrit: {
      title: "कर दर्शन मंत्र",
      text: "कराग्रे वसते लक्ष्मीः\nकरमध्ये सरस्वती।\nकरमूले तु गोविन्दः\nप्रभाते करदर्शनम्॥"
    },
    english: {
      title: "Kara Darshana Mantra",
      text: "Karāgre vasate Lakṣmīḥ\nKaramadhye Sarasvatī।\nKaramūle tu Govindaḥ\nPrabhāte karadarśanam॥"
    },
    meaning: {
      odia: "ହାତ ଆଙ୍ଗୁଳି ଅଗ୍ରରେ ଲକ୍ଷ୍ମୀ, ମଧ୍ୟରେ ସରସ୍ୱତୀ ଏବଂ ମୂଳରେ ଗୋବିନ୍ଦ ବାସ କରନ୍ତି। ଏଣୁ ପ୍ରଭାତରେ ହାତ ଦର୍ଶନ କରିବା ଉଚିତ।",
      sanskrit: "हाथ के अग्रभाग में लक्ष्मी, मध्य में सरस्वती और मूल में गोविंद निवास करते हैं। इसलिए प्रातःकाल हाथों के दर्शन करने चाहिए।",
      english: "At the fingertips dwells Lakshmi; in the middle, Saraswati; at the base, Govinda. Therefore look at your hands each morning."
    },
    benefits: "Auspicious start to the day, blessing for the hands and all actions.",
    morning: true
  },

  {
    id: "samudra-vasane",
    deity: "Bhumi Devi / Prithvi",
    tags: ["morning", "earth", "daily"],
    repetitions: "1",
    timing: "Before stepping on the ground in the morning",
    status: "full",
    odia: {
      title: "ସମୁଦ୍ରବସନେ ଦେବୀ",
      text: "ସମୁଦ୍ରବସନେ ଦେବି\nପର୍ବତସ୍ତନମଣ୍ଡଳେ।\nବିଷ୍ଣୁପତ୍ନି ନମସ୍ତୁଭ୍ୟଂ\nପାଦସ୍ପର୍ଶଂ କ୍ଷମସ୍ୱ ମେ॥"
    },
    sanskrit: {
      title: "समुद्रवसने देवि",
      text: "समुद्रवसने देवि\nपर्वतस्तनमण्डले।\nविष्णुपत्नि नमस्तुभ्यं\nपादस्पर्शं क्षमस्व मे॥"
    },
    english: {
      title: "Samudra Vasane Devi",
      text: "Samudra-vasane Devi\nParvata-stana-maṇḍale।\nViṣṇu-patni namastubhyaṁ\nPāda-sparśaṁ kṣamasva me॥"
    },
    meaning: {
      odia: "ହେ ଦେବୀ, ସମୁଦ୍ର ଯାହାର ବସ୍ତ୍ର ଏବଂ ପର୍ବତ ଯାହାର ସ୍ତନ — ହେ ବିଷ୍ଣୁ ପତ୍ନୀ, ଆପଣଙ୍କୁ ନମସ୍କାର। ମୋ ଚରଣ ସ୍ପର୍ଶ କ୍ଷମା କରନ୍ତୁ।",
      sanskrit: "हे देवी, जिनका वस्त्र समुद्र और स्तन पर्वत हैं, हे विष्णु-पत्नी, आपको नमस्कार। मेरे चरण-स्पर्श को क्षमा करें।",
      english: "O Goddess, whose garment is the ocean and whose breasts are the mountains, O consort of Vishnu — I salute you. Please forgive me for touching you with my feet."
    },
    benefits: "Respectful acknowledgement of Mother Earth, auspicious day-start.",
    morning: true
  },

  {
    id: "vakratunda-mahakaya",
    deity: "Ganesha",
    tags: ["morning", "ganesha", "obstacles", "study"],
    repetitions: "3 / 11",
    timing: "Morning, before any new work or study",
    status: "full",
    odia: {
      title: "ବକ୍ରତୁଣ୍ଡ ମହାକାୟ",
      text: "ବକ୍ରତୁଣ୍ଡ ମହାକାୟ\nସୂର୍ୟ୍ୟକୋଟିସମପ୍ରଭ।\nନିର୍ବିଘ୍ନଂ କୁରୁ ମେ ଦେବ\nଶୁଭକାର୍ୟ୍ୟେଷୁ ସର୍ବଦା॥"
    },
    sanskrit: {
      title: "वक्रतुण्ड महाकाय",
      text: "वक्रतुण्ड महाकाय\nसूर्यकोटिसमप्रभ।\nनिर्विघ्नं कुरु मे देव\nशुभकार्येषु सर्वदा॥"
    },
    english: {
      title: "Vakratunda Mahakaya",
      text: "Vakratuṇḍa Mahākāya\nSūryakoṭi-samaprabha।\nNirvighnaṁ kuru me Deva\nŚubhakāryeṣu Sarvadā॥"
    },
    meaning: {
      odia: "ହେ ବଙ୍କ ଶୁଣ୍ଡ ଓ ମହାକାୟ ଦେବ, ଯାହାଙ୍କ ଦୀପ୍ତି କୋଟି ସୂର୍ୟ ସମ — ମୋ ସମସ୍ତ ଶୁଭ କାର୍ଯ୍ୟରୁ ସର୍ବଦା ବିଘ୍ନ ଦୂର କର।",
      sanskrit: "हे टेढ़ी सूँड वाले महाकाय देव, जिनकी प्रभा करोड़ सूर्यों के समान है — मेरे सभी शुभ कार्यों में सदैव विघ्न दूर करें।",
      english: "O Lord of curved trunk and great form, brilliant as a billion suns — always remove obstacles from all my auspicious endeavours."
    },
    benefits: "Removes obstacles, auspicious beginning, success in all works.",
    featured: true, morning: true
  },

  {
    id: "shantakaram",
    deity: "Vishnu",
    tags: ["vishnu", "morning", "liberation"],
    repetitions: "3",
    timing: "Morning or evening",
    status: "full",
    odia: {
      title: "ଶାନ୍ତାକାରଂ ଭୁଜଗଶୟନଂ",
      text: "ଶାନ୍ତାକାରଂ ଭୁଜଗଶୟନଂ ପଦ୍ମନାଭଂ ସୁରେଶଂ\nବିଶ୍ୱାଧାରଂ ଗଗନସଦୃଶଂ ମେଘବର୍ଣ୍ଣଂ ଶୁଭାଙ୍ଗମ୍।\nଲକ୍ଷ୍ମୀକାନ୍ତଂ କମଳନୟନଂ ଯୋଗିଭିର୍ଧ୍ୟାନଗମ୍ୟଂ\nବନ୍ଦେ ବିଷ୍ଣୁଂ ଭବଭୟହରଂ ସର୍ବଲୋକୈକନାଥମ୍॥"
    },
    sanskrit: {
      title: "शान्ताकारं भुजगशयनं",
      text: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥"
    },
    english: {
      title: "Shantakaram Bhujagashayanam",
      text: "Śāntākāraṁ Bhujaga-śayanaṁ Padmanābhaṁ Sureśam\nViśvādhāraṁ Gagana-sadṛśaṁ Megha-varṇaṁ Śubhāṅgam।\nLakṣmīkāntaṁ Kamala-nayanaṁ Yogibhir Dhyāna-gamyam\nVande Viṣṇuṁ Bhava-bhaya-haraṁ Sarva-lokaika-nātham॥"
    },
    meaning: {
      odia: "ଶେଷ ନାଗ ଶଯ୍ୟାରେ ଶାନ୍ତ, ପଦ୍ମ ନାଭ, ଜ୍ୟୋତିଷ ଗ୍ରହ ଯୋଗ ସ'ଙ୍ଗ — ଲକ୍ଷ୍ମୀ ପ୍ରିୟ, ଯୋଗୀ ଧ୍ୟାଙ୍ଗ ବିଷ୍ଣୁ — ସ'ବ ଲୋକ ଏ‌କ ନାଥ ବିଷ୍ଣୁ ଙ୍କୁ ବନ୍ଦନ।",
      sanskrit: "शेषनाग-शय्या पर विराजमान, पद्मनाभ, विश्वाधार, मेघवर्ण, लक्ष्मीकान्त, कमलनेत्र — सर्वलोक के एकमात्र नाथ विष्णु को वंदन।",
      english: "I bow to Vishnu — serene, resting on the serpent, lotus-naved, support of the universe, cloud-hued, beloved of Lakshmi, lotus-eyed, accessible to yogis through meditation — the sole lord of all worlds."
    },
    benefits: "Divine protection, liberation, grace of Vishnu, mental peace."
  },

  {
    id: "sarva-mangala-mangalye",
    deity: "Devi / Durga",
    tags: ["devi", "protection", "auspicious", "evening"],
    repetitions: "3",
    timing: "Morning, evening, any prayer",
    status: "full",
    odia: {
      title: "ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ",
      text: "ସର୍ବ                                      "
    },
    sanskrit: {
      title: "सर्वमङ्गलमाङ्गल्ये",
      text: "सर्वमङ्गलमाङ्गल्ये\nशिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि\nनारायणि नमोऽस्तु ते ॥"
    },
    english: {
      title: "Sarva Mangala Mangalye",
      text: "Sarva Mangala Mangalye\nShive Sarvartha Sadhike |\nSharanye Tryambake Gauri\nNarayani Namo Stu Te ||"
    },
    meaning: {
      odia: "",
      sanskrit: "हे सर्व-मंगल की मंगलस्वरूपिणी, शरणदात्री, तीन-नेत्री गौरी, नारायणी — आपको नमस्कार।",
      english: "O Narayani — the most auspicious, giver of all blessings, refuge of all, three-eyed Gauri — salutations to thee."
    },
    benefits: "All-round auspiciousness, divine protection, grace of the goddess.",
    featured: true, morning: true, evening: true
  },

  {
    id: "brahmarpanam",
    deity: "Brahman",
    tags: ["food", "gratitude", "daily"],
    repetitions: "1",
    timing: "Before each meal",
    status: "full",
    odia: {
      title: "ବ୍ରହ୍ମାର୍ପଣ (ଭୋଜନ ଶ୍ଳୋକ)",
      text: "ଓଁ ବ୍ରହ୍ମାର୍ପଣଂ ବ୍ରହ୍ମ ହବିଃ\nବ୍ରହ୍ମାଗ୍ନୌ ବ୍ରହ୍ମଣା ହୁତମ୍ ।\nବ୍ରହ୍ମୈବ ତେନ ଗନ୍ତବ୍ୟଂ\nବ୍ରହ୍ମ‌କର୍ମ ସମାଧିନା ॥"
    },
    sanskrit: {
      title: "ब्रह्मार्पणम् (गीता 4.24)",
      text: "ॐ ब्रह्मार्पणं ब्रह्म हविः\nब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं\nब्रह्मकर्म समाधिना ॥"
    },
    english: {
      title: "Brahmarpanam (Before Food — Gita 4.24)",
      text: "Om Brahmarpanam Brahma Havih\nBrahm Agnau Brahmana Hutam |\nBrahmaiva Tena Gantavyam\nBrahma Karma Samadhina ||"
    },
    meaning: {
      odia: "ଅର୍ପଣ ବ୍ରହ୍ମ, ହବି ବ୍ରହ୍ମ। ବ୍ରହ୍ମ‌ସମାଧିରେ ରହୁଥିବା ବ୍ୟକ୍ତି ବ୍ରହ୍ମ ପ୍ରାପ୍ତ କରନ୍ତି।",
      sanskrit: "अर्पण भी ब्रह्म है, हवि भी ब्रह्म है। ऐसे ब्रह्म-समाधि वाले को ब्रह्म ही प्राप्त होता है।",
      english: "The act of offering is Brahman, the oblation is Brahman. One who sees Brahman in all action attains Brahman."
    },
    benefits: "Transforms eating into a sacred act, mindfulness, gratitude."
  },

  {
    id: "saraswati-namastubhyam",
    deity: "Saraswati",
    tags: ["study", "saraswati", "knowledge"],
    repetitions: "3",
    timing: "Before study or learning",
    status: "full",
    odia: {
      title: "ସରସ୍ୱତୀ ନମସ୍ତୁଭ୍ୟଂ",
      text: "ସରସ୍ୱତୀ ନମସ୍ତୁଭ୍ୟଂ\nବରଦେ କାମ ରୂପିଣି ।\nବିଦ୍ୟାରମ୍ଭଂ କରିଷ୍ୟାମି\nସିଦ୍ଧିର୍ ଭବତୁ ମେ ସଦା ॥"
    },
    sanskrit: {
      title: "सरस्वती नमस्तुभ्यम्",
      text: "सरस्वती नमस्तुभ्यं\nवरदे काम रूपिणि ।\nविद्यारम्भं करिष्यामि\nसिद्धिर्भवतु मे सदा ॥"
    },
    english: {
      title: "Saraswati Namastubhyam",
      text: "Saraswati Namastubhyam\nVarade Kama Rupini |\nVidyarambham Karishyami\nSiddhir Bhavatu Me Sada ||"
    },
    meaning: {
      odia: "ହେ ସରସ୍ୱତୀ, ଆପଣଙ୍କୁ ନମସ୍କାର। ହେ ବରଦାୟିନୀ, ଆମି ବିଦ୍ୟାରମ୍ଭ କରୁଛି — ମୋ‌କୁ ସଦା ସିଦ୍ଧି ମିଳୁ।",
      sanskrit: "हे सरस्वती, आपको नमस्कार। हे वरदायिनी, मैं विद्या आरंभ करता हूँ, मुझे सदा सिद्धि प्राप्त हो।",
      english: "Salutations to Saraswati, the granter of boons. I begin my study — may I always attain success."
    },
    benefits: "Auspicious beginning of study, Saraswati's blessing for knowledge."
  },

  {
    id: "ya-kundendu",
    deity: "Saraswati",
    tags: ["saraswati", "study", "knowledge"],
    repetitions: "3",
    timing: "Morning, before study",
    status: "full",
    odia: {
      title: "ୟା କୁନ୍ଦେନ୍ଦୁ",
      text: "ୟା କୁନ୍ଦେନ୍ଦୁ ତୁଷାର‌ହାର ଧବଲା\nୟା ଶୁଭ୍ର‌ବସ୍ତ୍ରାବୃତା ।\nୟା ବୀଣାବରଦଣ୍ଡ‌ମଣ୍ଡ‌ତ‌କରା\nୟା ଶ୍ୱେତ‌ପଦ୍ମାସନା ॥\nୟା ବ୍ରହ୍ମାଚ୍ୟୁତ‌ଶଙ୍କର‌ପ୍ରଭୃତ‌ଭିର୍\nଦେବୈଃ ସଦା ବନ୍ଦିତା ।\nସା ମାଂ ପାତୁ ସରସ୍ୱତୀ ଭଗବତୀ\nନିଃଶେଷ‌ଜାଡ୍ୟା‌ପ‌ହା ॥"
    },
    sanskrit: {
      title: "या कुन्देन्दु",
      text: "या कुन्देन्दु तुषारहार धवला\nया शुभ्रवस्त्रावृता ।\nया वीणावरदण्डमण्डितकरा\nया श्वेतपद्मासना ॥\nया ब्रह्माच्युतशङ्करप्रभृतिभिर्\nदेवैः सदा वन्दिता ।\nसा मां पातु सरस्वती भगवती\nनिःशेषजाड्यापहा ॥"
    },
    english: {
      title: "Ya Kundendu Tusharahara",
      text: "Ya Kundhendu Tushara Hara Dhavala\nYa Shubhra Vastravrta |\nYa Vina Vara Danda Manditakara\nYa Shveta Padmasana ||\nYa Brahma Achyuta Shankara Prabhrtibhir\nDevai Sada Vandita |\nSa Mam Patu Saraswati Bhagavati\nNishesha Jadyapaha ||"
    },
    meaning: {
      odia: "",
      sanskrit: "कुंद-पुष्प जैसी श्वेत, वीणा-धारिणी, श्वेत-कमल पर विराजमान — वह समस्त जड़ता हरने वाली सरस्वती मेरी रक्षा करें।",
      english: "White as kunda flower and moon, adorned with the veena, seated on a white lotus — may that Saraswati, destroyer of all dullness, protect me."
    },
    benefits: "Bestows knowledge, clear speech, removes ignorance."
  },

  {
    id: "gurur-brahma",
    deity: "Guru / Dakshinamurti",
    tags: ["guru", "teacher", "knowledge"],
    repetitions: "3",
    timing: "Before beginning any learning, in Guru's presence",
    status: "full",
    odia: {
      title: "ଗୁରୁ ବ୍ରହ୍ମ",
      text: "ଗୁରୁର୍ ବ୍ରହ୍ମା ଗୁରୁର୍ ବିଷ୍ଣୁଃ\nଗୁରୁର୍ ଦେବୋ ମ‌ହେଶ୍ୱରଃ ।\nଗୁରୁଃ ସାକ୍ଷାତ୍ ପ‌ର‌ବ୍ରହ୍ମ\nତସ୍ମୈ ଶ୍ରୀ ଗୁରବେ ନ‌ମଃ ॥"
    },
    sanskrit: {
      title: "गुरुर्ब्रह्मा",
      text: "गुरुर्ब्रह्मा गुरुर्विष्णुः\nगुरुर्देवो महेश्वरः ।\nगुरुः साक्षात् परब्रह्म\nतस्मै श्री गुरवे नमः ॥"
    },
    english: {
      title: "Gurur Brahma",
      text: "Gurur Brahma Gurur Vishnu\nGurur Devo Maheshvarah |\nGuruh Sakshat Parabrahma\nTasmai Shri Gurave Namah ||"
    },
    meaning: {
      odia: "ଗୁରୁ ହିଁ ବ୍ରହ୍ମା, ବିଷ୍ଣୁ ଓ ମ‌ହେଶ୍ୱର। ଗୁରୁ ସାକ୍ଷାତ୍ ପ‌ର‌ବ୍ରହ୍ମ। ସେ ଶ୍ରୀ ଗୁରୁ‌ଙ୍କୁ ନ‌ମ‌ସ୍କାର।",
      sanskrit: "गुरु ही ब्रह्मा, विष्णु और महेश्वर हैं। गुरु साक्षात् परब्रह्म हैं। उन श्री गुरु को नमस्कार।",
      english: "The Guru is Brahma, Vishnu, Maheshvara. The Guru is the very Supreme Brahman. Salutations to that Sri Guru."
    },
    benefits: "Reverence for the teacher, opening of wisdom, spiritual grace."
  },

  {
    id: "manojavam",
    deity: "Hanuman",
    tags: ["hanuman", "strength", "protection"],
    repetitions: "3",
    timing: "Morning, Tuesday, Saturday",
    status: "full",
    odia: {
      title: "ମନୋଜବଂ ମାରୁତ ତୁଲ୍ୟ ବେଗଂ",
      text: "ମ‌ନୋ‌ଜ‌ବଂ ମାରୁ‌ତ‌ତୁ‌ଲ‌ୟ ବେ‌ଗଂ\nଜି‌ତେ‌ନ‌ଦ‌ରି‌ୟଂ ବୁ‌ଦ‌ଧି‌ମ‌ତାଂ ବ‌ରି‌ଷ‌ଠ‌ମ ।\nବା‌ତା‌ତ‌ମ‌ଜଂ ବା‌ନ‌ର‌ୟୂ‌ଥ‌ମୁ‌ଖ‌ୟଂ\nଶ୍ରୀ"    },
    sanskrit: {
      title: "मनोजवं मारुततुल्यवेगम्",
      text: "मनोजवं मारुततुल्यवेगं\nजितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं\nश्रीरामदूतं शरणं प्रपद्ये ॥"
    },
    english: {
      title: "Manojavam Marutatulyavegam",
      text: "Manojavam Marutatulya Vegam\nJitendriyam Buddhimatam Varishtam |\nVata Atmajam Vanarayutha Mukhyam\nSri Rama Dutam Sharanam Prapadye ||"
    },
    meaning: {
      odia: "",
      sanskrit: "मन की तरह तेज, पवन-पुत्र, इंद्रिय-विजेता, बुद्धिमानों में श्रेष्ठ, श्रीराम के दूत — उनकी शरण लेता हूँ।",
      english: "Swift as the mind, son of the Wind, master of the senses, wisest among the wise — I take refuge in the messenger of Sri Rama."
    },
    benefits: "Strength, swiftness of mind, sense-control, divine protection."
  },

  {
    id: "sarve-bhavantu-sukhinah",
    deity: "Universal",
    tags: ["peace", "universal", "shanti"],
    repetitions: "3",
    timing: "Morning, evening, after meditation",
    status: "full",
    odia: {
      title: "ସର୍ବେ ଭବନ୍ତୁ ସୁଖିନଃ",
      text: "ଓଁ ସ                                "
    },
    sanskrit: {
      title: "सर्वे भवन्तु सुखिनः",
      text: "ॐ सर्वे भवन्तु सुखिनः\nसर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु\nमा कश्चिद् दुःखभाग् भवेत् ॥"
    },
    english: {
      title: "Sarve Bhavantu Sukhinah",
      text: "Om Sarve Bhavantu Sukhinah\nSarve Santu Niramayah |\nSarve Bhadrani Pashyantu\nMa Kashchid Duhkha Bhag Bhavet ||"
    },
    meaning: {
      odia: "",
      sanskrit: "सभी सुखी हों, सभी निरोगी हों, सभी कल्याण देखें, कोई दुःख का भागी न हो।",
      english: "May all beings be happy; may all be healthy; may all see auspiciousness; may no one suffer."
    },
    benefits: "Universal peace, compassion, positive energy.",
    featured: true, morning: true, evening: true
  },

  {
    id: "om-shanti-shanti",
    deity: "Universal",
    tags: ["peace", "shanti", "evening"],
    repetitions: "3",
    timing: "Morning, evening, after prayer",
    status: "full",
    odia: {
      title: "ଓଁ ଶାନ୍ତି ଶାନ୍ତି ଶାନ୍ତି",
      text: "ଓଁ ଶ                                "
    },
    sanskrit: {
      title: "ॐ शान्तिः शान्तिः शान्तिः",
      text: "ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः\nपृथिवी शान्तिरापः शान्तिः ।\nओषधयः शान्तिर्वनस्पतयः शान्तिः\nविश्वेदेवाः शान्तिर्ब्रह्म शान्तिः ।\nसर्वं शान्तिः शान्तिरेव शान्तिः\nसा मा शान्तिरेधि ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Om Shanti Shanti Shanti",
      text: "Om — peace in the heavens, peace in the sky, peace on earth, peace in the waters, peace in the plants.\nMay all gods bring peace, may Brahman bring peace.\nMay that peace come to me.\nOm Shanti Shanti Shanti."
    },
    meaning: {
      odia: "",
      sanskrit: "संपूर्ण सृष्टि में सब ओर शांति हो। वह शांति मुझमें प्रकट हो।",
      english: "Peace throughout all creation — sky, earth, water, plants. May that universal peace manifest within me."
    },
    benefits: "Inner peace, harmony, end of all disturbances.",
    evening: true
  },

  {
    id: "om-saha-navavatu",
    deity: "Universal / Guru",
    tags: ["peace", "study", "universal"],
    repetitions: "3",
    timing: "Before study, before meal, after prayer",
    status: "full",
    odia: {
      title: "ଓଁ ସହ ନାବବତୁ",
      text: "ଓଁ ସ                                "
    },
    sanskrit: {
      title: "ॐ सह नाव्वतु",
      text: "ॐ सह नाव्वतु\nसह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्वि नाव् अधीतमस्तु\nमा विद्विषावहै ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Om Saha Navavatu",
      text: "Om Saha Navavatu\nSaha Nau Bhunaktu |\nSaha Viryam Karavavahai\nTejasvi Nav Adhitam Astu\nMa Vidvisavahai |\nOm Shanti Shanti Shanti ||"
    },
    meaning: {
      odia: "",
      sanskrit: "हम दोनों (गुरु-शिष्य) साथ सुरक्षित हों, साथ भोजन करें, साथ वीर्य अर्जित करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें।",
      english: "May we both (teacher and student) be protected together, nourished together. May we work together with great energy. May our study be luminous. May we never hate each other."
    },
    benefits: "Harmony between teacher and student, fruitful learning."
  },

  {
    id: "deepa-jyoti-parabrahma",
    deity: "Universal / Agni",
    tags: ["evening", "lamp", "prayer"],
    repetitions: "1",
    timing: "Evening lamp-lighting (Sandhya Deepa)",
    status: "full",
    odia: {
      title: "ଦୀପ ଜ୍ୟୋତି ପରବ୍ରହ୍ମ",
      text: "ଦ                                "
    },
    sanskrit: {
      title: "दीप ज्योति परब्रह्म",
      text: "दीपज्योति परब्रह्म\nदीपज्योतिर्जनार्दनः ।\nदीपो हरतु मे पापं\nदीपज्योतिर्नमोऽस्तु ते ॥"
    },
    english: {
      title: "Deepa Jyoti Parabrahma",
      text: "Deepajyoti Parabrahma\nDeepajyotir Janardanah |\nDeepam Harastu Me Papam\nDeepajyotir Namo Stu Te ||"
    },
    meaning: {
      odia: "",
      sanskrit: "दीपज्योति ही परब्रह्म है, दीपज्योति ही जनार्दन है। दीप मेरे पाप हरे। दीपज्योति को नमस्कार।",
      english: "The lamp's light is Para-Brahman, it is Janardana. May the lamp remove my sins. Salutations to the lamp's divine light."
    },
    benefits: "Purification, dispels darkness and ignorance, evening sanctity.",
    evening: true
  },

  {
    id: "asato-ma-sadgamaya",
    deity: "Universal / Brahman",
    tags: ["peace", "universal", "shanti"],
    repetitions: "3",
    timing: "Morning, evening, after meditation",
    status: "full",
    odia: {
      title: "ଅସତୋ ମା ସଦ୍ ଗମୟ",
      text: "ଓଁ ଅ                               "
    },
    sanskrit: {
      title: "असतो मा सद्गमय",
      text: "ॐ असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Asato Ma Sadgamaya",
      text: "Om Asato Ma Sadgamaya |\nTamaso Ma Jyotirgamaya |\nMrityor Ma Amritam Gamaya |\nOm Shanti Shanti Shanti ||"
    },
    meaning: {
      odia: "",
      sanskrit: "असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर, मृत्यु से अमरता की ओर ले जाओ।",
      english: "Lead me from the unreal to the Real, from darkness to Light, from death to Immortality. Om Peace Peace Peace."
    },
    benefits: "Spiritual clarity, removal of illusion, guidance toward truth and liberation."
  },

  {
    id: "karacharana-kritam",
    deity: "Universal",
    tags: ["sleep", "evening", "forgiveness"],
    repetitions: "1",
    timing: "Before sleep",
    status: "full",
    odia: {
      title: "କର ଚରଣ କ୍ଷମା ଶ୍ଳୋକ",
      text: "କ                                "
    },
    sanskrit: {
      title: "करचरण कृतं पापम्",
      text: "करचरणकृतं वाक् कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम् ।\nविहितमविहितं वा सर्वमेतत् क्षमस्व\nजय जय करुणाब्धे श्री महादेव शम्भो ॥"
    },
    english: {
      title: "Karacharana Kritam (Bedtime Forgiveness Prayer)",
      text: "Karacharanakritam Vak Kayajam Karmajam Va\nShravananayanajam Va Manasam Vapa Radham |\nVihitamavihitam Va Sarvametat Kshamasva\nJaya Jaya Karunaabdhe Shri Mahadeva Shambho ||"
    },
    meaning: {
      odia: "",
      sanskrit: "हाथ, पैर, वाणी, शरीर, कर्म, श्रवण, नेत्र, मन — जो भी जाने-अनजाने पाप हुए, सब क्षमा करें। हे करुणा-सागर महादेव शम्भो, जय जय।",
      english: "Whatever sins I have committed through hands, feet, speech, body, actions, hearing, eyes, or mind — knowingly or unknowingly — forgive them all. Hail, O ocean of compassion, Mahadeva Shambho!"
    },
    benefits: "Forgiveness of daily transgressions, clean conscience, peaceful sleep.",
    evening: true
  },

  {
    id: "hare-krishna-mahamantra",
    deity: "Krishna / Vishnu",
    tags: ["krishna", "bhakti", "liberation"],
    repetitions: "108 / 1008",
    timing: "Any time, especially morning and evening",
    status: "full",
    odia: {
      title: "ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର",
      text: "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ\nକୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ ।\nହରେ ରାମ ହରେ ରାମ\nରାମ ରାମ ହରେ ହରେ ॥"
    },
    sanskrit: {
      title: "हरे कृष्ण महामन्त्र",
      text: "हरे कृष्ण हरे कृष्ण\nकृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम\nराम राम हरे हरे ॥"
    },
    english: {
      title: "Hare Krishna Mahamantra",
      text: "Hare Krishna Hare Krishna\nKrishna Krishna Hare Hare |\nHare Rama Hare Rama\nRama Rama Hare Hare ||"
    },
    meaning: {
      odia: "",
      sanskrit: "हरे (भगवान की शक्ति), कृष्ण (सर्वाकर्षक), राम (आनंदस्वरूप) — इनके नामों का जप मुक्ति का मार्ग है।",
      english: "Hare (the divine energy), Krishna (the all-attractive), Rama (the reservoir of joy) — chanting these names is the path to liberation in this age."
    },
    benefits: "Liberation, joy, purification of heart, union with the divine.",
    morning: true, evening: true
  },

  {
    id: "rama-rameti",
    deity: "Rama",
    tags: ["rama", "liberation", "nama"],
    repetitions: "3 / 108",
    timing: "Any time — especially powerful",
    status: "full",
    odia: {
      title: "ରାମ ରାମେତି",
      text: "ର                                "
    },
    sanskrit: {
      title: "राम रामेति",
      text: "राम रामेति रामेति\nरमे रामे मनोरमे ।\nसहस्रनाम तत्तुल्यं\nरामनाम वरानने ॥"
    },
    english: {
      title: "Rama Rameti",
      text: "Rama Rameti Rameti\nRame Rame Manorame |\nSahasranama Tattulyam\nRamanama Varanane ||"
    },
    meaning: {
      odia: "",
      sanskrit: "'राम राम राम' — मनोरम राम में मेरा मन रमता है। यह एक नाम सहस्र नामों के तुल्य है।",
      english: "Chanting 'Rama Rama Rama', my mind delights in Rama the beautiful. This one name equals the Vishnu Sahasranama."
    },
    benefits: "Equal in merit to Vishnu Sahasranama, purification, liberation.",
    morning: true
  },

  {
    id: "lokah-samastah",
    deity: "Universal",
    tags: ["peace", "universal", "shanti", "yoga"],
    repetitions: "3",
    timing: "End of yoga/meditation/prayer",
    status: "full",
    odia: {
      title: "ଲୋକାଃ ସମସ୍ତାଃ",
      text: "ଲୋକାଃ ସମସ୍ତାଃ ସୁଖିନୋ ଭବନ୍ତୁ ।\nଓଁ ଶାନ୍ତଃ ଶାନ୍ତଃ ଶାନ୍ତଃ ॥"
    },
    sanskrit: {
      title: "लोकाः समस्ताः सुखिनो भवन्तु",
      text: "लोकाः समस्ताः सुखिनो भवन्तु ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Lokah Samastah Sukhino Bhavantu",
      text: "Lokah Samastah Sukhino Bhavantu |\nOm Shanti Shanti Shanti ||"
    },
    meaning: {
      odia: "ସମସ୍ତ ଲୋକ ସୁଖୀ ହୁଅନ୍ତୁ। ଓଁ ଶାନ୍ତି।",
      sanskrit: "सभी लोक/प्राणी सुखी हों। ॐ शान्ति।",
      english: "May all the worlds and beings be happy. Om Peace Peace Peace."
    },
    benefits: "Universal goodwill, compassion, peaceful closure of any practice."
  },

  /* ── New full entries ── */

  {
    id: "brahma-murari",
    deity: "Brahma / Vishnu / Shiva / Navagraha",
    tags: ["morning", "daily", "universal", "navagraha"],
    repetitions: "1",
    timing: "Morning, upon waking",
    status: "full",
    odia: {
      title: "ବ୍ରହ୍ମା ମୁରାରିସ୍ତ୍ରିପୁରାନ୍ତକାରୀ",
      text: "ବ୍ରହ୍ମା ମୁରାରିସ୍ତ୍ରିପୁରାନ୍ତକାରୀ\nଭାନୁଃ ଶଶୀ ଭୂମିସୁତୋ ବୁଧଶ୍ଚ।\nଗୁରୁଶ୍ଚ ଶୁକ୍ରଃ ଶନିରାହୁକେତବଃ\nକୁର୍ବନ୍ତୁ ସର୍ବେ ମମ ସୁପ୍ରଭାତମ୍॥"
    },
    sanskrit: {
      title: "ब्रह्मा मुरारिस्त्रिपुरान्तकारी",
      text: "ब्रह्मा मुरारिस्त्रिपुरान्तकारी\nभानुः शशी भूमिसुतो बुधश्च।\nगुरुश्च शुक्रः शनिराहुकेतवः\nकुर्वन्तु सर्वे मम सुप्रभातम्॥"
    },
    english: {
      title: "Brahma Murari Tripurantakari",
      text: "Brahmā Murāris Tripurāntakārī\nBhānuḥ Śaśī Bhūmisuto Budhaśca।\nGuruśca Śukraḥ Śanirāhuketavaḥ\nKurvantu Sarve Mama Suprabhātam॥"
    },
    meaning: {
      odia: "ବ୍ରହ୍ମା, ବିଷ୍ଣୁ, ଶିବ, ସୂର୍ୟ, ଚନ୍ଦ୍ର ଓ ନଵ ଗ୍ରହ — ସଭେ ମୋ ପ୍ରଭାତ ଶୁଭ କରନ୍ତୁ।",
      sanskrit: "ब्रह्मा, विष्णु, शिव, सूर्य, चंद्र और नवग्रह — ये सभी मेरे प्रभात को शुभ बनाएं।",
      english: "May Brahma, Vishnu, Shiva, Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu all bless my morning."
    },
    benefits: "Auspicious morning, blessings of all deities and planets.",
    morning: true
  },

  {
    id: "vasudeva-sutam-devam",
    deity: "Krishna",
    tags: ["krishna", "morning", "liberation"],
    repetitions: "3",
    timing: "Morning or before prayer",
    status: "full",
    odia: {
      title: "ବାସୁଦେବ ସୁତଂ ଦେବଂ",
      text: "ବାସୁଦେବ         "
    },
    sanskrit: {
      title: "वासुदेव सुतं देवम्",
      text: "वासुदेवसुतं देवं\nकंसचाणूरमर्दनम् ।\nदेवकी परमानन्दं\nकृष्णं वन्दे जगद्गुरुम् ॥"
    },
    english: {
      title: "Vasudeva Sutam Devam",
      text: "Vasudeva Sutam Devam\nKamsa Chanura Mardanam |\nDevaki Paramananda\nKrishnam Vande Jagadgurum ||"
    },
    meaning: {
      odia: "",
      sanskrit: "वासुदेव के पुत्र, कंस-चाणूर के संहारक, देवकी के परमानंद — उस जगद्गुरु कृष्ण को वंदन।",
      english: "I salute Krishna, son of Vasudeva, slayer of Kamsa and Chanura, supreme joy of Devaki — the Guru of the universe."
    },
    benefits: "Krishna's blessing, auspicious beginning, liberation."
  },

  {
    id: "karpura-gauram",
    deity: "Shiva",
    tags: ["shiva", "evening", "aarti"],
    repetitions: "1",
    timing: "Evening, during Shiva aarti",
    status: "full",
    odia: {
      title: "କର୍ପୂର ଗୌରଂ",
      text: ""
    },
    sanskrit: {
      title: "कर्पूरगौरं करुणावतारं",
      text: "कर्पूरगौरं करुणावतारं\nसंसारसारं भुजगेन्द्रहारम् ।\nसदावसन्तं हृदयारविन्दे\nभवं भवानीसहितं नमामि ॥"
    },
    english: {
      title: "Karpura Gauram Karunavataram",
      text: "Karpura Gauram Karunavataram\nSamsara Saram Bhujagendra Haram |\nSada Vasantam Hridaya Aravinde\nBhavam Bhavani Sahitam Namami ||"
    },
    meaning: {
      odia: "",
      sanskrit: "कपूर जैसे श्वेत, करुणा के अवतार, सर्पों की माला वाले, संसार-सार — भवानी सहित शिव को नमस्कार।",
      english: "White as camphor, the avatar of compassion, essence of the world, with serpent garland — I bow to Shiva and Bhavani."
    },
    benefits: "Evening blessings, Shiva's grace, purification.",
    evening: true
  },

  {
    id: "shubham-karoti",
    deity: "Universal / Agni",
    tags: ["evening", "lamp", "daily"],
    repetitions: "1",
    timing: "Evening lamp-lighting",
    status: "full",
    odia: {
      title: "ଶୁଭଂ କରୋତି କଲ୍ୟାଣଂ",
      text: ""
    },
    sanskrit: {
      title: "शुभं करोति कल्याणम्",
      text: "शुभं करोति कल्याणम्\nआरोग्यं धनसम्पदाम् ।\nशत्रुबुद्धिविनाशाय\nदीपज्योतिर्नमोऽस्तु ते ॥"
    },
    english: {
      title: "Shubham Karoti Kalyanam",
      text: "Shubham Karoti Kalyanam\nArogyam Dhana Sampadam |\nShatru Buddhi Vinashaya\nDeepajyotir Namo Stu Te ||"
    },
    meaning: {
      odia: "",
      sanskrit: "जो शुभ करे, कल्याण दे, आरोग्य और धन-संपदा दे, शत्रु-बुद्धि का नाश करे — उस दीपज्योति को नमस्कार।",
      english: "O lamp, you bring auspiciousness, good health, wealth, and destroy enemy thinking — salutations to your light."
    },
    benefits: "Evening blessings, prosperity, health, protection.",
    evening: true
  },

  {
    id: "apadam-apahartaram",
    deity: "Rama",
    tags: ["rama", "protection", "evening"],
    repetitions: "3",
    timing: "Morning, evening, in distress",
    status: "full",
    odia: {
      title: "ଆପଦାମ ଅପ‌ହର୍ତାରଂ",
      text: ""
    },
    sanskrit: {
      title: "आपदामपहर्तारम्",
      text: "आपदामपहर्तारं दातारं सर्वसम्पदाम् ।\nलोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम् ॥"
    },
    english: {
      title: "Apadam Apahartaram",
      text: "Apadam Apahartaram Dataram Sarva Sampadam |\nLokaabhiramam Sri Ramam Bhuyo Bhuyo Namamyaham ||"
    },
    meaning: {
      odia: "",
      sanskrit: "विपदाओं को हरने वाले, सर्व-संपदा देने वाले, लोकाभिराम श्रीराम को बार-बार नमस्कार।",
      english: "I bow again and again to Sri Rama — remover of misfortunes, giver of all wealth, delight of the worlds."
    },
    benefits: "Removal of calamities, grant of all prosperity.",
    morning: true, evening: true
  },

  {
    id: "sarvesham-svastir",
    deity: "Universal",
    tags: ["peace", "universal", "shanti"],
    repetitions: "3",
    timing: "Morning, evening, after meditation",
    status: "full",
    odia: {
      title: "ସର୍ବେଷାଂ ସ୍ୱସ୍ତିର୍ ଭବତୁ",
      text: ""
    },
    sanskrit: {
      title: "सर्वेषां स्वस्तिर्भवतु",
      text: "सर्वेषां स्वस्तिर्भवतु ।\nसर्वेषां शान्तिर्भवतु ।\nसर्वेषां पूर्णं भवतु ।\nसर्वेषां मङ्गलं भवतु ॥"
    },
    english: {
      title: "Sarvesham Svastir Bhavatu",
      text: "Sarvesham Svastir Bhavatu |\nSarvesham Shantir Bhavatu |\nSarvesham Purnam Bhavatu |\nSarvesham Mangalam Bhavatu ||"
    },
    meaning: {
      odia: "",
      sanskrit: "सभी का स्वास्थ्य हो, शांति हो, पूर्णता हो, मंगल हो।",
      english: "May all be well. May all be peaceful. May all be full. May all be auspicious."
    },
    benefits: "Universal wellbeing, blessings for all, positive energy.",
    featured: true, morning: true, evening: true
  },

  {
    id: "purnamadah",
    deity: "Universal / Brahman",
    tags: ["peace", "universal", "shanti", "vedanta"],
    repetitions: "3",
    timing: "Morning, before or after meditation",
    status: "full",
    odia: {
      title: "",
      text: "ଓଁ ପ      "
    },
    sanskrit: {
      title: "पूर्णमदः पूर्णमिदम्",
      text: "ॐ पूर्णमदः पूर्णमिदम्\nपूर्णात् पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय\nपूर्णमेवावशिष्यते ॥\nॐ शान्तिः शान्तिः शान्तिः"
    },
    english: {
      title: "Purnamadah Purnamidam",
      text: "Om Purnamadah Purnamidam\nPurnat Purnam Udachyate |\nPurnasya Purnam Adaya\nPurnam Evavashishyate ||\nOm Shanti Shanti Shanti"
    },
    meaning: {
      odia: "",
      sanskrit: "वह पूर्ण है, यह भी पूर्ण है। पूर्ण से पूर्ण निकालने पर भी पूर्ण ही शेष रहता है।",
      english: "That is whole, this is whole. From wholeness comes wholeness. Even after taking wholeness from wholeness, wholeness alone remains."
    },
    benefits: "Understanding of wholeness, removal of sense of lack, peace.",
    morning: true
  },

  {
    id: "om-dyauh-shantih",
    deity: "Universal / Brahman",
    tags: ["peace", "universal", "shanti"],
    repetitions: "1",
    timing: "After prayer, end of meditation",
    status: "full",
    odia: {
      title: "ଓଁ ଦ୍ୟୌଃ ଶାନ୍ତଃ",
      text: ""
    },
    sanskrit: {
      title: "ॐ द्यौः शान्तिः",
      text: "ॐ द्यौः शान्तिरन्तरिक्षम् शान्तिः\nपृथ्वी शान्तिरापः शान्तिः ।\nओषधयः शान्तिः वनस्पतयः शान्तिः\nविश्वे देवाः शान्तिः ब्रह्म शान्तिः ।\nसर्वं शान्तिः शान्तिरेव शान्तिः\nसा मा शान्तिरेधि ॥\nॐ शान्तिः शान्तिः शान्तिः"
    },
    english: {
      title: "Om Dyauh Shantih (Complete Shanti Path)",
      text: "Om — peace in sky, peace in space, peace on earth, peace in waters.\nPeace in plants, peace in trees, peace in all gods, peace in Brahman.\nMay all peace be peace. May that peace come to me.\nOm Shanti Shanti Shanti."
    },
    meaning: {
      odia: "",
      sanskrit: "आकाश से लेकर पृथ्वी तक, समस्त सृष्टि में शांति हो। वह शांति मुझमें स्थापित हो।",
      english: "Peace pervades from sky to earth, throughout all creation. May that universal peace be established in me."
    },
    benefits: "Complete peace of mind, harmony with all creation, spiritual calm.",
    evening: true
  },

  /* ── pratah-smarana-stotram ── */
  {
    id: "pratah-smarana-stotram",
    deity: "Atman / Brahman",
    tags: ["morning", "vedanta", "universal", "advaita"],
    repetitions: "1",
    timing: "Morning, upon waking, before rising",
    status: "full",
    odia: {
      title: "ପ୍ରାତଃ ସ୍ମରଣ ସ୍ତୋତ୍ରମ୍ (ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟ)",
      text: "ପ୍ରାତଃ ସ୍ମରାମି ହୃଦି ସଂସ୍ଫୁରଦାତ୍ମତତ୍ତ୍ୱଂ\nସଚ୍ଚିତ୍ସୁଖଂ ପରମହଂସଗତିଂ ତୁରୀୟମ୍।\nୟତ୍ସ୍ୱପ୍ନଜାଗରସୁଷୁପ୍ତମବୈତି ନିତ୍ୟଂ\nତଦ୍ବ୍ରହ୍ମ ନିଷ୍କଳମହଂ ନ ଚ ଭୂତସଂଘଃ॥\n\nପ୍ରାତର୍ ଭଜାମି ମନସା ବଚସାମଗମ୍ୟଂ\nବାଚୋ ବିଭାନ୍ତି ନିଖିଲା ୟଦନୁଗ୍ରହେଣ।\nୟନ୍ ନେତି ନେତି ବଚନୈର୍ ନିଗମା ଅବୋଚନ୍\nତଂ ଦେବଦେବମଜମଚ୍ୟୁତମାହୁରଗ୍ର୍ୟମ୍॥\n\nପ୍ରାତର୍ ନମାମି ତମସଃ ପରମର୍କବର୍ଣ୍ଣଂ\nପୂର୍ଣ୍ଣଂ ସନାତନପଦଂ ପୁରୁଷୋତ୍ତମାଖ୍ୟମ୍।\nୟସ୍ମିନ୍ ନ ଜାୟତ ବୟଂ ଜନ୍ମ ପ୍ରୟାତି ନ\nତଂ ବ୍ରହ୍ମ ନିଷ୍କଳମ ଅଜ ଅଚ୍ୟୁତଂ ନମ॥"
    },
    sanskrit: {
      title: "प्रातःस्मरण स्तोत्रम् (आदि शंकराचार्य)",
      text: "प्रातः स्मरामि हृदि संस्फुरदात्मतत्त्वं\nसच्चित्सुखं परमहंसगतिं तुरीयम्।\nयत्स्वप्नजागरसुषुप्तमवैति नित्यं\nतद्ब्रह्म निष्कलमहं न च भूतसङ्घः॥\n\nप्रातर्भजामि मनसा वचसामगम्यं\nवाचो विभान्ति निखिला यदनुग्रहेण।\nयन्नेति नेति वचनैर्निगमा अवोचन्\nतं देवदेवमजमच्युतमाहुरग्र्यम्॥\n\nप्रातर्नमामि तमसः परमर्कवर्णं\nपूर्णं सनातनपदं पुरुषोत्तमाख्यम्।\nयस्मिन्नदः श्वसति जीवति यत्र जन्म\nतं ब्रह्म निष्कलमजं अच्युतं नमामि॥"
    },
    english: {
      title: "Pratah Smarana Stotram (Adi Shankaracharya)",
      text: "Prātaḥ smarāmi hṛdi saṁsphurad-ātma-tattvaṁ\nSaccit-sukhaṁ paramahaṁsa-gatiṁ turīyam।\nYat svapna-jāgara-suṣuptam avaiti nityaṁ\nTad brahma niṣkalam ahaṁ na ca bhūta-saṅghaḥ॥\n\nPrātar bhajāmi manasā vacasām agamyaṁ\nVāco vibhānti nikhilā yad-anugraheṇa।\nYan neti neti vacanair nigamā avochan\nTaṁ deva-devam ajam achyutam āhur agryam॥\n\nPrātar namāmi tamasaḥ param arka-varṇaṁ\nPūrṇaṁ sanātana-padaṁ puruṣottamākhyam।\nYasmin na jāyata idaṁ na prayāti nāśaṁ\nTaṁ brahma niṣkalam ajaṁ achyutaṁ namāmi॥"
    },
    meaning: {
      odia: "ପ୍ରାତଃ ହୃଦୟରେ ସ୍ଫୁରୁଥିବା ଆତ୍ମ ତତ୍ତ୍ୱ — ସଚ୍ଚିଦାନନ୍ଦ, ତୁରୀୟ ଅବସ୍ଥା — ତାକୁ ସ୍ମରଣ, ଭଜନ ଓ ନମନ କରୁଛି। ଯାହା ସ୍ୱପ୍ନ, ଜାଗ୍ରତ ଓ ସୁଷୁପ୍ତ ଅବସ୍ଥା ସ'ବୁ ଦ୍ରଷ୍ଟା, ଯାହାକୁ ବ୍ରହ୍ମ ବୋଲାଯାଏ — ତାହା ହିଁ ଆମ ନିଷ୍କଳ ଅଚ୍ୟୁତ ସ୍ୱରୂପ।",
      sanskrit: "प्रातःकाल हृदय में स्फुरित आत्म-तत्त्व — सच्चिदानंद, तुरीय — का स्मरण, भजन और वंदन। जो स्वप्न-जागर-सुषुप्ति का साक्षी, वेदों में 'नेति नेति' से जिसका वर्णन, वही निष्कल ब्रह्म, अज, अच्युत — उसे प्रणाम।",
      english: "At dawn I remember, worship, and salute the Self — pure Awareness-Bliss-Consciousness, the fourth state beyond waking, dream, and deep sleep. That which the Vedas describe as 'not this, not this', the birthless, imperishable — that very Brahman am I."
    },
    benefits: "Establishes awareness of one's true nature at the very start of day; wisdom, liberation, peace.",
    morning: true,
    verses: 3
  },

  /* ── navagraha-smarana ── */
  {
    id: "navagraha-smarana",
    deity: "Navagraha",
    tags: ["morning", "navagraha", "planets", "daily"],
    repetitions: "1",
    timing: "Morning, upon waking",
    status: "full",
    odia: {
      title: "ନବଗ୍ରହ ସ୍ମରଣ",
      text: "ବ୍ରହ୍ମା ମୁରାରିସ୍ତ୍ରିପୁରାନ୍ତକାରୀ\nଭାନୁଃ ଶଶୀ ଭୂମିସୁତୋ ବୁଧଶ୍ଚ।\nଗୁରୁଶ୍ଚ ଶୁକ୍ରଃ ଶନିରାହୁକେତବଃ\nକୁର୍ବନ୍ତୁ ସର୍ବେ ମମ ସୁପ୍ରଭାତମ୍॥"
    },
    sanskrit: {
      title: "नवग्रह स्मरण",
      text: "ब्रह्मा मुरारिस्त्रिपुरान्तकारी\nभानुः शशी भूमिसुतो बुधश्च।\nगुरुश्च शुक्रः शनिराहुकेतवः\nकुर्वन्तु सर्वे मम सुप्रभातम्॥"
    },
    english: {
      title: "Navagraha Smarana",
      text: "Brahmā Murāris Tripurāntakārī\nBhānuḥ Śaśī Bhūmisuto Budhaśca।\nGuruśca Śukraḥ Śanirāhu-ketavaḥ\nKurvantu Sarve Mama Suprabhātam॥"
    },
    meaning: {
      odia: "ବ୍ରହ୍ମା, ବିଷ୍ଣୁ, ଶିବ ସହ ସୂର୍ୟ, ଚନ୍ଦ୍ର, ମଙ୍ଗଳ, ବୁଧ, ଗୁରୁ, ଶୁକ୍ର, ଶନି, ରାହୁ ଓ କେତୁ — ନବ ଗ୍ରହ ସଭେ ମୋ ପ୍ରଭାତ ଶୁଭ କରନ୍ତୁ।",
      sanskrit: "ब्रह्मा, विष्णु, शिव और सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु — नवग्रह मेरे प्रभात को शुभ बनाएं।",
      english: "May Brahma, Vishnu, Shiva, and the nine planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — all make my morning auspicious."
    },
    benefits: "Navagraha blessings, auspicious day-start, removal of planetary afflictions.",
    morning: true
  },

  /* ── rama-nama-smarana ── */
  {
    id: "rama-nama-smarana",
    deity: "Rama",
    tags: ["rama", "morning", "liberation", "nama"],
    repetitions: "3 / 108",
    timing: "Morning, any time of day",
    status: "full",
    odia: {
      title: "ରାମ ନାମ ସ୍ମରଣ",
      text: "ରାମ ରାମେତି ରାମେତି\nରମେ ରାମେ ମନୋରମେ।\nସହସ୍ରନାମ ତତ୍ତୁଲ୍ୟଂ\nରାମନାମ ବରାନନେ॥"
    },
    sanskrit: {
      title: "राम नाम स्मरण",
      text: "राम रामेति रामेति\nरमे रामे मनोरमे।\nसहस्रनाम तत्तुल्यं\nरामनाम वरानने॥"
    },
    english: {
      title: "Rama Nama Smarana",
      text: "Rāma Rāmeti Rāmeti\nRame Rāme Manorame।\nSahasranāma tat-tulyaṁ\nRāma-nāma Varānane॥"
    },
    meaning: {
      odia: "'ରାମ ରାମ ରାମ' — ମନୋରମ ରାମଙ୍କ ନାମରେ ମୋ ମନ ରମୁଛି। ଏ ଏକ ନାମ ସହସ୍ର ନାମ ସହ ତୁଲ୍ୟ।",
      sanskrit: "'राम राम राम' — मनोरम राम में मेरा मन रमता है। यह एक राम-नाम सहस्र नामों के तुल्य है।",
      english: "Chanting 'Rama Rama Rama', my mind delights in the beautiful Rama. This one Name of Rama is equal to the thousand names of Vishnu."
    },
    benefits: "Equal in merit to Vishnu Sahasranama, purification of mind, liberation, auspicious morning.",
    morning: true
  },

  /* ── gajananam-bhutaganadi ── */
  {
    id: "gajananam-bhutaganadi",
    deity: "Ganesha",
    tags: ["ganesha", "morning", "obstacles", "blessing"],
    repetitions: "3 / 11",
    timing: "Morning, before any new work",
    status: "full",
    odia: {
      title: "ଗଜାନନଂ ଭୂତଗଣାଦି ସେବିତଂ",
      text: "ଗଜାନନଂ ଭୂତଗଣାଦି ସେବିତଂ\nକପିତ୍ଥଜମ୍ବୂଫଲଚାରୁଭକ୍ଷଣମ୍।\nଉମାସୁତଂ ଶୋକବିନାଶକାରକଂ\nନମାମି ବିଘ୍ନେଶ୍ୱରପାଦପଙ୍କଜମ୍॥"
    },
    sanskrit: {
      title: "गजाननं भूतगणादि सेवितम्",
      text: "गजाननं भूतगणादि सेवितं\nकपित्थजम्बूफलचारुभक्षणम्।\nउमासुतं शोकविनाशकारकं\nनमामि विघ्नेश्वरपादपङ्कजम्॥"
    },
    english: {
      title: "Gajananam Bhutaganadi Sevitam",
      text: "Gajānanaṁ Bhūtagaṇādi Sevitaṁ\nKapittha-Jambūphala-Cāru-Bhakṣaṇam।\nUmāsutaṁ Śoka-Vināśa-Kārakaṁ\nNamāmi Vighneśvara-Pāda-Paṅkajam॥"
    },
    meaning: {
      odia: "ଭୂତଗଣ ଦ୍ୱାରା ସେବିତ ଗଜାନନ, ଫଳ ପ୍ରିୟ ଉମାନନ୍ଦନ — ଶୋକ ବିନାଶ କରୁଥିବା ବିଘ୍ନେଶ୍ୱରଙ୍କ ପାଦ ପଦ୍ମ ନମାମି।",
      sanskrit: "भूतगणों द्वारा सेवित गजानन, फलप्रिय उमापुत्र — शोकविनाशक विघ्नेश्वर के चरण-कमल को नमस्कार।",
      english: "I bow to the lotus feet of Ganesha — the elephant-faced, served by the hosts of spirits, dear to fruits, son of Uma, destroyer of sorrow."
    },
    benefits: "Removes sorrow and obstacles, blessings of Ganesha, auspicious beginning.",
    morning: true
  },

  /* ── ajam-nirvikalpam ── */
  {
    id: "ajam-nirvikalpam",
    deity: "Ganesha / Para-Brahman",
    tags: ["ganesha", "meditation", "vedanta", "advaita"],
    repetitions: "3",
    timing: "Morning meditation, before Ganesha worship",
    status: "full",
    odia: {
      title: "ଅଜଂ ନିର୍ବିକଳ୍ପଂ",
      text: "ଅଜଂ ନିର୍ବିକଳ୍ପଂ ନିରାକାରମେକଂ\nନିରାନନ୍ଦମାନନ୍ଦମଦ୍ୱୈତପୂର୍ଣ୍ଣମ୍।\nପରଂ ନିର୍ଗୁଣଂ ନିର୍ବିଶେଷଂ ନିରୀହଂ\nପରବ୍ରହ୍ମରୂପଂ ଗଣେଶଂ ଭଜେମ॥"
    },
    sanskrit: {
      title: "अजं निर्विकल्पं",
      text: "अजं निर्विकल्पं निराकारमेकं\nनिरानन्दमानन्दमद्वैतपूर्णम्।\nपरं निर्गुणं निर्विशेषं निरीहं\nपरब्रह्मरूपं गणेशं भजेम॥"
    },
    english: {
      title: "Ajam Nirvikalpam",
      text: "Ajaṁ Nirvikalpaṁ Nirākāram Ekaṁ\nNirānandam Ānandam Advaita-Pūrṇam।\nParaṁ Nirguṇaṁ Nirviśeṣaṁ Nirīhaṁ\nParabrahma-Rūpaṁ Gaṇeśaṁ Bhajem॥"
    },
    meaning: {
      odia: "ଅଜ, ନିର୍ବିକଳ୍ପ, ନିରାକାର, ଅଦ୍ୱୈତ ପୂର୍ଣ, ନିର୍ଗୁଣ — ପରବ୍ରହ୍ମ ରୂପ ଗଣେଶଙ୍କ ଭଜନ କରୁ।",
      sanskrit: "जन्मरहित, विकल्परहित, निराकार, आनंदस्वरूप, अद्वैतपूर्ण, निर्गुण — उस परब्रह्मरूप गणेश का भजन करें।",
      english: "We worship Ganesha — the birthless, thought-free, formless, one without second, full of bliss, beyond qualities — the very form of Para-Brahman."
    },
    benefits: "Deep meditation, non-dual awareness, liberation, Ganesha's supreme grace."
  },

  /* ── ganapati-atharvashirsha ── */
  {
    id: "ganapati-atharvashirsha",
    deity: "Ganesha",
    tags: ["ganesha", "major-stotra", "vedic"],
    repetitions: "1 / 3",
    timing: "Morning, during Ganesha puja, Ganesh Chaturthi",
    status: "partial",
    odia: {
      title: "ଗଣପତି ଅଥର୍ବଶୀର୍ଷ (ପ୍ରାରମ୍ଭ)",
      text: "ଓଁ ନମସ୍ତେ ଗଣପତୟେ।\nତ୍ୱମେବ ପ୍ରତ୍ୟକ୍ଷଂ ତତ୍ତ୍ୱମସି।\nତ୍ୱମେବ କେବଳଂ କର୍ତ୍ତାସି।\nତ୍ୱମେବ କେବଳଂ ଧର୍ତ୍ତାସି।\nତ୍ୱମେବ କେବଳଂ ହର୍ତ୍ତାସି।\nତ୍ୱମେବ ସର୍ବଂ ଖଲ୍ୱିଦଂ ବ୍ରହ୍ମାସି।\nତ୍ୱଂ ସାକ୍ଷାଦାତ୍ମାସି ନିତ୍ୟମ୍॥\n\n[ସମ୍ପୂର୍ଣ ଅଥର୍ବଶୀର୍ଷ ଶୀଘ୍ର ଆସୁଛି]"
    },
    sanskrit: {
      title: "गणपति अथर्वशीर्ष (प्रारम्भ)",
      text: "ॐ नमस्ते गणपतये।\nत्वमेव प्रत्यक्षं तत्त्वमसि।\nत्वमेव केवलं कर्ताऽसि।\nत्वमेव केवलं धर्ताऽसि।\nत्वमेव केवलं हर्ताऽसि।\nत्वमेव सर्वं खल्विदं ब्रह्मासि।\nत्वं साक्षादात्मासि नित्यम्॥\n\n[सम्पूर्ण अथर्वशीर्ष एक पृथक् पृष्ठ पर]"
    },
    english: {
      title: "Ganapati Atharvashirsha (Opening)",
      text: "Oṁ Namaste Gaṇapataye।\nTvam Eva Pratyakṣaṁ Tattvam Asi।\nTvam Eva Kevalaṁ Kartā Asi।\nTvam Eva Kevalaṁ Dhartā Asi।\nTvam Eva Kevalaṁ Hartā Asi।\nTvam Eva Sarvaṁ Khalvidaṁ Brahmāsi।\nTvaṁ Sākṣād Ātmāsi Nityam॥\n\n[Full Atharvashirsha — complete page coming soon]"
    },
    meaning: {
      odia: "ତୁ ହିଁ ପ୍ରତ୍ୟକ୍ଷ ତତ୍ତ୍ୱ, ତୁ ହିଁ ଏକ ମାତ୍ର କର୍ତ୍ତା, ଧର୍ତ୍ତା, ହର୍ତ୍ତା। ତୁ ହିଁ ସର୍ବ ବ୍ରହ୍ମ। ତୁ ହିଁ ସାକ୍ଷାତ ଆତ୍ମା।",
      sanskrit: "तुम ही प्रत्यक्ष तत्त्व हो, तुम ही एकमात्र कर्ता, धर्ता, हर्ता। तुम ही सर्व ब्रह्म हो। तुम साक्षात् नित्य आत्मा हो।",
      english: "You alone are the manifest Truth. You alone are the Creator, Sustainer, Destroyer. You are all this, verily Brahman. You are the ever-present Self."
    },
    benefits: "All obstacles removed, supreme Ganesha grace, knowledge and liberation.",
    morning: true,
    verses: 18
  },

  /* ── ganesha-pancharatnam ── */
  {
    id: "ganesha-pancharatnam",
    deity: "Ganesha",
    tags: ["ganesha", "major-stotra", "pancharatna"],
    repetitions: "1",
    timing: "Morning, during Ganesha puja",
    status: "full",
    odia: {
      title: "ଗଣେଶ ପଞ୍ଚରତ୍ନ ସ୍ତୋତ୍ର",
      text: "— ସମ୍ପୂର୍ଣ ଗଣେଶ ପଞ୍ଚରତ୍ନ ଓଡ଼ିଆ ଅନୁବାଦ ଶୀଘ୍ର ଆସୁଛି —"
    },
    sanskrit: {
      title: "गणेश पञ्चरत्न स्तोत्रम्",
      text: "मुदाकरात्तमोदकं सदा विमुक्तिसाधकं\nकलाधरावतंसकं विलासिलोकरक्षकम्।\nअनायकैकनायकं विनाशितेभदैत्यकं\nnताशुभाशुनाशकं नमामि तं विनायकम्॥\n\nनतेतरातिभीकरं नवोदितार्कभास्वरं\nनमत्सुरारिनिर्जरं नताधिकापदुद्धरम्।\nसुरेश्वरं निधीश्वरं गजेश्वरं गणेश्वरं\nमहेश्वरं तमाश्रये परात्परं निरन्तरम्॥\n\nसमस्तलोकशङ्करं निरस्तदैत्यकुञ्जरं\nदरेतरोदरं वरं वरेभवक्त्रमक्षरम्।\nकृपाकरं क्षमाकरं मुदाकरं यशस्करं\nमनस्करं नमस्कृतां नमस्करोमि भास्वरम्॥\n\nअकिञ्चनार्तिमार्जनं चिरन्तनोक्तिभाजनं\nपुरारिपूर्वनन्दनं सुरारिगर्वचर्वणम्।\nप्रपञ्चनाशभीषणं धनञ्जयादिभूषणं\nकपोलदानवारणं भजे पुराणवारणम्॥\n\nनितान्तकान्तदन्तकान्तिमन्तकान्तकात्मजं\nअचिन्त्यरूपमन्तहीनमन्तरायकृन्तनम्।\nहृदन्तरे निरन्तरं वसन्तमेव योगिनां\nतमेवैकदन्तमेव तामसामहं भजे॥"
    },
    english: {
      title: "Ganesha Pancharatnam",
      text: "Mudākarātta-Modakaṁ Sadā Vimukti-Sādhakaṁ\nKalādhara-Avataṁsakaṁ Vilāsi-Loka-Rakṣakam।\nAnāyakaika-Nāyakaṁ Vināśitebha-Daityakaṁ\nNatāśubhāśu-Nāśakaṁ Namāmi Taṁ Vināyakam॥\n\nNatetarāti-Bhīkaraṁ Navoditārka-Bhāsvaraṁ\nNamat-Surāri-Nirjaraṁ Natādhikāpada-Uddharam।\nSureśvaraṁ Nidhīśvaraṁ Gajeśvaraṁ Gaṇeśvaraṁ\nMaheśvaraṁ Tam Āśraye Parātparaṁ Nirantaram॥\n\nSamasta-Loka-Śaṅkaraṁ Nirasta-Daitya-Kuñjaraṁ\nDareta-Rodaraṁ Varaṁ Varebha-Vaktram-Akṣaram।\nKṛpākaraṁ Kṣamākaraṁ Mudākaraṁ Yaśaskaraṁ\nManaskaraṁ Namaskṛtāṁ Namaskaromi Bhāsvaram॥\n\nAkiñcanārti-Mārjanaṁ Cirantano-Ukta-Bhājanaṁ\nPurāri-Pūrva-Nandanaṁ Surāri-Garva-Charvaṇam।\nPrapañca-Nāśa-Bhīṣaṇaṁ Dhanañjayādi-Bhūṣaṇaṁ\nKapola-Dāna-Vāraṇaṁ Bhaje Purāṇa-Vāraṇam॥\n\nNitānta-Kānta-Danta-Kānti-Manta-Kāntakātmajaṁ\nAcintya-Rūpam-Anta-Hīnam-Antarāya-Kṛntanam।\nHṛdantare Nirantaraṁ Vasantam-Eva Yogināṁ\nTam-Eka-Dantam-Eva Tāmasām-Ahaṁ Bhaje॥"
    },
    meaning: {
      odia: "",
      sanskrit: "विनायक को नमस्कार — जो मोदकप्रिय, विमुक्तिदाता, लोकरक्षक, अनायक-नायक, सुरेश्वर, गजेश्वर, शोकनाशक, श्रेष्ठ दन्तधारी, योगियों के हृदय में निरन्तर वासी हैं।",
      english: "Five jewels of praise for Ganesha — the modaka-bearer, liberator, protector, lord of all, remover of distress, brilliant as the rising sun, dispeller of all darkness, the single-tusked one ever dwelling in the hearts of yogis."
    },
    benefits: "Complete Ganesha blessing, removes all obstacles, grants liberation and prosperity.",
    morning: true,
    verses: 5
  },

  /* ── krishna-smarana ── */
  {
    id: "krishna-smarana",
    deity: "Krishna",
    tags: ["krishna", "morning", "evening", "bhakti", "daily"],
    repetitions: "3",
    timing: "Morning, evening, before sleep",
    status: "full",
    odia: {
      title: "କୃଷ୍ଣ ସ୍ମରଣ",
      text: "କୃଷ୍ଣାୟ ବାସୁଦେବାୟ\nହରୟେ ପରମାତ୍ମନେ।\nପ୍ରଣତଃ କ୍ଲେଶନାଶାୟ\nଗୋବିନ୍ଦାୟ ନମୋ ନମଃ॥"
    },
    sanskrit: {
      title: "कृष्ण स्मरण",
      text: "कृष्णाय वासुदेवाय\nहरये परमात्मने।\nप्रणतः क्लेशनाशाय\nगोविन्दाय नमो नमः॥"
    },
    english: {
      title: "Krishna Smarana",
      text: "Kṛṣṇāya Vāsudevāya\nHaraye Paramātmane।\nPraṇataḥ Kleśanāśāya\nGovindāya Namo Namaḥ॥"
    },
    meaning: {
      odia: "କୃଷ୍ଣ, ବାସୁଦେବ, ହରି, ପରମାତ୍ମା — ଶରଣାଗତଙ୍କ କ୍ଲେଶ ନାଶ କରୁଥିବା ଗୋବିନ୍ଦଙ୍କୁ ବାରଂବାର ନମସ୍କାର।",
      sanskrit: "कृष्ण, वासुदेव, हरि, परमात्मा — शरणागत के क्लेशों का नाश करने वाले गोविंद को बार-बार नमस्कार।",
      english: "Salutations again and again to Krishna — Vasudeva, Hari, the Supreme Self — who destroys the sorrows of those who surrender to Him."
    },
    benefits: "Removal of sorrows and obstacles, Krishna's grace, devotion, peaceful sleep.",
    morning: true, evening: true
  },

  /* ── ganesha-ashtottara ── */
  {
    id: "ganesha-ashtottara",
    deity: "Ganesha",
    tags: ["ganesha", "ashtottara", "108-names"],
    repetitions: "1 (all 108 names)",
    timing: "Morning, during Ganesha puja, Ganesh Chaturthi",
    status: "partial",
    odia: {
      title: "ଗଣେଶ ଅଷ୍ଟୋତ୍ତର ଶତନାମାବଳୀ (ପ୍ରଥମ ୧୦ ନାମ)",
      text: "ଓଁ ଗଣେଶାୟ ନମଃ।\nଓଁ ଗଣପତୟେ ନମଃ।\nଓଁ ବିଘ୍ନରାଜାୟ ନମଃ।\nଓଁ ବିନାୟକାୟ ନମଃ।\nଓଁ ଦ୍ୱୈମାତୁରାୟ ନମଃ।\nଓଁ ଦ୍ୱିମୁଖାୟ ନମଃ।\nଓଁ ପ୍ରମୁଖାୟ ନମଃ।\nଓଁ ସୁମୁଖାୟ ନମଃ।\nଓଁ କୃତିନେ ନମଃ।\nଓଁ ସୁପ୍ରଦୀପାୟ ନମଃ॥\n\n[ସଂପୂର୍ଣ ୧୦୮ ନାମ — ପ୍ରତ୍ୟେକ ନାମ ସ'ହ ଏକ ପ୍ରତ୍ୟେକ ପୃଷ୍ଠ ଶୀଘ୍ର ଆସୁଛି]"
    },
    sanskrit: {
      title: "गणेश अष्टोत्तर शतनामावली (प्रथम १० नाम)",
      text: "ॐ गणेशाय नमः।\nॐ गणपतये नमः।\nॐ विघ्नराजाय नमः।\nॐ विनायकाय नमः।\nॐ द्वैमातुराय नमः।\nॐ द्विमुखाय नमः।\nॐ प्रमुखाय नमः।\nॐ सुमुखाय नमः।\nॐ कृतिने नमः।\nॐ सुप्रदीपाय नमः॥\n\n[सम्पूर्ण १०८ नाम — प्रत्येक नाम के साथ अर्थ सहित एक पृथक् पृष्ठ पर]"
    },
    english: {
      title: "Ganesha Ashtottara Shatanamavali (First 10 Names)",
      text: "Oṁ Gaṇeśāya Namaḥ।\nOṁ Gaṇapataye Namaḥ।\nOṁ Vighnarājāya Namaḥ।\nOṁ Vināyakāya Namaḥ।\nOṁ Dvaimāturāya Namaḥ।\nOṁ Dvimukhāya Namaḥ।\nOṁ Pramukhāya Namaḥ।\nOṁ Sumukhāya Namaḥ।\nOṁ Kṛtine Namaḥ।\nOṁ Supradīpāya Namaḥ॥\n\n[Full 108 names — dedicated page with each name and meaning coming soon]"
    },
    meaning: {
      odia: "",
      sanskrit: "गणेश, गणपति, विघ्नराज, विनायक, द्वैमातुर, द्विमुख, प्रमुख, सुमुख, कृतिन्, सुप्रदीप — गणेश के १०८ दिव्य नाम।",
      english: "Salutations to Ganesha by 108 divine names — Ganesha, Ganapati, Lord of Obstacles, Vinayaka, son of two mothers, two-faced, foremost, beautiful-faced, the accomplished one, supremely radiant..."
    },
    benefits: "Chanting all 108 names grants complete Ganesha blessing, removes all obstacles.",
    morning: true
  },

  /* ── shiva-panchakshara-stotram ── */
  {
    id: "shiva-panchakshara-stotram",
    deity: "Shiva",
    tags: ["shiva", "panchakshara", "morning", "sadhana"],
    repetitions: "1 / 3",
    timing: "Morning, during Shiva puja, Maha Shivaratri",
    status: "full",
    odia: {
      title: "ଶିବ ପଞ୍ଚାକ୍ଷର ସ୍ତୋତ୍ରମ୍",
      text: "ନାଗେନ୍ଦ୍ରହାରାୟ ତ୍ରିଲୋଚନାୟ\nଭସ୍ମାଙ୍ଗରାଗାୟ ମହେଶ୍ୱରାୟ।\nନିତ୍ୟାୟ ଶୁଦ୍ଧାୟ ଦିଗମ୍ବରାୟ\nତସ୍ମୈ ନକାରାୟ ନମଃ ଶିବାୟ॥୧॥\n\nମନ୍ଦାକିନୀସଲିଲଚନ୍ଦନଚର୍ଚ୍ଚିତାୟ\nନନ୍ଦୀଶ୍ୱରପ୍ରମଥନାଥମହେଶ୍ୱରାୟ।\nମନ୍ଦାରପୁଷ୍ପବହୁପୁଷ୍ପସୁପୂଜିତାୟ\nତସ୍ମୈ ମକାରାୟ ନମଃ ଶିବାୟ॥୨॥\n\nଶିବାୟ ଗୌରୀବଦନାବ୍ଜବୃନ୍ଦ\nସୂର୍ଯ୍ୟାୟ ଦକ୍ଷାଧ୍ୱରନାଶକାୟ।\nଶ୍ରୀନୀଳକଣ୍ଠାୟ ବୃଷଧ୍ୱଜାୟ\nତସ୍ମୈ ଶିକାରାୟ ନମଃ ଶିବାୟ॥୩॥\n\nବସିଷ୍ଠକୁମ୍ଭୋଦ୍ଭବଗୌତମାର୍ଯ\nମୁନୀନ୍ଦ୍ରଦେବାର୍ଚ୍ଚିତଶେଖରାୟ।\nଚନ୍ଦ୍ରାର୍କବୈଶ୍ୱାନରଲୋଚନାୟ\nତସ୍ମୈ ବକାରାୟ ନମଃ ଶିବାୟ॥୪॥\n\nଯକ୍ଷସ୍ୱରୂପାୟ ଜଟାଧରାୟ\nପିନାକହସ୍ତାୟ ସନାତନାୟ।\nଦିବ୍ୟାୟ ଦେବାୟ ଦିଗମ୍ବରାୟ\nତସ୍ମୈ ଯକାରାୟ ନମଃ ଶିବାୟ॥୫॥\n\nପଞ୍ଚାକ୍ଷରମିଦଂ ପୁଣ୍ୟଂ\nଯଃ ପଠେତ୍ ଶିବସନ୍ନିଧୌ।\nଶିବଲୋକମବାପ୍ନୋତି\nଶିବେନ ସହ ମୋଦତେ॥୬॥"
    },
    sanskrit: {
      title: "शिव पञ्चाक्षर स्तोत्रम्",
      text: "नागेन्द्रहाराय त्रिलोचनाय\nभस्माङ्गरागाय महेश्वराय।\nनित्याय शुद्धाय दिगम्बराय\nतस्मै नकाराय नमः शिवाय॥१॥\n\nमन्दाकिनीसलिलचन्दनचर्चिताय\nनन्दीश्वरप्रमथनाथमहेश्वराय।\nमन्दारपुष्पबहुपुष्पसुपूजिताय\nतस्मै मकाराय नमः शिवाय॥२॥\n\nशिवाय गौरीवदनाब्जवृन्द\nसूर्याय दक्षाध्वरनाशकाय।\nश्रीनीलकण्ठाय वृषध्वजाय\nतस्मै शिकाराय नमः शिवाय॥३॥\n\nवसिष्ठकुम्भोद्भवगौतमार्य\nमुनीन्द्रदेवार्चितशेखराय।\nचन्द्रार्कवैश्वानरलोचनाय\nतस्मै वकाराय नमः शिवाय॥४॥\n\nयक्षस्वरूपाय जटाधराय\nपिनाकहस्ताय सनातनाय।\nदिव्याय देवाय दिगम्बराय\nतस्मै यकाराय नमः शिवाय॥५॥\n\nपञ्चाक्षरमिदं पुण्यं\nयः पठेत् शिवसन्निधौ।\nशिवलोकमवाप्नोति\nशिवेन सह मोदते॥६॥"
    },
    english: {
      title: "Shiva Panchakshara Stotram",
      text: "Nāgendrahārāya Trilocanāya\nBhasmāṅgarāgāya Maheśvarāya।\nNityāya Śuddhāya Digambarāya\nTasmai Nakārāya Namaḥ Śivāya॥1॥\n\nMandākinī-salila-candana-carcitāya\nNandīśvara-pramatha-nātha-maheśvarāya।\nMandāra-puṣpa-bahu-puṣpa-supūjitāya\nTasmai Makārāya Namaḥ Śivāya॥2॥\n\nŚivāya Gaurī-vadanābja-vṛnda\nSūryāya Dakṣādhvara-nāśakāya।\nŚrī-Nīlakaṇṭhāya Vṛṣadhvajāya\nTasmai Śikārāya Namaḥ Śivāya॥3॥\n\nVasiṣṭha-Kumbhodbhava-Gautamārya\nMunīndra-devārcita-śekharāya।\nCandrārka-Vaiśvānara-locanāya\nTasmai Vakārāya Namaḥ Śivāya॥4॥\n\nYakṣa-svarūpāya Jaṭādharāya\nPināka-hastāya Sanātanāya।\nDivyāya Devāya Digambarāya\nTasmai Yakārāya Namaḥ Śivāya॥5॥\n\nPañcākṣaram Idaṁ Puṇyaṁ\nYaḥ Paṭhet Śiva-sannidhau।\nŚiva-lokam Avāpnoti\nŚivena Saha Modate॥6॥"
    },
    meaning: {
      odia: "ନ-ମ-ଶି-ବ-ୟ — ଏ ପଞ୍ଚ ଅକ୍ଷର ଶିବ ମନ୍ତ୍ରର ମହିମା। ଯେ ଶିବ ସନ୍ନିଧିରେ ଏ ସ୍ତୋତ୍ର ପଢ଼ନ୍ତି, ସେ ଶିବଲୋକ ପ୍ରାପ୍ତ କରନ୍ତି।",
      sanskrit: "ना-म-शि-वा-य — पंचाक्षर शिव मंत्र के पाँच अक्षरों पर ध्यान करते हुए शिव के विविध गुणों की स्तुति। जो शिव-सन्निधि में इसे पढ़े, वह शिवलोक प्राप्त करता है।",
      english: "Praise of Shiva through each of the five letters Na-Ma-Shi-Va-Ya. One who recites this in Shiva's presence attains Shiva's realm and rejoices with Shiva."
    },
    benefits: "Shiva's complete grace, liberation, removal of all sins, attainment of Shiva-loka.",
    morning: true,
    verses: 6
  },

  /* ── lingashtakam ── */
  {
    id: "lingashtakam",
    deity: "Shiva",
    tags: ["shiva", "linga", "morning", "puja"],
    repetitions: "1",
    timing: "Morning, during Shiva puja, Maha Shivaratri",
    status: "full",
    odia: {
      title: "ଲିଙ୍ଗାଷ୍ଟକମ୍",
      text: "ବ୍ରହ୍ମମୁରାରିସୁରାର୍ଚ୍ଚିତଲିଙ୍ଗଂ\nନିର୍ମଳଭାସିତଶୋଭିତଲିଙ୍ଗମ୍।\nଜନ୍ମଜଦୁଃଖବିନାଶକଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୧॥\n\nଦେବମୁନିପ୍ରବରାର୍ଚ୍ଚିତଲିଙ୍ଗଂ\nକାମଦହଂ କରୁଣାକରଲିଙ୍ଗମ୍।\nରାବଣଦର୍ପବିନାଶନଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୨॥\n\nସର୍ବସୁଗନ୍ଧିସୁଲେପିତଲିଙ୍ଗଂ\nବୁଦ୍ଧିବିବର୍ଦ୍ଧନକାରଣଲିଙ୍ଗମ୍।\nସିଦ୍ଧସୁରାସୁରବନ୍ଦିତଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୩॥\n\nକନକମହାମଣିଭୂଷିତଲିଙ୍ଗଂ\nଫଣିପତିବେଷ୍ଟିତଶୋଭିତଲିଙ୍ଗମ୍।\nଦକ୍ଷସୁଯଜ୍ଞବିନାଶନଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୪॥\n\nକୁଙ୍କୁମଚନ୍ଦନଲେପିତଲିଙ୍ଗଂ\nପଙ୍କଜହାରସୁଶୋଭିତଲିଙ୍ଗମ୍।\nସଞ୍ଚିତପାପବିନାଶନଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୫॥\n\nଦେବଗଣାର୍ଚ୍ଚିତସେବିତଲିଙ୍ଗଂ\nଭାବୈର୍ଭକ୍ତିଭିରେବ ଚ ଲିଙ୍ଗମ୍।\nଦିନକରକୋଟିପ୍ରଭାକରଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୬॥\n\nଅଷ୍ଟଦଲୋପରିବେଷ୍ଟିତଲିଙ୍ଗଂ\nସର୍ବସମୁଦ୍ଭବକାରଣଲିଙ୍ଗମ୍।\nଅଷ୍ଟଦରିଦ୍ରବିନାଶିତଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୭॥\n\nସୁରଗୁରୁସୁରବରପୂଜିତଲିଙ୍ଗଂ\nସୁରବନପୁଷ୍ପସଦାର୍ଚ୍ଚିତଲିଙ୍ଗମ୍।\nପରାତ୍ପରଂ ପରମାତ୍ମକଲିଙ୍ଗଂ\nତତ୍ପ୍ରଣମାମି ସଦାଶିବଲିଙ୍ଗମ୍॥୮॥\n\nଲିଙ୍ଗାଷ୍ଟକମିଦଂ ପୁଣ୍ୟଂ\nଯଃ ପଠେଚ୍ଛିବସନ୍ନିଧୌ।\nଶିବଲୋକମବାପ୍ନୋତି\nଶିବେନ ସହ ମୋଦତେ॥୯॥"
    },
    sanskrit: {
      title: "लिङ्गाष्टकम्",
      text: "ब्रह्ममुरारिसुरार्चितलिङ्गं\nनिर्मलभासितशोभितलिङ्गम्।\nजन्मजदुःखविनाशकलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥१॥\n\nदेवमुनिप्रवरार्चितलिङ्गं\nकामदहं करुणाकरलिङ्गम्।\nरावणदर्पविनाशनलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥२॥\n\nसर्वसुगन्धिसुलेपितलिङ्गं\nबुद्धिविवर्धनकारणलिङ्गम्।\nसिद्धसुरासुरवन्दितलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥३॥\n\nकनकमहामणिभूषितलिङ्गं\nफणिपतिवेष्टितशोभितलिङ्गम्।\nदक्षसुयज्ञविनाशनलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥४॥\n\nकुङ्कुमचन्दनलेपितलिङ्गं\nपङ्कजहारसुशोभितलिङ्गम्।\nसञ्चितपापविनाशनलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥५॥\n\nदेवगणार्चितसेवितलिङ्गं\nभावैर्भक्तिभिरेव च लिङ्गम्।\nदिनकरकोटिप्रभाकरलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥६॥\n\nअष्टदलोपरिवेष्टितलिङ्गं\nसर्वसमुद्भवकारणलिङ्गम्।\nअष्टदरिद्रविनाशितलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥७॥\n\nसुरगुरुसुरवरपूजितलिङ्गं\nसुरवनपुष्पसदार्चितलिङ्गम्।\nपरात्परं परमात्मकलिङ्गं\nतत्प्रणमामि सदाशिवलिङ्गम्॥८॥\n\nलिङ्गाष्टकमिदं पुण्यं\nयः पठेच्छिवसन्निधौ।\nशिवलोकमवाप्नोति\nशिवेन सह मोदते॥९॥"
    },
    english: {
      title: "Lingashtakam",
      text: "Brahma-Murāri-Surārcita-Liṅgaṁ\nNirmala-Bhāsita-Śobhita-Liṅgam।\nJanmaja-Duḥkha-Vināśaka-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥1॥\n\nDeva-Muni-Pravarārcita-Liṅgaṁ\nKāmadahaṁ Karuṇākara-Liṅgam।\nRāvaṇa-Darpa-Vināśana-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥2॥\n\nSarva-Sugandhi-Sulepita-Liṅgaṁ\nBuddhi-Vivardhana-Kāraṇa-Liṅgam।\nSiddha-Surāsura-Vandita-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥3॥\n\nKanaka-Mahāmaṇi-Bhūṣita-Liṅgaṁ\nPhaṇipati-Veṣṭita-Śobhita-Liṅgam।\nDakṣa-Suyajña-Vināśana-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥4॥\n\nKuṅkuma-Candana-Lepita-Liṅgaṁ\nPaṅkaja-Hāra-Suśobhita-Liṅgam।\nSañcita-Pāpa-Vināśana-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥5॥\n\nDevagaṇārcita-Sevita-Liṅgaṁ\nBhāvair Bhaktibhir Eva Ca Liṅgam।\nDinakara-Koṭi-Prabhākara-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥6॥\n\nAṣṭadalopari-Veṣṭita-Liṅgaṁ\nSarva-Samudbhava-Kāraṇa-Liṅgam।\nAṣṭa-Daridra-Vināśita-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥7॥\n\nSuraguru-Suravara-Pūjita-Liṅgaṁ\nSuravana-Puṣpa-Sadārcita-Liṅgam।\nParātparaṁ Paramātmaka-Liṅgaṁ\nTat-Praṇamāmi Sadāśiva-Liṅgam॥8॥\n\nLiṅgāṣṭakam Idaṁ Puṇyaṁ\nYaḥ Paṭhet Śiva-Sannidhau।\nŚiva-Lokam Avāpnoti\nŚivena Saha Modate॥9॥"
    },
    meaning: {
      odia: "ଶ୍ରୀ ସଦାଶିବ ଲିଙ୍ଗଙ୍କୁ ଅଷ୍ଟ ଶ୍ଳୋକରେ ବନ୍ଦନ — ଜନ୍ମ ଦୁଃଖ, ଅଷ୍ଟ ଦାରିଦ୍ର୍ୟ ନାଶ। ଶିବ ସନ୍ନିଧିରେ ପଢ଼ିଲେ ଶିବଲୋକ ମିଳେ।",
      sanskrit: "सदाशिव-लिंग की आठ श्लोकों में स्तुति — जन्म-दुःख, कामदहन, रावण-दर्प-नाश, अष्टदारिद्र्य-विनाश। शिव-सन्निधि में पाठ करने पर शिवलोक की प्राप्ति।",
      english: "Eight verses in praise of the Sadashiva Linga — destroyer of birth-sorrows, Kama, pride of Ravana, eight forms of poverty. Recited in Shiva's presence, one attains the world of Shiva."
    },
    benefits: "Liberation, removal of accumulated sins, Shiva's grace, attainment of Shiva-loka.",
    morning: true,
    verses: 9
  },

  /* ── shiva-manasa-puja ── */
  {
    id: "shiva-manasa-puja",
    deity: "Shiva",
    tags: ["shiva", "manasa-puja", "shankaracharya", "meditation"],
    repetitions: "1",
    timing: "Morning, before or during meditation",
    status: "full",
    odia: {
      title: "ଶିବ ମାନସ ପୂଜା (ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟ)",
      text: "ରତ୍ନୈଃ କଳ୍ପିତମାସନଂ ହିମଜଳୈଃ ସ୍ନାନଂ ଚ ଦିବ୍ୟାମ୍ବରଂ\nନାନାରତ୍ନବିଭୂଷିତଂ ମୃଗମଦାମୋଦାଙ୍କିତଂ ଚନ୍ଦନମ୍।\nଜାତୀଚମ୍ପକବିଲ୍ୱପତ୍ରରଚିତଂ ପୁଷ୍ପଂ ଚ ଧୂପଂ ତଥା\nଦୀପଂ ଦେବ ଦୟାନିଧେ ପଶୁପତେ ହୃତ୍କଳ୍ପିତଂ ଗୃହ୍ୟତାମ୍॥୧॥\n\nସୌବର୍ଣ୍ଣେ ନବରତ୍ନଖଣ୍ଡରଚିତେ ପାତ୍ରେ ଘୃତଂ ପାୟସଂ\nଭକ୍ଷ୍ୟଂ ପଞ୍ଚବିଧଂ ପୟୋଦଧିୟୁତଂ ରମ୍ଭାଫଳଂ ପାନକମ୍।\nଶାକାନାମୟୁତଂ ଜଳଂ ରୁଚିକରଂ କର୍ପୂରଖଣ୍ଡୋଜ୍ଜ୍ୱଳଂ\nତାମ୍ବୂଳଂ ମନସା ମୟା ବିରଚିତଂ ଭକ୍ତ୍ୟା ପ୍ରଭୋ ସ୍ୱୀକୁରୁ॥୨॥\n\nଛତ୍ରଂ ଚାମରୟୋର୍ୟୁଗଂ ବ୍ୟଜନକଂ ଚାଦର୍ଶକଂ ନିର୍ମଳଂ\nବୀଣାଭେରିମୃଦଙ୍ଗକାହଳକଳା ଗୀତଂ ଚ ନୃତ୍ୟଂ ତଥା।\nସାଷ୍ଟାଙ୍ଗଂ ପ୍ରଣତିଃ ସ୍ତୁତିର୍ବହୁବିଧା ହ୍ୟେତତ୍ସମସ୍ତଂ ମୟା\nସଙ୍କଳ୍ପେନ ସମର୍ପିତଂ ତବ ବିଭୋ ପୂଜାଂ ଗୃହାଣ ପ୍ରଭୋ॥୩॥\n\nଆତ୍ମା ତ୍ୱଂ ଗିରିଜା ମତିଃ ସହଚରାଃ ପ୍ରାଣାଃ ଶରୀରଂ ଗୃହଂ\nପୂଜା ତେ ବିଷୟୋପଭୋଗରଚନା ନିଦ୍ରା ସମାଧିସ୍ଥିତିଃ।\nସଞ୍ଚାରଃ ପଦୟୋଃ ପ୍ରଦକ୍ଷିଣବିଧିଃ ସ୍ତୋତ୍ରାଣି ସର୍ବା ଗିରୋ\nଯଦ୍ୟତ୍କର୍ମ କରୋମି ତତ୍ତଦଖିଳଂ ଶମ୍ଭୋ ତବାରାଧନମ୍॥୪॥\n\nକରଚରଣକୃତଂ ବାକ୍କାୟଜଂ କର୍ମଜଂ ବା\nଶ୍ରବଣନୟନଜଂ ବା ମାନସଂ ବାପରାଧମ୍।\nବିହିତମବିହିତଂ ବା ସର୍ବମେତତ୍କ୍ଷମସ୍ୱ\nଜୟ ଜୟ କରୁଣାବ୍ଧେ ଶ୍ରୀମହାଦେବ ଶମ୍ଭୋ॥୫॥"
    },
    sanskrit: {
      title: "शिव मानस पूजा (आदि शंकराचार्य)",
      text: "रत्नैः कल्पितमासनं हिमजलैः स्नानं च दिव्याम्बरं\nनानारत्नविभूषितं मृगमदामोदाङ्कितं चन्दनम्।\nजातीचम्पकबिल्वपत्ररचितं पुष्पं च धूपं तथा\nदीपं देव दयानिधे पशुपते हृत्कल्पितं गृह्यताम्॥१॥\n\nसौवर्णे नवरत्नखण्डरचिते पात्रे घृतं पायसं\nभक्ष्यं पञ्चविधं पयोदधियुतं रम्भाफलं पानकम्।\nशाकानामयुतं जलं रुचिकरं कर्पूरखण्डोज्ज्वलं\nताम्बूलं मनसा मया विरचितं भक्त्या प्रभो स्वीकुरु॥२॥\n\nछत्रं चामरयोर्युगं व्यजनकं चादर्शकं निर्मलं\nवीणाभेरिमृदङ्गकाहलकला गीतं च नृत्यं तथा।\nसाष्टाङ्गं प्रणतिः स्तुतिर्बहुविधा ह्येतत्समस्तं मया\nसङ्कल्पेन समर्पितं तव विभो पूजां गृहाण प्रभो॥३॥\n\nआत्मा त्वं गिरिजा मतिः सहचराः प्राणाः शरीरं गृहं\nपूजा ते विषयोपभोगरचना निद्रा समाधिस्थितिः।\nसञ्चारः पदयोः प्रदक्षिणविधिः स्तोत्राणि सर्वा गिरो\nयद्यत्कर्म करोमि तत्तदखिलं शम्भो तवाराधनम्॥४॥\n\nकरचरणकृतं वाक्कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम्।\nविहितमविहितं वा सर्वमेतत्क्षमस्व\nजय जय करुणाब्धे श्रीमहादेव शम्भो॥५॥"
    },
    english: {
      title: "Shiva Manasa Puja (Adi Shankaracharya)",
      text: "Ratnaiḥ Kalpitam Āsanaṁ Hima-Jalaiḥ Snānaṁ Ca Divyāmbaram\nNānā-Ratna-Vibhūṣitaṁ Mṛgamadāmodāṅkitaṁ Candanam।\nJātī-Campaka-Bilva-Patra-Racitaṁ Puṣpaṁ Ca Dhūpaṁ Tathā\nDīpaṁ Deva Dayānidhe Paśupate Hṛt-Kalpitaṁ Gṛhyatām॥1॥\n\nSauvarṇe Navaratna-Khaṇḍa-Racite Pātre Ghṛtaṁ Pāyasaṁ\nBhakṣyaṁ Pañca-Vidhaṁ Payo-Dadhi-Yutaṁ Rambhā-Phalaṁ Pānakam।\nŚākānām Ayutaṁ Jalaṁ Rucikaraṁ Karpūra-Khaṇḍojjvalam\nTāmbūlaṁ Manasā Mayā Viracitaṁ Bhaktyā Prabho Svīkuru॥2॥\n\nChatraṁ Cāmarayor Yugaṁ Vyajanakaṁ Cādarśakaṁ Nirmalam\nVīṇā-Bheri-Mṛdaṅga-Kāhala-Kalā Gītaṁ Ca Nṛtyaṁ Tathā।\nSāṣṭāṅgaṁ Praṇatiḥ Stutir Bahu-Vidhā Hy Etat Samastaṁ Mayā\nSaṅkalpena Samarpitaṁ Tava Vibho Pūjāṁ Gṛhāṇa Prabho॥3॥\n\nĀtmā Tvaṁ Girijā Matiḥ Sahacarāḥ Prāṇāḥ Śarīraṁ Gṛham\nPūjā Te Viṣayopabhoga-Racanā Nidrā Samādhi-Sthitiḥ।\nSañcāraḥ Padayoḥ Pradakṣiṇa-Vidhiḥ Stotrāṇi Sarvā Giro\nYad-Yat Karma Karomi Tat-Tad Akhilaṁ Śambho Tavārādhanam॥4॥\n\nKara-Caraṇa-Kṛtaṁ Vāk-Kāyajaṁ Karmajaṁ Vā\nŚravaṇa-Nayana-Jaṁ Vā Mānasaṁ Vāparādham।\nVihitam Avihitaṁ Vā Sarvam Etat Kṣamasva\nJaya Jaya Karuṇābdhe Śrī-Mahādeva Śambho॥5॥"
    },
    meaning: {
      odia: "ମନ ଦ୍ୱାରା ଶିବଙ୍କ ପୂର୍ଣ ଉପଚାର — ସିଂହାସନ, ସ୍ନାନ, ବସ୍ତ୍ର, ଭୋଜନ, ଗୀତ, ନୃତ୍ୟ। ଆତ୍ମା ହିଁ ଶିବ, ମତି ହିଁ ଗିରିଜା — ସମସ୍ତ କ୍ରିୟା ଶିଭ ଆରାଧନ। ଅଶ ଓ ଅଜ୍ଞ ପାପ ସ'ବୁ କ୍ଷମା।",
      sanskrit: "मन से शिव की सम्पूर्ण पूजा — आसन, स्नान, वस्त्र, भोजन, गीत, नृत्य। आत्मा ही शिव, मति ही गिरिजा — सब कर्म शम्भु की आराधना। अजान-अनजान सभी पाप क्षमा करें।",
      english: "Complete mental worship of Shiva — seat, bath, garments, food, music, dance, all offered by the mind with devotion. The Self is Shiva; every act is His worship. Forgive all transgressions, O ocean of compassion."
    },
    benefits: "Inner worship transcending ritual, Shiva's grace, forgiveness of sins, liberation.",
    morning: true,
    verses: 5
  },

  /* ── bilvashtakam ── */
  {
    id: "bilvashtakam",
    deity: "Shiva",
    tags: ["shiva", "bilva", "puja", "morning"],
    repetitions: "1",
    timing: "Morning, during Shiva puja, offering bilva leaves",
    status: "full",
    odia: {
      title: "ବିଲ୍ୱାଷ୍ଟକମ୍",
      text: "ତ୍ରିଦଳଂ ତ୍ରିଗୁଣାକାରଂ ତ୍ରିନେତ୍ରଂ ଚ ତ୍ରିୟାୟୁଧମ୍।\nତ୍ରିଜନ୍ମପାପସଂହାରମେକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୧॥\n\nତ୍ରିଶାଖୈର୍ବିଲ୍ୱପତ୍ରୈଶ୍ଚ ଅଚ୍ଛିଦ୍ରୈଃ କୋମଳୈଃ ଶୁଭୈଃ।\nତବ ପୂଜାଂ କରିଷ୍ୟାମି ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୨॥\n\nଅଖଣ୍ଡବିଲ୍ୱପତ୍ରେଣ ପୂଜିତେ ନନ୍ଦିକେଶ୍ୱରେ।\nଶୁଧ୍ୟନ୍ତି ସର୍ବପାପେଭ୍ୟୋ ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୩॥\n\nଶାଲଗ୍ରାମେଷୁ ବିପ୍ରେଷୁ ତଟାକେ ବନକୂପୟୋଃ।\nଯଜ୍ଞକୋଟିସହସ୍ରସ୍ୟ ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୪॥\n\nଦନ୍ତିକୋଟିସହସ୍ରାଣି ଅଶ୍ୱମେଧଶତାନି ଚ।\nକୋଟିକନ୍ୟାପ୍ରଦାନସ୍ୟ ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୫॥\n\nପାର୍ବତ୍ୟା ସ୍ୱେଦବିନ୍ଦୂତ୍ଥଂ ମହାଦେବସ୍ୟ ଚ ପ୍ରିୟମ୍।\nବିଲ୍ୱବୃକ୍ଷଂ ପ୍ରଯଚ୍ଛାମି ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୬॥\n\nଦର୍ଶନଂ ବିଲ୍ୱବୃକ୍ଷସ୍ୟ ସ୍ପର୍ଶନଂ ପାପନାଶନମ୍।\nଅଘୋରପାପସଂହାରଂ ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୭॥\n\nକାଶୀକ୍ଷେତ୍ରନିବାସଂ ଚ କାଳଭୈରବଦର୍ଶନମ୍।\nପ୍ରୟାଗେ ମାଧବଂ ଦୃଷ୍ଟ୍ୱା ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୮॥\n\nମୂଳତୋ ବ୍ରହ୍ମରୂପାୟ ମଧ୍ୟତୋ ବିଷ୍ଣୁରୂପିଣେ।\nଅଗ୍ରତଃ ଶିବରୂପାୟ ଏକବିଲ୍ୱଂ ଶିବାର୍ପଣମ୍॥୯॥"
    },
    sanskrit: {
      title: "बिल्वाष्टकम्",
      text: "त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रियायुधम्।\nत्रिजन्मपापसंहारमेकबिल्वं शिवार्पणम्॥१॥\n\nत्रिशाखैर्बिल्वपत्रैश्च अच्छिद्रैः कोमलैः शुभैः।\nतव पूजां करिष्यामि एकबिल्वं शिवार्पणम्॥२॥\n\nअखण्डबिल्वपत्रेण पूजिते नन्दिकेश्वरे।\nशुध्यन्ति सर्वपापेभ्यो एकबिल्वं शिवार्पणम्॥३॥\n\nसालग्रामेषु विप्रेषु तटाके वनकूपयोः।\nयज्ञकोटिसहस्रस्य एकबिल्वं शिवार्पणम्॥४॥\n\nदन्तिकोटिसहस्राणि अश्वमेधशतानि च।\nकोटिकन्याप्रदानस्य एकबिल्वं शिवार्पणम्॥५॥\n\nपार्वत्या स्वेदबिन्दूत्थं महादेवस्य च प्रियम्।\nबिल्ववृक्षं प्रयच्छामि एकबिल्वं शिवार्पणम्॥६॥\n\nदर्शनं बिल्ववृक्षस्य स्पर्शनं पापनाशनम्।\nअघोरपापसंहारं एकबिल्वं शिवार्पणम्॥७॥\n\nकाशीक्षेत्रनिवासं च कालभैरवदर्शनम्।\nप्रयागे माधवं दृष्ट्वा एकबिल्वं शिवार्पणम्॥८॥\n\nमूलतो ब्रह्मरूपाय मध्यतो विष्णुरूपिणे।\nअग्रतः शिवरूपाय एकबिल्वं शिवार्पणम्॥९॥"
    },
    english: {
      title: "Bilvashtakam",
      text: "Tridalaṁ Triguṇākāraṁ Trinetraṁ Ca Triyāyudham।\nTrijanma-Pāpa-Saṁhāram Eka-Bilvaṁ Śivārpaṇam॥1॥\n\nTriśākhair Bilva-Patraiś Ca Acchidraiḥ Komalaiḥ Śubhaiḥ।\nTava Pūjāṁ Kariṣyāmi Eka-Bilvaṁ Śivārpaṇam॥2॥\n\nAkhaṇḍa-Bilva-Patreṇa Pūjite Nandikeśvare।\nŚudhyanti Sarva-Pāpebhyo Eka-Bilvaṁ Śivārpaṇam॥3॥\n\nSālagrāmeṣu Vipreṣu Taṭāke Vana-Kūpayoḥ।\nYajña-Koṭi-Sahasrasya Eka-Bilvaṁ Śivārpaṇam॥4॥\n\nDanti-Koṭi-Sahasrāṇi Aśvamedha-Śatāni Ca।\nKoṭi-Kanyā-Pradānasya Eka-Bilvaṁ Śivārpaṇam॥5॥\n\nPārvatyā Sveda-Bindūtthaṁ Mahādevasya Ca Priyam।\nBilva-Vṛkṣaṁ Prayacchāmi Eka-Bilvaṁ Śivārpaṇam॥6॥\n\nDarśanaṁ Bilva-Vṛkṣasya Sparśanaṁ Pāpa-Nāśanam।\nAghora-Pāpa-Saṁhāraṁ Eka-Bilvaṁ Śivārpaṇam॥7॥\n\nKāśī-Kṣetra-Nivāsaṁ Ca Kāla-Bhairava-Darśanam।\nPrayāge Mādhavaṁ Dṛṣṭvā Eka-Bilvaṁ Śivārpaṇam॥8॥\n\nMūlato Brahma-Rūpāya Madhyato Viṣṇu-Rūpiṇe।\nAgrataḥ Śiva-Rūpāya Eka-Bilvaṁ Śivārpaṇam॥9॥"
    },
    meaning: {
      odia: "ତ୍ରିଦଳ ବିଲ୍ୱ ପତ୍ର ଶିବ ଅର୍ପଣ — ତ୍ରି ଜନ୍ମ ପାପ, ସଞ୍ଚିତ ପାପ ନାଶ। ବିଲ୍ୱ ବୃକ୍ଷ ମୂଳରେ ବ୍ରହ୍ମ, ମଧ୍ୟରେ ବିଷ୍ଣୁ, ଅଗ୍ରରେ ଶିବ।",
      sanskrit: "त्रिदल बिल्व-पत्र को शिव को अर्पित करने का महत्त्व — तीन जन्मों के पाप, संचित पाप नाश। बिल्व के मूल में ब्रह्मा, मध्य में विष्णु, अग्र में शिव।",
      english: "Offering the three-leafed bael to Shiva — destroyer of sins of three births. The bael tree's root is Brahma, middle is Vishnu, tip is Shiva. Even seeing or touching the tree destroys sins."
    },
    benefits: "Removal of accumulated sins, Shiva's grace, equivalent to thousands of yajnas.",
    morning: true,
    verses: 9
  },

  /* ── shiva-tandava-stotram ── */
  {
    id: "shiva-tandava-stotram",
    deity: "Shiva",
    tags: ["shiva", "tandava", "major-stotra"],
    repetitions: "1",
    timing: "Morning, during Shiva puja",
    status: "partial",
    odia: {
      title: "ଶିବ ତାଣ୍ଡବ ସ୍ତୋତ୍ରମ୍ (ପ୍ରଥମ ୧୦ ଶ୍ଳୋକ)",
      text: "ଜଟାଟବୀଗଲଜ୍ଜଲପ୍ରବାହପାବିତସ୍ଥଲେ\nଗଲେଽବଲମ୍ବ୍ୟ ଲମ୍ବିତାଂ ଭୁଜଙ୍ଗତୁଙ୍ଗମାଲିକାମ୍।\nଡମଡ୍ଡମଡ୍ଡମଡ୍ଡମନ୍ନିନାଦବଡ୍ଡମର୍ବୟଂ\nଚକାର ଚଣ୍ଡତାଣ୍ଡବଂ ତନୋତୁ ନଃ ଶିବଃ ଶିବମ୍॥\n\nଜଟାକଟାହସମ୍ଭ୍ରମଭ୍ରମନ୍ନିଲିମ୍ପନିର୍ଝରୀ\nବିଲୋଲବୀଚିବଲ୍ଲରୀବିରାଜମାନମୂର୍ଧନି।\nଧଗଦ୍ଧଗଦ୍ଧଗଜ୍ଜ୍ୱଲଲ୍ଲଲାଟପଟ୍ଟପାବକେ\nକିଶୋରଚନ୍ଦ୍ରଶେଖରେ ରତିଃ ପ୍ରତିକ୍ଷଣଂ ମମ॥\n\nଧରାଧରେନ୍ଦ୍ରନନ୍ଦିନୀବିଲାସବନ୍ଧୁବନ୍ଧୁର\nସ୍ଫୁରଦ୍ଦିଗନ୍ତସନ୍ତତିପ୍ରମୋଦମାନମାନସେ।\nକୃପାକଟାକ୍ଷଧୋରଣୀନିରୁଦ୍ଧଦୁର୍ଧରାପଦି\nକ୍ୱଚିଦ୍ଦିଗମ୍ବରେ ମନୋ ବିନୋଦମେତୁ ବସ୍ତୁନି॥\n\nଜଟାଭୁଜଙ୍ଗପିଙ୍ଗଳସ୍ଫୁରତ୍ଫଣାମଣିପ୍ରଭା\nକଦମ୍ବକୁଙ୍କୁମଦ୍ରବପ୍ରଲିପ୍ତଦିଗ୍ୱଧୂମୁଖେ।\nମଦାନ୍ଧସିନ୍ଧୁରସ୍ଫୁରତ୍ତ୍ୱଗୁତ୍ତରୀୟମେଦୁରେ\nମନୋ ବିନୋଦମଦ୍ଭୁତଂ ବିଭର୍ତୁ ଭୂତଭର୍ତରି॥\n\nସହସ୍ରଲୋଚନପ୍ରଭୃତ୍ୟଶେଷଲେଖଶେଖର\nପ୍ରସୂନଧୂଲିଧୋରଣୀ ବିଧୂସରାଙ୍ଘ୍ରିପୀଠଭୂଃ।\nଭୁଜଙ୍ଗରାଜମାଲୟା ନିବଦ୍ଧଜାଟଜୂଟକ\nଶ୍ରିୟୈ ଚିରାୟ ଜାୟତାଂ ଚକୋରବନ୍ଧୁଶେଖରଃ॥\n\nଲଲାଟଚତ୍ୱରଜ୍ୱଲଦ୍ଧନଞ୍ଜୟସ୍ଫୁଲିଙ୍ଗଭା\nନିପୀତପଞ୍ଚସାୟକଂ ନମନ୍ନିଲିମ୍ପନାୟକମ୍।\nସୁଧାମୟୂଖଲେଖୟା ବିରାଜମାନଶେଖରଂ\nମହାକପାଲିସମ୍ପଦେ ଶିରୋଜଟାଲମସ୍ତୁ ନଃ॥\n\nକରାଳଭାଲପଟ୍ଟିକାଧଗଦ୍ଧଗଦ୍ଧଗଜ୍ଜ୍ୱଲ\nଦ୍ଧନଞ୍ଜୟାହୁତୀକୃତପ୍ରଚଣ୍ଡପଞ୍ଚସାୟକେ।\nଧରାଧରେନ୍ଦ୍ରନନ୍ଦିନୀକୁଚାଗ୍ରଚିତ୍ରପତ୍ରକ\nପ୍ରକଳ୍ପନୈକଶିଳ୍ପିନି ତ୍ରିଲୋଚନେ ରତିର୍ମମ॥\n\nନବୀନମେଘମଣ୍ଡଳୀ ନିରୁଦ୍ଧଦୁର୍ଧରସ୍ଫୁରତ୍\nକୁହୂନିଶୀଥିନୀତମଃ ପ୍ରବନ୍ଧବଦ୍ଧକନ୍ଧରଃ।\nନିଲିମ୍ପନିର୍ଝରୀଧରସ୍ତନୋତୁ କୃତ୍ତିସିନ୍ଧୁରଃ\nକଲାନିଧାନବନ୍ଧୁରଃ ଶ୍ରିୟଂ ଜଗଦ୍ଧୁରନ୍ଧରଃ॥\n\nପ୍ରଫୁଲ୍ଲନୀଳପଙ୍କଜପ୍ରପଞ୍ଚକାଲିମପ୍ରଭା\nବଲମ୍ବିକଣ୍ଠକନ୍ଦଲୀରୁଚିପ୍ରବଦ୍ଧକନ୍ଧରମ୍।\nସ୍ମରଚ୍ଛିଦଂ ପୁରଚ୍ଛିଦଂ ଭବଚ୍ଛିଦଂ ମଖଚ୍ଛିଦଂ\nଗଜଚ୍ଛିଦାନ୍ଧକଚ୍ଛିଦଂ ତମନ୍ତକଚ୍ଛିଦଂ ଭଜେ॥\n\nଅଖର୍ବସର୍ବମଙ୍ଗଳାକଲାକଦମ୍ବମଞ୍ଜରୀ\nରସପ୍ରବାହମାଧୁରୀ ବିଜୃମ୍ଭଣାମଧୁବ୍ରତମ୍।\nସ୍ମରାନ୍ତକଂ ପୁରାନ୍ତକଂ ଭବାନ୍ତକଂ ମଖାନ୍ତକଂ\nଗଜାନ୍ତକାନ୍ଧକାନ୍ତକଂ ତମନ୍ତକାନ୍ତକଂ ଭଜେ॥\n\n[ଅବଶିଷ୍ଟ ୬ ଶ୍ଳୋକ (୧୧–୧୬) — ସଂପୂର୍ଣ ୧୬-ଶ୍ଳୋକ ଶିବ ତାଣ୍ଡବ ଏକ ସ୍ୱତନ୍ତ୍ର ପୃଷ୍ଠ ଆସୁଛି]"
    },
    sanskrit: {
      title: "शिव ताण्डव स्तोत्रम् (प्रथम १० श्लोक)",
      text: "जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥\n\nजटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी\nविलोलवीचिवल्लरीविराजमानमूर्धनि।\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥\n\nधराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर\nस्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे।\nकृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि\nक्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि॥\n\nजटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा\nकदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे।\nमदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे\nमनो विनोदमद्भुतं बिभर्तु भूतभर्तरि॥\n\nसहस्रलोचनप्रभृत्यशेषलेखशेखर\nप्रसूनधूलिधोरणी विधूसराङ्घ्रिपीठभूः।\nभुजङ्गराजमालया निबद्धजाटजूटक\nश्रियै चिराय जायतां चकोरबन्धुशेखरः॥\n\nललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा\nनिपीतपञ्चसायकं नमन्निलिम्पनायकम्।\nसुधामयूखलेखया विराजमानशेखरं\nमहाकपालिसम्पदे शिरोजटालमस्तु नः॥\n\nकरालभालपट्टिकाधगद्धगद्धगज्ज्वल\nद्धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके।\nधराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक\nप्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम॥\n\nनवीनमेघमण्डली निरुद्धदुर्धरस्फुरत्\nकुहूनिशीथिनीतमः प्रबन्धबद्धकन्धरः।\nनिलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः\nकलानिधानबन्धुरः श्रियं जगद्धुरन्धरः॥\n\nप्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा\nवलम्बिकण्ठकन्दलीरुचिप्रबद्धकन्धरम्।\nस्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं\nगजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे॥\n\nअखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी\nरसप्रवाहमाधुरी विजृम्भणामधुव्रतम्।\nस्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं\nगजान्तकान्धकान्तकं तमन्तकान्तकं भजे॥\n\n[अवशिष्ट ६ श्लोक (११–१६) — सम्पूर्ण १६-श्लोक शिव ताण्डव एक पृथक् पृष्ठ पर]"
    },
    english: {
      title: "Shiva Tandava Stotram (First 10 Verses)",
      text: "Jaṭāṭavī-galaj-jala-pravāha-pāvita-sthale\nGale'valambya lambitāṁ bhujaṅga-tuṅga-mālikām।\nḌamaḍ-ḍamaḍ-ḍamaḍ-ḍamann-nināda-vaḍḍamarvayaṁ\nCakāra caṇḍa-tāṇḍavaṁ tanotu naḥ Śivaḥ Śivam॥\n\nJaṭā-kaṭāha-sambhrama-bhramannilimpa-nirjharī\nVilola-vīci-vallarī-virājamāna-mūrdhani।\nDhagad-dhagad-dhagaj-jvalal-lalāṭa-paṭṭa-pāvake\nKiśora-candra-śekhare ratiḥ pratikṣaṇaṁ mama॥\n\nDharādharendra-nandinī-vilāsa-bandhu-bandhura\nSphurad-diganta-santati-pramoda-māna-mānase।\nKṛpā-kaṭākṣa-dhoraṇī-niruddha-durdharāpadi\nKvacid-digambare mano vinodam etu vastuni॥\n\nJaṭā-bhujaṅga-piṅgala-sphurat-phaṇā-maṇi-prabhā\nKadamba-kuṅkuma-drava-pralipta-dig-vadhū-mukhe।\nMadāndha-sindhura-sphurat-tvag-uttarīya-medure\nMano vinodam adbhutaṁ bibhartu bhūta-bhartari॥\n\nSahasra-locana-prabhṛty-aśeṣa-lekha-śekhara\nPrasūna-dhūli-dhoraṇī vidhūsarāṅghri-pīṭha-bhūḥ।\nBhujaṅga-rāja-mālayā nibaddha-jaṭa-jūṭaka\nŚriyai cirāya jāyatāṁ cakora-bandhu-śekharaḥ॥\n\nLalāṭa-catvara-jvalad-dhanañjaya-sphuliṅga-bhā\nNipīta-pañca-sāyakaṁ namannilimpa-nāyakam।\nSudhā-mayūkha-lekhayā virājamāna-śekharaṁ\nMahā-kapāli-sampade śiro-jaṭālam astu naḥ॥\n\nKarāla-bhāla-paṭṭikā-dhagad-dhagad-dhagaj-jvala\nDdhanañjayāhutī-kṛta-pracaṇḍa-pañca-sāyake।\nDharādharendra-nandinī-kucāgra-citra-patraka\nPrakalpanaika-śilpini trilocane ratir mama॥\n\nNavīna-megha-maṇḍalī-niruddha-durdhara-sphurat\nKuhū-niśīthinī-tamaḥ prabandha-baddha-kandharaḥ।\nNilimpa-nirjharī-dharas tanotu kṛtti-sindhuraḥ\nKalā-nidhāna-bandhuraḥ śriyaṁ jagad-dhurandharaḥ॥\n\nPraphulla-nīla-paṅkaja-prapañca-kālima-prabhā\nValambikaṇṭha-kandalī-ruci-prabaddha-kandharam।\nSmarac-chidaṁ Purac-chidaṁ Bhavac-chidaṁ Makhac-chidaṁ\nGajac-chidāndhaka-cchidaṁ Tam Antaka-cchidaṁ Bhaje॥\n\nAkharva-sarva-maṅgalā-kalā-kadamba-mañjarī\nRasa-pravāha-mādhurī-vijṛmbhaṇā-madhu-vratam।\nSmarāntakaṁ Purāntakaṁ Bhavāntakaṁ Makhāntakaṁ\nGajāntakāndhakāntakaṁ Tam Antakāntakaṁ Bhaje॥\n\n[Verses 11–16 — Complete 16-verse recension on a dedicated page]"
    },
    meaning: {
      odia: "ଜଟାଧାରୀ, ଡମରୁ ସ'ଙ୍ଗ ଶିବ ତାଣ୍ଡବ ନୃତ୍ୟ — ସ୍ମର, ପୁର, ଭବ, ମଖ, ଗଜ, ଅନ୍ଧକ ବିନାଶକ। ଶ୍ରୀ ଶ‌ ମ୍ଭୋ ଶ'ଙ୍ଗ ଆନନ୍ଦ।",
      sanskrit: "जटाधारी शिव का डमरु के नाद से चण्ड-ताण्डव — काम, पुर, भव, यज्ञ, गज, अन्धक के विनाशक। श्री शम्भु का आनंद।",
      english: "Shiva's fierce tandava dance — with matted locks streaming Ganga, drum resonating, forehead-fire blazing — destroyer of Kama, Tripura, worldly existence, yajnas, Gajasura, Andhaka. May Shiva bestow auspiciousness."
    },
    benefits: "Destroys all obstacles, bestows Shiva's grace, fierce protection, liberation.",
    morning: true,
    verses: 16
  },

  /* ── rudrashtakam ── */
  {
    id: "rudrashtakam",
    deity: "Shiva",
    tags: ["shiva", "rudra", "major-stotra"],
    repetitions: "1",
    timing: "Morning, during Shiva puja",
    status: "full",
    odia: {
      title: "ରୁଦ୍ରାଷ୍ଟକମ୍",
      text: "ନମାମୀଶମୀଶାନ ନିର୍ବାଣରୂପଂ\nବିଭୁଂ ବ୍ୟାପକଂ ବ୍ରହ୍ମବେଦସ୍ୱରୂପମ୍।\nନିଜଂ ନିର୍ଗୁଣଂ ନିର୍ବିକଳ୍ପଂ ନିରୀହଂ\nଚିଦାକାଶମାକାଶବାସଂ ଭଜେଽହମ୍॥୧॥\n\nନିରାକାରମୋଙ୍କାରମୂଳଂ ତୁରୀୟଂ\nଗିରାଜ୍ଞାନଗୋତୀତମୀଶଂ ଗିରୀଶମ୍।\nକରାଳଂ ମହାକାଲକାଲଂ କୃପାଳଂ\nଗୁଣାଗାରସଂସାରପାରଂ ନତୋଽହମ୍॥୨॥\n\nତୁଷାରାଦ୍ରିସଙ୍କାଶଗୌରଂ ଗମ୍ଭୀରଂ\nମନୋଭୂତକୋଟିପ୍ରଭାଶ୍ରୀଶରୀରମ୍।\nସ୍ଫୁରନ୍ମୌଲିକଲ୍ଲୋଲିନୀଚାରୁଗଙ୍ଗା\nଲସଦ୍ଭାଲବାଲେନ୍ଦୁକଣ୍ଠେ ଭୁଜଙ୍ଗା॥୩॥\n\nଚଲତ୍କୁଣ୍ଡଳଂ ଭ୍ରୂସୁନେତ୍ରଂ ବିଶାଳଂ\nପ୍ରସନ୍ନାନନଂ ନୀଳକଣ୍ଠଂ ଦୟାଳମ୍।\nମୃଗାଧୀଶଚର୍ମାମ୍ବରଂ ମୁଣ୍ଡମାଲଂ\nପ୍ରିୟଂ ଶଙ୍କରଂ ସର୍ବନାଥଂ ଭଜାମି॥୪॥\n\nପ୍ରଚଣ୍ଡଂ ପ୍ରକୃଷ୍ଟଂ ପ୍ରଗଲ୍ଭଂ ପରେଶଂ\nଅଖଣ୍ଡଂ ଅଜଂ ଭାନୁକୋଟିପ୍ରକାଶମ୍।\nତ୍ରୟଃଶୂଳନିର୍ମୂଳନଂ ଶୂଳପାଣିଂ\nଭଜେଽହଂ ଭବାନୀପତିଂ ଭାବଗମ୍ୟମ୍॥୫॥\n\nକଲାତୀତକଲ୍ୟାଣକଲ୍ପାନ୍ତକାରୀ\nସଦା ସଜ୍ଜନାନନ୍ଦଦାତା ପୁରାରି।\nଚିଦାନନ୍ଦସନ୍ଦୋହମୋହାପହାରୀ\nପ୍ରସୀଦ ପ୍ରସୀଦ ପ୍ରଭୋ ମନ୍ମଥାରି॥୬॥\n\nନ ଯାବଦୁମାନାଥପାଦାରବିନ୍ଦଂ\nଭଜନ୍ତୀହ ଲୋକେ ପରେ ବା ନରାଣାମ୍।\nନ ତାବତ୍ସୁଖଂ ଶାନ୍ତିସନ୍ତାପନାଶଂ\nପ୍ରସୀଦ ପ୍ରଭୋ ସର୍ବଭୂତାଧିବାସମ୍॥୭॥\n\nନ ଜାନାମି ଯୋଗଂ ଜପଂ ନୈବ ପୂଜାଂ\nନତୋଽହଂ ସଦା ସର୍ବଦା ଶମ୍ଭୁତୁଭ୍ୟମ୍।\nଜରାଜନ୍ମଦୁଃଖୌଘତାତପ୍ୟମାନଂ\nପ୍ରଭୋ ପାହି ଆପନ୍ନମାମୀଶ ଶମ୍ଭୋ॥୮॥"
    },
    sanskrit: {
      title: "रुद्राष्टकम्",
      text: "नमामीशमीशान निर्वाणरूपं\nविभुं व्यापकं ब्रह्मवेदस्वरूपम्।\nनिजं निर्गुणं निर्विकल्पं निरीहं\nचिदाकाशमाकाशवासं भजेऽहम्॥१॥\n\nनिराकारमोङ्कारमूलं तुरीयं\nगिराज्ञानगोतीतमीशं गिरीशम्।\nकरालं महाकालकालं कृपालं\nगुणागारसंसारपारं नतोऽहम्॥२॥\n\nतुषाराद्रिसंकाशगौरं गभीरं\nमनोभूतकोटिप्रभाश्रीशरीरम्।\nस्फुरन्मौलिकल्लोलिनीचारुगङ्गा\nलसद्भालबालेन्दुकण्ठे भुजङ्गा॥३॥\n\nचलत्कुण्डलं भ्रूसुनेत्रं विशालं\nप्रसन्नाननं नीलकण्ठं दयालम्।\nमृगाधीशचर्माम्बरं मुण्डमालं\nप्रियं शङ्करं सर्वनाथं भजामि॥४॥\n\nप्रचण्डं प्रकृष्टं प्रगल्भं परेशं\nअखण्डं अजं भानुकोटिप्रकाशम्।\nत्रयःशूलनिर्मूलनं शूलपाणिं\nभजेऽहं भवानीपतिं भावगम्यम्॥५॥\n\nकलातीतकल्याणकल्पान्तकारी\nसदा सज्जनानन्ददाता पुरारि।\nचिदानन्दसन्दोहमोहापहारी\nप्रसीद प्रसीद प्रभो मन्मथारि॥६॥\n\nन यावदुमानाथपादारविन्दं\nभजन्तीह लोके परे वा नराणाम्।\nन तावत्सुखं शान्तिसन्तापनाशं\nप्रसीद प्रभो सर्वभूताधिवासम्॥७॥\n\nन जानामि योगं जपं नैव पूजां\nनतोऽहं सदा सर्वदा शम्भुतुभ्यम्।\nजराजन्मदुःखौघतातप्यमानं\nप्रभो पाहि आपन्नमामीश शम्भो॥८॥"
    },
    english: {
      title: "Rudrashtakam",
      text: "Namāmīśam Īśāna Nirvāṇa-Rūpaṁ\nVibhuṁ Vyāpakaṁ Brahma-Veda-Svarūpam।\nNijaṁ Nirguṇaṁ Nirvikalpaṁ Nirīhaṁ\nCidākāśam Ākāśa-Vāsaṁ Bhaje'ham॥1॥\n\nNirākāram Oṅkāra-Mūlaṁ Turīyaṁ\nGirā-Jñāna-Gotītam Īśaṁ Girīśam।\nKarālaṁ Mahā-Kāla-Kālaṁ Kṛpālaṁ\nGuṇāgāra-Saṁsāra-Pāraṁ Nato'ham॥2॥\n\nTuṣārādri-Saṅkāśa-Gauraṁ Gambhīraṁ\nMano-Bhūta-Koṭi-Prabhā-Śrī-Śarīram।\nSphuran-Mauli-Kallolinī-Cāru-Gaṅgā\nLasad-Bhāla-Bālendu-Kaṇṭhe Bhujaṅgā॥3॥\n\nCalat-Kuṇḍalaṁ Bhrū-Sunetraṁ Viśālaṁ\nPrasannānanaṁ Nīlakaṇṭhaṁ Dayālam।\nMṛgādhīśa-Carmāmbaraṁ Muṇḍamālaṁ\nPriyaṁ Śaṅkaraṁ Sarvanāthaṁ Bhajāmi॥4॥\n\nPracaṇḍaṁ Prakṛṣṭaṁ Pragalbhaṁ Pareśaṁ\nAkhaṇḍam Ajaṁ Bhānu-Koṭi-Prakāśam।\nTrayaḥ-Śūla-Nirmūlanaṁ Śūla-Pāṇiṁ\nBhaje'haṁ Bhavānī-Patiṁ Bhāva-Gamyam॥5॥\n\nKalātīta-Kalyāṇa-Kalpānta-Kārī\nSadā Sajjanānanda-Dātā Purāri।\nCidānanda-Sandoha-Mohāpahārī\nPrasīda Prasīda Prabho Manmathāri॥6॥\n\nNa Yāvad Umānātha-Pādāravindaṁ\nBhajantīha Loke Pare Vā Narāṇām।\nNa Tāvat Sukhaṁ Śānti-Santāpa-Nāśaṁ\nPrasīda Prabho Sarva-Bhūtādhivāsam॥7॥\n\nNa Jānāmi Yogaṁ Japaṁ Naiva Pūjāṁ\nNato'haṁ Sadā Sarvadā Śambhu-Tubhyam।\nJarā-Janma-Duḥkhaugha-Tātapyamānaṁ\nPrabho Pāhi Āpannam Īśa Śambho॥8॥"
    },
    meaning: {
      odia: "ହେ ଶିବ — ନିର୍ଗୁଣ, ନିର୍ବିକଳ୍ପ, ଓଁକାର ମୂଳ, ତୁଷାର-ଗୌର, ଗଙ୍ଗାଧର, ନୀଳକଣ୍ଠ, ଶୂଳପାଣି — ଉମାନାଥ ଚରଣ ବିନା ସୁଖ-ଶାନ୍ତି ନାହିଁ। ଜ୍ଞାନ, ଯୋଗ, ପୂଜା ନ ଜାଣୁ — ଶ‌ ମ୍ଭୋ ତୁ‌ ଭ୍ୟ ନ ‌ ମ।",
      sanskrit: "हे शिव — निर्गुण, निर्विकल्प, ओंकारमूल, तुषार-गौर, गंगाधर, नीलकंठ, शूलपाणि — उमानाथ के चरणों के बिना सुख-शान्ति नहीं। योग-जप-पूजा नहीं जानता — शम्भु तुभ्यं नमः।",
      english: "Eight verses to Rudra — formless, attributeless, foundation of Om, white as snow, Ganga-bearer, blue-throated trident-holder. Without Uma's lord's lotus feet, there is no peace. I know no yoga, japa or puja — I simply bow to Shambhu always."
    },
    benefits: "Shiva's grace, liberation, peace, forgiveness of sins.",
    morning: true,
    verses: 8
  },

  /* ── shivaparadha-kshamapana ── */
  {
    id: "shivaparadha-kshamapana",
    deity: "Shiva",
    tags: ["shiva", "kshamapana", "shankaracharya", "forgiveness"],
    repetitions: "1",
    timing: "Morning or evening, Maha Shivaratri",
    status: "partial",
    odia: {
      title: "ଶିବାପରାଧ କ୍ଷମାପଣ ସ୍ତୋତ୍ରମ୍ (ଆଦ୍ୟ ଓ ଅନ୍ତ୍ୟ ଶ୍ଳୋକ)",
      text: "ଆଦୌ କର୍ମପ୍ରସଙ୍ଗାତ୍କଲୟତି କଲୁଷଂ ମାତୃକୁକ୍ଷୌ ସ୍ଥିତଂ ମାଂ\nବିଣ୍ମୂତ୍ରାମେଧ୍ୟମଧ୍ୟେ କ୍ୱଥୟତି ନିତରାଂ ଜାଠରୋ ଜାତବେଦାଃ।\nୟଦ୍ୟଦ୍ୱୈ ତତ୍ର ଦୁଃଖଂ ବ୍ୟଥୟତି ନିତରାଂ ଶକ୍ୟତେ କେନ ବକ୍ତୁଂ\nକ୍ଷନ୍ତବ୍ୟୋ ମେଽପରାଧଃ ଶିବ ଶିବ ଶିବ ଭୋଃ ଶ୍ରୀମହାଦେବ ଶମ୍ଭୋ॥\n\n[ସମ୍ପୂର୍ଣ ୧୬ ଶ୍ଳୋକ — ଶ୍ରୀ ଶ‌ ର‌ ଦା ପୀଠ ଅନୁଯାୟୀ ଏକ ସ୍ୱତନ୍ତ୍ର ପୃଷ୍ଠ ଆସୁଛି]\n\nକରଚରଣକୃତଂ ବାକ୍କାୟଜଂ କର୍ମଜଂ ବା\nଶ୍ରବଣନୟନଜଂ ବା ମାନସଂ ବାପରାଧମ୍।\nବିହିତମବିହିତଂ ବା ସର୍ବମେତତ୍କ୍ଷମସ୍ୱ\nଜୟ ଜୟ କରୁଣାବ୍ଧେ ଶ୍ରୀମହାଦେବ ଶମ୍ଭୋ॥"
    },
    sanskrit: {
      title: "शिवापराधक्षमापण स्तोत्रम् (आदि शंकराचार्य — आद्य व अन्त्य श्लोक)",
      text: "आदौ कर्मप्रसङ्गात्कलयति कलुषं मातृकुक्षौ स्थितं मां\nविण्मूत्रामेध्यमध्ये क्वथयति नितरां जाठरो जातवेदाः।\nयद्यद्वै तत्र दुःखं व्यथयति नितरां शक्यते केन वक्तुं\nक्षन्तव्यो मेऽपराधः शिव शिव शिव भोः श्रीमहादेव शम्भो॥\n\n[सम्पूर्ण १६ श्लोक — श्रृंगेरी शारदा पीठम् के अनुसार एक पृथक् पृष्ठ पर]\n\nकरचरणकृतं वाक्कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम्।\nविहितमविहितं वा सर्वमेतत्क्षमस्व\nजय जय करुणाब्धे श्रीमहादेव शम्भो॥"
    },
    english: {
      title: "Shivaparadhakshamapana Stotram (Opening & Closing — Adi Shankaracharya)",
      text: "Ādau Karma-Prasaṅgāt Kalayati Kaluṣaṁ Mātṛ-Kukṣau Sthitaṁ Mām\nViṇ-Mūtrāmedhya-Madhye Kvathayati Nitarāṁ Jāṭharo Jātavedāḥ।\nYad-Yad Vai Tatra Duḥkhaṁ Vyathayati Nitarāṁ Śakyate Kena Vaktuṁ\nKṣantavyo Me'parādhaḥ Śiva Śiva Śiva Bhoḥ Śrī-Mahādeva Śambho॥\n\n[Complete 16 verses — Sringeri Sharada Peetham recension — dedicated page coming]\n\nKara-Caraṇa-Kṛtaṁ Vāk-Kāyajaṁ Karmajaṁ Vā\nŚravaṇa-Nayana-Jaṁ Vā Mānasaṁ Vāparādham।\nVihitam Avihitaṁ Vā Sarvam Etat Kṣamasva\nJaya Jaya Karuṇābdhe Śrī-Mahādeva Śambho॥"
    },
    meaning: {
      odia: "ମୁଁ ଗର୍ଭ ଦୁଃଖ, ଜନ୍ମ, ବୃଦ୍ଧ ଓ ମୃ‌ ତ୍ୟୁ ଦୁଃଖ — ସ'ବୁ ଅଜ୍ଞ-ଜ୍ଞ ଅ‌ ପ‌ ରାଧ କ‌ ର‌ ଛ‌ ି। ଶ‌ ିବ ଶ‌ ିବ ଶ‌ ିବ — ହୁ କ‌ ୃ‌ ପ‌ ା‌ ।",
      sanskrit: "गर्भ-दुःख, जन्म, वृद्धावस्था, मृत्यु — जाने-अनजाने सभी अपराध क्षमा करें। हाथ-पैर-वाणी-शरीर-कर्म-श्रवण-नेत्र-मन से हुए सभी पाप क्षमा हों। शिव शिव शिव भोः।",
      english: "From the suffering in the womb, through birth and old age to death — I have committed countless known and unknown sins. O Shiva, forgive them all. Whatever wrong was done through hands, feet, speech, body, senses, or mind — forgive, O ocean of compassion."
    },
    benefits: "Complete forgiveness of all sins, Shiva's grace, peace of conscience.",
    morning: true,
    verses: 16
  },

  /* ── daridrya-dahana-shiva ── */
  {
    id: "daridrya-dahana-shiva",
    deity: "Shiva",
    tags: ["shiva", "prosperity", "protection"],
    repetitions: "1",
    timing: "Morning, during Shiva puja",
    status: "partial",
    odia: {
      title: "ଦାରିଦ୍ର୍ୟ ଦହନ ଶିବ ସ୍ତୋତ୍ରମ୍ (ପ୍ରଥମ ୩ ଶ୍ଳୋକ)",
      text: "ବିଶ୍ୱେଶ୍ୱରାୟ ନରକାର୍ଣ୍ଣବତାରଣାୟ\nକର୍ଣ୍ଣାମୃତାୟ ଶଶିଶେଖରଭୂଷଣାୟ।\nକର୍ପୂରକାନ୍ତିଧବଳାୟ ଜଟାଧରାୟ\nଦାରିଦ୍ର୍ୟଦୁଃଖଦହନାୟ ନମଃ ଶିବାୟ॥\n\nଗୌରୀପ୍ରିୟାୟ ରଜନୀଶକଲାଧରାୟ\nକାଲାନ୍ତକାୟ ଭୁଜଗାଧିପକଙ୍କଣାୟ।\nଗଙ୍ଗାଧରାୟ ଗଜରାଜବିମର୍ଦ୍ଦନାୟ\nଦାରିଦ୍ର୍ୟଦୁଃଖଦହନାୟ ନମଃ ଶିବାୟ॥\n\nଭକ୍ତିପ୍ରିୟାୟ ଭବରୋଗଭୟାପହାୟ\nଉଗ୍ରାୟ ଦୁର୍ଗଭବସାଗରତାରଣାୟ।\nଜ୍ୟୋତିର୍ମୟାୟ ଗୁଣନାମସୁନର୍ତ୍ତନାୟ\nଦାରିଦ୍ର୍ୟଦୁଃଖଦହନାୟ ନମଃ ଶିବାୟ॥\n\n[ସମ୍ପୂର୍ଣ ସ୍ତୋତ୍ର — ଏକ ସ୍ୱତନ୍ତ୍ର ପୃଷ୍ଠ ଆସୁଛି]"
    },
    sanskrit: {
      title: "दारिद्र्यदहन शिव स्तोत्रम् (प्रथम ३ श्लोक)",
      text: "विश्वेश्वराय नरकार्णवतारणाय\nकर्णामृताय शशिशेखरभूषणाय।\nकर्पूरकान्तिधवलाय जटाधराय\nदारिद्र्यदुःखदहनाय नमः शिवाय॥\n\nगौरीप्रियाय रजनीशकलाधराय\nकालान्तकाय भुजगाधिपकङ्कणाय।\nगङ्गाधराय गजराजविमर्दनाय\nदारिद्र्यदुःखदहनाय नमः शिवाय॥\n\nभक्तिप्रियाय भवरोगभयापहाय\nउग्राय दुर्गभवसागर-तारणाय।\nज्योतिर्मयाय गुणनामसुनर्तनाय\nदारिद्र्यदुःखदहनाय नमः शिवाय॥\n\n[सम्पूर्ण स्तोत्र — एक पृथक् पृष्ठ पर]"
    },
    english: {
      title: "Daridrya Dahana Shiva Stotram (First 3 Verses)",
      text: "Viśveśvarāya Narakārṇava-Tāraṇāya\nKarṇāmṛtāya Śaśiśekhara-Bhūṣaṇāya।\nKarpūra-Kānti-Dhavalāya Jaṭādharāya\nDāridrya-Duḥkha-Dahanāya Namaḥ Śivāya॥\n\nGaurī-Priyāya Rajanīśa-Kalādharāya\nKālāntakāya Bhujagādhipa-Kaṅkaṇāya।\nGaṅgādharāya Gajarāja-Vimardanāya\nDāridrya-Duḥkha-Dahanāya Namaḥ Śivāya॥\n\nBhakti-Priyāya Bhava-Roga-Bhayāpahāya\nUgrāya Durga-Bhava-Sāgara-Tāraṇāya।\nJyotirmayāya Guṇa-Nāma-Su-Nartanāya\nDāridrya-Duḥkha-Dahanāya Namaḥ Śivāya॥\n\n[Complete stotram — dedicated page coming]"
    },
    meaning: {
      odia: "ବିଶ୍ୱେଶ୍ୱର, ଗୌରୀ ପ୍ରିୟ, ଭକ୍ତ ପ୍ରିୟ — ଦାରିଦ୍ର୍ୟ ଓ ଦୁଃଖ ଦହନ କରୁଥିବା ଶ‌ ିବଙ୍କ ବ‌ ନ୍ଦ‌ ନ।",
      sanskrit: "विश्वेश्वर, गौरीप्रिय, भक्तप्रिय — दारिद्र्य और दुःख को दहन करने वाले शिव को नमस्कार।",
      english: "Salutations to Shiva who destroys poverty and suffering — Lord of the universe, beloved of Gauri, beloved of devotees, bearer of the moon, Gangadhara."
    },
    benefits: "Removal of poverty, suffering, and worldly fears; Shiva's grace.",
    morning: true,
    verses: 8
  },

];

/* ─────────────────────────────────────────────────────
   Build the flat MANTRAS lookup map + auto-fill stubs
───────────────────────────────────────────────────── */
const _fullMap = {};
MANTRAS_FULL.forEach(e => { _fullMap[e.id] = e; });

/* Collect every stub id that appears in SECTIONS */
const _allStubIds = new Set();
SECTIONS.forEach(sec => sec.stubs.forEach(s => _allStubIds.add(s.id)));

/* Build the final MANTRAS array: full entries + generated stubs for missing ids */
const MANTRAS = [];
_allStubIds.forEach(id => {
  if (_fullMap[id]) {
    MANTRAS.push(_fullMap[id]);
  } else {
    /* Find first stub definition that has this id to get the English title */
    let title = id;
    let deity = "Universal";
    for (const sec of SECTIONS) {
      const stub = sec.stubs.find(s => s.id === id);
      if (stub) { title = stub.title; deity = sec.deity || "Universal"; break; }
    }
    MANTRAS.push(_stub(id, title, deity));
  }
});

/* ─────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────── */
/** Get all entries that appear in a given section */
function getBySection(sectionId) {
  const sec = SECTIONS.find(s => s.id === sectionId);
  if (!sec) return [];
  return sec.stubs.map(stub => MANTRAS.find(m => m.id === stub.id)).filter(Boolean);
}

function getFeatured()  { return MANTRAS.filter(m => m.featured); }
function getMorning()   { return MANTRAS.filter(m => m.morning);  }
function getEvening()   { return MANTRAS.filter(m => m.evening);  }
function getByTag(tag)  { return MANTRAS.filter(m => m.tags.includes(tag)); }

function searchMantras(q) {
  const lower = q.toLowerCase();
  return MANTRAS.filter(m =>
    (m.sanskrit.title   || '').toLowerCase().includes(lower) ||
    (m.english.title    || '').toLowerCase().includes(lower) ||
    (m.odia.title       || '').toLowerCase().includes(lower) ||
    (m.deity            || '').toLowerCase().includes(lower) ||
    m.tags.some(t => t.includes(lower)) ||
    (m.english.text     || '').toLowerCase().includes(lower) ||
    (m.sanskrit.text    || '').toLowerCase().includes(lower)
  );
}
