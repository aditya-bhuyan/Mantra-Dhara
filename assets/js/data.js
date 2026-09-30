/**
 * Mantra Dhara — Mantra & Sloka Data
 * Structure: { id, section, category, subcategory, deity, tags, repetitions, timing,
 *              odia:{title,text}, hindi:{title,text}, english:{title,text},
 *              meaning:{odia,hindi,english}, benefits, featured?, morning?, evening? }
 */

const MANTRAS = [

  /* ═══════════════════ DAILY MANTRAS ═══════════════════ */

  {
    id: "gayatri",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Gayatri",
    deity: "Surya / Brahman",
    tags: ["morning", "daily", "universal"],
    repetitions: "108 / 1008",
    timing: "Sunrise, Noon, Sunset (Sandhya)",
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
      odia: "ଆମେ ସେହି ଦିବ୍ୟ ଆଲୋକ ଉପରେ ଧ୍ୟାନ ଦେଉ ଯାହା ଭୂ, ଭୁବ ଏବଂ ସ୍ୱ — ତ୍ରିଲୋକ ଆଲୋକ ଦେଉଛି। ଆମ ବୁଦ୍ଧିକୁ ସଠିକ ପଥ ପ୍ରଦର୍ଶ‍ନ କରୁ।",
      hindi: "हम उस दिव्य प्रकाश का ध्यान करते हैं जो तीनों लोकों में व्याप्त है और जो हमारी बुद्धि को सन्मार्ग पर प्रेरित करे।",
      english: "We meditate on the divine light of the Sun that pervades the three worlds — Bhu (Earth), Bhuva (Atmosphere), and Svah (Heaven). May that divine light illuminate and guide our intellect."
    },
    benefits: "Illumines intellect, removes ignorance, bestows wisdom, purifies mind, grants liberation.",
    featured: true,
    morning: true,
    evening: true
  },

  {
    id: "mahamrityunjaya",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Maha Mrityunjaya",
    deity: "Shiva",
    tags: ["healing", "protection", "moksha"],
    repetitions: "108",
    timing: "Morning or Evening",
    odia: {
      title: "ମହାମୃତ୍ୟୁଞ୍ଜୟ ମନ୍ତ୍ର",
      text: "ଓଁ ତ୍ର୍ୟ‍ମ୍ବକଂ ୟଜାମହେ\nସୁଗନ୍ଧିଂ ପୁଷ୍ଟିବର୍ଧ‍ନଂ ।\nଉର୍ବ‍ାରୁ‍କ‍ ମ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍\nଉର୍ବ‍ାରୁ‍କ‍ ମ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍\nଓଁ ତ୍ର୍ୟ‍ ‌ ‌\nଓଁ ତ୍ର୍ୟ‍ ‌\nଉର୍ବ‍ ‌\nଓଁ ତ୍ର୍ ‌"
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
      odia: "ଆମେ ତ୍ରିନୟନ ଭଗବାନ ଶିବଙ୍କ ପୂଜା କରୁ, ଯେ ସୁଗନ୍ଧ ଓ ପୁଷ୍ଟି ଦାୟକ। ଯେପରି ଶଶା ଲତାରୁ ଛୁଟିଯାଏ, ସେହିପରି ଆମ‍କୁ ମୃତ୍ୟୁ ବନ୍ଧ‍ନରୁ ମୁ‍କ୍ ‌ ‌ ‌।",
      hindi: "हम तीन नेत्रों वाले भगवान शिव की पूजा करते हैं। जैसे ककड़ी अपनी बेल से मुक्त होती है, वैसे ही हमें मृत्यु के बंधन से मुक्त करो।",
      english: "We worship the three-eyed Shiva. Just as a ripe cucumber is freed from its vine, may He liberate us from the bondage of death, granting immortality."
    },
    benefits: "Heals illness, removes fear of death, bestows long life, protection, liberation.",
    featured: true,
    morning: true,
    evening: true
  },

  {
    id: "hanuman-beej",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Hanuman",
    deity: "Hanuman",
    tags: ["strength", "protection", "courage", "tuesday"],
    repetitions: "108",
    timing: "Tuesday, Saturday, Morning",
    odia: {
      title: "ହନୁମାନ ବୀଜ ମନ୍ତ୍ର",
      text: "ଓଁ ଐଂ ଭ୍ରୀଂ ହନୁମତେ\nରାମଦୂ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "हनुमान बीज मंत्र",
      text: "ॐ ऐं भ्रीं हनुमते\nरामदूताय नमः ॥"
    },
    english: {
      title: "Hanuman Beej Mantra",
      text: "Om Aim Bhrim Hanumate\nRama Dutaya Namah ||"
    },
    meaning: {
      odia: "ଭଗବାନ ରାମଙ୍କ ଦୂ‍ ‌ ‌ ‌ ‌ ‌।",
      hindi: "भगवान राम के दूत हनुमान जी को प्रणाम।",
      english: "Salutations to Hanuman, the divine messenger of Lord Rama."
    },
    benefits: "Strength, courage, removes obstacles, protection from negative forces.",
    morning: true
  },

  {
    id: "hanuman-moola",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Hanuman",
    deity: "Hanuman",
    tags: ["strength", "devotion", "protection"],
    repetitions: "108",
    timing: "Daily, especially Tuesday and Saturday",
    odia: {
      title: "ହନୁମାନ ଗାୟ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଅଞ୍ଜ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌\nବାୟୁ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌\nତ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "हनुमान गायत्री मंत्र",
      text: "ॐ अञ्जनिसुताय विद्महे\nवायुपुत्राय धीमहि ।\nतन्नो हनुमत् प्रचोदयात् ॥"
    },
    english: {
      title: "Hanuman Gayatri Mantra",
      text: "Om Anjanisutaya Vidmahe\nVayuputraya Dhimahi |\nTanno Hanumat Prachodayat ||"
    },
    meaning: {
      odia: "ଆମ‍ ‌ ‌ ‌ ‌ ‌।",
      hindi: "हम अंजनी के पुत्र हनुमान जी को जानते हैं, वायु के पुत्र का ध्यान करते हैं।",
      english: "We know the son of Anjani, we meditate on the son of Vayu. May that Hanuman inspire and guide us."
    },
    benefits: "Removes fear, grants courage, intelligence, and devotion to the Lord."
  },

  {
    id: "shiva-panchakshara",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Shiva",
    deity: "Shiva",
    tags: ["liberation", "purification", "monday"],
    repetitions: "108 / 1008",
    timing: "Morning, Monday, Pradosha",
    odia: {
      title: "ଶିବ ପଞ୍ଚାକ୍ଷ‍ ‌ ‌ ‌ ‌",
      text: "ଓଁ ନମଃ ଶ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "शिव पञ्चाक्षर मंत्र",
      text: "ॐ नमः शिवाय ॥"
    },
    english: {
      title: "Shiva Panchakshara Mantra",
      text: "Om Namah Shivaya ||"
    },
    meaning: {
      odia: "ଭ‍ ‌ ‌ ‌ ‌ ‌।",
      hindi: "भगवान शिव को नमस्कार। 'न', 'म', 'शि', 'वा', 'य' — ये पाँच अक्षर पृथ्वी, जल, अग्नि, वायु और आकाश के प्रतीक हैं।",
      english: "Salutations to Shiva. The five syllables Na-Ma-Shi-Va-Ya represent the five elements: Earth, Water, Fire, Air and Ether."
    },
    benefits: "Liberation from the cycle of birth and death, purification of the five elements, inner peace.",
    featured: true,
    morning: true,
    evening: true
  },

  {
    id: "vishnu-ashtakshara",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Vishnu",
    deity: "Vishnu",
    tags: ["protection", "liberation", "thursday"],
    repetitions: "108",
    timing: "Morning, Ekadashi, Thursday",
    odia: {
      title: "ଅଷ୍ଟ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ନମୋ ନ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "अष्टाक्षर मंत्र (विष्णु)",
      text: "ॐ नमो नारायणाय ॥"
    },
    english: {
      title: "Ashtakshara Mantra — Vishnu",
      text: "Om Namo Narayanaya ||"
    },
    meaning: {
      odia: "ଭ‍ ‌ ‌ ‌ ‌ ‌।",
      hindi: "भगवान नारायण को नमस्कार। सर्वव्यापी परमात्मा की उपासना।",
      english: "Salutations to Narayana, the all-pervading Supreme Being who is the resting place of all creation."
    },
    benefits: "Protection, liberation, removal of all sins, bestows devotion and peace."
  },

  {
    id: "ganesha-moola",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Ganesha",
    deity: "Ganesha",
    tags: ["new-beginning", "obstacles", "auspicious"],
    repetitions: "108",
    timing: "Before any new work, morning, Wednesday",
    odia: {
      title: "ଗଣ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଗଂ ଗଣ‍ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "गणेश मूल मंत्र",
      text: "ॐ गं गणपतये नमः ॥"
    },
    english: {
      title: "Ganesha Mool Mantra",
      text: "Om Gam Ganapataye Namah ||"
    },
    meaning: {
      odia: "ଗ‍ ‌ ‌ ‌ ‌।",
      hindi: "गणों के स्वामी गणपति को नमस्कार।",
      english: "Salutations to Ganesha, the lord of all Ganas (celestial attendants), remover of obstacles."
    },
    benefits: "Removes obstacles, brings success, auspicious beginnings, wisdom.",
    featured: true,
    morning: true
  },

  {
    id: "ganesha-vakratunda",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Ganesha",
    deity: "Ganesha",
    tags: ["obstacles", "wisdom"],
    repetitions: "21 / 108",
    timing: "Morning, before new work",
    odia: {
      title: "ବକ୍ରତୁ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ବକ୍ରତୁ‍ ‌ ‌ ‌ ‌ ‌ ‌\nସୂର୍ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "वक्रतुण्ड श्लोक",
      text: "वक्रतुण्ड महाकाय\nसूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव\nसर्वकार्येषु सर्वदा ॥"
    },
    english: {
      title: "Vakratunda Shloka (Ganesha)",
      text: "Vakratunda Mahakaya\nSurya Koti Samaprabha |\nNirvighnam Kuru Me Deva\nSarva Karyeshu Sarvada ||"
    },
    meaning: {
      odia: "ହ‍ ‌ ‌ ‌ ‌।",
      hindi: "हे टेढ़ी सूँड और विशाल शरीर वाले देव — मेरे समस्त कार्यों में सदैव विघ्नों को दूर करें।",
      english: "O Lord with a curved trunk and massive body, whose brilliance equals a billion suns — always remove all obstacles from all my endeavours."
    },
    benefits: "Removes obstacles, success in all works, auspicious beginnings."
  },

  {
    id: "devi-navarna",
    section: "mantras",
    category: "Daily Mantras",
    subcategory: "Devi",
    deity: "Durga / Shakti",
    tags: ["shakti", "protection", "navratri"],
    repetitions: "108",
    timing: "Morning, Navratri, Friday",
    odia: {
      title: "ନ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଐଂ ହ୍ରୀଂ କ୍ଲୀଂ\nଚ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "नवार्ण मंत्र (नवदुर्गा)",
      text: "ॐ ऐं ह्रीं क्लीं\nचामुण्डायै विच्चे ॥"
    },
    english: {
      title: "Navarna Mantra (Devi)",
      text: "Om Aim Hrim Klim\nChamundayai Vicche ||"
    },
    meaning: {
      odia: "ଏ ‌ ‌ ‌ ‌ ‌।",
      hindi: "इन नौ अक्षरों में सरस्वती (ऐं), लक्ष्मी (ह्रीं) और दुर्गा (क्लीं) की शक्तियाँ समाहित हैं।",
      english: "These nine syllables contain the powers of Saraswati (Aim), Lakshmi (Hrim), and Durga (Klim). Worship of the goddess Chamunda."
    },
    benefits: "Divine protection, power, liberation from evil, shakti awakening."
  },

  /* ═══════════════════ DAILY SLOKAS ═══════════════════ */

  {
    id: "morning-awakening",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Morning Awakening",
    deity: "Lakshmi / Saraswati / Vishnu",
    tags: ["morning", "awakening", "daily"],
    repetitions: "1 (upon waking)",
    timing: "Upon waking, before rising from bed",
    odia: {
      title: "ପ୍ରାତଃ ସ୍ ‌ ‌ ‌ ‌ ‌",
      text: "କ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "प्रातः स्मरणम् (हाथ दर्शन)",
      text: "ॐ कराग्रे वसते लक्ष्मीः\nकरमध्ये सरस्वती ।\nकरमूले तु गोविन्दः\nप्रभाते करदर्शनम् ॥"
    },
    english: {
      title: "Morning Hand Prayer",
      text: "Om Karagre Vasate Lakshmi\nKaramadhye Saraswati |\nKaramule Tu Govinda\nPrabhate Karadarshanam ||"
    },
    meaning: {
      odia: "ହ‍ ‌ ‌ ‌ ‌।",
      hindi: "हाथ की उँगलियों के अग्रभाग में लक्ष्मी, मध्य में सरस्वती और मूल में गोविंद निवास करते हैं।",
      english: "At the tip of the hand dwells Lakshmi; in the middle, Saraswati; at the base, Govinda. Therefore, one should look at one's hands at dawn each morning."
    },
    benefits: "Auspicious start to the day, gratitude, blessing of work done by the hands.",
    morning: true
  },

  {
    id: "before-food",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Before Food",
    deity: "Brahman",
    tags: ["food", "gratitude", "daily"],
    repetitions: "1 (before eating)",
    timing: "Before each meal",
    odia: {
      title: "ଭ‍ ‌ ‌ ‌ ‌ ‌ ‌ (ଗ‍ ‌ ‌ ‌ ‌ 4.24)",
      text: "ବ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "भोजन श्लोक (गीता 4.24)",
      text: "ॐ ब्रह्मार्पणं ब्रह्म हविः\nब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं\nब्रह्मकर्म समाधिना ॥"
    },
    english: {
      title: "Before-Food Shloka (Gita 4.24)",
      text: "Om Brahmarpanam Brahma Havih\nBrahm Agnau Brahmana Hutam |\nBrahmaiva Tena Gantavyam\nBrahma Karma Samadhina ||"
    },
    meaning: {
      odia: "ଅ‍ ‌ ‌ ‌ ‌ ‌।",
      hindi: "अर्पण भी ब्रह्म है, हवि भी ब्रह्म है। ऐसे ब्रह्म-कर्म-समाधि वाले व्यक्ति को ब्रह्म ही प्राप्त होता है।",
      english: "The act of offering is Brahman, the oblation is Brahman. Brahman alone is attained by one who thus sees Brahman in all action."
    },
    benefits: "Transforms eating into a sacred act, mindfulness, gratitude, purity."
  },

  {
    id: "before-study",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Before Study / Work",
    deity: "Saraswati",
    tags: ["study", "knowledge", "work"],
    repetitions: "1 (before starting)",
    timing: "Before study, learning, or new work",
    odia: {
      title: "ସ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ସ‍ ‌ ‌ ‌ ‌ ‌ ‌\nବ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "सरस्वती विद्या श्लोक",
      text: "ॐ सरस्वती महाभागे\nविद्ये कमललोचने ।\nविद्यारूपे विशालाक्षि\nविद्यां देहि नमोऽस्तु ते ॥"
    },
    english: {
      title: "Saraswati Shloka (Before Study)",
      text: "Om Saraswati Mahabhage\nVidye Kamalalo Chane |\nVidyarupe Vishalakshi\nVidyam Dehi Namo Stu Te ||"
    },
    meaning: {
      odia: "ହ‍ ‌ ‌ ‌ ‌।",
      hindi: "हे महाभाग्यशाली सरस्वती, हे कमल-नयनी — मुझे विद्या प्रदान करें।",
      english: "O greatly blessed Saraswati, goddess of wisdom with lotus eyes — please grant me knowledge. Salutations to thee."
    },
    benefits: "Sharpens intellect, removes confusion, aids learning and memory."
  },

  {
    id: "before-sleep",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Before Sleep",
    deity: "Ratri Devi",
    tags: ["evening", "sleep", "protection"],
    repetitions: "1 (before sleeping)",
    timing: "At bedtime",
    odia: {
      title: "ର‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ର‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "रात्रि सूक्तम् (निद्रा प्रार्थना)",
      text: "ॐ रात्रिदेवी महामाये\nमहाविद्ये महाबले ।\nमहारात्रे महामाये\nसर्वरात्रे नमोऽस्तु ते ॥"
    },
    english: {
      title: "Night Prayer (Before Sleep)",
      text: "Om Ratridevi Mahamaye\nMahavidye Mahabale |\nMaharatre Mahamaye\nSarvaratre Namo Stu Te ||"
    },
    meaning: {
      odia: "ହ‍ ‌ ‌ ‌ ‌।",
      hindi: "हे महामाया रात्रिदेवी, महाविद्या और महाशक्ति — आपको नमस्कार।",
      english: "Salutations to the goddess of the night, the great illusion, the great knowledge, the great power. O all-encompassing night — salutations."
    },
    benefits: "Protection during sleep, peaceful rest, dispels nightmares, divine blessings.",
    evening: true
  },

  {
    id: "ganesha-sloka",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Ganesha",
    deity: "Ganesha",
    tags: ["obstacles", "auspicious", "morning"],
    repetitions: "3 / 11",
    timing: "Morning, before any new work",
    odia: {
      title: "ଗ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ଗ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "गणेश श्लोक",
      text: "गजाननं भूतगणादिसेवितम्\nकपित्थजम्बूफलसारभक्षितम् ।\nउमासुतं शोकविनाशकारणम्\nनमामि विघ्नेश्वरपादपङ्कजम् ॥"
    },
    english: {
      title: "Ganesha Shloka",
      text: "Gajananam Bhutaganadi Sevitam\nKapittja Jambu Phala Sara Bhakshitam |\nUmasutam Shoka Vinasha Karanam\nNamami Vighnesvara Pada Pankajam ||"
    },
    meaning: {
      odia: "ଉ‍ ‌ ‌ ‌ ‌।",
      hindi: "हाथी मुख वाले, उमा के पुत्र, शोक का नाश करने वाले विघ्नेश्वर के चरण-कमल को मैं नमन करता हूँ।",
      english: "I bow to the lotus feet of Vighnesvara — the elephant-faced one, son of Uma, destroyer of all sorrow."
    },
    benefits: "Obstacle removal, auspicious beginning, removal of sorrow, success."
  },

  {
    id: "saraswati-sloka",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Saraswati",
    deity: "Saraswati",
    tags: ["knowledge", "study", "wisdom"],
    repetitions: "3",
    timing: "Morning, before study or any creative work",
    odia: {
      title: "ସ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ୟ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "सरस्वती श्लोक (या कुन्देन्दु)",
      text: "या कुन्देन्दु तुषारहार धवला\nया शुभ्रवस्त्रावृता ।\nया वीणावरदण्डमण्डितकरा\nया श्वेतपद्मासना ॥\nया ब्रह्माच्युतशङ्करप्रभृतिभिर्\nदेवैः सदा वन्दिता ।\nसा मां पातु सरस्वती भगवती\nनिःशेषजाड्यापहा ॥"
    },
    english: {
      title: "Saraswati Shloka (Ya Kundendu)",
      text: "Ya Kundhendu Tushara Hara Dhavala\nYa Shubhra Vastravrta |\nYa Vina Vara Danda Manditakara\nYa Shveta Padmasana ||\nYa Brahma Achyuta Shankara Prabhrtibhir\nDevai Sada Vandita |\nSa Mam Patu Saraswati Bhagavati\nNishesha Jadyapaha ||"
    },
    meaning: {
      odia: "ଶ‍ ‌ ‌ ‌ ‌।",
      hindi: "जो कुंद-पुष्प की तरह श्वेत हैं, वीणा से मण्डित हैं, श्वेत कमल पर विराजती हैं — वह समस्त जड़ता को हरने वाली सरस्वती मेरी रक्षा करें।",
      english: "White as a kunda flower, hands adorned with the veena, seated on a white lotus — may that Saraswati, destroyer of all dullness, protect me."
    },
    benefits: "Bestows knowledge, clear speech, removes ignorance and dullness of mind."
  },

  {
    id: "vishnu-sloka",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Vishnu",
    deity: "Vishnu",
    tags: ["protection", "liberation"],
    repetitions: "3 / 12",
    timing: "Morning or evening",
    odia: {
      title: "ବ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ଶ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "विष्णु श्लोक (शान्ताकारं)",
      text: "शान्ताकारं भुजगशयनं\nपद्मनाभं सुरेशम् ।\nविश्वाधारं गगनसदृशं\nमेघवर्णम् शुभाङ्गम् ॥\nलक्ष्मीकान्तं कमलनयनं\nयोगिभिर्ध्यानगम्यम् ।\nवन्दे विष्णुं भवभयहरं\nसर्वलोकैकनाथम् ॥"
    },
    english: {
      title: "Vishnu Shloka (Shantakaram)",
      text: "Shantakaram Bhujagashayanam\nPadmanabham Suresham |\nVishvadharam Gaganasadrusham\nMeghavarnam Shubhangam ||\nLakshmikantam Kamalanayanam\nYogibhir Dhyana Gamyam |\nVande Vishnum Bhavabhayaharam\nSarvalokaikanaatham ||"
    },
    meaning: {
      odia: "ବ‍ ‌ ‌ ‌ ‌।",
      hindi: "जो शेषनाग पर शयन करते हैं, जिनकी नाभि में कमल है — उन विष्णु को नमस्कार, जो भव-भय का नाश करते और सर्व-लोक के स्वामी हैं।",
      english: "I bow to Vishnu — resting on the serpent, with lotus navel, beloved of Lakshmi, lotus-eyed — who removes the fear of existence and is the one lord of all worlds."
    },
    benefits: "Divine protection, liberation, grace of Vishnu, mental peace."
  },

  {
    id: "shiva-sloka",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Shiva",
    deity: "Shiva",
    tags: ["liberation", "peace", "monday"],
    repetitions: "3 / 11",
    timing: "Morning, Monday, Shivaratri",
    odia: {
      title: "ଶ‍ ‌ ‌ ‌ ‌ ‌",
      text: "କ‍ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "शिव श्लोक (कर्पूरगौरं)",
      text: "कर्पूरगौरं करुणावतारं\nसंसारसारम् भुजगेन्द्रहारम् ।\nसदावसन्तं हृदयारविन्दे\nभवं भवानीसहितं नमामि ॥"
    },
    english: {
      title: "Shiva Shloka (Karpuragauram)",
      text: "Karpuragauram Karunavataaram\nSamsaarasaaram Bhujagendra Haaram |\nSadavasantam Hridayaaravinde\nBhavam Bhavaani Sahitam Namaami ||"
    },
    meaning: {
      odia: "କ‍ ‌ ‌ ‌ ‌।",
      hindi: "जो कपूर की तरह गौर हैं, करुणा के अवतार हैं, सर्पराज का हार पहने हैं — उन भवानी-सहित शिव को नमस्कार।",
      english: "I bow to Shiva — white as camphor, the very incarnation of compassion, wearing the king of serpents as a garland — who dwells in the lotus of the heart, together with Bhavani."
    },
    benefits: "Peace, liberation, removes fears, divine grace of Shiva and Parvati."
  },

  {
    id: "hanuman-sloka",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Hanuman",
    deity: "Hanuman",
    tags: ["strength", "protection", "tuesday"],
    repetitions: "3",
    timing: "Morning, Tuesday, Saturday",
    odia: {
      title: "ହ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ମ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "हनुमान श्लोक (मनोजवं)",
      text: "मनोजवं मारुततुल्यवेगं\nजितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं\nश्रीरामदूतं शरणं प्रपद्ये ॥"
    },
    english: {
      title: "Hanuman Shloka (Manojavam)",
      text: "Manojavam Marutatulya Vegam\nJitendriyam Buddhimatam Varishtam |\nVata Atmajam Vanarayutha Mukhyam\nSri Rama Dutam Sharanam Prapadye ||"
    },
    meaning: {
      odia: "ମ‍ ‌ ‌ ‌ ‌।",
      hindi: "मन की तरह तेज़ गति वाले, इंद्रियों पर विजय प्राप्त — श्रीराम के दूत की शरण लेता हूँ।",
      english: "I seek the refuge of Hanuman — swift as the mind, master of the senses, son of Vayu, beloved messenger of Sri Rama."
    },
    benefits: "Strength, speed of mind, sense-control, wisdom, divine protection."
  },

  {
    id: "devi-sloka",
    section: "slokas",
    category: "Daily Slokas",
    subcategory: "Devi",
    deity: "Durga / Shakti",
    tags: ["shakti", "protection", "friday"],
    repetitions: "3",
    timing: "Morning, Friday, Navratri",
    odia: {
      title: "ଦ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ସ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "देवी श्लोक (सर्वमङ्गल)",
      text: "सर्वमङ्गलमाङ्गल्ये\nशिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि\nनारायणि नमोऽस्तु ते ॥"
    },
    english: {
      title: "Devi Shloka (Sarva Mangala)",
      text: "Sarva Mangala Mangalye\nShive Sarvartha Sadhike |\nSharanye Tryambake Gauri\nNarayani Namo Stu Te ||"
    },
    meaning: {
      odia: "ସ‍ ‌ ‌ ‌ ‌।",
      hindi: "हे सर्व-मंगल की मंगलस्वरूपिणी, हे शिवे, हे शरणदात्री, तीन नेत्रों वाली गौरी, नारायणी — आपको नमस्कार।",
      english: "O Narayani — the most auspicious of all that is auspicious, the giver of all blessings, the refuge of all, the three-eyed Gauri — salutations to thee."
    },
    benefits: "All-round auspiciousness, divine protection, fulfillment of wishes, grace of the goddess."
  },

  /* ═══════════════════ SADHANA / PUJA ═══════════════════ */

  {
    id: "sandhya-savitri",
    section: "sadhana",
    category: "Sadhana / Puja",
    subcategory: "Sandhya Prayers",
    deity: "Surya / Savitri",
    tags: ["morning", "evening", "sandhya", "daily"],
    repetitions: "3 times (Sandhya)",
    timing: "Sunrise, noon, sunset",
    odia: {
      title: "ସ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଆଚ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "संध्या-वंदना क्रम",
      text: "ॐ — आचमन, प्राणायाम और देश-काल स्मरण के बाद:\nॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥"
    },
    english: {
      title: "Sandhya Vandana Sequence",
      text: "Om — Sip water (Achamana), perform Pranayama, recall place and time, then worship:\nOm Bhur Bhuvah Svah.\nTat Savitur Varenyam.\nBhargo Devasya Dhimahi.\nDhiyo Yo Nah Prachodayat."
    },
    meaning: {
      odia: "ସ‍ ‌ ‌ ‌ ‌।",
      hindi: "आचमन, प्राणायाम और देश-काल स्मरण के बाद गायत्री के साथ त्रिकाल संध्या-उपासना।",
      english: "After Achamana, Pranayama, and recollection of place and time — perform Sandhya worship with the Gayatri at the three junctures of day."
    },
    benefits: "Purification, connection to cosmic rhythms, mental clarity, spiritual merit."
  },

  {
    id: "gayatri-sadhana",
    section: "sadhana",
    category: "Sadhana / Puja",
    subcategory: "Gayatri Sadhana",
    deity: "Surya / Brahman",
    tags: ["sadhana", "daily", "morning"],
    repetitions: "108 minimum",
    timing: "Sunrise — daily sadhana",
    odia: {
      title: "ଗ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଭୂର୍ଭୁବଃ ସ୍ୱଃ\nତତ୍ ସବିତୁର୍ ବରେଣ୍ୟଂ ।\nଭର୍ଗୋ ଦେବସ୍ୟ ଧୀମହି ।\nଧିୟୋ ୟୋ ନଃ ପ୍ରଚୋଦୟାତ୍ ॥\n\n[ସୂ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌]"
    },
    hindi: {
      title: "गायत्री साधना क्रम",
      text: "ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥\n\n[सूर्योदय में पूर्व मुख। आचमन। 108 बार जप। सूर्य को अर्घ्य।]"
    },
    english: {
      title: "Gayatri Sadhana Sequence",
      text: "Om Bhur Bhuvah Svah\nTat Savitur Varenyam |\nBhargo Devasya Dhimahi\nDhiyo Yo Nah Prachodayat ||\n\n[Sit facing East at sunrise. Achamana. Chant 108 times with a mala. Offer Arghya to the Sun.]"
    },
    meaning: {
      odia: "ଗ‍ ‌ ‌ ‌ ‌।",
      hindi: "गायत्री साधना — प्रतिदिन सूर्योदय के समय गायत्री मंत्र का जप। मन, वाणी और शरीर की शुद्धि का श्रेष्ठ उपाय।",
      english: "Gayatri Sadhana — daily chanting of the Gayatri Mantra at sunrise. The supreme purifying practice for mind, speech and body."
    },
    benefits: "Highest purification, awakens intellect, removes karma, grants liberation.",
    morning: true
  },

  {
    id: "hanuman-sadhana",
    section: "sadhana",
    category: "Sadhana / Puja",
    subcategory: "Hanuman Sadhana",
    deity: "Hanuman",
    tags: ["sadhana", "tuesday", "saturday"],
    repetitions: "108 / 1008",
    timing: "Tuesday and Saturday, sunrise",
    odia: {
      title: "ହ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ନ‍ ‌ ‌ ‌ ‌ ‌\nର‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "हनुमान साधना मंत्र",
      text: "ॐ नमो हनुमते रुद्रावताराय\nसर्वशत्रुसंहारणाय\nसर्वरोगहराय\nसर्ववशीकरणाय\nरामदूताय स्वाहा ॥"
    },
    english: {
      title: "Hanuman Sadhana Mantra",
      text: "Om Namo Hanumate Rudravataraaya\nSarva Shatru Samhaaranaaya\nSarva Roga Haraaya\nSarva Vashikaranaaya\nRama Dootaya Svaha ||"
    },
    meaning: {
      odia: "ର‍ ‌ ‌ ‌ ‌।",
      hindi: "रुद्र के अवतार हनुमान को नमस्कार — सभी शत्रुओं का संहार, सभी रोगों को दूर करते हैं।",
      english: "Salutations to Hanuman, the avatar of Rudra — who destroys all enemies, removes all diseases — the messenger of Rama. Svaha."
    },
    benefits: "Destroys enemies, heals all diseases, grants strength, removes obstacles."
  },

  /* ═══════════════════ SPECIAL PRAYERS ═══════════════════ */

  {
    id: "protection-kavach",
    section: "special",
    category: "Special Prayers",
    subcategory: "Protection",
    deity: "Universal",
    tags: ["protection", "daily", "morning"],
    repetitions: "3 / 7",
    timing: "Morning, when in danger or fear",
    odia: {
      title: "ସ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ସ‍ ‌ ‌ ‌ ‌ ‌ ‌\nସ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "सर्वरक्षा प्रार्थना",
      text: "ॐ सर्वे भवन्तु सुखिनः\nसर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु\nमा कश्चिद् दुःखभाग् भवेत् ॥"
    },
    english: {
      title: "Universal Protection Prayer",
      text: "Om Sarve Bhavantu Sukhinah\nSarve Santu Niramayah |\nSarve Bhadrani Pashyantu\nMa Kashchid Duhkha Bhag Bhavet ||"
    },
    meaning: {
      odia: "ସ‍ ‌ ‌ ‌ ‌।",
      hindi: "सभी सुखी हों, सभी निरोगी हों, सभी कल्याण देखें, कोई दुःख का भागी न हो।",
      english: "May all beings be happy; may all beings be healthy; may all beings see auspiciousness; may no one suffer."
    },
    benefits: "Universal peace, protection for self and others, compassion, positive energy.",
    featured: true,
    morning: true,
    evening: true
  },

  {
    id: "peace-shanti-mantra",
    section: "special",
    category: "Special Prayers",
    subcategory: "Peace",
    deity: "Universal",
    tags: ["peace", "universal", "evening"],
    repetitions: "3",
    timing: "Morning, evening, after meditation",
    odia: {
      title: "ଶ‍ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଦ‍ ‌ ‌ ‌ ‌ ‌ ‌ ‌\nଓଁ ଶ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "शान्ति मंत्र (सर्व शान्तिः)",
      text: "ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः\nपृथिवी शान्तिरापः शान्तिः ।\nओषधयः शान्तिर्वनस्पतयः शान्तिः\nविश्वेदेवाः शान्तिर्ब्रह्म शान्तिः ।\nसर्वं शान्तिः शान्तिरेव शान्तिः\nसा मा शान्तिरेधि ।\nॐ शान्तिः शान्तिः शान्तिः ॥"
    },
    english: {
      title: "Universal Peace Mantra (Shanti Path)",
      text: "Om — peace in the heavens, peace in the sky, peace on earth, peace in the waters, peace in the plants, peace in the trees. May all gods bring peace, may Brahman bring peace. May all peace, peace alone, be that peace. May that peace come to me.\nOm Shanti Shanti Shanti."
    },
    meaning: {
      odia: "ସ‍ ‌ ‌ ‌ ‌।",
      hindi: "संपूर्ण सृष्टि में सब ओर शांति हो। सभी देव और ब्रह्म शांति लाएं। वह शांति मुझमें प्रकट हो।",
      english: "Peace in the entire creation — sky, atmosphere, earth, water, plants. May universal peace manifest within me."
    },
    benefits: "Inner peace, environmental harmony, calm of mind, cessation of disturbances.",
    evening: true
  },

  {
    id: "health-dhanvantari",
    section: "special",
    category: "Special Prayers",
    subcategory: "Health",
    deity: "Dhanvantari",
    tags: ["healing", "health", "daily"],
    repetitions: "21 / 108",
    timing: "Morning, especially when ill or for prevention",
    odia: {
      title: "ଧ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ନ‍ ‌ ‌ ‌ ‌ ‌\nଧ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "धन्वन्तरि मंत्र (स्वास्थ्य)",
      text: "ॐ नमो भगवते वासुदेवाय\nधन्वन्तरये अमृत-कलश-हस्ताय\nसर्वामय-विनाशाय\nत्रैलोक्य-नाथाय\nश्री महाविष्णवे नमः ॥"
    },
    english: {
      title: "Dhanvantari Mantra (Health)",
      text: "Om Namo Bhagavate Vasudevaya\nDhanvantaraye Amrita Kalasha Hastaya\nSarva Amaya Vinashaya\nTrailokya Naathaya\nSri Maha Vishnave Namah ||"
    },
    meaning: {
      odia: "ଅ‍ ‌ ‌ ‌ ‌।",
      hindi: "अमृत-कलश हाथ में धारण करने वाले, सभी रोगों का नाश करने वाले धन्वन्तरि को नमस्कार।",
      english: "Salutations to Lord Dhanvantari — the divine physician, holding the pot of nectar, destroyer of all diseases, lord of the three worlds."
    },
    benefits: "Heals illness, grants health and longevity, removes diseases.",
    morning: true
  },

  {
    id: "knowledge-hayagriva",
    section: "special",
    category: "Special Prayers",
    subcategory: "Knowledge",
    deity: "Saraswati / Brahman",
    tags: ["knowledge", "study", "wisdom"],
    repetitions: "21",
    timing: "Morning, before study or exams",
    odia: {
      title: "ବ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ବ‍ ‌ ‌ ‌ ‌ ‌\nମ‍ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "विद्या प्राप्ति मंत्र",
      text: "ॐ वाक्यं मे मनसि प्रतिष्ठापय\nमनो मे वाचि प्रतिष्ठापय ।\nआविराविर् म एधि\nवेदस्य म आणीस्थः\nश्रुतं मे मा प्रहासीः ॥"
    },
    english: {
      title: "Knowledge Attainment Mantra",
      text: "Om — Establish my speech in my mind, establish my mind in my speech. May knowledge be manifest in me. May the study of the Vedas be my foundation. May what I have heard never leave me."
    },
    meaning: {
      odia: "ମ‍ ‌ ‌ ‌ ‌।",
      hindi: "मेरी वाणी और मन में समन्वय हो। ज्ञान मुझमें प्रकट हो।",
      english: "May speech and mind be aligned in me. May knowledge manifest within me. May nothing I have learned ever be lost."
    },
    benefits: "Retention of knowledge, clarity of speech, union of mind and word, academic success."
  },

  {
    id: "prosperity-lakshmi",
    section: "special",
    category: "Special Prayers",
    subcategory: "Prosperity",
    deity: "Lakshmi",
    tags: ["prosperity", "wealth", "friday"],
    repetitions: "108",
    timing: "Friday morning, Diwali, monthly Purnima",
    odia: {
      title: "ମ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଶ୍ରୀଂ ହ୍ରୀଂ ଶ୍ରୀଂ\nକ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "महालक्ष्मी मंत्र",
      text: "ॐ श्रीं ह्रीं श्रीं\nकमले कमलालये प्रसीद प्रसीद\nश्रीं ह्रीं श्रीं\nॐ महालक्ष्म्यै नमः ॥"
    },
    english: {
      title: "Mahalakshmi Mantra (Prosperity)",
      text: "Om Shrim Hrim Shrim\nKamale Kamalaalaye Prasida Prasida\nShrim Hrim Shrim\nOm Mahalakshmyai Namah ||"
    },
    meaning: {
      odia: "ହ‍ ‌ ‌ ‌ ‌।",
      hindi: "हे कमल-निवासिनी महालक्ष्मी, प्रसन्न हों। आपको नमस्कार।",
      english: "O Mahalakshmi who resides in the lotus — be pleased, be pleased. Salutations to the great goddess of prosperity."
    },
    benefits: "Prosperity, wealth, abundance, happiness, removal of poverty and debt.",
    featured: true
  },

  {
    id: "obstacle-removal",
    section: "special",
    category: "Special Prayers",
    subcategory: "Removing Obstacles",
    deity: "Ganesha",
    tags: ["obstacles", "success", "new-beginning"],
    repetitions: "21 / 108",
    timing: "Before any new endeavour, Wednesday",
    odia: {
      title: "ବ‍ ‌ ‌ ‌ ‌ ‌ ‌",
      text: "ଓଁ ଗଂ ଗ‍ ‌ ‌ ‌ ‌\nନ‍ ‌ ‌ ‌ ‌ ‌ ‌"
    },
    hindi: {
      title: "विघ्न निवारण मंत्र",
      text: "ॐ गं गणपतये\nनमो नमः ।\nश्री सिद्धिविनायक\nनमो नमः ।\nअष्टविनायक\nनमो नमः ।\nगणपति बाप्पा मोरया ॥"
    },
    english: {
      title: "Obstacle Removal Mantra (Ganesha)",
      text: "Om Gam Ganapataye\nNamo Namah |\nShri Siddhi Vinayaka\nNamo Namah |\nAshta Vinayaka\nNamo Namah |\nGanapati Bappa Moraya ||"
    },
    meaning: {
      odia: "ଗ‍ ‌ ‌ ‌ ‌।",
      hindi: "गणपति को नमस्कार। सिद्धि देने वाले विनायक को नमस्कार।",
      english: "Salutations to Ganapati. Salutations to Siddhi Vinayaka. Salutations to the Ashta Vinayaka. Victory to Lord Ganesha!"
    },
    benefits: "Removes all obstacles, grants success and accomplishment in every endeavour."
  }
];

/* ── Helper functions ── */

function getBySection(section) {
  return MANTRAS.filter(m => m.section === section);
}
function getFeatured() {
  return MANTRAS.filter(m => m.featured);
}
function getMorning() {
  return MANTRAS.filter(m => m.morning);
}
function getEvening() {
  return MANTRAS.filter(m => m.evening);
}
function getByTag(tag) {
  return MANTRAS.filter(m => m.tags.includes(tag));
}
function searchMantras(q) {
  const lower = q.toLowerCase();
  return MANTRAS.filter(m =>
    (m.hindi.title   || '').toLowerCase().includes(lower) ||
    (m.english.title || '').toLowerCase().includes(lower) ||
    (m.odia.title    || '').toLowerCase().includes(lower) ||
    (m.deity         || '').toLowerCase().includes(lower) ||
    (m.category      || '').toLowerCase().includes(lower) ||
    (m.subcategory   || '').toLowerCase().includes(lower) ||
    m.tags.some(t => t.includes(lower)) ||
    (m.english.text  || '').toLowerCase().includes(lower) ||
    (m.hindi.text    || '').toLowerCase().includes(lower)
  );
}
