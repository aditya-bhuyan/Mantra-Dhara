/**
 * Mantra Dhara — Content Catalog
 *
 * SECTIONS: the 20 navigable sections, each with an ordered list of stotra stubs.
 * MANTRAS:  the individual entries referenced by stub.id — trilingual content lives here.
 *
 * Stub fields:  { id, title }  — human-readable fallback title (English)
 * Entry fields: { id, section, deity, tags, repetitions, timing,
 *                 odia:{title,text}, hindi:{title,text}, english:{title,text},
 *                 meaning:{odia,hindi,english}, benefits,
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
    hindi:   { title: englishTitle, text: "— सामग्री शीघ्र आ रही है —" },
    english: { title: englishTitle, text: "— Content coming soon —" },
    meaning: { odia: "", hindi: "", english: "" },
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
    hindi: {
      title: "गायत्री मंत्र",
      text: "ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यम्\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात् ॥"
    },
    english: {
      title: "Gayatri Mantra",
      text: "Om Bhur Bhuvah Svah\nTat Savitur Varenyam\nBhargo Devasya Dhimahi\nDhiyo Yo Nah Prachodayat ||"
    },
    meaning: {
      odia: "ଆମେ ସେହି ଦିବ୍ୟ ଆଲୋକ ଉପରେ ଧ୍ୟାନ ଦେଉ ଯାହା ଭୂ, ଭୁବ ଏବଂ ସ୍ୱ — ତ୍ରିଲୋକ ଆଲୋକ ଦେଉଛି। ଆମ ବୁଦ୍ଧିକୁ ସଠିକ ପଥ ପ୍ରଦର୍ଶନ କରୁ।",
      hindi: "हम उस दिव्य प्रकाश का ध्यान करते हैं जो तीनों लोकों में व्याप्त है और जो हमारी बुद्धि को सन्मार्ग पर प्रेरित करे।",
      english: "We meditate on the divine light of the Sun that pervades the three worlds. May that divine light illuminate and guide our intellect."
    },
    benefits: "Illumines intellect, removes ignorance, bestows wisdom, purifies mind.",
    featured: true, morning: true, evening: true
  },

  {
    id: "mahamrityunjaya",
    deity: "Shiva",
    tags: ["healing", "protection", "moksha", "shiva"],
    repetitions: "108",
    timing: "Morning or Evening",
    status: "full",
    odia: {
      title: "ମହାମୃତ୍ୟୁଞ୍ଜୟ ମନ୍ତ୍ର",
      text: "ଓଁ ତ୍ର୍ୟମ୍ବକଂ ୟଜାମହେ\nସୁଗନ୍ଧିଂ ପୁଷ୍ଟିବର୍ଦ୍ଧନମ୍ ।\nଉର୍ବ୍ବାରୁକମିବ ବନ୍ଧନାତ୍\nମୃତ୍ୟୋର୍ ମୁକ୍ଷୀୟ ମାଽମୃତାତ୍ ॥"
    },
    hindi: {
      title: "महामृत्युञ्जय मंत्र",
      text: "ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनात्\nमृत्योर्मुक्षीय मामृतात् ॥"
    },
    english: {
      title: "Maha Mrityunjaya Mantra",
      text: "Om Tryambakam Yajamahe\nSugandhim Pushtivardhanam |\nUrvarukamiva Bandhanat\nMrityor Mukshiya Maamritat ||"
    },
    meaning: {
      odia: "ଆମେ ତ୍ରିନୟନ ଭଗବାନ ଶିବଙ୍କ ପୂଜା କରୁ। ଶଶା ଯେପରି ଲତାରୁ ଛୁଟୁଯାଏ, ସେହିପରି ଆମକୁ ମୃତ୍ୟୁ ବନ୍ଧନରୁ ମୁକ୍ତ କର।",
      hindi: "हम तीन नेत्रों वाले भगवान शिव की पूजा करते हैं। जैसे ककड़ी अपनी बेल से मुक्त होती है, वैसे हमें मृत्यु से मुक्त करो।",
      english: "We worship three-eyed Shiva. Just as a ripe cucumber is freed from its vine, may He liberate us from death, granting immortality."
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
      text: "ଓଁ କରାଗ୍ରେ ବସତେ ଲକ୍ଷ୍ମୀ\nକରମଧ୍ୟେ ସରସ୍ୱତୀ ।\nକରମୂଲେ ତୁ ଗୋବିନ୍ଦ\nପ୍ରଭାତେ କରଦର୍ଶନମ୍ ॥"
    },
    hindi: {
      title: "कर दर्शन मंत्र",
      text: "ॐ कराग्रे वसते लक्ष्मीः\nकरमध्ये सरस्वती ।\nकरमूले तु गोविन्दः\nप्रभाते करदर्शनम् ॥"
    },
    english: {
      title: "Kara Darshana Mantra",
      text: "Om Karagre Vasate Lakshmi\nKaramadhye Saraswati |\nKaramule Tu Govinda\nPrabhate Karadarshanam ||"
    },
    meaning: {
      odia: "ହାତ ଆଙ୍ଗୁଳି ଅଗ୍ରରେ ଲକ୍ଷ୍ମୀ, ମଧ୍ୟରେ ସରସ୍ୱତୀ ଏବଂ ମୂଳରେ ଗୋବିନ୍ଦ ବାସ କରନ୍ତି। ଏଣୁ ପ୍ରଭାତରେ ହାତ ଦର୍ଶନ କରିବା ଉଚିତ।",
      hindi: "हाथ के अग्रभाग में लक्ष्मी, मध्य में सरस्वती और मूल में गोविंद निवास करते हैं। इसलिए प्रातःकाल हाथों के दर्शन करने चाहिए।",
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
      title: "ସମୁଦ୍ର ବସନେ ଦେବୀ",
      text: "ସମୁଦ୍ର ବସନେ ଦେବି\nପର୍ବତ ସ୍ତନ ମଣ୍ଡଳେ ।\nବିଷ୍ଣୁ ପତ୍ନି ନମସ୍ତୁଭ୍ୟଂ\nପାଦ ସ୍ପର୍ଶଂ କ୍ଷମସ୍ୱ ମେ ॥"
    },
    hindi: {
      title: "समुद्र वसने देवी",
      text: "समुद्र वसने देवि\nपर्वत स्तन मण्डले ।\nविष्णु पत्नि नमस्तुभ्यं\nपाद स्पर्शं क्षमस्व मे ॥"
    },
    english: {
      title: "Samudra Vasane Devi",
      text: "Samudra Vasane Devi\nParvata Stana Mandale |\nVishnu Patni Namastubhyam\nPada Sparsham Kshamasva Me ||"
    },
    meaning: {
      odia: "ହେ ଦେବୀ, ସମୁଦ୍ର ଯାହାର ବସ୍ତ୍ର ଏବଂ ପର୍ବତ ଯାହାର ସ୍ତନ — ହେ ବିଷ୍ଣୁ ପତ୍ନୀ, ଆପଣଙ୍କୁ ନମସ୍କାର। ମୋ ଚରଣ ସ୍ପର୍ଶ କ୍ଷମା କରନ୍ତୁ।",
      hindi: "हे देवी, जिनका वस्त्र समुद्र और स्तन पर्वत हैं, हे विष्णु-पत्नी, आपको नमस्कार। मेरे चरण-स्पर्श को क्षमा करें।",
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
      text: "ବକ୍ରତୁଣ୍ଡ ମହାକାୟ\nସୂର୍ୟ୍ୟ‌କୋଟି ସମ‌ପ୍ରଭ ।\nନିର୍ବ୍ବିଘ୍ନଂ କୁରୁ ମେ ଦେବ\nସର୍ବ‌କାର୍ଯ୍ୟେଷୁ ସର୍ବ‌ଦା ॥"
    },
    hindi: {
      title: "वक्रतुण्ड महाकाय",
      text: "वक्रतुण्ड महाकाय\nसूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव\nसर्वकार्येषु सर्वदा ॥"
    },
    english: {
      title: "Vakratunda Mahakaya",
      text: "Vakratunda Mahakaya\nSurya Koti Samaprabha |\nNirvighnam Kuru Me Deva\nSarva Karyeshu Sarvada ||"
    },
    meaning: {
      odia: "ହେ ବଙ୍କ ଶୁଣ୍ଡ ଓ ମହାକାୟ ଦେବ, ଯାହାଙ୍କ ଦୀପ୍ତି କୋଟି ସୂର୍ୟ ସମ — ମୋ ସମସ୍ତ କାର୍ଯ୍ୟରୁ ସର୍ବ‌ଦା ବିଘ୍ନ ଦୂର କର।",
      hindi: "हे टेढ़ी सूँड वाले महाकाय देव, जिनकी प्रभा करोड़ सूर्यों के समान है — मेरे सभी कार्यों में सदैव विघ्न दूर करें।",
      english: "O Lord of curved trunk and great form, brilliant as a billion suns — always remove obstacles from all my endeavours."
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
      text: "ଶାନ୍ତାକାରଂ ଭୁଜଗଶୟନଂ\nପଦ୍ମନାଭଂ ସୁରେଶମ୍ ।\nବିଶ୍ୱାଧାରଂ ଗଗନସଦୃଶଂ\nମେଘ‌ବର୍ଣ‌ମ୍ ଶୁଭାଙ୍ଗମ୍ ॥\nଲକ୍ଷ୍ମୀକାନ୍ତଂ କମଲନୟନଂ\nୟୋଗିଭିର୍ ଧ୍ୟାନଗମ୍ୟମ୍ ।\nବନ୍ଦେ ବିଷ୍ଣୁଂ ଭବଭୟହରଂ\nସର୍ବ‌ଲୋକୈକନାଥମ୍ ॥"
    },
    hindi: {
      title: "शान्ताकारं भुजगशयनं",
      text: "शान्ताकारं भुजगशयनं\nपद्मनाभं सुरेशम् ।\nविश्वाधारं गगनसदृशं\nमेघवर्णम् शुभाङ्गम् ॥\nलक्ष्मीकान्तं कमलनयनं\nयोगिभिर्ध्यानगम्यम् ।\nवन्दे विष्णुं भवभयहरं\nसर्वलोकैकनाथम् ॥"
    },
    english: {
      title: "Shantakaram Bhujagashayanam",
      text: "Shantakaram Bhujagashayanam\nPadmanabham Suresham |\nVishvadharam Gaganasadrusham\nMeghavarnam Shubhangam ||\nLakshmikantam Kamalanayanam\nYogibhir Dhyana Gamyam |\nVande Vishnum Bhavabhayaharam\nSarvalokaikanaatham ||"
    },
    meaning: {
      odia: "",
      hindi: "शेषनाग पर शयन करने वाले, जिनकी नाभि में कमल है, लक्ष्मी के प्रिय — उन विष्णु को नमस्कार।",
      english: "I bow to Vishnu — resting on the serpent, with lotus navel, beloved of Lakshmi, lotus-eyed — lord of all worlds, remover of the fear of existence."
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
    hindi: {
      title: "सर्वमङ्गलमाङ्गल्ये",
      text: "सर्वमङ्गलमाङ्गल्ये\nशिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि\nनारायणि नमोऽस्तु ते ॥"
    },
    english: {
      title: "Sarva Mangala Mangalye",
      text: "Sarva Mangala Mangalye\nShive Sarvartha Sadhike |\nSharanye Tryambake Gauri\nNarayani Namo Stu Te ||"
    },
    meaning: {
      odia: "",
      hindi: "हे सर्व-मंगल की मंगलस्वरूपिणी, शरणदात्री, तीन-नेत्री गौरी, नारायणी — आपको नमस्कार।",
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
    hindi: {
      title: "ब्रह्मार्पणम् (गीता 4.24)",
      text: "ॐ ब्रह्मार्पणं ब्रह्म हविः\nब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं\nब्रह्मकर्म समाधिना ॥"
    },
    english: {
      title: "Brahmarpanam (Before Food — Gita 4.24)",
      text: "Om Brahmarpanam Brahma Havih\nBrahm Agnau Brahmana Hutam |\nBrahmaiva Tena Gantavyam\nBrahma Karma Samadhina ||"
    },
    meaning: {
      odia: "ଅର୍ପଣ ବ୍ରହ୍ମ, ହବି ବ୍ରହ୍ମ। ବ୍ରହ୍ମ‌ସମାଧିରେ ରହୁଥିବା ବ୍ୟକ୍ତି ବ୍ରହ୍ମ ପ୍ରାପ୍ତ କରନ୍ତି।",
      hindi: "अर्पण भी ब्रह्म है, हवि भी ब्रह्म है। ऐसे ब्रह्म-समाधि वाले को ब्रह्म ही प्राप्त होता है।",
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
    hindi: {
      title: "सरस्वती नमस्तुभ्यम्",
      text: "सरस्वती नमस्तुभ्यं\nवरदे काम रूपिणि ।\nविद्यारम्भं करिष्यामि\nसिद्धिर्भवतु मे सदा ॥"
    },
    english: {
      title: "Saraswati Namastubhyam",
      text: "Saraswati Namastubhyam\nVarade Kama Rupini |\nVidyarambham Karishyami\nSiddhir Bhavatu Me Sada ||"
    },
    meaning: {
      odia: "ହେ ସରସ୍ୱତୀ, ଆପଣଙ୍କୁ ନମସ୍କାର। ହେ ବରଦାୟିନୀ, ଆମି ବିଦ୍ୟାରମ୍ଭ କରୁଛି — ମୋ‌କୁ ସଦା ସିଦ୍ଧି ମିଳୁ।",
      hindi: "हे सरस्वती, आपको नमस्कार। हे वरदायिनी, मैं विद्या आरंभ करता हूँ, मुझे सदा सिद्धि प्राप्त हो।",
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
    hindi: {
      title: "या कुन्देन्दु",
      text: "या कुन्देन्दु तुषारहार धवला\nया शुभ्रवस्त्रावृता ।\nया वीणावरदण्डमण्डितकरा\nया श्वेतपद्मासना ॥\nया ब्रह्माच्युतशङ्करप्रभृतिभिर्\nदेवैः सदा वन्दिता ।\nसा मां पातु सरस्वती भगवती\nनिःशेषजाड्यापहा ॥"
    },
    english: {
      title: "Ya Kundendu Tusharahara",
      text: "Ya Kundhendu Tushara Hara Dhavala\nYa Shubhra Vastravrta |\nYa Vina Vara Danda Manditakara\nYa Shveta Padmasana ||\nYa Brahma Achyuta Shankara Prabhrtibhir\nDevai Sada Vandita |\nSa Mam Patu Saraswati Bhagavati\nNishesha Jadyapaha ||"
    },
    meaning: {
      odia: "",
      hindi: "कुंद-पुष्प जैसी श्वेत, वीणा-धारिणी, श्वेत-कमल पर विराजमान — वह समस्त जड़ता हरने वाली सरस्वती मेरी रक्षा करें।",
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
    hindi: {
      title: "गुरुर्ब्रह्मा",
      text: "गुरुर्ब्रह्मा गुरुर्विष्णुः\nगुरुर्देवो महेश्वरः ।\nगुरुः साक्षात् परब्रह्म\nतस्मै श्री गुरवे नमः ॥"
    },
    english: {
      title: "Gurur Brahma",
      text: "Gurur Brahma Gurur Vishnu\nGurur Devo Maheshvarah |\nGuruh Sakshat Parabrahma\nTasmai Shri Gurave Namah ||"
    },
    meaning: {
      odia: "ଗୁରୁ ହିଁ ବ୍ରହ୍ମା, ବିଷ୍ଣୁ ଓ ମ‌ହେଶ୍ୱର। ଗୁରୁ ସାକ୍ଷାତ୍ ପ‌ର‌ବ୍ରହ୍ମ। ସେ ଶ୍ରୀ ଗୁରୁ‌ଙ୍କୁ ନ‌ମ‌ସ୍କାର।",
      hindi: "गुरु ही ब्रह्मा, विष्णु और महेश्वर हैं। गुरु साक्षात् परब्रह्म हैं। उन श्री गुरु को नमस्कार।",
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
    hindi: {
      title: "मनोजवं मारुततुल्यवेगम्",
      text: "मनोजवं मारुततुल्यवेगं\nजितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं\nश्रीरामदूतं शरणं प्रपद्ये ॥"
    },
    english: {
      title: "Manojavam Marutatulyavegam",
      text: "Manojavam Marutatulya Vegam\nJitendriyam Buddhimatam Varishtam |\nVata Atmajam Vanarayutha Mukhyam\nSri Rama Dutam Sharanam Prapadye ||"
    },
    meaning: {
      odia: "",
      hindi: "मन की तरह तेज, पवन-पुत्र, इंद्रिय-विजेता, बुद्धिमानों में श्रेष्ठ, श्रीराम के दूत — उनकी शरण लेता हूँ।",
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
    hindi: {
      title: "सर्वे भवन्तु सुखिनः",
      text: "ॐ सर्वे भवन्तु सुखिनः\nसर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु\nमा कश्चिद् दुःखभाग् भवेत् ॥"
    },
    english: {
      title: "Sarve Bhavantu Sukhinah",
      text: "Om Sarve Bhavantu Sukhinah\nSarve Santu Niramayah |\nSarve Bhadrani Pashyantu\nMa Kashchid Duhkha Bhag Bhavet ||"
    },
    meaning: {
      odia: "",
      hindi: "सभी सुखी हों, सभी निरोगी हों, सभी कल्याण देखें, कोई दुःख का भागी न हो।",
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
    hindi: {
      title: "ॐ शान्तिः शान्तिः शान्तिः",
      text: "ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः\nपृथिवी शान्तिरापः शान्तिः ।\nओषधयः शान्तिर्वनस्पतयः शान्तिः\nविश्वेदेवाः शान्तिर्ब्रह्म शान्तिः ।\nसर्वं शान्तिः शान्तिरेव शान्तिः\nसा मा शान्तिरेधि ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Om Shanti Shanti Shanti",
      text: "Om — peace in the heavens, peace in the sky, peace on earth, peace in the waters, peace in the plants.\nMay all gods bring peace, may Brahman bring peace.\nMay that peace come to me.\nOm Shanti Shanti Shanti."
    },
    meaning: {
      odia: "",
      hindi: "संपूर्ण सृष्टि में सब ओर शांति हो। वह शांति मुझमें प्रकट हो।",
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
    hindi: {
      title: "ॐ सह नाव्वतु",
      text: "ॐ सह नाव्वतु\nसह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्वि नाव् अधीतमस्तु\nमा विद्विषावहै ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Om Saha Navavatu",
      text: "Om Saha Navavatu\nSaha Nau Bhunaktu |\nSaha Viryam Karavavahai\nTejasvi Nav Adhitam Astu\nMa Vidvisavahai |\nOm Shanti Shanti Shanti ||"
    },
    meaning: {
      odia: "",
      hindi: "हम दोनों (गुरु-शिष्य) साथ सुरक्षित हों, साथ भोजन करें, साथ वीर्य अर्जित करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें।",
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
    hindi: {
      title: "दीप ज्योति परब्रह्म",
      text: "दीपज्योति परब्रह्म\nदीपज्योतिर्जनार्दनः ।\nदीपो हरतु मे पापं\nदीपज्योतिर्नमोऽस्तु ते ॥"
    },
    english: {
      title: "Deepa Jyoti Parabrahma",
      text: "Deepajyoti Parabrahma\nDeepajyotir Janardanah |\nDeepam Harastu Me Papam\nDeepajyotir Namo Stu Te ||"
    },
    meaning: {
      odia: "",
      hindi: "दीपज्योति ही परब्रह्म है, दीपज्योति ही जनार्दन है। दीप मेरे पाप हरे। दीपज्योति को नमस्कार।",
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
    hindi: {
      title: "असतो मा सद्गमय",
      text: "ॐ असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Asato Ma Sadgamaya",
      text: "Om Asato Ma Sadgamaya |\nTamaso Ma Jyotirgamaya |\nMrityor Ma Amritam Gamaya |\nOm Shanti Shanti Shanti ||"
    },
    meaning: {
      odia: "",
      hindi: "असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर, मृत्यु से अमरता की ओर ले जाओ।",
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
    hindi: {
      title: "करचरण कृतं पापम्",
      text: "करचरणकृतं वाक् कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम् ।\nविहितमविहितं वा सर्वमेतत् क्षमस्व\nजय जय करुणाब्धे श्री महादेव शम्भो ॥"
    },
    english: {
      title: "Karacharana Kritam (Bedtime Forgiveness Prayer)",
      text: "Karacharanakritam Vak Kayajam Karmajam Va\nShravananayanajam Va Manasam Vapa Radham |\nVihitamavihitam Va Sarvametat Kshamasva\nJaya Jaya Karunaabdhe Shri Mahadeva Shambho ||"
    },
    meaning: {
      odia: "",
      hindi: "हाथ, पैर, वाणी, शरीर, कर्म, श्रवण, नेत्र, मन — जो भी जाने-अनजाने पाप हुए, सब क्षमा करें। हे करुणा-सागर महादेव शम्भो, जय जय।",
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
    hindi: {
      title: "हरे कृष्ण महामन्त्र",
      text: "हरे कृष्ण हरे कृष्ण\nकृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम\nराम राम हरे हरे ॥"
    },
    english: {
      title: "Hare Krishna Mahamantra",
      text: "Hare Krishna Hare Krishna\nKrishna Krishna Hare Hare |\nHare Rama Hare Rama\nRama Rama Hare Hare ||"
    },
    meaning: {
      odia: "",
      hindi: "हरे (भगवान की शक्ति), कृष्ण (सर्वाकर्षक), राम (आनंदस्वरूप) — इनके नामों का जप मुक्ति का मार्ग है।",
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
    hindi: {
      title: "राम रामेति",
      text: "राम रामेति रामेति\nरमे रामे मनोरमे ।\nसहस्रनाम तत्तुल्यं\nरामनाम वरानने ॥"
    },
    english: {
      title: "Rama Rameti",
      text: "Rama Rameti Rameti\nRame Rame Manorame |\nSahasranama Tattulyam\nRamanama Varanane ||"
    },
    meaning: {
      odia: "",
      hindi: "'राम राम राम' — मनोरम राम में मेरा मन रमता है। यह एक नाम सहस्र नामों के तुल्य है।",
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
    hindi: {
      title: "लोकाः समस्ताः सुखिनो भवन्तु",
      text: "लोकाः समस्ताः सुखिनो भवन्तु ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Lokah Samastah Sukhino Bhavantu",
      text: "Lokah Samastah Sukhino Bhavantu |\nOm Shanti Shanti Shanti ||"
    },
    meaning: {
      odia: "ସମସ୍ତ ଲୋକ ସୁଖୀ ହୁଅନ୍ତୁ। ଓଁ ଶାନ୍ତି।",
      hindi: "सभी लोक/प्राणी सुखी हों। ॐ शान्ति।",
      english: "May all the worlds and beings be happy. Om Peace Peace Peace."
    },
    benefits: "Universal goodwill, compassion, peaceful closure of any practice."
  },

  /* ── New full entries ── */

  {
    id: "brahma-murari",
    deity: "Brahma / Vishnu / Shiva",
    tags: ["morning", "daily", "universal"],
    repetitions: "1",
    timing: "Morning, upon waking",
    status: "full",
    odia: {
      title: "ବ୍ରହ୍ମ ମୁରାରି ତ୍ରିପୁରାନ୍ତକାରି",
      text: "ବ୍ରହ୍ମ ମୁରାରି ତ୍ରିପୁରାନ୍ତକାରି\nଭାନୁଃ ଶଶୀ ଭୂମି      "
    },
    hindi: {
      title: "ब्रह्म मुरारि त्रिपुरान्तकारि",
      text: "ब्रह्म मुरारि त्रिपुरान्तकारि\nभानुः शशी भूमिसुतो बुधश्च ।\nगुरुश्च शुक्रः शनिराहु-केतवः\nकुर्वन्तु सर्वे मम सुप्रभातम् ॥"
    },
    english: {
      title: "Brahma Murari Tripurantakari",
      text: "Brahma Murari Tripurantakari\nBhanuh Shashi Bhumisuto Budhashcha |\nGurushcha Shukrah Shani Rahu-Ketavah\nKurvantu Sarve Mama Suprabhatam ||"
    },
    meaning: {
      odia: "ବ୍ରହ୍ମା, ଵିଷ୍ଣୁ, ଶିବ, ସୂର୍ୟ, ଚନ୍ଦ୍ର ଓ ନଵ ଗ୍ରହ — ସଭେ ମୋ ପ୍ରଭାତ ଶୁଭ              ",
      hindi: "ब्रह्मा, विष्णु, शिव, सूर्य, चंद्र और नवग्रह — ये सभी मेरे प्रभात को शुभ बनाएं।",
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
    hindi: {
      title: "वासुदेव सुतं देवम्",
      text: "वासुदेवसुतं देवं\nकंसचाणूरमर्दनम् ।\nदेवकी परमानन्दं\nकृष्णं वन्दे जगद्गुरुम् ॥"
    },
    english: {
      title: "Vasudeva Sutam Devam",
      text: "Vasudeva Sutam Devam\nKamsa Chanura Mardanam |\nDevaki Paramananda\nKrishnam Vande Jagadgurum ||"
    },
    meaning: {
      odia: "",
      hindi: "वासुदेव के पुत्र, कंस-चाणूर के संहारक, देवकी के परमानंद — उस जगद्गुरु कृष्ण को वंदन।",
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
    hindi: {
      title: "कर्पूरगौरं करुणावतारं",
      text: "कर्पूरगौरं करुणावतारं\nसंसारसारं भुजगेन्द्रहारम् ।\nसदावसन्तं हृदयारविन्दे\nभवं भवानीसहितं नमामि ॥"
    },
    english: {
      title: "Karpura Gauram Karunavataram",
      text: "Karpura Gauram Karunavataram\nSamsara Saram Bhujagendra Haram |\nSada Vasantam Hridaya Aravinde\nBhavam Bhavani Sahitam Namami ||"
    },
    meaning: {
      odia: "",
      hindi: "कपूर जैसे श्वेत, करुणा के अवतार, सर्पों की माला वाले, संसार-सार — भवानी सहित शिव को नमस्कार।",
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
    hindi: {
      title: "शुभं करोति कल्याणम्",
      text: "शुभं करोति कल्याणम्\nआरोग्यं धनसम्पदाम् ।\nशत्रुबुद्धिविनाशाय\nदीपज्योतिर्नमोऽस्तु ते ॥"
    },
    english: {
      title: "Shubham Karoti Kalyanam",
      text: "Shubham Karoti Kalyanam\nArogyam Dhana Sampadam |\nShatru Buddhi Vinashaya\nDeepajyotir Namo Stu Te ||"
    },
    meaning: {
      odia: "",
      hindi: "जो शुभ करे, कल्याण दे, आरोग्य और धन-संपदा दे, शत्रु-बुद्धि का नाश करे — उस दीपज्योति को नमस्कार।",
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
    hindi: {
      title: "आपदामपहर्तारम्",
      text: "आपदामपहर्तारं दातारं सर्वसम्पदाम् ।\nलोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम् ॥"
    },
    english: {
      title: "Apadam Apahartaram",
      text: "Apadam Apahartaram Dataram Sarva Sampadam |\nLokaabhiramam Sri Ramam Bhuyo Bhuyo Namamyaham ||"
    },
    meaning: {
      odia: "",
      hindi: "विपदाओं को हरने वाले, सर्व-संपदा देने वाले, लोकाभिराम श्रीराम को बार-बार नमस्कार।",
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
    hindi: {
      title: "सर्वेषां स्वस्तिर्भवतु",
      text: "सर्वेषां स्वस्तिर्भवतु ।\nसर्वेषां शान्तिर्भवतु ।\nसर्वेषां पूर्णं भवतु ।\nसर्वेषां मङ्गलं भवतु ॥"
    },
    english: {
      title: "Sarvesham Svastir Bhavatu",
      text: "Sarvesham Svastir Bhavatu |\nSarvesham Shantir Bhavatu |\nSarvesham Purnam Bhavatu |\nSarvesham Mangalam Bhavatu ||"
    },
    meaning: {
      odia: "",
      hindi: "सभी का स्वास्थ्य हो, शांति हो, पूर्णता हो, मंगल हो।",
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
    hindi: {
      title: "पूर्णमदः पूर्णमिदम्",
      text: "ॐ पूर्णमदः पूर्णमिदम्\nपूर्णात् पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय\nपूर्णमेवावशिष्यते ॥\nॐ शान्तिः शान्तिः शान्तिः"
    },
    english: {
      title: "Purnamadah Purnamidam",
      text: "Om Purnamadah Purnamidam\nPurnat Purnam Udachyate |\nPurnasya Purnam Adaya\nPurnam Evavashishyate ||\nOm Shanti Shanti Shanti"
    },
    meaning: {
      odia: "",
      hindi: "वह पूर्ण है, यह भी पूर्ण है। पूर्ण से पूर्ण निकालने पर भी पूर्ण ही शेष रहता है।",
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
    hindi: {
      title: "ॐ द्यौः शान्तिः",
      text: "ॐ द्यौः शान्तिरन्तरिक्षम् शान्तिः\nपृथ्वी शान्तिरापः शान्तिः ।\nओषधयः शान्तिः वनस्पतयः शान्तिः\nविश्वे देवाः शान्तिः ब्रह्म शान्तिः ।\nसर्वं शान्तिः शान्तिरेव शान्तिः\nसा मा शान्तिरेधि ॥\nॐ शान्तिः शान्तिः शान्तिः"
    },
    english: {
      title: "Om Dyauh Shantih (Complete Shanti Path)",
      text: "Om — peace in sky, peace in space, peace on earth, peace in waters.\nPeace in plants, peace in trees, peace in all gods, peace in Brahman.\nMay all peace be peace. May that peace come to me.\nOm Shanti Shanti Shanti."
    },
    meaning: {
      odia: "",
      hindi: "आकाश से लेकर पृथ्वी तक, समस्त सृष्टि में शांति हो। वह शांति मुझमें स्थापित हो।",
      english: "Peace pervades from sky to earth, throughout all creation. May that universal peace be established in me."
    },
    benefits: "Complete peace of mind, harmony with all creation, spiritual calm.",
    evening: true
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
    (m.hindi.title   || '').toLowerCase().includes(lower) ||
    (m.english.title || '').toLowerCase().includes(lower) ||
    (m.odia.title    || '').toLowerCase().includes(lower) ||
    (m.deity         || '').toLowerCase().includes(lower) ||
    m.tags.some(t => t.includes(lower)) ||
    (m.english.text  || '').toLowerCase().includes(lower) ||
    (m.hindi.text    || '').toLowerCase().includes(lower)
  );
}
