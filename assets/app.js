// Velvet Vows - Digital Wedding Invitation JS Core

// 1. Initial State & Configuration
let weddingConfig = {
  id: "default-id",
  slug: "rodu-dan-yeni",
  is_published: true,
  subject_identity: {
    groom: {
      full_name: "Rodu Nuryanto",
      nickname: "Rodu",
      father_name: "Ayah Rodu",
      mother_name: "Ibu Rodu",
      bio: "Mempelai Pria",
      photo_url: ""
    },
    bride: {
      full_name: "Yeni Sukma Dewi",
      nickname: "Yeni",
      father_name: "Ayah Yeni",
      mother_name: "Ibu Yeni",
      bio: "Mempelai Wanita",
      photo_url: ""
    },
    guest_greeting_template: "Kepada Yth. Bapak/Ibu/Sdr/i"
  },
  event_details: {
    akad: {
      date: "2026-06-14",
      time_start: "10:00",
      time_end: "Selesai",
      venue_name: "Kediaman Mempelai Wanita",
      venue_address: "Kp. Bedeng Rt.008/004 Desa Gobang, Gang. Masjid Al - Mazahim Sebelum Perumahan",
      maps_url: "https://maps.google.com",
      maps_embed_url: ""
    },
    resepsi: {
      date: "2026-06-14",
      time_start: "10:00",
      time_end: "Selesai",
      venue_name: "Kediaman Mempelai Wanita",
      venue_address: "Kp. Bedeng Rt.008/004 Desa Gobang, Gang. Masjid Al - Mazahim Sebelum Perumahan",
      maps_url: "https://maps.google.com",
      maps_embed_url: ""
    },
    countdown_target: "2026-06-14T10:00:00"
  },
  visual_configs: {
    cover_spacing: {
      label_to_names: 24,
      greeting_to_guest: 4,
      guest_to_button: 24
    },
    theme_id: "watercolor_green",
    primary_color: "#C9A96E",
    secondary_color: "#FAF7F2",
    font_heading: "Cormorant Garamond",
    font_body: "DM Sans",
    animated_bg: {
      type: "falling_leaves",
      intensity: "medium"
    },
    font_color_names: "#C9A96E",
    font_color_headings: "#C9A96E",
    font_color_body: "#2C3E2B",
    font_size_names_cover: 80,
    font_size_names_body: 45,
    font_size_headings: 48,
    font_size_body: 14,
    size_floral_corner: 250,
    size_floral_divider: 200,
    size_avatar: 160,
    text_cover_title: "Undangan Pernikahan",
    text_hero_title: "Save The Date",
    color_cover_title: "#78716c",
    size_cover_title: 16,
    letter_spacing_cover_title: 0.18,
    color_hero_title: "#2c3e2b",
    size_hero_title: 12,
    shadow_blur: 0,
    shadow_color: "#000000",
    letter_spacing_headings: 0,
    letter_spacing_body: 0,
    line_height_body: 1.5,
    names_line_height: 1.1,
    names_stroke_width: 0,
    names_stroke_color: "#000000",
    headings_stroke_width: 0,
    headings_stroke_color: "#000000",
    body_stroke_width: 0,
    body_stroke_color: "#000000",
    cover_title_stroke_width: 0,
    cover_title_stroke_color: "#000000",
    hero_title_stroke_width: 0,
    hero_title_stroke_color: "#000000",
    closing_section: {
      enabled: true,
      card_width: 500,
      card_padding: 32,
      border_radius: 30,
      opacity: 90,
      blur: 10,
      shadow: 12,
      margin_top: 40,
      margin_bottom: 220,
      safe_bottom: 220,
      align: "center",
      text_align: "center",
      title_size: 20,
      body_size: 16,
      names_size: 60
    },
    cover_content: {
      guest_placeholder: "di Tempat",
      btn_text: "Buka Undangan",
      btn_icon: "chevron_right",
      btn_visible: true,
      btn_color: "#C9A96E",
      btn_text_color: "#FFFFFF",
      btn_radius: 9999,
      btn_width: 200,
      btn_height: 44
    },
    countdown_content: {
      show_title: true,
      show_subtitle: true,
      show_countdown: true,
      card_color: "#C9A96E",
      number_color: "#FFFFFF",
      label_color: "#FFFFFF",
      card_radius: 16,
      card_width: 384,
      card_align: "center"
    },
    acara_content: {
      section_title: "Detail Acara",
      section_subtitle: "",
      show_section_title: true,
      show_section_subtitle: false,
      akad_label: "Akad Nikah",
      show_akad: true,
      resepsi_label: "Resepsi",
      show_resepsi: true,
      maps_button_text: "Lihat Lokasi",
      maps_button_visible: true,
      calendar_button_text: "Kalender",
      calendar_button_visible: true
    }
  },
  love_story: [
    {
      date: "Januari, 2023",
      title: "Kenalan",
      description: "Kita pertama kali bertemu di acara teman, saling lempar senyum dan mulai bertukar cerita.",
      photo_url: ""
    },
    {
      date: "Maret, 2024",
      title: "Pernyataan Cinta",
      description: "Setelah setahun dekat, akhirnya kami berkomitmen untuk melangkah ke jenjang yang lebih serius.",
      photo_url: ""
    },
    {
      date: "Januari, 2025",
      title: "Lamaran",
      description: "Di hadapan kedua keluarga besar, kami meresmikan ikatan pertunangan kami.",
      photo_url: ""
    },
    {
      date: "Oktober, 2026",
      title: "Pernikahan",
      description: "Hari bersejarah kami dimulai. Lembaran baru kehidupan pernikahan kami yang penuh berkah.",
      photo_url: ""
    }
  ],
  turut_mengundang: {
    groom_family: [
      "Kel. Bapak Ucok S,H",
      "Kel. Bapak Lorem S,Th",
      "Kel. Ibu D Liam Alexander",
      "Kel. Bapak Olivia Jade S,E",
      "Kel. Noah James",
      "Kel. Sophia Violet",
      "Kel. Lucas Benjamin",
      "Kel. Besar Ava Harper",
      "Kel. Besar Amelia Grace / Roy"
    ],
    bride_family: [
      "Kel. Sarah Anderson, S.E., M.Sc.",
      "Kel. Michael Collins, S.Psi., M.Psi."
    ]
  },
  gifts: {
    bank_accounts: [
      { bank: "BCA", number: "1234567890", name: "Rodu Nuryanto" }
    ],
    ewallets: [
      { provider: "GoPay", number: "08123456789", name: "Yeni Sukma" }
    ]
  },
  media_assets: {
    audio: {
      url: "assets/audio/wedding-piano.mp3",
      title: "Wedding Piano"
    }
  }
};

// 2. Supabase Integration Setup
let supabaseClient = null;

function initSupabase() {
  const url = localStorage.getItem('supabase_url') || 'https://fmgotefjeiuemkbhgjbt.supabase.co';
  const key = localStorage.getItem('supabase_key') || 'sb_publishable_kSO_uZOk7izW5aBNM-OrjQ_MTr_f2Y4';
  if (url && key && typeof supabase !== 'undefined') {
    try {
      supabaseClient = supabase.createClient(url, key);
      console.log("Supabase Client initialized successfully.");
    } catch (e) {
      console.error("Failed to initialize Supabase client:", e);
    }
  }
}

// 3. Database Layer (Supabase with LocalStorage fallback)
const DB = {
  async getMessages() {
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('guest_messages')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) {
          console.error("Supabase getMessages error:", error.message, error.details);
        } else if (data) {
          return data;
        }
      } catch (e) {
        console.error("Supabase select catch error:", e);
      }
    }
    
    // Fallback to LocalStorage
    let local = localStorage.getItem('wedding_messages');
    return local ? JSON.parse(local) : [
      { id: "1", name: "Elizabeth Bennet dan Darcy", message: "Sejatinya pernikahan adalah lembaran baru kehidupan, kebahagiaan, kebersamaan, dan hal-hal baik lainnya yang menyertai.", created_at: new Date(Date.now() - 3600000).toISOString() },
      { id: "2", name: "Edward & Bella", message: "Mantap!! Selamat berbahagia menjalani bahtera rumah tangga yang baru.", created_at: new Date(Date.now() - 7200000).toISOString() }
    ];
  },
  
  async saveMessage(name, message) {
    const newMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      message: message,
      created_at: new Date().toISOString()
    };
    
    if (supabaseClient) {
      try {
        const { error } = await supabaseClient
          .from('guest_messages')
          .insert([newMessage]);
        if (error) {
          console.error("Supabase saveMessage error:", error.message);
          alert("Supabase Error: " + error.message + "\n\nPastikan tabel 'guest_messages' sudah dibuat di SQL Editor Supabase dan RLS policy diaktifkan.");
        } else {
          return true;
        }
      } catch (e) {
        console.error("Supabase insert catch error:", e);
      }
    }
    
    // Fallback to LocalStorage
    let local = localStorage.getItem('wedding_messages');
    let messages = local ? JSON.parse(local) : [
      { id: "1", name: "Elizabeth Bennet dan Darcy", message: "Sejatinya pernikahan adalah lembaran baru kehidupan, kebahagiaan, kebersamaan, dan hal-hal baik lainnya yang menyertai.", created_at: new Date(Date.now() - 3600000).toISOString() },
      { id: "2", name: "Edward & Bella", message: "Mantap!! Selamat berbahagia menjalani bahtera rumah tangga yang baru.", created_at: new Date(Date.now() - 7200000).toISOString() }
    ];
    messages.unshift(newMessage);
    localStorage.setItem('wedding_messages', JSON.stringify(messages));
    return true;
  },

  async saveRSVP(name, attendance, guestCount, message) {
    const rsvp = {
      id: Math.random().toString(36).substring(2, 9),
      guest_name: name,
      attendance: attendance,
      guest_count: parseInt(guestCount) || 1,
      message: message,
      created_at: new Date().toISOString()
    };

    if (supabaseClient) {
      try {
        const { error } = await supabaseClient
          .from('rsvp_responses')
          .insert([rsvp]);
        if (error) {
          console.error("Supabase saveRSVP error:", error.message);
          alert("Supabase Error: " + error.message + "\n\nPastikan tabel 'rsvp_responses' sudah dibuat di SQL Editor Supabase dan RLS policy diaktifkan.");
        } else {
          return true;
        }
      } catch (e) {
        console.error("Supabase RSVP save catch error:", e);
      }
    }

    // Save locally
    let local = localStorage.getItem('wedding_rsvps');
    let rsvps = local ? JSON.parse(local) : [];
    rsvps.unshift(rsvp);
    localStorage.setItem('wedding_rsvps', JSON.stringify(rsvps));
    return true;
  }
};

// Helper to apply dynamic fonts and sizes from visual_configs
function applyDynamicStyles() {
  const v = weddingConfig.visual_configs;
  if (!v) return;
  
  const root = document.documentElement;
  
  // Set custom colors
  if (v.font_color_names) root.style.setProperty('--color-font-names', v.font_color_names);
  if (v.font_color_headings) root.style.setProperty('--color-font-headings', v.font_color_headings);
  if (v.font_color_body) root.style.setProperty('--color-font-body', v.font_color_body);
  
  // Set custom sizes
  if (v.font_size_names_cover) root.style.setProperty('--groom-bride-size-cover', `${v.font_size_names_cover}px`);
  if (v.font_size_names_body) root.style.setProperty('--groom-bride-size-body', `${v.font_size_names_body}px`);
  if (v.font_size_headings) root.style.setProperty('--font-size-headings', `${v.font_size_headings}px`);
  if (v.font_size_body) root.style.setProperty('--font-size-body', `${v.font_size_body}px`);
  if (v.size_floral_corner) root.style.setProperty('--floral-corner-size', `${v.size_floral_corner}px`);
  if (v.size_floral_divider) root.style.setProperty('--floral-divider-size', `${v.size_floral_divider}px`);
  if (v.size_avatar) root.style.setProperty('--avatar-size', `${v.size_avatar}px`);
  
  if (v.color_cover_title) root.style.setProperty('--color-cover-title', v.color_cover_title);
  if (v.size_cover_title) root.style.setProperty('--font-size-cover-title', `${v.size_cover_title}px`);
  if (v.color_hero_title) root.style.setProperty('--color-hero-title', v.color_hero_title);
  if (v.size_hero_title) root.style.setProperty('--font-size-hero-title', `${v.size_hero_title}px`);
  
  if (v.shadow_blur !== undefined) root.style.setProperty('--text-shadow-blur', `${v.shadow_blur}px`);
  if (v.shadow_color) root.style.setProperty('--color-text-shadow', v.shadow_color + '40'); // Soft transparent shadow (~25% opacity)
  if (v.letter_spacing_headings !== undefined) root.style.setProperty('--headings-letter-spacing', `${v.letter_spacing_headings}px`);
  if (v.letter_spacing_body !== undefined) root.style.setProperty('--body-letter-spacing', `${v.letter_spacing_body}px`);
  if (v.line_height_body !== undefined) root.style.setProperty('--body-line-height', v.line_height_body);
  
  if (v.names_line_height !== undefined) root.style.setProperty('--names-line-height', v.names_line_height);
  if (v.names_stroke_width !== undefined) root.style.setProperty('--names-stroke-width', `${v.names_stroke_width}px`);
  if (v.names_stroke_color) root.style.setProperty('--names-stroke-color', v.names_stroke_color);
  
  if (v.headings_stroke_width !== undefined) root.style.setProperty('--headings-stroke-width', `${v.headings_stroke_width}px`);
  if (v.headings_stroke_color) root.style.setProperty('--headings-stroke-color', v.headings_stroke_color);
  if (v.body_stroke_width !== undefined) root.style.setProperty('--body-stroke-width', `${v.body_stroke_width}px`);
  if (v.body_stroke_color) root.style.setProperty('--body-stroke-color', v.body_stroke_color);
  if (v.cover_title_stroke_width !== undefined) root.style.setProperty('--cover-title-stroke-width', `${v.cover_title_stroke_width}px`);
  if (v.cover_title_stroke_color) root.style.setProperty('--cover-title-stroke-color', v.cover_title_stroke_color);
  if (v.hero_title_stroke_width !== undefined) root.style.setProperty('--hero-title-stroke-width', `${v.hero_title_stroke_width}px`);
  if (v.hero_title_stroke_color) root.style.setProperty('--hero-title-stroke-color', v.hero_title_stroke_color);
  
  applyClosingSectionStyles();
}

function applyClosingSectionStyles() {
  console.log("applyClosingSectionStyles EXECUTED");
  const c = weddingConfig.visual_configs?.closing_section;
  console.log('Closing Section Config:', c);

  const sectionEl = document.querySelector('.closing-section');
  if (!sectionEl) return;

  if (c && c.enabled === false) {
    sectionEl.style.display = 'none';
    return;
  } else {
    sectionEl.style.display = ''; 
  }

  // If no config is found yet, use defaults
  const conf = c || {};

  const cardEl = sectionEl.querySelector('.closing-card');
  if (!cardEl) return;

  // 1. Spacing & Alignment for Section
  sectionEl.style.paddingTop = `${conf.margin_top || 40}px`;
  sectionEl.style.paddingBottom = `${conf.safe_bottom || 220}px`;

  // Determine flex alignment for section (horizontal position)
  // Section needs to be flex and full width to use justify-content correctly
  sectionEl.classList.add('flex', 'w-full');
  sectionEl.classList.remove('justify-start', 'justify-center', 'justify-end');
  if (conf.align === 'left') sectionEl.classList.add('justify-start');
  else if (conf.align === 'right') sectionEl.classList.add('justify-end');
  else sectionEl.classList.add('justify-center');

  // 2. Card Styles
  // Ensure leftover mx-auto is purged so it doesn't force center alignment
  cardEl.classList.remove('mx-auto');
  
  cardEl.style.maxWidth = `${conf.card_width || 500}px`;
  cardEl.style.padding = `${conf.card_padding || 32}px`;
  cardEl.style.borderRadius = `${conf.border_radius || 30}px`;
  cardEl.style.backgroundColor = `rgba(255, 255, 255, ${(conf.opacity ?? 90) / 100})`;
  cardEl.style.backdropFilter = `blur(${conf.blur ?? 10}px)`;
  cardEl.style.boxShadow = `0 20px 25px -5px rgba(0, 0, 0, ${(conf.shadow ?? 12) / 100}), 0 8px 10px -6px rgba(0, 0, 0, ${(conf.shadow ?? 12) / 100})`;
  cardEl.style.marginBottom = `${conf.margin_bottom || 0}px`;

  // Determine text alignment for card
  cardEl.classList.remove('text-left', 'text-center', 'text-right');
  if (conf.text_align === 'left') cardEl.classList.add('text-left');
  else if (conf.text_align === 'right') cardEl.classList.add('text-right');
  else cardEl.classList.add('text-center');

  // 3. Typography Styles & Spacing via Inline Styles
  // Judul Terima Kasih
  const titleEl = cardEl.querySelector('h3.font-heading');
  if (titleEl) {
    titleEl.style.fontSize = `${conf.title_size || 20}px`;
    titleEl.style.marginBottom = `${conf.gap_title_body !== undefined ? conf.gap_title_body : 24}px`;
  }

  // Isi Ucapan
  const bodyEl = cardEl.querySelector('p.text-sage-dark');
  if (bodyEl) {
    bodyEl.style.fontSize = `${conf.body_size || 16}px`;
    bodyEl.style.marginBottom = `${conf.gap_body_salam !== undefined ? conf.gap_body_salam : 24}px`;
  }

  // Divider line (if exists) - match its alignment to the text alignment
  const dividerEl = cardEl.querySelector('.h-px.bg-primary\\/30');
  if (dividerEl) {
    dividerEl.style.marginBottom = '16px'; // A fixed visual anchor below body gap
    
    // Dynamic Width: 20% of card width, min 48px, max 100px
    const cardWidth = conf.card_width || 500;
    const dividerWidth = Math.max(48, Math.min(100, cardWidth * 0.2));
    dividerEl.classList.remove('w-16'); // Remove hardcoded Tailwind width
    dividerEl.style.width = `${dividerWidth}px`;
    
    // Dynamic alignment & transform origin
    dividerEl.classList.remove('mx-auto', 'ml-0', 'mr-auto', 'ml-auto', 'mr-0', 'origin-left', 'origin-center', 'origin-right');
    if (conf.text_align === 'left') {
      dividerEl.classList.add('ml-0', 'mr-auto', 'origin-left');
    } else if (conf.text_align === 'right') {
      dividerEl.classList.add('ml-auto', 'mr-0', 'origin-right');
    } else {
      dividerEl.classList.add('mx-auto', 'origin-center');
    }
  }

  // Salam
  const salamEl = cardEl.querySelector('p.italic.text-stone-500');
  if (salamEl) {
    salamEl.style.marginBottom = `${conf.gap_salam_names !== undefined ? conf.gap_salam_names : 16}px`;
  }

  // Nama Mempelai
  const namesEl = cardEl.querySelector('h2.font-script');
  if (namesEl) {
    namesEl.style.fontSize = `${conf.names_size || 60}px`;
    
    // Enable flexbox and apply gap
    namesEl.classList.add('flex');
    namesEl.style.gap = `${conf.gap_names !== undefined ? conf.gap_names : 8}px`;
    
    // Setup flex direction based on layout mode
    if (conf.names_layout === 'stacked') {
      namesEl.classList.remove('flex-row', 'flex-wrap');
      namesEl.classList.add('flex-col');
    } else {
      namesEl.classList.remove('flex-col');
      namesEl.classList.add('flex-row', 'flex-wrap');
    }
    
    // Setup Alignment based on names_align (Left/Center/Right)
    const alignVal = conf.names_align || 'center';
    namesEl.classList.remove('items-start', 'items-center', 'items-end', 'justify-start', 'justify-center', 'justify-end');
    
    if (conf.names_layout === 'stacked') {
      namesEl.classList.add('justify-center');
      if (alignVal === 'left') namesEl.classList.add('items-start');
      else if (alignVal === 'right') namesEl.classList.add('items-end');
      else namesEl.classList.add('items-center');
    } else {
      namesEl.classList.add('items-center'); // Default vertical align for row
      if (alignVal === 'left') namesEl.classList.add('justify-start');
      else if (alignVal === 'right') namesEl.classList.add('justify-end');
      else namesEl.classList.add('justify-center');
    }
    
    // Cleanup old ampersand margins because flex gap handles spacing cleanly
    const ampersand = namesEl.querySelector('.ampersand-symbol');
    if (ampersand) {
      ampersand.classList.remove('mx-1', 'my-2');
    }
  }
}

function applyCoverContent() {
  const c = weddingConfig.visual_configs?.cover_content;
  if (!c) return;

  const guestPlaceholderEl = document.getElementById('cover-guest-placeholder');
  if (guestPlaceholderEl) {
    guestPlaceholderEl.textContent = c.guest_placeholder !== undefined ? c.guest_placeholder : "di Tempat";
  }

  const btnEl = document.getElementById('btn-buka-undangan');
  const btnTextEl = document.getElementById('btn-buka-text');
  const btnIconEl = document.getElementById('btn-buka-icon');

  if (btnEl) {
    if (c.btn_visible === false) {
      btnEl.style.display = 'none';
    } else {
      btnEl.style.display = 'inline-flex';
      btnEl.style.backgroundColor = c.btn_color || "#C9A96E";
      btnEl.style.color = c.btn_text_color || "#FFFFFF";
      btnEl.style.borderRadius = `${c.btn_radius !== undefined ? c.btn_radius : 9999}px`;
      if (c.btn_width) btnEl.style.width = `${c.btn_width}px`;
      if (c.btn_height) btnEl.style.height = `${c.btn_height}px`;
      btnEl.style.border = 'none';
    }
  }

  if (btnTextEl) {
    btnTextEl.textContent = c.btn_text || "Buka Undangan";
  }

  if (btnIconEl) {
    if (c.btn_icon === "none") {
      btnIconEl.style.display = "none";
    } else {
      btnIconEl.style.display = "inline-block";
      let svgContent = '';
      if (c.btn_icon === 'arrow_right') {
        svgContent = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />';
      } else if (c.btn_icon === 'heart') {
        svgContent = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />';
      } else if (c.btn_icon === 'ring') {
        svgContent = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><circle cx="12" cy="7" r="2" fill="currentColor"/>';
      } else {
        svgContent = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />';
      }
      btnIconEl.innerHTML = svgContent;
    }
  }
}

function applyCountdownContent() {
  const c = weddingConfig.visual_configs?.countdown_content;
  if (!c) return;

  const titleEl = document.getElementById('hero-title-label');
  if (titleEl) {
    titleEl.style.display = c.show_title === false ? 'none' : 'block';
  }

  const subtitleEl = document.getElementById('hero-subtitle');
  if (subtitleEl) {
    subtitleEl.style.display = c.show_subtitle === false ? 'none' : 'block';
  }

  // Cover Spacing
  const s = weddingConfig.visual_configs?.cover_spacing || { label_to_names: 24, greeting_to_guest: 4, guest_to_button: 24 };
  const coverLabel = document.getElementById('cover-title-label');
  if (coverLabel) {
    coverLabel.style.setProperty('margin-bottom', s.label_to_names + 'px', 'important');
  }
  
  const greetingName = document.getElementById('opening-guest-name');
  if (greetingName) {
    greetingName.style.setProperty('margin-bottom', (s.greeting_to_guest !== undefined ? s.greeting_to_guest : 4) + 'px', 'important');
  }
  
  const guestCard = document.querySelector('.cover-content .max-w-sm');
  if (guestCard) {
    guestCard.style.setProperty('margin-bottom', s.guest_to_button + 'px', 'important');
  }

  const cardEl = document.getElementById('countdown-card');
  if (cardEl) {
    if (c.show_countdown === false) {
      cardEl.style.display = 'none';
    } else {
      cardEl.style.display = 'flex';
      cardEl.style.backgroundColor = c.card_color || "#C9A96E";
      cardEl.style.borderRadius = `${c.card_radius !== undefined ? c.card_radius : 16}px`;
      
      if (c.card_width !== undefined) {
         cardEl.style.maxWidth = `${c.card_width}px`;
         cardEl.style.width = '100%';
      }
      
      cardEl.classList.remove('mr-auto', 'ml-auto', 'mx-auto', 'ml-0', 'mr-0');
      if (c.card_align === 'left') {
        cardEl.classList.add('mr-auto', 'ml-0');
      } else if (c.card_align === 'right') {
        cardEl.classList.add('ml-auto', 'mr-0');
      } else {
        cardEl.classList.add('mx-auto');
      }

      const numbers = cardEl.querySelectorAll('span.text-3xl');
      const labels = cardEl.querySelectorAll('span.uppercase');
      const separators = cardEl.querySelectorAll('div.text-2xl');

      numbers.forEach(el => el.style.color = c.number_color || "#FFFFFF");
      labels.forEach(el => el.style.color = c.label_color || "#FFFFFF");
      separators.forEach(el => el.style.color = c.label_color || "#FFFFFF");
    }
  }
}

function applyAcaraContent() {
  const c = weddingConfig.visual_configs?.acara_content;
  if (!c) return;

  const acaraSection = document.getElementById('acara');
  const sectionTitleWrap = document.getElementById('acara-section-title-wrap');
  const sectionTitle = document.getElementById('acara-section-title');
  const sectionSubtitle = document.getElementById('acara-section-subtitle');

  if (sectionTitleWrap) {
    if (c.show_section_title === false && c.show_section_subtitle === false) {
      sectionTitleWrap.style.display = 'none';
    } else {
      sectionTitleWrap.style.display = '';
    }
  }

  if (sectionTitle) {
    sectionTitle.textContent = c.section_title !== undefined ? c.section_title : "Detail Acara";
    sectionTitle.style.display = c.show_section_title === false ? 'none' : '';
  }

  if (sectionSubtitle) {
    sectionSubtitle.textContent = c.section_subtitle || "";
    sectionSubtitle.style.display = c.show_section_subtitle === false ? 'none' : '';
  }

  const akadBlock = document.getElementById('akad-block');
  const akadLabel = document.getElementById('akad-label');
  if (akadBlock) {
    akadBlock.style.display = c.show_akad === false ? 'none' : '';
  }
  if (akadLabel) {
    akadLabel.textContent = c.akad_label !== undefined ? c.akad_label : "Akad Nikah";
  }

  const resepsiBlock = document.getElementById('resepsi-block');
  const resepsiLabel = document.getElementById('resepsi-label');
  if (resepsiBlock) {
    resepsiBlock.style.display = c.show_resepsi === false ? 'none' : '';
  }
  if (resepsiLabel) {
    resepsiLabel.textContent = c.resepsi_label !== undefined ? c.resepsi_label : "Resepsi";
  }

  const acaraDivider = document.getElementById('acara-divider');
  if (acaraDivider) {
    const bothShown = (c.show_akad !== false) && (c.show_resepsi !== false);
    acaraDivider.style.display = bothShown ? '' : 'none';
  }

  // PATCH: Grid Responsive Logic for Desktop
  const acaraCard = document.querySelector('#acara .wedding-card');
  if (acaraCard && akadBlock && resepsiBlock) {
    // Reset inline overrides first
    acaraCard.style.removeProperty('grid-template-columns');
    akadBlock.style.removeProperty('grid-column');
    resepsiBlock.style.removeProperty('grid-column');
    resepsiBlock.style.removeProperty('border-left');

    const isAkadOn = c.show_akad !== false;
    const isResepsiOn = c.show_resepsi !== false;

    if (isAkadOn && isResepsiOn) {
      acaraCard.style.setProperty('grid-template-columns', '1fr 1fr', 'important');
    } else if (!isAkadOn && isResepsiOn) {
      acaraCard.style.setProperty('grid-template-columns', '1fr', 'important');
      resepsiBlock.style.setProperty('grid-column', '1', 'important');
      resepsiBlock.style.setProperty('border-left', 'none', 'important');
    } else if (isAkadOn && !isResepsiOn) {
      acaraCard.style.setProperty('grid-template-columns', '1fr', 'important');
      akadBlock.style.setProperty('grid-column', '1', 'important');
    } else {
      // Both OFF -> We will hide the entire section below, but let's reset card anyway
      acaraCard.style.setProperty('grid-template-columns', '1fr', 'important');
    }

    // Restore styling if not both OFF
    if (isAkadOn || isResepsiOn) {
      acaraCard.style.background = '';
      acaraCard.style.borderColor = '';
      acaraCard.style.boxShadow = '';
      const deco = acaraCard.querySelector('.absolute.rounded-full');
      if (deco) deco.style.display = '';
    }
  }

  // PATCH: Data Relation Acara
  const isAkadOn = c.show_akad !== false;
  const isResepsiOn = c.show_resepsi !== false;
  const btnMaps = document.getElementById('akad-map-btn');
  const btnCal = document.getElementById('akad-calendar-btn');

  let targetEventData = null;
  let targetEventKey = '';

  if (isAkadOn) {
    targetEventData = weddingConfig.event_details?.akad;
    targetEventKey = 'akad';
  } else if (!isAkadOn && isResepsiOn) {
    targetEventData = weddingConfig.event_details?.resepsi;
    targetEventKey = 'resepsi';
  }

  if (targetEventData) {
    if (btnMaps) {
      btnMaps.href = targetEventData.maps_url || '#';
    }
    if (btnCal) {
      btnCal.setAttribute('onclick', `downloadCalendarEvent('${targetEventKey}'); return false;`);
    }
  }

  // Section Visibility and Button Visibility
  if (!isAkadOn && !isResepsiOn) {
    if (acaraSection) acaraSection.style.display = 'none';
    if (btnMaps) btnMaps.style.display = 'none';
    if (btnCal) btnCal.style.display = 'none';
  } else {
    if (acaraSection) acaraSection.style.display = '';
    const btnMapsText = document.getElementById('maps-btn-text');
    if (btnMaps) btnMaps.style.display = c.maps_button_visible === false ? 'none' : '';
    if (btnMapsText) btnMapsText.textContent = c.maps_button_text !== undefined ? c.maps_button_text : "Lihat Lokasi";
    
    // P0 - Google Maps Routing Logic
    if (btnMaps) {
      let mapsUrl = "";
      const eventDetails = weddingConfig.event_details || {};
      
      if (c.show_akad !== false && eventDetails.akad && eventDetails.akad.maps_url) {
        mapsUrl = eventDetails.akad.maps_url;
      } else if (c.show_resepsi !== false && eventDetails.resepsi && eventDetails.resepsi.maps_url) {
        mapsUrl = eventDetails.resepsi.maps_url;
      }
      
      if (mapsUrl) {
        btnMaps.href = mapsUrl;
      } else {
        btnMaps.href = "https://www.google.com/maps";
        console.warn("[Undangan] Maps URL kosong, mengalihkan ke default google.com/maps");
      }
    }

    const btnCalText = document.getElementById('calendar-btn-text');
    if (btnCal) btnCal.style.display = c.calendar_button_visible === false ? 'none' : '';
    if (btnCalText) btnCalText.textContent = c.calendar_button_text !== undefined ? c.calendar_button_text : "Kalender";
  }
}

// 4. Dom Binding & UI Rendering
function renderWeddingData() {
  applyDynamicStyles();
  applyCoverContent();
  applyCountdownContent();
  applyAcaraContent();
  const c = weddingConfig;
  
  // Set window titles & text headers
  document.title = `Undangan Pernikahan: ${c.subject_identity.groom.nickname} & ${c.subject_identity.bride.nickname}`;
  
  // Update Cover Title & Hero Title (Save the Date) Labels
  const coverTitleEl = document.getElementById('cover-title-label');
  const heroTitleEl = document.getElementById('hero-title-label');
  if (coverTitleEl) coverTitleEl.textContent = (c.visual_configs && c.visual_configs.text_cover_title) || "Undangan Pernikahan";
  if (heroTitleEl) heroTitleEl.textContent = (c.visual_configs && c.visual_configs.text_hero_title) || "Save The Date";
  
  // Update Cover Names & Nicknames
  document.querySelectorAll('.groom-nickname').forEach(el => el.textContent = c.subject_identity.groom.nickname);
  document.querySelectorAll('.bride-nickname').forEach(el => el.textContent = c.subject_identity.bride.nickname);
  document.querySelectorAll('.groom-fullname').forEach(el => el.textContent = c.subject_identity.groom.full_name);
  document.querySelectorAll('.bride-fullname').forEach(el => el.textContent = c.subject_identity.bride.full_name);
  
  // Parents details
  document.querySelectorAll('.groom-parents').forEach(el => el.textContent = `Putra dari ${c.subject_identity.groom.father_name} & ${c.subject_identity.groom.mother_name}`);
  document.querySelectorAll('.bride-parents').forEach(el => el.textContent = `Putri dari ${c.subject_identity.bride.father_name} & ${c.subject_identity.bride.mother_name}`);
  
  // Bios & photos
  document.querySelectorAll('.groom-bio').forEach(el => el.textContent = c.subject_identity.groom.bio);
  document.querySelectorAll('.bride-bio').forEach(el => el.textContent = c.subject_identity.bride.bio);
  
  const groomAvatar = document.querySelector('#groom-avatar-squircle');
  const brideAvatar = document.querySelector('#bride-avatar-squircle');
  
  if (groomAvatar) {
    if (c.subject_identity.groom.photo_url) {
      groomAvatar.innerHTML = `<img src="${c.subject_identity.groom.photo_url}" alt="${c.subject_identity.groom.nickname}">`;
    } else {
      groomAvatar.innerHTML = c.subject_identity.groom.nickname.charAt(0);
    }
  }
  if (brideAvatar) {
    if (c.subject_identity.bride.photo_url) {
      brideAvatar.innerHTML = `<img src="${c.subject_identity.bride.photo_url}" alt="${c.subject_identity.bride.nickname}">`;
    } else {
      brideAvatar.innerHTML = c.subject_identity.bride.nickname.charAt(0);
    }
  }

  // Update Event Details: Akad
  const a = c.event_details.akad;
  document.querySelectorAll('.akad-venue').forEach(el => el.textContent = a.venue_name);
  document.querySelectorAll('.akad-address').forEach(el => el.textContent = a.venue_address);
  document.querySelectorAll('.akad-datetime').forEach(el => {
    el.innerHTML = `${formatIndonesianDate(a.date)}<br>${a.time_start} - ${a.time_end} WIB`;
  });
  const btnAkadMap = document.getElementById('akad-map-btn');
  if (btnAkadMap) btnAkadMap.href = a.maps_url || '#';
  
  // Resepsi
  const r = c.event_details.resepsi;
  document.querySelectorAll('.resepsi-venue').forEach(el => el.textContent = r.venue_name);
  document.querySelectorAll('.resepsi-address').forEach(el => el.textContent = r.venue_address);
  document.querySelectorAll('.resepsi-datetime').forEach(el => {
    el.innerHTML = `${formatIndonesianDate(r.date)}<br>${r.time_start} - ${r.time_end} WIB`;
  });
  const btnResepsiMap = document.getElementById('resepsi-map-btn');
  if (btnResepsiMap) btnResepsiMap.href = r.maps_url || '#';
  
  // Format Date For Section save the date
  const dateObj = new Date(a.date);
  document.querySelectorAll('.wedding-date-str').forEach(el => {
    el.textContent = formatIndonesianDate(a.date);
  });
  
  // Love Story Slider
  renderLoveStory();
  
  // Also Inviting / Turut Mengundang
  renderTurutMengundang();
  
  // Banks & E-wallets Gift popup
  renderGifts();
}

function formatIndonesianDate(dateStr) {
  if (!dateStr) return "";
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const dayName = days[d.getDay()];
  const dayNum = d.getDate();
  const monthName = months[d.getMonth()];
  const year = d.getFullYear();
  return `${dayName}, ${dayNum} ${monthName} ${year}`;
}

// Render Story Carousel
let currentStoryIndex = 0;
function renderLoveStory() {
  const storyContainer = document.getElementById('story-carousel-container');
  const dotContainer = document.getElementById('story-dots');
  if (!storyContainer || !dotContainer) return;
  
  const stories = weddingConfig.love_story;
  if (!stories || stories.length === 0) {
    storyContainer.innerHTML = "<p class='text-center italic opacity-60'>Belum ada cerita cinta.</p>";
    dotContainer.innerHTML = "";
    return;
  }
  
  // Render story item
  const story = stories[currentStoryIndex];
  const photoHtml = story.photo_url ? `
    <div class="w-full max-w-xs mx-auto mb-4 overflow-hidden rounded-xl border border-primary/20 aspect-[4/3] shadow-sm">
      <img src="${story.photo_url}" class="w-full h-full object-cover" alt="${story.title}">
    </div>
  ` : '';
  storyContainer.innerHTML = `
    <div class="text-center animate-fade-in py-4">
      ${photoHtml}
      <h3 class="font-heading text-3xl font-medium text-emerald-800 mb-1">${story.title}</h3>
      <p class="font-heading text-lg text-amber-600 italic mb-4">${story.date}</p>
      <p class="text-stone-600 leading-relaxed font-body max-w-sm mx-auto text-sm px-4">${story.description}</p>
    </div>
  `;
  
  // Render slider dots
  dotContainer.innerHTML = stories.map((_, idx) => `
    <span class="dot-indicator ${idx === currentStoryIndex ? 'active' : ''}" onclick="setStoryIndex(${idx})"></span>
  `).join('');
}

window.setStoryIndex = function(idx) {
  currentStoryIndex = idx;
  renderLoveStory();
};

// Render Also Inviting Card List
function renderTurutMengundang() {
  const gList = document.getElementById('turut-mengundang-groom');
  const bList = document.getElementById('turut-mengundang-bride');
  if (!gList || !bList) return;
  
  const groomFamily = weddingConfig.turut_mengundang.groom_family || [];
  gList.innerHTML = groomFamily.map(name => `<li>${name}</li>`).join('');
  
  const brideFamily = weddingConfig.turut_mengundang.bride_family || [];
  bList.innerHTML = brideFamily.map(name => `<li>${name}</li>`).join('');
}

// Render Bank Accounts & QR Codes in Modal
function renderGifts() {
  const container = document.getElementById('gift-modal-list');
  if (!container) return;
  
  const gifts = weddingConfig.gifts;
  let html = '';
  
  if (gifts.bank_accounts && gifts.bank_accounts.length > 0) {
    html += '<h4 class="font-heading text-xl font-bold mb-3 border-b pb-1 text-emerald-800">Transfer Bank</h4>';
    gifts.bank_accounts.forEach(acc => {
      html += `
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-3 relative">
          <div class="font-cinzel text-xs tracking-wider text-amber-600 font-bold mb-1">${acc.bank}</div>
          <div class="font-heading text-lg font-bold text-stone-800" id="copy-bank-no-${acc.number}">${acc.number}</div>
          <div class="text-stone-500 text-xs mb-3">a.n. ${acc.name}</div>
          <button class="bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs px-3 py-1.5 font-medium transition-all" onclick="copyText('${acc.number}', this)">Salin No Rekening</button>
        </div>
      `;
    });
  }
  
  if (gifts.ewallets && gifts.ewallets.length > 0) {
    html += '<h4 class="font-heading text-xl font-bold mt-4 mb-3 border-b pb-1 text-emerald-800">E-Wallet</h4>';
    gifts.ewallets.forEach(wallet => {
      html += `
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-3 relative">
          <div class="font-cinzel text-xs tracking-wider text-amber-600 font-bold mb-1">${wallet.provider}</div>
          <div class="font-heading text-lg font-bold text-stone-800">${wallet.number}</div>
          <div class="text-stone-500 text-xs mb-3">a.n. ${wallet.name}</div>
          <button class="bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs px-3 py-1.5 font-medium transition-all" onclick="copyText('${wallet.number}', this)">Salin Nomor</button>
        </div>
      `;
    });
  }
  
  container.innerHTML = html || "<p class='italic opacity-60 text-center'>Tidak ada opsi kado digital.</p>";
}

window.copyText = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.textContent;
    btn.textContent = "Tersalin!";
    btn.classList.replace('bg-amber-600', 'bg-emerald-600');
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.replace('bg-emerald-600', 'bg-amber-600');
    }, 2000);
  });
};

// Render Comments List
async function loadMessages() {
  const list = document.getElementById('comments-list-container');
  if (!list) return;
  
  list.innerHTML = "<p class='text-center italic opacity-60 my-4 text-xs'>Memuat ucapan...</p>";
  
  try {
    let messages = await DB.getMessages();
    // Filter out hidden moderated guest messages
    messages = (messages || []).filter(msg => msg.status !== 'hidden');
    
    if (messages.length === 0) {
      list.innerHTML = "<p class='text-center italic opacity-60 my-4 text-xs'>Belum ada ucapan.</p>";
      return;
    }
    
    list.innerHTML = messages.map(msg => {
      const initial = msg.name ? msg.name.trim().charAt(0).toUpperCase() : 'G';
      return `
        <div class="bg-white border border-stone-200 rounded-2xl p-5 mb-4 shadow-sm flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm">${initial}</div>
          <div class="w-full">
            <h5 class="font-heading text-base font-bold text-amber-700 border-b border-stone-100 pb-1 mb-2">${msg.name}</h5>
            <p class="text-stone-600 text-sm leading-relaxed font-body">${msg.message}</p>
          </div>
        </div>
      `;
    }).join('');
  } catch (e) {
    list.innerHTML = "<p class='text-center text-red-500 italic text-xs my-4'>Gagal memuat ucapan.</p>";
  }
}

// 5. Countdown Implementation
let countdownInterval = null;
function startCountdown() {
  const dayEl = document.getElementById('timer-days');
  const hourEl = document.getElementById('timer-hours');
  const minEl = document.getElementById('timer-minutes');
  const secEl = document.getElementById('timer-seconds');
  if (!dayEl) return;
  
  if (countdownInterval) clearInterval(countdownInterval);
  
  const targetDate = new Date(weddingConfig.event_details.countdown_target).getTime();
  
  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
      clearInterval(countdownInterval);
      dayEl.textContent = "00";
      hourEl.textContent = "00";
      minEl.textContent = "00";
      secEl.textContent = "00";
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    dayEl.textContent = days < 10 ? '0' + days : days;
    hourEl.textContent = hours < 10 ? '0' + hours : hours;
    minEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  
  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}

// 6. Floating Particles Leaves Canvas
let canvas = null, ctx = null, leafParticles = [];
function initLeavesCanvas() {
  canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();
  
  class LeafParticle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -20;
      this.size = Math.random() * 4 + 1.5;
      this.speedY = Math.random() * 0.7 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.15;
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rot += this.rotSpeed;
      if (this.y > canvas.height + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = '#C9A96E'; // Gold particles
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 2.5, this.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
  
  leafParticles = [];
  const maxLeaves = weddingConfig.visual_configs.animated_bg.type === 'none' ? 0 : 25;
  for (let i = 0; i < maxLeaves; i++) {
    const p = new LeafParticle();
    p.y = Math.random() * canvas.height;
    leafParticles.push(p);
  }
  
  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    leafParticles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// 7. Background Music Controller
let backgroundMusic = null;
let isMusicPlaying = false;

function initMusic() {
  const url = weddingConfig.media_assets?.audio?.url || "assets/audio/wedding-piano.mp3";
  if (!url) return;
  
  backgroundMusic = new Audio(url);
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.5;
  
  const playBtn = document.getElementById('music-toggle-btn');
  if (playBtn) {
    playBtn.addEventListener('click', toggleMusic);
  }
}

function playMusic() {
  if (backgroundMusic && !isMusicPlaying) {
    backgroundMusic.play().then(() => {
      isMusicPlaying = true;
      updateMusicButtonUI(true);
    }).catch(err => {
      console.warn("Autoplay blocked. Waiting for user interaction.", err);
    });
  }
}

function pauseMusic() {
  if (backgroundMusic && isMusicPlaying) {
    backgroundMusic.pause();
    isMusicPlaying = false;
    updateMusicButtonUI(false);
  }
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function updateMusicButtonUI(playing) {
  const btn = document.getElementById('music-toggle-btn');
  if (!btn) return;
  if (playing) {
    btn.innerHTML = `
      <svg class="w-6 h-6 animate-spin" style="animation-duration: 4s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
      </svg>
    `;
  } else {
    btn.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
      </svg>
    `;
  }
}

// 8. Event Handlers (Modals & Forms)
function setupInteractions() {
  // Opening Cover Button
  const btnOpen = document.getElementById('btn-buka-undangan');
  const curtain = document.getElementById('cover-curtain');
  if (btnOpen && curtain) {
    btnOpen.addEventListener('click', () => {
      curtain.classList.add('opened');
      playMusic();
      
      // Let animations run on open
      setTimeout(() => {
        document.querySelectorAll('.reveal-on-scroll, .reveal-zoom-in, .reveal-slide-right, .reveal-flip-left, .reveal-fade-down').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('visible');
          }
        });
      }, 400);
    });
  }
  
  // Modals management
  const openModal = (id) => document.getElementById(id).classList.add('active');
  const closeModal = (id) => document.getElementById(id).classList.remove('active');
  
  // Kirim Kado
  document.getElementById('btn-kirim-kado')?.addEventListener('click', () => openModal('gift-modal'));
  document.getElementById('gift-modal-close')?.addEventListener('click', () => closeModal('gift-modal'));
  
  // RSVP
  document.getElementById('btn-rsvp-modal')?.addEventListener('click', () => openModal('rsvp-modal'));
  document.getElementById('rsvp-modal-close')?.addEventListener('click', () => closeModal('rsvp-modal'));
  
  // Handle RSVP Submit
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvp-name').value;
      const att = document.querySelector('input[name="rsvp-attendance"]:checked')?.value || 'hadir';
      const count = document.getElementById('rsvp-count').value || 1;
      const note = document.getElementById('rsvp-notes').value || '';
      
      const submitBtn = rsvpForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";
      
      const success = await DB.saveRSVP(name, att, count, note);
      if (success) {
        alert("Konfirmasi kehadiran Anda telah tersimpan. Terima kasih!");
        closeModal('rsvp-modal');
        rsvpForm.reset();
        loadMessages(); // reload comments in case note was written
      } else {
        alert("Gagal menyimpan konfirmasi. Silakan coba lagi.");
      }
      submitBtn.disabled = false;
      submitBtn.textContent = "KIRIM KONFIRMASI";
    });
  }
  
  // Handle Guest Comment Submit
  const messageForm = document.getElementById('message-form');
  if (messageForm) {
    messageForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('message-name').value;
      const note = document.getElementById('message-text').value;
      
      if (!name || !note) {
        alert("Harap isi nama dan pesan Anda.");
        return;
      }
      
      const submitBtn = messageForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";
      
      const success = await DB.saveMessage(name, note);
      if (success) {
        document.getElementById('message-text').value = '';
        await loadMessages();
      } else {
        alert("Gagal mengirim ucapan. Silakan coba lagi.");
      }
      submitBtn.disabled = false;
      submitBtn.textContent = "KIRIM PESAN";
    });
  }
  
  // Closing overlays when clicking outside
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

// 9. Personalized Greeting URL Parser
function parseGuestGreeting() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || urlParams.get('p');
  
  const guestEl = document.getElementById('opening-guest-name');
  const formGuestName = document.getElementById('message-name');
  const rsvpGuestName = document.getElementById('rsvp-name');
  
  if (guestName) {
    if (guestEl) guestEl.textContent = guestName;
    if (formGuestName) formGuestName.value = guestName;
    if (rsvpGuestName) rsvpGuestName.value = guestName;
  }
}

// 10. Navigation & ScrollSpy
function setupNavigation() {
  const sections = ['mempelai', 'acara', 'love-story', 'ucapan'];
  const navItems = document.querySelectorAll('.bottom-nav-item');
  
  const desktopScrollCol = document.querySelector('.lg\\:overflow-y-auto');
  
  // Set active on click
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  const handleScroll = () => {
    let current = '';
    const isDesktop = window.innerWidth >= 1024;
    const scrollPos = (isDesktop && desktopScrollCol) ? (desktopScrollCol.scrollTop + 200) : (window.scrollY + 200);
    
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        let top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = secId;
        }
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
    
    // Reveal Scroll Elements (supports all animation variants)
    document.querySelectorAll('.reveal-on-scroll, .reveal-zoom-in, .reveal-slide-right, .reveal-flip-left, .reveal-fade-down').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  };
  
  // Listen on both window and the desktop column
  window.addEventListener('scroll', handleScroll);
  if (desktopScrollCol) {
    desktopScrollCol.addEventListener('scroll', handleScroll);
  }
  
  // Run once initially to reveal elements visible at load time
  setTimeout(handleScroll, 500);
}

// 11. Live CMS Preview PostMessage Listener
function setupCMSPreviewListener() {
  window.addEventListener('message', (event) => {
    // Basic verification of incoming messages
    if (event.data && event.data.type === 'wedding-config-update') {
      console.log("CMS live update received:", event.data.config);
      weddingConfig = event.data.config;
      
      // Re-initialize dynamic styles, layouts, and texts
      renderWeddingData();
      startCountdown();
      
      // Update background leaf count
      if (weddingConfig.visual_configs.animated_bg.type === 'none') {
        leafParticles = [];
      } else if (leafParticles.length === 0) {
        initLeavesCanvas();
      }
      
      // Load music if URL changed
      const newUrl = weddingConfig.media_assets?.audio?.url || "assets/audio/wedding-piano.mp3";
      if (newUrl) {
        if (backgroundMusic) {
          const currentUrl = backgroundMusic.src;
          // Clean up or check matching src
          if (currentUrl !== newUrl && !currentUrl.endsWith(newUrl)) {
            backgroundMusic.src = newUrl;
            backgroundMusic.play().then(() => {
              isMusicPlaying = true;
              updateMusicButtonUI(true);
            }).catch(err => console.warn("Live music preview autoplay blocked:", err));
          }
        } else {
          initMusic();
          if (backgroundMusic) {
            backgroundMusic.play().then(() => {
              isMusicPlaying = true;
              updateMusicButtonUI(true);
            }).catch(err => console.warn("Live music preview autoplay blocked:", err));
          }
        }
      }
    }
  });
}

// 12. Load configuration from direct index embeds (for downloaded exports)
function loadEmbeddedConfig() {
  const scriptEl = document.getElementById('wedding-embedded-config');
  let embedded = {};
  if (scriptEl && scriptEl.textContent.trim().length > 2) {
    try {
      embedded = JSON.parse(scriptEl.textContent);
    } catch (e) {
      console.error("Error reading embedded config script:", e);
    }
  }
  
  // Try to load from localStorage first for live editing preview sync
  const saved = localStorage.getItem('wedding_config_state');
  if (saved) {
    try {
      const localState = JSON.parse(saved);
      if (localState.subject_identity && (localState.subject_identity.groom.nickname === "Andy" || localState.subject_identity.groom.nickname === "Rodi" || localState.subject_identity.bride.nickname === "Mawar")) {
        console.log("Outdated dummy configuration detected in localStorage. Resetting.");
        localStorage.removeItem('wedding_config_state');
      } else {
        // Merge: defaults <- localState <- embedded config overrides
        weddingConfig = Object.assign(weddingConfig, localState, embedded);
        console.log("Loaded wedding configuration from localStorage & embedded configs.");
        return;
      }
    } catch (e) {
      console.error("Error parsing wedding_config_state from localStorage:", e);
    }
  }

  // Fallback if no localStorage state exists
  if (Object.keys(embedded).length > 0) {
    weddingConfig = Object.assign(weddingConfig, embedded);
    console.log("Loaded embedded wedding configuration.");
  }
}

// 13. Calendar ICS Generator
function downloadCalendarEvent(eventType) {
  const evt = eventType === 'akad' ? weddingConfig.event_details.akad : weddingConfig.event_details.resepsi;
  if (!evt || !evt.date) { alert('Data acara belum lengkap.'); return; }

  const g = weddingConfig.subject_identity.groom.nickname;
  const b = weddingConfig.subject_identity.bride.nickname;
  const title = eventType === 'akad' ? `Akad Nikah ${g} & ${b}` : `Resepsi Pernikahan ${g} & ${b}`;

  const startDate = evt.date.replace(/-/g, '');
  const startTime = (evt.time_start || '08:00').replace(':', '') + '00';
  const endTime = (evt.time_end && evt.time_end !== 'Selesai' ? evt.time_end.replace(':', '') : '23:00'.replace(':', '')) + '00';

  const icsContent = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Sakura Wedding//ID',
    'BEGIN:VEVENT',
    `DTSTART;TZID=Asia/Jakarta:${startDate}T${startTime}`,
    `DTEND;TZID=Asia/Jakarta:${startDate}T${endTime}`,
    `SUMMARY:${title}`,
    `LOCATION:${evt.venue_name} - ${evt.venue_address}`,
    `DESCRIPTION:${title}\\n${evt.venue_address}`,
    'STATUS:CONFIRMED',
    `UID:${Date.now()}@sakura-wedding`,
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${eventType}-${g}-${b}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}
window.downloadCalendarEvent = downloadCalendarEvent;

// 14. Google Maps Embed Renderer
function renderMapsEmbed() {
  // Dynamic DOM injection for Akad Nikah Map components if missing
  const akadBtnContainer = document.querySelector('#akad-calendar-btn')?.parentElement;
  if (akadBtnContainer) {
    if (!document.getElementById('akad-map-btn')) {
      const mapBtn = document.createElement('a');
      mapBtn.id = 'akad-map-btn';
      mapBtn.href = weddingConfig.event_details.akad.maps_url || 'https://maps.google.com';
      mapBtn.target = '_blank';
      mapBtn.className = 'btn-primary text-xs uppercase font-bold px-5 py-2.5';
      mapBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Map
      `;
      akadBtnContainer.classList.add('flex-wrap', 'gap-4');
      akadBtnContainer.appendChild(mapBtn);
    }
    if (!document.getElementById('akad-maps-embed')) {
      const mapsEmbedDiv = document.createElement('div');
      mapsEmbedDiv.id = 'akad-maps-embed';
      mapsEmbedDiv.className = 'mt-6 rounded-xl overflow-hidden border border-primary/20 hidden';
      mapsEmbedDiv.style.height = '200px';
      // Append to the parent container of the button group (the Akad Nikah card body)
      akadBtnContainer.parentNode.appendChild(mapsEmbedDiv);
    }
  }

  const akadEmbed = document.getElementById('akad-maps-embed');
  const resepsiEmbed = document.getElementById('resepsi-maps-embed');

  const akadUrl = weddingConfig.event_details.akad.maps_embed_url || '';
  const resepsiUrl = weddingConfig.event_details.resepsi.maps_embed_url || '';

  const btnAkadMap = document.getElementById('akad-map-btn');
  const btnResepsiMap = document.getElementById('resepsi-map-btn');

  if (akadEmbed) {
    if (akadUrl) {
      akadEmbed.innerHTML = `<iframe src="${akadUrl}" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
      akadEmbed.classList.remove('hidden');
    } else {
      // Try to create embed from maps_url
      const mapsUrl = weddingConfig.event_details.akad.maps_url;
      if (mapsUrl && mapsUrl !== 'https://maps.google.com' && mapsUrl !== '#') {
        const addr = encodeURIComponent(weddingConfig.event_details.akad.venue_address || weddingConfig.event_details.akad.venue_name);
        akadEmbed.innerHTML = `<iframe src="https://maps.google.com/maps?q=${addr}&output=embed" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
        akadEmbed.classList.remove('hidden');
      } else {
        akadEmbed.classList.add('hidden');
      }
    }
  }

  if (resepsiEmbed) {
    if (resepsiUrl) {
      resepsiEmbed.innerHTML = `<iframe src="${resepsiUrl}" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
      resepsiEmbed.classList.remove('hidden');
    } else {
      const mapsUrl = weddingConfig.event_details.resepsi.maps_url;
      if (mapsUrl && mapsUrl !== 'https://maps.google.com' && mapsUrl !== '#') {
        const addr = encodeURIComponent(weddingConfig.event_details.resepsi.venue_address || weddingConfig.event_details.resepsi.venue_name);
        resepsiEmbed.innerHTML = `<iframe src="https://maps.google.com/maps?q=${addr}&output=embed" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
        resepsiEmbed.classList.remove('hidden');
      } else {
        resepsiEmbed.classList.add('hidden');
      }
    }
  }
}

// 15. Theme Integration
function initThemeSystem() {
  if (typeof THEMES !== 'undefined' && typeof applyTheme === 'function') {
    const themeId = weddingConfig.visual_configs.theme_id || 'watercolor_green';
    applyTheme(themeId);
    console.log("Theme applied:", themeId);
  }
}

// Apply dynamic font families from config
function applyDynamicFonts() {
  const v = weddingConfig.visual_configs;
  if (!v) return;
  const root = document.documentElement;

  if (v.font_heading) {
    root.style.setProperty('--font-heading', `'${v.font_heading}', serif`);
    loadGoogleFont(v.font_heading);
  }
  if (v.font_body) {
    root.style.setProperty('--font-body', `'${v.font_body}', sans-serif`);
    loadGoogleFont(v.font_body);
  }

  // Apply primary color to CSS
  if (v.primary_color) {
    root.style.setProperty('--color-primary', v.primary_color);
    // Darken for hover
    root.style.setProperty('--color-primary-hover', darkenColor(v.primary_color, 15));
  }
  if (v.secondary_color) {
    root.style.setProperty('--color-bg-cream', v.secondary_color);
  }
}

function loadGoogleFont(fontName) {
  const id = 'gfont-' + fontName.replace(/\s+/g, '-').toLowerCase();
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@300;400;500;600;700&display=swap`;
  document.head.appendChild(link);
}

function darkenColor(hex, percent) {
  hex = hex.replace('#', '');
  const r = Math.max(0, parseInt(hex.substring(0, 2), 16) - Math.round(255 * percent / 100));
  const g = Math.max(0, parseInt(hex.substring(2, 4), 16) - Math.round(255 * percent / 100));
  const b = Math.max(0, parseInt(hex.substring(4, 6), 16) - Math.round(255 * percent / 100));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// 16. Animation Engine — Background Variants
let bokehElements = [];
let wavesElement = null;

function initAnimatedBackground() {
  const bgType = weddingConfig.visual_configs?.animated_bg?.type || 'falling_leaves';
  
  // Clean up existing backgrounds
  cleanupBackgrounds();

  switch (bgType) {
    case 'falling_leaves':
      initLeavesCanvas();
      break;
    case 'bokeh':
      initBokehBackground();
      break;
    case 'waves':
      initWavesBackground();
      break;
    case 'parallax':
      initParallaxBackground();
      break;
    case 'none':
      // No background animation
      break;
  }
}

function cleanupBackgrounds() {
  // Remove leaves canvas content
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    leafParticles = [];
  }
  // Remove bokeh
  bokehElements.forEach(el => el.remove());
  bokehElements = [];
  // Remove waves
  if (wavesElement) { wavesElement.remove(); wavesElement = null; }
  // Remove parallax class
  document.querySelectorAll('.wedding-bg').forEach(el => {
    el.style.backgroundAttachment = '';
  });
}

function initBokehBackground() {
  const main = document.querySelector('main.wedding-bg');
  if (!main) return;
  
  const colors = [
    weddingConfig.visual_configs.primary_color || '#C9A96E',
    '#E8D5A3', '#D4919B', '#8BB8A0', '#C4836A'
  ];

  for (let i = 0; i < 8; i++) {
    const circle = document.createElement('div');
    circle.className = 'bokeh-circle';
    const size = Math.random() * 200 + 100;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.left = Math.random() * 100 + '%';
    circle.style.top = Math.random() * 100 + '%';
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.animationDuration = (Math.random() * 6 + 5) + 's';
    circle.style.animationDelay = (Math.random() * 3) + 's';
    main.appendChild(circle);
    bokehElements.push(circle);
  }
}

function initWavesBackground() {
  const main = document.querySelector('main.wedding-bg');
  if (!main) return;

  wavesElement = document.createElement('div');
  wavesElement.className = 'waves-bg';
  wavesElement.innerHTML = '<div class="wave"></div><div class="wave"></div>';
  main.appendChild(wavesElement);
}

function initParallaxBackground() {
  document.querySelectorAll('.wedding-bg').forEach(el => {
    el.style.backgroundAttachment = 'fixed';
  });
  // Also keep subtle leaves
  initLeavesCanvas();
}

// 17. Typography Animations
function initTypographyAnimations() {
  const v = weddingConfig.visual_configs;
  if (!v) return;

  // Marquee - scrolling couple names
  if (v.marquee_enabled) {
    document.querySelectorAll('.names-heading').forEach(el => {
      if (!el.classList.contains('animate-marquee-applied')) {
        el.classList.add('animate-marquee-applied');
        el.style.animation = `marquee ${v.marquee_speed || 25}s linear infinite`;
      }
    });
  } else {
    document.querySelectorAll('.names-heading.animate-marquee-applied').forEach(el => {
      el.classList.remove('animate-marquee-applied');
      el.style.animation = '';
    });
  }

  // Typewriter effect on hero title
  if (v.typewriter_enabled) {
    const heroTitle = document.getElementById('hero-title-label');
    if (heroTitle && !heroTitle.classList.contains('typewriter-applied')) {
      heroTitle.classList.add('typewriter-applied', 'typewriter-text');
    }
  } else {
    const heroTitle = document.getElementById('hero-title-label');
    if (heroTitle) {
      heroTitle.classList.remove('typewriter-applied', 'typewriter-text');
    }
  }

  // Letter stagger on section titles
  if (v.letter_stagger_enabled) {
    document.querySelectorAll('.wedding-section-title').forEach(title => {
      if (title.classList.contains('letter-stagger-applied')) return;
      title.classList.add('letter-stagger-applied', 'letter-stagger');
      const text = title.textContent;
      title.innerHTML = text.split('').map((char, i) =>
        `<span style="animation-delay: ${i * 0.05}s">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');
    });
  }
}

// 18. Cover Animation Variants
function applyCoverAnimation() {
  const coverAnim = weddingConfig.visual_configs?.cover_animation || 'curtain';
  const curtain = document.getElementById('cover-curtain');
  if (!curtain) return;

  // Remove all cover animation classes
  curtain.classList.remove('cover-fade', 'cover-slide-up');

  if (coverAnim === 'fade') {
    curtain.classList.add('cover-fade');
    curtain.style.transition = 'opacity 1.2s ease, transform 0s 1.2s';
  } else if (coverAnim === 'slide_up') {
    curtain.classList.add('cover-slide-up');
  }
  // 'curtain' is the default behavior already in CSS
}

// 19. Scroll Animation Variants
function applyScrollAnimationVariants() {
  const sections = document.querySelectorAll('.reveal-on-scroll');
  const scrollAnim = weddingConfig.visual_configs?.scroll_animation || 'fade-up';

  // Only apply variant classes if not default
  if (scrollAnim !== 'fade-up') {
    const classMap = {
      'zoom-in': 'reveal-zoom-in',
      'slide-right': 'reveal-slide-right',
      'flip-left': 'reveal-flip-left',
      'fade-down': 'reveal-fade-down'
    };
    const newClass = classMap[scrollAnim];
    if (newClass) {
      sections.forEach(el => {
        el.classList.remove('reveal-on-scroll');
        el.classList.add(newClass);
      });
    }
  }
}

// 20. Ornament Toggles
function applyOrnamentToggles() {
  const v = weddingConfig.visual_configs;

  // Corner flowers
  const cornerFlowers = document.querySelectorAll('.floral-corner');
  cornerFlowers.forEach(el => {
    el.style.display = v.corner_flowers_enabled === false ? 'none' : '';
  });

  // Dividers
  const dividers = document.querySelectorAll('.floral-divider-wrap');
  dividers.forEach(el => {
    el.style.display = v.dividers_enabled === false ? 'none' : '';
  });
}

// 21. Guest Greeting Template
function applyGuestGreetingTemplate() {
  const template = weddingConfig.subject_identity?.guest_greeting_template || 'Kepada Yth. Bapak/Ibu/Sdr/i';
  const greetingEls = document.querySelectorAll('.text-sage-muted.font-body.mb-2');
  greetingEls.forEach(el => {
    if (el.closest('#cover-curtain') || el.closest('.bg-white\\/80')) {
      el.textContent = template;
    }
  });
}

// 22. Love Story with Photos
function renderLoveStoryWithPhotos() {
  const storyContainer = document.getElementById('story-carousel-container');
  if (!storyContainer) return;

  const stories = weddingConfig.love_story;
  if (!stories || stories.length === 0) return;

  const story = stories[currentStoryIndex];
  let photoHtml = '';
  if (story.photo_url) {
    photoHtml = `<div class="mb-4"><img src="${story.photo_url}" alt="${story.title}" class="w-24 h-24 rounded-2xl object-cover mx-auto shadow-md border-2 border-white"></div>`;
  }

  storyContainer.innerHTML = `
    <div class="text-center animate-fade-in py-4">
      ${photoHtml}
      <h3 class="font-heading text-3xl font-medium text-emerald-800 mb-1">${story.title}</h3>
      <p class="font-heading text-lg text-amber-600 italic mb-4">${story.date}</p>
      <p class="text-stone-600 leading-relaxed font-body max-w-sm mx-auto text-sm px-4">${story.description}</p>
    </div>
  `;
}

// 23. QR Code Integration (for Kado modal)
function renderGiftsWithQR() {
  const container = document.getElementById('gift-modal-list');
  if (!container) return;

  const gifts = weddingConfig.gifts;
  let html = '';

  if (gifts.bank_accounts && gifts.bank_accounts.length > 0) {
    html += '<h4 class="font-heading text-xl font-bold mb-3 border-b pb-1 text-emerald-800">Transfer Bank</h4>';
    gifts.bank_accounts.forEach((acc, idx) => {
      html += `
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-3 relative">
          <div class="font-cinzel text-xs tracking-wider text-amber-600 font-bold mb-1">${acc.bank}</div>
          <div class="font-heading text-lg font-bold text-stone-800">${acc.number}</div>
          <div class="text-stone-500 text-xs mb-3">a.n. ${acc.name}</div>
          <div id="qr-bank-${idx}" class="qr-code-container hidden"></div>
          <div class="flex gap-2">
            <button class="bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs px-3 py-1.5 font-medium transition-all" onclick="copyText('${acc.number}', this)">Salin No Rekening</button>
            <button class="bg-stone-600 hover:bg-stone-700 text-white rounded-lg text-xs px-3 py-1.5 font-medium transition-all" onclick="toggleQR('qr-bank-${idx}', '${acc.number}')">QR Code</button>
          </div>
        </div>
      `;
    });
  }

  if (gifts.ewallets && gifts.ewallets.length > 0) {
    html += '<h4 class="font-heading text-xl font-bold mt-4 mb-3 border-b pb-1 text-emerald-800">E-Wallet</h4>';
    gifts.ewallets.forEach((wallet, idx) => {
      html += `
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-3 relative">
          <div class="font-cinzel text-xs tracking-wider text-amber-600 font-bold mb-1">${wallet.provider}</div>
          <div class="font-heading text-lg font-bold text-stone-800">${wallet.number}</div>
          <div class="text-stone-500 text-xs mb-3">a.n. ${wallet.name}</div>
          <div id="qr-wallet-${idx}" class="qr-code-container hidden"></div>
          <div class="flex gap-2">
            <button class="bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs px-3 py-1.5 font-medium transition-all" onclick="copyText('${wallet.number}', this)">Salin Nomor</button>
            <button class="bg-stone-600 hover:bg-stone-700 text-white rounded-lg text-xs px-3 py-1.5 font-medium transition-all" onclick="toggleQR('qr-wallet-${idx}', '${wallet.number}')">QR Code</button>
          </div>
        </div>
      `;
    });
  }

  if (gifts.wishlist && gifts.wishlist.length > 0) {
    html += '<h4 class="font-heading text-xl font-bold mt-4 mb-3 border-b pb-1 text-emerald-800">Wishlist Barang</h4>';
    gifts.wishlist.forEach(item => {
      html += `
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-3 relative text-left">
          <div class="font-heading text-base font-bold text-stone-850">${item.item_name}</div>
          <div class="text-stone-500 text-xs mt-1 font-body">${item.notes || '-'}</div>
        </div>
      `;
    });
  }

  container.innerHTML = html || "<p class='italic opacity-60 text-center'>Tidak ada opsi kado digital.</p>";
}

window.toggleQR = function(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    // Simple QR using a public API if qrcode.js is not loaded
    if (container.innerHTML === '') {
      const img = document.createElement('img');
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
      img.alt = 'QR Code';
      img.style.width = '150px';
      img.style.height = '150px';
      container.appendChild(img);
    }
  } else {
    container.classList.add('hidden');
  }
};

// 24. Analytics Tracking
function trackVisit() {
  if (typeof trackPageView === 'function') {
    trackPageView();
  }
}

// 25. Updated CMS Preview Listener (handles new config fields)
function setupCMSPreviewListenerV2() {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'wedding-config-update') {
      console.log("MESSAGE RECEIVED BY PREVIEW");
      console.log("CMS live update received:", event.data.config);
      weddingConfig = event.data.config;

      // Re-initialize everything
      renderWeddingData();
      renderLoveStoryWithPhotos();
      startCountdown();
      applyDynamicFonts();
      applyOrnamentToggles();
      applyGuestGreetingTemplate();
      renderMapsEmbed();
      applyCoverAnimation();

      // Update background animation
      const bgType = weddingConfig.visual_configs?.animated_bg?.type || 'falling_leaves';
      initAnimatedBackground();

      // Typography animations
      initTypographyAnimations();

      // Load music if URL changed
      const newUrl = weddingConfig.media_assets?.audio?.url || "assets/audio/wedding-piano.mp3";
      if (newUrl) {
        if (backgroundMusic) {
          const currentUrl = backgroundMusic.src;
          if (currentUrl !== newUrl && !currentUrl.endsWith(newUrl)) {
            backgroundMusic.src = newUrl;
            backgroundMusic.play().then(() => {
              isMusicPlaying = true;
              updateMusicButtonUI(true);
            }).catch(err => console.warn("Live music preview autoplay blocked:", err));
          }
        } else {
          initMusic();
        }
      }

      // QR gifts
      renderGiftsWithQR();
    }

    // Handle theme apply message
    if (event.data && event.data.type === 'apply-theme') {
      if (typeof applyTheme === 'function') {
        applyTheme(event.data.themeId);
      }
    }
  });
}

// Override original renderLoveStory to support photos
const originalRenderLoveStory = renderLoveStory;
renderLoveStory = function() {
  renderLoveStoryWithPhotos();
  // Still render dots from original
  const dotContainer = document.getElementById('story-dots');
  if (!dotContainer) return;
  const stories = weddingConfig.love_story;
  if (!stories || stories.length === 0) return;
  dotContainer.innerHTML = stories.map((_, idx) => `
    <span class="dot-indicator ${idx === currentStoryIndex ? 'active' : ''}" onclick="setStoryIndex(${idx})"></span>
  `).join('');
};

// Override original renderGifts to include QR support
renderGifts = renderGiftsWithQR;

// 26. Initialization On Load (Updated)
document.addEventListener('DOMContentLoaded', () => {
  loadEmbeddedConfig();
  initSupabase();
  applyDynamicFonts();
  initThemeSystem();
  renderWeddingData();
  startCountdown();
  initAnimatedBackground();
  initMusic();
  setupInteractions();
  parseGuestGreeting();
  setupNavigation();
  loadMessages();
  setupCMSPreviewListenerV2();
  renderMapsEmbed();
  applyCoverAnimation();
  initTypographyAnimations();
  applyOrnamentToggles();
  applyGuestGreetingTemplate();
  trackVisit();
  initViewToggle();
  
  // Reveal content smoothly after all data is populated
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 150);
});

// 27. Viewport Toggle Button Logic
function initViewToggle() {
  if (document.getElementById('desktop-view-toggle-btn')) return;

  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'desktop-view-toggle-btn';
  toggleBtn.className = 'view-toggle-btn';
  
  // Check local storage for initial state
  let isDesktopView = localStorage.getItem('desktop_view_enabled') === 'true';
  
  const updateUI = () => {
    if (isDesktopView) {
      document.body.classList.add('desktop-view');
      toggleBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>Versi Mobile</span>
      `;
      setViewport('desktop');
    } else {
      document.body.classList.remove('desktop-view');
      toggleBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Versi Desktop</span>
      `;
      setViewport('mobile');
    }
  };

  toggleBtn.addEventListener('click', () => {
    isDesktopView = !isDesktopView;
    localStorage.setItem('desktop_view_enabled', isDesktopView);
    updateUI();
    window.dispatchEvent(new Event('resize'));
  });

  document.body.appendChild(toggleBtn);
  updateUI();
}

function setViewport(mode) {
  let viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    document.head.appendChild(viewport);
  }
  if (mode === 'desktop') {
    viewport.content = 'width=1024, initial-scale=0.3, maximum-scale=2.0, user-scalable=yes';
  } else {
    viewport.content = 'width=device-width, initial-scale=1.0';
  }
}



